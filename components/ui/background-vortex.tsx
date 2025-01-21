"use client";
import React, { useEffect, useRef } from "react";

interface BackgroundVortexProps {
  children: React.ReactNode;
}

export function BackgroundVortex({ children }: BackgroundVortexProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const isDark = useRef(window?.matchMedia("(prefers-color-scheme: dark)").matches);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas size with pixel ratio for sharp rendering
    const setCanvasSize = () => {
      const pixelRatio = window.devicePixelRatio || 1;
      canvas.width = window.innerWidth * pixelRatio;
      canvas.height = window.innerHeight * pixelRatio;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      ctx.scale(pixelRatio, pixelRatio);
    };
    setCanvasSize();
    window.addEventListener("resize", setCanvasSize);

    let time = 0;
    const lines: { angle: number; radius: number; speed: number; width: number; opacity: number }[] = [];

    // Create spiral lines
    for (let i = 0; i < 100; i++) {
      lines.push({
        angle: Math.random() * Math.PI * 2,
        radius: Math.random() * 50 + 50,
        speed: (Math.random() * 0.02 + 0.02) * (Math.random() < 0.5 ? -1 : 1),
        width: Math.random() * 2 + 1,
        opacity: Math.random() * 0.5 + 0.25,
      });
    }

    const animate = () => {
      if (!ctx || !canvas) return;
      
      ctx.fillStyle = isDark.current ? 'rgba(24, 24, 27, 0.1)' : 'rgba(250, 250, 250, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;

      lines.forEach((line) => {
        const x = centerX + Math.cos(line.angle) * line.radius;
        const y = centerY + Math.sin(line.angle) * line.radius;

        ctx.beginPath();
        ctx.moveTo(x, y);
        
        const endX = centerX + Math.cos(line.angle + 0.5) * (line.radius + 20);
        const endY = centerY + Math.sin(line.angle + 0.5) * (line.radius + 20);
        
        ctx.lineTo(endX, endY);
        
        const gradient = ctx.createLinearGradient(x, y, endX, endY);
        if (isDark.current) {
          gradient.addColorStop(0, `rgba(255, 255, 255, ${line.opacity * 0.5})`);
          gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');
        } else {
          gradient.addColorStop(0, `rgba(0, 0, 0, ${line.opacity * 0.3})`);
          gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
        }
        
        ctx.strokeStyle = gradient;
        ctx.lineWidth = line.width;
        ctx.stroke();

        line.angle += line.speed;
        line.radius += Math.sin(time * 0.1) * 0.2;
      });

      time += 0.1;
      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", setCanvasSize);
    };
  }, []);

  return (
    <div>
      <canvas
        ref={canvasRef}
        className="fixed inset-0 -z-10"
        style={{ opacity: 0.8 }}
      />
      {children}
    </div>
  );
} 