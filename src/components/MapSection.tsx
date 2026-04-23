"use client";

import { motion } from "framer-motion";

// 1차: 장인석 닭한마리
const FIRST_LAT = "37.552911";
const FIRST_LNG = "127.090306";
const FIRST_NAME = "장인석 닭한마리";

// 2차: 우리집
const SECOND_LAT = process.env.NEXT_PUBLIC_LATITUDE || "";
const SECOND_LNG = process.env.NEXT_PUBLIC_LONGITUDE || "";
const SECOND_ADDRESS = process.env.NEXT_PUBLIC_ADDRESS || "";

export default function MapSection() {
  // 1차 지도 링크
  const firstKakaoUrl = `https://map.kakao.com/link/map/${encodeURIComponent(FIRST_NAME)},${FIRST_LAT},${FIRST_LNG}`;
  const firstNaverUrl = `https://map.naver.com/v5/search/${encodeURIComponent(FIRST_NAME)}`;
  const firstGoogleUrl = `https://www.google.com/maps/search/?api=1&query=${FIRST_LAT},${FIRST_LNG}`;

  // 2차 지도 링크
  const secondKakaoUrl = `https://map.kakao.com/link/map/${encodeURIComponent(SECOND_ADDRESS)},${SECOND_LAT},${SECOND_LNG}`;
  const secondNaverUrl = `https://map.naver.com/v5/search/${encodeURIComponent(SECOND_ADDRESS)}`;
  const secondGoogleUrl = `https://www.google.com/maps/search/?api=1&query=${SECOND_LAT},${SECOND_LNG}`;

  return (
    <section className="py-20 px-6">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12" style={{ color: "var(--foreground)" }}>
          📍 오시는 길 📍
        </h2>

        {/* 1차: 장인석 닭한마리 */}
        <h3 className="text-2xl font-bold text-center mb-4" style={{ color: "var(--foreground)" }}>
          🍗 1차: 장인석 닭한마리
        </h3>
        <div
          className="rounded-3xl overflow-hidden shadow-lg mb-8"
          style={{ border: "4px solid var(--pink)" }}
        >
          <iframe
            src={`https://www.google.com/maps?q=${FIRST_LAT},${FIRST_LNG}&z=16&output=embed`}
            width="100%"
            height="350"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="1차 장소 지도"
          />
        </div>

        {/* 1차 지도앱 링크 */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {[
            { label: "카카오맵", url: firstKakaoUrl, bg: "var(--yellow)" },
            { label: "네이버지도", url: firstNaverUrl, bg: "var(--mint)" },
            { label: "구글맵", url: firstGoogleUrl, bg: "var(--lavender)" },
          ].map((app) => (
            <motion.a
              key={`first-${app.label}`}
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

        {/* 2차: 우리집 */}
        <h3 className="text-2xl font-bold text-center mb-4" style={{ color: "var(--foreground)" }}>
          🏠 2차: 우리집
        </h3>

        {/* Map embed */}
        <div
          className="rounded-3xl overflow-hidden shadow-lg mb-8"
          style={{ border: "4px solid var(--pink)" }}
        >
          <iframe
            src={`https://www.google.com/maps?q=${SECOND_LAT},${SECOND_LNG}&z=16&output=embed`}
            width="100%"
            height="350"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="2차 장소 지도"
          />
        </div>

        {/* Address card */}
        <div
          className="rounded-3xl p-6 mb-6 text-center shadow-md"
          style={{ backgroundColor: "var(--peach)" }}
        >
          <p className="text-xl font-bold mb-2" style={{ color: "var(--foreground)" }}>🏠 {SECOND_ADDRESS}</p>
          <p style={{ color: "var(--foreground)", opacity: 0.6 }}>현관 비밀번호는 따로 알려드릴게요!</p>
        </div>

        {/* Map app links */}
        <div className="flex flex-wrap justify-center gap-3">
          {[
            { label: "카카오맵", url: secondKakaoUrl, bg: "var(--yellow)" },
            { label: "네이버지도", url: secondNaverUrl, bg: "var(--mint)" },
            { label: "구글맵", url: secondGoogleUrl, bg: "var(--lavender)" },
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
