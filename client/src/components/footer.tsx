export default function Footer() {
  const quickLinks = [
    { href: "#about", label: "About Hannah" },
    { href: "#token", label: "Token Launch" },
    { href: "#anthem", label: "National Anthem" },
    { href: "https://america250.org/", label: "America250.org" },
  ];

  const socialLinks = [
    { href: "http://instagram.com/hannah_magnelli", icon: "fab fa-instagram", label: "Instagram" },
    { href: "https://open.spotify.com/artist/2YTxM1lpF3cXda1xRv4ISB", icon: "fab fa-spotify", label: "Spotify" },
    { href: "https://m.youtube.com/channel/UCat582BBxCZxdWKsG7chlhg", icon: "fab fa-youtube", label: "YouTube" },
    { href: "https://www.hannahmagnelli.com/", icon: "fas fa-globe", label: "Official Website" },
  ];

  return (
    <footer className="bg-patriot-navy text-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
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
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
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
          
          <div>
            <h3 className="text-xl font-bold mb-4">Connect</h3>
            <div className="flex space-x-4">
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
                <strong>Network:</strong> Built on Solana blockchain for fast, low-cost transactions. <strong>Supply:</strong> 1,776,000 total tokens commemorating the year of American independence. <strong>Price:</strong> $17.76 per token in honor of 1776.
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
            <p className="text-gray-400">&copy; 2026 Hannah Magnelli. Celebrating America's 250th Anniversary. All rights reserved.</p>
            <p className="text-xs text-gray-500 mt-2">250STAR • Solana Network • Contract: [Contract Address TBD]</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
