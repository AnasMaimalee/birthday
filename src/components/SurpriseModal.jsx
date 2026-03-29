// src/components/SurpriseModal.jsx
import { motion, AnimatePresence } from 'framer-motion';

export default function SurpriseModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm px-4"
          onClick={onClose} // click outside → close
        >
          <motion.div
            initial={{ scale: 0.7, opacity: 0, y: 50 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.7, opacity: 0, y: 50 }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
            className="relative bg-gradient-to-br from-pink-50 to-red-50 p-8 md:p-12 rounded-3xl shadow-2xl max-w-md md:max-w-lg w-full text-center border-4 border-white/30 overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-gray-700 hover:text-red-600 text-4xl font-bold z-10"
            >
              ×
            </button>

            {/* Cake Image – centered, with nice frame */}
            <div className="relative mx-auto w-64 h-80 md:w-80 md:h-96 rounded-2xl overflow-hidden shadow-2xl border-8 border-pink-200/80">
              <img
                src="/assets/photos/cake.png"
                alt="Birthday Cake for Sadiya"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Sweet message below the cake */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="mt-10 text-xl md:text-2xl text-red-700 font-medium italic leading-relaxed"
            >
              Happy Birthday, my beautiful Sadiya...  
              This cake is sweet, but nowhere near as sweet as you 💕🎂
            </motion.p>

            {/* Optional floating hearts around the modal */}
            <motion.div
              className="absolute inset-0 pointer-events-none"
              animate={{ rotate: 360 }}
              transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            >
              {[...Array(8)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute text-3xl md:text-4xl"
                  style={{
                    top: `${Math.random() * 100}%`,
                    left: `${Math.random() * 100}%`,
                  }}
                  animate={{
                    y: [0, -100, 0],
                    opacity: [0.5, 1, 0.5],
                    scale: [0.8, 1.2, 0.8],
                  }}
                  transition={{
                    duration: 6 + Math.random() * 4,
                    repeat: Infinity,
                    delay: i * 0.6,
                  }}
                >
                  {['❤️', '💗', '💖'][i % 3]}
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}