import { useState } from 'react';
import { motion } from 'framer-motion';
import FloatingHearts from './components/FloatingHearts';
import PhotoGallery from './components/PhotoGallery';
import VideoSection from './components/VideoSection';
import CountDown from './components/CountDown';
import LoveMessages from './components/LoveMessages';
import MusicPlayer from './components/MusicPlayer';
import Confetti from 'react-confetti';

function App() {
  const [showConfetti, setShowConfetti] = useState(false);
  const herName = "Your Girlfriend's Name"; // Change this!

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-pink-50 via-purple-50 to-red-50 overflow-x-hidden">
      <MusicPlayer />

      <FloatingHearts />

      {showConfetti && <Confetti width={window.innerWidth} height={window.innerHeight} />}
      <CountDown />
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        className="min-h-screen flex flex-col items-center justify-center text-center px-4"
      >
        <h1 className="text-6xl md:text-8xl font-bold text-red-600 mb-6 animate-pulse">
          Happy Birthday ❤️ <span className="text-red">Sadiya</span>
        </h1>
        <p className="text-2xl md:text-4xl text-gray-700 max-w-3xl">
          To the girl who makes every day feel like magic... today is all about YOU 💕
        </p>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setShowConfetti(true)}
          className="mt-10 px-12 py-6 bg-red-500 text-white text-2xl rounded-full shadow-2xl hover:bg-red-600 transition"
        >
          Open Your Surprise 🎁
        </motion.button>
      </motion.section>

      {/* Photo Gallery */}
      <PhotoGallery herName={herName} />

      {/* Videos */}
      <VideoSection />

      {/* Love Messages */}
      <LoveMessages herName={herName} />

      {/* Final Footer */}
      <motion.footer
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="py-20 text-center text-gray-600"
      >
        <p className="text-3xl">Forever yours, with all my love 💞</p>
        <p className="mt-4">Made just for you on {new Date().toDateString()}</p>
      </motion.footer>
    </div>
  );
}

export default App;