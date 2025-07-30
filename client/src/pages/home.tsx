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
      <Footer />
    </div>
  );
}
