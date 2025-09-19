import { useState } from "react";
import { 
  FaFacebook, 
  FaTwitter, 
  FaLinkedin, 
  FaWhatsapp,
  FaTelegram,
  FaReddit,
  FaPinterest
} from "react-icons/fa";
import { Copy, Check, Share2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useLanguage } from '@/hooks/use-language';

interface ShareButtonsProps {
  url?: string;
  title?: string;
  description?: string;
  variant?: "floating" | "inline" | "compact";
  position?: "left" | "right" | "center";
}

export default function SocialShareButtons({ 
  url = typeof window !== 'undefined' ? window.location.href : '',
  title,
  description,
  variant = "inline",
  position = "center"
}: ShareButtonsProps) {
  const [copied, setCopied] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const { toast } = useToast();
  const { t } = useLanguage();
  
  const defaultTitle = title || t('socialShare.title');
  const defaultDescription = description || t('socialShare.description');

  const shareButtons = [
    {
      name: t('socialShare.twitter'),
      icon: FaTwitter,
      color: "hover:bg-black",
      bgGradient: "from-gray-800 to-black",
      shareUrl: `https://twitter.com/intent/tweet?text=${encodeURIComponent(defaultTitle)}&url=${encodeURIComponent(url)}`,
      animation: "hover:rotate-12"
    },
    {
      name: t('socialShare.facebook'),
      icon: FaFacebook,
      color: "hover:bg-blue-600",
      bgGradient: "from-blue-600 to-blue-700",
      shareUrl: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
      animation: "hover:-rotate-12"
    },
    {
      name: t('socialShare.linkedin'),
      icon: FaLinkedin,
      color: "hover:bg-blue-700",
      bgGradient: "from-blue-700 to-blue-800",
      shareUrl: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
      animation: "hover:scale-110"
    },
    {
      name: t('socialShare.whatsapp'),
      icon: FaWhatsapp,
      color: "hover:bg-green-600",
      bgGradient: "from-green-500 to-green-600",
      shareUrl: `https://wa.me/?text=${encodeURIComponent(defaultTitle + ' ' + url)}`,
      animation: "hover:bounce"
    },
    {
      name: t('socialShare.telegram'),
      icon: FaTelegram,
      color: "hover:bg-blue-500",
      bgGradient: "from-blue-400 to-blue-500",
      shareUrl: `https://t.me/share/url?url=${encodeURIComponent(url)}&text=${encodeURIComponent(defaultTitle)}`,
      animation: "hover:translate-x-1"
    },
    {
      name: t('socialShare.reddit'),
      icon: FaReddit,
      color: "hover:bg-orange-600",
      bgGradient: "from-orange-500 to-orange-600",
      shareUrl: `https://reddit.com/submit?url=${encodeURIComponent(url)}&title=${encodeURIComponent(defaultTitle)}`,
      animation: "hover:translate-y-[-4px]"
    },
    {
      name: t('socialShare.pinterest'),
      icon: FaPinterest,
      color: "hover:bg-red-600",
      bgGradient: "from-red-600 to-red-700",
      shareUrl: `https://pinterest.com/pin/create/button/?url=${encodeURIComponent(url)}&description=${encodeURIComponent(defaultDescription)}`,
      animation: "hover:pulse"
    }
  ];

  const handleShare = (shareUrl: string, platform: string) => {
    window.open(shareUrl, '_blank', 'width=600,height=400');
    toast({
      title: t('socialShare.sharingTo') + " " + platform,
      description: t('socialShare.openingDialog'),
    });
  };

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      toast({
        title: t('socialShare.linkCopied'),
        description: t('socialShare.linkCopiedDesc'),
      });
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      toast({
        title: t('socialShare.failedToCopy'),
        description: t('socialShare.failedToCopyDesc'),
        variant: "destructive",
      });
    }
  };

  if (variant === "floating") {
    return (
      <div className={`fixed bottom-24 ${position === 'left' ? 'left-6' : position === 'right' ? 'right-6' : 'left-1/2 transform -translate-x-1/2'} z-40`}>
        <Popover open={isOpen} onOpenChange={setIsOpen}>
          <PopoverTrigger asChild>
            <Button 
              className="h-14 w-14 rounded-full shadow-lg bg-gradient-to-r from-patriot-red to-patriot-blue hover:from-patriot-red/90 hover:to-patriot-blue/90 text-white animate-pulse hover:animate-none"
              data-testid="button-share-floating"
            >
              <Share2 className="h-6 w-6" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-80 p-4 bg-white/95 backdrop-blur-lg border-2 border-patriot-gold/20">
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-patriot-navy">{t('socialShare.shareTitle')}</h3>
              <div className="grid grid-cols-4 gap-2">
                {shareButtons.map((button) => (
                  <button
                    key={button.name}
                    onClick={() => handleShare(button.shareUrl, button.name)}
                    className={`group relative p-3 rounded-lg bg-gradient-to-br ${button.bgGradient} text-white transition-all duration-300 transform ${button.animation} hover:shadow-xl`}
                    aria-label={`Share on ${button.name}`}
                    data-testid={`button-share-${button.name.toLowerCase()}`}
                  >
                    <button.icon className="w-5 h-5" />
                    <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                      {button.name}
                    </span>
                  </button>
                ))}
                <button
                  onClick={handleCopyLink}
                  className="group relative p-3 rounded-lg bg-gradient-to-br from-gray-600 to-gray-700 text-white transition-all duration-300 transform hover:scale-110 hover:shadow-xl"
                  aria-label={t('common.copyLink')}
                  data-testid="button-copy-link"
                >
                  {copied ? <Check className="w-5 h-5" /> : <Copy className="w-5 h-5" />}
                  <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                    {copied ? t('socialShare.copied') : t('socialShare.copyLink')}
                  </span>
                </button>
              </div>
            </div>
          </PopoverContent>
        </Popover>
      </div>
    );
  }

  if (variant === "compact") {
    return (
      <div className={`flex items-center space-x-2 ${position === 'center' ? 'justify-center' : position === 'right' ? 'justify-end' : 'justify-start'}`}>
        <span className="text-sm font-medium text-gray-600 mr-2">Share:</span>
        {shareButtons.slice(0, 4).map((button) => (
          <button
            key={button.name}
            onClick={() => handleShare(button.shareUrl, button.name)}
            className={`p-2 rounded-full bg-gray-100 hover:bg-gradient-to-r ${button.bgGradient} hover:text-white transition-all duration-300 transform ${button.animation}`}
            aria-label={`Share on ${button.name}`}
            data-testid={`button-share-compact-${button.name.toLowerCase()}`}
          >
            <button.icon className="w-4 h-4" />
          </button>
        ))}
        <button
          onClick={handleCopyLink}
          className="p-2 rounded-full bg-gray-100 hover:bg-gray-700 hover:text-white transition-all duration-300 transform hover:scale-110"
          aria-label={t('common.copyLink')}
          data-testid="button-copy-link-compact"
        >
          {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
        </button>
      </div>
    );
  }

  // Default inline variant with animated cards
  return (
    <div className={`py-8 ${position === 'center' ? 'text-center' : position === 'right' ? 'text-right' : 'text-left'}`}>
      <h3 className="text-2xl font-bold text-patriot-navy mb-6">{t('tokenomics.shareRevolution')}</h3>
      <div className={`flex flex-wrap gap-3 ${position === 'center' ? 'justify-center' : position === 'right' ? 'justify-end' : 'justify-start'}`}>
        {shareButtons.map((button, index) => (
          <button
            key={button.name}
            onClick={() => handleShare(button.shareUrl, button.name)}
            className={`group relative overflow-hidden px-4 py-3 rounded-xl bg-gradient-to-br ${button.bgGradient} text-white font-medium transition-all duration-300 transform ${button.animation} hover:shadow-2xl animate-fade-in`}
            style={{ animationDelay: `${index * 100}ms` }}
            aria-label={`Share on ${button.name}`}
            data-testid={`button-share-inline-${button.name.toLowerCase()}`}
          >
            <span className="flex items-center space-x-2">
              <button.icon className="w-5 h-5" />
              <span className="hidden sm:inline">{button.name}</span>
            </span>
            <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
            <div className="absolute -inset-1 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-30 transform -skew-x-12 group-hover:animate-shimmer"></div>
          </button>
        ))}
        <button
          onClick={handleCopyLink}
          className="group relative overflow-hidden px-4 py-3 rounded-xl bg-gradient-to-br from-gray-600 to-gray-700 text-white font-medium transition-all duration-300 transform hover:scale-110 hover:shadow-2xl animate-fade-in"
          style={{ animationDelay: `${shareButtons.length * 100}ms` }}
          aria-label={t('common.copyLink')}
          data-testid="button-copy-link-inline"
        >
          <span className="flex items-center space-x-2">
            {copied ? (
              <>
                <Check className="w-5 h-5" />
                <span className="hidden sm:inline">Copied!</span>
              </>
            ) : (
              <>
                <Copy className="w-5 h-5" />
                <span className="hidden sm:inline">Copy Link</span>
              </>
            )}
          </span>
          <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
        </button>
      </div>
    </div>
  );
}