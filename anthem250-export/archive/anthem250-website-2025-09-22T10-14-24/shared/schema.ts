import { pgTable, text, serial, integer, boolean, varchar, timestamp, json, jsonb } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const waitlistEntries = pgTable("waitlist_entries", {
  id: serial("id").primaryKey(),
  email: varchar("email", { length: 255 }).notNull().unique(),
  name: varchar("name", { length: 100 }).notNull(),
  phone: varchar("phone", { length: 20 }),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  metadata: json("metadata"),
});

export const chatMessages = pgTable("chat_messages", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 100 }).notNull(),
  email: varchar("email", { length: 255 }).notNull(),
  message: text("message").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  isRead: boolean("is_read").default(false),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export const insertWaitlistSchema = createInsertSchema(waitlistEntries).pick({
  email: true,
  name: true,
  phone: true,
  metadata: true,
});

export const insertChatMessageSchema = createInsertSchema(chatMessages).pick({
  name: true,
  email: true,
  message: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;
export type InsertWaitlist = z.infer<typeof insertWaitlistSchema>;
export type WaitlistEntry = typeof waitlistEntries.$inferSelect;
export type InsertChatMessage = z.infer<typeof insertChatMessageSchema>;
export type ChatMessage = typeof chatMessages.$inferSelect;

// Social Media Posting Schema
export const socialMediaPosts = pgTable("social_media_posts", {
  id: serial("id").primaryKey(),
  content: text("content").notNull(),
  mediaUrls: text("media_urls").array(),
  platforms: text("platforms").array().notNull(),
  status: text("status").notNull().default("draft"), // draft, scheduled, posted, failed
  scheduledFor: timestamp("scheduled_for"),
  postedAt: timestamp("posted_at"),
  platformResponses: jsonb("platform_responses"),
  errorMessage: text("error_message"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull()
});

export const insertSocialMediaPostSchema = createInsertSchema(socialMediaPosts).omit({
  id: true,
  createdAt: true,
  updatedAt: true,
  postedAt: true,
  platformResponses: true
});
export type InsertSocialMediaPost = z.infer<typeof insertSocialMediaPostSchema>;
export type SocialMediaPost = typeof socialMediaPosts.$inferSelect;

export const socialMediaAccounts = pgTable("social_media_accounts", {
  id: serial("id").primaryKey(),
  platform: text("platform").notNull(), // facebook, instagram, twitter, linkedin, threads, tiktok, youtube, snapchat, reddit, pinterest, telegram, gettr, truthsocial
  accountName: text("account_name").notNull(),
  apiKey: text("api_key"),
  accessToken: text("access_token"),
  refreshToken: text("refresh_token"),
  accountId: text("account_id"),
  profileUrl: text("profile_url"),
  isActive: boolean("is_active").default(true).notNull(),
  lastSync: timestamp("last_sync"),
  metadata: jsonb("metadata"),
  createdAt: timestamp("created_at").defaultNow().notNull()
});

export const insertSocialMediaAccountSchema = createInsertSchema(socialMediaAccounts).omit({
  id: true,
  createdAt: true,
  lastSync: true
});
export type InsertSocialMediaAccount = z.infer<typeof insertSocialMediaAccountSchema>;
export type SocialMediaAccount = typeof socialMediaAccounts.$inferSelect;

// Social Media Activities/Engagement Tracking
export const socialMediaActivities = pgTable("social_media_activities", {
  id: serial("id").primaryKey(),
  postId: integer("post_id").references(() => socialMediaPosts.id),
  platform: text("platform").notNull(),
  activityType: text("activity_type").notNull(), // like, comment, reply, share, mention
  actorName: text("actor_name"),
  actorHandle: text("actor_handle"),
  actorProfileUrl: text("actor_profile_url"),
  content: text("content"), // For comments/replies
  platformActivityId: text("platform_activity_id"), // Unique ID from the platform
  emailNotificationSent: boolean("email_notification_sent").default(false),
  metadata: jsonb("metadata"), // Additional platform-specific data
  createdAt: timestamp("created_at").defaultNow().notNull()
});

export const insertSocialMediaActivitySchema = createInsertSchema(socialMediaActivities).omit({
  id: true,
  createdAt: true,
  emailNotificationSent: true
});
export type InsertSocialMediaActivity = z.infer<typeof insertSocialMediaActivitySchema>;
export type SocialMediaActivity = typeof socialMediaActivities.$inferSelect;
