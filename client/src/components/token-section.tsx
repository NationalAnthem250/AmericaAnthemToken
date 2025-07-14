import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

export default function TokenSection() {
  const { toast } = useToast();

  const handleJoinWaitlist = () => {
    toast({
      title: "Waitlist Interest Noted",
      description: "Thank you for your interest! We'll notify you when the token launch begins.",
    });
  };

  return (
    <section id="token" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-patriot-navy mb-6">
            <span className="text-patriot-red">TOKENIZATION</span> OF HISTORY
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Be part of history as we launch the first tokenized version of the US National Anthem, commemorating America's 250th anniversary
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {/* Token Feature 1 */}
          <Card className="bg-gradient-to-br from-[hsl(221,83%,53%)] to-[hsl(215,28%,17%)] text-white rounded-2xl p-8 shadow-xl">
            <div className="text-center">
              <i className="fas fa-coins text-4xl text-patriot-gold mb-4"></i>
              <h3 className="text-2xl font-bold mb-4">Limited Edition NFT</h3>
              <p className="text-gray-200">
                Exclusive digital collectible commemorating this historic musical tribute to America's 250th anniversary
              </p>
            </div>
          </Card>
          
          {/* Token Feature 2 */}
          <Card className="bg-gradient-to-br from-[hsl(0,79%,49%)] to-red-700 text-white rounded-2xl p-8 shadow-xl">
            <div className="text-center">
              <i className="fas fa-music text-4xl text-white mb-4"></i>
              <h3 className="text-2xl font-bold mb-4">Classical Excellence</h3>
              <p className="text-gray-200">
                Hannah's professional mezzo soprano training brings unparalleled artistry to this patriotic masterpiece
              </p>
            </div>
          </Card>
          
          {/* Token Feature 3 */}
          <Card className="bg-gradient-to-br from-[hsl(45,93%,47%)] to-yellow-600 text-white rounded-2xl p-8 shadow-xl">
            <div className="text-center">
              <i className="fas fa-flag-usa text-4xl text-white mb-4"></i>
              <h3 className="text-2xl font-bold mb-4">Historic Milestone</h3>
              <p className="text-gray-200">
                Celebrate 250 years of American independence with this groundbreaking fusion of tradition and innovation
              </p>
            </div>
          </Card>
        </div>
        
        {/* Token Launch Details */}
        <Card className="bg-gray-50 rounded-2xl p-8 lg:p-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-black text-patriot-navy mb-6">Token Launch Details</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <i className="fas fa-calendar text-patriot-red mr-3"></i>
                  <span className="font-semibold">Launch Date:</span>
                  <span className="ml-2">July 4, 2026</span>
                </div>
                <div className="flex items-center">
                  <i className="fas fa-hashtag text-patriot-red mr-3"></i>
                  <span className="font-semibold">Total Supply:</span>
                  <span className="ml-2">1,776 Tokens</span>
                </div>
                <div className="flex items-center">
                  <i className="fas fa-star text-patriot-red mr-3"></i>
                  <span className="font-semibold">Initial Price:</span>
                  <span className="ml-2">0.25 ETH</span>
                </div>
                <div className="flex items-center">
                  <i className="fas fa-shield-alt text-patriot-red mr-3"></i>
                  <span className="font-semibold">Blockchain:</span>
                  <span className="ml-2">Ethereum</span>
                </div>
              </div>
              
              <div className="mt-8">
                <Button
                  onClick={handleJoinWaitlist}
                  className="bg-patriot-red hover:bg-patriot-red-hover text-white font-bold py-4 px-8 rounded-full text-lg transition-all transform hover:scale-105 shadow-lg w-full sm:w-auto"
                >
                  <i className="fas fa-bell mr-2"></i>
                  Join Waitlist
                </Button>
              </div>
            </div>
            
            <div className="text-center">
              {/* Hannah Magnelli professional photo */}
              <img
                src="https://static.wixstatic.com/media/0e0c7c_09bdf1e0833143d7a9628ceb9936f3d6~mv2.jpg/v1/fill/w_465,h_481,al_c,lg_1,q_80,enc_avif,quality_auto/image%20(2)_edited.jpg"
                alt="Hannah Magnelli Professional Photo"
                className="rounded-2xl shadow-2xl w-full max-w-md mx-auto"
              />
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}
