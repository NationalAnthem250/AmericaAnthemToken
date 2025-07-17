import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function PerformersSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="performers" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header - Clean PBS Style */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-patriot-navy mb-4">
            Featured Performer
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Experience world-class classical artistry for America's 250th celebration
          </p>
        </div>

        {/* Hannah Magnelli Showcase */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Performance Info */}
          <div className="order-2 lg:order-1">
            <Card className="bg-white/95 backdrop-blur-sm p-8 rounded-2xl shadow-2xl border-4 border-patriot-red/30">
              <div className="mb-6">
                <h3 className="text-3xl md:text-4xl font-black text-patriot-navy mb-4">
                  Hannah Magnelli
                </h3>
                <div className="text-xl font-bold text-patriot-red mb-4">
                  Professional Mezzo-Soprano
                </div>
                <p className="text-lg text-patriot-navy leading-relaxed mb-6">
                  Hannah brings her elevated classical training and professional performance experience to create 
                  the definitive tokenized version of America's National Anthem. Her powerful mezzo-soprano voice 
                  delivers a stirring tribute perfect for America's historic 250th anniversary celebration.
                </p>
              </div>

              {/* Performance Highlights */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="bg-patriot-blue/10 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-patriot-red">🎭</div>
                  <div className="text-sm font-semibold text-patriot-navy">Classical Training</div>
                </div>
                <div className="bg-patriot-red/10 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-patriot-blue">🎵</div>
                  <div className="text-sm font-semibold text-patriot-navy">Professional Grade</div>
                </div>
                <div className="bg-yellow-500/20 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-patriot-navy">⭐</div>
                  <div className="text-sm font-semibold text-patriot-navy">America250 Official</div>
                </div>
                <div className="bg-patriot-blue/10 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-patriot-red">🏛️</div>
                  <div className="text-sm font-semibold text-patriot-navy">Historic Performance</div>
                </div>
              </div>

              <Button
                onClick={() => scrollToSection("video")}
                className="w-full bg-patriot-red hover:bg-red-700 text-white font-bold py-4 px-6 rounded-full text-lg transition-all transform hover:scale-105 shadow-lg"
              >
                <i className="fas fa-play mr-3"></i>
                Watch Hannah's Performance
              </Button>
            </Card>
          </div>

          {/* Performance Preview */}
          <div className="order-1 lg:order-2">
            <Card className="bg-gradient-to-br from-patriot-red/90 to-patriot-blue/90 backdrop-blur-sm p-8 rounded-2xl shadow-2xl border-4 border-white/40">
              <div className="text-center text-white">
                <div className="mb-6">
                  <i className="fas fa-music text-6xl text-yellow-300 mb-4"></i>
                  <h4 className="text-2xl font-bold mb-4">
                    "The Star-Spangled Banner"
                  </h4>
                  <p className="text-lg opacity-90 mb-6">
                    A stirring rendition of America's National Anthem, performed with classical precision 
                    and patriotic passion for the nation's 250th anniversary.
                  </p>
                </div>

                {/* Performance Stats */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-white/20 rounded-lg p-4">
                    <div className="text-2xl font-bold text-yellow-300">4:32</div>
                    <div className="text-sm opacity-90">Duration</div>
                  </div>
                  <div className="bg-white/20 rounded-lg p-4">
                    <div className="text-2xl font-bold text-yellow-300">2026</div>
                    <div className="text-sm opacity-90">Release Year</div>
                  </div>
                </div>

                <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4">
                  <div className="text-sm font-semibold mb-2">Available Platforms:</div>
                  <div className="flex flex-wrap justify-center gap-2 text-xs">
                    <span className="bg-patriot-red/80 px-3 py-1 rounded-full">Blockchain NFT</span>
                    <span className="bg-patriot-blue/80 px-3 py-1 rounded-full">Vimeo Streaming</span>
                    <span className="bg-yellow-500/80 px-3 py-1 rounded-full text-patriot-navy">Exclusive Access</span>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <Card className="bg-white/95 backdrop-blur-sm p-8 rounded-2xl shadow-2xl border-4 border-yellow-500/50 inline-block">
            <h4 className="text-2xl font-bold text-patriot-navy mb-4">
              🎆 Be Part of America's Historic Celebration 🎆
            </h4>
            <p className="text-lg text-patriot-navy mb-6 max-w-2xl">
              Join thousands of patriots celebrating America's 250th anniversary with Hannah's exclusive tokenized performance
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={() => scrollToSection("video")}
                className="bg-patriot-blue hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full transition-all transform hover:scale-105 shadow-lg"
              >
                <i className="fas fa-video mr-2"></i>
                Preview Performance
              </Button>
              <Button
                onClick={() => scrollToSection("token")}
                className="bg-patriot-red hover:bg-red-700 text-white font-bold py-3 px-6 rounded-full transition-all transform hover:scale-105 shadow-lg"
              >
                <i className="fas fa-star mr-2"></i>
                Join Token Launch
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}