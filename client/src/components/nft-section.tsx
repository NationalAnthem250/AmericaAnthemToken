import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

export function NFTSection() {
  return (
    <section id="nft" className="py-20 bg-gradient-to-br from-patriot-navy via-patriot-blue to-patriot-navy">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
            <span className="text-patriot-gold">NFT</span> COLLECTION
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Own a unique piece of American history with our exclusive 250STAR NFT collection featuring Hannah Magnelli's National Anthem performance
          </p>
        </div>

        {/* NFT Showcase Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {/* Golden Eagle Edition NFT */}
          <Card className="bg-black/40 backdrop-blur-sm border-patriot-gold/30 hover:border-patriot-gold/60 transition-all duration-300 transform hover:scale-105">
            <CardContent className="p-6">
              <div className="aspect-square bg-gradient-to-br from-patriot-gold/20 to-patriot-red/20 rounded-lg mb-4 flex items-center justify-center border border-patriot-gold/30">
                <div className="text-center">
                  <i className="fas fa-flag-usa text-6xl text-patriot-gold mb-4"></i>
                  <p className="text-white font-bold">"O Say Can You See"</p>
                  <p className="text-patriot-gold text-sm">Golden Eagle Edition</p>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-bold text-white">Golden Eagle #001</h3>
                  <Badge className="bg-patriot-gold text-patriot-navy">LEGENDARY</Badge>
                </div>
                <p className="text-gray-300 text-sm">"O Say Can You See" - Majestic golden eagle with patriotic anthem lyrics and musical notes</p>
                <div className="flex justify-between items-center pt-2">
                  <span className="text-patriot-gold font-bold">$1,776</span>
                  <Button size="sm" className="bg-patriot-gold hover:bg-patriot-gold/90 text-patriot-navy">
                    View Details
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Silver Eagle Edition NFT */}
          <Card className="bg-black/40 backdrop-blur-sm border-patriot-gold/30 hover:border-patriot-gold/60 transition-all duration-300 transform hover:scale-105">
            <CardContent className="p-6">
              <div className="aspect-square bg-gradient-to-br from-gray-300/20 to-patriot-blue/20 rounded-lg mb-4 flex items-center justify-center border border-patriot-gold/30">
                <div className="text-center">
                  <i className="fas fa-music text-6xl text-gray-300 mb-4"></i>
                  <p className="text-white font-bold">Dawn's Early Light</p>
                  <p className="text-gray-300 text-sm">Silver Eagle Edition</p>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-bold text-white">Silver Eagle #250</h3>
                  <Badge className="bg-gray-400 text-black">RARE</Badge>
                </div>
                <p className="text-gray-300 text-sm">Elegant silver-toned eagle carrying the American flag with dawn's early light theme</p>
                <div className="flex justify-between items-center pt-2">
                  <span className="text-patriot-gold font-bold">$876</span>
                  <Button size="sm" className="bg-patriot-blue hover:bg-patriot-blue/90 text-white">
                    View Details
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Dawn's Light Edition NFT */}
          <Card className="bg-black/40 backdrop-blur-sm border-patriot-gold/30 hover:border-patriot-gold/60 transition-all duration-300 transform hover:scale-105">
            <CardContent className="p-6">
              <div className="aspect-square bg-gradient-to-br from-patriot-red/20 to-patriot-gold/20 rounded-lg mb-4 flex items-center justify-center border border-patriot-gold/30">
                <div className="text-center">
                  <i className="fas fa-star text-6xl text-patriot-red mb-4"></i>
                  <p className="text-white font-bold">Star Spangled Banner</p>
                  <p className="text-patriot-gold text-sm">Dawn's Light Edition</p>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-bold text-white">Dawn's Light #1776</h3>
                  <Badge className="bg-patriot-red text-white">SPECIAL</Badge>
                </div>
                <p className="text-gray-300 text-sm">Brilliant sunrise edition featuring soaring eagle with flag against golden dawn sky</p>
                <div className="flex justify-between items-center pt-2">
                  <span className="text-patriot-gold font-bold">$1,250</span>
                  <Button size="sm" className="bg-patriot-red hover:bg-patriot-red/90 text-white">
                    View Details
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* NFT Collection Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          <div className="text-center bg-black/30 backdrop-blur-sm rounded-lg p-6 border border-patriot-gold/20">
            <div className="text-3xl font-bold text-patriot-gold mb-2">1.776M</div>
            <div className="text-white text-sm">Total Supply</div>
          </div>
          <div className="text-center bg-black/30 backdrop-blur-sm rounded-lg p-6 border border-patriot-gold/20">
            <div className="text-3xl font-bold text-patriot-red mb-2">$450</div>
            <div className="text-white text-sm">Floor Price (USD)</div>
          </div>
          <div className="text-center bg-black/30 backdrop-blur-sm rounded-lg p-6 border border-patriot-gold/20">
            <div className="text-3xl font-bold text-white mb-2">$1.2M</div>
            <div className="text-white text-sm">Total Volume (USD)</div>
          </div>
          <div className="text-center bg-black/30 backdrop-blur-sm rounded-lg p-6 border border-patriot-gold/20">
            <div className="text-3xl font-bold text-patriot-gold mb-2">12.4K</div>
            <div className="text-white text-sm">Holders</div>
          </div>
        </div>

        {/* Features & Utilities */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="bg-black/30 backdrop-blur-sm rounded-lg p-8 border border-patriot-gold/20">
            <h3 className="text-2xl font-bold text-white mb-6">
              <i className="fas fa-gems text-patriot-gold mr-3"></i>
              NFT Features
            </h3>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-center">
                <i className="fas fa-check text-patriot-gold mr-3"></i>
                High-resolution 4K video performance
              </li>
              <li className="flex items-center">
                <i className="fas fa-check text-patriot-gold mr-3"></i>
                Lossless audio recording (48kHz/24-bit)
              </li>
              <li className="flex items-center">
                <i className="fas fa-check text-patriot-gold mr-3"></i>
                Exclusive behind-the-scenes content
              </li>
              <li className="flex items-center">
                <i className="fas fa-check text-patriot-gold mr-3"></i>
                Historical landmark photography
              </li>
              <li className="flex items-center">
                <i className="fas fa-check text-patriot-gold mr-3"></i>
                Digital certificate of authenticity
              </li>
              <li className="flex items-center">
                <i className="fas fa-check text-patriot-gold mr-3"></i>
                Commemorative America250 branding
              </li>
            </ul>
          </div>

          <div className="bg-black/30 backdrop-blur-sm rounded-lg p-8 border border-patriot-gold/20">
            <h3 className="text-2xl font-bold text-white mb-6">
              <i className="fas fa-crown text-patriot-gold mr-3"></i>
              Holder Benefits
            </h3>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-center">
                <i className="fas fa-star text-patriot-gold mr-3"></i>
                Exclusive community access
              </li>
              <li className="flex items-center">
                <i className="fas fa-star text-patriot-gold mr-3"></i>
                Early access to future drops
              </li>
              <li className="flex items-center">
                <i className="fas fa-star text-patriot-gold mr-3"></i>
                Special America250 events invitations
              </li>
              <li className="flex items-center">
                <i className="fas fa-star text-patriot-gold mr-3"></i>
                Hannah Magnelli signed memorabilia
              </li>
              <li className="flex items-center">
                <i className="fas fa-star text-patriot-gold mr-3"></i>
                Governance voting rights
              </li>
              <li className="flex items-center">
                <i className="fas fa-star text-patriot-gold mr-3"></i>
                250STAR token airdrops
              </li>
            </ul>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-patriot-gold/10 to-patriot-red/10 rounded-lg p-8 border border-patriot-gold/30">
          <h3 className="text-3xl font-bold text-white mb-4">Ready to Own History?</h3>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Join thousands of patriotic Americans who are preserving our nation's heritage through blockchain technology. Each NFT is a piece of American history that you can own forever.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-patriot-gold hover:bg-patriot-gold/90 text-patriot-navy font-bold px-8 py-3 text-lg">
              <i className="fas fa-rocket mr-2"></i>
              Browse Collection
            </Button>
            <Button variant="outline" className="border-patriot-gold text-patriot-gold hover:bg-patriot-gold hover:text-patriot-navy font-bold px-8 py-3 text-lg">
              <i className="fas fa-info-circle mr-2"></i>
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}