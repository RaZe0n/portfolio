"use client";
import React, { useEffect, useRef } from "react";

interface VortexProps {
  children: React.ReactNode;
  backgroundColor?: string;
  className?: string;
}

export function Vortex({ children, backgroundColor = "black", className = "" }: VortexProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas size with pixel ratio for sharp rendering
    const setCanvasSize = () => {
      const pixelRatio = window.devicePixelRatio || 1;
      const container = canvas.parentElement;
      if (!container) return;
      
      canvas.width = container.clientWidth * pixelRatio;
      canvas.height = container.clientHeight * pixelRatio;
      canvas.style.width = `${container.clientWidth}px`;
      canvas.style.height = `${container.clientHeight}px`;
      ctx.scale(pixelRatio, pixelRatio);
    };
    setCanvasSize();
    window.addEventListener("resize", setCanvasSize);

    let time = 0;
    const lines: { angle: number; radius: number; speed: number; width: number; opacity: number }[] = [];

    // Create spiral lines
    for (let i = 0; i < 50; i++) {
      lines.push({
        angle: Math.random() * Math.PI * 2,
        radius: Math.random() * 30 + 30,
        speed: (Math.random() * 0.02 + 0.02) * (Math.random() < 0.5 ? -1 : 1),
        width: Math.random() * 1.5 + 0.5,
        opacity: Math.random() * 0.3 + 0.2,
      });
    }

    const animate = () => {
      if (!ctx || !canvas) return;
      
      ctx.fillStyle = backgroundColor;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      const centerX = canvas.width / (2 * window.devicePixelRatio);
      const centerY = canvas.height / (2 * window.devicePixelRatio);

      lines.forEach((line) => {
        const x = centerX + Math.cos(line.angle) * line.radius;
        const y = centerY + Math.sin(line.angle) * line.radius;

        ctx.beginPath();
        ctx.moveTo(x, y);
        
        const endX = centerX + Math.cos(line.angle + 0.5) * (line.radius + 15);
        const endY = centerY + Math.sin(line.angle + 0.5) * (line.radius + 15);
        
        ctx.lineTo(endX, endY);
        
        const gradient = ctx.createLinearGradient(x, y, endX, endY);
        gradient.addColorStop(0, `rgba(255, 255, 255, ${line.opacity})`);
        gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');
        
        ctx.strokeStyle = gradient;
        ctx.lineWidth = line.width;
        ctx.stroke();

        line.angle += line.speed;
        line.radius += Math.sin(time * 0.1) * 0.1;
      });

      time += 0.1;
      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", setCanvasSize);
    };
  }, [backgroundColor]);

  return (
    <div className={`relative min-h-[400px] ${className}`} style={{ backgroundColor }}>
      <canvas
        ref={canvasRef}
        className="absolute inset-0"
        style={{ opacity: 0.3 }}
      />
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}
