"use client";

import { motion } from "framer-motion";

const infoCards = [
  {
    emoji: "📅",
    label: "날짜",
    value: "2026년 4월 20일 (월)",
    bg: "#ffe8a3",
  },
  {
    emoji: "⏰",
    label: "시간",
    value: "오후 7시부터",
    bg: "#b8e8d0",
  },
  {
    emoji: "📍",
    label: "장소",
    value: "서울특별시 광진구\n천호대로 122길 27 301호",
    bg: "#d4b8e8",
  },
  {
    emoji: "👗",
    label: "드레스코드",
    value: "편한 복장 OK!",
    bg: "#ffd4b8",
  },
];

export default function PartyInfo() {
  return (
    <section id="info" className="py-20 px-6">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12" style={{ color: "var(--foreground)" }}>
          ✨ 파티 정보 ✨
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {infoCards.map((card) => (
            <motion.div
              key={card.label}
              className="rounded-3xl p-6 shadow-md"
              style={{ backgroundColor: card.bg }}
              whileHover={{ scale: 1.03, rotate: 1 }}
            >
              <div className="text-4xl mb-3">{card.emoji}</div>
              <div className="text-sm font-bold uppercase tracking-wide mb-1" style={{ color: "var(--foreground)", opacity: 0.6 }}>
                {card.label}
              </div>
              <div className="text-xl font-bold whitespace-pre-line" style={{ color: "var(--foreground)" }}>
                {card.value}
              </div>
            </motion.div>
          ))}
        </div>

        {/* What to bring */}
        <div
          className="mt-12 rounded-3xl p-8 text-center shadow-md"
          style={{ backgroundColor: "#b8d4f0" }}
        >
          <div className="text-4xl mb-4">🎒</div>
          <h3 className="text-2xl font-bold mb-4" style={{ color: "var(--foreground)" }}>가져올 것</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {["🎵 좋은 음악", "😄 좋은 기분"].map(
              (item) => (
                <motion.span
                  key={item}
                  className="px-4 py-2 rounded-full text-lg font-bold"
                  style={{ backgroundColor: "rgba(255,255,255,0.6)", color: "var(--foreground)" }}
                  whileHover={{ scale: 1.1 }}
                >
                  {item}
                </motion.span>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
