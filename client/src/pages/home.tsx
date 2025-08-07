import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import VideoSection from "@/components/video-section";
import TokenomicsSection from "@/components/tokenomics-section";
import HowToParticipate from "@/components/how-to-participate";
import { NFTSection } from "@/components/nft-section";
import PerformersSection from "@/components/performers-section";
import America250Section from "@/components/america250-section";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <HeroSection />
        <section id="about">
          <VideoSection />
        </section>
        <TokenomicsSection />
        <HowToParticipate />
        <NFTSection />
        <section id="performers">
          <PerformersSection />
        </section>
        <America250Section />
      </main>
      
      {/* Prominent Statement Section */}
      <section className="bg-patriot-navy py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-2xl md:text-3xl text-yellow-400 font-medium leading-relaxed">
            The <strong>first-ever NFT</strong> of America's National Anthem, performed by professional mezzo soprano 
            <strong> Hannah Magnelli</strong>, in commemoration of the United States' 250th Anniversary
          </p>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}
