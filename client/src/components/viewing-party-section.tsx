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
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Header - PBS Clean Style */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-patriot-navy mb-6">
            Host Your Very Own America250 Celebration
          </h2>
          <p className="text-xl text-slate-600 max-w-4xl mx-auto mb-8">
            Celebrate from home with Hannah's exclusive token performance and our comprehensive party kit
          </p>
          
          {/* Event Info Banner */}
          <div className="bg-patriot-red text-white p-6 rounded-lg shadow-lg max-w-3xl mx-auto mb-8">
            <h3 className="text-xl md:text-2xl font-bold mb-2">
              Stream on Any Device • Exclusive NFT Access • #America250Token
            </h3>
            <p className="text-sm opacity-90">
              Multiple streaming options available worldwide
            </p>
          </div>
        </div>

        {/* Party Kit Section - Clean PBS Style */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <Card className="bg-white border border-slate-200 p-8 rounded-lg shadow-sm">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold text-patriot-navy mb-4">
                America250 Party Kit
              </h3>
              <p className="text-lg text-slate-600 leading-relaxed">
                Download our exclusive celebration kit to host the perfect America's 250th anniversary 
                viewing party featuring Hannah Magnelli's tokenized National Anthem performance.
              </p>
            </div>

            <div className="space-y-3 mb-8">
              <div className="flex items-center p-4 bg-slate-50 rounded-lg border border-slate-100">
                <i className="fas fa-download text-patriot-blue mr-4"></i>
                <span className="font-medium text-slate-700">Printable decorations & banners</span>
              </div>
              <div className="flex items-center p-4 bg-slate-50 rounded-lg border border-slate-100">
                <i className="fas fa-utensils text-patriot-red mr-4"></i>
                <span className="font-medium text-slate-700">Patriotic recipes & menu ideas</span>
              </div>
              <div className="flex items-center p-4 bg-slate-50 rounded-lg border border-slate-100">
                <i className="fas fa-gamepad text-patriot-navy mr-4"></i>
                <span className="font-medium text-slate-700">America250 trivia & activities</span>
              </div>
              <div className="flex items-center p-4 bg-slate-50 rounded-lg border border-slate-100">
                <i className="fas fa-share-alt text-patriot-blue mr-4"></i>
                <span className="font-medium text-slate-700">Social media templates</span>
              </div>
            </div>

            <Button className="w-full bg-patriot-red hover:bg-red-700 text-white font-bold py-4 px-6 rounded-lg text-lg transition-all shadow-lg">
              <i className="fas fa-download mr-3"></i>
              Download Party Kit (Coming Soon)
            </Button>
          </Card>

          <Card className="bg-slate-50 border border-slate-200 p-8 rounded-lg shadow-sm">
            <div className="text-center">
              <h3 className="text-3xl font-bold text-patriot-navy mb-6">
                When to Watch
              </h3>
              <p className="text-lg text-slate-600 mb-8">
                Multiple ways to experience Hannah's historic tokenized performance
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                <div className="bg-white border border-slate-200 rounded-lg p-6">
                  <i className="fas fa-laptop text-3xl text-patriot-blue mb-4"></i>
                  <div className="font-bold text-patriot-navy mb-2">Web Streaming</div>
                  <div className="text-sm text-slate-600">Watch directly on our website</div>
                </div>
                <div className="bg-white border border-slate-200 rounded-lg p-6">
                  <i className="fas fa-mobile-alt text-3xl text-patriot-red mb-4"></i>
                  <div className="font-bold text-patriot-navy mb-2">Mobile App</div>
                  <div className="text-sm text-slate-600">Stream on iOS & Android</div>
                </div>
                <div className="bg-white border border-slate-200 rounded-lg p-6">
                  <i className="fas fa-tv text-3xl text-patriot-blue mb-4"></i>
                  <div className="font-bold text-patriot-navy mb-2">Smart TV</div>
                  <div className="text-sm text-slate-600">Cast to your television</div>
                </div>
                <div className="bg-white border border-slate-200 rounded-lg p-6">
                  <i className="fas fa-coins text-3xl text-patriot-red mb-4"></i>
                  <div className="font-bold text-patriot-navy mb-2">NFT Access</div>
                  <div className="text-sm text-slate-600">Exclusive token holder perks</div>
                </div>
              </div>

              <div className="bg-patriot-red text-white rounded-lg p-6 mb-6">
                <h4 className="font-bold mb-2">Launch Date</h4>
                <div className="text-2xl font-bold">July 4th, 2026 • 8PM ET</div>
                <div className="text-sm opacity-90 mt-1">Streaming available worldwide</div>
              </div>

              <Button
                onClick={() => scrollToSection("token")}
                className="bg-patriot-blue hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg text-lg transition-all shadow-lg"
              >
                <i className="fas fa-ticket-alt mr-2"></i>
                Get Early Access
              </Button>
            </div>
          </Card>
        </div>

        {/* Social Sharing Section - PBS Clean Style */}
        <div className="text-center">
          <Card className="bg-white border border-slate-200 p-8 rounded-lg shadow-sm max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-patriot-navy mb-4">
              Share the Celebration
            </h3>
            <p className="text-lg text-slate-600 mb-6">
              Spread the word about America's historic 250th anniversary token launch with Hannah Magnelli
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 mb-6">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg">
                <i className="fab fa-facebook mr-2"></i>
                Facebook
              </Button>
              <Button className="bg-sky-500 hover:bg-sky-600 text-white font-medium py-2 px-4 rounded-lg">
                <i className="fab fa-twitter mr-2"></i>
                Twitter
              </Button>
              <Button className="bg-pink-600 hover:bg-pink-700 text-white font-medium py-2 px-4 rounded-lg">
                <i className="fab fa-instagram mr-2"></i>
                Instagram
              </Button>
              <Button className="bg-red-600 hover:bg-red-700 text-white font-medium py-2 px-4 rounded-lg">
                <i className="fab fa-youtube mr-2"></i>
                YouTube
              </Button>
            </div>

            <div className="bg-slate-50 border border-slate-200 rounded-lg p-4">
              <div className="text-sm font-semibold text-slate-700 mb-2">Use these hashtags:</div>
              <div className="text-patriot-navy font-mono text-sm">
                #America250Token #HannahMagnelli #America250 #NationalAnthem #NFT
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}