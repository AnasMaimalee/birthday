import { useState } from 'react';
import { motion } from 'framer-motion';
import FloatingHearts from './components/FloatingHearts';
import LoveTimeline from './components/LoveTimeline';
import VideoSection from './components/VideoSection';
import CountDown from './components/CountDown';
import FutureLetters from './components/FutureLetters';
import GiftBox from './components/GiftBox';
import LoveMessages from './components/LoveMessages';
import MusicPlayer from './components/MusicPlayer';
import Confetti from 'react-confetti';
import SurpriseModal from './components/SurpriseModal';

function App() {
  const [showConfetti, setShowConfetti] = useState(false);
  const [showSurpriseModal, setShowSurpriseModal] = useState(false);
  const herName = "Sadiya";

  const handleSurpriseClick = () => {
    // Trigger confetti first for dramatic effect
    if (!showConfetti) {
      setShowConfetti(true);
      setTimeout(() => setShowConfetti(false), 6000);
    }

    // Open the cake modal right after
    setShowSurpriseModal(true);
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-pink-50 via-purple-50 to-red-50 overflow-x-hidden">
      {/* Always present elements */}
      <MusicPlayer />
      <FloatingHearts />

      {/* Confetti explodes when surprise is triggered */}
      {showConfetti && (
        <Confetti
          width={window.innerWidth}
          height={window.innerHeight}
          colors={['#ff69b4', '#ff1493', '#ff0000', '#ffd700', '#da70d6', '#ff8c00']}
          numberOfPieces={350}
          gravity={0.12}
          recycle={false}
        />
      )}

      {/* Countdown */}
      <CountDown />

      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.4, ease: "easeOut" }}
        className="min-h-screen flex flex-col items-center justify-center text-center px-6 md:px-12"
      >
        <h1 className="text-6xl md:text-9xl font-extrabold text-red-600 mb-8 animate-pulse drop-shadow-lg">
          Happy Birthday ❤️ <span className="text-red-700">Sadiya</span>
        </h1>
        <p className="text-2xl md:text-4xl text-gray-800 max-w-4xl font-medium leading-relaxed">
          To the girl who turns ordinary moments into magic, who makes my heart race every single day... today, the whole world celebrates YOU 💕
        </p>

        {/* Surprise Button – now opens modal + confetti */}
        <motion.button
          whileHover={{ scale: 1.12, boxShadow: "0 20px 40px rgba(220, 38, 38, 0.4)" }}
          whileTap={{ scale: 0.95 }}
          onClick={handleSurpriseClick}
          className="mt-12 px-16 py-8 bg-gradient-to-r from-red-500 to-pink-500 text-white text-3xl font-bold rounded-full shadow-2xl hover:from-red-600 hover:to-pink-600 transition-all duration-300"
        >
          Open Your Special Surprise 🎂✨
        </motion.button>
      </motion.section>

      {/* Interactive Love Timeline */}
      <LoveTimeline />

      {/* Videos */}
      <VideoSection />

      {/* Future Letters */}
      <FutureLetters />

      {/* Gift Box */}
      <GiftBox />

      {/* Love Messages */}
      <LoveMessages herName={herName} />

      {/* Surprise Modal (cake with name) */}
      <SurpriseModal
        isOpen={showSurpriseModal}
        onClose={() => setShowSurpriseModal(false)}
      />

      {/* Final Footer */}
      <motion.footer
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="py-24 text-center text-gray-700 bg-gradient-to-t from-red-50 to-transparent"
      >
        <p className="text-4xl md:text-5xl font-semibold text-red-600 mb-6">
          Forever yours, in this life and every one after 💞
        </p>
        <p className="text-xl md:text-2xl italic">
          Made with all my love, just for you, on {new Date().toDateString()}
        </p>
        <p className="mt-8 text-lg text-pink-600">
          Scroll up anytime... I'll be waiting right here ❤️
        </p>
      </motion.footer>
    </div>
  );
}

export default App;