import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { Calendar, Clock, Send, Image, Video, Music, X, Plus, Settings, BarChart, Trash2, Eye, Globe2, MessageSquare, Upload, FileImage, FileVideo, FileAudio } from "lucide-react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaTiktok, FaYoutube, FaReddit, FaPinterest, FaTelegram, FaGlobe, FaSnapchat } from "react-icons/fa";
import { SiThreads } from "react-icons/si";
import type { SocialMediaPost } from "@shared/schema";

const PLATFORMS = [
  { id: 'facebook', name: 'Facebook', icon: FaFacebook, color: 'bg-blue-600' },
  { id: 'twitter', name: 'X (Twitter)', icon: FaTwitter, color: 'bg-black' },
  { id: 'instagram', name: 'Instagram', icon: FaInstagram, color: 'bg-gradient-to-r from-purple-600 to-pink-600' },
  { id: 'linkedin', name: 'LinkedIn', icon: FaLinkedin, color: 'bg-blue-700' },
  { id: 'threads', name: 'Threads', icon: SiThreads, color: 'bg-black' },
  { id: 'tiktok', name: 'TikTok', icon: FaTiktok, color: 'bg-black' },
  { id: 'youtube', name: 'YouTube', icon: FaYoutube, color: 'bg-red-600' },
  { id: 'snapchat', name: 'Snapchat', icon: FaSnapchat, color: 'bg-yellow-400' },
  { id: 'reddit', name: 'Reddit', icon: FaReddit, color: 'bg-orange-600' },
  { id: 'pinterest', name: 'Pinterest', icon: FaPinterest, color: 'bg-red-700' },
  { id: 'telegram', name: 'Telegram', icon: FaTelegram, color: 'bg-blue-500' },
  { id: 'gettr', name: 'GETTR', icon: FaGlobe, color: 'bg-red-600' },
  { id: 'truthsocial', name: 'Truth Social', icon: MessageSquare, color: 'bg-blue-600' }
];

export default function SocialMediaDashboard() {
  const [content, setContent] = useState("");
  const [selectedPlatforms, setSelectedPlatforms] = useState<string[]>([]);
  const [mediaUrls, setMediaUrls] = useState<string[]>([]);
  const [newMediaUrl, setNewMediaUrl] = useState("");
  const [scheduleDate, setScheduleDate] = useState("");
  const [scheduleTime, setScheduleTime] = useState("");
  const [showApiKeyDialog, setShowApiKeyDialog] = useState(false);
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);
  const [isUploading, setIsUploading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { toast } = useToast();
  const queryClient = useQueryClient();

  // Fetch posts
  const { data: postsData, isLoading: postsLoading } = useQuery<{ posts: SocialMediaPost[] }>({
    queryKey: ['/api/social-media/posts'],
  });

  // Fetch accounts
  const { data: accountsData } = useQuery<{ accounts: any[] }>({
    queryKey: ['/api/social-media/accounts'],
  });

  // Fetch activities
  const { data: activitiesData, isLoading: activitiesLoading } = useQuery<{ activities: any[] }>({
    queryKey: ['/api/social-media/activities'],
  });

  // Post mutation
  const postMutation = useMutation({
    mutationFn: async (data: any) => {
      const response = await apiRequest("POST", "/api/social-media/post", data);
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Success!",
        description: "Your post has been published to all selected platforms.",
      });
      setContent("");
      setSelectedPlatforms([]);
      setMediaUrls([]);
      queryClient.invalidateQueries({ queryKey: ['/api/social-media/posts'] });
    },
    onError: (error: any) => {
      if (error.message?.includes('AYRSHARE_API_KEY')) {
        setShowApiKeyDialog(true);
      }
      toast({
        title: "Error",
        description: error.message || "Failed to post to social media",
        variant: "destructive",
      });
    },
  });

  // Schedule mutation
  const scheduleMutation = useMutation({
    mutationFn: async (data: any) => {
      const response = await apiRequest("POST", "/api/social-media/schedule", data);
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Scheduled!",
        description: "Your post has been scheduled successfully.",
      });
      setContent("");
      setSelectedPlatforms([]);
      setMediaUrls([]);
      setScheduleDate("");
      setScheduleTime("");
      queryClient.invalidateQueries({ queryKey: ['/api/social-media/posts'] });
    },
    onError: (error: any) => {
      if (error.message?.includes('AYRSHARE_API_KEY')) {
        setShowApiKeyDialog(true);
      }
      toast({
        title: "Error",
        description: error.message || "Failed to schedule post",
        variant: "destructive",
      });
    },
  });

  // Delete mutation
  const deleteMutation = useMutation({
    mutationFn: async (id: number) => {
      const response = await apiRequest("DELETE", `/api/social-media/post/${id}`, null);
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Deleted",
        description: "Post has been deleted successfully.",
      });
      queryClient.invalidateQueries({ queryKey: ['/api/social-media/posts'] });
    },
    onError: (error: any) => {
      toast({
        title: "Error",
        description: error.message || "Failed to delete post",
        variant: "destructive",
      });
    },
  });

  const handlePlatformToggle = (platformId: string) => {
    setSelectedPlatforms(prev => 
      prev.includes(platformId) 
        ? prev.filter(p => p !== platformId)
        : [...prev, platformId]
    );
  };

  const handleAddMedia = () => {
    if (newMediaUrl) {
      setMediaUrls([...mediaUrls, newMediaUrl]);
      setNewMediaUrl("");
    }
  };

  const handleRemoveMedia = (index: number) => {
    setMediaUrls(mediaUrls.filter((_, i) => i !== index));
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      const newFiles = Array.from(files).filter(file => {
        const isValid = file.type.startsWith('image/') || 
                       file.type.startsWith('video/') || 
                       file.type.startsWith('audio/');
        if (!isValid) {
          toast({
            title: "Invalid file type",
            description: `${file.name} is not a supported file type. Please upload images, videos, or audio files.`,
            variant: "destructive",
          });
        }
        return isValid;
      });
      setUploadedFiles([...uploadedFiles, ...newFiles]);
    }
  };

  const handleRemoveFile = (index: number) => {
    setUploadedFiles(uploadedFiles.filter((_, i) => i !== index));
  };

  const uploadFiles = async () => {
    if (uploadedFiles.length === 0) return [];
    
    setIsUploading(true);
    const uploadedUrls: string[] = [];

    try {
      for (const file of uploadedFiles) {
        // Get presigned upload URL
        const urlResponse = await fetch('/api/social-media/upload-url', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          credentials: 'include',
        });

        if (!urlResponse.ok) {
          const error = await urlResponse.json();
          throw new Error(error.error || 'Failed to get upload URL');
        }

        const { uploadURL } = await urlResponse.json();

        // Upload file directly to storage
        const uploadResponse = await fetch(uploadURL, {
          method: 'PUT',
          body: file,
          headers: {
            'Content-Type': file.type,
          },
        });

        if (!uploadResponse.ok) {
          throw new Error('Failed to upload file to storage');
        }

        // Notify backend of successful upload
        const completeResponse = await fetch('/api/social-media/upload-complete', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          credentials: 'include',
          body: JSON.stringify({ uploadURL }),
        });

        if (!completeResponse.ok) {
          const error = await completeResponse.json();
          throw new Error(error.error || 'Failed to complete upload');
        }

        const { publicUrl } = await completeResponse.json();
        uploadedUrls.push(publicUrl);
      }

      setUploadedFiles([]);
      if (fileInputRef.current) {
        fileInputRef.current.value = '';
      }
      return uploadedUrls;
    } catch (error: any) {
      toast({
        title: "Upload failed",
        description: error.message || "Failed to upload files",
        variant: "destructive",
      });
      return [];
    } finally {
      setIsUploading(false);
    }
  };

  const getFileIcon = (file: File) => {
    if (file.type.startsWith('image/')) return <FileImage className="h-4 w-4" />;
    if (file.type.startsWith('video/')) return <FileVideo className="h-4 w-4" />;
    if (file.type.startsWith('audio/')) return <FileAudio className="h-4 w-4" />;
    return <Upload className="h-4 w-4" />;
  };

  const handlePost = async () => {
    if (!content || selectedPlatforms.length === 0) {
      toast({
        title: "Missing Information",
        description: "Please enter content and select at least one platform.",
        variant: "destructive",
      });
      return;
    }

    // Upload files first if any
    const uploadedUrls = await uploadFiles();
    const allMediaUrls = [...mediaUrls, ...uploadedUrls];

    postMutation.mutate({
      content,
      platforms: selectedPlatforms,
      mediaUrls: allMediaUrls.length > 0 ? allMediaUrls : undefined
    });
  };

  const handleSchedule = async () => {
    if (!content || selectedPlatforms.length === 0 || !scheduleDate || !scheduleTime) {
      toast({
        title: "Missing Information",
        description: "Please fill in all fields for scheduling.",
        variant: "destructive",
      });
      return;
    }

    // Upload files first if any
    const uploadedUrls = await uploadFiles();
    const allMediaUrls = [...mediaUrls, ...uploadedUrls];

    const scheduledFor = new Date(`${scheduleDate}T${scheduleTime}`);
    scheduleMutation.mutate({
      postData: {
        content,
        platforms: selectedPlatforms,
        mediaUrls: allMediaUrls.length > 0 ? allMediaUrls : undefined,
        status: 'scheduled'
      },
      scheduleDate: scheduledFor
    });
  };

  const posts = postsData?.posts || [];
  const accounts = accountsData?.accounts || [];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Social Media Dashboard</h1>
          <p className="text-gray-600">Post to multiple platforms simultaneously</p>
        </div>

        {/* API Key Dialog */}
        {showApiKeyDialog && (
          <Card className="mb-6 border-yellow-400 bg-yellow-50">
            <CardHeader>
              <CardTitle className="text-yellow-800">API Configuration Required</CardTitle>
              <CardDescription className="text-yellow-700">
                To use the social media posting feature, you need to set up your Ayrshare API key.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-sm text-gray-700">
                  1. Sign up for a free account at <a href="https://www.ayrshare.com" target="_blank" className="text-blue-600 hover:underline">Ayrshare.com</a>
                </p>
                <p className="text-sm text-gray-700">
                  2. Get your API key from the dashboard
                </p>
                <p className="text-sm text-gray-700">
                  3. Add it as an environment variable: <code className="bg-gray-200 px-2 py-1 rounded">AYRSHARE_API_KEY</code>
                </p>
                <Button 
                  onClick={() => setShowApiKeyDialog(false)}
                  variant="outline"
                  className="mt-4"
                >
                  Dismiss
                </Button>
              </div>
            </CardContent>
          </Card>
        )}

        <Tabs defaultValue="compose" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4 lg:w-[500px]">
            <TabsTrigger value="compose">Compose</TabsTrigger>
            <TabsTrigger value="posts">Posts</TabsTrigger>
            <TabsTrigger value="activities">Activities</TabsTrigger>
            <TabsTrigger value="settings">Settings</TabsTrigger>
          </TabsList>

          {/* Compose Tab */}
          <TabsContent value="compose" className="space-y-6">
            <div className="grid lg:grid-cols-3 gap-6">
              {/* Main Compose Area */}
              <div className="lg:col-span-2 space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Create Post</CardTitle>
                    <CardDescription>Compose your message and select platforms</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {/* Content Input */}
                    <div className="space-y-2">
                      <Label htmlFor="content">Message</Label>
                      <Textarea
                        id="content"
                        placeholder={t('socialMedia.whatsOnYourMind')}
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        className="min-h-[150px]"
                        data-testid="input-message"
                      />
                      <div className="text-sm text-gray-500">
                        {content.length} / 280 characters (Twitter limit)
                      </div>
                    </div>

                    {/* Platform Selection */}
                    <div className="space-y-2">
                      <Label>Select Platforms</Label>
                      <div className="grid grid-cols-3 gap-3">
                        {PLATFORMS.map((platform) => (
                          <div
                            key={platform.id}
                            onClick={() => handlePlatformToggle(platform.id)}
                            className={`
                              flex items-center gap-2 p-3 rounded-lg border-2 cursor-pointer transition-all
                              ${selectedPlatforms.includes(platform.id) 
                                ? 'border-blue-500 bg-blue-50' 
                                : 'border-gray-200 hover:border-gray-300'}
                            `}
                            data-testid={`platform-${platform.id}`}
                          >
                            <Checkbox 
                              checked={selectedPlatforms.includes(platform.id)}
                              onCheckedChange={() => handlePlatformToggle(platform.id)}
                            />
                            <platform.icon className="w-5 h-5" />
                            <span className="text-sm font-medium">{platform.name}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Media Upload */}
                    <div className="space-y-4">
                      <Label>Media (Optional)</Label>
                      
                      {/* File Upload Section */}
                      <div className="space-y-3">
                        <div className="flex items-center gap-3">
                          <input
                            ref={fileInputRef}
                            type="file"
                            multiple
                            accept="image/*,video/*,audio/*"
                            onChange={handleFileSelect}
                            className="hidden"
                            id="file-upload"
                          />
                          <Button
                            type="button"
                            variant="outline"
                            onClick={() => fileInputRef.current?.click()}
                            disabled={isUploading}
                            data-testid="button-upload-files"
                          >
                            <Upload className="w-4 h-4 mr-2" />
                            {t('common.uploadFiles')}
                          </Button>
                          <span className="text-sm text-gray-500">
                            {t('common.supportsMediaFiles')}
                          </span>
                        </div>

                        {/* Display uploaded files */}
                        {uploadedFiles.length > 0 && (
                          <div className="space-y-2">
                            <p className="text-sm font-medium text-gray-700">{t('common.filesToUpload')}</p>
                            {uploadedFiles.map((file, index) => (
                              <div key={index} className="flex items-center gap-2 p-2 bg-blue-50 rounded border border-blue-200">
                                {getFileIcon(file)}
                                <span className="text-sm truncate flex-1">{file.name}</span>
                                <span className="text-xs text-gray-500">
                                  {(file.size / 1024 / 1024).toFixed(2)} MB
                                </span>
                                <Button
                                  size="sm"
                                  variant="ghost"
                                  onClick={() => handleRemoveFile(index)}
                                  data-testid={`button-remove-file-${index}`}
                                >
                                  <X className="w-4 h-4" />
                                </Button>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>

                      {/* URL Input Section */}
                      <div className="space-y-2">
                        <p className="text-sm font-medium text-gray-700">{t('socialMedia.orAddMediaUrls')}</p>
                        <div className="flex gap-2">
                          <Input
                            placeholder={t('socialMedia.enterMediaUrl')}
                            value={newMediaUrl}
                            onChange={(e) => setNewMediaUrl(e.target.value)}
                            data-testid="input-media-url"
                          />
                          <Button onClick={handleAddMedia} variant="outline" data-testid="button-add-media">
                            <Plus className="w-4 h-4" />
                          </Button>
                        </div>
                        {mediaUrls.length > 0 && (
                          <div className="space-y-2 mt-2">
                            {mediaUrls.map((url, index) => (
                              <div key={index} className="flex items-center gap-2 p-2 bg-gray-50 rounded">
                                <Image className="w-4 h-4 text-gray-500" />
                                <span className="text-sm truncate flex-1">{url}</span>
                                <Button
                                  size="sm"
                                  variant="ghost"
                                  onClick={() => handleRemoveMedia(index)}
                                  data-testid={`button-remove-media-${index}`}
                                >
                                  <X className="w-4 h-4" />
                                </Button>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Schedule Options */}
                    <div className="space-y-2">
                      <Label>Schedule (Optional)</Label>
                      <div className="grid grid-cols-2 gap-2">
                        <Input
                          type="date"
                          value={scheduleDate}
                          onChange={(e) => setScheduleDate(e.target.value)}
                          data-testid="input-schedule-date"
                        />
                        <Input
                          type="time"
                          value={scheduleTime}
                          onChange={(e) => setScheduleTime(e.target.value)}
                          data-testid="input-schedule-time"
                        />
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-3">
                      <Button 
                        onClick={handlePost}
                        disabled={postMutation.isPending || isUploading || !content || selectedPlatforms.length === 0}
                        className="flex-1"
                        data-testid="button-post-now"
                      >
                        <Send className="w-4 h-4 mr-2" />
                        {isUploading ? "Uploading..." : postMutation.isPending ? "Posting..." : "Post Now"}
                      </Button>
                      <Button 
                        onClick={handleSchedule}
                        disabled={scheduleMutation.isPending || isUploading || !content || selectedPlatforms.length === 0 || !scheduleDate || !scheduleTime}
                        variant="outline"
                        className="flex-1"
                        data-testid="button-schedule"
                      >
                        <Clock className="w-4 h-4 mr-2" />
                        {isUploading ? "Uploading..." : scheduleMutation.isPending ? "Scheduling..." : "Schedule"}
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Preview Area */}
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Preview</CardTitle>
                    <CardDescription>See how your post will look</CardDescription>
                  </CardHeader>
                  <CardContent>
                    {selectedPlatforms.length > 0 ? (
                      <div className="space-y-4">
                        {selectedPlatforms.map(platformId => {
                          const platform = PLATFORMS.find(p => p.id === platformId);
                          return platform ? (
                            <div key={platformId} className="border rounded-lg p-4">
                              <div className="flex items-center gap-2 mb-2">
                                <platform.icon className="w-5 h-5" />
                                <span className="font-medium">{platform.name}</span>
                              </div>
                              <p className="text-sm text-gray-700 whitespace-pre-wrap">
                                {content || "Your message will appear here..."}
                              </p>
                              {(mediaUrls.length > 0 || uploadedFiles.length > 0) && (
                                <div className="mt-2 flex gap-2 flex-wrap">
                                  {mediaUrls.map((_, index) => (
                                    <div key={`url-${index}`} className="w-16 h-16 bg-gray-200 rounded flex items-center justify-center">
                                      <Image className="w-8 h-8 text-gray-400" />
                                    </div>
                                  ))}
                                  {uploadedFiles.map((file, index) => (
                                    <div key={`file-${index}`} className="w-16 h-16 bg-blue-100 rounded flex items-center justify-center">
                                      {getFileIcon(file)}
                                    </div>
                                  ))}
                                </div>
                              )}
                            </div>
                          ) : null;
                        })}
                      </div>
                    ) : (
                      <p className="text-gray-500 text-center py-8">
                        Select platforms to see preview
                      </p>
                    )}
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          {/* Posts Tab */}
          <TabsContent value="posts" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Post History</CardTitle>
                <CardDescription>View and manage your social media posts</CardDescription>
              </CardHeader>
              <CardContent>
                {postsLoading ? (
                  <div className="text-center py-8 text-gray-500">{t('common.loadingPosts')}</div>
                ) : posts.length === 0 ? (
                  <div className="text-center py-8 text-gray-500">
                    {t('socialMedia.noPostsYet')}
                  </div>
                ) : (
                  <div className="space-y-4">
                    {posts.map((post: SocialMediaPost) => (
                      <div key={post.id} className="border rounded-lg p-4" data-testid={`post-${post.id}`}>
                        <div className="flex justify-between items-start mb-2">
                          <div className="flex gap-2">
                            {post.platforms?.map(platform => {
                              const platformInfo = PLATFORMS.find(p => p.id === platform);
                              return platformInfo ? (
                                <Badge key={platform} className={platformInfo.color}>
                                  {platformInfo.name}
                                </Badge>
                              ) : null;
                            })}
                          </div>
                          <div className="flex gap-2">
                            <Badge variant={
                              post.status === 'posted' ? 'default' : 
                              post.status === 'scheduled' ? 'secondary' :
                              post.status === 'failed' ? 'destructive' : 'outline'
                            }>
                              {post.status}
                            </Badge>
                            <Button
                              size="sm"
                              variant="ghost"
                              onClick={() => deleteMutation.mutate(post.id)}
                              data-testid={`button-delete-${post.id}`}
                            >
                              <Trash2 className="w-4 h-4" />
                            </Button>
                          </div>
                        </div>
                        <p className="text-sm text-gray-700 mb-2">{post.content}</p>
                        <div className="text-xs text-gray-500">
                          {post.postedAt ? 
                            `Posted: ${new Date(post.postedAt).toLocaleString()}` :
                            post.scheduledFor ?
                            `Scheduled: ${new Date(post.scheduledFor).toLocaleString()}` :
                            `Created: ${new Date(post.createdAt).toLocaleString()}`
                          }
                        </div>
                        {post.errorMessage && (
                          <div className="mt-2 text-sm text-red-600">
                            Error: {post.errorMessage}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          {/* Activities Tab */}
          <TabsContent value="activities" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Engagement Activities</CardTitle>
                <CardDescription>Track all likes, comments, replies, and mentions across your social media</CardDescription>
              </CardHeader>
              <CardContent>
                {activitiesLoading ? (
                  <div className="flex justify-center py-8">
                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"></div>
                  </div>
                ) : !activitiesData?.activities || activitiesData.activities.length === 0 ? (
                  <div className="text-center py-8">
                    <BarChart className="w-12 h-12 text-gray-400 mx-auto mb-3" />
                    <p className="text-gray-500">No activities yet</p>
                    <p className="text-sm text-gray-400 mt-2">Engagement activities will appear here when people interact with your posts</p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {activitiesData.activities.map((activity: any) => {
                      const platform = PLATFORMS.find(p => p.id === activity.platform);
                      const activityIcons: Record<string, any> = {
                        like: '❤️',
                        comment: '💬',
                        reply: '↩️',
                        share: '🔄',
                        mention: '@'
                      };
                      const icon = activityIcons[activity.activityType] || '📢';
                      
                      return (
                        <div key={activity.id} className="border rounded-lg p-4 hover:bg-gray-50 transition-colors">
                          <div className="flex items-start justify-between">
                            <div className="flex-1">
                              <div className="flex items-center gap-2 mb-2">
                                <span className="text-xl">{icon}</span>
                                {platform && <platform.icon className="w-5 h-5" />}
                                <Badge variant="outline">
                                  {activity.activityType}
                                </Badge>
                                <span className="text-sm text-gray-500">
                                  on {activity.platform}
                                </span>
                              </div>
                              
                              {activity.actorName && (
                                <div className="mb-2">
                                  <span className="font-medium">{activity.actorName}</span>
                                  {activity.actorHandle && (
                                    <span className="text-gray-500 ml-1">@{activity.actorHandle}</span>
                                  )}
                                </div>
                              )}
                              
                              {activity.content && (
                                <div className="bg-gray-50 p-3 rounded-md mb-2">
                                  <p className="text-sm">{activity.content}</p>
                                </div>
                              )}
                              
                              <div className="flex items-center gap-4 text-xs text-gray-500">
                                <span>{new Date(activity.createdAt).toLocaleString()}</span>
                                {activity.emailNotificationSent && (
                                  <Badge variant="secondary" className="text-xs">
                                    Email sent
                                  </Badge>
                                )}
                              </div>
                            </div>
                            
                            {activity.actorProfileUrl && (
                              <a
                                href={activity.actorProfileUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-600 hover:text-blue-800"
                              >
                                <Eye className="w-4 h-4" />
                              </a>
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          {/* Settings Tab */}
          <TabsContent value="settings" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Connected Accounts</CardTitle>
                <CardDescription>Manage your social media account connections</CardDescription>
              </CardHeader>
              <CardContent>
                {accounts.length === 0 ? (
                  <div className="text-center py-8">
                    <p className="text-gray-500 mb-4">No accounts connected yet</p>
                    <p className="text-sm text-gray-500">
                      Connect your accounts through the Ayrshare dashboard to start posting
                    </p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {accounts.map((account: any) => {
                      const platform = PLATFORMS.find(p => p.id === account.platform);
                      return platform ? (
                        <div key={account.id} className="flex items-center justify-between p-4 border rounded-lg">
                          <div className="flex items-center gap-3">
                            <platform.icon className="w-6 h-6" />
                            <div>
                              <p className="font-medium">{account.accountName}</p>
                              <p className="text-sm text-gray-500">{platform.name}</p>
                            </div>
                          </div>
                          <Badge variant={account.isActive ? "default" : "secondary"}>
                            {account.isActive ? "Active" : "Inactive"}
                          </Badge>
                        </div>
                      ) : null;
                    })}
                  </div>
                )}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>API Configuration</CardTitle>
                <CardDescription>Set up your social media API integration</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-4 bg-blue-50 rounded-lg">
                    <h3 className="font-medium mb-2">Using Ayrshare API</h3>
                    <p className="text-sm text-gray-700 mb-3">
                      This app uses Ayrshare to post to multiple social media platforms. 
                      To get started:
                    </p>
                    <ol className="text-sm text-gray-700 space-y-2">
                      <li>1. Create a free account at <a href="https://www.ayrshare.com" target="_blank" className="text-blue-600 hover:underline">ayrshare.com</a></li>
                      <li>2. Get your API key from the dashboard</li>
                      <li>3. Add it as an environment variable: <code className="bg-gray-200 px-2 py-1 rounded">AYRSHARE_API_KEY</code></li>
                      <li>4. Connect your social media accounts in the Ayrshare dashboard</li>
                    </ol>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}