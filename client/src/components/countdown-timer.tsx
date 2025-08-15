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
    const targetDate = new Date('2025-07-04T00:00:00').getTime();

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
    <div className="bg-black/50 backdrop-blur-sm rounded-2xl p-6 border border-patriot-gold/30">
      <div className="text-center mb-4">
        <h3 className="text-lg md:text-xl font-bold text-white mb-2">
          🇺🇸 LAUNCH COUNTDOWN 🇺🇸
        </h3>
        <p className="text-patriot-gold text-sm">
          Independence Day 2025
        </p>
      </div>
      
      <div className="grid grid-cols-4 gap-2 md:gap-4">
        <div className="text-center bg-patriot-red/20 rounded-lg p-2 md:p-3 border border-patriot-red/30">
          <div className="text-lg md:text-2xl font-bold text-white">
            {timeLeft.days.toString().padStart(2, '0')}
          </div>
          <div className="text-xs md:text-sm text-patriot-gold font-medium">
            DAYS
          </div>
        </div>
        
        <div className="text-center bg-patriot-blue/20 rounded-lg p-2 md:p-3 border border-patriot-blue/30">
          <div className="text-lg md:text-2xl font-bold text-white">
            {timeLeft.hours.toString().padStart(2, '0')}
          </div>
          <div className="text-xs md:text-sm text-patriot-gold font-medium">
            HOURS
          </div>
        </div>
        
        <div className="text-center bg-patriot-red/20 rounded-lg p-2 md:p-3 border border-patriot-red/30">
          <div className="text-lg md:text-2xl font-bold text-white">
            {timeLeft.minutes.toString().padStart(2, '0')}
          </div>
          <div className="text-xs md:text-sm text-patriot-gold font-medium">
            MINS
          </div>
        </div>
        
        <div className="text-center bg-patriot-blue/20 rounded-lg p-2 md:p-3 border border-patriot-blue/30">
          <div className="text-lg md:text-2xl font-bold text-white">
            {timeLeft.seconds.toString().padStart(2, '0')}
          </div>
          <div className="text-xs md:text-sm text-patriot-gold font-medium">
            SECS
          </div>
        </div>
      </div>
    </div>
  );
}