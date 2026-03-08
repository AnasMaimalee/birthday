import { motion } from 'framer-motion';

export default function LoveMessages({ herName }) {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      className="py-20 px-4 bg-gradient-to-r from-red-50 to-pink-50"
    >
      <h2 className="text-5xl font-bold text-center text-red-600 mb-16">My Heartfelt Words for You 💌</h2>
      <div className="max-w-4xl mx-auto space-y-12 text-2xl text-gray-800 leading-relaxed">
        <p>Dear {herName}, from the moment you walked into my life, everything changed for the better...</p>
        <p>I love your laugh, your kindness, the way you steal my hoodies, and how you make ordinary days feel special.</p>
        {/* Add 5–10 more paragraphs with memories, promises */}
        <p className="text-4xl font-bold text-center mt-20">I promise to love you more every single day... forever. 💍❤️</p>
      </div>
    </motion.section>
  );
}