import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Confetti from "react-confetti";

export default function GiftBox() {
  const [stage, setStage] = useState(0);

  const layers = [
    {
      title: "First Layer",
      message: "A warm hug from me right now 🤗",
    },
    {
      title: "Second Layer",
      message: "A million kisses flying your way 💋",
    },
    {
      title: "Third Layer",
      message: "Every heartbeat of mine belongs to you ❤️",
    },
    {
      title: "Final Surprise",
      message:
        "Forever yours. I promise to always love you, protect you, and stand beside you no matter what 💍",
    },
  ];

  const nextStage = () => {
    if (stage < layers.length) setStage(stage + 1);
  };

  return (
    <section className="relative py-28 text-center overflow-hidden">

      {/* Confetti when finished */}
      {stage === layers.length && <Confetti recycle={false} numberOfPieces={600} />}

      <h2 className="text-6xl font-bold text-red-600 mb-14">
        Your Special Gift 🎁
      </h2>

      {/* Gift Box */}
      <motion.div
        onClick={nextStage}
        className="relative w-80 h-80 mx-auto cursor-pointer"
        whileHover={{ scale: 1.05 }}
      >

        {/* Glow */}
        <div className="absolute inset-0 rounded-3xl bg-pink-400 blur-3xl opacity-30"></div>

        {/* Box */}
        <motion.div
          className="relative w-full h-full bg-gradient-to-br from-red-500 to-pink-500 rounded-3xl shadow-2xl flex items-center justify-center text-white text-3xl font-bold"
          animate={{
            rotate: stage % 2 === 0 ? 3 : -3,
          }}
          transition={{ duration: 0.6 }}
        >
          {stage === layers.length ? "Opened ❤️" : "Tap to Unwrap"}
        </motion.div>

        {/* Ribbon */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-full bg-red-700 opacity-80"></div>
        <div className="absolute top-1/2 left-0 -translate-y-1/2 h-12 w-full bg-red-700 opacity-80"></div>

      </motion.div>

      {/* Messages */}
      <AnimatePresence>
        {stage > 0 && (
          <motion.div
            key={stage}
            initial={{ opacity: 0, y: 60, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="mt-14 max-w-2xl mx-auto"
          >
            <div className="bg-white/80 backdrop-blur-lg p-10 rounded-3xl shadow-xl">

              <h3 className="text-3xl font-bold text-red-500 mb-4">
                {layers[stage - 1].title}
              </h3>

              <p className="text-2xl italic text-gray-800">
                {layers[stage - 1].message}
              </p>

            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Hearts */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-pink-400 text-2xl"
            initial={{ y: 400, opacity: 0 }}
            animate={{ y: -200, opacity: 1 }}
            transition={{
              duration: 8,
              repeat: Infinity,
              delay: i * 0.8,
            }}
            style={{ left: `${Math.random() * 100}%` }}
          >
            ❤️
          </motion.div>
        ))}
      </div>
    </section>
  );
}