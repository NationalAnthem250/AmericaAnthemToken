export default function AboutSection() {
  const socialLinks = [
    {
      href: "http://instagram.com/hannah_magnelli",
      icon: "fab fa-instagram",
      bg: "bg-gradient-to-r from-pink-500 to-purple-600",
      label: "Instagram"
    },
    {
      href: "https://open.spotify.com/artist/2YTxM1lpF3cXda1xRv4ISB",
      icon: "fab fa-spotify",
      bg: "bg-green-500",
      label: "Spotify"
    },
    {
      href: "https://m.youtube.com/channel/UCat582BBxCZxdWKsG7chlhg",
      icon: "fab fa-youtube",
      bg: "bg-red-600",
      label: "YouTube"
    },
    {
      href: "http://www.apple.com/apple-music",
      icon: "fab fa-apple",
      bg: "bg-gray-800",
      label: "Apple Music"
    },
    {
      href: "https://www.facebook.com/Hannah-Magnelli-Mezzo-Soprano-101782365089031/",
      icon: "fab fa-facebook",
      bg: "bg-blue-600",
      label: "Facebook"
    }
  ];

  return (
    <section id="about" className="py-20 bg-patriot-navy">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
              MEET <span className="text-patriot-red">HANNAH MAGNELLI</span>
            </h2>
            <h3 className="text-2xl font-bold text-patriot-gold mb-6">MEZZO SOPRANO</h3>
            <p className="text-xl text-gray-300 mb-6 leading-relaxed">
              Hannah Magnelli is a professional mezzo soprano and operatic singer who brings her elevated classical training to innovative popular music. Her rich, lyric voice has been praised as "one of the most beautiful I've heard in years" by industry professionals.
            </p>
            <p className="text-lg text-gray-400 mb-8 leading-relaxed">
              With her unique ability to bridge classical excellence and contemporary appeal, Hannah represents the perfect artist to honor America's 250th anniversary through this historic tokenized musical tribute.
            </p>
            
            {/* Social Media Links */}
            <div className="flex flex-wrap gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.href}
                  href={social.href}
                  className={`${social.bg} text-white p-3 rounded-full hover:scale-110 transition-transform shadow-lg`}
                  aria-label={social.label}
                >
                  <i className={`${social.icon} text-xl`}></i>
                </a>
              ))}
            </div>
          </div>
          
          <div className="text-center lg:text-right">
            {/* Additional Hannah photo */}
            <img
              src="https://static.wixstatic.com/media/ac442f_4b93d88f8960462c9872808af23f1c52~mv2.png/v1/fill/w_539,h_679,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/IMG_1028_edited.png"
              alt="Hannah Magnelli Performance"
              className="rounded-2xl shadow-2xl w-full max-w-lg mx-auto lg:ml-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
