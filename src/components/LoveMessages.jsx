import { motion } from "framer-motion";

export default function LoveMessages({ herName }) {
  const messages = [
    `Dear ${herName}, from the moment you walked into my life, everything changed in the most beautiful way.`,
    "You turned ordinary days into magical memories, and every moment with you feels like a blessing.",
    "I love your smile, your laugh, the way your eyes light up when you’re happy.",
    "I love the little things about you — the way you talk, the way you care, the way you make everything feel safe.",
    "Being with you makes the world feel softer, warmer, and brighter.",
    "Through every joy, every challenge, and every dream, I want to be right beside you.",
    "You are not just someone I love — you are my peace, my happiness, and my home.",
  ];

  return (
    <section className="relative py-28 px-6 overflow-hidden bg-gradient-to-r from-red-50 via-pink-50 to-rose-100">

      {/* Floating Hearts Background */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <motion.span
            key={i}
            className="absolute text-pink-300 text-xl"
            initial={{ y: 200, opacity: 0 }}
            animate={{ y: -200, opacity: 1 }}
            transition={{
              duration: 10,
              repeat: Infinity,
              delay: i * 0.7,
            }}
            style={{ left: `${Math.random() * 100}%` }}
          >
            ❤️
          </motion.span>
        ))}
      </div>

      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl md:text-6xl font-bold text-center text-red-600 mb-20"
      >
        My Heartfelt Words for You 💌
      </motion.h2>

      {/* Message Cards */}
      <div className="max-w-4xl mx-auto space-y-10">

        {messages.map((msg, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 80, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.7, delay: index * 0.2 }}
            className="bg-white/70 backdrop-blur-lg p-8 rounded-3xl shadow-xl border border-pink-200"
          >
            <p className="text-xl md:text-2xl text-gray-800 leading-relaxed italic">
              {msg}
            </p>
          </motion.div>
        ))}

      </div>

      {/* Final Promise */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="mt-24 text-center"
      >
        <div className="inline-block bg-gradient-to-r from-red-500 to-pink-500 text-white px-12 py-8 rounded-3xl shadow-2xl">

          <p className="text-3xl md:text-4xl font-bold leading-relaxed">
            I promise to love you more every single day,
            <br />
            to stand beside you through everything,
            <br />
            and to choose you… forever. 💍❤️
          </p>

        </div>
      </motion.div>
    </section>
  );
}