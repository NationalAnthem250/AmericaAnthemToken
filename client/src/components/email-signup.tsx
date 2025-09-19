import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useToast } from "@/hooks/use-toast";
import { Bell, Mail, Users, Star, Gift, Zap } from "lucide-react";
import { useLanguage } from '@/contexts/language-context';

interface EmailSignupProps {
  variant?: 'hero' | 'sidebar' | 'footer' | 'popup';
  title?: string;
  subtitle?: string;
  className?: string;
}

export default function EmailSignup({ 
  variant = 'sidebar',
  title,
  subtitle,
  className = ""
}: EmailSignupProps) {
  const { t } = useLanguage();
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const joinWaitlistMutation = useMutation({
    mutationFn: async (data: { email: string; name: string }) => {
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...data,
          metadata: {
            source: variant,
            timestamp: new Date().toISOString(),
            userAgent: navigator.userAgent
          }
        }),
      });
      
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || t('emailSignup.failedError'));
      }
      
      return response.json();
    },
    onSuccess: () => {
      setIsSuccess(true);
      toast({
        title: t('emailSignup.welcomeTitle'),
        description: t('emailSignup.welcomeDesc'),
      });
      queryClient.invalidateQueries({ queryKey: ["/api/waitlist"] });
    },
    onError: (error: any) => {
      toast({
        title: t('emailSignup.errorTitle'),
        description: error.message === "Email already registered for waitlist" 
          ? t('emailSignup.alreadyRegistered')
          : t('emailSignup.errorDesc'),
        variant: error.message.includes("already registered") ? "default" : "destructive",
      });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && name) {
      joinWaitlistMutation.mutate({ email: email.trim(), name: name.trim() });
    }
  };

  const resetForm = () => {
    setIsSuccess(false);
    setEmail("");
    setName("");
  };

  // Success State
  if (isSuccess) {
    return (
      <Card className={`bg-gradient-to-br from-patriot-gold/20 to-patriot-red/20 border-patriot-gold/50 ${className}`}>
        <CardContent className="p-6 text-center">
          <div className="mb-4">
            <div className="w-16 h-16 bg-patriot-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Star className="w-8 h-8 text-patriot-gold" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">{t('emailSignup.success')}</h3>
            <p className="text-gray-300 text-sm">
              {t('waitlist.successMessage')}
            </p>
          </div>
          
          <div className="space-y-3 text-sm text-gray-400 mb-4">
            <div className="flex items-center justify-center gap-2">
              <Bell className="w-4 h-4 text-patriot-blue" />
              <span>{t('emailSignup.priorityNotifications')}</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <Gift className="w-4 h-4 text-patriot-red" />
              <span>{t('emailSignup.exclusiveAccess')}</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <Zap className="w-4 h-4 text-patriot-gold" />
              <span>{t('emailSignup.behindScenes')}</span>
            </div>
          </div>

          <Button 
            onClick={resetForm}
            variant="outline" 
            size="sm"
            className="text-patriot-gold border-patriot-gold/50 hover:bg-patriot-gold/10"
          >
{t('emailSignup.signUpAnother')}
          </Button>
        </CardContent>
      </Card>
    );
  }

  // Different variants for different placements
  if (variant === 'hero') {
    return (
      <div className={`bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-patriot-gold/30 ${className}`}>
        <div className="text-center mb-6">
          <h3 className="text-2xl font-bold text-white mb-2">
            {title || t('emailSignup.getLaunchNotifications')}
          </h3>
          <p className="text-gray-300 text-sm">
            {subtitle || t('emailSignup.beFirstInLine')}
          </p>
          <Badge className="mt-2 bg-patriot-red text-white">
            <Users className="w-3 h-3 mr-1" />
{t('emailSignup.joinPatriots')}
          </Badge>
        </div>

        <form onSubmit={handleSubmit} className="space-y-3">
          <Input
            type="text"
            placeholder={t('common.yourName')}
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="bg-white/10 border-patriot-gold/30 text-white placeholder:text-gray-400 focus:border-patriot-gold"
            required
          />
          <Input
            type="email"
            placeholder={t('common.emailAddress')}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-white/10 border-patriot-gold/30 text-white placeholder:text-gray-400 focus:border-patriot-gold"
            required
          />
          <Button
            type="submit"
            disabled={joinWaitlistMutation.isPending}
            className="w-full bg-patriot-gold hover:bg-patriot-gold/90 text-patriot-navy font-bold"
          >
            {joinWaitlistMutation.isPending ? (
              <div className="flex items-center">
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-patriot-navy mr-2"></div>
                {t('emailSignup.joining')}
              </div>
            ) : (
              <div className="flex items-center">
                <Mail className="w-4 h-4 mr-2" />
                {t('emailSignup.notifyMe')}
              </div>
            )}
          </Button>
        </form>
      </div>
    );
  }

  // Compact sidebar version
  if (variant === 'sidebar') {
    return (
      <Card className={`bg-white/5 border-patriot-gold/30 ${className}`}>
        <CardHeader className="pb-4">
          <CardTitle className="text-lg text-white flex items-center">
            <Bell className="w-5 h-5 mr-2 text-patriot-gold" />
            {title || t('emailSignup.launchAlerts')}
          </CardTitle>
          <p className="text-gray-400 text-sm">
            {subtitle || t('emailSignup.getNotified')}
          </p>
        </CardHeader>
        <CardContent className="pt-0">
          <form onSubmit={handleSubmit} className="space-y-3">
            <Input
              type="text"
              placeholder={t('common.name')}
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="bg-white/10 border-patriot-gold/30 text-white placeholder:text-gray-400 focus:border-patriot-gold text-sm"
              required
            />
            <Input
              type="email"
              placeholder={t('common.email')}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-white/10 border-patriot-gold/30 text-white placeholder:text-gray-400 focus:border-patriot-gold text-sm"
              required
            />
            <Button
              type="submit"
              disabled={joinWaitlistMutation.isPending}
              size="sm"
              className="w-full bg-patriot-red hover:bg-patriot-red/90 text-white"
            >
              {joinWaitlistMutation.isPending ? "..." : t('emailSignup.notifyMe')}
            </Button>
          </form>
        </CardContent>
      </Card>
    );
  }

  // Footer version
  if (variant === 'footer') {
    return (
      <div className={className}>
        <h4 className="text-lg font-semibold text-patriot-gold mb-3">{t('emailSignup.launchNotifications')}</h4>
        <p className="text-gray-400 text-sm mb-4">
          {t('emailSignup.beFirst')}
        </p>
        <form onSubmit={handleSubmit} className="space-y-2">
          <Input
            type="text"
            placeholder={t('common.yourName')}
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="bg-white/10 border-patriot-gold/30 text-white placeholder:text-gray-400 focus:border-patriot-gold text-sm"
            required
          />
          <div className="flex space-x-2">
            <Input
              type="email"
              placeholder={t('common.emailAddress')}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-white/10 border-patriot-gold/30 text-white placeholder:text-gray-400 focus:border-patriot-gold text-sm flex-1"
              required
            />
            <Button
              type="submit"
              disabled={joinWaitlistMutation.isPending}
              size="sm"
              className="bg-patriot-gold hover:bg-patriot-gold/90 text-patriot-navy font-bold px-4"
            >
              {joinWaitlistMutation.isPending ? "..." : t('common.join')}
            </Button>
          </div>
        </form>
      </div>
    );
  }

  // Default popup version
  return (
    <Card className={`bg-gradient-to-br from-patriot-navy/90 to-black/90 border-patriot-gold/50 ${className}`}>
      <CardHeader>
        <CardTitle className="text-xl text-white text-center flex items-center justify-center">
          <Mail className="w-5 h-5 mr-2 text-patriot-gold" />
          {title || t('emailSignup.joinLaunch')}
        </CardTitle>
        <p className="text-gray-300 text-center text-sm">
          {subtitle || t('emailSignup.getPriority')}
        </p>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            type="text"
            placeholder={t('common.yourName')}
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="bg-white/10 border-patriot-gold/30 text-white placeholder:text-gray-400 focus:border-patriot-gold"
            required
          />
          <Input
            type="email"
            placeholder={t('common.emailAddress')}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-white/10 border-patriot-gold/30 text-white placeholder:text-gray-400 focus:border-patriot-gold"
            required
          />
          <Button
            type="submit"
            disabled={joinWaitlistMutation.isPending}
            className="w-full bg-patriot-gold hover:bg-patriot-gold/90 text-patriot-navy font-bold"
          >
            {joinWaitlistMutation.isPending ? (
              <div className="flex items-center">
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-patriot-navy mr-2"></div>
                {`${t('common.join')}ing Waitlist...`}
              </div>
            ) : (
              t('emailSignup.getLaunchNotifications')
            )}
          </Button>
        </form>
        
        <div className="mt-4 pt-4 border-t border-white/10 text-xs text-gray-400 text-center">
          <p>🔒 Your email is safe with us • 🇺🇸 Patriots only • ⚡ Instant notifications</p>
        </div>
      </CardContent>
    </Card>
  );
}