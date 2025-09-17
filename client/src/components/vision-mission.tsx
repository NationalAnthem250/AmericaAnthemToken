import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useLanguage } from '@/contexts/language-context';

export default function VisionMission() {
  const { t } = useLanguage();
  return (
    <section className="py-20 bg-gradient-to-br from-patriot-navy via-slate-900 to-patriot-navy relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 border-2 border-patriot-gold rounded-full"></div>
        <div className="absolute top-40 right-20 w-24 h-24 border-2 border-patriot-red rounded-full"></div>
        <div className="absolute bottom-20 left-1/4 w-40 h-40 border-2 border-patriot-blue rounded-full"></div>
        <div className="absolute bottom-40 right-10 w-28 h-28 border-2 border-patriot-gold rounded-full"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
            {t('visionMission.title')} <span className="text-patriot-gold">{t('visionMission.visionText')}</span> {t('visionMission.andText')} <span className="text-patriot-red">{t('visionMission.missionText')}</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            {t('visionMission.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {/* Vision Card */}
          <Card className="bg-white/10 backdrop-blur-sm border-patriot-gold/30 hover:border-patriot-gold/60 transition-all duration-300 group">
            <CardHeader className="text-center pb-6">
              <div className="w-20 h-20 mx-auto mb-4 bg-patriot-gold/20 rounded-full flex items-center justify-center group-hover:bg-patriot-gold/30 transition-colors">
                <div className="text-4xl">🔮</div>
              </div>
              <CardTitle className="text-3xl text-patriot-gold">{t('visionMission.ourVision')}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-lg text-gray-200 leading-relaxed">
                {t('visionMission.visionDescription')}
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <span className="text-patriot-gold text-xl mt-1">⭐</span>
                  <p className="text-gray-300">
                    <strong className="text-white">{t('visionMission.preserveHistory')}</strong> {t('visionMission.preserveHistoryDesc')}
                  </p>
                </div>
                
                <div className="flex items-start space-x-3">
                  <span className="text-patriot-gold text-xl mt-1">🇺🇸</span>
                  <p className="text-gray-300">
                    <strong className="text-white">{t('visionMission.celebrateHeritage')}</strong> {t('visionMission.celebrateHeritageDesc')}
                  </p>
                </div>
                
                <div className="flex items-start space-x-3">
                  <span className="text-patriot-gold text-xl mt-1">🚀</span>
                  <p className="text-gray-300">
                    <strong className="text-white">{t('visionMission.innovateTradition')}</strong> {t('visionMission.innovateTraditionDesc')}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Mission Card */}
          <Card className="bg-white/10 backdrop-blur-sm border-patriot-red/30 hover:border-patriot-red/60 transition-all duration-300 group">
            <CardHeader className="text-center pb-6">
              <div className="w-20 h-20 mx-auto mb-4 bg-patriot-red/20 rounded-full flex items-center justify-center group-hover:bg-patriot-red/30 transition-colors">
                <div className="text-4xl">🎯</div>
              </div>
              <CardTitle className="text-3xl text-patriot-red">{t('visionMission.ourMission')}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-lg text-gray-200 leading-relaxed">
                {t('visionMission.missionDescription')}
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <span className="text-patriot-red text-xl mt-1">💎</span>
                  <p className="text-gray-300">
                    <strong className="text-white">{t('visionMission.democratizeOwnership')}</strong> {t('visionMission.democratizeOwnershipDesc')}
                  </p>
                </div>
                
                <div className="flex items-start space-x-3">
                  <span className="text-patriot-red text-xl mt-1">🎵</span>
                  <p className="text-gray-300">
                    <strong className="text-white">{t('visionMission.supportArtists')}</strong> {t('visionMission.supportArtistsDesc')}
                  </p>
                </div>
                
                <div className="flex items-start space-x-3">
                  <span className="text-patriot-red text-xl mt-1">🤝</span>
                  <p className="text-gray-300">
                    <strong className="text-white">{t('visionMission.buildCommunity')}</strong> {t('visionMission.buildCommunityDesc')}
                  </p>
                </div>
                
                <div className="flex items-start space-x-3">
                  <span className="text-patriot-red text-xl mt-1">🔒</span>
                  <p className="text-gray-300">
                    <strong className="text-white">Ensure Security:</strong> Provide transparent, secure blockchain-based authenticity
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-patriot-red/20 via-patriot-gold/20 to-patriot-blue/20 rounded-2xl p-8 border border-patriot-gold/30">
            <h3 className="text-2xl font-bold text-white mb-4">
              {t('participate.title')} {t('participate.titleHighlight')} {t('participate.titleEnd')}
            </h3>
            <p className="text-gray-300 text-lg mb-6 max-w-2xl mx-auto">
              {t('participate.subtitle')}
            </p>
            <a 
              href="#participate" 
              className="inline-block bg-patriot-gold text-patriot-navy font-bold px-8 py-4 rounded-full hover:bg-patriot-gold/90 transition-colors text-lg"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('participate')?.scrollIntoView({ 
                  behavior: 'smooth',
                  block: 'start'
                });
              }}
            >
              {t('participate.joinWaitlist')}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}