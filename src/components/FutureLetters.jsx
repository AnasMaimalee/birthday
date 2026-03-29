import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const letters = [
  {
    title: "On Our First Anniversary",
    unlockDate: new Date('2026-10-15'), // example
    content: "My love, one month in and I still get butterflies every time you smile...",
  },
  {
    title: "When We Have Our Dream Home",
    unlockDate: new Date('2028-01-01'),
    content: "We'll have that cozy corner with books, plants, and your laugh echoing everywhere...",
  },
  // Add 3–5 more
];

export default function FutureLetters() {
  const [opened, setOpened] = useState({});

  const canOpen = (unlockDate) => new Date() >= unlockDate;

  return (
    <section className="py-24 px-6 bg-gradient-to-t from-red-50 to-white">
      <h2 className="text-2xl md:text-7xl font-bold text-center text-pink-700 mb-16">
        Letters I'll Write to You in the Future 💌✨
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {letters.map((letter, i) => (
          <motion.div
            key={i}
            className="relative bg-white/80 backdrop-blur-md p-8 rounded-3xl shadow-xl border border-pink-200 hover:shadow-2xl transition"
            whileHover={{ scale: 1.05, rotate: 2 }}
          >
            <h3 className="text-2xl font-semibold text-red-600 mb-4">{letter.title}</h3>
            {canOpen(letter.unlockDate) || true /* for testing */ ? (
              <AnimatePresence>
                {opened[i] ? (
                  <motion.p
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    className="text-gray-800 leading-relaxed"
                  >
                    {letter.content}
                  </motion.p>
                ) : (
                  <button
                    onClick={() => setOpened(prev => ({ ...prev, [i]: true }))}
                    className="mt-6 px-8 py-3 bg-red-500 text-white rounded-full hover:bg-red-600 transition"
                  >
                    Open Letter 💕
                  </button>
                )}
              </AnimatePresence>
            ) : (
              <p className="text-gray-500 italic">Unlocks on {letter.unlockDate.toDateString()}... patience, my love 🕰️</p>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}