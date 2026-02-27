"use client";
import { motion, AnimatePresence } from "motion/react";
import React, { useEffect, useState } from "react";

const tips = [
  "First impressions are made in 0.05 seconds.",
  "Clean code reads like well-written prose.",
  "Performance is a feature, not an afterthought.",
  "Accessibility isn't optional — it's essential.",
  "Every pixel tells a story.",
  "Ship fast, iterate faster.",
  "The best UI is the one you don't notice.",
  "Simplicity is the ultimate sophistication.",
];

export const MacLoader = ({ onFinish }: { onFinish: () => void }) => {
  const [progress, setProgress] = useState(0);
  const [tipIndex, setTipIndex] = useState(0);
  const [exiting, setExiting] = useState(false);

  useEffect(() => {
    // Pick a random starting tip after mount to avoid prerender randomness.
    setTipIndex(Math.floor(Math.random() * tips.length));

    // Rotate tips every 1.6s
    const tipTimer = setInterval(() => {
      setTipIndex((prev) => (prev + 1) % tips.length);
    }, 1600);

    // Smooth progress bar
    const start = Date.now();
    const duration = 2000; // 2s total load
    const frame = () => {
      const elapsed = Date.now() - start;
      const t = Math.min(elapsed / duration, 1);
      // Ease-out cubic for smooth deceleration
      const eased = 1 - Math.pow(1 - t, 3);
      setProgress(eased * 100);
      if (t < 1) {
        requestAnimationFrame(frame);
      } else {
        // Start exit animation, then call onFinish
        setExiting(true);
        setTimeout(onFinish, 600);
      }
    };
    requestAnimationFrame(frame);

    return () => clearInterval(tipTimer);
  }, [onFinish]);

  return (
    <AnimatePresence>
      {!exiting && (
        <motion.div
          key="mac-loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-black"
        >
          {/* Subtle radial glow behind logo */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-[500px] h-[500px] rounded-full bg-white/[0.02] blur-3xl" />
          </div>

          {/* Apple-style logo — stylised "ND" monogram */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="relative mb-10"
          >
            <svg
              width="56"
              height="56"
              viewBox="0 0 56 56"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="drop-shadow-[0_0_40px_rgba(255,255,255,0.08)]"
            >
              {/* Apple-like rounded shape */}
              <rect
                x="4"
                y="4"
                width="48"
                height="48"
                rx="12"
                className="fill-white/[0.06] stroke-white/[0.1]"
                strokeWidth="0.5"
              />
              {/* N */}
              <motion.path
                d="M17 38V18L27 38V18"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 0.9 }}
                transition={{ duration: 1.2, ease: "easeInOut" }}
              />
              {/* D */}
              <motion.path
                d="M31 18H36C40.4183 18 44 22.4772 44 28C44 33.5228 40.4183 38 36 38H31V18Z"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 0.9 }}
                transition={{ duration: 1.2, ease: "easeInOut", delay: 0.3 }}
              />
            </svg>
          </motion.div>

          {/* macOS-style thin progress bar */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.4 }}
            className="relative w-52 h-[4px] rounded-full bg-white/[0.08] overflow-hidden"
          >
            <motion.div
              className="absolute inset-y-0 left-0 rounded-full"
              style={{
                width: `${progress}%`,
                background:
                  "linear-gradient(90deg, rgba(255,255,255,0.5), rgba(255,255,255,0.8))",
              }}
            />
            {/* Subtle shine sweep */}
            <motion.div
              className="absolute inset-y-0 w-12 rounded-full"
              style={{
                background:
                  "linear-gradient(90deg, transparent, rgba(255,255,255,0.15), transparent)",
              }}
              animate={{ left: ["-48px", "192px"] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          </motion.div>

          {/* Rotating useful tips */}
          <div className="mt-8 h-6 overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.p
                key={tipIndex}
                initial={{ opacity: 0, y: 10, filter: "blur(4px)" }}
                animate={{ opacity: 0.5, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -10, filter: "blur(4px)" }}
                transition={{ duration: 0.35, ease: "easeInOut" }}
                className="text-xs text-white/50 tracking-wide text-center font-light"
              >
                {tips[tipIndex]}
              </motion.p>
            </AnimatePresence>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
