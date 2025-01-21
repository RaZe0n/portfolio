"use client";

import React from "react";

interface IconCloudProps {
  images: string[];
}

export function IconCloud({ images }: IconCloudProps) {
  return (
    <div className="flex flex-wrap justify-center">
      {images.map((src, index) => (
        <img
          key={index}
          src={src}
          alt={`Icon for ${src}`}
          className="h-12 w-12 m-2 transition-transform duration-300 hover:scale-110"
        />
      ))}
    </div>
  );
}
