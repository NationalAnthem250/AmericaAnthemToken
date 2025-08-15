import { useState, useEffect } from 'react';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date('2026-07-04T00:00:00').getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    // Update immediately
    updateCountdown();

    // Update every second
    const timer = setInterval(updateCountdown, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-gradient-to-br from-patriot-red/10 via-white/5 to-patriot-blue/10 backdrop-blur-sm rounded-2xl p-6 border-2 border-patriot-gold/50 shadow-lg">
      <div className="text-center mb-4">
        <h3 className="text-lg md:text-xl font-bold mb-2">
          <span className="text-patriot-red">🇺🇸</span> 
          <span className="text-white mx-2">LAUNCH</span>
          <span className="text-patriot-blue">COUNTDOWN</span> 
          <span className="text-patriot-red">🇺🇸</span>
        </h3>
        <p className="text-patriot-gold text-sm font-semibold">
          ⭐ Independence Day 2026 ⭐
        </p>
      </div>
      
      <div className="grid grid-cols-4 gap-2 md:gap-4">
        <div className="text-center bg-gradient-to-b from-patriot-red/30 to-patriot-red/20 rounded-lg p-2 md:p-3 border-2 border-patriot-red/50 shadow-md">
          <div className="text-lg md:text-2xl font-bold text-white drop-shadow-lg">
            {timeLeft.days.toString().padStart(2, '0')}
          </div>
          <div className="text-xs md:text-sm text-patriot-gold font-bold">
            DAYS
          </div>
        </div>
        
        <div className="text-center bg-gradient-to-b from-white/20 to-white/10 rounded-lg p-2 md:p-3 border-2 border-white/30 shadow-md">
          <div className="text-lg md:text-2xl font-bold text-patriot-blue drop-shadow-lg">
            {timeLeft.hours.toString().padStart(2, '0')}
          </div>
          <div className="text-xs md:text-sm text-patriot-red font-bold">
            HOURS
          </div>
        </div>
        
        <div className="text-center bg-gradient-to-b from-patriot-blue/30 to-patriot-blue/20 rounded-lg p-2 md:p-3 border-2 border-patriot-blue/50 shadow-md">
          <div className="text-lg md:text-2xl font-bold text-white drop-shadow-lg">
            {timeLeft.minutes.toString().padStart(2, '0')}
          </div>
          <div className="text-xs md:text-sm text-patriot-gold font-bold">
            MINS
          </div>
        </div>
        
        <div className="text-center bg-gradient-to-b from-patriot-red/30 to-patriot-red/20 rounded-lg p-2 md:p-3 border-2 border-patriot-red/50 shadow-md">
          <div className="text-lg md:text-2xl font-bold text-white drop-shadow-lg">
            {timeLeft.seconds.toString().padStart(2, '0')}
          </div>
          <div className="text-xs md:text-sm text-patriot-gold font-bold">
            SECS
          </div>
        </div>
      </div>
    </div>
  );
}