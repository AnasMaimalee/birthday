import { motion } from 'framer-motion';

const milestones = [
  {
    date: "Ranar Da Muka Fara Haduwa",
    desc: "Abokina Yaya Buhari ne ya hada mu, kuma daga lokacin da na ga hotonki... lokaci ya tsaya cak. Murmushinki ya haskaka wayata kamar hasken rana, idanunki suna dauke da wani irin kirki da ya jawo ni nan take. Tun daga wannan hoton na farko, na san kina da matukar muhimmanci a rayuwata. ✨❤️",
    img: "/assets/photos/photo1.jpeg"
  },
  {
    date: "Hirar Mu Ta Farko Mai Tsawo",
    desc: "Magana ta fara gudana ba tare da tsayawa ba... sakonninki suna da dumi da kulawa sosai. Duk lokacin da wani sabon hoto ya bayyana, nakan sake mamakin yadda kike da matukar kyau — kyawunki na halitta, nutsuwarki, da saukin halinki. Kina sanya ranata ta yi haske ba tare da kin yi kokari ba.",
    img: "/assets/photos/photo2.jpeg"
  },
  {
    date: "Lokacin Da Kika Aika Hotonki Da Riga Baki",
    desc: "Wani hoton selfie daya ya canza komai. Idanunki suna kyalli da tsabta da zurfi, murmushinki kamar nawa ne ni kadai. Kina da kyau na musamman — mai sauki amma mai karfi, shiru amma mai jan hankali. Na adana hoton kuma na dade ina kallonsa fiye da yadda ya kamata. 🥹",
    img: "/assets/photos/photo3.jpeg"
  },
  {
    date: "Hirarrakin Dare",
    desc: "Muna zama muna hira har dare — game da buri, tsoro, da kananan abubuwa... kuma duk hoton da kika turo yana kara sa zuciyata bugawa da sauri. Kyawunki ba a fuska kadai yake ba — yana fitowa daga zuciyarki cikin kowane hoto. Kina da kyau, kina haske, kuma kina da kamala a yadda kike.",
    img: "/assets/photos/photo4.jpeg"
  },
  {
    date: "Muryarki Ta Farko",
    desc: "Jin muryarki a karo na farko kamar sihiri ne. Idan aka hada da hotunanki — dariyarki mai laushi da idanunki masu magana — kin fi yadda na taba tunani kyau. Kyawunki mai nutsuwa ne kuma mai jan hankali sosai.",
    img: "/assets/photos/photo5.jpeg"
  },
  {
    date: "Lokacin Da Kika Turo Hotonki Da Kafi So",
    desc: "Kin turo wannan hoton da haske ya sauka a fuskar ki daidai... na kasa numfashi. Kyawunki, dumin zuciyarki, da yadda murmushinki ke haskaka komai — kina da matukar kyau sosai. Kowane bangare na ke kamar fasaha ne.",
    img: "/assets/photos/photo6.jpeg"
  },
  {
    date: "Kowanne Lokaci Da Kike Turo Sako",
    desc: "Sakonninki suna zuwa kuma zuciyata tana tsalle. Ko ba tare da na gan ki kai tsaye ba, hotunanki sun riga sun zama gida a zuciyata — idanunki cike da alheri, kyawunki mai tsabta. Ke ce mafi kyawun mutum da na taba sani, kuma kullum ina kara sonki.",
    img: "/assets/photos/photo7.jpeg"
  },
  {
    date: "Yau – Ranar Haihuwarki",
    desc: "Barka da ranar haihuwa, kyakkyawar Sweetheart ta. Daga hoton farko zuwa kowanne da ya biyo baya, kina daukar min numfashi. Kyawunki — na waje da na ciki — yana kara burgewa da kowanne lokaci. Ko da muna nesa, kina kusa da zuciyata sosai. Ina sonki fiye da yadda kalmomi za su iya bayyana. Ina fatan ranar da za mu hadu fuska da fuska, in fada miki wannan ina kallon wadannan kyawawan idanunki. ❤️🎂✨",
    img: "/assets/photos/photo8.jpeg"
  }
];

export default function LoveTimeline() {
  return (
    <section className="py-24 px-6 bg-gradient-to-br from-purple-50 to-pink-50">
      <h2 className="text-2xl md:text-7xl font-extrabold text-center text-red-600 mb-16 tracking-wide animate-pulse">
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
                className="w-72 h-72 md:w-80 md:h-80 flex-shrink-0 rounded-3xl overflow-hidden shadow-2xl border-4 border-pink-700 hover:border-pink-400 transition-all duration-500"
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
  className="relative flex-1 p-[3px] rounded-3xl overflow-hidden"
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, delay: index * 0.15 }}
>
  {/* Animated Border */}
  <motion.div
    className="absolute inset-0 rounded-3xl"
    style={{
      background:
        "conic-gradient(from 0deg, #ff0080, #ff8c00, #ffd700, #00ffea, #8a2be2, #ff0080)",
    }}
    animate={{ rotate: 360 }}
    transition={{
      repeat: Infinity,
      duration: 6,
      ease: "linear",
    }}
  />

  {/* Content */}
  <div className="relative bg-white/90 backdrop-blur-lg p-8 md:p-10 rounded-3xl shadow-xl">
    <h3 className="text-3xl md:text-4xl font-bold text-red-600 mb-6 tracking-tight">
      {item.date}
    </h3>

    <p className="text-lg md:text-xl text-gray-800 leading-relaxed font-light">
      {item.desc}
    </p>
  </div>
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
        Ko da muna nesa, haskenki baya dusashewa, Sweetheart Dita.  
        Kowane hoto, kowace kalma, kowane bugun zuciyata yana kara kusantar da ni gare ki.  
        Ina marmarin ranar da zan gan ki a zahiri, in shaida wannan kyawunki da idona.  
        Har zuwa lokacin — da har abada — ke ce rayuwata da komai na 🥹💞
      </motion.p>
    </section>
  );
}

