import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import SocialShareButtons from '@/components/social-share-buttons';
import { OptimizedImage } from './optimized-image';
import { useLanguage } from '@/contexts/language-context';
import goldenEagleNft from '@assets/Gemini_Generated_Image_bfizbxbfizbxbfiz_1757458891316.png';
import silverEagleNft from '@assets/Gemini_Generated_Image_mltjs7mltjs7mltj_1757458891317.png';
import dawnLightNft from '@assets/Gemini_Generated_Image_jjmgmmjjmgmmjjmg_1757458891318.png';

export function NFTSection() {
  const { t, formatters } = useLanguage();
  return (
    <section id="nft" className="py-20 bg-gradient-to-br from-patriot-navy via-patriot-blue to-patriot-navy">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
            {t('nft.title')}
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            {t('nft.subtitle')}
          </p>
        </div>

        {/* NFT Showcase Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {/* Golden Eagle Edition NFT */}
          <Card className="bg-black/40 backdrop-blur-sm border-patriot-gold/30 hover:border-patriot-gold/60 transition-all duration-300 transform hover:scale-105">
            <CardContent className="p-6">
              <div className="aspect-square rounded-lg mb-4 overflow-hidden border border-patriot-gold/30">
                <OptimizedImage 
                  src={goldenEagleNft} 
                  alt="Golden Eagle NFT - Mount Rushmore Legacy"
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-bold text-white">{t('nft.goldenEagle1')}</h3>
                  <Badge className="bg-patriot-gold text-patriot-navy">{t('nft.legendary')}</Badge>
                </div>
                <p className="text-gray-300 text-sm">{t('nft.goldenEagle1Desc')}</p>
                <div className="flex justify-between items-center pt-2">
                  <span className="text-patriot-gold font-bold">{formatters.currency(1776)}</span>
                  <Button 
                    size="sm" 
                    className="bg-patriot-gold hover:bg-patriot-gold/90 text-patriot-navy"
                    onClick={() => {
                      const element = document.getElementById('participate');
                      element?.scrollIntoView({ behavior: "smooth" });
                    }}
                  >
                    {t('nft.viewDetails')}
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Silver Eagle Edition NFT */}
          <Card className="bg-black/40 backdrop-blur-sm border-patriot-gold/30 hover:border-patriot-gold/60 transition-all duration-300 transform hover:scale-105">
            <CardContent className="p-6">
              <div className="aspect-square rounded-lg mb-4 overflow-hidden border border-patriot-gold/30">
                <OptimizedImage 
                  src={silverEagleNft} 
                  alt="Silver Eagle NFT - Capitol Guardian"
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-bold text-white">{t('nft.silverEagle1')}</h3>
                  <Badge className="bg-gray-400 text-black">{t('nft.rare')}</Badge>
                </div>
                <p className="text-gray-300 text-sm">{t('nft.silverEagle1Desc')}</p>
                <div className="flex justify-between items-center pt-2">
                  <span className="text-patriot-gold font-bold">{formatters.currency(876)}</span>
                  <Button 
                    size="sm" 
                    className="bg-patriot-blue hover:bg-patriot-blue/90 text-white"
                    onClick={() => {
                      const element = document.getElementById('participate');
                      element?.scrollIntoView({ behavior: "smooth" });
                    }}
                  >
                    {t('nft.viewDetails')}
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Dawn's Light Edition NFT */}
          <Card className="bg-black/40 backdrop-blur-sm border-patriot-gold/30 hover:border-patriot-gold/60 transition-all duration-300 transform hover:scale-105">
            <CardContent className="p-6">
              <div className="aspect-square rounded-lg mb-4 overflow-hidden border border-patriot-gold/30">
                <OptimizedImage 
                  src={dawnLightNft} 
                  alt="Dawn's Light NFT - Liberty's Flight"
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-bold text-white">{t('nft.dawnLight1')}</h3>
                  <Badge className="bg-patriot-red text-white">{t('nft.epic')}</Badge>
                </div>
                <p className="text-gray-300 text-sm">{t('nft.dawnLight1Desc')}</p>
                <div className="flex justify-between items-center pt-2">
                  <span className="text-patriot-gold font-bold">{formatters.currency(1250)}</span>
                  <Button 
                    size="sm" 
                    className="bg-patriot-red hover:bg-patriot-red/90 text-white"
                    onClick={() => {
                      const element = document.getElementById('participate');
                      element?.scrollIntoView({ behavior: "smooth" });
                    }}
                  >
                    {t('nft.viewDetails')}
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* 250STAR Token Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          <div className="text-center bg-black/30 backdrop-blur-sm rounded-lg p-6 border border-patriot-gold/20">
            <div className="text-2xl font-bold text-white mb-1">250STAR Token</div>
            <div className="text-3xl font-bold text-patriot-gold">$1.77</div>
          </div>
          <div className="text-center bg-black/30 backdrop-blur-sm rounded-lg p-6 border border-patriot-gold/20">
            <div className="text-3xl font-bold text-patriot-red mb-2">1,776,000,000</div>
            <div className="text-white text-sm">Total Supply</div>
          </div>
          <div className="text-center bg-black/30 backdrop-blur-sm rounded-lg p-6 border border-patriot-gold/20">
            <div className="text-3xl font-bold text-white mb-2">Solana</div>
            <div className="text-white text-sm">Network</div>
          </div>
          <div className="text-center bg-black/30 backdrop-blur-sm rounded-lg p-6 border border-patriot-gold/20">
            <div className="text-3xl font-bold text-patriot-gold mb-2">12.4K</div>
            <div className="text-white text-sm">Holders</div>
          </div>
        </div>

        {/* Features & Utilities */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="bg-black/30 backdrop-blur-sm rounded-lg p-8 border border-patriot-gold/20">
            <h3 className="text-2xl font-bold text-white mb-6">
              <i className="fas fa-gems text-patriot-gold mr-3"></i>
              NFT Features
            </h3>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-center">
                <i className="fas fa-check text-patriot-gold mr-3"></i>
                High-resolution 4K video performance
              </li>
              <li className="flex items-center">
                <i className="fas fa-check text-patriot-gold mr-3"></i>
                Lossless audio recording (48kHz/24-bit)
              </li>
              <li className="flex items-center">
                <i className="fas fa-check text-patriot-gold mr-3"></i>
                Exclusive behind-the-scenes content
              </li>
              <li className="flex items-center">
                <i className="fas fa-check text-patriot-gold mr-3"></i>
                Historical landmark photography
              </li>
              <li className="flex items-center">
                <i className="fas fa-check text-patriot-gold mr-3"></i>
                Digital certificate of authenticity
              </li>
              <li className="flex items-center">
                <i className="fas fa-check text-patriot-gold mr-3"></i>
                Commemorative America250 branding
              </li>
            </ul>
          </div>

          <div className="bg-black/30 backdrop-blur-sm rounded-lg p-8 border border-patriot-gold/20">
            <h3 className="text-2xl font-bold text-white mb-6">
              <i className="fas fa-crown text-patriot-gold mr-3"></i>
              Holder Benefits
            </h3>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-center">
                <i className="fas fa-star text-patriot-gold mr-3"></i>
                Exclusive community access
              </li>
              <li className="flex items-center">
                <i className="fas fa-star text-patriot-gold mr-3"></i>
                Early access to future drops
              </li>
              <li className="flex items-center">
                <i className="fas fa-star text-patriot-gold mr-3"></i>
                Special America250 events invitations
              </li>
              <li className="flex items-center">
                <i className="fas fa-star text-patriot-gold mr-3"></i>
                Hannah Magnelli signed memorabilia
              </li>
              <li className="flex items-center">
                <i className="fas fa-star text-patriot-gold mr-3"></i>
                Governance voting rights
              </li>
              <li className="flex items-center">
                <i className="fas fa-star text-patriot-gold mr-3"></i>
                250STAR token airdrops
              </li>
            </ul>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-patriot-gold/10 to-patriot-red/10 rounded-lg p-8 border border-patriot-gold/30">
          <h3 className="text-3xl font-bold text-white mb-4">Ready to Own History?</h3>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Join thousands of patriotic Americans who are preserving our nation's heritage through blockchain technology. Each NFT is a piece of American history that you can own forever.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              className="bg-patriot-gold hover:bg-patriot-gold/90 text-patriot-navy font-bold px-8 py-3 text-lg"
              onClick={() => {
                const element = document.getElementById('nft');
                element?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              <i className="fas fa-rocket mr-2"></i>
              Browse Collection
            </Button>
            <Button 
              variant="outline" 
              className="border-patriot-gold text-patriot-gold hover:bg-patriot-gold hover:text-patriot-navy font-bold px-8 py-3 text-lg"
              onClick={() => {
                const element = document.getElementById('participate');
                element?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              <i className="fas fa-info-circle mr-2"></i>
              Learn More
            </Button>
          </div>
        </div>
        
        {/* Share This Collection */}
        <div className="mt-12">
          <SocialShareButtons 
            variant="inline" 
            position="center"
            title="Discover the Anthem250 NFT Collection - Own American History"
            description="Join the exclusive NFT collection featuring Hannah Magnelli's National Anthem performance for America's 250th anniversary"
          />
        </div>
      </div>
    </section>
  );
}