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
    <section className="min-h-screen bg-gradient-to-br from-pink-50 via-red-50 to-purple-50 py-20 px-6">

      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-5xl font-bold text-center text-red-600 mb-16"
      >
        Quiz Responses 💌
      </motion.h1>

      {loading && (
        <p className="text-center text-xl text-gray-600">
          Loading responses...
        </p>
      )}

      {!loading && responses.length === 0 && (
        <p className="text-center text-xl text-gray-600">
          No responses yet ❤️
        </p>
      )}

      {!loading && responses.length > 0 && (
        <div className="max-w-6xl mx-auto space-y-10">

          {responses.map((r, i) => (
            <motion.div
              key={r.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-white p-8 rounded-3xl shadow-xl border border-pink-100"
            >

              <h3 className="text-2xl font-bold text-pink-600 mb-6">
                Response #{i + 1}
              </h3>

              <div className="grid md:grid-cols-2 gap-6 text-lg">

                <p><b>Wedding Day:</b> {r.wedding_day}</p>
                <p><b>Dinner Day:</b> {r.dinner_day}</p>
                <p><b>Favorite Food:</b> {r.favorite_food}</p>
                <p><b>Dress Style:</b> {r.dress_style}</p>
                <p><b>Kids:</b> {r.kids}</p>
                <p><b>Weekend Activity:</b> {r.weekend_activity}</p>
                <p><b>Honeymoon:</b> {r.honeymoon}</p>
                <p><b>Anniversary Trip:</b> {r.anniversary_trip}</p>

              </div>

              <p className="text-sm text-gray-500 mt-6">
                {new Date(r.created_at).toLocaleString()}
              </p>

            </motion.div>
          ))}

        </div>
      )}

    </section>
  );
}