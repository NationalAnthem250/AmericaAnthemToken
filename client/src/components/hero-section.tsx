import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import heroImage from "@assets/IMG_4165_1754527909411.jpeg";

export default function HeroSection() {

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative bg-black min-h-screen flex items-center pt-16 overflow-hidden">
      {/* Full-screen image background */}
      <div className="absolute inset-0 w-full h-full z-0">
        <img
          src={heroImage}
          alt="Hannah Magnelli performing the National Anthem"
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10"
          style={{
            width: '59.765625vw',
            height: '59.765625vh',
            objectFit: 'cover'
          }}
        />
      </div>
      
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/20 z-20"></div>
      
      {/* Patriotic border elements */}
      <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-patriot-red via-patriot-gold to-patriot-blue z-30"></div>
      <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-patriot-blue via-patriot-gold to-patriot-red z-30"></div>
      
      <div className="relative z-30 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">







        </div>
      </div>
    </section>
  );
}
