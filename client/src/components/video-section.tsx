export default function VideoSection() {
  return (
    <section id="anthem" className="py-20 bg-patriot-navy">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Image */}
        <div className="text-center mb-12">
          <img
            src="@assets/ChatGPT Image Jul 29, 2025, 07_56_11 PM_1753875731882.png"
            alt="Hannah Magnelli Anthem250 - Creating America's 250th Anniversary"
            className="mx-auto mb-8 max-w-lg w-full h-auto rounded-lg shadow-2xl"
          />
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
            OWN PART OF <span className="text-patriot-red">AMERICAN HISTORY</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Hannah Magnelli's powerful interpretation of "The Star-Spangled Banner" brings classical excellence to America's most treasured song
          </p>
        </div>
        
        <div className="relative bg-black rounded-2xl overflow-hidden shadow-2xl max-w-4xl mx-auto">
          {/* Vimeo Video Player */}
          <div className="relative" style={{ padding: "56.25% 0 0 0" }}>
            <iframe
              src="https://player.vimeo.com/video/1101358569?badge=0&autopause=0&autoplay=1&player_id=0&app_id=58479"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
              }}
              title="Hannah Magnelli - National Anthem"
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
