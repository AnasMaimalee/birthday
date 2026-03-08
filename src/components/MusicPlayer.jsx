import { useState } from 'react';
import ReactPlayer from 'react-player';

export default function MusicPlayer() {
  const [muted, setMuted] = useState(true);

  return (
    <>
      <ReactPlayer
        src="/assets/music/music1.mp3"
        playing={true}
        loop={true}
        muted={muted}
        volume={0.3}
        width={0}
        height={0}
        config={{ file: { forceAudio: true } }}
        onReady={() => console.log('Music: Player is ready!')}
        onPlay={() => console.log('Music: Started playing')}
        onError={(e) => console.error('Music ERROR:', e)}
      />

      <button
        onClick={() => setMuted(!muted)}
        className="fixed bottom-8 right-8 z-50 bg-pink-500 text-white px-6 py-3 rounded-full shadow-xl hover:bg-pink-600 transition text-lg font-medium"
      >
        {muted ? '🔇 Tap to Hear Our Song 💗' : '🔊 Mute'}
      </button>
    </>
  );
}