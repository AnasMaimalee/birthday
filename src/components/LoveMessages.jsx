import { motion } from "framer-motion";

export default function LoveMessages({ herName }) {
  const messages = [
    `Masoyiyata ${herName}, tun daga lokacin da kika shigo rayuwata, komai ya canza cikin mafi kyawun hanya.`,
    "Kin mayar da ranakun yau da kullum zuwa abubuwan tunawa masu ban mamaki, kuma kowane lokaci tare da ke yana zama albarka.",
    "Ina son murmushinki, dariyarki, da yadda idanuwanki ke haskawa idan kina farin ciki.",
    "Ina son kananan abubuwa game da ke — yadda kike magana, yadda kike kulawa, da yadda kike sa komai ya zama cikin natsuwa.",
    "Kasancewa tare da ke yana sa duniya ta zama mai laushi, dumi, kuma mai haske.",
    "A cikin kowace farin ciki, kowace kalubale, da kowanne buri, ina son kasancewa a gefenki.",
    "Ba kawai kina daga cikin wadanda nake so ba — ke ce nutsuwata, farin cikina, da gidana.",
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

      {/* Message Cards with Circulating Border */}
      <div className="max-w-4xl mx-auto space-y-10">
        {messages.map((msg, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 80, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.7, delay: index * 0.2 }}
            className="relative group"
          >
            {/* Circulating Border */}
            <div className="absolute -inset-[3px] rounded-3xl overflow-hidden">
              <div 
                className="absolute inset-0 border-[3px] border-transparent 
                           bg-gradient-to-r from-pink-400 via-red-500 to-purple-500 
                           animate-[spin_4s_linear_infinite]"
                style={{
                  maskImage: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                  maskComposite: "xor",
                  WebkitMaskComposite: "xor",
                }}
              />
            </div>

            {/* Card Content */}
            <div className="relative bg-white/70 backdrop-blur-lg p-8 rounded-3xl shadow-xl border border-pink-100">
              <p className="text-xl md:text-2xl text-gray-800 leading-relaxed italic">
                {msg}
              </p>
            </div>
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