export default function VideoSection() {
  return (
    <section id="video" className="py-20 bg-patriot-navy">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
            OWN PART OF <span className="text-patriot-red">AMERICAN HISTORY</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Hannah Magnelli's powerful interpretation of "The Star-Spangled Banner" brings classical excellence to America's most treasured song
          </p>
        </div>
        
        <div className="relative bg-black rounded-2xl overflow-hidden shadow-2xl max-w-4xl mx-auto">
          {/* Vimeo Video Player */}
          <div style={{ padding: "178.27% 0 0 0", position: "relative" }}>
            <iframe 
              src="https://player.vimeo.com/video/1110087317?badge=0&autopause=0&player_id=0&app_id=58479" 
              frameBorder="0" 
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share" 
              referrerPolicy="strict-origin-when-cross-origin" 
              style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }} 
              title="Hannah Magnelli's Rendition National Anthem - Celebrating the 250th Anniversary of the United States of America"
            ></iframe>
          </div>
        </div>
        
        <div className="text-center mt-8">
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
