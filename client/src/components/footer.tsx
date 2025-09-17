import { useLanguage } from '@/contexts/language-context';

export default function Footer() {
  const { t } = useLanguage();
  const quickLinks = [
    { href: "#about", label: "About Hannah" },
    { href: "#token", label: "Token Launch" },
    { href: "#anthem", label: "National Anthem" },
    { href: "/terms", label: "Terms & Conditions" },
    { href: "https://america250.org/", label: "America250.org" },
  ];

  const socialLinks = [
    { href: "http://instagram.com/hannah_magnelli", icon: "fab fa-instagram", label: "Instagram" },
    { href: "https://open.spotify.com/artist/2YTxM1lpF3cXda1xRv4ISB", icon: "fab fa-spotify", label: "Spotify" },
    { href: "https://m.youtube.com/channel/UCat582BBxCZxdWKsG7chlhg", icon: "fab fa-youtube", label: "YouTube" },
    { href: "https://www.linkedin.com/company/anthem250", icon: "fab fa-linkedin", label: "LinkedIn" },
    { href: "https://www.hannahmagnelli.com/", icon: "fas fa-globe", label: "Official Website" },
  ];

  return (
    <footer className="bg-patriot-navy text-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <img
              src="https://static.wixstatic.com/media/0e0c7c_1f143d393adb45b08f096242c8f00253~mv2.png/v1/fill/w_196,h_125,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Hannah%20Magnelli%20Logo.png"
              alt="Hannah Magnelli"
              className="h-12 w-auto mb-4 filter brightness-0 invert"
            />
            <p className="text-gray-400">
              Professional mezzo soprano celebrating America's 250th anniversary through innovative musical tokenization.
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
                  <p className="font-semibold">Magnelli Productions, LLC</p>
                  <p className="text-sm">996 Maine Ave SW</p>
                  <p className="text-sm">Suite 930</p>
                  <p className="text-sm">Washington DC, 20024</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <i className="fas fa-clock text-patriot-gold"></i>
                <span>24/7 Community Support</span>
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
              <h4 className="text-lg font-semibold text-patriot-gold">Community Channels</h4>
              <div className="space-y-2 text-gray-400 text-sm">
                <div className="flex items-center space-x-2">
                  <i className="fab fa-discord text-patriot-blue"></i>
                  <a 
                    href="https://discord.gg/anthem250" 
                    className="hover:text-white transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Join Discord Community
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
                    Telegram Updates
                  </a>
                </div>
                <div className="flex items-center space-x-2">
                  <i className="fas fa-newspaper text-patriot-gold"></i>
                  <a 
                    href="mailto:press@anthem250.com" 
                    className="hover:text-white transition-colors"
                  >
                    Press Inquiries
                  </a>
                </div>
                <div className="flex items-center space-x-2">
                  <i className="fas fa-headset text-patriot-gold"></i>
                  <a 
                    href="mailto:support@anthem250.com" 
                    className="hover:text-white transition-colors"
                  >
                    Technical Support
                  </a>
                </div>
              </div>
              
              <div className="mt-4 pt-3 border-t border-gray-600">
                <p className="text-xs text-gray-500">
                  Response time: 24-48 hours<br/>
                  Emergency support available via Discord
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8">
          {/* Crypto Token Disclaimer */}
          <div className="bg-patriot-navy/50 rounded-lg p-6 mb-8 border border-gray-700">
            <h4 className="text-patriot-gold font-bold text-lg mb-4 text-center">Important Disclosure</h4>
            <div className="text-sm text-gray-300 leading-relaxed space-y-3">
              <p>
                <strong>250STAR tokens are intended to function as an expression of support for, and engagement with, the patriotic ideals and cultural heritage embodied by America's 250th anniversary celebration and Hannah Magnelli's National Anthem performance.</strong> 250STAR tokens are not intended to be, or to be the subject of, an investment opportunity, investment contract, or security of any type.
              </p>
              <p>
                Anthem250.com is a commemorative cultural project celebrating American heritage and has no political affiliation with any political campaign, political office, or governmental agency. This project is focused solely on preserving and celebrating American musical and cultural history.
              </p>
              <p>
                250STAR tokens are digital collectibles created to commemorate America's Semiquincentennial celebration. Token holders may receive access to exclusive content, performances, and community features, but tokens should not be purchased with any expectation of profit or financial return.
              </p>
              <p>
                <strong>Network:</strong> Built on Solana blockchain for fast, low-cost transactions. <strong>Supply:</strong> 1,776,000,000 total tokens commemorating the year of American independence. <strong>Price:</strong> $1.77 per token in honor of 1776.
              </p>
              <p className="text-xs text-gray-400 mt-4">
                This project is not affiliated with or endorsed by the official America250 Foundation. Please review our Terms & Conditions and Token Allocation details before participating. Cryptocurrency investments carry risk - never invest more than you can afford to lose.
              </p>
            </div>
          </div>

          {/* Footer Copyright */}
          <div className="text-center">
            <div className="mb-4">
              <p className="text-xl md:text-2xl text-yellow-400 font-medium leading-relaxed">
                The <strong>first-ever NFT</strong> of America's National Anthem, performed by professional mezzo soprano 
                <strong> Hannah Magnelli</strong>, in commemoration of the United States' 250th Anniversary
              </p>
            </div>
            <p className="text-gray-400">{t('footer.copyright')}</p>
            <p className="text-xs text-gray-500 mt-2">250STAR • Solana Network • Contract: [Contract Address TBD]</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
