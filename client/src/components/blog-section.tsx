import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CalendarIcon, ExternalLinkIcon, Loader2 } from "lucide-react";
import { useLanguage } from '@/hooks/use-language';

interface WordPressPost {
  id: number;
  title: {
    rendered: string;
  };
  content: {
    rendered: string;
  };
  excerpt: {
    rendered: string;
  };
  date: string;
  slug: string;
  link: string;
  featured_media?: number;
  author: number;
  status: string;
  categories: number[];
  tags: number[];
  _embedded?: {
    'wp:featuredmedia'?: Array<{
      source_url: string;
      alt_text: string;
    }>;
    author?: Array<{
      name: string;
    }>;
  };
}

interface BlogSectionProps {
  wordpressUrl?: string;
  postsPerPage?: number;
}

export default function BlogSection({ 
  wordpressUrl = "https://your-wordpress-site.com", 
  postsPerPage = 6 
}: BlogSectionProps) {
  const { t } = useLanguage();
  const [posts, setPosts] = useState<WordPressPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Strip HTML tags from content
  const stripHtml = (html: string): string => {
    const temp = document.createElement('div');
    temp.innerHTML = html;
    return temp.textContent || temp.innerText || '';
  };

  // Format date
  const formatDate = (dateString: string): string => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  // Fetch posts from WordPress REST API
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true);
        setError(null);
        
        const params = new URLSearchParams({
          per_page: postsPerPage.toString(),
          status: 'publish',
          _embed: 'true'
        });
        
        const endpoint = `${wordpressUrl}/wp-json/wp/v2/posts?${params}`;
        
        const response = await fetch(endpoint, {
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          }
        });
        
        if (!response.ok) {
          throw new Error(`Failed to fetch posts: ${response.status}`);
        }
        
        const data: WordPressPost[] = await response.json();
        setPosts(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch blog posts');
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, [wordpressUrl, postsPerPage]);

  return (
    <section id="blog" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-patriot-navy mb-6">
            NAT250 <span className="text-patriot-gold">BLOG</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay updated with the latest news, insights, and stories about America's National Anthem NFT project
          </p>
        </div>

        {/* Loading State */}
        {loading && (
          <div className="flex justify-center items-center py-12">
            <Loader2 className="w-8 h-8 animate-spin text-patriot-blue" />
            <span className="ml-2 text-gray-600">Loading latest posts...</span>
          </div>
        )}

        {/* Error State */}
        {error && (
          <div className="text-center py-12">
            <Card className="bg-red-50 border-red-200 max-w-md mx-auto">
              <CardContent className="p-6">
                <p className="text-red-600 mb-4">{error}</p>
                <p className="text-sm text-gray-600">
                  Please check back later or visit our WordPress blog directly.
                </p>
                <Button 
                  onClick={() => window.open(wordpressUrl, '_blank')}
                  className="mt-4 bg-patriot-red hover:bg-patriot-red/90"
                >
                  Visit Blog <ExternalLinkIcon className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Blog Posts Grid */}
        {!loading && !error && posts.length > 0 && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {posts.map((post) => (
              <Card key={post.id} className="bg-white border-gray-200 hover:shadow-lg transition-shadow duration-300">
                {/* Featured Image */}
                {post._embedded?.['wp:featuredmedia']?.[0] && (
                  <div className="aspect-video overflow-hidden rounded-t-lg">
                    <img
                      src={post._embedded['wp:featuredmedia'][0].source_url}
                      alt={post._embedded['wp:featuredmedia'][0].alt_text || stripHtml(post.title.rendered)}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                )}
                
                <CardHeader>
                  <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                    <CalendarIcon className="w-4 h-4" />
                    <time dateTime={post.date}>
                      {formatDate(post.date)}
                    </time>
                    {post._embedded?.author?.[0] && (
                      <>
                        <span>•</span>
                        <span>{post._embedded.author[0].name}</span>
                      </>
                    )}
                  </div>
                  <CardTitle className="text-xl text-patriot-navy line-clamp-2">
                    <span dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
                  </CardTitle>
                </CardHeader>
                
                <CardContent>
                  <p className="text-gray-600 line-clamp-3 mb-4">
                    {stripHtml(post.excerpt.rendered)}
                  </p>
                  
                  <div className="flex justify-between items-center">
                    <Badge variant="outline" className="text-patriot-blue border-patriot-blue">
                      NAT250 News
                    </Badge>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => window.open(post.link, '_blank')}
                      className="text-patriot-red hover:text-patriot-red/90 hover:bg-patriot-red/10"
                    >
                      Read More <ExternalLinkIcon className="w-4 h-4 ml-1" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {/* No Posts State */}
        {!loading && !error && posts.length === 0 && (
          <div className="text-center py-12">
            <Card className="bg-gray-50 border-gray-200 max-w-md mx-auto">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-gray-700 mb-2">No Posts Found</h3>
                <p className="text-gray-600 mb-4">
                  We're working on bringing you the latest updates about NAT250.
                </p>
                <Button 
                  onClick={() => window.open(wordpressUrl, '_blank')}
                  className="bg-patriot-blue hover:bg-patriot-blue/90"
                >
                  Visit Full Blog <ExternalLinkIcon className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Call to Action */}
        {!loading && !error && posts.length > 0 && (
          <div className="text-center">
            <Button
              onClick={() => window.open(wordpressUrl, '_blank')}
              size="lg"
              className="bg-patriot-red hover:bg-patriot-red/90 text-white font-bold"
            >
              View All Blog Posts <ExternalLinkIcon className="w-5 h-5 ml-2" />
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}