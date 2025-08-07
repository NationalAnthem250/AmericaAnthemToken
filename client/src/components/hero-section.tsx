import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import heroImage from "@assets/IMG_4165_1754527909411.jpeg";

export default function HeroSection() {

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative bg-black min-h-screen flex items-center pt-16 overflow-hidden">
      {/* Full-screen image background */}
      <div className="absolute inset-0 w-full h-full z-0">
        <img
          src={heroImage}
          alt="Hannah Magnelli performing the National Anthem"
          className="absolute top-0 left-0 w-full h-full object-cover z-10"
          style={{
            width: '100vw',
            height: '100vh',
            objectFit: 'cover'
          }}
        />
      </div>
      
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/20 z-20"></div>
      
      {/* Patriotic border elements */}
      <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-patriot-red via-patriot-gold to-patriot-blue z-30"></div>
      <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-patriot-blue via-patriot-gold to-patriot-red z-30"></div>
      
      <div className="relative z-30 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          {/* Description */}
          <div className="mb-12">
            <div className="max-w-4xl mx-auto mb-8">
            </div>


          </div>



          {/* Enhanced Call-to-Action Buttons with Gold Accent */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button
              onClick={() => scrollToSection("video")}
              className="bg-patriot-gold hover:bg-patriot-gold-hover text-patriot-navy font-bold py-4 px-8 text-lg rounded-md transition-all shadow-lg transform hover:scale-105"
            >
              <i className="fas fa-play mr-2"></i>
              Watch Performance
            </Button>
            
            <Button
              onClick={() => scrollToSection("token")}
              className="bg-patriot-red hover:bg-patriot-red-hover text-white font-bold py-4 px-8 text-lg rounded-md transition-all shadow-lg transform hover:scale-105"
            >
              <i className="fas fa-coins mr-2"></i>
              Get Started
            </Button>
            
            <Button
              onClick={() => scrollToSection("about")}
              className="bg-patriot-blue hover:bg-patriot-blue-hover text-white font-bold py-4 px-8 text-lg rounded-md transition-all shadow-lg transform hover:scale-105"
            >
              <i className="fas fa-file-alt mr-2"></i>
              View Whitepaper
            </Button>
          </div>

          {/* Enhanced Token Launch Details with Video Background */}
          <div className="bg-black/60 backdrop-blur-sm border border-patriot-gold/50 rounded-lg p-8 max-w-4xl mx-auto shadow-lg">
            <div className="text-center mb-6">
              <h3 className="text-xl font-bold text-white mb-2 text-shadow-md">Featuring Authentic American Landmarks</h3>
              <p className="text-gray-300 text-shadow-sm">High-resolution imagery of Liberty Bell, Capitol Dome, and historic sites</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div className="bg-patriot-navy/20 backdrop-blur-sm rounded-lg p-4 border border-patriot-gold/30">
                <div className="text-2xl font-bold text-white">1.776M</div>
                <div className="text-sm text-gray-300">Total Supply</div>
                <div className="text-xs text-patriot-gold font-semibold">250STAR Tokens</div>
              </div>
              <div className="bg-patriot-red/20 backdrop-blur-sm rounded-lg p-4 border border-patriot-gold/30">
                <div className="text-2xl font-bold text-patriot-red">$0.25</div>
                <div className="text-sm text-gray-300">Price Each</div>
                <div className="text-xs text-patriot-gold font-semibold">USD Fixed</div>
              </div>
              <div className="bg-patriot-blue/20 backdrop-blur-sm rounded-lg p-4 border border-patriot-gold/30">
                <div className="text-2xl font-bold text-patriot-blue">🎭</div>
                <div className="text-sm text-gray-300">Mezzo-Soprano</div>
                <div className="text-xs text-patriot-gold font-semibold">Professional</div>
              </div>
              <div className="bg-patriot-gold/20 backdrop-blur-sm rounded-lg p-4 border border-patriot-gold/30">
                <div className="text-2xl font-bold text-patriot-gold">🏛️</div>
                <div className="text-sm text-gray-300">America250</div>
                <div className="text-xs text-patriot-gold font-semibold">Official</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
