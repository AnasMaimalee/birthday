import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ReactPlayer from 'react-player';

const videos = [
  {
    url: "/assets/videos/video1.mp4",
    title: "Our First Sweet Message",
    description: "The moment I knew you were the one... ❤️",
  },
  {
    url: "/assets/videos/video2.mp4",
    title: "Your Smile That Stops Time",
    description: "Every time I watch this, my heart races all over again.",
  },

];

export default function VideoSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % videos.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + videos.length) % videos.length);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <section className="py-24 px-6 bg-gradient-to-br from-pink-50 to-red-50">
      <h2 className="text-2xl md:text-6xl font-extrabold text-center text-red-600 mb-16 tracking-tight">
        Videos That Make My Heart Race ❤️ 🎥
      </h2>

      <div className="max-w-5xl mx-auto relative">
        {/* Carousel Container */}
        <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-pink-200 bg-black/5">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="w-full"
            >
              <ReactPlayer
                src={videos[currentIndex].url}
                controls={true}
                width="100%"
                height="auto"
                playing={false} // don't auto-play – user clicks
                muted={false}
                loop={false}
                playsinline={true}
                config={{
                  file: {
                    attributes: { controlsList: 'nodownload' },
                  },
                }}
                style={{ aspectRatio: '16/9' }}
              />
            </motion.div>
          </AnimatePresence>

          {/* Overlay Title & Description */}
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6 text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-2">
              {videos[currentIndex].title}
            </h3>
            <p className="text-base md:text-lg opacity-90">
              {videos[currentIndex].description}
            </p>
          </div>
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/3 -translate-y-1/2 bg-white/30 hover:bg-white/50 text-white p-4 rounded-full backdrop-blur-sm transition-all duration-300 shadow-lg hover:scale-110 z-10"
          aria-label="Previous video"
        >
          ←
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/3 -translate-y-1/2 bg-white/30 hover:bg-white/50 text-white p-4 rounded-full backdrop-blur-sm transition-all duration-300 shadow-lg hover:scale-110 z-10"
          aria-label="Next video"
        >
          →
        </button>

        {/* Dots Navigation */}
        <div className="flex justify-center mt-6 gap-3">
          {videos.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                currentIndex === index
                  ? 'bg-red-600 scale-125'
                  : 'bg-pink-300 hover:bg-pink-400'
              }`}
              aria-label={`Go to video ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}