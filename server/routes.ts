import type { Express, Request, Response } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertWaitlistSchema, insertChatMessageSchema, insertSocialMediaPostSchema, insertSocialMediaAccountSchema } from "@shared/schema";
import { fromZodError } from "zod-validation-error";
import { sendWaitlistNotification, sendChatNotification } from "./email";
import { socialMediaService } from "./socialMediaService";

export async function registerRoutes(app: Express): Promise<Server> {
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

  // Social Media endpoints
  app.post("/api/social-media/post", async (req: Request, res: Response) => {
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

  app.post("/api/social-media/schedule", async (req: Request, res: Response) => {
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

  app.get("/api/social-media/posts", async (req: Request, res: Response) => {
    try {
      const posts = await storage.getSocialMediaPosts();
      res.json({ posts });
    } catch (error: any) {
      // Log error internally without exposing details
      res.status(500).json({ error: "Failed to fetch social media posts" });
    }
  });

  app.get("/api/social-media/post/:id", async (req: Request, res: Response) => {
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

  app.delete("/api/social-media/post/:id", async (req: Request, res: Response) => {
    try {
      const id = parseInt(req.params.id);
      await socialMediaService.deleteScheduledPost(id);
      res.json({ success: true });
    } catch (error: any) {
      // Log error internally without exposing details
      res.status(500).json({ error: error.message || "Failed to delete post" });
    }
  });

  app.get("/api/social-media/post/:id/analytics", async (req: Request, res: Response) => {
    try {
      const id = parseInt(req.params.id);
      const analytics = await socialMediaService.getPostAnalytics(id);
      res.json({ analytics });
    } catch (error: any) {
      // Log error internally without exposing details
      res.status(500).json({ error: error.message || "Failed to fetch analytics" });
    }
  });

  app.get("/api/social-media/accounts", async (req: Request, res: Response) => {
    try {
      const accounts = await storage.getSocialMediaAccounts();
      res.json({ accounts });
    } catch (error: any) {
      // Log error internally without exposing details
      res.status(500).json({ error: "Failed to fetch social media accounts" });
    }
  });

  app.post("/api/social-media/accounts/connect", async (req: Request, res: Response) => {
    try {
      const { platform, credentials } = req.body;
      const account = await socialMediaService.connectSocialAccount(platform, credentials);
      res.json({ success: true, account });
    } catch (error: any) {
      // Log error internally without exposing details
      res.status(500).json({ error: error.message || "Failed to connect social media account" });
    }
  });

  app.delete("/api/social-media/accounts/:id", async (req: Request, res: Response) => {
    try {
      const id = parseInt(req.params.id);
      await socialMediaService.disconnectSocialAccount(id);
      res.json({ success: true });
    } catch (error: any) {
      // Log error internally without exposing details
      res.status(500).json({ error: "Failed to disconnect account" });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
