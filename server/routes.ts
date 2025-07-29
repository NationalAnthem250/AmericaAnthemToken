import type { Express, Request, Response } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertWaitlistSchema, insertChatMessageSchema } from "@shared/schema";
import { fromZodError } from "zod-validation-error";
import { sendWaitlistNotification, sendChatNotification } from "./email";

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
      console.error(`Error creating waitlist entry: ${error.message}`);
      res.status(500).json({ error: "Failed to join waitlist" });
    }
  });

  app.get("/api/waitlist", async (req: Request, res: Response) => {
    try {
      const entries = await storage.getWaitlistEntries();
      res.json({ entries, count: entries.length });
    } catch (error: any) {
      console.error(`Error fetching waitlist entries: ${error.message}`);
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
      console.error(`Error creating chat message: ${error.message}`);
      res.status(500).json({ error: "Failed to send message" });
    }
  });

  app.get("/api/chat", async (req: Request, res: Response) => {
    try {
      const messages = await storage.getChatMessages();
      res.json({ messages });
    } catch (error: any) {
      console.error(`Error fetching chat messages: ${error.message}`);
      res.status(500).json({ error: "Failed to fetch messages" });
    }
  });

  app.patch("/api/chat/:id/read", async (req: Request, res: Response) => {
    try {
      const id = parseInt(req.params.id);
      await storage.markChatMessageAsRead(id);
      res.json({ success: true });
    } catch (error: any) {
      console.error(`Error marking message as read: ${error.message}`);
      res.status(500).json({ error: "Failed to mark message as read" });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
