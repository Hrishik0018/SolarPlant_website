import { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const LOGO_PATH = '/assets/images/IMG_2441.PNG';

const PARTICLES = Array.from({ length: 20 }, (_, i) => ({
  id: i,
  x: `${Math.random() * 100}%`,
  y: `${Math.random() * 100}%`,
  tx: `${(Math.random() - 0.5) * 300}px`,
  ty: `${(Math.random() - 0.5) * 300}px`,
  delay: `${Math.random() * 2}s`,
  duration: `${3 + Math.random() * 3}s`,
}));

export default function SplashScreen({ onDone }: { onDone: () => void }) {
  const [exiting, setExiting] = useState(false);
  const timerRef = useRef<number>(0);

  useEffect(() => {
    const exitTimer = window.setTimeout(() => setExiting(true), 2600);
    const doneTimer = window.setTimeout(onDone, 3300);
    timerRef.current = doneTimer;
    return () => {
      window.clearTimeout(exitTimer);
      window.clearTimeout(doneTimer);
    };
  }, [onDone]);

  return (
    <AnimatePresence>
      {!exiting && (
        <motion.div
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden bg-white"
        >
          {/* Subtle radial glow */}
          <motion.div
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1.4 }}
            transition={{ duration: 2.5, ease: 'easeOut' }}
            className="absolute inset-0"
            style={{
              background:
                'radial-gradient(ellipse at center, rgba(46,139,87,0.10) 0%, rgba(11,45,91,0.04) 40%, transparent 70%)',
            }}
          />

          {/* Energy particles */}
          {PARTICLES.map((p) => (
            <div
              key={p.id}
              className="splash-particle"
              style={
                {
                  left: p.x,
                  top: p.y,
                  background: p.id % 2 === 0 ? '#2e8b57' : '#0b2d5b',
                  animationDelay: p.delay,
                  animationDuration: p.duration,
                  '--tx': p.tx,
                  '--ty': p.ty,
                } as React.CSSProperties
              }
            />
          ))}

          {/* Logo + text */}
          <div className="relative z-10 flex flex-col items-center">
            {/* Glow ring behind logo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: [0, 0.6, 0.4], scale: [0.5, 1.2, 1] }}
              transition={{ duration: 2, ease: 'easeOut' }}
              className="absolute -z-10 h-44 w-44 rounded-full"
              style={{
                background:
                  'radial-gradient(circle, rgba(46,139,87,0.35) 0%, transparent 70%)',
                filter: 'blur(20px)',
              }}
            />

            {/* Logo image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.7, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="relative"
            >
              <motion.div
                animate={{ filter: ['drop-shadow(0 0 10px rgba(46,139,87,0.3))', 'drop-shadow(0 0 25px rgba(46,139,87,0.6))', 'drop-shadow(0 0 10px rgba(46,139,87,0.3))'] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
              >
                <img
                  src={LOGO_PATH}
                  alt="Anandion Global"
                  className="h-24 w-auto object-contain sm:h-28 md:h-32"
                />
              </motion.div>
            </motion.div>

            {/* Energy line */}
            <motion.div
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: '180px', opacity: 1 }}
              transition={{ delay: 0.8, duration: 1, ease: 'easeOut' }}
              className="energy-line mt-6 h-0.5 rounded-full"
            />

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4, duration: 0.8 }}
              className="mt-4 text-[10px] font-medium uppercase tracking-widest3 text-silver-500 sm:text-xs"
            >
              Powering a Sustainable Future
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
