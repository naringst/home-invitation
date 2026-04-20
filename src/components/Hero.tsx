"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-6">
      {/* Floating emojis background */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
        {["🎈", "🎉", "🧁", "🍰", "🎂", "🎀", "🎁", "✨", "💖", "🌸"].map((emoji, i) => (
          <span
            key={i}
            className="absolute text-2xl md:text-3xl animate-float"
            style={{
              left: `${10 + i * 9}%`,
              top: `${20 + (i % 3) * 25}%`,
              animationDelay: `${i * 0.4}s`,
              animationDuration: `${3 + (i % 3)}s`,
            }}
          >
            {emoji}
          </span>
        ))}
      </div>

      {/* Main content */}
      <div className="relative z-10 text-center">
        <motion.div
          className="text-6xl md:text-8xl mb-6"
          animate={{ rotate: [0, -5, 5, -5, 0] }}
          transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
        >
          🎉
        </motion.div>

        <h1 className="text-4xl md:text-6xl font-bold mb-4" style={{ color: "var(--foreground)" }}>
          우리 집에서
          <br />
          <span style={{ color: "var(--pink)" }}>파티하자!</span>
        </h1>

        <p className="text-xl md:text-2xl mb-8" style={{ color: "var(--foreground)", opacity: 0.7 }}>
          소중한 당신을 초대합니다 💕
        </p>

        <motion.a
          href="#info"
          className="inline-block px-8 py-4 rounded-full text-xl font-bold text-white shadow-lg"
          style={{ backgroundColor: "var(--pink)" }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          초대장 보기 ↓
        </motion.a>
      </div>

      {/* Bottom wave decoration */}
      <div className="absolute bottom-0 left-0 w-full">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0 60C240 120 480 0 720 60C960 120 1200 0 1440 60V120H0V60Z"
            fill="#ffb5c2"
            fillOpacity="0.3"
          />
        </svg>
      </div>
    </section>
  );
}
