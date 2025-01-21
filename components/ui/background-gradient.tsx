"use client";
import React from "react";

export function BackgroundGradient() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Base gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-zinc-50 via-zinc-100 to-zinc-50 dark:from-zinc-900 dark:via-zinc-900 dark:to-zinc-800" />

      {/* Animated blobs */}
      <div className="absolute inset-0">
        <div 
          className="absolute top-1/4 left-1/4 h-96 w-96 animate-blob rounded-full bg-purple-200 opacity-50 mix-blend-multiply blur-xl dark:bg-purple-900/30 dark:mix-blend-overlay"
          style={{ animationDelay: "0s" }}
        />
        <div 
          className="absolute top-1/3 right-1/4 h-96 w-96 animate-blob rounded-full bg-emerald-200 opacity-50 mix-blend-multiply blur-xl dark:bg-emerald-900/30 dark:mix-blend-overlay"
          style={{ animationDelay: "-2s" }}
        />
        <div 
          className="absolute bottom-1/4 left-1/3 h-96 w-96 animate-blob rounded-full bg-blue-200 opacity-50 mix-blend-multiply blur-xl dark:bg-blue-900/30 dark:mix-blend-overlay"
          style={{ animationDelay: "-4s" }}
        />
      </div>

      {/* Gradient overlay to soften the effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-zinc-50/80 to-zinc-50/80 dark:via-zinc-900/80 dark:to-zinc-900/80" />
    </div>
  );
} 