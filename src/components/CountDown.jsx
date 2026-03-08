import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState({});

  useEffect(() => {
    const birthday = new Date('2026-03-30T00:00:00'); // CHANGE TO HER BIRTHDAY
    const timer = setInterval(() => {
      const now = new Date();
      const diff = birthday - now;
      if (diff < 0) {
        clearInterval(timer);
        return;
      }
      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / 1000 / 60) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <motion.div
      initial={{ scale: 0.8 }}
      animate={{ scale: 1 }}
      className="text-center"
    >
      <h3 className="text-4xl font-bold text-red-600 mb-6">Birthday in...</h3>
      <div className="flex justify-center gap-6 text-3xl font-mono">
        {Object.entries(timeLeft).map(([unit, val]) => (
          <div key={unit} className="bg-white/60 px-2 py-2 rounded-xl shadow-lg">
            <span className="block text-5xl text-red-500">{val.toString().padStart(2, '0')}</span>
            <span className="text-lg capitalize">{unit}</span>
          </div>
        ))}
      </div>
    </motion.div>
  );
}