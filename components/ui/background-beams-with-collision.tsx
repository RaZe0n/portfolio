"use client";
import React, { useEffect, useRef } from "react";

interface BackgroundBeamsWithCollisionProps {
  children: React.ReactNode;
}

export function BackgroundBeamsWithCollision({ children }: BackgroundBeamsWithCollisionProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const mousePosition = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleMouseMove = (event: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      mousePosition.current = { x, y };
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 overflow-hidden"
      style={{
        transform: "translate3d(0,0,0)",
      }}
    >
      <div className="absolute top-0 left-0 w-full">
        <div className="animate-beam-fall absolute h-[40rem] w-[0.5rem] rotate-45 bg-gradient-to-b from-transparent via-emerald-500/50 to-transparent" 
             style={{ left: '20%' }} />
        <div className="animate-beam-fall absolute h-[40rem] w-[0.5rem] -rotate-45 bg-gradient-to-b from-transparent via-purple-500/50 to-transparent"
             style={{ left: '40%', animationDelay: '2s' }} />
        <div className="animate-beam-fall absolute h-[40rem] w-[0.5rem] rotate-45 bg-gradient-to-b from-transparent via-emerald-500/50 to-transparent"
             style={{ left: '60%', animationDelay: '1s' }} />
        <div className="animate-beam-fall absolute h-[40rem] w-[0.5rem] -rotate-45 bg-gradient-to-b from-transparent via-purple-500/50 to-transparent"
             style={{ left: '80%', animationDelay: '3s' }} />
      </div>
      <div className="absolute inset-0 bg-zinc-50/90 dark:bg-zinc-900/90" />
      {children}
    </div>
  );
}
