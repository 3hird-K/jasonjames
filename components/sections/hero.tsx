"use client";

import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import {
  IconBrandFacebook,
  IconBrandGithub,
  IconBrandInstagram,
  IconDownload,
} from "@tabler/icons-react";

const World = dynamic(
  () => import("@/components/ui/globe").then((mod) => mod.World),
  { ssr: false, loading: () => null },
);

const globeConfig = {
  pointSize: 1.2,
  globeColor: "#0f172a", // Darker slate base for contrast
  showAtmosphere: true,
  atmosphereColor: "#3b82f6", // Brighter blue
  atmosphereAltitude: 0.25,
  emissive: "#1e3a8a", // Deep blue emissive
  emissiveIntensity: 0.3,
  shininess: 0.9,
  polygonColor: "rgba(255,255,255,0.8)",
  ambientLight: "#60a5fa", // Lighter blue ambient
  directionalLeftLight: "#ffffff",
  directionalTopLight: "#ffffff",
  pointLight: "#ffffff",
  arcTime: 1500,
  arcLength: 0.9,
  rings: 1,
  maxRings: 3,
  autoRotate: true,
  autoRotateSpeed: 0.8,
};

const arcData = [
  {
    order: 1,
    startLat: 14.5995,
    startLng: 120.9842,
    endLat: 37.7749,
    endLng: -122.4194,
    arcAlt: 0.3,
    color: "#38bdf8",
  },
  {
    order: 2,
    startLat: 14.5995,
    startLng: 120.9842,
    endLat: 35.6762,
    endLng: 139.6503,
    arcAlt: 0.2,
    color: "#22d3ee",
  },
  {
    order: 3,
    startLat: 14.5995,
    startLng: 120.9842,
    endLat: 51.5074,
    endLng: -0.1278,
    arcAlt: 0.4,
    color: "#38bdf8",
  },
  {
    order: 4,
    startLat: 14.5995,
    startLng: 120.9842,
    endLat: -33.8688,
    endLng: 151.2093,
    arcAlt: 0.25,
    color: "#22d3ee",
  },
  {
    order: 5,
    startLat: 37.7749,
    startLng: -122.4194,
    endLat: 48.8566,
    endLng: 2.3522,
    arcAlt: 0.35,
    color: "#38bdf8",
  },
  {
    order: 6,
    startLat: 35.6762,
    startLng: 139.6503,
    endLat: 1.3521,
    endLng: 103.8198,
    arcAlt: 0.15,
    color: "#22d3ee",
  },
];

export function HeroSection() {
  const [showGlobe, setShowGlobe] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowGlobe(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Globe background - lazy loaded */}
      {showGlobe && (
        <div className="absolute inset-0 z-0 opacity-80">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-full h-full max-w-[1000px] max-h-[900px] translate-y-[5%]">
              <World globeConfig={globeConfig} data={arcData} />
            </div>
          </div>
        </div>
      )}

      {/* Gradient overlays for blending */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-t from-background via-transparent to-background/80" />
      <div className="absolute inset-0 z-[1] bg-gradient-to-r from-background/60 via-transparent to-background/60" />

      {/* Hero content */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-3xl">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-primary font-medium text-sm md:text-base tracking-widest uppercase mb-4"
        >
          Web Developer
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="text-4xl sm:text-5xl md:text-7xl font-bold leading-tight"
        >
          Hi, I&apos;m <span className="text-primary">Jason</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-muted-foreground max-w-xl text-sm md:text-base mt-6 leading-relaxed"
        >
          Frontend Web Developer focused on building user-centric, high-performance websites. Expert at turning complex requirements into clean, scalable code within agile remote teams.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45 }}
          className="flex flex-wrap justify-center gap-4 mt-8"
        >
          <a
            href="#projects"
            className="px-6 py-3 rounded-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-sm transition-all"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="px-6 py-3 rounded-full border border-input hover:border-primary hover:text-primary font-semibold text-sm transition-all shadow-sm"
          >
            Get in Touch
          </a>
          <a
            href="https://drive.google.com/uc?export=download&confirm=t&id=1MpRyiR8c5OEz3u5ptb5ZuoJFFX1Mp1ps"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-input hover:border-primary hover:text-primary font-semibold text-sm transition-all shadow-sm"
          >
            <IconDownload className="h-4 w-4" />
            Resume
          </a>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="flex gap-4 mt-6"
        >
          <a
            href="https://github.com/3hird-K/"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub Profile"
            className="flex items-center justify-center w-11 h-11 rounded-full border border-border/50 text-muted-foreground hover:text-primary hover:border-primary/50 hover:shadow-[0_0_15px_rgba(56,189,248,0.2)] transition-all duration-300"
          >
            <IconBrandGithub className="h-5 w-5" />
          </a>
          <a
            href="https://www.instagram.com/jie_sunnn/"
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram Profile"
            className="flex items-center justify-center w-11 h-11 rounded-full border border-border/50 text-muted-foreground hover:text-primary hover:border-primary/50 hover:shadow-[0_0_15px_rgba(56,189,248,0.2)] transition-all duration-300"
          >
            <IconBrandInstagram className="h-5 w-5" />
          </a>
          <a
            href="https://www.facebook.com/jason.sta.rita.2025"
            target="_blank"
            rel="noreferrer"
            aria-label="Facebook Profile"
            className="flex items-center justify-center w-11 h-11 rounded-full border border-border/50 text-muted-foreground hover:text-primary hover:border-primary/50 hover:shadow-[0_0_15px_rgba(56,189,248,0.2)] transition-all duration-300"
          >
            <IconBrandFacebook className="h-5 w-5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
