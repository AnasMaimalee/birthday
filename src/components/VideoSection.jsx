import ReactPlayer from 'react-player';

export default function VideoSection() {
  return (
    <section className="py-24 px-6 bg-gradient-to-br from-pink-50 to-red-50">
      <h2 className="text-5xl md:text-6xl font-extrabold text-center text-red-600 mb-16 tracking-tight">
        This Video Makes My Heart Race ❤️ 🎥
      </h2>
      <div className="max-w-5xl mx-auto">
        <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-pink-200">
          <ReactPlayer
            src="/assets/videos/video1.mp4"
            controls={true}
            width="100%"
            height="auto"
            playing={false}
            muted={false}
            loop={false}
            playsinline={true}
            config={{
              file: {
                attributes: { controlsList: 'nodownload' }
              }
            }}
            onReady={() => console.log('Video: Player ready')}
            onPlay={() => console.log('Video: User played')}
            onError={(e) => console.error('Video ERROR:', e)}
            style={{ aspectRatio: '16/9' }}
          />
        </div>
      </div>
    </section>
  );
}