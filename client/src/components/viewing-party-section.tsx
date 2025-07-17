import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function ViewingPartySection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-white via-blue-50 to-red-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Banner */}
        <div className="text-center mb-16">
          <div className="bg-gradient-to-r from-patriot-red to-patriot-blue text-white border-4 border-yellow-500 rounded-3xl p-8 shadow-2xl">
            <h2 className="text-3xl md:text-5xl font-black mb-4">
              🎆 HOST YOUR VERY OWN AMERICA250 CELEBRATION! 🎆
            </h2>
            <p className="text-xl md:text-2xl font-bold text-yellow-300 mb-4">
              CELEBRATE FROM HOME WITH HANNAH'S EXCLUSIVE TOKEN PERFORMANCE
            </p>
            <div className="flex flex-wrap justify-center gap-3 text-sm md:text-base font-semibold">
              <span className="bg-white/20 px-4 py-2 rounded-full">📱 STREAM ON ANY DEVICE</span>
              <span className="bg-white/20 px-4 py-2 rounded-full">🎵 EXCLUSIVE NFT ACCESS</span>
              <span className="bg-white/20 px-4 py-2 rounded-full">#America250Token</span>
            </div>
          </div>
        </div>

        {/* Party Kit Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <Card className="bg-white/95 backdrop-blur-sm p-8 rounded-2xl shadow-2xl border-4 border-patriot-red/30">
            <div className="text-center mb-6">
              <div className="text-6xl mb-4">🎉</div>
              <h3 className="text-3xl font-black text-patriot-navy mb-4">
                AMERICA250 PARTY KIT
              </h3>
              <p className="text-lg text-patriot-navy leading-relaxed mb-6">
                Download our exclusive celebration kit to host the perfect America's 250th anniversary 
                viewing party featuring Hannah Magnelli's tokenized National Anthem performance.
              </p>
            </div>

            <div className="space-y-4 mb-6">
              <div className="flex items-center p-3 bg-patriot-blue/10 rounded-lg">
                <i className="fas fa-download text-patriot-blue mr-3"></i>
                <span className="font-semibold text-patriot-navy">Printable decorations & banners</span>
              </div>
              <div className="flex items-center p-3 bg-patriot-red/10 rounded-lg">
                <i className="fas fa-utensils text-patriot-red mr-3"></i>
                <span className="font-semibold text-patriot-navy">Patriotic recipes & menu ideas</span>
              </div>
              <div className="flex items-center p-3 bg-yellow-500/20 rounded-lg">
                <i className="fas fa-gamepad text-patriot-navy mr-3"></i>
                <span className="font-semibold text-patriot-navy">America250 trivia & activities</span>
              </div>
              <div className="flex items-center p-3 bg-patriot-blue/10 rounded-lg">
                <i className="fas fa-share-alt text-patriot-blue mr-3"></i>
                <span className="font-semibold text-patriot-navy">Social media templates</span>
              </div>
            </div>

            <Button className="w-full bg-patriot-red hover:bg-red-700 text-white font-bold py-4 px-6 rounded-full text-lg transition-all transform hover:scale-105 shadow-lg">
              <i className="fas fa-download mr-3"></i>
              Download Party Kit (Coming Soon)
            </Button>
          </Card>

          <Card className="bg-gradient-to-br from-patriot-navy to-patriot-blue text-white p-8 rounded-2xl shadow-2xl border-4 border-white/40">
            <div className="text-center">
              <h3 className="text-3xl font-black mb-6 text-yellow-300">
                WATCH OPTIONS
              </h3>
              <p className="text-lg mb-8 opacity-90">
                Multiple ways to experience Hannah's historic tokenized performance
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4">
                  <i className="fas fa-laptop text-3xl text-yellow-300 mb-3"></i>
                  <div className="font-bold mb-2">Web Streaming</div>
                  <div className="text-sm opacity-90">Watch directly on our website</div>
                </div>
                <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4">
                  <i className="fas fa-mobile-alt text-3xl text-yellow-300 mb-3"></i>
                  <div className="font-bold mb-2">Mobile App</div>
                  <div className="text-sm opacity-90">Stream on iOS & Android</div>
                </div>
                <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4">
                  <i className="fas fa-tv text-3xl text-yellow-300 mb-3"></i>
                  <div className="font-bold mb-2">Smart TV</div>
                  <div className="text-sm opacity-90">Cast to your television</div>
                </div>
                <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4">
                  <i className="fas fa-coins text-3xl text-yellow-300 mb-3"></i>
                  <div className="font-bold mb-2">NFT Access</div>
                  <div className="text-sm opacity-90">Exclusive token holder perks</div>
                </div>
              </div>

              <div className="bg-yellow-500/20 backdrop-blur-sm rounded-xl p-4 mb-6">
                <h4 className="font-bold mb-2 text-yellow-300">LAUNCH DATE</h4>
                <div className="text-2xl font-black">July 4th, 2026 • 8PM ET</div>
                <div className="text-sm opacity-90 mt-1">Streaming available worldwide</div>
              </div>

              <Button
                onClick={() => scrollToSection("token")}
                className="bg-yellow-500 hover:bg-yellow-400 text-patriot-navy font-bold py-3 px-6 rounded-full text-lg transition-all transform hover:scale-105 shadow-lg"
              >
                <i className="fas fa-ticket-alt mr-2"></i>
                Get Early Access
              </Button>
            </div>
          </Card>
        </div>

        {/* Social Sharing Section */}
        <div className="text-center">
          <Card className="bg-gradient-to-r from-patriot-red/90 to-patriot-blue/90 text-white p-8 rounded-2xl shadow-2xl border-4 border-yellow-500/50 inline-block">
            <h3 className="text-2xl font-bold mb-4 text-yellow-300">
              🇺🇸 SHARE THE CELEBRATION 🇺🇸
            </h3>
            <p className="text-lg mb-6 max-w-2xl">
              Spread the word about America's historic 250th anniversary token launch with Hannah Magnelli
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 mb-6">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-full">
                <i className="fab fa-facebook mr-2"></i>
                Facebook
              </Button>
              <Button className="bg-sky-500 hover:bg-sky-600 text-white font-semibold py-2 px-4 rounded-full">
                <i className="fab fa-twitter mr-2"></i>
                Twitter
              </Button>
              <Button className="bg-pink-600 hover:bg-pink-700 text-white font-semibold py-2 px-4 rounded-full">
                <i className="fab fa-instagram mr-2"></i>
                Instagram
              </Button>
              <Button className="bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded-full">
                <i className="fab fa-youtube mr-2"></i>
                YouTube
              </Button>
            </div>

            <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4">
              <div className="text-sm font-semibold mb-2">Use these hashtags:</div>
              <div className="text-yellow-300 font-mono">
                #America250Token #HannahMagnelli #America250 #NationalAnthem #NFT
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}