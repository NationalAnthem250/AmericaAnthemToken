import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { apiRequest } from '@/lib/queryClient';
import { MessageCircle, X, Send } from 'lucide-react';
import { useLanguage } from '@/contexts/language-context';

interface ChatWindowProps {
  isOpen: boolean;
  onToggle: () => void;
}

export function ChatWindow({ isOpen, onToggle }: ChatWindowProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const { toast } = useToast();
  const queryClient = useQueryClient();
  const { t } = useLanguage();

  const sendMessageMutation = useMutation({
    mutationFn: async (data: { name: string; email: string; message: string }) => {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (!response.ok) throw new Error('Failed to send message');
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: t('chatWindow.messageSent'),
        description: t('chatWindow.thankYouMessage'),
      });
      setName('');
      setEmail('');
      setMessage('');
      queryClient.invalidateQueries({ queryKey: ['/api/chat'] });
    },
    onError: (error: any) => {
      toast({
        title: t('common.error'),
        description: error.message || t('errors.failedToSend'),
        variant: 'destructive',
      });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) {
      toast({
        title: t('errors.missingInformation'),
        description: t('errors.fillAllFields'),
        variant: 'destructive',
      });
      return;
    }
    sendMessageMutation.mutate({ name: name.trim(), email: email.trim(), message: message.trim() });
  };

  if (!isOpen) {
    return (
      <Button
        onClick={onToggle}
        className="fixed bottom-6 right-6 bg-patriot-red hover:bg-patriot-red/90 text-white rounded-full p-4 shadow-lg z-50"
        size="lg"
      >
        <MessageCircle className="h-6 w-6" />
      </Button>
    );
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Card className="w-80 shadow-xl border-patriot-gold/20">
        <CardHeader className="bg-patriot-navy text-white rounded-t-lg">
          <div className="flex items-center justify-between">
            <CardTitle className="text-lg">{t('chatWindow.contactUs')}</CardTitle>
            <Button
              variant="ghost"
              size="sm"
              onClick={onToggle}
              className="text-white hover:bg-white/20 p-1 h-auto"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
          <p className="text-sm text-patriot-gold">{t('chatWindow.askAbout250STAR')}</p>
        </CardHeader>
        <CardContent className="p-4">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Input
                placeholder={t('chatWindow.yourName')}
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="border-patriot-blue/20 focus:border-patriot-gold"
              />
            </div>
            <div>
              <Input
                type="email"
                placeholder={t('chatWindow.yourEmail')}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="border-patriot-blue/20 focus:border-patriot-gold"
              />
            </div>
            <div>
              <Textarea
                placeholder={t('chatWindow.yourMessage')}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={4}
                className="border-patriot-blue/20 focus:border-patriot-gold resize-none"
              />
            </div>
            <Button
              type="submit"
              disabled={sendMessageMutation.isPending}
              className="w-full bg-patriot-gold hover:bg-patriot-gold/90 text-patriot-navy font-semibold"
            >
              {sendMessageMutation.isPending ? (
                t('chatWindow.sending')
              ) : (
                <>
                  <Send className="h-4 w-4 mr-2" />
                  {t('chatWindow.sendMessage')}
                </>
              )}
            </Button>
          </form>
          <div className="mt-4 text-xs text-gray-500 text-center">
            {t('chatWindow.respondWithin24')}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}