import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Confetti from 'react-confetti';
import { quizData } from '../data/quizData';

export default function LoveQuiz() {
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState({});
  const [otherInputs, setOtherInputs] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showThankYou, setShowThankYou] = useState(false);
  const [showResetPrompt, setShowResetPrompt] = useState(false);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [confettiActive, setConfettiActive] = useState(false);

  const question = quizData[current];
  const totalQuestions = quizData.length;

  const handleAnswer = (value) => {
    setAnswers({ ...answers, [question.field]: value });

    if (value !== "Other") {
      setOtherInputs(prev => {
        const updated = { ...prev };
        delete updated[question.field];
        return updated;
      });
    }
  };

  const handleOtherInput = (value) => {
    setOtherInputs({ ...otherInputs, [question.field]: value });
  };

  const next = () => {
    if (current < totalQuestions - 1) setCurrent(current + 1);
  };

  const back = () => {
    if (current > 0) setCurrent(current - 1);
  };

  const resetQuiz = () => {
    setCurrent(0);
    setAnswers({});
    setOtherInputs({});
    setQuizCompleted(false);
    setShowResetPrompt(false);
  };

  const submitQuiz = async () => {
    setIsSubmitting(true);

    try {
      const finalAnswers = { ...answers };

      Object.keys(otherInputs).forEach(field => {
        if (answers[field] === "Other") {
          finalAnswers[field] = otherInputs[field]?.trim() || "Other (no details)";
        }
      });

      await fetch("https://area-desire-sponsor-accordingly.trycloudflare.com/api/quiz-response", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(finalAnswers),
      });

      setConfettiActive(true);
      setShowThankYou(true);
      setQuizCompleted(true);

      setTimeout(() => setConfettiActive(false), 8000);
    } catch (err) {
      console.error("Submit failed:", err);
      alert("Something went wrong... but my love for you is still perfect 🥹");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* Main Quiz Section */}
      {!quizCompleted && (
        <section className="py-20 px-4 md:px-8 bg-gradient-to-b from-pink-50 to-purple-50">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-extrabold text-center text-red-600 mb-3 tracking-tight">
              Our Future Together 💕
            </h2>
            <p className="text-center text-lg text-gray-600 mb-10">
              Just a few questions about our dreams... answer honestly, okay? 🥰
            </p>

            {/* Progress */}
            <div className="mb-10">
              <div className="h-2 bg-pink-100 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-pink-500 to-red-500"
                  initial={{ width: 0 }}
                  animate={{ width: `${((current + 1) / totalQuestions) * 100}%` }}
                  transition={{ duration: 0.5 }}
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
              transition={{ duration: 0.5 }}
              className="bg-white/90 backdrop-blur-md p-8 md:p-10 rounded-3xl shadow-xl border border-pink-100"
            >
              <h3 className="text-2xl md:text-3xl font-bold text-red-700 mb-8 text-center leading-tight">
                {question.question}
              </h3>

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
                      {question.field === "favorite_color" && opt !== "Other" && (
                        <span className="ml-2 text-xl">
                          {opt === "Red" ? "❤️" :
                           opt === "Pink" ? "💗" :
                           opt === "Blue" ? "💙" :
                           opt === "Purple" ? "💜" :
                           opt === "Black" ? "🖤" : ""}
                        </span>
                      )}
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

              {question.type === "stepper" && (
                <div className="flex flex-col items-center gap-6 mt-4">
                  <div className="text-6xl md:text-7xl font-bold text-red-600 drop-shadow-md">
                    {answers[question.field] || 0}
                  </div>

                  <div className="flex gap-8">
                    <motion.button
                      whileHover={{ scale: 1.15 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => setAnswers({ ...answers, [question.field]: Math.max((answers[question.field] || 0) - 1, 0) })}
                      className="bg-gradient-to-br from-red-400 to-red-600 text-white w-16 h-16 rounded-full text-3xl font-bold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center"
                    >
                      –
                    </motion.button>

                    <motion.button
                      whileHover={{ scale: 1.15 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => setAnswers({ ...answers, [question.field]: (answers[question.field] || 0) + 1 })}
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
                disabled={current === 0 || isSubmitting}
                className={`flex items-center gap-2 px-8 py-4 rounded-full font-medium text-lg shadow-md transition-all duration-300 ${
                  current === 0 || isSubmitting
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
                  disabled={isSubmitting}
                  className={`flex items-center gap-2 px-10 py-5 text-xl font-bold rounded-full shadow-xl transition-all duration-300 ${
                    isSubmitting
                      ? 'bg-gray-400 text-white cursor-not-allowed'
                      : 'bg-gradient-to-r from-red-500 to-pink-500 text-white hover:from-red-600 hover:to-pink-600'
                  }`}
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      Sending love... <motion.span animate={{ scale: [1, 1.3, 1] }} transition={{ repeat: Infinity, duration: 1 }}>💗</motion.span>
                    </span>
                  ) : (
                    "Submit with All My Love ❤️"
                  )}
                </motion.button>
              ) : (
                <motion.button
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={next}
                  disabled={isSubmitting}
                  className="flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-pink-500 to-red-500 text-white rounded-full font-medium text-lg shadow-md hover:from-pink-600 hover:to-red-600 transition-all duration-300"
                >
                  Next →
                </motion.button>
              )}
            </div>
          </div>
        </section>
      )}

      {/* Thank You Modal */}
      <AnimatePresence>
        {showThankYou && (
          <>
            <Confetti
              width={window.innerWidth}
              height={window.innerHeight}
              colors={['#ff69b4', '#ff1493', '#ff0000', '#ffd700', '#da70d6', '#ff8c00']}
              numberOfPieces={400}
              gravity={0.15}
              recycle={false}
            />

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-md px-4"
            >
              <motion.div
                initial={{ scale: 0.7, y: 80 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.7, y: 80 }}
                className="relative bg-gradient-to-br from-pink-50 to-red-50 p-10 md:p-16 rounded-3xl shadow-2xl max-w-lg w-full text-center border-4 border-white/40 overflow-hidden"
              >
                {/* Floating hearts */}
                {[...Array(10)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute text-4xl"
                    style={{ top: `${Math.random() * 100}%`, left: `${Math.random() * 100}%` }}
                    animate={{ y: [0, -120, 0], opacity: [0.6, 1, 0.6], scale: [0.8, 1.3, 0.8] }}
                    transition={{ duration: 5 + Math.random() * 4, repeat: Infinity, delay: i * 0.4 }}
                  >
                    {['❤️', '💗', '💖', '✨', '🌸'][i % 5]}
                  </motion.div>
                ))}

                <motion.h2
                  className="text-4xl md:text-5xl font-extrabold text-red-600 mb-6"
                >
                  Thank You, My Beautiful Sadiya!
                </motion.h2>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="text-xl md:text-2xl text-gray-800 font-medium leading-relaxed mb-10"
                >
                  Every word you shared feels like a love letter to our future.  
                  I’m so lucky to dream with you... thank you for opening your heart to me.  
                  I love you more than yesterday, and less than tomorrow. ❤️
                </motion.p>

                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    setShowThankYou(false);
                    setShowResetPrompt(true);
                  }}
                  className="px-12 py-5 bg-gradient-to-r from-red-500 to-pink-500 text-white text-xl font-bold rounded-full shadow-xl hover:from-red-600 hover:to-pink-600 transition-all duration-300"
                >
                  Close & Keep Loving Me 💕
                </motion.button>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Follow-up: Want to change answers? */}
      <AnimatePresence>
        {showResetPrompt && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm px-4"
          >
            <motion.div
              initial={{ scale: 0.8, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.8, y: 50 }}
              className="bg-white/95 backdrop-blur-lg p-10 md:p-14 rounded-3xl shadow-2xl max-w-md w-full text-center border border-pink-200"
            >
              <h3 className="text-3xl font-bold text-red-600 mb-6">
                One more thing, my love...
              </h3>

              <p className="text-xl text-gray-700 mb-10 leading-relaxed">
                Do you want to change your mind or fill it again?  
                I want to know every dream in your beautiful heart 💗
              </p>

              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <motion.button
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    setShowResetPrompt(false);
                    resetQuiz();
                  }}
                  className="px-10 py-4 bg-gradient-to-r from-pink-500 to-red-500 text-white font-bold rounded-full shadow-lg hover:from-pink-600 hover:to-red-600 transition-all"
                >
                  Yes, let me answer again ❤️
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setShowResetPrompt(false)}
                  className="px-10 py-4 bg-gray-100 text-gray-700 font-medium rounded-full shadow hover:bg-gray-200 transition-all"
                >
                  No, I'm happy with my answers 🥰
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}