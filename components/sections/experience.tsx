"use client";

import { motion } from "framer-motion";
import { SparklesCore } from "@/components/ui/sparkles";
import { IconBriefcase, IconCalendar, IconMapPin } from "@tabler/icons-react";

interface Experience {
  title: string;
  company: string;
  location: string;
  period: string;
  description: string;
  highlights: string[];
  tech: string[];
}

const experiences: Experience[] = [
  {
    title: "Capstone Project Lead Developer",
    company: "Academic Project, USTP",
    location: "Misamis Oriental, PH",
    period: "2026 – Present",
    description:
      "Led development of a Next.js e-commerce platform with SSR and responsive UI.",
    highlights: [
      "Built a responsive e-commerce platform with Next.js and SSR",
      "Integrated PostgreSQL and GraphQL APIs for data management",
      "Implemented auth with modern libraries for secure access",
      "Deployed on Vercel with CI/CD pipelines",
    ],
    tech: ["Next.js", "Clerk", "Supabase", "Laravel"],
  },
  {
    title: "Full-Stack Developer",
    company: "EamonExpress",
    location: "Misamis Oriental, PH",
    period: "2023 – 2026",
    description:
      "Built a Laravel logistics dashboard with responsive UI and third-party API integrations.",
    highlights: [
      "Set up CI/CD pipelines, cutting deployment time by 60%",
      "Optimized DB queries, boosting dashboard performance by 30%",
      "Integrated FedEx, PayPal, and geolocation APIs",
      "Managed WordPress blog for SEO and user engagement",
    ],
    tech: [
      "Next.js",
      "GraphQL",
      "Laravel",
      "MySQL",
      "FedEx API",
      "WordPress",
      "PayPal API",
      "CI/CD Tools",
    ],
  },
  {
    title: "GP-CPA Bookkeeper Intern",
    company: "Home Office",
    location: "Misamis Oriental, PH",
    period: "2022 - 2023",
    description:
      "Handled financial records, invoicing, and budgeting for a local business.",
    highlights: [
      "Maintained and reconciled financial records",
      "Managed invoices, accounts payable/receivable",
      "Assisted with budgeting and financial reporting",
    ],
    tech: ["Xero", "QuickBooks", "Microsoft Excel"],
  },
  {
    title: "Mlhuillier Intern",
    company: "Mlhuillier Financial Services",
    location: "Cebu City, PH",
    period: "2021 – 2022",
    description:
      "IT intern supporting website maintenance and troubleshooting technical issues.",
    highlights: [
      "Hands-on web development and IT support experience",
      "Resolved technical issues with cross-functional teams",
      "Maintained and improved the company website",
    ],
    tech: ["KYC Systems", "Basic HTML/CSS", "Customer Support Tools"],
  },
  {
    title: "Outbound Sales Associate",
    company: "Ebiz BPO Company",
    location: "Onsite",
    period: "Jun 2020 – Mar 2021",
    description:
      "Managed U.S.-based sales campaigns and utilized CRM tools.",
    highlights: [
      "Managed U.S.-based sales campaigns",
      "Utilized CRM tools for customer relationship management",
    ],
    tech: ["CRM", "Sales Operations", "Customer Support Tools"],
  },
];

export function ExperienceSection() {
  return (
    <section id="experience" className="relative py-24 px-6 overflow-hidden">
      {/* Sparkle background */}
      <div className="absolute inset-0 w-full h-full">
        <SparklesCore
          id="experienceSparkles"
          background="transparent"
          minSize={0.2}
          maxSize={0.6}
          particleDensity={15}
          particleColor="hsl(var(--primary))"
          className="w-full h-full"
        />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Heading */}
        <h2
          data-aos="fade-up"
          className="text-3xl md:text-5xl font-bold text-center mb-4"
        >
          Work <span className="text-primary">Experience</span>
        </h2>
        <p
          data-aos="fade-up"
          data-aos-delay="100"
          className="text-muted-foreground text-center max-w-xl mx-auto mb-16"
        >
          A timeline of my professional journey building products and growing as
          an software engineer.
        </p>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical glowing beam */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px md:-translate-x-px">
            {/* Static glow line */}
            <div className="absolute inset-0 w-px bg-gradient-to-b from-transparent via-primary/30 to-transparent" />
            {/* Animated energy pulse */}
            <motion.div
              className="absolute w-px bg-gradient-to-b from-transparent via-primary to-transparent"
              style={{ height: "120px" }}
              animate={{ top: ["-120px", "100%"] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          </div>

          {/* Timeline items */}
          {experiences.map((exp, index) => {
            const isLeft = index % 2 === 0;
            return (
              <div
                key={exp.company + exp.period}
                className={`relative flex items-start mb-12 last:mb-0 ${isLeft
                  ? "md:flex-row flex-row"
                  : "md:flex-row-reverse flex-row"
                  }`}
              >
                {/* Node on the timeline */}
                <div className="absolute left-6 md:left-1/2 -translate-x-1/2 z-20">
                  <div
                    data-aos="zoom-in"
                    data-aos-delay={index * 100}
                    className="relative"
                  >
                    {/* Glow ring */}
                    <div className="absolute -inset-2 rounded-full bg-primary/20 blur-md animate-pulse" />
                    {/* Node circle */}
                    <div className="relative w-12 h-12 rounded-full bg-background border-2 border-primary flex items-center justify-center shadow-[0_0_15px_rgba(56,189,248,0.3)]">
                      <IconBriefcase className="h-5 w-5 text-primary" />
                    </div>
                  </div>
                </div>

                {/* Content card */}
                <div
                  data-aos={isLeft ? "fade-right" : "fade-left"}
                  data-aos-delay={index * 150}
                  className={`w-full pl-20 md:w-[calc(50%-2rem)] ${isLeft
                    ? "md:pr-8 md:pl-0 md:text-left"
                    : "md:pl-8 md:pr-0 md:text-left"
                    }`}
                >
                  <div className="group relative rounded-2xl border border-white/10 dark:border-white/[0.1] bg-white/5 dark:bg-white/[0.02] backdrop-blur-md shadow-xl p-6 hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(56,189,248,0.08)]">
                    {/* Holographic top edge */}
                    <div className="absolute top-0 left-4 right-4 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    {/* Period & Location */}
                    <div
                      className={`flex items-center gap-4 mb-3 text-sm text-muted-foreground justify-start`}
                    >
                      <span className="flex items-center gap-1">
                        <IconCalendar className="h-3.5 w-3.5" />
                        {exp.period}
                      </span>
                      <span className="flex items-center gap-1">
                        <IconMapPin className="h-3.5 w-3.5" />
                        {exp.location}
                      </span>
                    </div>

                    {/* Title & Company */}
                    <h3 className="text-lg font-bold text-foreground mb-1">
                      {exp.title}
                    </h3>
                    <p className="text-primary font-medium text-sm mb-3">
                      {exp.company}
                    </p>

                    {/* Description */}
                    <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                      {exp.description}
                    </p>

                    {/* Highlights */}
                    <ul className="space-y-1.5 mb-4 text-left">
                      {exp.highlights.map((h) => (
                        <li
                          key={h}
                          className="text-xs text-foreground/70 flex items-start gap-2 flex-row"
                        >
                          <span className="text-primary mt-0.5 shrink-0">
                            ▹
                          </span>
                          {h}
                        </li>
                      ))}
                    </ul>

                    {/* Tech tags */}
                    <div className="flex flex-wrap gap-2 justify-start">
                      {exp.tech.map((t) => (
                        <span
                          key={t}
                          className="text-[10px] font-medium px-2.5 py-1 rounded-full bg-primary/10 text-primary border border-primary/20"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
