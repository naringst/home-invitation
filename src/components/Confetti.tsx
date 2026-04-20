"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const EMOJIS = ["🎀", "⭐", "💖", "🌸", "✨", "🎈"];

interface Particle {
  id: number;
  x: number;
  emoji: string;
}

export default function Confetti() {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setParticles(
        Array.from({ length: 25 }, (_, i) => ({
          id: i,
          x: Math.random() * 100,
          emoji: EMOJIS[Math.floor(Math.random() * EMOJIS.length)],
        }))
      );
    }, 500);

    const hideTimer = setTimeout(() => setParticles([]), 5000);

    return () => {
      clearTimeout(timer);
      clearTimeout(hideTimer);
    };
  }, []);

  return (
    <AnimatePresence>
      {particles.length > 0 && (
        <div className="fixed inset-0 pointer-events-none" style={{ zIndex: 50 }}>
          {particles.map((p) => (
            <motion.div
              key={p.id}
              className="absolute text-xl"
              style={{ left: `${p.x}%` }}
              initial={{ y: -20, opacity: 1 }}
              animate={{
                y: "100vh",
                opacity: [1, 1, 0],
                rotate: 720,
              }}
              exit={{ opacity: 0 }}
              transition={{
                duration: 3 + Math.random() * 2,
                ease: "easeIn",
              }}
            >
              {p.emoji}
            </motion.div>
          ))}
        </div>
      )}
    </AnimatePresence>
  );
}
