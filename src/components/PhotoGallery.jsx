import { motion } from 'framer-motion';

// Add your photo paths here
const photos = [
  { src: '/assets/photos/photo1.jpeg', caption: 'Our first smile together 💕' },
  { src: '/assets/photos/photo2.jpeg', caption: 'Our first smile together 💕' },
  { src: '/assets/photos/photo3.jpeg', caption: 'Our first smile together 💕' },
  { src: '/assets/photos/photo4.jpeg', caption: 'Our first smile together 💕' },
  { src: '/assets/photos/photo5.jpeg', caption: 'Our first smile together 💕' },
  { src: '/assets/photos/photo6.jpeg', caption: 'Our first smile together 💕' },
  { src: '/assets/photos/photo7.jpeg', caption: 'Our first smile together 💕' },
  { src: '/assets/photos/photo8.jpeg', caption: 'Our first smile together 💕' },

  // Add 20+ more
];

export default function PhotoGallery({ herName }) {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="py-20 px-4"
    >
      <h2 className="text-5xl font-bold text-center text-red-600 mb-12">
        Moments with my Sadiya  📸
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
        {photos.map((photo, i) => (
          <motion.div
            key={i}
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ delay: i * 0.1 }}
            className="overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition"
          >
            <img src={photo.src} alt="" className="w-full h-64 object-cover hover:scale-110 transition duration-500" />
            <p className="p-4 text-center bg-white/70">{photo.caption}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}