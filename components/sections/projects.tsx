"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { SparklesCore } from "@/components/ui/sparkles";
import { ExternalLink, Github } from "lucide-react";
import Image, { type StaticImageData } from "next/image";
import eamon from "@/assets/eamon.png";
import osa from "@/assets/osa.png";
import dti from "@/assets/dti.png";
import stay from "@/assets/stay.png";

interface ProjectsSectionProps {
  primaryHsl: string;
}

const projects = [
  {
    title: "Eamon Express",
    desc: "Built a logistics dashboard to replace manual Excel-based shipment tracking. Integrated FedEx API for real-time tracking and PayPal for payment processing. Reduced shipment lookup time from minutes to instant search, serving active courier operations.",
    tags: ["Laravel", "MySQL", "FedEx API", "Paypal API"],
    image: eamon,
    liveUrl: "https://eamonexpress.com/",
    sourceUrl: "https://github.com/EamonExpress",
  },
  {
    title: "Osa Service Portal",
    desc: "Built a centralized service portal for USTP's Organization for Student Affairs to streamline student requests and document tracking. Replaced manual paper-based workflows with a digital system, reducing processing time and improving transparency for students and staff.",
    tags: ["Nextjs", "Supabase", "Tailwind"],
    image: osa,
    liveUrl: "https://osaserviceportal.vercel.app/",
    sourceUrl: "https://github.com/3hird-K/osa-service-portal",
  },
  {
    title: "StayVia",
    desc: "Capstone project — a hotel booking platform enabling users to search, compare, and book accommodations. Built the full-stack backend with Supabase for auth, real-time availability, and booking management. Focused on mobile-first responsive design.",
    tags: ["Nextjs", "Supabase", "Tailwind"],
    image: stay,
    liveUrl: "https://stayviacdo.vercel.app/",
    sourceUrl: "https://github.com/3hird-K/StayviaDb",
  },
  {
    title: "DTI BNPC",
    desc: "Developed a public-facing website for the Department of Trade and Industry's Bureau of Philippine National Competitiveness. Designed an accessible, SEO-optimized platform to showcase national competitiveness data and reports using HeroUI components.",
    tags: ["Nextjs", "Supabase", "HeroUI", "Tailwind"],
    image: dti,
    liveUrl: "https://dti-bnpc.vercel.app/",
    sourceUrl: "https://github.com/3hird-K/dti-bnpc",
  },
];

export function ProjectsSection({ primaryHsl }: ProjectsSectionProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = projects[activeIndex];

  return (
    <section id="projects" className="relative py-24 px-6">
      <div className="absolute inset-0 w-full h-full">
        <SparklesCore
          id="projectsSparkles"
          background="transparent"
          minSize={0.3}
          maxSize={0.8}
          particleDensity={20}
          particleColor={primaryHsl}
          className="w-full h-full"
        />
      </div>
      <div className="relative z-10 max-w-6xl mx-auto">
        <h2
          data-aos="fade-up"
          className="text-3xl md:text-5xl font-bold text-center mb-12"
        >
          Featured <span className="text-primary">Projects</span>
        </h2>

        {/* ── Spotlight Card ── */}
        <div
          data-aos="fade-up"
          className="relative rounded-3xl border border-white/10 dark:border-white/[0.1] bg-white/5 dark:bg-white/[0.02] backdrop-blur-md shadow-xl overflow-hidden mb-8 hover:border-primary/40 transition-colors duration-300"
        >
          {/* Holographic top edge */}
          <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent z-20" />

          <div className="grid md:grid-cols-2">
            {/* Image */}
            <div className="relative h-64 md:h-[420px] overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active.title + "-img"}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="relative w-full h-full"
                >
                  <Image
                    src={active.image}
                    alt={active.title}
                    fill
                    className="object-cover"
                    priority
                  />
                </motion.div>
              </AnimatePresence>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-card/60 hidden md:block" />
              <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent md:hidden" />
            </div>

            {/* Details */}
            <AnimatePresence mode="wait">
              <motion.div
                key={active.title + "-info"}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.35, ease: "easeInOut" }}
                className="p-8 md:p-10 flex flex-col justify-center"
              >
                <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
                  {active.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {active.desc}
                </p>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {active.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-medium px-3 py-1.5 rounded-full bg-primary/10 text-primary border border-primary/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex items-center gap-4 mt-2">
                  {active.liveUrl && (
                    <a
                      href={active.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-full bg-primary hover:bg-primary/90 text-primary-foreground transition-all"
                    >
                      <ExternalLink className="h-4 w-4" />
                      Live Demo
                    </a>
                  )}
                  {active.sourceUrl && (
                    <a
                      href={active.sourceUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-full border border-input hover:border-primary hover:text-primary transition-all shadow-sm"
                    >
                      <Github className="h-4 w-4" />
                      Source Code
                    </a>
                  )}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* ── Thumbnail Selectors ── */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {projects.map((project, i) => (
            <motion.button
              key={project.title}
              onClick={() => setActiveIndex(i)}
              className={`group relative rounded-2xl overflow-hidden border transition-all duration-300 text-left bg-white/5 dark:bg-white/[0.02] backdrop-blur-md ${i === activeIndex
                ? "border-primary shadow-[0_0_25px_rgba(56,189,248,0.15)] ring-1 ring-primary/30"
                : "border-white/10 dark:border-white/[0.1] shadow-xl hover:border-primary/30 hover:bg-white/10 dark:hover:bg-white/[0.08]"
                }`}
              whileHover={{ y: -4 }}
              whileTap={{ scale: 0.98 }}
            >
              {/* Thumbnail image */}
              <div className="relative h-28 md:h-32 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className={`object-cover transition-all duration-500 ${i === activeIndex
                    ? "scale-105 brightness-100"
                    : "brightness-50 group-hover:brightness-75 group-hover:scale-105"
                    }`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
              </div>

              {/* Title */}
              <div className="p-3">
                <p
                  className={`text-sm font-semibold truncate transition-colors duration-300 ${i === activeIndex
                    ? "text-primary"
                    : "text-foreground/60 group-hover:text-foreground"
                    }`}
                >
                  {project.title}
                </p>
                <div className="flex flex-wrap gap-1 mt-1.5">
                  {project.tags.slice(0, 2).map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] px-1.5 py-0.5 rounded-full bg-primary/5 text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 2 && (
                    <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-primary/5 text-muted-foreground">
                      +{project.tags.length - 2}
                    </span>
                  )}
                </div>
              </div>

              {/* Active indicator dot */}
              {i === activeIndex && (
                <motion.div
                  layoutId="activeIndicator"
                  className="absolute top-2 right-2 w-2.5 h-2.5 rounded-full bg-primary shadow-[0_0_8px_rgba(56,189,248,0.6)]"
                  transition={{ type: "spring", stiffness: 300, damping: 25 }}
                />
              )}
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  );
}
