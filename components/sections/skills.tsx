"use client";

import {
  IconBrandTypescript,
  IconBrandReact,
  IconBrandNextjs,
  IconBrandNodejs,
  IconBrandTailwind,
  IconDatabase,
  IconBrandSupabase,
  IconBrandPython,
  IconBrandDocker,
  IconBrandGit,
  IconApi,
  IconBrandFramerMotion,
  IconBrandLaravel,
  IconBrandReactNative,
  IconShieldLock,
  IconBrandVercel,
  IconCloudUpload,
  IconServer2,
  IconWorldWww,
  IconRocket,
} from "@tabler/icons-react";
import { CometCard } from "@/components/ui/comet-card";

const skills = [
  { name: "TypeScript", icon: <IconBrandTypescript className="h-8 w-8" /> },
  { name: "React", icon: <IconBrandReact className="h-8 w-8" /> },
  { name: "React Native", icon: <IconBrandReactNative className="h-8 w-8" /> },
  { name: "Next.js", icon: <IconBrandNextjs className="h-8 w-8" /> },
  { name: "Laravel", icon: <IconBrandLaravel className="h-8 w-8" /> },
  { name: "Node.js", icon: <IconBrandNodejs className="h-8 w-8" /> },
  { name: "Tailwind CSS", icon: <IconBrandTailwind className="h-8 w-8" /> },
  { name: "PostgreSQL", icon: <IconDatabase className="h-8 w-8" /> },
  { name: "Supabase", icon: <IconBrandSupabase className="h-8 w-8" /> },
  { name: "Clerk", icon: <IconShieldLock className="h-8 w-8" /> },
  { name: "Python", icon: <IconBrandPython className="h-8 w-8" /> },
  { name: "Docker", icon: <IconBrandDocker className="h-8 w-8" /> },
  { name: "Git", icon: <IconBrandGit className="h-8 w-8" /> },
  { name: "REST APIs", icon: <IconApi className="h-8 w-8" /> },
  {
    name: "Framer Motion",
    icon: <IconBrandFramerMotion className="h-8 w-8" />,
  },
];

const hosting = [
  { name: "Vercel", icon: <IconBrandVercel className="h-8 w-8" /> },
  { name: "Netlify", icon: <IconCloudUpload className="h-8 w-8" /> },
  { name: "Render", icon: <IconServer2 className="h-8 w-8" /> },
  { name: "Hostinger", icon: <IconWorldWww className="h-8 w-8" /> },
  { name: "Railway", icon: <IconRocket className="h-8 w-8" /> },
];

export function SkillsSection() {
  return (
    <section id="skills" className="relative py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <h2
          data-aos="fade-up"
          className="text-3xl md:text-5xl font-bold text-center mb-16"
        >
          Tech <span className="text-primary">Stack</span>
        </h2>
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-4">
          {skills.map((skill, i) => (
            <div key={skill.name} data-aos="zoom-in" data-aos-delay={i * 50}>
              <CometCard
                rotateDepth={12}
                translateDepth={10}
                className="aspect-square"
              >
                <div className="flex flex-col items-center justify-center gap-2 h-full w-full rounded-2xl bg-black dark:bg-black border border-neutral-800 dark:border-neutral-800 shadow-xl transition-colors p-4 aspect-square hover:bg-neutral-900 dark:hover:bg-neutral-900">
                  <span className="text-primary">{skill.icon}</span>
                  <span className="text-xs font-medium text-foreground text-center leading-tight">
                    {skill.name}
                  </span>
                </div>
              </CometCard>
            </div>
          ))}
        </div>

        {/* Hosting & Deployment */}
        <h3
          data-aos="fade-up"
          className="text-xl md:text-2xl font-semibold text-center mt-16 mb-8"
        >
          Hosting & <span className="text-primary">Deployment</span>
        </h3>
        <div className="grid grid-cols-3 sm:grid-cols-5 gap-4 max-w-2xl mx-auto">
          {hosting.map((item, i) => (
            <div key={item.name} data-aos="zoom-in" data-aos-delay={i * 50}>
              <CometCard
                rotateDepth={12}
                translateDepth={10}
                className="aspect-square"
              >
                <div className="flex flex-col items-center justify-center gap-2 h-full w-full rounded-2xl bg-black dark:bg-black border border-neutral-800 dark:border-neutral-800 shadow-xl transition-colors p-4 aspect-square hover:bg-neutral-900 dark:hover:bg-neutral-900">
                  <span className="text-primary">{item.icon}</span>
                  <span className="text-xs font-medium text-foreground text-center leading-tight">
                    {item.name}
                  </span>
                </div>
              </CometCard>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
