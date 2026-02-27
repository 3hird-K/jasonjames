"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

export const SparklesCore = ({
  id,
  background,
  minSize,
  maxSize,
  speed,
  particleColor,
  particleDensity,
  className,
}: {
  id?: string;
  background?: string;
  minSize?: number;
  maxSize?: number;
  speed?: number;
  particleColor?: string;
  particleDensity?: number;
  className?: string;
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [context, setContext] = useState<CanvasRenderingContext2D | null>(null);

  const particles = useRef<
    {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      opacity: number;
      fadeDirection: number;
    }[]
  >([]);

  useEffect(() => {
    if (canvasRef.current) {
      const ctx = canvasRef.current.getContext("2d");
      setContext(ctx);
    }
  }, []);

  useEffect(() => {
    if (!context || !canvasRef.current) return;

    const canvas = canvasRef.current;
    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        canvas.width = entry.contentRect.width;
        canvas.height = entry.contentRect.height;
        initParticles();
      }
    });

    resizeObserver.observe(canvas);

    const density = particleDensity || 50;
    const pMinSize = minSize || 0.5;
    const pMaxSize = maxSize || 1.5;
    const pSpeed = speed || 1;
    const pColor = particleColor || "#FFFFFF";

    function initParticles() {
      particles.current = [];
      for (let i = 0; i < density; i++) {
        particles.current.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * (pMaxSize - pMinSize) + pMinSize,
          speedX: (Math.random() - 0.5) * pSpeed * 0.5,
          speedY: (Math.random() - 0.5) * pSpeed * 0.5,
          opacity: Math.random(),
          fadeDirection: Math.random() > 0.5 ? 1 : -1,
        });
      }
    }

    initParticles();

    let animationFrameId: number;

    function animate() {
      if (!context) return;
      context.clearRect(0, 0, canvas.width, canvas.height);

      particles.current.forEach((particle) => {
        particle.x += particle.speedX;
        particle.y += particle.speedY;
        particle.opacity += particle.fadeDirection * 0.01;

        if (particle.opacity <= 0 || particle.opacity >= 1) {
          particle.fadeDirection *= -1;
        }

        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;

        context.beginPath();
        context.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        context.fillStyle = pColor;
        context.globalAlpha = particle.opacity;
        context.fill();
      });

      context.globalAlpha = 1;
      animationFrameId = requestAnimationFrame(animate);
    }

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      resizeObserver.disconnect();
    };
  }, [context, minSize, maxSize, speed, particleColor, particleDensity]);

  return (
    <canvas
      ref={canvasRef}
      id={id}
      style={{ background: background || "transparent" }}
      className={cn("h-full w-full", className)}
    />
  );
};
