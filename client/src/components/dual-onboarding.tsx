import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useLanguage } from '@/contexts/language-context';

interface DualOnboardingProps {
  onSelectPath: (path: 'newbie' | 'crypto') => void;
}

export default function DualOnboarding({ onSelectPath }: DualOnboardingProps) {
  const { t } = useLanguage();
  return (
    <section id="onboarding" className="py-20 bg-gradient-to-b from-patriot-navy to-black">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
            CHOOSE YOUR <span className="text-patriot-gold">JOURNEY</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Whether you're new to digital collectibles or an experienced collector, we've made it easy to own a piece of American history
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* New to NFTs Path */}
          <Card className="bg-white/10 backdrop-blur-sm border-patriot-gold/30 hover:border-patriot-gold/60 transition-all duration-300 cursor-pointer group"
                onClick={() => onSelectPath('newbie')}>
            <CardHeader className="text-center pb-4">
              <div className="mx-auto mb-4 w-16 h-16 bg-patriot-blue/20 rounded-full flex items-center justify-center group-hover:bg-patriot-blue/30 transition-colors">
                <svg className="w-8 h-8 text-patriot-gold" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>
              <CardTitle className="text-2xl text-white">{t('onboarding.newTitle')}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-300 text-center">
                Perfect for art lovers and patriots who want to learn about digital collectibles
              </p>
              <ul className="space-y-2 text-sm text-gray-400">
                <li className="flex items-center">
                  <span className="text-patriot-gold mr-2">•</span>
                  Simple explanation of digital ownership
                </li>
                <li className="flex items-center">
                  <span className="text-patriot-gold mr-2">•</span>
                  Credit card payment options
                </li>
                <li className="flex items-center">
                  <span className="text-patriot-gold mr-2">•</span>
                  Focus on cultural significance
                </li>
                <li className="flex items-center">
                  <span className="text-patriot-gold mr-2">•</span>
                  No wallet required initially
                </li>
              </ul>
              <Button className="w-full bg-patriot-blue hover:bg-patriot-blue/90 text-white">
                {t('onboarding.learnMore')}
              </Button>
            </CardContent>
          </Card>

          {/* Experienced with Crypto Path */}
          <Card className="bg-white/10 backdrop-blur-sm border-patriot-red/30 hover:border-patriot-red/60 transition-all duration-300 cursor-pointer group"
                onClick={() => onSelectPath('crypto')}>
            <CardHeader className="text-center pb-4">
              <div className="mx-auto mb-4 w-16 h-16 bg-patriot-red/20 rounded-full flex items-center justify-center group-hover:bg-patriot-red/30 transition-colors">
                <svg className="w-8 h-8 text-patriot-gold" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>
              </div>
              <CardTitle className="text-2xl text-white">{t('onboarding.cryptoTitle')}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-300 text-center">
                For collectors who want detailed tokenomics and advanced features
              </p>
              <ul className="space-y-2 text-sm text-gray-400">
                <li className="flex items-center">
                  <span className="text-patriot-gold mr-2">•</span>
                  Detailed tokenomics & supply data
                </li>
                <li className="flex items-center">
                  <span className="text-patriot-gold mr-2">•</span>
                  Smart contract transparency
                </li>
                <li className="flex items-center">
                  <span className="text-patriot-gold mr-2">•</span>
                  Token utility & roadmap
                </li>
                <li className="flex items-center">
                  <span className="text-patriot-gold mr-2">•</span>
                  Connect wallet directly (coming soon)
                </li>
              </ul>
              <Button className="w-full bg-patriot-red hover:bg-patriot-red/90 text-white">
                {t('onboarding.viewTokenomics')}
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}