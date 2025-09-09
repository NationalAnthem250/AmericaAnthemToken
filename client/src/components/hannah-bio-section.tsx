import hannahImage from "@assets/82f267b12c0b788bfef3b9c786f981eedc826c98-1_1757459292112.jpeg";

export default function HannahBioSection() {
  return (
    <section id="hannah" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-black text-patriot-navy mb-6">
            MEET <span className="text-patriot-red">HANNAH MAGNELLI</span>
          </h2>
          <h3 className="text-2xl font-bold text-patriot-gold mb-6">PROFESSIONAL MEZZO SOPRANO</h3>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-12 items-start">
          {/* Hannah's Photo */}
          <div className="lg:col-span-1">
            <div className="relative">
              <img
                src={hannahImage}
                alt="Hannah Magnelli - Professional Mezzo Soprano"
                className="w-full h-auto rounded-lg shadow-lg border-4 border-patriot-gold/30"
              />
              <div className="absolute -bottom-4 -right-4 bg-patriot-gold text-patriot-navy px-4 py-2 rounded-full font-bold text-sm shadow-lg">
                🎭 FEATURED PERFORMER
              </div>
            </div>
          </div>
        
          <div className="lg:col-span-2 grid lg:grid-cols-1 gap-8">
            {/* Bio Content */}
            <div>
              <div className="prose prose-lg max-w-none">
                <p className="text-xl text-gray-700 mb-6 leading-relaxed">
                  Hannah Magnelli is a professional mezzo soprano who has made history as the first artist to create an NFT of the US National Anthem. Her rich, lyric voice has been praised as <em>"one of the most beautiful and rich lyric mezzo voices I've heard in years"</em> by industry professionals.
                </p>
                
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  With her elevated classical training and professional performance experience, Hannah brings unparalleled artistry to America's most treasured song. Her powerful interpretation of "The Star-Spangled Banner" combines classical precision with heartfelt patriotism.
                </p>
                
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  By combining her classical excellence with groundbreaking digital innovation, Hannah offers patriotic Americans the opportunity to own a piece of American heritage in the form of this historic NFT, commemorating our nation's 250th anniversary.
                </p>
              </div>
              
              <div className="bg-slate-50 border border-slate-200 rounded-lg p-6">
                <blockquote className="text-lg italic text-gray-700 mb-4">
                  "One of the most beautiful and rich lyric mezzo voices I've heard in years."
                </blockquote>
                <cite className="text-patriot-gold font-semibold">
                  - Richard Nechamkin, Mississippi Opera
                </cite>
              </div>
            </div>
            
            {/* Professional Highlights */}
            <div>
              <div className="bg-patriot-navy text-white p-8 rounded-lg shadow-lg">
                <h4 className="text-2xl font-bold mb-6 text-patriot-gold">Professional Highlights</h4>
                
                <div className="space-y-4 mb-6">
                  <div className="flex items-start">
                    <div className="bg-patriot-gold text-patriot-navy rounded-full p-2 mr-4 mt-1">
                      <i className="fas fa-music text-sm"></i>
                    </div>
                    <div>
                      <h5 className="font-semibold text-patriot-gold">Classical Training</h5>
                      <p className="text-gray-300">Professionally trained mezzo soprano with years of performance experience</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-patriot-red text-white rounded-full p-2 mr-4 mt-1">
                      <i className="fas fa-flag text-sm"></i>
                    </div>
                    <div>
                      <h5 className="font-semibold text-patriot-gold">Historic Achievement</h5>
                      <p className="text-gray-300">First artist to create an NFT of America's National Anthem</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-patriot-blue text-white rounded-full p-2 mr-4 mt-1">
                      <i className="fas fa-landmark text-sm"></i>
                    </div>
                    <div>
                      <h5 className="font-semibold text-patriot-gold">America250 Official</h5>
                      <p className="text-gray-300">Commemorating the United States' 250th Anniversary</p>
                    </div>
                  </div>
                </div>
                
                <div className="border-t border-gray-600 pt-6">
                  <h5 className="font-semibold text-patriot-gold mb-3">Performance Features</h5>
                  <div className="grid grid-cols-2 gap-3 text-sm">
                    <span className="bg-patriot-gold/20 px-3 py-2 rounded border border-patriot-gold/50">🏛️ Capitol Dome</span>
                    <span className="bg-patriot-red/20 px-3 py-2 rounded border border-patriot-red/50">🔔 Liberty Bell</span>
                    <span className="bg-patriot-blue/20 px-3 py-2 rounded border border-patriot-blue/50">🗽 Historic Sites</span>
                    <span className="bg-patriot-gold/20 px-3 py-2 rounded border border-patriot-gold/50">🎭 Classical Excellence</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}