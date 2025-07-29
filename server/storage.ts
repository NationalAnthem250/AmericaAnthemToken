import { users, waitlistEntries, chatMessages, type User, type InsertUser, type WaitlistEntry, type InsertWaitlist, type ChatMessage, type InsertChatMessage } from "@shared/schema";
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
}

export const storage = new DatabaseStorage();
