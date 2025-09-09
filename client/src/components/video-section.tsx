import { useEffect, useState } from "react";

export default function VideoSection() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);

  useEffect(() => {
    // Aggressive autoplay strategy for all browsers
    const enableAutoplay = () => {
      setHasInteracted(true);
      const iframe = document.querySelector('#video-player') as HTMLIFrameElement;
      if (iframe && iframe.contentWindow) {
        try {
          // Multiple attempts to ensure video plays with sound
          iframe.contentWindow?.postMessage('{"method":"play"}', '*');
          iframe.contentWindow?.postMessage('{"method":"setVolume","value":1}', '*');
          iframe.contentWindow?.postMessage('{"method":"setMuted","value":false}', '*');
          
          // Additional attempts with different timing
          setTimeout(() => {
            try {
              iframe.contentWindow?.postMessage('{"method":"play"}', '*');
              iframe.contentWindow?.postMessage('{"method":"setMuted","value":false}', '*');
            } catch (err) {
              console.log('Delayed autoplay attempt:', err);
            }
          }, 500);
          
          setTimeout(() => {
            try {
              iframe.contentWindow?.postMessage('{"method":"play"}', '*');
            } catch (err) {
              console.log('Final autoplay attempt:', err);
            }
          }, 2000);
          
        } catch (error) {
          console.log('Video control attempt:', error);
        }
      }
    };

    // Immediate autoplay attempt (works in some browsers)
    setTimeout(() => {
      if (!hasInteracted) {
        enableAutoplay();
      }
    }, 100);

    // Listen for any user interaction to enable autoplay
    const interactionEvents = ['click', 'touchstart', 'touchend', 'keydown', 'scroll', 'mousemove', 'mouseenter', 'focus'];
    
    const handleFirstInteraction = () => {
      if (!hasInteracted) {
        enableAutoplay();
        // Remove listeners after first interaction
        interactionEvents.forEach(event => {
          document.removeEventListener(event, handleFirstInteraction);
        });
      }
    };

    // Add interaction listeners
    interactionEvents.forEach(event => {
      document.addEventListener(event, handleFirstInteraction, { passive: true });
    });

    // Try autoplay on page visibility change (works when switching tabs)
    const handleVisibilityChange = () => {
      if (!document.hidden && !hasInteracted) {
        enableAutoplay();
      }
    };
    
    document.addEventListener('visibilitychange', handleVisibilityChange);

    // Cleanup
    return () => {
      interactionEvents.forEach(event => {
        document.removeEventListener(event, handleFirstInteraction);
      });
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, [hasInteracted]);

  return (
    <section id="video" className="py-20 bg-patriot-navy">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
            HEAR <span className="text-patriot-red">HANNAH'S PERFORMANCE</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-4">
            Listen to this beautiful interpretation of "The Star-Spangled Banner" that will be preserved for America's 250th anniversary
          </p>
          <div className="bg-patriot-gold/20 backdrop-blur-sm rounded-lg p-4 max-w-2xl mx-auto border border-patriot-gold/30">
            <p className="text-patriot-gold font-semibold">
              🎵 This is the exact performance that will become part of America's historical record
            </p>
          </div>
        </div>
        
        <div className="relative bg-black rounded-2xl overflow-hidden shadow-2xl max-w-4xl mx-auto">
          

          
          {/* Vimeo Video Player with Dynamic Parameters */}
          <div style={{ padding: "97.4691225% 0 0 0", position: "relative" }}>
            <iframe 
              id="video-player"
              src={`https://player.vimeo.com/video/1117265675?badge=0&autopause=0&autoplay=${hasInteracted ? '1' : '1'}&loop=0&muted=${hasInteracted ? '0' : '1'}&background=0&controls=1&player_id=0&app_id=58479&quality=auto&responsive=1&keyboard=1&dnt=1`}
              frameBorder="0" 
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share" 
              referrerPolicy="strict-origin-when-cross-origin" 
              style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }} 
              title="Hannah Magnelli's Rendition National Anthem - Celebrating the 250th Anniversary of the United States of America"
              loading="eager"
              onLoad={() => {
                setIsLoaded(true);
                // Multiple autoplay attempts with different strategies
                const iframe = document.querySelector('#video-player') as HTMLIFrameElement;
                if (iframe && iframe.contentWindow) {
                  // Immediate attempt
                  try {
                    iframe.contentWindow?.postMessage('{"method":"play"}', '*');
                    iframe.contentWindow?.postMessage('{"method":"setVolume","value":1}', '*');
                    iframe.contentWindow?.postMessage('{"method":"setMuted","value":false}', '*');
                  } catch (error) {
                    console.log('Immediate autoplay attempt:', error);
                  }
                  
                  // Delayed attempts
                  setTimeout(() => {
                    try {
                      iframe.contentWindow?.postMessage('{"method":"play"}', '*');
                      iframe.contentWindow?.postMessage('{"method":"setMuted","value":false}', '*');
                    } catch (error) {
                      console.log('Delayed autoplay attempt 1:', error);
                    }
                  }, 500);
                  
                  setTimeout(() => {
                    try {
                      iframe.contentWindow?.postMessage('{"method":"play"}', '*');
                      iframe.contentWindow?.postMessage('{"method":"setMuted","value":false}', '*');
                    } catch (error) {
                      console.log('Delayed autoplay attempt 2:', error);
                    }
                  }, 2000);
                  
                  setTimeout(() => {
                    try {
                      iframe.contentWindow?.postMessage('{"method":"play"}', '*');
                    } catch (error) {
                      console.log('Final autoplay attempt:', error);
                    }
                  }, 5000);
                }
              }}
            ></iframe>
          </div>
        </div>
        
        {/* Hero Content Below Video */}
        <div className="text-center mt-12 space-y-8">
          {/* Main Title */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
            Own a Piece of
            <span className="block text-patriot-gold">American History</span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto leading-relaxed">
            The first-ever NFT of the US National Anthem performed by professional mezzo soprano 
            <span className="text-patriot-gold font-semibold"> Hannah Magnelli</span> in commemoration of America's 250th anniversary
          </p>
          
          {/* Token Info */}
          <div className="bg-black/50 backdrop-blur-sm rounded-2xl p-6 max-w-2xl mx-auto border border-patriot-gold/30">
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="font-bold text-lg">
                  <span className="text-red-600">250</span><span className="text-white">ST</span><span className="text-blue-600">AR</span> <span className="text-patriot-gold">Token</span>
                </span>
                <span className="text-white font-bold text-2xl">$17.76</span>
              </div>
              <div className="text-gray-300 text-sm">
                <div className="flex justify-between">
                  <span>Total Supply:</span>
                  <span className="text-patriot-gold">1,776,000 tokens</span>
                </div>
                <div className="flex justify-between mt-1">
                  <span>Network:</span>
                  <span className="text-patriot-blue">Solana</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8">
            <button 
              onClick={() => {
                const element = document.getElementById('participate');
                element?.scrollIntoView({ behavior: "smooth" });
              }}
              className="bg-patriot-gold hover:bg-patriot-gold/90 text-patriot-navy px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Join Waitlist
            </button>
            <button 
              onClick={() => {
                const element = document.getElementById('video');
                element?.scrollIntoView({ behavior: "smooth" });
              }}
              className="bg-transparent border-2 border-patriot-red text-patriot-red hover:bg-patriot-red hover:text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300"
            >
              Watch Performance
            </button>
          </div>
        </div>
        
        <div className="text-center mt-12">
          <p className="text-gray-300 italic text-lg">
            "One of the most beautiful and rich lyric mezzo voices I've heard in years."
          </p>
          <p className="text-patriot-gold font-semibold mt-2">
            - Richard Nechamkin, Mississippi Opera
          </p>
        </div>
      </div>
    </section>
  );
}
