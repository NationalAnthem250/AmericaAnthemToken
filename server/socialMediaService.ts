import { storage } from "./storage";
import type { InsertSocialMediaPost, SocialMediaPost, SocialMediaAccount } from "@shared/schema";

// Supported social media platforms
export const SUPPORTED_PLATFORMS = [
  'facebook',
  'instagram', 
  'twitter',
  'linkedin',
  'tiktok',
  'youtube',
  'reddit',
  'pinterest',
  'telegram'
] as const;

export type SupportedPlatform = typeof SUPPORTED_PLATFORMS[number];

interface AyrsharePostData {
  post: string;
  platforms: string[];
  media_urls?: string[];
  schedule_date?: string;
  shorten_links?: boolean;
}

interface AyrshareResponse {
  status: string;
  errors?: any[];
  postIds?: Record<string, string>;
  id?: string;
  refId?: string;
  post?: string;
}

export class SocialMediaService {
  private ayrshareApiKey: string | undefined;
  private ayrshareApiUrl = 'https://app.ayrshare.com/api';

  constructor() {
    this.ayrshareApiKey = process.env.AYRSHARE_API_KEY;
  }

  private async makeAyrshareRequest(endpoint: string, data: any, method = 'POST'): Promise<AyrshareResponse> {
    if (!this.ayrshareApiKey) {
      throw new Error('Ayrshare API key not configured. Please set AYRSHARE_API_KEY environment variable.');
    }

    const response = await fetch(`${this.ayrshareApiUrl}${endpoint}`, {
      method,
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.ayrshareApiKey}`
      },
      body: method !== 'GET' ? JSON.stringify(data) : undefined
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Ayrshare API error: ${response.status} - ${errorText}`);
    }

    return response.json();
  }

  async postToSocialMedia(postData: InsertSocialMediaPost): Promise<SocialMediaPost> {
    try {
      // Validate and preprocess media URLs
      if (postData.mediaUrls && postData.mediaUrls.length > 0) {
        // Validate all media URLs
        for (const url of postData.mediaUrls) {
          const isValid = await this.validateMediaUrl(url);
          if (!isValid) {
            throw new Error(`Invalid media URL: ${url}`);
          }
        }
        
        // Preprocess media for each platform
        if (postData.platforms) {
          const processedMedia: string[] = [];
          for (const platform of postData.platforms) {
            const platformMedia = await this.preprocessMediaForPlatform(
              platform as SupportedPlatform, 
              postData.mediaUrls
            );
            processedMedia.push(...platformMedia);
          }
          postData.mediaUrls = Array.from(new Set(processedMedia)); // Remove duplicates
        }
      }

      // Determine initial status based on scheduling
      const isScheduled = !!postData.scheduledFor;
      const initialStatus = isScheduled ? 'scheduled' : 'pending';

      // Create post record in database first
      const post = await storage.createSocialMediaPost({
        ...postData,
        status: initialStatus
      });

      // Prepare data for Ayrshare
      const ayrshareData: AyrsharePostData = {
        post: postData.content,
        platforms: postData.platforms || [],
        media_urls: postData.mediaUrls || undefined,
        shorten_links: true
      };

      // Add schedule date if provided
      if (postData.scheduledFor) {
        ayrshareData.schedule_date = new Date(postData.scheduledFor).toISOString();
      }

      // Make API request to Ayrshare
      const response = await this.makeAyrshareRequest('/post', ayrshareData);

      // Update post with response - handle scheduling vs immediate posting
      const updatedPost = await storage.updateSocialMediaPost(post.id, {
        status: isScheduled ? 'scheduled' : (response.status === 'success' ? 'posted' : 'failed'),
        platformResponses: response as any,
        postedAt: (!isScheduled && response.status === 'success') ? new Date() : undefined,
        errorMessage: response.errors ? JSON.stringify(response.errors) : undefined
      });

      return updatedPost;
    } catch (error: any) {
      // Log error for debugging (in production, use proper logging service)
      throw error;
    }
  }

  async schedulePost(postData: InsertSocialMediaPost, scheduleDate: Date): Promise<SocialMediaPost> {
    return this.postToSocialMedia({
      ...postData,
      scheduledFor: scheduleDate,
      status: 'scheduled'
    });
  }

  async deleteScheduledPost(postId: number): Promise<void> {
    const post = await storage.getSocialMediaPost(postId);
    if (!post) {
      throw new Error('Post not found');
    }

    // Try to delete from Ayrshare if we have a platform response ID
    // This handles both scheduled and posted content
    if (post.platformResponses) {
      const response = post.platformResponses as any;
      if (response.id) {
        try {
          await this.makeAyrshareRequest(`/post/${response.id}`, {}, 'DELETE');
        } catch (error) {
          // If deletion from Ayrshare fails, still delete locally
          // The post might already be deleted on Ayrshare
        }
      }
    }

    await storage.deleteSocialMediaPost(postId);
  }

  async getPostAnalytics(postId: number): Promise<any> {
    const post = await storage.getSocialMediaPost(postId);
    if (!post || !post.platformResponses) {
      throw new Error('Post not found or not yet posted');
    }

    const response = post.platformResponses as any;
    if (response.id) {
      return this.makeAyrshareRequest(`/analytics/post/${response.id}`, {}, 'GET');
    }

    return null;
  }

  async validateMediaUrl(url: string): Promise<boolean> {
    try {
      const response = await fetch(url, { method: 'HEAD' });
      const contentType = response.headers.get('content-type');
      
      if (!contentType) return false;
      
      // Check if it's a valid media type
      const validTypes = ['image/', 'video/', 'audio/'];
      return validTypes.some(type => contentType.startsWith(type));
    } catch {
      return false;
    }
  }

  async connectSocialAccount(platform: SupportedPlatform, credentials: any): Promise<SocialMediaAccount> {
    // For Ayrshare, accounts are managed through their dashboard
    // This method would store the account details locally
    const account = await storage.createSocialMediaAccount({
      platform,
      accountName: credentials.accountName || platform,
      apiKey: this.ayrshareApiKey,
      accessToken: credentials.accessToken,
      refreshToken: credentials.refreshToken,
      accountId: credentials.accountId,
      profileUrl: credentials.profileUrl,
      isActive: true,
      metadata: credentials.metadata
    });

    return account;
  }

  async disconnectSocialAccount(accountId: number): Promise<void> {
    await storage.updateSocialMediaAccount(accountId, {
      isActive: false
    });
  }

  async getConnectedAccounts(): Promise<SocialMediaAccount[]> {
    return storage.getSocialMediaAccounts();
  }

  // Helper method to check if API key is configured
  isConfigured(): boolean {
    return !!this.ayrshareApiKey;
  }

  // Method to handle different media types for different platforms
  async preprocessMediaForPlatform(platform: SupportedPlatform, mediaUrls: string[]): Promise<string[]> {
    // Platform-specific media requirements
    const platformLimits: Record<string, { maxImages: number, maxVideos: number }> = {
      instagram: { maxImages: 10, maxVideos: 1 },
      twitter: { maxImages: 4, maxVideos: 1 },
      facebook: { maxImages: 10, maxVideos: 1 },
      linkedin: { maxImages: 9, maxVideos: 1 },
      tiktok: { maxImages: 0, maxVideos: 1 },
      youtube: { maxImages: 0, maxVideos: 1 }
    };

    const limits = platformLimits[platform] || { maxImages: 4, maxVideos: 1 };
    
    // Filter and limit media based on platform requirements
    let imageCount = 0;
    let videoCount = 0;
    
    return mediaUrls.filter(url => {
      const isVideo = url.match(/\.(mp4|mov|avi|wmv|flv|mkv|webm)$/i);
      const isImage = url.match(/\.(jpg|jpeg|png|gif|bmp|webp)$/i);
      
      if (isVideo && videoCount < limits.maxVideos) {
        videoCount++;
        return true;
      }
      if (isImage && imageCount < limits.maxImages) {
        imageCount++;
        return true;
      }
      return false;
    });
  }
}

export const socialMediaService = new SocialMediaService();