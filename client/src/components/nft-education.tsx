import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export default function NFTEducation() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <section className="py-20 bg-gradient-to-b from-black to-patriot-navy">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
            WHAT IS A <span className="text-patriot-gold">DIGITAL COLLECTIBLE?</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Think of it like owning a digital certificate of authenticity for a piece of music and art history
          </p>
        </div>

        {/* Simple Explanation Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <Card className="bg-white/10 backdrop-blur-sm border-patriot-gold/30">
            <CardHeader className="text-center">
              <div className="mx-auto mb-4 w-16 h-16 bg-patriot-blue/20 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-patriot-gold" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4zM18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z"/>
                </svg>
              </div>
              <CardTitle className="text-xl text-white">Like a Digital Autograph</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300 text-center">
                Just like getting a signed photo from your favorite performer, this is Hannah's digital signature on her National Anthem performance
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white/10 backdrop-blur-sm border-patriot-gold/30">
            <CardHeader className="text-center">
              <div className="mx-auto mb-4 w-16 h-16 bg-patriot-red/20 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-patriot-gold" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM4.332 8.027a6.012 6.012 0 011.912-2.706C6.512 5.73 6.974 6 7.5 6A1.5 1.5 0 019 7.5V8a2 2 0 004 0 2 2 0 011.523-1.943A5.977 5.977 0 0116 10c0 .34-.028.675-.083 1H15a2 2 0 00-2 2v2.197A5.973 5.973 0 0110 16v-2a2 2 0 00-2-2 2 2 0 01-2-2 2 2 0 00-1.668-1.973z" clipRule="evenodd"/>
                </svg>
              </div>
              <CardTitle className="text-xl text-white">Preserving History</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300 text-center">
                This helps preserve Hannah's beautiful rendition for America's 250th anniversary celebration forever in digital form
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white/10 backdrop-blur-sm border-patriot-gold/30">
            <CardHeader className="text-center">
              <div className="mx-auto mb-4 w-16 h-16 bg-patriot-gold/20 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-patriot-gold" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z"/>
                </svg>
              </div>
              <CardTitle className="text-xl text-white">Join a Community</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300 text-center">
                Connect with other patriotic Americans who share your love for our country's history and cultural heritage
              </p>
            </CardContent>
          </Card>
        </div>

        {/* FAQ Section */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl font-bold text-white text-center mb-8">Frequently Asked Questions</h3>
          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="what-is-nft" className="bg-white/10 backdrop-blur-sm rounded-lg border-patriot-gold/30">
              <AccordionTrigger className="text-white px-6 hover:no-underline">
                What exactly is a digital collectible (NFT)?
              </AccordionTrigger>
              <AccordionContent className="text-gray-300 px-6 pb-6">
                Think of it like a museum plaque or certificate of authenticity, but digital. It proves you own a unique piece of digital art or music. In this case, you're owning a piece of Hannah Magnelli's historic National Anthem performance for America's 250th anniversary.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="how-to-buy" className="bg-white/10 backdrop-blur-sm rounded-lg border-patriot-gold/30">
              <AccordionTrigger className="text-white px-6 hover:no-underline">
                How can I buy this without cryptocurrency?
              </AccordionTrigger>
              <AccordionContent className="text-gray-300 px-6 pb-6">
                We make it simple! You can purchase with your credit card just like any online purchase. We handle all the technical details for you. You'll receive an email with instructions on how to access your digital collectible.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="preserve-history" className="bg-white/10 backdrop-blur-sm rounded-lg border-patriot-gold/30">
              <AccordionTrigger className="text-white px-6 hover:no-underline">
                How does Anthem250 preserve American history?
              </AccordionTrigger>
              <AccordionContent className="text-gray-300 px-6 pb-6">
                By creating a permanent, digital record of Hannah's performance tied to America's 250th anniversary celebration. This ensures future generations can experience this moment in our nation's history. Your purchase helps support the preservation of American cultural heritage.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="what-do-i-get" className="bg-white/10 backdrop-blur-sm rounded-lg border-patriot-gold/30">
              <AccordionTrigger className="text-white px-6 hover:no-underline">
                What do I actually receive when I buy?
              </AccordionTrigger>
              <AccordionContent className="text-gray-300 px-6 pb-6">
                You receive a unique digital certificate proving you own a piece of this historic performance. This includes high-quality audio/video of Hannah's rendition, exclusive behind-the-scenes content, and access to a community of fellow patriots who share your appreciation for American history.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="america-250" className="bg-white/10 backdrop-blur-sm rounded-lg border-patriot-gold/30">
              <AccordionTrigger className="text-white px-6 hover:no-underline">
                What is America's 250th anniversary celebration?
              </AccordionTrigger>
              <AccordionContent className="text-gray-300 px-6 pb-6">
                In 2026, America will celebrate its 250th birthday - the Semiquincentennial. This is a once-in-a-lifetime milestone celebrating the signing of the Declaration of Independence in 1776. Hannah's performance commemorates this historic moment, making your collectible a piece of this momentous celebration.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <Button 
            className="bg-patriot-gold hover:bg-patriot-gold/90 text-patriot-navy px-8 py-4 text-lg font-bold transform hover:scale-105 transition-all duration-300 shadow-lg"
            onClick={() => scrollToSection('participate')}
          >
            I'm Ready to Own a Piece of History
          </Button>
        </div>
      </div>
    </section>
  );
}