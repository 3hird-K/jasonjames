"use client";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import React from "react";

export const Meteors = ({
  number,
  className,
}: {
  number?: number;
  className?: string;
}) => {
  const meteorCount = number || 20;
  const [meteors, setMeteors] = React.useState<
    { position: number; delay: number; duration: number; fromRight: boolean }[]
  >([]);

  React.useEffect(() => {
    setMeteors(
      Array.from({ length: meteorCount }, (_, idx) => ({
        position: idx * (100 / meteorCount),
        delay: Math.random() * 5,
        duration: Math.floor(Math.random() * (10 - 5) + 5),
        fromRight: idx % 2 === 0,
      })),
    );
  }, [meteorCount]);

  if (meteors.length === 0) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {meteors.map((meteor, idx) => (
        <span
          key={"meteor" + idx}
          className={cn(
            "absolute h-0.5 w-0.5 rounded-[9999px] bg-slate-500 shadow-[0_0_0_1px_#ffffff10]",
            meteor.fromRight
              ? "animate-meteor-effect rotate-[215deg]"
              : "animate-meteor-effect-reverse rotate-[145deg]",
            "before:absolute before:top-1/2 before:h-[1px] before:w-[50px] before:-translate-y-[50%] before:transform before:bg-gradient-to-r before:from-[#64748b] before:to-transparent before:content-['']",
            className,
          )}
          style={{
            top: "-40px",
            left: meteor.position + "%",
            animationDelay: meteor.delay + "s",
            animationDuration: meteor.duration + "s",
          }}
        ></span>
      ))}
    </motion.div>
  );
};
