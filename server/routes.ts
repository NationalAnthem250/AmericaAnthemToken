import type { Express, Request, Response } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertWaitlistSchema, insertChatMessageSchema, insertSocialMediaPostSchema, insertSocialMediaAccountSchema } from "@shared/schema";
import { fromZodError } from "zod-validation-error";
import { sendWaitlistNotification, sendChatNotification, sendEngagementNotification } from "./email";
import { socialMediaService } from "./socialMediaService";
import { setupAuth, requireAuth } from "./auth";
import { ObjectStorageService, ObjectNotFoundError } from "./objectStorage";
import { ObjectPermission } from "./objectAcl";

export async function registerRoutes(app: Express): Promise<Server> {
  // Setup authentication first (sets up /api/register, /api/login, /api/logout, /api/user)
  setupAuth(app);
  // Health check endpoint
  app.get("/api/health", (req, res) => {
    res.json({ ok: true });
  });

  // Waitlist endpoints
  app.post("/api/waitlist", async (req: Request, res: Response) => {
    try {
      const validatedData = insertWaitlistSchema.parse(req.body);
      
      // Check if email already exists
      const existingEntry = await storage.getWaitlistEntryByEmail(validatedData.email);
      if (existingEntry) {
        return res.status(400).json({ error: "Email already registered for waitlist" });
      }

      const entry = await storage.createWaitlistEntry(validatedData);
      
      // Send email notification to admin
      await sendWaitlistNotification(entry);
      
      res.json({ success: true, entry });
    } catch (error: any) {
      if (error.name === "ZodError") {
        const validationError = fromZodError(error);
        return res.status(400).json({ error: validationError.message });
      }
      // Log error internally without exposing details
      res.status(500).json({ error: "Failed to join waitlist" });
    }
  });

  app.get("/api/waitlist", async (req: Request, res: Response) => {
    try {
      const entries = await storage.getWaitlistEntries();
      res.json({ entries, count: entries.length });
    } catch (error: any) {
      // Log error internally without exposing details
      res.status(500).json({ error: "Failed to fetch waitlist entries" });
    }
  });

  // Chat message endpoints
  app.post("/api/chat", async (req: Request, res: Response) => {
    try {
      const validatedData = insertChatMessageSchema.parse(req.body);
      const message = await storage.createChatMessage(validatedData);
      
      // Send email notification to admin
      await sendChatNotification(message);
      
      res.json({ success: true, message });
    } catch (error: any) {
      if (error.name === "ZodError") {
        const validationError = fromZodError(error);
        return res.status(400).json({ error: validationError.message });
      }
      // Log error internally without exposing details
      res.status(500).json({ error: "Failed to send message" });
    }
  });

  app.get("/api/chat", async (req: Request, res: Response) => {
    try {
      const messages = await storage.getChatMessages();
      res.json({ messages });
    } catch (error: any) {
      // Log error internally without exposing details
      res.status(500).json({ error: "Failed to fetch messages" });
    }
  });

  app.patch("/api/chat/:id/read", async (req: Request, res: Response) => {
    try {
      const id = parseInt(req.params.id);
      await storage.markChatMessageAsRead(id);
      res.json({ success: true });
    } catch (error: any) {
      // Log error internally without exposing details
      res.status(500).json({ error: "Failed to mark message as read" });
    }
  });

  // Simple auth middleware for social media endpoints
  const requireAuth = (req: Request, res: Response, next: any) => {
    const authToken = req.headers.authorization?.replace('Bearer ', '');
    const adminToken = process.env.SOCIAL_MEDIA_ADMIN_TOKEN;
    
    // In production, use proper authentication
    // For now, check for admin token or allow if no token is set
    if (adminToken && authToken !== adminToken) {
      return res.status(401).json({ error: 'Unauthorized' });
    }
    next();
  };

  // Endpoint for serving private objects (uploaded files)
  app.get("/objects/:objectPath(*)", requireAuth, async (req, res) => {
    // Gets the authenticated user id
    const userId = (req as any).user?.id?.toString();
    const objectStorageService = new ObjectStorageService();
    try {
      const objectFile = await objectStorageService.getObjectEntityFile(
        req.path,
      );
      const canAccess = await objectStorageService.canAccessObjectEntity({
        objectFile,
        userId: userId,
        requestedPermission: ObjectPermission.READ,
      });
      if (!canAccess) {
        return res.sendStatus(401);
      }
      objectStorageService.downloadObject(objectFile, res);
    } catch (error) {
      console.error("Error checking object access:", error);
      if (error instanceof ObjectNotFoundError) {
        return res.sendStatus(404);
      }
      return res.sendStatus(500);
    }
  });

  // Endpoint for getting the upload URL for a file
  app.post("/api/social-media/upload-url", requireAuth, async (req, res) => {
    try {
      const objectStorageService = new ObjectStorageService();
      const uploadURL = await objectStorageService.getObjectEntityUploadURL();
      res.json({ uploadURL });
    } catch (error: any) {
      console.error('Error getting upload URL:', error);
      res.status(500).json({ error: error.message || 'Failed to get upload URL' });
    }
  });

  // Endpoint for setting file metadata after upload
  app.post("/api/social-media/upload-complete", requireAuth, async (req, res) => {
    if (!req.body.uploadURL) {
      return res.status(400).json({ error: "uploadURL is required" });
    }

    // Gets the authenticated user id
    const userId = (req as any).user?.id?.toString();

    try {
      const objectStorageService = new ObjectStorageService();
      const objectPath = await objectStorageService.trySetObjectEntityAclPolicy(
        req.body.uploadURL,
        {
          owner: userId || 'system',
          // Public visibility for social media posts
          visibility: "public",
        },
      );

      // Return the normalized path that can be used with Ayrshare
      const publicUrl = `${req.protocol}://${req.get('host')}${objectPath}`;
      
      res.status(200).json({
        objectPath: objectPath,
        publicUrl: publicUrl
      });
    } catch (error: any) {
      console.error("Error setting file ACL:", error);
      res.status(500).json({ error: error.message || "Internal server error" });
    }
  });

  // Social Media endpoints
  app.post("/api/social-media/post", requireAuth, async (req: Request, res: Response) => {
    try {
      const validatedData = insertSocialMediaPostSchema.parse(req.body);
      
      if (!socialMediaService.isConfigured()) {
        return res.status(400).json({ 
          error: "Social media service not configured. Please add AYRSHARE_API_KEY to environment variables." 
        });
      }

      const post = await socialMediaService.postToSocialMedia(validatedData);
      res.json({ success: true, post });
    } catch (error: any) {
      if (error.name === "ZodError") {
        const validationError = fromZodError(error);
        return res.status(400).json({ error: validationError.message });
      }
      // Log error internally without exposing details
      res.status(500).json({ error: error.message || "Failed to post to social media" });
    }
  });

  app.post("/api/social-media/schedule", requireAuth, async (req: Request, res: Response) => {
    try {
      const { postData, scheduleDate } = req.body;
      const validatedData = insertSocialMediaPostSchema.parse(postData);
      
      if (!socialMediaService.isConfigured()) {
        return res.status(400).json({ 
          error: "Social media service not configured. Please add AYRSHARE_API_KEY to environment variables." 
        });
      }

      const post = await socialMediaService.schedulePost(validatedData, new Date(scheduleDate));
      res.json({ success: true, post });
    } catch (error: any) {
      if (error.name === "ZodError") {
        const validationError = fromZodError(error);
        return res.status(400).json({ error: validationError.message });
      }
      // Log error internally without exposing details
      res.status(500).json({ error: error.message || "Failed to schedule post" });
    }
  });

  app.get("/api/social-media/posts", requireAuth, async (req: Request, res: Response) => {
    try {
      const posts = await storage.getSocialMediaPosts();
      res.json({ posts });
    } catch (error: any) {
      // Log error internally without exposing details
      res.status(500).json({ error: "Failed to fetch social media posts" });
    }
  });

  app.get("/api/social-media/post/:id", requireAuth, async (req: Request, res: Response) => {
    try {
      const id = parseInt(req.params.id);
      const post = await storage.getSocialMediaPost(id);
      
      if (!post) {
        return res.status(404).json({ error: "Post not found" });
      }
      
      res.json({ post });
    } catch (error: any) {
      // Log error internally without exposing details
      res.status(500).json({ error: "Failed to fetch post" });
    }
  });

  app.delete("/api/social-media/post/:id", requireAuth, async (req: Request, res: Response) => {
    try {
      const id = parseInt(req.params.id);
      await socialMediaService.deleteScheduledPost(id);
      res.json({ success: true });
    } catch (error: any) {
      // Log error internally without exposing details
      res.status(500).json({ error: error.message || "Failed to delete post" });
    }
  });

  app.get("/api/social-media/post/:id/analytics", requireAuth, async (req: Request, res: Response) => {
    try {
      const id = parseInt(req.params.id);
      const analytics = await socialMediaService.getPostAnalytics(id);
      res.json({ analytics });
    } catch (error: any) {
      // Log error internally without exposing details
      res.status(500).json({ error: error.message || "Failed to fetch analytics" });
    }
  });

  app.get("/api/social-media/accounts", requireAuth, async (req: Request, res: Response) => {
    try {
      const accounts = await storage.getSocialMediaAccounts();
      res.json({ accounts });
    } catch (error: any) {
      // Log error internally without exposing details
      res.status(500).json({ error: "Failed to fetch social media accounts" });
    }
  });

  app.post("/api/social-media/accounts/connect", requireAuth, async (req: Request, res: Response) => {
    try {
      const validatedData = insertSocialMediaAccountSchema.parse(req.body);
      const account = await socialMediaService.connectSocialAccount(
        validatedData.platform as any, 
        validatedData
      );
      res.json({ success: true, account });
    } catch (error: any) {
      // Log error internally without exposing details
      res.status(500).json({ error: error.message || "Failed to connect social media account" });
    }
  });

  app.delete("/api/social-media/accounts/:id", requireAuth, async (req: Request, res: Response) => {
    try {
      const id = parseInt(req.params.id);
      await socialMediaService.disconnectSocialAccount(id);
      res.json({ success: true });
    } catch (error: any) {
      // Log error internally without exposing details
      res.status(500).json({ error: "Failed to disconnect account" });
    }
  });

  // Webhook endpoint for Ayrshare engagement notifications
  app.post("/api/webhooks/social-media/engagement", async (req: Request, res: Response) => {
    try {
      const { platform, type, postId, actor, content, metadata } = req.body;
      
      // Create activity record
      const activity = await storage.createSocialMediaActivity({
        postId: postId ? parseInt(postId) : null,
        platform,
        activityType: type, // like, comment, reply, share, mention
        actorName: actor?.name,
        actorHandle: actor?.handle,
        actorProfileUrl: actor?.profileUrl,
        content: content,
        platformActivityId: metadata?.activityId,
        metadata
      });
      
      // Send email notification
      await sendEngagementNotification(activity);
      
      // Mark as notified
      await storage.markActivityEmailSent(activity.id);
      
      res.json({ success: true, activityId: activity.id });
    } catch (error: any) {
      console.error('Webhook error:', error);
      res.status(500).json({ error: "Failed to process engagement webhook" });
    }
  });

  // Get social media activities/engagement
  app.get("/api/social-media/activities", requireAuth, async (req: Request, res: Response) => {
    try {
      const { postId } = req.query;
      
      let activities;
      if (postId) {
        activities = await storage.getSocialMediaActivitiesByPost(parseInt(postId as string));
      } else {
        activities = await storage.getSocialMediaActivities();
      }
      
      res.json({ activities });
    } catch (error: any) {
      res.status(500).json({ error: "Failed to fetch activities" });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
