import { Button } from "@/components/ui/button";
import { useLanguage } from '@/contexts/language-context';

export default function America250Section() {
  const { t } = useLanguage();
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="america250" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-black text-patriot-navy mb-6">
            {t('america250.title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('america250.subtitle')}
          </p>
        </div>
        
        <div className="bg-gradient-to-br from-[hsl(221,83%,53%)] to-[hsl(215,28%,17%)] text-white rounded-2xl p-8 lg:p-12 shadow-2xl">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-black mb-6">{t('america250.celebrationTitle')}</h3>
              <p className="text-lg text-gray-200 mb-6 leading-relaxed">
                {t('america250.celebrationDesc')}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  asChild
                  className="bg-patriot-red hover:bg-patriot-red-hover text-white font-bold py-3 px-6 rounded-full transition-all"
                >
                  <a
                    href="https://america250.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fas fa-external-link-alt mr-2"></i>
                    {t('america250.visitButton')}
                  </a>
                </Button>
                <Button
                  variant="outline"
                  className="border-2 border-black hover:bg-black hover:text-white text-black bg-white font-bold py-3 px-6 rounded-full transition-all"
                >
                  <a
                    href="https://en.wikipedia.org/wiki/United_States_Semiquincentennial"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {t('america250.learnMoreButton')}
                  </a>
                </Button>
              </div>
            </div>
            
            <div className="text-center">
              {/* America250 celebration image */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                <i className="fas fa-flag-usa text-8xl text-patriot-red mb-4"></i>
                <p className="text-xl font-bold text-white">America's 250th Anniversary</p>
                <p className="text-gray-300">July 4, 2026</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Call to Action */}
        <div className="mt-16 py-20 bg-gradient-to-r from-[hsl(0,79%,49%)] to-red-700 rounded-2xl text-center">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
              BE PART OF <span className="text-patriot-gold">HISTORY</span>
            </h2>
            <p className="text-xl text-gray-100 mb-8 max-w-2xl mx-auto">
              {t('america250.subtitle')}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                className="bg-white hover:bg-gray-100 text-patriot-red font-bold py-4 px-8 rounded-full text-lg transition-all transform hover:scale-105 shadow-lg"
                onClick={() => scrollToSection('participate')}
              >
                <i className="fas fa-envelope mr-2"></i>
                {t('emailSignup.button')}
              </Button>
              <Button
                asChild
                variant="outline"
                className="bg-patriot-navy hover:bg-gray-800 border-patriot-navy text-white font-bold py-4 px-8 rounded-full text-lg transition-all transform hover:scale-105 shadow-lg"
              >
                <a
                  href="https://drive.google.com/file/d/1XPVrrb6QuLfvoa5RFS72Ryf5CugCQgoa/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fas fa-file-alt mr-2"></i>
                  {t('america250.readWhitepaper')}
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
