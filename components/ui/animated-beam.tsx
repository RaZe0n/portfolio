"use client";

import React, { useEffect, useRef } from "react";

interface AnimatedBeamProps {
  containerRef: React.RefObject<HTMLDivElement>;
  fromRef: React.RefObject<HTMLDivElement>;
  toRef: React.RefObject<HTMLDivElement>;
  curvature?: number;
  endYOffset?: number;
  reverse?: boolean;
  delay?: number;
}

export const AnimatedBeam: React.FC<AnimatedBeamProps> = ({
  containerRef,
  fromRef,
  toRef,
  curvature = 0,
  endYOffset = 0,
  reverse = false,
  delay = 0,
}) => {
  const pathRef = useRef<SVGPathElement>(null);

  useEffect(() => {
    if (!fromRef.current || !toRef.current || !containerRef.current || !pathRef.current) {
      return;
    }

    const updatePath = () => {
      const containerRect = containerRef.current!.getBoundingClientRect();
      const fromRect = fromRef.current!.getBoundingClientRect();
      const toRect = toRef.current!.getBoundingClientRect();

      // Calculate positions relative to container
      const centerX = toRect.left + toRect.width / 2 - containerRect.left;
      const centerY = toRect.top + toRect.height / 2 - containerRect.top;
      const targetX = fromRect.left + fromRect.width / 2 - containerRect.left;
      const targetY = fromRect.top + fromRect.height / 2 - containerRect.top + endYOffset;

      // Shorten the line by moving the target closer to the center
      const shortenFactor = 0.8; // Adjust this factor to control the shortening
      const adjustedTargetX = centerX + (targetX - centerX) * shortenFactor;
      const adjustedTargetY = centerY + (targetY - centerY) * shortenFactor;

      // Calculate control point for the curve
      const midY = (centerY + targetY) / 2;
      const controlX = (centerX + targetX) / 2 + (reverse ? -curvature : curvature);
      const controlY = midY;

      // Create the path starting from the center
      const path = `M ${centerX},${centerY} Q ${controlX},${controlY} ${adjustedTargetX},${adjustedTargetY}`;
      pathRef.current!.setAttribute("d", path);
    };

    // Initial update
    updatePath();

    // Update on resize
    const resizeObserver = new ResizeObserver(updatePath);
    resizeObserver.observe(containerRef.current);

    return () => {
      resizeObserver.disconnect();
    };
  }, [fromRef, toRef, containerRef, curvature, endYOffset, reverse, delay]);

  return (
    <svg
      className="absolute inset-0 h-full w-full"
      style={{ 
        pointerEvents: "none",
        mask: "linear-gradient(to right, transparent, white 40px, white calc(100% - 40px), transparent)",
        WebkitMask: "linear-gradient(to right, transparent, white 40px, white calc(100% - 40px), transparent)",
        animation: `beam 6s linear infinite ${delay}s`
      }}
    >
      <path
        ref={pathRef}
        className="stroke-purple-400 dark:stroke-purple-500"
        fill="none"
        strokeWidth="1.5"
        strokeDasharray="2,2"
        pathLength="1"
        style={{
          animation: `beam 6s linear infinite ${delay}s`,
        }}
      />
    </svg>
  );
};
