import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Confetti from "react-confetti";

import FloatingHearts from "./components/FloatingHearts";
import LoveTimeline from "./components/LoveTimeline";
import VideoSection from "./components/VideoSection";
import CountDown from "./components/CountDown";
import FutureLetters from "./components/FutureLetters";
import GiftBox from "./components/GiftBox";
import LoveMessages from "./components/LoveMessages";
import MusicPlayer from "./components/MusicPlayer";
import SurpriseModal from "./components/SurpriseModal";

function App() {
  const herName = "Sadiya";

  const [showConfetti, setShowConfetti] = useState(false);
  const [showSurpriseModal, setShowSurpriseModal] = useState(false);

  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  // Handle screen resize (for confetti)
  useEffect(() => {
    const resizeHandler = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", resizeHandler);

    return () => window.removeEventListener("resize", resizeHandler);
  }, []);

  const handleSurpriseClick = () => {
    setShowConfetti(true);

    setTimeout(() => {
      setShowConfetti(false);
      setShowSurpriseModal(true);
    }, 1200);
  };

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-gradient-to-b from-pink-50 via-purple-50 to-red-50">

      {/* Background elements */}
      <MusicPlayer />
      <FloatingHearts />

      {/* Confetti */}
      {showConfetti && (
        <Confetti
          width={windowSize.width}
          height={windowSize.height}
          colors={[
            "#ff69b4",
            "#ff1493",
            "#ff0000",
            "#ffd700",
            "#da70d6",
            "#ff8c00",
          ]}
          numberOfPieces={400}
          gravity={0.15}
          recycle={false}
        />
      )}

      {/* Countdown Section */}
      <CountDown />

      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: 120 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.4, ease: "easeOut" }}
        className="min-h-screen flex flex-col items-center justify-center text-center px-6 md:px-12"
      >
        <h1 className="text-6xl md:text-9xl font-extrabold text-red-600 mb-10 drop-shadow-xl animate-pulse">
          Happy Birthday ❤️
          <span className="block text-red-700">{herName}</span>
        </h1>

        <p className="text-2xl md:text-4xl text-gray-800 max-w-4xl font-medium leading-relaxed">
          To the girl who turns ordinary moments into magic,
          who makes my heart race every single day...
          today the whole world celebrates YOU 💕
        </p>

        {/* Surprise Button */}
        <motion.button
          whileHover={{
            scale: 1.12,
            boxShadow: "0 20px 50px rgba(220,38,38,0.4)",
          }}
          whileTap={{ scale: 0.95 }}
          onClick={handleSurpriseClick}
          className="mt-14 px-16 py-8 bg-gradient-to-r from-red-500 to-pink-500 text-white text-3xl font-bold rounded-full shadow-2xl hover:from-red-600 hover:to-pink-600 transition-all duration-300"
        >
          Open Your Special Surprise 🎂✨
        </motion.button>
      </motion.section>

      {/* Love Timeline */}
      <LoveTimeline />

      {/* Video Memories */}
      <VideoSection />

      {/* Future Letters */}
      <FutureLetters />

      {/* Gift Box */}
      <GiftBox />

      {/* Love Messages */}
      <LoveMessages herName={herName} />

      {/* Surprise Modal */}
      <SurpriseModal
        isOpen={showSurpriseModal}
        onClose={() => setShowSurpriseModal(false)}
      />

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.3 }}
        className="py-28 text-center bg-gradient-to-t from-red-100 via-pink-50 to-transparent text-gray-700"
      >
        <p className="text-4xl md:text-6xl font-bold text-red-600 mb-8 leading-relaxed">
          Forever yours,
          <br />
          in this life and every one after 💞
        </p>

        <p className="text-xl md:text-2xl italic text-gray-700">
          Made with all my love, just for you {herName} ❤️
        </p>

        <p className="mt-4 text-lg text-gray-600">
          {new Date().toDateString()}
        </p>

        <p className="mt-10 text-xl text-pink-600 font-medium">
          Scroll up anytime... I'll be waiting right here 💗
        </p>

        <div className="mt-14 flex justify-center">
          <div className="h-1 w-40 bg-gradient-to-r from-pink-400 to-red-500 rounded-full"></div>
        </div>
      </motion.footer>
    </div>
  );
}

export default App;