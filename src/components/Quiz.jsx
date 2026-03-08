import { useState } from 'react';
import { quizData } from '../data/quizData';
import { motion } from 'framer-motion';

export default function Quiz({ setShowConfetti }) {
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [selected, setSelected] = useState(null);

  const handleAnswer = (index) => {
    setSelected(index);
    if (index === quizData[current].correct) setScore(prev => prev + 1);

    setTimeout(() => {
      if (current < quizData.length - 1) {
        setCurrent(prev => prev + 1);
        setSelected(null);
      } else {
        setShowResult(true);
        setShowConfetti(true);
        setTimeout(() => setShowConfetti(false), 8000);
      }
    }, 1200);
  };

  if (showResult) {
    return (
      <motion.div
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        className="py-20 text-center"
      >
        <h2 className="text-6xl font-bold text-red-600">You scored {score}/{quizData.length} ❤️</h2>
        <p className="text-3xl mt-8">
          {score >= quizData.length - 2 ? "You know me better than anyone! My perfect girl 🥹" : "We need more time together... but I love you anyway 💕"}
        </p>
      </motion.div>
    );
  }

  const q = quizData[current];

  return (
    <section className="py-20 px-4">
      <h2 className="text-5xl font-bold text-center text-red-600 mb-12">How Well Do I Know You? ❓</h2>
      <div className="max-w-2xl mx-auto bg-white/80 p-10 rounded-3xl shadow-2xl">
        <h3 className="text-3xl font-semibold mb-8">{q.question}</h3>
        <div className="space-y-4">
          {q.options.map((opt, i) => (
            <motion.button
              key={i}
              whileHover={{ scale: 1.05 }}
              onClick={() => handleAnswer(i)}
              disabled={selected !== null}
              className={`w-full p-5 text-left rounded-xl transition text-lg ${
                selected === null
                  ? 'bg-pink-100 hover:bg-pink-200'
                  : selected === i
                  ? i === q.correct ? 'bg-green-500 text-white' : 'bg-red-500 text-white'
                  : 'bg-gray-200'
              }`}
            >
              {opt}
            </motion.button>
          ))}
        </div>
        <p className="mt-8 text-center text-xl">Question {current + 1} of {quizData.length}</p>
      </div>
    </section>
  );
}