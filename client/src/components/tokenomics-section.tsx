import SocialShareButtons from "@/components/social-share-buttons";
import { useLanguage } from '@/contexts/language-context';

export default function TokenomicsSection() {
  const { t } = useLanguage();
  const tokenomicsData = [
    { label: t('tokenomics.totalSupply'), value: "1,776,000,000", color: "text-patriot-red", percentage: 100 },
    { label: t('tokenomics.publicSale'), value: "710,400,000", color: "text-patriot-gold", percentage: 40 },
    { label: t('tokenomics.communityRewards'), value: "444,000,000", color: "text-green-400", percentage: 25 },
    { label: t('tokenomics.hannahMagnelli'), value: "266,400,000", color: "text-patriot-blue", percentage: 15 },
    { label: t('tokenomics.development'), value: "177,600,000", color: "text-purple-400", percentage: 10 },
    { label: t('tokenomics.marketing'), value: "88,800,000", color: "text-pink-400", percentage: 5 },
    { label: t('tokenomics.reserveTreasury'), value: "88,800,000", color: "text-orange-400", percentage: 5 },
  ];

  return (
    <section id="tokenomics" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-6">
            <span className="text-red-600">250</span><span className="text-white" style={{ WebkitTextStroke: '1px #000' }}>ST</span><span className="text-blue-600">AR</span> <span className="text-patriot-red">{t('tokenomics.title')}</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('tokenomics.subtitle')}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Chart Visualization */}
          <div className="relative">
            <div className="w-80 h-80 mx-auto relative">
              {/* Pie Chart Placeholder - In a real app, you'd use a charting library */}
              <div className="w-full h-full rounded-full border-8 border-patriot-gold relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-patriot-red via-patriot-blue to-patriot-gold opacity-20"></div>
                <div className="absolute inset-4 bg-white rounded-full flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-4xl font-black text-patriot-navy">1.776B</div>
                    <div className="text-sm text-gray-600">
                      <span className="text-red-600">250</span><span className="text-gray-800">ST</span><span className="text-blue-600">AR</span> {t('tokenomics.tokens')}
                    </div>
                    <div className="text-xs text-patriot-gold font-semibold">{t('tokenomics.commemorating')}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Token Details */}
          <div className="space-y-6">
            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
              <h3 className="text-2xl font-bold text-patriot-navy mb-4">{t('tokenomics.tokenDetails')}</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">{t('tokenomics.tokenName')}:</span>
                  <span className="font-semibold">
                    <span className="text-red-600">250</span><span className="text-gray-800">ST</span><span className="text-blue-600">AR</span>
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">{t('tokenomics.totalSupply')}:</span>
                  <span className="font-semibold text-patriot-red">1,776,000,000</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">{t('tokenomics.launchPrice')}:</span>
                  <span className="font-semibold text-patriot-gold">$1.77 USD</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">{t('tokenomics.network')}:</span>
                  <span className="font-semibold text-patriot-blue">{t('tokenomics.solana')}</span>
                </div>
              </div>
            </div>

            {/* Allocation Breakdown */}
            <div className="space-y-4">
              {tokenomicsData.map((item, index) => (
                <div key={index} className="bg-white rounded-lg p-4 shadow border border-gray-200">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-semibold text-patriot-navy">{item.label}</span>
                    <span className={`font-bold ${item.color}`}>{item.value}</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-patriot-red to-patriot-gold h-2 rounded-full transition-all duration-500"
                      style={{ width: `${item.percentage}%` }}
                    ></div>
                  </div>
                  <div className="text-sm text-gray-600 mt-1">{item.percentage}% {t('tokenomics.ofTotalSupply')}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Key Benefits */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <div className="text-center bg-patriot-red/10 rounded-xl p-6 border border-patriot-red/20">
            <div className="w-16 h-16 bg-patriot-red rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="fas fa-shield-alt text-white text-2xl"></i>
            </div>
            <h4 className="text-xl font-bold text-patriot-navy mb-2">{t('tokenomics.deflationary')}</h4>
            <p className="text-gray-600">
              {t('tokenomics.deflationaryDesc')}
            </p>
          </div>

          <div className="text-center bg-patriot-blue/10 rounded-xl p-6 border border-patriot-blue/20">
            <div className="w-16 h-16 bg-patriot-blue rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="fas fa-vote-yea text-white text-2xl"></i>
            </div>
            <h4 className="text-xl font-bold text-patriot-navy mb-2">{t('tokenomics.governance')}</h4>
            <p className="text-gray-600">
              {t('tokenomics.governanceDesc')}
            </p>
          </div>

          <div className="text-center bg-patriot-gold/10 rounded-xl p-6 border border-patriot-gold/20">
            <div className="w-16 h-16 bg-patriot-gold rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="fas fa-coins text-patriot-navy text-2xl"></i>
            </div>
            <h4 className="text-xl font-bold text-patriot-navy mb-2">{t('tokenomics.utility')}</h4>
            <p className="text-gray-600">
              {t('tokenomics.utilityDesc')}
            </p>
          </div>
        </div>
        
        {/* Share Buttons */}
        <div className="mt-16">
          <SocialShareButtons 
            variant="compact" 
            position="center"
            title="Check out the 250STAR Tokenomics - Commemorating America's 250th Anniversary"
            description="Learn about the transparent token allocation designed for America's semiquincentennial celebration"
          />
        </div>
      </div>
    </section>
  );
}