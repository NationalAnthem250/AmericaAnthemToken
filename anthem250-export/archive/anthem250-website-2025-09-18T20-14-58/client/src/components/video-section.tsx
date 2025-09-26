import { useState } from "react";
import { useLanguage } from '@/contexts/language-context';

export default function VideoSection() {
  const { t, formatters } = useLanguage();
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <section id="video" className="py-20 bg-patriot-navy">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
            {t('video.title')}
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-4">
            {t('video.subtitle')}
          </p>
          <div className="bg-patriot-gold/20 backdrop-blur-sm rounded-lg p-4 max-w-2xl mx-auto border border-patriot-gold/30">
            <p className="text-patriot-gold font-semibold">
              {t('video.performanceNote')}
            </p>
          </div>
        </div>
        
        <div className="relative bg-black rounded-2xl overflow-hidden shadow-2xl max-w-4xl mx-auto">
          

          
          {/* Vimeo Video Player with Dynamic Parameters */}
          <div style={{ padding: "97.4691225% 0 0 0", position: "relative" }}>
            <iframe 
              id="video-player"
              src={`https://player.vimeo.com/video/1117265675?badge=0&autopause=0&autoplay=0&loop=0&muted=0&background=0&controls=1&player_id=0&app_id=58479&quality=auto&responsive=1&keyboard=1&dnt=1`}
              frameBorder="0" 
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share" 
              referrerPolicy="strict-origin-when-cross-origin" 
              style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }} 
              title={t('common.hannahNationalAnthem')}
              loading="eager"
              onLoad={() => {
                setIsLoaded(true);
              }}
            ></iframe>
          </div>
        </div>
        
        {/* Hero Content Below Video */}
        <div className="text-center mt-12 space-y-8">
          {/* Main Title */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
            {t('video.heroTitle')}
            <span className="block text-patriot-gold">{t('video.heroTitleGold')}</span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto leading-relaxed">
            {t('video.heroSubtitle1')} 
            <span className="text-patriot-gold font-semibold"> {t('video.heroSubtitle2')}</span> {t('video.heroSubtitle3')}
          </p>
          
          {/* Token Info */}
          <div className="bg-black/50 backdrop-blur-sm rounded-2xl p-6 max-w-2xl mx-auto border border-patriot-gold/30">
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="font-bold text-lg">
                  <span className="text-red-600">250</span><span className="text-white">ST</span><span className="text-blue-600">AR</span> <span className="text-patriot-gold">Token</span>
                </span>
                <span className="text-white font-bold text-2xl">$1.77</span>
              </div>
              <div className="text-gray-300 text-sm">
                <div className="flex justify-between">
                  <span>{t('token.supply')}:</span>
                  <span className="text-patriot-gold">1,776,000,000 tokens</span>
                </div>
                <div className="flex justify-between mt-1">
                  <span>{t('token.network')}:</span>
                  <span className="text-patriot-blue">Solana</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8">
            <button 
              onClick={() => {
                const element = document.getElementById('participate');
                element?.scrollIntoView({ behavior: "smooth" });
              }}
              className="bg-patriot-gold hover:bg-patriot-gold/90 text-patriot-navy px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              {t('video.joinWaitlist')}
            </button>
            <button 
              onClick={() => {
                const element = document.getElementById('video');
                element?.scrollIntoView({ behavior: "smooth" });
              }}
              className="bg-transparent border-2 border-patriot-red text-patriot-red hover:bg-patriot-red hover:text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300"
            >
              {t('video.watchPerformance')}
            </button>
          </div>
        </div>
        
        <div className="text-center mt-12">
          <p className="text-gray-300 italic text-lg">
            {t('video.quote')}
          </p>
          <p className="text-patriot-gold font-semibold mt-2">
            {t('video.quoteAuthor')}
          </p>
        </div>
      </div>
    </section>
  );
}
