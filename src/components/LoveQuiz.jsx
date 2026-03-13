import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { quizData } from "../data/quizData";

export default function LoveQuiz() {
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState({});
  const [finished, setFinished] = useState(false);
  const [loading, setLoading] = useState(false);

  const question = quizData[current];

  const handleAnswer = (value) => {
    setAnswers({
      ...answers,
      [question.field]: value,
    });
  };

  const next = () => {
    if (current < quizData.length - 1) {
      setCurrent(current + 1);
    }
  };

  const back = () => {
    if (current > 0) {
      setCurrent(current - 1);
    }
  };

  const submitQuiz = async () => {
    try {
      setLoading(true);

      const res = await fetch(
        "https://area-desire-sponsor-accordingly.trycloudflare.com/api/quiz-response",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(answers),
        }
      );

      if (res.ok) {
        setFinished(true);
      }
    } catch (err) {
      console.error(err);
      alert("Something went wrong sending your answers 💔");
    }

    setLoading(false);
  };

  if (finished) {
    return (
      <div className="py-32 text-center">
        <h2 className="text-5xl font-bold text-pink-600 mb-6">
          Thank You ❤️
        </h2>

        <p className="text-2xl text-gray-700 max-w-xl mx-auto">
          Your answers have been sent.  
          Every dream you shared brings us closer to our future together.
        </p>
      </div>
    );
  }

  return (
    <section className="py-24 px-6 bg-gradient-to-br from-pink-50 via-red-50 to-purple-50">

      <div className="max-w-2xl mx-auto">

        <h2 className="text-5xl font-bold text-center text-red-600 mb-12">
          Our Future Together 💍
        </h2>

        {/* Progress */}
        <div className="w-full bg-white rounded-full h-3 mb-10 shadow">
          <div
            className="bg-pink-500 h-3 rounded-full transition-all duration-500"
            style={{
              width: `${((current + 1) / quizData.length) * 100}%`,
            }}
          />
        </div>

        <AnimatePresence mode="wait">

          <motion.div
            key={current}
            initial={{ opacity: 0, x: 120 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -120 }}
            transition={{ duration: 0.5 }}
            className="bg-white p-10 rounded-3xl shadow-xl border border-pink-100"
          >

            <h3 className="text-2xl font-semibold text-gray-800 mb-8">
              {question.question}
            </h3>

            {/* OPTIONS */}
            {question.type === "choice" && (
              <div className="space-y-4">

                {question.options.map((opt, i) => (
                  <button
                    key={i}
                    onClick={() => handleAnswer(opt)}
                    className={`w-full p-4 rounded-xl border transition
                    ${
                      answers[question.field] === opt
                        ? "bg-pink-500 text-white"
                        : "bg-pink-50 hover:bg-pink-100"
                    }`}
                  >
                    {opt}
                  </button>
                ))}

              </div>
            )}

            {/* NUMBER INPUT */}
            {question.type === "number" && (
              <input
                type="number"
                placeholder={question.placeholder}
                value={answers[question.field] || ""}
                onChange={(e) => handleAnswer(e.target.value)}
                className="w-full p-4 border rounded-xl"
              />
            )}

            {/* NAVIGATION */}
            <div className="flex justify-between mt-10">

              <button
                onClick={back}
                disabled={current === 0}
                className="px-6 py-3 rounded-full bg-gray-200 hover:bg-gray-300"
              >
                ← Back
              </button>

              {current === quizData.length - 1 ? (
                <button
                  onClick={submitQuiz}
                  disabled={loading}
                  className="px-8 py-3 rounded-full bg-pink-500 text-white hover:bg-pink-600"
                >
                  {loading ? "Sending..." : "Submit ❤️"}
                </button>
              ) : (
                <button
                  onClick={next}
                  className="px-6 py-3 rounded-full bg-pink-500 text-white hover:bg-pink-600"
                >
                  Next →
                </button>
              )}

            </div>

          </motion.div>

        </AnimatePresence>

      </div>

    </section>
  );
}