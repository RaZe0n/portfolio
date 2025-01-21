"use client";

import React, { forwardRef, useRef, useEffect } from "react";
import { cn } from "@/lib/utils";
import { AnimatedBeam } from "@/components/ui/animated-beam";

// Function to generate a random number between min and max
const getRandom = (min: number, max: number) => Math.random() * (max - min) + min;

const Circle = forwardRef<
  HTMLDivElement,
  { className?: string; children?: React.ReactNode }
>(({ className, children }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "z-10 flex size-12 items-center justify-center rounded-full border-2 bg-white p-3 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)]",
        className,
      )}
    >
      {children}
    </div>
  );
});

Circle.displayName = "Circle";

export function AnimatedBeamDemo() {
  const containerRef = useRef<HTMLDivElement>(null);
  const div1Ref = useRef<HTMLDivElement>(null);
  const div2Ref = useRef<HTMLDivElement>(null);
  const div3Ref = useRef<HTMLDivElement>(null);
  const div4Ref = useRef<HTMLDivElement>(null);
  const div5Ref = useRef<HTMLDivElement>(null);
  const div6Ref = useRef<HTMLDivElement>(null);
  const div7Ref = useRef<HTMLDivElement>(null);

  // Generate random delays once on mount
  const delays = useRef(Array.from({ length: 6 }, () => getRandom(0, 2)));

  useEffect(() => {
    // Log delays to check consistency
    console.log(delays.current);
  }, []);

  return (
    <div
      className="relative flex h-[500px] w-full items-center justify-center overflow-hidden rounded-lg border bg-background p-10 md:shadow-xl"
      ref={containerRef}
    >
      <div className="flex size-full flex-col max-w-lg max-h-[200px] items-stretch justify-between gap-10">
        <div className="flex flex-row items-center justify-between">
          <Circle ref={div1Ref}>
            <Icons.html />
          </Circle>
          <Circle ref={div5Ref}>
            <Icons.css />
          </Circle>
        </div>
        <div className="flex flex-row items-center justify-between">
          <Circle ref={div2Ref}>
            <Icons.javascript />
          </Circle>
          <Circle ref={div4Ref} className="size-16">
            <Icons.react />
          </Circle>
          <Circle ref={div6Ref}>
            <Icons.laravel />
          </Circle>
        </div>
        <div className="flex flex-row items-center justify-between">
          <Circle ref={div3Ref}>
            <Icons.tailwindcss />
          </Circle>
          <Circle ref={div7Ref}>
            <Icons.react />
          </Circle>
        </div>
      </div>

      <AnimatedBeam
        containerRef={containerRef as React.RefObject<HTMLDivElement>}
        fromRef={div1Ref as React.RefObject<HTMLDivElement>}
        toRef={div4Ref as React.RefObject<HTMLDivElement>}
        curvature={-75}
        endYOffset={-10}
        delay={delays.current[0]}
      />
      <AnimatedBeam
        containerRef={containerRef as React.RefObject<HTMLDivElement>}
        fromRef={div2Ref as React.RefObject<HTMLDivElement>}
        toRef={div4Ref as React.RefObject<HTMLDivElement>}
        delay={delays.current[1]}
      />
      <AnimatedBeam
        containerRef={containerRef as React.RefObject<HTMLDivElement>}
        fromRef={div3Ref as React.RefObject<HTMLDivElement>}
        toRef={div4Ref as React.RefObject<HTMLDivElement>}
        curvature={75}
        endYOffset={10}
        delay={delays.current[2]}
      />
      <AnimatedBeam
        containerRef={containerRef as React.RefObject<HTMLDivElement>}
        fromRef={div5Ref as React.RefObject<HTMLDivElement>}
        toRef={div4Ref as React.RefObject<HTMLDivElement>}
        curvature={-75}
        endYOffset={-10}
        delay={delays.current[3]}
        reverse
      />
      <AnimatedBeam
        containerRef={containerRef as React.RefObject<HTMLDivElement>}
        fromRef={div6Ref as React.RefObject<HTMLDivElement>}
        toRef={div4Ref as React.RefObject<HTMLDivElement>}
        delay={delays.current[4]}
        reverse
      />
      <AnimatedBeam
        containerRef={containerRef as React.RefObject<HTMLDivElement>}
        fromRef={div7Ref as React.RefObject<HTMLDivElement>}
        toRef={div4Ref as React.RefObject<HTMLDivElement>}
        curvature={75}
        endYOffset={10}
        delay={delays.current[5]}
        reverse
      />
    </div>
  );
}

const Icons = {
  html: () => (
    <svg
      width="100"
      height="100"
      viewBox="0 0 128 128"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path fill="#E44D26" d="M19.5 3.5l8.3 92.8 36.2 10.1 36.3-10.1 8.3-92.8z" />
      <path fill="#F16529" d="M64 116.2l29.2-8.1 7.1-79.7h-36.3z" />
      <path
        fill="#EBEBEB"
        d="M64 66.6h-14.7l-1-11.3h15.7v-11.3h-27.3l.3 3.4 2.7 30.3h24.3zm0 28.4l-.1.1-12.4-3.3-.8-8.9h-11.3l1.5 16.9 23 6.4.1-.1z"
      />
      <path
        fill="#fff"
        d="M64 66.6v11.3h13.7l-1.3 14.5-12.4 3.3v11.3l23-6.4.2-2.3 2.6-29.3.3-3.4h-26.1zm0-22.6v11.3h27.3l.2-2.3.5-5.7.3-3.4z"
      />
    </svg>
  ),
  css: () => (
    <svg
      width="100"
      height="100"
      viewBox="0 0 128 128"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path fill="#1572B6" d="M19.5 3.5l8.3 92.8 36.2 10.1 36.3-10.1 8.3-92.8z" />
      <path fill="#33A9DC" d="M64 116.2l29.2-8.1 7.1-79.7h-36.3z" />
      <path
        fill="#fff"
        d="M64 66.6h-14.7l-1-11.3h15.7v-11.3h-27.3l.3 3.4 2.7 30.3h24.3zm0 28.4l-.1.1-12.4-3.3-.8-8.9h-11.3l1.5 16.9 23 6.4.1-.1z"
      />
      <path
        fill="#EBEBEB"
        d="M64 66.6v11.3h13.7l-1.3 14.5-12.4 3.3v11.3l23-6.4.2-2.3 2.6-29.3.3-3.4h-26.1zm0-22.6v11.3h27.3l.2-2.3.5-5.7.3-3.4z"
      />
    </svg>
  ),
  javascript: () => (
    <svg
      width="100"
      height="100"
      viewBox="0 0 128 128"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path fill="#F0DB4F" d="M1.408 1.408h125.184v125.185H1.408z" />
      <path
        fill="#323330"
        d="M116.5 116.5H11.5V11.5h105zm-52.5-8.5h-8.5v-8.5h8.5zm0-17h-8.5v-8.5h8.5zm0-17h-8.5v-8.5h8.5zm0-17h-8.5v-8.5h8.5zm0-17h-8.5v-8.5h8.5zm0-17h-8.5v-8.5h8.5zm0-17h-8.5v-8.5h8.5z"
      />
    </svg>
  ),
  laravel: () => (
    <svg
      width="100"
      height="100"
      viewBox="0 0 128 128"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill="#FF2D20"
        d="M0 0v128h128V0H0zm64 116.5c-28.9 0-52.5-23.6-52.5-52.5S35.1 11.5 64 11.5 116.5 35.1 116.5 64 92.9 116.5 64 116.5z"
      />
      <path
        fill="#fff"
        d="M64 11.5c-28.9 0-52.5 23.6-52.5 52.5S35.1 116.5 64 116.5 116.5 92.9 116.5 64 92.9 11.5 64 11.5zm0 94.5c-23.2 0-42-18.8-42-42s18.8-42 42-42 42 18.8 42 42-18.8 42-42 42z"
      />
    </svg>
  ),
  react: () => (
    <svg
      width="100"
      height="100"
      viewBox="0 0 128 128"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill="#61DAFB"
        d="M64 0C28.7 0 0 28.7 0 64s28.7 64 64 64 64-28.7 64-64S99.3 0 64 0zm0 116.5c-28.9 0-52.5-23.6-52.5-52.5S35.1 11.5 64 11.5 116.5 35.1 116.5 64 92.9 116.5 64 116.5z"
      />
      <path
        fill="#fff"
        d="M64 11.5c-28.9 0-52.5 23.6-52.5 52.5S35.1 116.5 64 116.5 116.5 92.9 116.5 64 92.9 11.5 64 11.5zm0 94.5c-23.2 0-42-18.8-42-42s18.8-42 42-42 42 18.8 42 42-18.8 42-42 42z"
      />
    </svg>
  ),
  tailwindcss: () => (
    <svg
      width="100"
      height="100"
      viewBox="0 0 128 128"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill="#38B2AC"
        d="M64 0C28.7 0 0 28.7 0 64s28.7 64 64 64 64-28.7 64-64S99.3 0 64 0zm0 116.5c-28.9 0-52.5-23.6-52.5-52.5S35.1 11.5 64 11.5 116.5 35.1 116.5 64 92.9 116.5 64 116.5z"
      />
      <path
        fill="#fff"
        d="M64 11.5c-28.9 0-52.5 23.6-52.5 52.5S35.1 116.5 64 116.5 116.5 92.9 116.5 64 92.9 11.5 64 11.5zm0 94.5c-23.2 0-42-18.8-42-42s18.8-42 42-42 42 18.8 42 42-18.8 42-42 42z"
      />
    </svg>
  ),
}; 