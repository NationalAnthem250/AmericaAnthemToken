import { useState } from "react";
import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import VideoSection from "@/components/video-section";
import VisionMission from "@/components/vision-mission";
import HannahBioSection from "@/components/hannah-bio-section";
import TokenomicsSection from "@/components/tokenomics-section";
import HowToParticipate from "@/components/how-to-participate";
import { NFTSection } from "@/components/nft-section";
import America250Section from "@/components/america250-section";
import Footer from "@/components/footer";
import DualOnboarding from "@/components/dual-onboarding";
import NFTEducation from "@/components/nft-education";
import AmericaTimeline from "@/components/america-timeline";
import CryptoAdvanced from "@/components/crypto-advanced";
import PaymentOptions from "@/components/payment-options";

export default function Home() {
  const [userPath, setUserPath] = useState<'newbie' | 'crypto' | null>(null);

  const handleSelectPath = (path: 'newbie' | 'crypto') => {
    setUserPath(path);
    // Scroll to the next section
    setTimeout(() => {
      const element = document.getElementById('selected-content');
      element?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <HeroSection />
        <VideoSection />
        <VisionMission />
        
        {/* Dual Onboarding Flow */}
        <DualOnboarding onSelectPath={handleSelectPath} />
        
        {/* Path-Specific Content */}
        <div id="selected-content">
          {userPath === 'newbie' && (
            <>
              <NFTEducation />
              <AmericaTimeline />
              <PaymentOptions />
            </>
          )}
          
          {userPath === 'crypto' && (
            <>
              <CryptoAdvanced />
              <PaymentOptions />
            </>
          )}
          
          {/* Default content shown regardless of path selection */}
          {userPath && (
            <>
              <HannahBioSection />
              <HowToParticipate />
              <NFTSection />
              <America250Section />
            </>
          )}
        </div>
        
        {/* Show default sections if no path selected */}
        {!userPath && (
          <>
            <HannahBioSection />
            <TokenomicsSection />
            <HowToParticipate />
            <NFTSection />
            <America250Section />
          </>
        )}
      </main>
      <Footer />
    </div>
  );
}
