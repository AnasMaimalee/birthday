import { motion } from 'framer-motion';

export default function FloatingHearts() {
  const hearts = Array.from({ length: 20 });

  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      {hearts.map((_, i) => (
        <motion.div
          key={i}
          className="absolute text-4xl md:text-6xl"
          initial={{ y: '100vh', x: `${Math.random() * 100}vw`, opacity: 0 }}
          animate={{
            y: '-20vh',
            opacity: [0, 1, 0],
            transition: {
              duration: Math.random() * 15 + 15,
              repeat: Infinity,
              delay: Math.random() * 10,
              ease: "easeOut"
            }
          }}
        >
          {Math.random() > 0.5 ? '❤️' : '💖'}
        </motion.div>
      ))}
    </div>
  );
}