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
          onClick={onClose} // click outside to close
        >
          {/* Modal content – stop propagation so clicks inside don't close */}
          <motion.div
            initial={{ scale: 0.7, opacity: 0, y: 50 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.7, opacity: 0, y: 50 }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
            className="relative bg-gradient-to-br from-pink-50 to-red-50 p-10 md:p-16 rounded-3xl shadow-2xl max-w-lg w-full text-center border-4 border-white/40 overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-gray-600 hover:text-red-600 text-3xl font-bold"
            >
              ×
            </button>

            {/* Cake + Name */}
            <div className="relative mx-auto w-64 h-80 md:w-80 md:h-96">
              {/* Cake base */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-64 h-32 bg-gradient-to-t from-rose-800 to-rose-600 rounded-b-3xl shadow-xl">
                {/* Icing layer */}
                <div className="absolute -top-6 left-0 right-0 h-12 bg-gradient-to-r from-pink-300 via-white to-pink-300 rounded-t-full shadow-inner" />
              </div>

              {/* Middle layer */}
              <div className="absolute bottom-20 left-1/2 -translate-x-1/2 w-56 h-28 bg-gradient-to-t from-rose-700 to-rose-500 rounded-b-3xl shadow-lg">
                <div className="absolute -top-5 left-0 right-0 h-10 bg-gradient-to-r from-pink-200 via-white to-pink-200 rounded-t-full" />
              </div>

              {/* Top layer */}
              <div className="absolute bottom-40 left-1/2 -translate-x-1/2 w-48 h-24 bg-gradient-to-t from-rose-600 to-rose-400 rounded-b-3xl shadow-md">
                <div className="absolute -top-5 left-0 right-0 h-10 bg-gradient-to-r from-pink-100 via-white to-pink-100 rounded-t-full" />
              </div>

              {/* Name on top (icing style) */}
              <div className="absolute bottom-52 left-1/2 -translate-x-1/2 text-5xl md:text-6xl font-bold text-white drop-shadow-[0_4px_8px_rgba(0,0,0,0.6)] tracking-wide z-10">
                Sadiya
              </div>

              {/* Candles */}
              <div className="absolute bottom-60 left-1/2 -translate-x-1/2 flex gap-6">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="relative w-4 h-16">
                    {/* Candle stick */}
                    <div className="absolute bottom-0 w-full h-12 bg-gradient-to-t from-yellow-800 to-amber-900 rounded-t-sm" />
                    {/* Flame */}
                    <motion.div
                      className="absolute -top-4 left-1/2 -translate-x-1/2 w-6 h-10 bg-gradient-to-t from-yellow-300 via-orange-400 to-red-500 rounded-full blur-sm"
                      animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.9, 1, 0.9],
                      }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        repeatType: "reverse",
                        delay: i * 0.2,
                      }}
                    />
                  </div>
                ))}
              </div>

              {/* Floating hearts around cake */}
              <motion.div
                className="absolute inset-0 pointer-events-none"
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              >
                {[...Array(6)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute text-3xl"
                    style={{
                      top: `${Math.random() * 100}%`,
                      left: `${Math.random() * 100}%`,
                    }}
                    animate={{
                      y: [0, -80, 0],
                      opacity: [0.6, 1, 0.6],
                    }}
                    transition={{
                      duration: 4 + Math.random() * 3,
                      repeat: Infinity,
                      delay: i * 0.5,
                    }}
                  >
                    ❤️
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* Sweet message below cake */}
            <p className="mt-16 text-xl md:text-2xl text-red-700 font-medium italic">
              Happy Birthday, my beautiful Sadiya...  
              This cake is sweet, but not as sweet as you 💕
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}