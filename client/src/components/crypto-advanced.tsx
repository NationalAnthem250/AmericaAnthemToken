import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

export default function CryptoAdvanced() {
  return (
    <section className="py-20 bg-gradient-to-b from-black to-patriot-navy">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
            ADVANCED <span className="text-patriot-gold">TOKENOMICS</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive details for experienced collectors and crypto enthusiasts
          </p>
        </div>

        {/* Token Supply Breakdown */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <Card className="bg-white/10 backdrop-blur-sm border-patriot-gold/30">
            <CardHeader className="pb-2">
              <CardTitle className="text-patriot-gold text-lg">Total Supply</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-white">1,776,000</div>
              <p className="text-gray-400 text-sm">Commemorating 1776</p>
            </CardContent>
          </Card>

          <Card className="bg-white/10 backdrop-blur-sm border-patriot-red/30">
            <CardHeader className="pb-2">
              <CardTitle className="text-patriot-red text-lg">Mint Price</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-white">$17.76</div>
              <p className="text-gray-400 text-sm">Fixed price per token</p>
            </CardContent>
          </Card>

          <Card className="bg-white/10 backdrop-blur-sm border-patriot-blue/30">
            <CardHeader className="pb-2">
              <CardTitle className="text-patriot-blue text-lg">Network</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">Solana</div>
              <p className="text-gray-400 text-sm">Low fees, fast tx</p>
            </CardContent>
          </Card>

          <Card className="bg-white/10 backdrop-blur-sm border-patriot-gold/30">
            <CardHeader className="pb-2">
              <CardTitle className="text-patriot-gold text-lg">Remaining</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-white">98.4%</div>
              <Progress value={1.6} className="mt-2" />
            </CardContent>
          </Card>
        </div>

        {/* Utility & Roadmap */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          <Card className="bg-white/10 backdrop-blur-sm border-patriot-gold/30">
            <CardHeader>
              <CardTitle className="text-2xl text-white">Token Utility</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start gap-3">
                <Badge variant="secondary" className="bg-patriot-gold text-patriot-navy">Access</Badge>
                <div>
                  <h4 className="text-white font-semibold">Exclusive Performances</h4>
                  <p className="text-gray-400 text-sm">Private concerts and events with Hannah Magnelli</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Badge variant="secondary" className="bg-patriot-red text-white">Content</Badge>
                <div>
                  <h4 className="text-white font-semibold">Token-Gated Archives</h4>
                  <p className="text-gray-400 text-sm">Behind-the-scenes videos, interviews, and exclusive content</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Badge variant="secondary" className="bg-patriot-blue text-white">Community</Badge>
                <div>
                  <h4 className="text-white font-semibold">Collector Recognition</h4>
                  <p className="text-gray-400 text-sm">Leaderboard status and community privileges</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Badge variant="secondary" className="bg-patriot-gold text-patriot-navy">Future</Badge>
                <div>
                  <h4 className="text-white font-semibold">Governance Rights</h4>
                  <p className="text-gray-400 text-sm">Vote on future America250 initiatives and events</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white/10 backdrop-blur-sm border-patriot-red/30">
            <CardHeader>
              <CardTitle className="text-2xl text-white">Roadmap 2025-2026</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="border-l-2 border-patriot-gold pl-4 space-y-4">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <div className="w-3 h-3 bg-patriot-gold rounded-full"></div>
                    <span className="text-patriot-gold font-semibold">Q1 2025 - Complete</span>
                  </div>
                  <p className="text-gray-300 text-sm">Token launch and initial minting phase</p>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <div className="w-3 h-3 bg-patriot-red rounded-full"></div>
                    <span className="text-patriot-red font-semibold">Q2 2025 - Active</span>
                  </div>
                  <p className="text-gray-300 text-sm">Community building and exclusive content releases</p>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <div className="w-3 h-3 bg-patriot-blue rounded-full"></div>
                    <span className="text-patriot-blue font-semibold">Q3 2025</span>
                  </div>
                  <p className="text-gray-300 text-sm">Staking mechanism and holder rewards program</p>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
                    <span className="text-gray-400 font-semibold">Q2 2026</span>
                  </div>
                  <p className="text-gray-300 text-sm">America250 celebration events and commemorative activities</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Technical Details */}
        <Card className="bg-white/10 backdrop-blur-sm border-patriot-gold/30 mb-12">
          <CardHeader>
            <CardTitle className="text-2xl text-white text-center">Blockchain Transparency</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <h4 className="text-patriot-gold font-semibold mb-2">Smart Contract</h4>
                <p className="text-gray-400 text-sm mb-3">Audited by CertiK</p>
                <Button variant="outline" size="sm" className="border-patriot-gold text-patriot-gold hover:bg-patriot-gold hover:text-patriot-navy">
                  View Contract
                </Button>
              </div>
              <div className="text-center">
                <h4 className="text-patriot-red font-semibold mb-2">Live Tracker</h4>
                <p className="text-gray-400 text-sm mb-3">Real-time mint data</p>
                <Button variant="outline" size="sm" className="border-patriot-red text-patriot-red hover:bg-patriot-red hover:text-white">
                  View Tracker
                </Button>
              </div>
              <div className="text-center">
                <h4 className="text-patriot-blue font-semibold mb-2">Marketplaces</h4>
                <p className="text-gray-400 text-sm mb-3">OpenSea, Magic Eden</p>
                <Button variant="outline" size="sm" className="border-patriot-blue text-patriot-blue hover:bg-patriot-blue hover:text-white">
                  View Listings
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Community & Social */}
        <Card className="bg-white/10 backdrop-blur-sm border-patriot-red/30">
          <CardHeader>
            <CardTitle className="text-2xl text-white text-center">Join the Collector Community</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap justify-center gap-4">
              <Button className="bg-[#5865F2] hover:bg-[#4752C4] text-white">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.222 0c1.406 0 2.54 1.137 2.607 2.475V24l-2.677-2.273-1.47-1.338-1.604-1.398.67 2.205H3.71c-1.402 0-2.54-1.065-2.54-2.476V2.48C1.17 1.142 2.31.003 3.715.003h16.5L20.222 0zm-6.118 5.683h-.03l-.202.2c2.073.6 3.076 1.537 3.076 1.537-1.336-.668-2.54-1.002-3.744-1.137-.87-.135-1.74-.064-2.475 0h-.2c-.47 0-1.47.2-2.81.735-.467.203-.735.336-.735.336s1.002-1.002 3.21-1.537l-.135-.135s-1.672-.064-3.477 1.27c0 0-1.805 3.144-1.805 7.02 0 0 1 1.74 3.743 1.806 0 0 .4-.533.805-1.002-1.54-.4-2.172-1.4-2.172-1.4s.134.066.335.2h.06c.03 0 .044.015.06.03v.006c.016.016.03.03.06.03.33.136.66.27.93.4.466.202 1.065.403 1.8.536.93.135 1.996.2 3.21 0 .6-.135 1.2-.267 1.8-.535.39-.2.87-.4 1.397-.737 0 0-.6.936-2.205 1.4.33.466.795 1 .795 1 2.744-.06 3.81-1.8 3.87-1.726 0-3.87-1.815-7.02-1.815-7.02-1.635-1.214-3.165-1.26-3.435-1.26l.056-.02z"/>
                </svg>
                Discord
              </Button>
              <Button className="bg-[#1DA1F2] hover:bg-[#1a91da] text-white">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
                Twitter
              </Button>
              <Button className="bg-[#0088cc] hover:bg-[#0077b3] text-white">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-.962 6.502-.378 1.73-.766 2.264-1.234 2.264-.696 0-.934-.464-.934-.464-.635-.415-.904-.635-.904-.635l-3.699-2.261c-.448-.275-.38-.438-.38-.438-.002-.04.054-.103.22-.181l9.63-6.21a.5.5 0 0 1 .066-.029.425.425 0 0 1 .111-.016c.023-.001.048-.002.076-.002zm-6.024 8.13c-.256.132-.512.308-.768.484l-.002.001-.005.003c-.225.158-.45.316-.675.474a12.02 12.02 0 0 1-.435.3c-.192.124-.384.248-.576.372a.47.47 0 0 1-.032.021c-.127.079-.278.005-.359-.149-.024-.046-.035-.097-.039-.148l-.004-.051c0-.017 0-.034.002-.051a.494.494 0 0 1 .071-.216l.002-.004.003-.005c.09-.164.181-.328.271-.492.18-.327.361-.654.541-.981l.003-.005c.09-.164.181-.328.271-.492.09-.164.18-.329.271-.493l.003-.005c.09-.164.18-.328.271-.492.09-.164.18-.328.271-.492l.003-.005c.045-.082.09-.164.135-.246l.003-.005c.045-.082.09-.164.135-.246l.003-.005.002-.004z"/>
                </svg>
                Telegram
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}