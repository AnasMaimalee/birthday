import { useState } from 'react';
import { motion } from 'framer-motion';
import Confetti from 'react-confetti';

export default function GiftBox() {
  const [stage, setStage] = useState(0);

  const messages = [
    "Layer 1: A hug from me right now 🤗",
    "Layer 2: All my love wrapped in kisses 💋",
    "Final Surprise: Forever yours... and this promise: [your big promise or photo]",
  ];

  return (
    <section className="py-24 text-center">
      <h2 className="text-6xl font-bold text-red-600 mb-12">Your Special Gift Box 🎁</h2>
      <motion.div
        className="inline-block relative cursor-pointer"
        onClick={() => stage < messages.length - 1 && setStage(s => s + 1)}
        animate={{ rotate: stage % 2 === 0 ? 5 : -5 }}
        transition={{ duration: 0.5 }}
      >
        <div className="w-80 h-80 bg-gradient-to-br from-red-400 to-pink-500 rounded-3xl shadow-2xl flex items-center justify-center text-white text-4xl font-bold">
          {stage === messages.length - 1 ? "Opened!" : "Click to Unwrap"}
        </div>
      </motion.div>
      {stage > 0 && (
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-12 text-3xl italic text-gray-800 max-w-2xl mx-auto"
        >
          {messages[stage - 1]}
        </motion.p>
      )}
      {stage === messages.length - 1 && <Confetti />}
    </section>
  );
}