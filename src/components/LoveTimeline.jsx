import { motion } from 'framer-motion';

const milestones = [
  {
    date: "The Day We First Connected",
    desc: "My friend linked us, and the moment I saw your photo... time stopped. Your smile lit up my screen like pure sunshine, your eyes held a kindness that pulled me in instantly. Even from that first picture, I knew you were someone extraordinarily special. ✨❤️",
    img: "/assets/photos/photo1.jpeg"
  },
  {
    date: "Our First Long Chat",
    desc: "Words started flowing endlessly... your messages were so warm, so thoughtful. Every time a new photo popped up, I was stunned again by how breathtakingly beautiful you are — your soft features, that gentle glow, your effortless charm. You made my days brighter without even trying.",
    img: "/assets/photos/photo2.jpeg"
  },
  {
    date: "When You Sent That Selfie",
    desc: "One random selfie changed everything. Your eyes sparkled with such innocence and depth, your smile felt like it was just for me. You're so naturally gorgeous — delicate yet powerful, quiet yet magnetic. I saved it and stared longer than I should admit. 🥹",
    img: "/assets/photos/photo3.jpeg"
  },
  {
    date: "Late-Night Talks",
    desc: "We stayed up talking about dreams, fears, little things... and every photo you shared made my heart race. Your beauty isn't just in your face — it's in your soul shining through every picture. Graceful, radiant, and so perfectly you. I fell harder with every message.",
    img: "/assets/photos/photo4.jpeg"
  },
  {
    date: "Your Voice Notes",
    desc: "Hearing your voice for the first time felt like magic. And paired with your photos — that soft laugh, those expressive eyes — you're even more mesmerizing than I imagined. Your beauty is timeless, gentle, and absolutely captivating.",
    img: "/assets/photos/photo5.jpeg"
  },
  {
    date: "When You Shared Your Favorite Picture",
    desc: "You sent that one photo where the light caught your face just right... I couldn't breathe. Your elegance, your warmth, the way your smile lights up everything around it — you're the definition of breathtaking. Every detail of you feels like art.",
    img: "/assets/photos/photo6.jpeg"
  },
  {
    date: "Every Time You Message Me",
    desc: "Your texts arrive and my heart jumps. Even without seeing you live, your photos already feel like home — your eyes full of kindness, your beauty so pure and striking. You're the most gorgeous person I've ever known, and I fall for you more every day.",
    img: "/assets/photos/photo7.jpeg"
  },
  {
    date: "Today – Your Birthday",
    desc: "Happy Birthday, my stunning Sadiya. From the very first photo to every one since, you've taken my breath away. Your beauty — inside and out — grows more enchanting with every shared moment. Even across the distance, you feel so close, so real, so irreplaceable. I love you more than words can ever say. Here's to the day we finally meet in person and I get to tell you this while looking into those beautiful eyes. ❤️🎂✨",
    img: "/assets/photos/photo8.jpeg"
  }
];

export default function LoveTimeline() {
  return (
    <section className="py-24 px-6 bg-gradient-to-br from-purple-50 to-pink-50">
      <h2 className="text-5xl md:text-7xl font-extrabold text-center text-red-600 mb-16 tracking-wide animate-pulse">
        Our Beautiful Online Love Story 💫
      </h2>
      <div className="max-w-5xl mx-auto space-y-20 md:space-y-24">
        {milestones.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: index % 2 === 0 ? -120 : 120 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.9, delay: index * 0.25, ease: "easeOut" }}
            className={`flex flex-col md:flex-row items-center gap-8 md:gap-12 ${
              index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
            }`}
          >
            {item.img && (
              <motion.div
                className="w-72 h-72 md:w-80 md:h-80 flex-shrink-0 rounded-3xl overflow-hidden shadow-2xl border-4 border-pink-200 hover:border-pink-400 transition-all duration-500"
                whileHover={{ scale: 1.05, rotate: 2 }}
              >
                <img
                  src={item.img}
                  alt={item.date}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                />
              </motion.div>
            )}

            <motion.div
              className="flex-1 bg-white/85 backdrop-blur-lg p-8 md:p-10 rounded-3xl shadow-xl border border-pink-100 hover:shadow-2xl transition-shadow duration-500"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.15 }}
            >
              <h3 className="text-3xl md:text-4xl font-bold text-red-600 mb-6 tracking-tight">
                {item.date}
              </h3>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed font-light">
                {item.desc}
              </p>
            </motion.div>
          </motion.div>
        ))}
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 1 }}
        className="text-center mt-20 text-2xl md:text-3xl italic text-gray-700 font-medium"
      >
        Distance can't dim your light, Sadiya.  
        Every photo, every word, every heartbeat brings me closer to you.  
        I can't wait for the day I finally see that beauty in person.  
        Until then — and forever — you're my everything. 🥹💞
      </motion.p>
    </section>
  );
}