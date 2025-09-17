import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { useLanguage } from '@/contexts/language-context';

export default function CryptoAdvanced() {
  const { t } = useLanguage();
  return (
    <section className="py-20 bg-gradient-to-b from-black to-patriot-navy">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
            {t('cryptoAdvanced.title')}
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            {t('cryptoAdvanced.subtitle')}
          </p>
        </div>

        {/* Token Supply Breakdown */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <Card className="bg-white/10 backdrop-blur-sm border-patriot-gold/30">
            <CardHeader className="pb-2">
              <CardTitle className="text-patriot-gold text-lg">Total Supply</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-white">1,776,000,000</div>
              <p className="text-gray-400 text-sm">Commemorating 1776</p>
            </CardContent>
          </Card>

          <Card className="bg-white/10 backdrop-blur-sm border-patriot-red/30">
            <CardHeader className="pb-2">
              <CardTitle className="text-patriot-red text-lg">Mint Price</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-white">$1.77</div>
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
              <a 
                href="https://discord.gg/anthem250"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="bg-[#5865F2] hover:bg-[#4752C4] text-white">
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.222 0c1.406 0 2.54 1.137 2.607 2.475V24l-2.677-2.273-1.47-1.338-1.604-1.398.67 2.205H3.71c-1.402 0-2.54-1.065-2.54-2.476V2.48C1.17 1.142 2.31.003 3.715.003h16.5L20.222 0zm-6.118 5.683h-.03l-.202.2c2.073.6 3.076 1.537 3.076 1.537-1.336-.668-2.54-1.002-3.744-1.137-.87-.135-1.74-.064-2.475 0h-.2c-.47 0-1.47.2-2.81.735-.467.203-.735.336-.735.336s1.002-1.002 3.21-1.537l-.135-.135s-1.672-.064-3.477 1.27c0 0-1.805 3.144-1.805 7.02 0 0 1 1.74 3.743 1.806 0 0 .4-.533.805-1.002-1.54-.4-2.172-1.4-2.172-1.4s.134.066.335.2h.06c.03 0 .044.015.06.03v.006c.016.016.03.03.06.03.33.136.66.27.93.4.466.202 1.065.403 1.8.536.93.135 1.996.2 3.21 0 .6-.135 1.2-.267 1.8-.535.39-.2.87-.4 1.397-.737 0 0-.6.936-2.205 1.4.33.466.795 1 .795 1 2.744-.06 3.81-1.8 3.87-1.726 0-3.87-1.815-7.02-1.815-7.02-1.635-1.214-3.165-1.26-3.435-1.26l.056-.02z"/>
                  </svg>
                  Discord
                </Button>
              </a>
              <a 
                href="https://twitter.com/anthem250"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="bg-[#1DA1F2] hover:bg-[#1a91da] text-white">
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                  Twitter
                </Button>
              </a>
              <a 
                href="https://t.me/anthem250"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="bg-[#0088cc] hover:bg-[#0077b3] text-white">
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-.962 6.502-.378 1.73-.766 2.264-1.234 2.264-.696 0-.934-.464-.934-.464-.635-.415-.904-.635-.904-.635l-3.699-2.261c-.448-.275-.38-.438-.38-.438-.002-.04.054-.103.22-.181l9.63-6.21a.5.5 0 0 1 .066-.029.425.425 0 0 1 .111-.016c.023-.001.048-.002.076-.002zm-6.024 8.13c-.256.132-.512.308-.768.484l-.002.001-.005.003c-.225.158-.45.316-.675.474a12.02 12.02 0 0 1-.435.3c-.192.124-.384.248-.576.372a.47.47 0 0 1-.032.021c-.127.079-.278.005-.359-.149-.024-.046-.035-.097-.039-.148l-.004-.051c0-.017 0-.034.002-.051a.494.494 0 0 1 .071-.216l.002-.004.003-.005c.09-.164.181-.328.271-.492.18-.327.361-.654.541-.981l.003-.005c.09-.164.181-.328.271-.492.09-.164.18-.329.271-.493l.003-.005c.09-.164.18-.328.271-.492.09-.164.18-.328.271-.492l.003-.005c.045-.082.09-.164.135-.246l.003-.005c.045-.082.09-.164.135-.246l.003-.005.002-.004z"/>
                  </svg>
                  Telegram
                </Button>
              </a>
              <a 
                href="https://www.instagram.com/anthem250th"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="bg-[#E4405F] hover:bg-[#d73651] text-white">
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                  Instagram
                </Button>
              </a>
              <a 
                href="https://youtube.com/@anthem250"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="bg-[#FF0000] hover:bg-[#e60000] text-white">
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                  YouTube
                </Button>
              </a>
              <a 
                href="https://facebook.com/anthem250"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="bg-[#1877F2] hover:bg-[#166fe5] text-white">
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                  Facebook
                </Button>
              </a>
              <a 
                href="https://www.whatsapp.com/channel/0029VbBALc1DZ4LTR8A7sT3F"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="bg-[#25D366] hover:bg-[#22c55e] text-white">
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.893 3.488"/>
                  </svg>
                  WhatsApp
                </Button>
              </a>
              <a 
                href="https://www.tiktok.com/@anthem250th"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="bg-[#000000] hover:bg-[#1a1a1a] text-white">
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19.321 5.562a5.124 5.124 0 01-.443-.258 6.228 6.228 0 01-1.137-.966c-.849-.849-1.248-1.73-1.428-2.49C16.142 1.378 16.061 1.048 16 .718V.698c-.046-.39-.058-.39-.058-.39h-3.126s-.008 0-.027.008c-.019.008-.027.008-.027.008v.038c-.008.195-.027.39-.062.577-.089 1.128-.177 1.982-.443 2.799-.665 2.053-2.303 3.691-4.357 4.357-.865.295-1.73.413-2.638.443-.246.008-.493.008-.731.008v.039c-.038.007-.038.007-.038.007h-.008s-.007.008-.007.027c0 .019.007.027.007.027v3.126s.008 0 .008.027c0 .019-.008.027-.008.027v.039h.008c.238 0 .485-.008.731-.008.908-.03 1.773-.148 2.638-.443 2.054-.666 3.692-2.304 4.357-4.357.266-.817.354-1.671.443-2.799.035-.187.054-.382.062-.577v-.038s.008 0 .027-.008c.019-.008.027-.008.027-.008h3.126s.012 0 .058.39v.02c.061.33.142.66.313 1.13.18.76.579 1.641 1.428 2.49.364.364.746.683 1.137.966.145.105.296.195.443.258.554.242 1.105.3 1.692.3.587 0 1.138-.058 1.692-.3.147-.063.298-.153.443-.258a6.228 6.228 0 001.137-.966c.849-.849 1.248-1.73 1.428-2.49.171-.47.252-.8.313-1.13.046-.39.058-.39.058-.39v-3.126s0-.008-.027-.008c-.019 0-.027.008-.027.008h-.039c-.587 0-1.138.058-1.692.3z"/>
                  </svg>
                  TikTok
                </Button>
              </a>
              <a 
                href="https://www.linkedin.com/company/anthem250"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="bg-[#0077B5] hover:bg-[#005885] text-white">
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                  LinkedIn
                </Button>
              </a>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}