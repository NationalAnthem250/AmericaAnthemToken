import { useState, useEffect } from 'react';

export default function CountdownTimer() {
  const [countdown, setCountdown] = useState(15 * 60); // 15 minutes in seconds

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev > 0) {
          return prev - 1;
        }
        return 0;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const minutes = Math.floor(countdown / 60);
  const seconds = countdown % 60;

  return (
    <div className="flex items-center space-x-2 bg-patriot-gold/20 rounded-lg px-3 py-2 border border-patriot-gold/30">
      <span className="text-patriot-gold font-bold text-sm">Demo Launch:</span>
      <div className="text-white font-mono bg-patriot-red px-3 py-1 rounded font-bold">
        {String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}
      </div>
    </div>
  );
}