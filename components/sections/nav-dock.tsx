"use client";

import { FloatingDock } from "@/components/ui/floating-dock";
import {
  IconHome,
  IconUser,
  IconCode,
  IconTimeline,
  IconBriefcase,
  IconMail,
} from "@tabler/icons-react";

const navItems = [
  {
    title: "Home",
    icon: (
      <IconHome className="h-full w-full text-muted-foreground group-hover/dock-icon:text-primary dark:group-hover/dock-icon:text-primary " />
    ),
    href: "#home",
  },
  {
    title: "Skills",
    icon: (
      <IconCode className="h-full w-full text-muted-foreground group-hover/dock-icon:text-primary dark:group-hover/dock-icon:text-primary " />
    ),
    href: "#skills",
  },
  {
    title: "Experience",
    icon: (
      <IconTimeline className="h-full w-full text-muted-foreground group-hover/dock-icon:text-primary dark:group-hover/dock-icon:text-primary " />
    ),
    href: "#experience",
  },
  {
    title: "Projects",
    icon: (
      <IconBriefcase className="h-full w-full text-muted-foreground group-hover/dock-icon:text-primary dark:group-hover/dock-icon:text-primary " />
    ),
    href: "#projects",
  },
  {
    title: "Contact",
    icon: (
      <IconMail className="h-full w-full text-muted-foreground group-hover/dock-icon:text-primary dark:group-hover/dock-icon:text-primary " />
    ),
    href: "#contact",
  },
];

export function NavDock() {
  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
      <FloatingDock items={navItems} />
    </div>
  );
}
