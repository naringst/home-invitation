"use client";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="py-16 px-6 text-center">
      <div className="max-w-md mx-auto">
        <motion.div
          className="text-5xl mb-6"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          💖
        </motion.div>

        <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: "var(--foreground)" }}>
          꼭 와줘!
        </h2>
        <p className="text-xl mb-8" style={{ color: "var(--foreground)", opacity: 0.6 }}>
          너 없으면 파티 시작 안 해 😤
        </p>

        <div
          className="rounded-3xl p-6 shadow-lg"
          style={{ backgroundColor: "var(--pink)" }}
        >
          <p className="text-white text-lg font-bold mb-3">
            참석 여부를 알려주세요!
          </p>
          <div className="flex justify-center gap-4">
            <motion.button
              className="bg-white px-6 py-3 rounded-full font-bold text-lg shadow-md"
              style={{ color: "var(--foreground)" }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                if (typeof window !== "undefined") {
                  window.open("sms:?body=나 갈게! 🎉", "_blank");
                }
              }}
            >
              갈게! 🙋‍♀️
            </motion.button>
            <motion.button
              className="px-6 py-3 rounded-full font-bold text-lg text-white"
              style={{ backgroundColor: "rgba(255,255,255,0.3)" }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                if (typeof window !== "undefined") {
                  window.open("sms:?body=미안 못 갈 것 같아 😢", "_blank");
                }
              }}
            >
              못 가... 😢
            </motion.button>
          </div>
        </div>

        <p className="mt-12 text-sm" style={{ color: "var(--foreground)", opacity: 0.4 }}>
          Made with 💕
        </p>
      </div>
    </footer>
  );
}
