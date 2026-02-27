"use client";

import { useEffect, useState } from "react";
import AOS from "aos";
import { HeroSection } from "@/components/sections/hero";
import { SkillsSection } from "@/components/sections/skills";
import { ExperienceSection } from "@/components/sections/experience";
import { ProjectsSection } from "@/components/sections/projects";
import { TestimonialsSection } from "@/components/sections/testimonials";
import { ContactSection } from "@/components/sections/contact";
import { NavDock } from "@/components/sections/nav-dock";
import { MacLoader } from "@/components/ui/mac-loader";
import dynamic from "next/dynamic";

const Meteors = dynamic(
  () => import("@/components/ui/meteors").then((mod) => mod.Meteors),
  { ssr: false }
);

export default function Home() {
  const [primaryHsl, setPrimaryHsl] = useState("#22d3ee");
  const [isMobile, setIsMobile] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  // const [safeMode, setSafeMode] = useState(false);

  useEffect(() => {
    // Detect reduced motion preference
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    AOS.init({
      duration: prefersReducedMotion ? 0 : 800,
      easing: "ease-out-cubic",
      once: false,
      mirror: true,
      offset: 80,
    });

    setIsMobile(window.innerWidth < 768);

    // Resolve theme primary color for canvas-based components
    const raw = getComputedStyle(document.documentElement)
      .getPropertyValue("--primary")
      .trim();
    if (raw) setPrimaryHsl(`hsl(${raw})`);

    return () => { };
  }, []);

  if (isLoading) {
    return <MacLoader onFinish={() => setIsLoading(false)} />;
  }

  return (
    <main className="bg-background text-foreground overflow-x-hidden relative">
      {/* ── Global Meteors Background ── */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <Meteors
          number={isMobile ? 25 : 60}
          className="before:from-primary/60 scale-110"
        />
      </div>

      <HeroSection />
      <ProjectsSection primaryHsl={primaryHsl} />
      <ExperienceSection />
      <SkillsSection />
      <TestimonialsSection primaryHsl={primaryHsl} />
      <ContactSection />
      <NavDock />
    </main>
  );
}
