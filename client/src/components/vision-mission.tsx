import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function VisionMission() {
  return (
    <section className="py-20 bg-gradient-to-br from-patriot-navy via-slate-900 to-patriot-navy relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 border-2 border-patriot-gold rounded-full"></div>
        <div className="absolute top-40 right-20 w-24 h-24 border-2 border-patriot-red rounded-full"></div>
        <div className="absolute bottom-20 left-1/4 w-40 h-40 border-2 border-patriot-blue rounded-full"></div>
        <div className="absolute bottom-40 right-10 w-28 h-28 border-2 border-patriot-gold rounded-full"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
            OUR <span className="text-patriot-gold">VISION</span> & <span className="text-patriot-red">MISSION</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Bridging American heritage with innovative technology to create lasting commemorative experiences
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {/* Vision Card */}
          <Card className="bg-white/10 backdrop-blur-sm border-patriot-gold/30 hover:border-patriot-gold/60 transition-all duration-300 group">
            <CardHeader className="text-center pb-6">
              <div className="w-20 h-20 mx-auto mb-4 bg-patriot-gold/20 rounded-full flex items-center justify-center group-hover:bg-patriot-gold/30 transition-colors">
                <div className="text-4xl">🔮</div>
              </div>
              <CardTitle className="text-3xl text-patriot-gold">OUR VISION</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-lg text-gray-200 leading-relaxed">
                To be the premier platform for commemorating America's most significant milestones through innovative digital collectibles that preserve our nation's musical heritage for future generations.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <span className="text-patriot-gold text-xl mt-1">⭐</span>
                  <p className="text-gray-300">
                    <strong className="text-white">Preserve History:</strong> Digitally safeguard America's musical treasures for posterity
                  </p>
                </div>
                
                <div className="flex items-start space-x-3">
                  <span className="text-patriot-gold text-xl mt-1">🇺🇸</span>
                  <p className="text-gray-300">
                    <strong className="text-white">Celebrate Heritage:</strong> Honor the cultural significance of our National Anthem
                  </p>
                </div>
                
                <div className="flex items-start space-x-3">
                  <span className="text-patriot-gold text-xl mt-1">🚀</span>
                  <p className="text-gray-300">
                    <strong className="text-white">Innovate Tradition:</strong> Merge timeless American values with cutting-edge blockchain technology
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Mission Card */}
          <Card className="bg-white/10 backdrop-blur-sm border-patriot-red/30 hover:border-patriot-red/60 transition-all duration-300 group">
            <CardHeader className="text-center pb-6">
              <div className="w-20 h-20 mx-auto mb-4 bg-patriot-red/20 rounded-full flex items-center justify-center group-hover:bg-patriot-red/30 transition-colors">
                <div className="text-4xl">🎯</div>
              </div>
              <CardTitle className="text-3xl text-patriot-red">OUR MISSION</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-lg text-gray-200 leading-relaxed">
                To create accessible, meaningful digital collectibles that allow every American to own a piece of our nation's 250th anniversary celebration while supporting professional artists and preserving cultural heritage.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <span className="text-patriot-red text-xl mt-1">💎</span>
                  <p className="text-gray-300">
                    <strong className="text-white">Democratize Ownership:</strong> Make historic memorabilia accessible to all Americans
                  </p>
                </div>
                
                <div className="flex items-start space-x-3">
                  <span className="text-patriot-red text-xl mt-1">🎵</span>
                  <p className="text-gray-300">
                    <strong className="text-white">Support Artists:</strong> Empower professional musicians through innovative revenue streams
                  </p>
                </div>
                
                <div className="flex items-start space-x-3">
                  <span className="text-patriot-red text-xl mt-1">🤝</span>
                  <p className="text-gray-300">
                    <strong className="text-white">Build Community:</strong> Connect patriotic Americans through shared digital ownership
                  </p>
                </div>
                
                <div className="flex items-start space-x-3">
                  <span className="text-patriot-red text-xl mt-1">🔒</span>
                  <p className="text-gray-300">
                    <strong className="text-white">Ensure Security:</strong> Provide transparent, secure blockchain-based authenticity
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-patriot-red/20 via-patriot-gold/20 to-patriot-blue/20 rounded-2xl p-8 border border-patriot-gold/30">
            <h3 className="text-2xl font-bold text-white mb-4">
              Join Us in Making History
            </h3>
            <p className="text-gray-300 text-lg mb-6 max-w-2xl mx-auto">
              Be part of America's most significant digital commemoration as we celebrate 250 years of independence through the power of music and technology.
            </p>
            <a 
              href="#participate" 
              className="inline-block bg-patriot-gold text-patriot-navy font-bold px-8 py-4 rounded-full hover:bg-patriot-gold/90 transition-colors text-lg"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('participate')?.scrollIntoView({ 
                  behavior: 'smooth',
                  block: 'start'
                });
              }}
            >
              Join the Waitlist
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}