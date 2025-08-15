import HeroSection from "@/components/hero-section";
import VideoSection from "@/components/video-section";
import HannahBioSection from "@/components/hannah-bio-section";
import TokenomicsSection from "@/components/tokenomics-section";
import HowToParticipate from "@/components/how-to-participate";
import { NFTSection } from "@/components/nft-section";
import America250Section from "@/components/america250-section";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <main>
        <HeroSection />
        <VideoSection />
        <HannahBioSection />
        <TokenomicsSection />
        <HowToParticipate />
        <NFTSection />
        <America250Section />
      </main>
      <Footer />
    </div>
  );
}
