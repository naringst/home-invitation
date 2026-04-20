"use client";

import { motion } from "framer-motion";

const LATITUDE = process.env.NEXT_PUBLIC_LATITUDE || "";
const LONGITUDE = process.env.NEXT_PUBLIC_LONGITUDE || "";
const ADDRESS = process.env.NEXT_PUBLIC_ADDRESS || "";

export default function MapSection() {
  const kakaoMapUrl = `https://map.kakao.com/link/map/${encodeURIComponent(ADDRESS)},${LATITUDE},${LONGITUDE}`;
  const naverMapUrl = `https://map.naver.com/v5/search/${encodeURIComponent(ADDRESS)}`;
  const googleMapUrl = `https://www.google.com/maps/search/?api=1&query=${LATITUDE},${LONGITUDE}`;

  return (
    <section className="py-20 px-6">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12" style={{ color: "var(--foreground)" }}>
          📍 오시는 길 📍
        </h2>

        {/* Map embed */}
        <div
          className="rounded-3xl overflow-hidden shadow-lg mb-8"
          style={{ border: "4px solid var(--pink)" }}
        >
          <iframe
            src={`https://www.google.com/maps?q=${LATITUDE},${LONGITUDE}&z=16&output=embed`}
            width="100%"
            height="350"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="파티 장소 지도"
          />
        </div>

        {/* Address card */}
        <div
          className="rounded-3xl p-6 mb-6 text-center shadow-md"
          style={{ backgroundColor: "var(--peach)" }}
        >
          <p className="text-xl font-bold mb-2" style={{ color: "var(--foreground)" }}>🏠 {ADDRESS}</p>
          <p style={{ color: "var(--foreground)", opacity: 0.6 }}>현관 비밀번호는 따로 알려드릴게요!</p>
        </div>

        {/* Map app links */}
        <div className="flex flex-wrap justify-center gap-3">
          {[
            { label: "카카오맵", url: kakaoMapUrl, bg: "var(--yellow)" },
            { label: "네이버지도", url: naverMapUrl, bg: "var(--mint)" },
            { label: "구글맵", url: googleMapUrl, bg: "var(--lavender)" },
          ].map((app) => (
            <motion.a
              key={app.label}
              href={app.url}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-full text-lg font-bold shadow-md"
              style={{ backgroundColor: app.bg, color: "var(--foreground)" }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {app.label} 열기 →
            </motion.a>
          ))}
        </div>

        {/* Transportation tips */}
        <div
          className="mt-8 rounded-3xl p-6 shadow-md"
          style={{ backgroundColor: "rgba(255, 232, 163, 0.5)" }}
        >
          <h3 className="text-xl font-bold mb-3 text-center" style={{ color: "var(--foreground)" }}>🚗 교통 안내</h3>
          <ul className="space-y-2 text-lg" style={{ color: "var(--foreground)" }}>
            <li>🚇 지하철: 광나루역 또는 군자역 이용</li>
            <li>🚌 버스: 천호대로 인근 정류장 하차</li>
            <li>🅿️ 주차: 근처 공영주차장 이용</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
