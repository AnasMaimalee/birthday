// src/components/ConfettiExplosion.jsx
import { useState } from 'react';
import ConfettiExplosion from 'react-confetti-explosion';

export default function ConfettiExplosionWrapper() {
  const [isExploding, setIsExploding] = useState(false);

  // This is just a wrapper — you trigger explosion from parent (App.jsx)
  // But for demo/standalone testing, you can add a button here if needed

  return (
    <>
      {isExploding && (
        <div className="fixed inset-0 pointer-events-none z-50 flex items-center justify-center">
          <ConfettiExplosion
            force={0.8}              // strength of explosion
            duration={3000}           // how long particles fly (ms)
            particleCount={200}       // number of confetti pieces
            width={1600}              // spread width (px)
            colors={['#ff0000', '#ff69b4', '#ffd700', '#00ff00', '#1e90ff']} // romantic colors
            zIndex={9999}
          />
        </div>
      )}
    </>
  );
}