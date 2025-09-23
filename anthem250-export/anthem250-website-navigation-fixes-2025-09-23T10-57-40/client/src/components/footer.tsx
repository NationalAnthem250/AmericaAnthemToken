import { useLanguage } from '@/hooks/use-language';

export default function Footer() {
  const { t, formatters } = useLanguage();
  const quickLinks = [
    { href: "#hannah", label: t('footer.linkAboutHannah') },
    { href: "#tokenomics", label: t('footer.linkTokenLaunch') },
    { href: "#video", label: t('footer.linkNationalAnthem') },
    { href: "/terms", label: t('footer.linkTermsConditions') },
    { href: "https://america250.org/", label: t('footer.linkAmerica250') },
  ];

  const socialLinks = [
    { href: "http://instagram.com/hannah_magnelli", icon: "fab fa-instagram", label: t('footer.instagram') },
    { href: "https://open.spotify.com/artist/2YTxM1lpF3cXda1xRv4ISB", icon: "fab fa-spotify", label: t('footer.spotify') },
    { href: "https://m.youtube.com/channel/UCat582BBxCZxdWKsG7chlhg", icon: "fab fa-youtube", label: t('footer.youtube') },
    { href: "https://www.linkedin.com/company/anthem250", icon: "fab fa-linkedin", label: t('footer.linkedin') },
    { href: "https://www.hannahmagnelli.com/", icon: "fas fa-globe", label: t('footer.officialWebsite') },
  ];

  return (
    <footer id="contact" className="bg-patriot-navy text-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <img
              src="https://static.wixstatic.com/media/0e0c7c_1f143d393adb45b08f096242c8f00253~mv2.png/v1/fill/w_196,h_125,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Hannah%20Magnelli%20Logo.png"
              alt={t('common.hannahMagnelli')}
              className="h-12 w-auto mb-4 filter brightness-0 invert"
            />
            <p className="text-gray-400">
              {t('footer.professionalMezzo')}
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">{t('footer.quickLinks')}</h3>
            <ul className="space-y-2 text-gray-400">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="hover:text-white transition-colors"
                    {...(link.href.startsWith("http") && {
                      target: "_blank",
                      rel: "noopener noreferrer"
                    })}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="lg:col-span-1">
            <h3 className="text-xl font-bold mb-4 text-patriot-gold">{t('footer.contact')}</h3>
            <div className="space-y-3 text-gray-400">
              <div className="flex items-center space-x-3">
                <i className="fas fa-envelope text-patriot-gold"></i>
                <a 
                  href="mailto:info@anthem250.com" 
                  className="hover:text-white transition-colors"
                >
                  info@anthem250.com
                </a>
              </div>
              
              <div className="flex items-center space-x-3">
                <i className="fas fa-phone text-patriot-gold"></i>
                <a 
                  href="tel:+12026404040" 
                  className="hover:text-white transition-colors"
                >
                  202.640.4040
                </a>
              </div>
              
              <div className="flex items-start space-x-3">
                <i className="fas fa-building text-patriot-gold mt-1"></i>
                <div>
                  <p className="font-semibold">{t('footer.magnelliProductions')}</p>
                  <p className="text-sm">{t('footer.address1')}</p>
                  <p className="text-sm">{t('footer.address2')}</p>
                  <p className="text-sm">{t('footer.address3')}</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <i className="fas fa-clock text-patriot-gold"></i>
                <span>{t('footer.support247')}</span>
              </div>

            </div>
          </div>

          <div className="lg:col-span-1">
            <h3 className="text-xl font-bold mb-4 text-patriot-gold">{t('footer.followUs')}</h3>
            <div className="flex flex-wrap gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.href}
                  href={social.href}
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label={social.label}
                  {...(social.href.startsWith("http") && {
                    target: "_blank",
                    rel: "noopener noreferrer"
                  })}
                >
                  <i className={`${social.icon} text-2xl`}></i>
                </a>
              ))}
            </div>
            
            {/* Additional Contact Methods */}
            <div className="mt-6 space-y-2">
              <h4 className="text-lg font-semibold text-patriot-gold">{t('footer.communityChannels')}</h4>
              <div className="space-y-2 text-gray-400 text-sm">
                <div className="flex items-center space-x-2">
                  <i className="fab fa-discord text-patriot-blue"></i>
                  <a 
                    href="https://discord.gg/anthem250" 
                    className="hover:text-white transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {t('footer.joinDiscord')}
                  </a>
                </div>
                <div className="flex items-center space-x-2">
                  <i className="fab fa-telegram text-patriot-blue"></i>
                  <a 
                    href="https://t.me/anthem250" 
                    className="hover:text-white transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {t('footer.telegramUpdates')}
                  </a>
                </div>
                <div className="flex items-center space-x-2">
                  <i className="fas fa-newspaper text-patriot-gold"></i>
                  <a 
                    href="mailto:press@anthem250.com" 
                    className="hover:text-white transition-colors"
                  >
                    {t('footer.pressInquiries')}
                  </a>
                </div>
                <div className="flex items-center space-x-2">
                  <i className="fas fa-headset text-patriot-gold"></i>
                  <a 
                    href="mailto:support@anthem250.com" 
                    className="hover:text-white transition-colors"
                  >
                    {t('footer.technicalSupport')}
                  </a>
                </div>
              </div>
              
              <div className="mt-4 pt-3 border-t border-gray-600">
                <p className="text-xs text-gray-500">
                  {t('footer.responseTime')}<br/>
                  {t('footer.emergencySupport')}
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8">
          {/* Crypto Token Disclaimer */}
          <div className="bg-patriot-navy/50 rounded-lg p-6 mb-8 border border-gray-700">
            <h4 className="text-patriot-gold font-bold text-lg mb-4 text-center">{t('footer.disclaimer')}</h4>
            <div className="text-sm text-gray-300 leading-relaxed space-y-3">
              <p>
                <strong>{t('footer.disclaimerText').split('.')[0]}.</strong> {t('footer.disclaimerText').split('.').slice(1, 3).join('.')}
              </p>
              <p>
                {t('footer.politicalDisclaimer')}
              </p>
              <p>
                {t('footer.tokenDisclaimer')}
              </p>
              <p>
                <strong>{t('token.network')}:</strong> Built on Solana blockchain for fast, low-cost transactions. <strong>{t('token.supply')}:</strong> {formatters.tokenAmount(1776000000)} total tokens commemorating the year of American independence. <strong>{t('token.price')}:</strong> {formatters.currency(1.77)} per token in honor of 1776.
              </p>
              <p className="text-xs text-gray-400 mt-4">
                {t('footer.projectDisclaimer')}
              </p>
            </div>
          </div>

          {/* Footer Copyright */}
          <div className="text-center">
            <div className="mb-4">
              <p className="text-xl md:text-2xl text-yellow-400 font-medium leading-relaxed">
                {t('video.heroSubtitle1')} 
                <strong>{t('video.heroSubtitle2')}</strong>
                {t('video.heroSubtitle3')}
              </p>
            </div>
            <p className="text-gray-400">{t('footer.copyright')}</p>
            <p className="text-xs text-gray-500 mt-2">{t('footer.contractAddress')}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
