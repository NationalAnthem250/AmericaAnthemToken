import { useState } from "react";
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
import { Calendar, Clock, Send, Image, Video, Music, X, Plus, Settings, BarChart, Trash2, Eye } from "lucide-react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaTiktok, FaYoutube, FaReddit, FaPinterest, FaTelegram } from "react-icons/fa";
import type { SocialMediaPost } from "@shared/schema";

const PLATFORMS = [
  { id: 'facebook', name: 'Facebook', icon: FaFacebook, color: 'bg-blue-600' },
  { id: 'twitter', name: 'X (Twitter)', icon: FaTwitter, color: 'bg-black' },
  { id: 'instagram', name: 'Instagram', icon: FaInstagram, color: 'bg-gradient-to-r from-purple-600 to-pink-600' },
  { id: 'linkedin', name: 'LinkedIn', icon: FaLinkedin, color: 'bg-blue-700' },
  { id: 'tiktok', name: 'TikTok', icon: FaTiktok, color: 'bg-black' },
  { id: 'youtube', name: 'YouTube', icon: FaYoutube, color: 'bg-red-600' },
  { id: 'reddit', name: 'Reddit', icon: FaReddit, color: 'bg-orange-600' },
  { id: 'pinterest', name: 'Pinterest', icon: FaPinterest, color: 'bg-red-700' },
  { id: 'telegram', name: 'Telegram', icon: FaTelegram, color: 'bg-blue-500' }
];

export default function SocialMediaDashboard() {
  const [content, setContent] = useState("");
  const [selectedPlatforms, setSelectedPlatforms] = useState<string[]>([]);
  const [mediaUrls, setMediaUrls] = useState<string[]>([]);
  const [newMediaUrl, setNewMediaUrl] = useState("");
  const [scheduleDate, setScheduleDate] = useState("");
  const [scheduleTime, setScheduleTime] = useState("");
  const [showApiKeyDialog, setShowApiKeyDialog] = useState(false);
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

  const handlePost = () => {
    if (!content || selectedPlatforms.length === 0) {
      toast({
        title: "Missing Information",
        description: "Please enter content and select at least one platform.",
        variant: "destructive",
      });
      return;
    }

    postMutation.mutate({
      content,
      platforms: selectedPlatforms,
      mediaUrls: mediaUrls.length > 0 ? mediaUrls : undefined
    });
  };

  const handleSchedule = () => {
    if (!content || selectedPlatforms.length === 0 || !scheduleDate || !scheduleTime) {
      toast({
        title: "Missing Information",
        description: "Please fill in all fields for scheduling.",
        variant: "destructive",
      });
      return;
    }

    const scheduledFor = new Date(`${scheduleDate}T${scheduleTime}`);
    scheduleMutation.mutate({
      postData: {
        content,
        platforms: selectedPlatforms,
        mediaUrls: mediaUrls.length > 0 ? mediaUrls : undefined,
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
          <TabsList className="grid w-full grid-cols-3 lg:w-[400px]">
            <TabsTrigger value="compose">Compose</TabsTrigger>
            <TabsTrigger value="posts">Posts</TabsTrigger>
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
                        placeholder="What's on your mind?"
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
                    <div className="space-y-2">
                      <Label>Media (Optional)</Label>
                      <div className="flex gap-2">
                        <Input
                          placeholder="Enter media URL (image/video/audio)"
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
                        disabled={postMutation.isPending || !content || selectedPlatforms.length === 0}
                        className="flex-1"
                        data-testid="button-post-now"
                      >
                        <Send className="w-4 h-4 mr-2" />
                        {postMutation.isPending ? "Posting..." : "Post Now"}
                      </Button>
                      <Button 
                        onClick={handleSchedule}
                        disabled={scheduleMutation.isPending || !content || selectedPlatforms.length === 0 || !scheduleDate || !scheduleTime}
                        variant="outline"
                        className="flex-1"
                        data-testid="button-schedule"
                      >
                        <Clock className="w-4 h-4 mr-2" />
                        {scheduleMutation.isPending ? "Scheduling..." : "Schedule"}
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
                              {mediaUrls.length > 0 && (
                                <div className="mt-2 flex gap-2">
                                  {mediaUrls.map((_, index) => (
                                    <div key={index} className="w-16 h-16 bg-gray-200 rounded flex items-center justify-center">
                                      <Image className="w-8 h-8 text-gray-400" />
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
                  <div className="text-center py-8 text-gray-500">Loading posts...</div>
                ) : posts.length === 0 ? (
                  <div className="text-center py-8 text-gray-500">
                    No posts yet. Create your first post above!
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