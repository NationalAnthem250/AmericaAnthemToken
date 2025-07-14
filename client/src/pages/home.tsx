import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import VideoSection from "@/components/video-section";
import TokenSection from "@/components/token-section";
import AboutSection from "@/components/about-section";
import America250Section from "@/components/america250-section";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <HeroSection />
        <VideoSection />
        <TokenSection />
        <AboutSection />
        <America250Section />
      </main>
      <Footer />
    </div>
  );
}
