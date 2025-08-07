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
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <div className="mb-4">
            <p className="text-xl md:text-2xl text-yellow-400 font-medium leading-relaxed">
              The <strong>first-ever NFT</strong> of America's National Anthem, performed by professional mezzo soprano 
              <strong> Hannah Magnelli</strong>, in commemoration of the United States' 250th Anniversary
            </p>
          </div>
          <p className="text-gray-400">&copy; 2026 Hannah Magnelli. Celebrating America's 250th Anniversary. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
