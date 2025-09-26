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

        {/* Hannah Magnelli Showcase - Enhanced with Landmarks */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Performance Info */}
          <div className="order-2 lg:order-1">
            <Card className="bg-white border border-patriot-gold/30 p-8 rounded-lg shadow-lg">
              <div className="mb-6">
                <div className="flex items-center mb-4">
                  <div className="bg-patriot-gold text-patriot-navy px-3 py-1 rounded-full text-sm font-bold mr-3">
                    FEATURED PERFORMER
                  </div>
                  <div className="bg-patriot-navy text-white px-3 py-1 rounded-full text-sm font-bold">
                    AMERICA250 OFFICIAL
                  </div>
                </div>
                <h3 className="text-3xl md:text-4xl font-black text-patriot-navy mb-4">
                  Hannah Magnelli
                </h3>
                <div className="text-xl font-bold text-patriot-red mb-4">
                  Professional Mezzo-Soprano
                </div>
                <p className="text-lg text-slate-700 leading-relaxed mb-6">
                  Hannah brings her elevated classical training and professional performance experience to create 
                  the definitive tokenized version of America's National Anthem. Her powerful mezzo-soprano voice 
                  delivers a stirring tribute featuring authentic American landmarks for America's historic 250th anniversary celebration.
                </p>
              </div>

              {/* Enhanced Performance Highlights */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="bg-patriot-blue/5 border border-patriot-blue/20 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-patriot-blue">🎭</div>
                  <div className="text-sm font-semibold text-patriot-navy">Classical Training</div>
                  <div className="text-xs text-patriot-gold font-semibold">Professional Grade</div>
                </div>
                <div className="bg-patriot-red/5 border border-patriot-red/20 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-patriot-red">🎵</div>
                  <div className="text-sm font-semibold text-patriot-navy">National Anthem</div>
                  <div className="text-xs text-patriot-gold font-semibold">Historic Performance</div>
                </div>
                <div className="bg-patriot-gold/10 border border-patriot-gold/30 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-patriot-navy">🏛️</div>
                  <div className="text-sm font-semibold text-patriot-navy">Capitol Dome</div>
                  <div className="text-xs text-patriot-gold font-semibold">Landmark Featured</div>
                </div>
                <div className="bg-patriot-blue/5 border border-patriot-blue/20 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-patriot-red">🔔</div>
                  <div className="text-sm font-semibold text-patriot-navy">Liberty Bell</div>
                  <div className="text-xs text-patriot-gold font-semibold">Historic Symbol</div>
                </div>
              </div>

              <Button
                onClick={() => scrollToSection("video")}
                className="w-full bg-patriot-gold hover:bg-patriot-gold-hover text-patriot-navy font-bold py-4 px-6 rounded-lg text-lg transition-all transform hover:scale-105 shadow-lg"
              >
                <i className="fas fa-play mr-3"></i>
                Watch Hannah's Performance
              </Button>
            </Card>
          </div>

          {/* Enhanced Performance Preview with Landmarks */}
          <div className="order-1 lg:order-2">
            <Card className="bg-patriot-navy text-white p-8 rounded-lg shadow-lg border-t-4 border-patriot-gold">
              <div className="text-center">
                <div className="mb-6">
                  <div className="bg-patriot-gold text-patriot-navy px-4 py-2 rounded-full text-sm font-bold mb-4 inline-block">
                    AUTHENTIC AMERICAN LANDMARKS
                  </div>
                  <h4 className="text-2xl font-bold mb-4">
                    "The Star-Spangled Banner"
                  </h4>
                  <p className="text-lg opacity-90 mb-6">
                    A stirring rendition of America's National Anthem, performed with classical precision 
                    and featuring high-resolution imagery of the Capitol Dome, Liberty Bell, and historic sites.
                  </p>
                </div>

                {/* Enhanced Performance Stats */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-patriot-gold/20 border border-patriot-gold/30 rounded-lg p-4">
                    <div className="text-2xl font-bold text-patriot-gold">4:32</div>
                    <div className="text-sm opacity-90">Duration</div>
                  </div>
                  <div className="bg-patriot-gold/20 border border-patriot-gold/30 rounded-lg p-4">
                    <div className="text-2xl font-bold text-patriot-gold">2026</div>
                    <div className="text-sm opacity-90">Release Year</div>
                  </div>
                </div>

                <div className="bg-patriot-gold/10 border border-patriot-gold/30 rounded-lg p-4 mb-6">
                  <div className="text-sm font-semibold mb-3 text-patriot-gold">Featured Landmarks:</div>
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <span className="bg-patriot-red/80 px-3 py-1 rounded-full">🏛️ Capitol Dome</span>
                    <span className="bg-patriot-blue/80 px-3 py-1 rounded-full">🔔 Liberty Bell</span>
                    <span className="bg-patriot-red/80 px-3 py-1 rounded-full">🗽 Historic Sites</span>
                    <span className="bg-patriot-blue/80 px-3 py-1 rounded-full">🎭 NFT Mockups</span>
                  </div>
                </div>

                <div className="bg-patriot-gold/10 border border-patriot-gold/30 rounded-lg p-4">
                  <div className="text-sm font-semibold mb-2 text-patriot-gold">Available Platforms:</div>
                  <div className="flex flex-wrap justify-center gap-2 text-xs">
                    <span className="bg-patriot-red/80 px-3 py-1 rounded-full">Blockchain NFT</span>
                    <span className="bg-patriot-blue/80 px-3 py-1 rounded-full">Vimeo Streaming</span>
                    <span className="bg-patriot-gold/80 px-3 py-1 rounded-full text-patriot-navy">Exclusive Access</span>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* Enhanced Call to Action with Landmarks */}
        <div className="text-center">
          <Card className="bg-white border border-patriot-gold/30 p-8 rounded-lg shadow-lg max-w-4xl mx-auto">
            <div className="bg-patriot-gold text-patriot-navy px-6 py-2 rounded-full text-sm font-bold mb-4 inline-block">
              AUTHENTIC AMERICAN LANDMARKS FEATURED
            </div>
            <h4 className="text-2xl font-bold text-patriot-navy mb-4">
              Be Part of America's Historic Celebration
            </h4>
            <p className="text-lg text-slate-700 mb-6 max-w-2xl mx-auto">
              Join thousands of patriots celebrating America's 250th anniversary with Hannah's exclusive tokenized performance 
              featuring high-resolution imagery of the Capitol Dome, Liberty Bell, and historic landmarks
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={() => scrollToSection("video")}
                className="bg-patriot-gold hover:bg-patriot-gold-hover text-patriot-navy font-bold py-3 px-6 rounded-lg transition-all transform hover:scale-105 shadow-lg"
              >
                <i className="fas fa-video mr-2"></i>
                Preview Performance
              </Button>
              <Button
                onClick={() => scrollToSection("token")}
                className="bg-patriot-red hover:bg-patriot-red-hover text-white font-bold py-3 px-6 rounded-lg transition-all transform hover:scale-105 shadow-lg"
              >
                <i className="fas fa-star mr-2"></i>
                Get Started
              </Button>
              <Button
                onClick={() => scrollToSection("about")}
                className="bg-patriot-blue hover:bg-patriot-blue-hover text-white font-bold py-3 px-6 rounded-lg transition-all transform hover:scale-105 shadow-lg"
              >
                <i className="fas fa-file-alt mr-2"></i>
                View Whitepaper
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}