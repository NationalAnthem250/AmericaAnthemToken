import { Card, CardContent } from "@/components/ui/card";
import { useLanguage } from '@/contexts/language-context';

export default function AmericaTimeline() {
  const { t } = useLanguage();
  const timelineEvents = [
    {
      year: "1776",
      title: t('timeline.event1Title'),
      description: t('timeline.event1Desc'),
      icon: "🗽"
    },
    {
      year: "1814",
      title: t('timeline.event2Title'),
      description: t('timeline.event2Desc'),
      icon: "🎵"
    },
    {
      year: "1931",
      title: t('timeline.event3Title'),
      description: t('timeline.event3Desc'),
      icon: "🇺🇸"
    },
    {
      year: "2024",
      title: t('timeline.event4Title'),
      description: t('timeline.event4Desc'),
      icon: "🎤"
    },
    {
      year: "2026",
      title: t('timeline.event5Title'),
      description: t('timeline.event5Desc'),
      icon: "🎆"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-patriot-navy to-black">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
            AMERICA'S <span className="text-patriot-red">250 YEAR JOURNEY</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            From independence in 1776 to America's historic 250th anniversary milestone - commemorating freedom, liberty, and the National Anthem legacy
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-patriot-red via-patriot-gold to-patriot-blue hidden md:block"></div>

          <div className="space-y-12">
            {timelineEvents.map((event, index) => (
              <div key={event.year} className={`flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} flex-col md:gap-8`}>
                {/* Content Card */}
                <div className="flex-1 max-w-md">
                  <Card className="bg-white/10 backdrop-blur-sm border-patriot-gold/30 hover:border-patriot-gold/60 transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4 mb-4">
                        <span className="text-3xl">{event.icon}</span>
                        <div>
                          <h3 className="text-2xl font-bold text-patriot-gold">{event.year}</h3>
                          <h4 className="text-xl font-semibold text-white">{event.title}</h4>
                        </div>
                      </div>
                      <p className="text-gray-300">{event.description}</p>
                    </CardContent>
                  </Card>
                </div>

                {/* Timeline Dot */}
                <div className="hidden md:block w-6 h-6 bg-patriot-gold rounded-full border-4 border-white shadow-lg z-10"></div>

                {/* Spacer for alternating layout */}
                <div className="flex-1 max-w-md hidden md:block"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-patriot-gold/30">
          <h3 className="text-3xl font-bold text-white mb-4">
            Be Part of America's Next Chapter
          </h3>
          <p className="text-xl text-gray-300 mb-6">
            Own a piece of this historic journey as we celebrate 250 years of American freedom and independence
          </p>
          <div className="text-center">
            <span className="inline-block bg-patriot-red text-white px-4 py-2 rounded-full text-sm font-bold mb-4">
              LIMITED TIME: America's 250th Anniversary
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}