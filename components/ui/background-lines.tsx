"use client";
import React from "react";

export function BackgroundLines() {
  return (
    <div className="absolute inset-0 -z-10">
      {/* Vertical lines */}
      <div className="absolute inset-0 flex justify-around">
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className="h-full w-px bg-gradient-to-b from-transparent via-zinc-500/10 to-transparent"
          />
        ))}
      </div>

      {/* Horizontal lines */}
      <div className="absolute inset-0 flex flex-col justify-around">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="w-full h-px bg-gradient-to-r from-transparent via-zinc-500/10 to-transparent"
          />
        ))}
      </div>

      {/* Radial gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-zinc-50/50 via-zinc-50/95 to-zinc-50/50 dark:from-zinc-900/50 dark:via-zinc-900/95 dark:to-zinc-900/50" />
    </div>
  );
}
