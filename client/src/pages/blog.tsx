import BlogSection from '@/components/blog-section';
import { useLanguage } from '@/hooks/use-language';

export default function BlogPage() {
  const { t } = useLanguage();
  
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-patriot-navy to-patriot-blue py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-black text-white mb-6">
            NAT250 <span className="text-patriot-gold">BLOG</span>
          </h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Discover the latest updates, behind-the-scenes stories, and insights about America's first National Anthem NFT project
          </p>
        </div>
      </section>

      {/* Blog Content */}
      <BlogSection 
        wordpressUrl={import.meta.env.VITE_WORDPRESS_URL || "https://your-wordpress-site.com"}
        postsPerPage={9}
      />
    </div>
  );
}