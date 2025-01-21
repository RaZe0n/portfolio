"use client";
import React, { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  opacity: number;
}

export function BackgroundParticles() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particles = useRef<Particle[]>([]);
  const isDark = useRef(false);

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

    // Check if dark mode is enabled
    isDark.current = window.matchMedia("(prefers-color-scheme: dark)").matches;

    // Initialize particles with more particles and adjusted parameters
    const initParticles = () => {
      particles.current = Array.from({ length: 100 }, () => ({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        size: Math.random() * 3 + 2, // Slightly larger particles
        speedX: (Math.random() - 0.5) * 0.3, // Slower movement
        speedY: (Math.random() - 0.5) * 0.3,
        opacity: Math.random() * 0.5 + 0.3, // Higher base opacity
      }));
    };
    initParticles();

    // Animation loop
    const animate = () => {
      if (!ctx || !canvas) return;

      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

      particles.current.forEach((particle) => {
        // Update position
        particle.x += particle.speedX;
        particle.y += particle.speedY;

        // Wrap around edges instead of bouncing
        if (particle.x < 0) particle.x = window.innerWidth;
        if (particle.x > window.innerWidth) particle.x = 0;
        if (particle.y < 0) particle.y = window.innerHeight;
        if (particle.y > window.innerHeight) particle.y = 0;

        // Draw particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = isDark.current 
          ? `rgba(255, 255, 255, ${particle.opacity * 0.4})`
          : `rgba(0, 0, 0, ${particle.opacity * 0.2})`;
        ctx.fill();

        // Draw connections with increased range
        particles.current.forEach((otherParticle) => {
          const dx = particle.x - otherParticle.x;
          const dy = particle.y - otherParticle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 150) { // Increased connection range
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(otherParticle.x, otherParticle.y);
            ctx.strokeStyle = isDark.current
              ? `rgba(255, 255, 255, ${0.15 * (1 - distance / 150)})`
              : `rgba(0, 0, 0, ${0.1 * (1 - distance / 150)})`;
            ctx.stroke();
          }
        });
      });

      requestAnimationFrame(animate);
    };

    animate();

    // Cleanup
    return () => {
      window.removeEventListener("resize", setCanvasSize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 -z-10" // Changed to fixed positioning
      style={{ opacity: 1 }} // Increased opacity
    />
  );
} 