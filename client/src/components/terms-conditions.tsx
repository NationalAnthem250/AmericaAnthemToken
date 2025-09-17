import { Card, CardContent } from "@/components/ui/card";
import { useLanguage } from '@/contexts/language-context';

export default function TermsConditions() {
  const { t } = useLanguage();
  return (
    <section className="py-20 bg-gradient-to-b from-patriot-navy to-black">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
            {t('terms.title')} <span className="text-patriot-gold">{t('terms.titleHighlight')}</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            {t('terms.subtitle')}
          </p>
        </div>

        <Card className="bg-white/10 backdrop-blur-sm border-patriot-gold/30">
          <CardContent className="p-8 space-y-8 text-gray-300">
            
            {/* Acceptance of Terms */}
            <div>
              <h3 className="text-2xl font-bold text-patriot-gold mb-4">{t('terms.section1Title')}</h3>
              <p className="leading-relaxed">
                {t('terms.section1Text')}
              </p>
            </div>

            {/* Nature of 250STAR Tokens */}
            <div>
              <h3 className="text-2xl font-bold text-patriot-gold mb-4">{t('terms.section2Title')}</h3>
              <div className="space-y-4">
                <p className="leading-relaxed">
                  <strong className="text-white">{t('terms.section2CulturalExpression')}</strong> {t('terms.section2CulturalText')}
                </p>
                <p className="leading-relaxed">
                  <strong className="text-white">{t('terms.section2NotSecurities')}</strong> {t('terms.section2NotSecuritiesText')}
                </p>
                <p className="leading-relaxed">
                  <strong className="text-white">{t('terms.section2DigitalCollectibles')}</strong> {t('terms.section2DigitalText')}
                </p>
              </div>
            </div>

            {/* Blockchain and Technical Details */}
            <div>
              <h3 className="text-2xl font-bold text-patriot-gold mb-4">{t('terms.section3Title')}</h3>
              <div className="space-y-4">
                <p className="leading-relaxed">
                  <strong className="text-white">{t('terms.section3Network')}</strong> {t('terms.section3NetworkText')}
                </p>
                <p className="leading-relaxed">
                  <strong className="text-white">{t('terms.section3Supply')}</strong> {t('terms.section3SupplyText')}
                </p>
                <p className="leading-relaxed">
                  <strong className="text-white">{t('terms.section3Price')}</strong> {t('terms.section3PriceText')}
                </p>
                <p className="leading-relaxed">
                  <strong className="text-white">{t('terms.section3TechnicalRisks')}</strong> {t('terms.section3TechnicalText')}
                </p>
              </div>
            </div>

            {/* Eligibility and Compliance */}
            <div>
              <h3 className="text-2xl font-bold text-patriot-gold mb-4">{t('terms.section4Title')}</h3>
              <div className="space-y-4">
                <p className="leading-relaxed">
                  {t('terms.section4Age')}
                </p>
                <p className="leading-relaxed">
                  {t('terms.section4Compliance')}
                </p>
                <p className="leading-relaxed">
                  {t('terms.section4Restrictions')}
                </p>
              </div>
            </div>

            {/* Risks and Disclaimers */}
            <div>
              <h3 className="text-2xl font-bold text-patriot-gold mb-4">{t('terms.section5Title')}</h3>
              <div className="space-y-4">
                <p className="leading-relaxed">
                  <strong className="text-white">{t('terms.section5CryptoRisks')}</strong> {t('terms.section5CryptoText')}
                </p>
                <p className="leading-relaxed">
                  <strong className="text-white">{t('terms.section5NoAdvice')}</strong> {t('terms.section5NoAdviceText')}
                </p>
                <p className="leading-relaxed">
                  <strong className="text-white">{t('terms.section5CulturalPurpose')}</strong> {t('terms.section5CulturalText')}
                </p>
              </div>
            </div>

            {/* Intellectual Property */}
            <div>
              <h3 className="text-2xl font-bold text-patriot-gold mb-4">{t('terms.section6Title')}</h3>
              <p className="leading-relaxed">
                {t('terms.section6Text')}
              </p>
            </div>

            {/* Limitation of Liability */}
            <div>
              <h3 className="text-2xl font-bold text-patriot-gold mb-4">{t('terms.section7Title')}</h3>
              <div className="space-y-4">
                <p className="leading-relaxed">
                  {t('terms.section7Text1')}
                </p>
                <p className="leading-relaxed">
                  {t('terms.section7Text2')}
                </p>
              </div>
            </div>

            {/* Privacy and Data */}
            <div>
              <h3 className="text-2xl font-bold text-patriot-gold mb-4">{t('terms.section8Title')}</h3>
              <p className="leading-relaxed">
                {t('terms.section8Text')}
              </p>
            </div>

            {/* Modifications */}
            <div>
              <h3 className="text-2xl font-bold text-patriot-gold mb-4">{t('terms.section9Title')}</h3>
              <p className="leading-relaxed">
                {t('terms.section9Text')}
              </p>
            </div>

            {/* Governing Law */}
            <div>
              <h3 className="text-2xl font-bold text-patriot-gold mb-4">{t('terms.section10Title')}</h3>
              <p className="leading-relaxed">
                {t('terms.section10Text')}
              </p>
            </div>

            {/* Contact Information */}
            <div>
              <h3 className="text-2xl font-bold text-patriot-gold mb-4">{t('terms.section11Title')}</h3>
              <div className="space-y-2">
                <p className="leading-relaxed">
                  {t('terms.section11Intro')}
                </p>
                <p className="leading-relaxed">
                  <strong className="text-white">{t('terms.contactEmail')}</strong> {t('terms.contactEmailAddress')}
                </p>
                <p className="leading-relaxed">
                  <strong className="text-white">{t('terms.contactWebsite')}</strong> {t('terms.contactWebsiteUrl')}
                </p>
              </div>
            </div>

            {/* Effective Date */}
            <div className="border-t border-gray-700 pt-6 text-center">
              <p className="text-sm text-gray-400">
                <strong>{t('terms.effectiveDateLabel')}</strong> {t('terms.effectiveDate')}<br />
                <strong>{t('terms.lastUpdatedLabel')}</strong> {t('terms.lastUpdatedDate')}
              </p>
              <p className="text-xs text-gray-500 mt-4">
                {t('terms.notAffiliatedText')}
                {t('terms.contractInfo')}
              </p>
            </div>

          </CardContent>
        </Card>
      </div>
    </section>
  );
}