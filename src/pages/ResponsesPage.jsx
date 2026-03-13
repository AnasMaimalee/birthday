import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function ResponsesPage() {
  const [responses, setResponses] = useState([]);
  const [loading, setLoading] = useState(true);

  const API = "https://area-desire-sponsor-accordingly.trycloudflare.com/api/quiz-responses";

  useEffect(() => {
    fetch(API)
      .then((res) => res.json())
      .then((data) => {
        setResponses(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  return (
    <section className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-red-50 py-20 px-6 md:px-12 overflow-hidden relative">
      {/* Floating romantic background hearts */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-4xl md:text-6xl"
            initial={{ y: "100vh", opacity: 0 }}
            animate={{
              y: "-20vh",
              opacity: [0, 0.7, 0],
            }}
            transition={{
              duration: 12 + Math.random() * 10,
              repeat: Infinity,
              delay: Math.random() * 8,
              ease: "easeOut",
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          >
            {["❤️", "💗", "💖", "✨"][i % 4]}
          </motion.div>
        ))}
      </div>

      {/* Page Title */}
      <motion.h1
        initial={{ opacity: 0, y: -60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="text-5xl md:text-7xl font-extrabold text-center text-red-600 mb-16 tracking-tight drop-shadow-lg"
      >
        Sadiya's Beautiful Dreams 💌✨
      </motion.h1>

      {loading && (
        <div className="flex flex-col items-center justify-center min-h-[50vh]">
          <motion.div
            animate={{ scale: [1, 1.3, 1] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="text-7xl mb-4"
          >
            💗
          </motion.div>
          <p className="text-2xl text-gray-600 font-medium">Loading her sweet answers...</p>
        </div>
      )}

      {!loading && responses.length === 0 && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center py-20"
        >
          <div className="text-8xl mb-6">🥹💕</div>
          <p className="text-3xl font-medium text-gray-700">
            No answers yet... but I know she'll share her heart soon ❤️
          </p>
          <p className="text-lg text-gray-500 mt-4">
            Check back after she plays the quiz
          </p>
        </motion.div>
      )}

      {!loading && responses.length > 0 && (
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {responses.map((r, i) => (
            <motion.div
              key={r.id || i}
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: i * 0.15, ease: "easeOut" }}
              whileHover={{ scale: 1.03, boxShadow: "0 25px 50px rgba(220, 38, 38, 0.15)" }}
              className="bg-white/70 backdrop-blur-xl p-8 rounded-3xl shadow-2xl border border-pink-200/60 hover:border-pink-300 transition-all duration-300"
            >
              {/* Header */}
              <div className="flex items-center justify-between mb-8 pb-4 border-b border-pink-100">
                <h3 className="text-2xl md:text-3xl font-bold text-red-600">
                  Dream #{i + 1}
                </h3>
                <span className="text-sm text-gray-500 font-medium">
                  {new Date(r.created_at).toLocaleString([], {
                    month: "short",
                    day: "numeric",
                    year: "numeric",
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </span>
              </div>

              {/* Answers Grid */}
              <div className="grid grid-cols-1 gap-6 text-gray-800">
                <div className="flex items-start gap-4">
                  <span className="text-3xl flex-shrink-0">💍</span>
                  <div className="flex-1">
                    <p className="font-semibold text-pink-700 text-lg">Wedding Day:</p>
                    <p className="text-base">{r.wedding_day || "Not answered"}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <span className="text-3xl flex-shrink-0">🍽️</span>
                  <div className="flex-1">
                    <p className="font-semibold text-pink-700 text-lg">Romantic Dinner Night:</p>
                    <p className="text-base">{r.dinner_day || "Not answered"}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <span className="text-3xl flex-shrink-0">🍲</span>
                  <div className="flex-1">
                    <p className="font-semibold text-pink-700 text-lg">Favorite Food to Cook:</p>
                    <p className="text-base">{r.favorite_food || "Not answered"}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <span className="text-3xl flex-shrink-0">👔</span>
                  <div className="flex-1">
                    <p className="font-semibold text-pink-700 text-lg">Outfit When We Meet:</p>
                    <p className="text-base">{r.dress_style || "Not answered"}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <span className="text-3xl flex-shrink-0">🎨</span>
                  <div className="flex-1">
                    <p className="font-semibold text-pink-700 text-lg">Favorite Color:</p>
                    <p className="text-base">{r.favorite_color || "Not answered"}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <span className="text-3xl flex-shrink-0">👶</span>
                  <div className="flex-1">
                    <p className="font-semibold text-pink-700 text-lg">Number of Kids:</p>
                    <p className="text-base">{r.kids ?? "Not answered"}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <span className="text-3xl flex-shrink-0">🌙</span>
                  <div className="flex-1">
                    <p className="font-semibold text-pink-700 text-lg">Weekend Activity:</p>
                    <p className="text-base">{r.weekend_activity || "Not answered"}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <span className="text-3xl flex-shrink-0">🏰</span>
                  <div className="flex-1">
                    <p className="font-semibold text-pink-700 text-lg">First Kano Visit:</p>
                    <p className="text-base">{r.kano_visit || "Not answered"}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <span className="text-3xl flex-shrink-0">🌳</span>
                  <div className="flex-1">
                    <p className="font-semibold text-pink-700 text-lg">Romantic Park/Quiet Place:</p>
                    <p className="text-base">{r.park_visit || "Not answered"}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <span className="text-3xl flex-shrink-0">🌴</span>
                  <div className="flex-1">
                    <p className="font-semibold text-pink-700 text-lg">Honeymoon Destination:</p>
                    <p className="text-base">{r.honeymoon || "Not answered"}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <span className="text-3xl flex-shrink-0">🎉</span>
                  <div className="flex-1">
                    <p className="font-semibold text-pink-700 text-lg">First Anniversary Trip:</p>
                    <p className="text-base">{r.anniversary_trip || "Not answered"}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <span className="text-3xl flex-shrink-0">🏡</span>
                  <div className="flex-1">
                    <p className="font-semibold text-pink-700 text-lg">Type of Home:</p>
                    <p className="text-base">{r.house_style || "Not answered"}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <span className="text-3xl flex-shrink-0">🌙</span>
                  <div className="flex-1">
                    <p className="font-semibold text-pink-700 text-lg">Perfect Date Night:</p>
                    <p className="text-base">{r.date_night || "Not answered"}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      )}
    </section>
  );
}