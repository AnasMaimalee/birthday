import { useState } from 'react';
import { motion } from 'framer-motion';
import { quizData } from '../data/quizData';

export default function LoveQuiz() {
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState({});
  const [otherInputs, setOtherInputs] = useState({});

  const question = quizData[current];
  const totalQuestions = quizData.length;

  const handleAnswer = (value) => {
    setAnswers({ ...answers, [question.field]: value });

    // Clear other input if switching away from "Other"
    if (value !== "Other") {
      const newOther = { ...otherInputs };
      delete newOther[question.field];
      setOtherInputs(newOther);
    }
  };

  const handleOtherInput = (value) => {
    setOtherInputs({ ...otherInputs, [question.field]: value });
    setAnswers({ ...answers, [question.field]: value });
  };

  const next = () => {
    if (current < totalQuestions - 1) setCurrent(current + 1);
  };

  const back = () => {
    if (current > 0) setCurrent(current - 1);
  };

  const submitQuiz = async () => {
    try {
      await fetch("https://area-desire-sponsor-accordingly.trycloudflare.com/api/quiz-response", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(answers),
      });
      alert("Thank you for answering, my love ❤️");
    } catch (err) {
      console.error("Submit failed:", err);
      alert("Something went wrong... but I still love you! 🥹");
    }
  };

  return (
    <section className="py-20 px-4 md:px-8 bg-gradient-to-b from-pink-50 to-purple-50">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-center text-red-600 mb-3 tracking-tight">
          Our Future Together 💕
        </h2>
        <p className="text-center text-lg text-gray-600 mb-10">
          Just a few questions about our dreams... answer honestly, okay? 🥰
        </p>

        {/* Progress bar */}
        <div className="mb-10">
          <div className="h-2 bg-pink-100 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-pink-500 to-red-500"
              initial={{ width: 0 }}
              animate={{ width: `${((current + 1) / totalQuestions) * 100}%` }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            />
          </div>
          <p className="text-center mt-2 text-sm text-gray-500">
            Question {current + 1} of {totalQuestions}
          </p>
        </div>

        {/* Question Card */}
        <motion.div
          key={current}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -30 }}
          transition={{ duration: 0.5 }}
          className="bg-white/90 backdrop-blur-md p-8 md:p-10 rounded-3xl shadow-xl border border-pink-100"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-red-700 mb-8 text-center leading-tight">
            {question.question}
          </h3>

          {/* Choice buttons */}
          {question.type === "choice" && (
            <div className="space-y-4">
              {question.options.map((opt, i) => (
                <motion.button
                  key={i}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => handleAnswer(opt)}
                  className={`w-full py-4 px-6 rounded-full text-lg font-medium transition-all duration-300 shadow-sm
                    ${
                      answers[question.field] === opt
                        ? 'bg-red-500 text-white ring-4 ring-red-200'
                        : 'bg-pink-50 hover:bg-pink-100 text-gray-800 border border-pink-200'
                    }`}
                >
                  {opt}
                </motion.button>
              ))}

              {answers[question.field] === "Other" && (
                <motion.input
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  type="text"
                  placeholder="Tell me your special answer..."
                  className="w-full mt-3 p-4 border-2 border-pink-300 rounded-2xl focus:outline-none focus:border-red-400 focus:ring-2 focus:ring-red-100 transition"
                  value={otherInputs[question.field] || ""}
                  onChange={(e) => handleOtherInput(e.target.value)}
                />
              )}
            </div>
          )}

          {/* Stepper (Kids counter) – made much prettier */}
          {question.type === "stepper" && (
            <div className="flex flex-col items-center gap-6 mt-4">
              <div className="text-6xl md:text-7xl font-bold text-red-600 drop-shadow-md">
                {answers[question.field] || 0}
              </div>

              <div className="flex gap-8">
                <motion.button
                  whileHover={{ scale: 1.15 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() =>
                    setAnswers({
                      ...answers,
                      [question.field]: Math.max((answers[question.field] || 0) - 1, 0),
                    })
                  }
                  className="bg-gradient-to-br from-red-400 to-red-600 text-white w-16 h-16 rounded-full text-3xl font-bold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center"
                >
                  –
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.15 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() =>
                    setAnswers({
                      ...answers,
                      [question.field]: (answers[question.field] || 0) + 1,
                    })
                  }
                  className="bg-gradient-to-br from-pink-400 to-pink-600 text-white w-16 h-16 rounded-full text-3xl font-bold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center"
                >
                  +
                </motion.button>
              </div>

              <p className="text-lg text-gray-600 mt-2">
                How many little hearts do we dream of? 🍼💕
              </p>
            </div>
          )}
        </motion.div>

        {/* Navigation */}
        <div className="flex justify-between items-center mt-12">
          <motion.button
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            onClick={back}
            disabled={current === 0}
            className={`flex items-center gap-2 px-8 py-4 rounded-full font-medium text-lg shadow-md transition-all duration-300 ${
              current === 0
                ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                : 'bg-gradient-to-r from-pink-400 to-pink-500 text-white hover:from-pink-500 hover:to-pink-600'
            }`}
          >
            ← Back
          </motion.button>

          {current === totalQuestions - 1 ? (
            <motion.button
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              onClick={submitQuiz}
              className="flex items-center gap-2 px-10 py-5 bg-gradient-to-r from-red-500 to-pink-500 text-white text-xl font-bold rounded-full shadow-xl hover:from-red-600 hover:to-pink-600 transition-all duration-300"
            >
              Submit with Love ❤️
            </motion.button>
          ) : (
            <motion.button
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              onClick={next}
              className="flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-pink-500 to-red-500 text-white rounded-full font-medium text-lg shadow-md hover:from-pink-600 hover:to-red-600 transition-all duration-300"
            >
              Next →
            </motion.button>
          )}
        </div>
      </div>
    </section>
  );
}