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
            url="/assets/videos/video1.mp4"
            controls={true}
            width="100%"
            height="auto"
            playing={false}             // user clicks play (avoids policy blocks)
            muted={false}               // sound when they play
            loop={false}
            playsinline={true}          // crucial for mobile
            config={{
              file: {
                attributes: {
                  controlsList: 'nodownload', // hide download button
                  disablePictureInPicture: false,
                }
              }
            }}
            onError={(e) => console.error('Video error:', e)} // debug
            style={{ aspectRatio: '16/9' }}
          />
        </div>
      </div>
    </section>
  );
}