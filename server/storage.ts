import { 
  users, waitlistEntries, chatMessages, socialMediaPosts, socialMediaAccounts,
  type User, type InsertUser, type WaitlistEntry, type InsertWaitlist, 
  type ChatMessage, type InsertChatMessage,
  type SocialMediaPost, type InsertSocialMediaPost,
  type SocialMediaAccount, type InsertSocialMediaAccount
} from "@shared/schema";
import { db } from "./db";
import { eq, desc } from "drizzle-orm";

export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  createWaitlistEntry(entry: InsertWaitlist): Promise<WaitlistEntry>;
  getWaitlistEntries(): Promise<WaitlistEntry[]>;
  getWaitlistEntryByEmail(email: string): Promise<WaitlistEntry | undefined>;
  createChatMessage(message: InsertChatMessage): Promise<ChatMessage>;
  getChatMessages(): Promise<ChatMessage[]>;
  markChatMessageAsRead(id: number): Promise<void>;
  // Social Media Methods
  createSocialMediaPost(post: InsertSocialMediaPost): Promise<SocialMediaPost>;
  getSocialMediaPosts(): Promise<SocialMediaPost[]>;
  getSocialMediaPost(id: number): Promise<SocialMediaPost | undefined>;
  updateSocialMediaPost(id: number, updates: Partial<SocialMediaPost>): Promise<SocialMediaPost>;
  deleteSocialMediaPost(id: number): Promise<void>;
  createSocialMediaAccount(account: InsertSocialMediaAccount): Promise<SocialMediaAccount>;
  getSocialMediaAccounts(): Promise<SocialMediaAccount[]>;
  getSocialMediaAccount(id: number): Promise<SocialMediaAccount | undefined>;
  updateSocialMediaAccount(id: number, updates: Partial<SocialMediaAccount>): Promise<SocialMediaAccount>;
  deleteSocialMediaAccount(id: number): Promise<void>;
}

export class DatabaseStorage implements IStorage {
  async getUser(id: number): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.id, id));
    return user || undefined;
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.username, username));
    return user || undefined;
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const [user] = await db
      .insert(users)
      .values(insertUser)
      .returning();
    return user;
  }

  async createWaitlistEntry(insertEntry: InsertWaitlist): Promise<WaitlistEntry> {
    const [entry] = await db
      .insert(waitlistEntries)
      .values(insertEntry)
      .returning();
    return entry;
  }

  async getWaitlistEntries(): Promise<WaitlistEntry[]> {
    return await db.select().from(waitlistEntries).orderBy(waitlistEntries.createdAt);
  }

  async getWaitlistEntryByEmail(email: string): Promise<WaitlistEntry | undefined> {
    const [entry] = await db.select().from(waitlistEntries).where(eq(waitlistEntries.email, email));
    return entry || undefined;
  }

  async createChatMessage(insertMessage: InsertChatMessage): Promise<ChatMessage> {
    const [message] = await db
      .insert(chatMessages)
      .values(insertMessage)
      .returning();
    return message;
  }

  async getChatMessages(): Promise<ChatMessage[]> {
    return await db.select().from(chatMessages).orderBy(desc(chatMessages.createdAt));
  }

  async markChatMessageAsRead(id: number): Promise<void> {
    await db.update(chatMessages)
      .set({ isRead: true })
      .where(eq(chatMessages.id, id));
  }

  // Social Media Methods Implementation
  async createSocialMediaPost(insertPost: InsertSocialMediaPost): Promise<SocialMediaPost> {
    const [post] = await db
      .insert(socialMediaPosts)
      .values(insertPost)
      .returning();
    return post;
  }

  async getSocialMediaPosts(): Promise<SocialMediaPost[]> {
    return await db.select().from(socialMediaPosts).orderBy(desc(socialMediaPosts.createdAt));
  }

  async getSocialMediaPost(id: number): Promise<SocialMediaPost | undefined> {
    const [post] = await db.select().from(socialMediaPosts).where(eq(socialMediaPosts.id, id));
    return post || undefined;
  }

  async updateSocialMediaPost(id: number, updates: Partial<SocialMediaPost>): Promise<SocialMediaPost> {
    const [post] = await db
      .update(socialMediaPosts)
      .set(updates)
      .where(eq(socialMediaPosts.id, id))
      .returning();
    return post;
  }

  async deleteSocialMediaPost(id: number): Promise<void> {
    await db.delete(socialMediaPosts).where(eq(socialMediaPosts.id, id));
  }

  async createSocialMediaAccount(insertAccount: InsertSocialMediaAccount): Promise<SocialMediaAccount> {
    const [account] = await db
      .insert(socialMediaAccounts)
      .values(insertAccount)
      .returning();
    return account;
  }

  async getSocialMediaAccounts(): Promise<SocialMediaAccount[]> {
    return await db.select().from(socialMediaAccounts).where(eq(socialMediaAccounts.isActive, true));
  }

  async getSocialMediaAccount(id: number): Promise<SocialMediaAccount | undefined> {
    const [account] = await db.select().from(socialMediaAccounts).where(eq(socialMediaAccounts.id, id));
    return account || undefined;
  }

  async updateSocialMediaAccount(id: number, updates: Partial<SocialMediaAccount>): Promise<SocialMediaAccount> {
    const [account] = await db
      .update(socialMediaAccounts)
      .set(updates)
      .where(eq(socialMediaAccounts.id, id))
      .returning();
    return account;
  }

  async deleteSocialMediaAccount(id: number): Promise<void> {
    await db.delete(socialMediaAccounts).where(eq(socialMediaAccounts.id, id));
  }
}

export const storage = new DatabaseStorage();
