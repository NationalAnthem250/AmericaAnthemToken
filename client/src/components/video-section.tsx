import { useEffect, useState } from "react";

export default function VideoSection() {
  const [hasInteracted, setHasInteracted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [autoplaySupported, setAutoplaySupported] = useState(true);
  const [browserInfo, setBrowserInfo] = useState<string>('');

  useEffect(() => {
    const userAgent = navigator.userAgent;
    
    // Enhanced browser detection for autoplay policies
    const isEdge = /Edg|Edge/.test(userAgent);
    const isChrome = /Chrome/.test(userAgent) && !isEdge && !/Safari/.test(userAgent);
    const isSafari = /Safari/.test(userAgent) && !isChrome && !isEdge && !/Chrome/.test(userAgent);
    const isFirefox = /Firefox/.test(userAgent);
    const isIE = /Trident|MSIE/.test(userAgent);
    const isOpera = /OPR|Opera/.test(userAgent);
    
    // Comprehensive device and browser detection
    const detectEnvironment = () => {
      // Mobile detection
      const mobileCheck = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);
      setIsMobile(mobileCheck);
      
      let browser = 'Unknown';
      if (isEdge) browser = 'Edge';
      else if (isOpera) browser = 'Opera';
      else if (isChrome) browser = 'Chrome';
      else if (isSafari) browser = 'Safari';
      else if (isFirefox) browser = 'Firefox';
      else if (isIE) browser = 'IE';
      
      setBrowserInfo(`${browser} - ${mobileCheck ? 'Mobile' : 'Desktop'}`);
      
      // Test autoplay support
      testAutoplaySupport();
    };
    
    const testAutoplaySupport = async () => {
      try {
        // Edge and Safari have stricter autoplay policies
        if (isEdge || isSafari) {
          setAutoplaySupported(false);
          return;
        }
        
        // Better video data for testing
        const video = document.createElement('video');
        video.muted = true;
        video.autoplay = true;
        video.playsInline = true;
        video.style.width = '1px';
        video.style.height = '1px';
        video.style.position = 'absolute';
        video.style.top = '-1000px';
        
        // More comprehensive test video data
        video.src = 'data:video/mp4;base64,AAAAIGZ0eXBpc29tAAACAGlzb21pc28yYXZjMWlzaWVuZGF2Y2FzZ2NzdG1lZGF0YWF2YzFtZGF0';
        
        document.body.appendChild(video);
        
        const playPromise = video.play();
        if (playPromise !== undefined && typeof playPromise.then === 'function') {
          try {
            await playPromise;
            setAutoplaySupported(true);
          } catch (playError) {
            setAutoplaySupported(false);
          }
        } else {
          // Fallback for older browsers
          setTimeout(() => {
            setAutoplaySupported(!video.paused);
          }, 100);
        }
        
        // Cleanup
        setTimeout(() => {
          if (video.parentNode) {
            video.parentNode.removeChild(video);
          }
        }, 500);
        
      } catch (error) {
        console.log('Autoplay not supported:', error);
        setAutoplaySupported(false);
      }
    };
    
    detectEnvironment();

    const handleUserInteraction = () => {
      if (!hasInteracted) {
        setHasInteracted(true);
        
        // Find the iframe and try to play/unmute
        const iframe = document.querySelector('#video-player') as HTMLIFrameElement;
        if (iframe && iframe.contentWindow) {
          // Post messages to Vimeo player with error handling
          try {
            iframe.contentWindow.postMessage('{"method":"play"}', '*');
            iframe.contentWindow.postMessage('{"method":"setVolume","value":1}', '*');
            iframe.contentWindow.postMessage('{"method":"setMuted","value":false}', '*');
          } catch (error) {
            console.log('Error controlling video:', error);
          }
        }
      }
    };

    // Enhanced event listeners for all interaction types
    const events = ['click', 'touchstart', 'touchend', 'scroll', 'keydown', 'mousemove'];
    events.forEach(event => {
      document.addEventListener(event, handleUserInteraction, { passive: true });
    });

    return () => {
      // Cleanup event listeners on unmount
      events.forEach(event => {
        document.removeEventListener(event, handleUserInteraction);
      });
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
          {/* Debug Info (only in development) */}
          {process.env.NODE_ENV === 'development' && (
            <div className="absolute top-4 right-4 bg-black/80 text-white p-2 rounded text-xs z-20">
              <div>Browser: {browserInfo}</div>
              <div>Autoplay: {autoplaySupported ? 'Supported' : 'Blocked'}</div>
              <div>Interacted: {hasInteracted ? 'Yes' : 'No'}</div>
            </div>
          )}
          
          {/* Play Button Overlay - Shows when autoplay might be blocked */}
          {(isMobile || !autoplaySupported || !hasInteracted || browserInfo.includes('Edge') || browserInfo.includes('Safari')) && (
            <div 
              className="absolute inset-0 flex items-center justify-center bg-black/60 z-10 cursor-pointer transition-opacity duration-300 mobile-optimized play-button-enhanced"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                setHasInteracted(true);
                
                // Multiple attempts to ensure video plays across browsers
                const iframe = document.querySelector('#video-player') as HTMLIFrameElement;
                if (iframe && iframe.contentWindow) {
                  try {
                    // Wait a moment for iframe to be ready
                    setTimeout(() => {
                      try {
                        iframe.contentWindow?.postMessage('{"method":"play"}', '*');
                        iframe.contentWindow?.postMessage('{"method":"setVolume","value":1}', '*');
                        iframe.contentWindow?.postMessage('{"method":"setMuted","value":false}', '*');
                      } catch (innerError) {
                        console.log('Retry video control failed:', innerError);
                        // Fallback: reload iframe with play parameters
                        const currentSrc = iframe.src;
                        iframe.src = currentSrc.replace(/autoplay=0/, 'autoplay=1').replace(/muted=1/, 'muted=0');
                      }
                    }, 100);
                  } catch (error) {
                    console.log('Error starting video:', error);
                  }
                }
              }}
              onTouchStart={(e) => {
                // Prevent double-firing on mobile
                e.preventDefault();
              }}
            >
              <div className="text-center">
                <div className="bg-patriot-red/90 rounded-full p-6 shadow-2xl mb-4 hover:bg-patriot-red transition-all-enhanced hover:scale-105 active:scale-95 backface-hidden">
                  <svg 
                    className="w-16 h-16 text-white ml-1 pointer-events-none svg-icon-fix" 
                    fill="currentColor" 
                    viewBox="0 0 24 24"
                    style={{ filter: 'drop-shadow(2px 2px 4px rgba(0,0,0,0.3))' }}
                  >
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </div>
                <p className="text-white text-lg font-semibold">Watch Performance</p>
                <p className="text-gray-300 text-sm mt-1">
                  {browserInfo.includes('Edge') ? 'Click to play (Edge browser)' : 
                   browserInfo.includes('Safari') ? 'Click to play (Safari)' :
                   isMobile ? 'Tap to play with sound' : 'Click to play with sound'}
                </p>
              </div>
            </div>
          )}
          
          {/* Vimeo Video Player with Dynamic Parameters */}
          <div style={{ padding: "97.4691225% 0 0 0", position: "relative" }}>
            <iframe 
              id="video-player"
              src={`https://player.vimeo.com/video/1110087317?badge=0&autopause=0&autoplay=${hasInteracted && autoplaySupported && !browserInfo.includes('Edge') && !browserInfo.includes('Safari') ? '1' : '0'}&loop=1&muted=${hasInteracted && !browserInfo.includes('Edge') && !browserInfo.includes('Safari') ? '0' : '1'}&background=${hasInteracted && autoplaySupported && !isMobile && !browserInfo.includes('Edge') && !browserInfo.includes('Safari') ? '1' : '0'}&controls=${isMobile || !hasInteracted || browserInfo.includes('Edge') || browserInfo.includes('Safari') ? '1' : '0'}&player_id=0&app_id=58479&quality=auto&responsive=1&keyboard=1`}
              frameBorder="0" 
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share" 
              referrerPolicy="strict-origin-when-cross-origin" 
              style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }} 
              title="Hannah Magnelli's Rendition National Anthem - Celebrating the 250th Anniversary of the United States of America"
              loading="eager"
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
