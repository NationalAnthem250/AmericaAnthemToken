import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useLanguage } from '@/contexts/language-context';

export default function TokenSection() {
  const { t } = useLanguage();
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleJoinWaitlist = () => {
    scrollToSection('participate');
  };

  return (
    <section id="token" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-patriot-navy mb-6">
            <span className="text-red-600">250</span><span className="text-gray-800 text-stroke">ST</span><span className="text-blue-600">AR</span> {t('token.title')}
          </h2>
          <div className="mb-6">
            <span className="bg-patriot-navy text-white px-6 py-2 rounded-full font-bold text-xl">
              {t('token.subtitle')}
            </span>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('token.description')}
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {/* NFT Feature 1 */}
          <Card className="bg-gradient-to-br from-[hsl(221,83%,53%)] to-[hsl(215,28%,17%)] text-white rounded-2xl p-8 shadow-xl">
            <div className="text-center">
              <i className="fas fa-certificate text-4xl text-patriot-gold mb-4"></i>
              <h3 className="text-2xl font-bold mb-4">{t('token.feature1Title')}</h3>
              <p className="text-gray-200">
                {t('token.feature1Desc')}
              </p>
            </div>
          </Card>
          
          {/* NFT Feature 2 */}
          <Card className="bg-gradient-to-br from-[hsl(0,79%,49%)] to-red-700 text-white rounded-2xl p-8 shadow-xl">
            <div className="text-center">
              <i className="fas fa-microphone text-4xl text-white mb-4"></i>
              <h3 className="text-2xl font-bold mb-4">{t('token.feature2Title')}</h3>
              <p className="text-gray-200">
                {t('token.feature2Desc')}
              </p>
            </div>
          </Card>
          
          {/* NFT Feature 3 */}
          <Card className="bg-gradient-to-br from-[hsl(45,93%,47%)] to-yellow-600 text-white rounded-2xl p-8 shadow-xl">
            <div className="text-center">
              <i className="fas fa-landmark text-4xl text-white mb-4"></i>
              <h3 className="text-2xl font-bold mb-4">{t('token.feature3Title')}</h3>
              <p className="text-gray-200">
                {t('token.feature3Desc')}
              </p>
            </div>
          </Card>
        </div>
        
        {/* Token Launch Details */}
        <Card className="bg-gray-50 rounded-2xl p-8 lg:p-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-black text-patriot-navy mb-6">
                <span className="text-red-600">250</span><span className="text-gray-800">ST</span><span className="text-blue-600">AR</span> {t('token.tokenDetails')}
              </h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <i className="fas fa-coins text-patriot-red mr-3"></i>
                  <span className="font-semibold">{t('token.tokenName')}:</span>
                  <span className="ml-2 font-bold">
                    <span className="text-red-600">250</span><span className="text-gray-800">ST</span><span className="text-blue-600">AR</span>
                  </span>
                </div>
                <div className="flex items-center">
                  <i className="fas fa-tag text-patriot-red mr-3"></i>
                  <span className="font-semibold">{t('token.ticker')}:</span>
                  <span className="ml-2 font-bold">
                    $<span className="text-red-600">250</span><span className="text-gray-800">ST</span><span className="text-blue-600">AR</span>
                  </span>
                </div>
                <div className="flex items-center">
                  <i className="fas fa-calendar text-patriot-red mr-3"></i>
                  <span className="font-semibold">{t('token.launchDate')}:</span>
                  <span className="ml-2">{t('token.july4')}</span>
                </div>
                <div className="flex items-center">
                  <i className="fas fa-hashtag text-patriot-red mr-3"></i>
                  <span className="font-semibold">{t('token.supply')}:</span>
                  <span className="ml-2">{t('token.supplyAmount')}</span>
                </div>
                <div className="flex items-center">
                  <i className="fas fa-star text-patriot-red mr-3"></i>
                  <span className="font-semibold">{t('token.price')}:</span>
                  <span className="ml-2">{t('token.priceAmount')}</span>
                </div>
                <div className="flex items-center">
                  <i className="fas fa-shield-alt text-patriot-red mr-3"></i>
                  <span className="font-semibold">{t('token.network')}:</span>
                  <span className="ml-2">{t('token.ethereum')}</span>
                </div>
              </div>
              
              <div className="mt-8">
                <Button
                  onClick={handleJoinWaitlist}
                  className="bg-patriot-red hover:bg-patriot-red-hover text-white font-bold py-4 px-8 rounded-full text-lg transition-all transform hover:scale-105 shadow-lg w-full sm:w-auto"
                >
                  <i className="fas fa-bell mr-2"></i>
                  {t('nav.joinWaitlist')}
                </Button>
              </div>
            </div>
            
            <div className="text-center">
              {/* Hannah Magnelli professional photo */}
              <img
                src="https://static.wixstatic.com/media/0e0c7c_09bdf1e0833143d7a9628ceb9936f3d6~mv2.jpg/v1/fill/w_465,h_481,al_c,lg_1,q_80,enc_avif,quality_auto/image%20(2)_edited.jpg"
                alt={t('common.hannahMagnelliPhoto')}
                className="rounded-2xl shadow-2xl w-full max-w-md mx-auto"
              />
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}
