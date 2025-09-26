import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { useLanguage } from '@/contexts/language-context';

export default function HowToParticipate() {
  const { t, formatters } = useLanguage();
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const joinWaitlistMutation = useMutation({
    mutationFn: async (data: { email: string; name: string; phone?: string }) => {
      const response = await apiRequest("POST", "/api/waitlist", data);
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: t('participate.successTitle'),
        description: t('participate.successMessage'),
      });
      setEmail("");
      setPhone("");
      queryClient.invalidateQueries({ queryKey: ["/api/waitlist"] });
    },
    onError: (error: any) => {
      toast({
        title: t('participate.errorTitle'),
        description: error.message || t('participate.errorMessage'),
        variant: "destructive",
      });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      joinWaitlistMutation.mutate({ 
        email: email, 
        name: t('participate.defaultName'), // Default name for email signups
        phone: phone || undefined
      });
    }
  };

  return (
    <section id="participate" className="py-20 bg-gradient-to-b from-patriot-navy to-black">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
            {t('participate.title')} <span className="text-patriot-red">{t('participate.titleHighlight')}</span> {t('participate.titleEnd')}
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            {t('participate.subtitle')}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Steps */}
          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-patriot-red rounded-full flex items-center justify-center text-white font-bold text-xl">
                1
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">{t('participate.step1')}</h3>
                <p className="text-gray-300">
                  {t('participate.step1Desc')}
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-patriot-blue rounded-full flex items-center justify-center text-white font-bold text-xl">
                2
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">{t('participate.step2')} <span className="text-patriot-gold text-lg font-normal">{t('participate.step2ComingSoon')}</span></h3>
                <p className="text-gray-300">
                  {t('participate.step2Desc')}
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-patriot-gold rounded-full flex items-center justify-center text-patriot-navy font-bold text-xl">
                3
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">{t('participate.step3')}</h3>
                <p className="text-gray-300">
                  {t('participate.step3Desc')}
                </p>
              </div>
            </div>
          </div>

          {/* Email Signup */}
          <div className="bg-gradient-to-br from-patriot-red/20 to-patriot-blue/20 rounded-2xl p-8 border border-patriot-gold/30 backdrop-blur-sm">
            <div className="text-center mb-6">
              <h3 className="text-3xl font-bold text-white mb-2">{t('participate.getPriorityAccess')}</h3>
              <p className="text-gray-300">
                {t('participate.getPriorityAccessDesc')}
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <Input
                type="email"
                placeholder={t('participate.emailPlaceholder')}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-white/10 border-patriot-gold/30 text-white placeholder:text-gray-400 focus:border-patriot-gold"
                required
              />
              <Input
                type="tel"
                placeholder={t('participate.phonePlaceholder')}
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="bg-white/10 border-patriot-gold/30 text-white placeholder:text-gray-400 focus:border-patriot-gold"
              />
              <Button
                type="submit"
                disabled={joinWaitlistMutation.isPending}
                className="w-full bg-patriot-gold hover:bg-patriot-gold/90 text-patriot-navy font-bold py-3 text-lg"
              >
                {joinWaitlistMutation.isPending ? (
                  <div className="flex items-center">
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-patriot-navy mr-2"></div>
                    {t('participate.joining')}
                  </div>
                ) : (
                  <>
                    <i className="fas fa-star mr-2"></i>
                    {t('participate.joinWaitlist')}
                  </>
                )}
              </Button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-sm text-gray-400">
                🇺🇸 {t('participate.joinPatriots')} <span className="text-patriot-gold font-semibold">{formatters.number(12847)}</span> {t('participate.patrioticAmericans')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}