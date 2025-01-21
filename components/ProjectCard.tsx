'use client';

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

interface ProjectCardProps {
  title: string;
  period: string;
  description: string;
  tags: string[];
  link: string;
}

export default function ProjectCard({ title, period, description, tags, link }: ProjectCardProps) {
  // Helper function to determine which icon to show for each technology
  const getIconForTech = (tech: string) => {
    const techLower = tech.toLowerCase();
    switch (techLower) {
      case 'laravel':
        return (
          <svg viewBox="0 0 24 24" className="h-4 w-4 text-[#FF2D20]">
            <path fill="currentColor" d="M23.642 5.43a.364.364 0 01.014.1v5.149c0 .135-.073.26-.189.326l-4.323 2.49v4.934a.378.378 0 01-.188.326L9.93 23.949a.316.316 0 01-.066.027c-.008.002-.016.008-.024.01a.348.348 0 01-.192 0c-.011-.002-.02-.008-.03-.012-.02-.008-.042-.014-.062-.025L.533 18.755a.376.376 0 01-.189-.326V2.974c0-.033.005-.066.014-.098.003-.012.01-.02.014-.032a.369.369 0 01.023-.058c.004-.013.015-.022.023-.033l.033-.045c.012-.01.025-.018.037-.027.014-.012.027-.024.041-.034L5.357.07a.363.363 0 01.364 0l4.828 2.785a.378.378 0 01.188.326v6.188l3.958-2.227-3.989-2.3a.378.378 0 01-.188-.326V2.974c0-.033.004-.066.014-.098.003-.012.01-.02.014-.032a.369.369 0 01.023-.058c.004-.013.015-.022.023-.033l.033-.045c.012-.01.025-.018.037-.027.014-.012.027-.024.041-.034L14.472.07a.363.363 0 01.364 0l4.828 2.785a.378.378 0 01.188.326v6.188l3.958-2.227"/>
          </svg>
        );
      case 'blade':
        return (
          <svg viewBox="0 0 24 24" className="h-4 w-4 text-[#F05340]">
            <path fill="currentColor" d="M20.77 11.044c.139-.558.139-1.116 0-1.674L18.285 1.9c-.139-.558-.417-1.116-.834-1.395-.417-.279-.973-.279-1.529-.279H8.077c-.556 0-1.112 0-1.529.28-.417.278-.695.836-.834 1.394L3.23 9.37c-.139.558-.139 1.116 0 1.674L5.714 18.51c.139.558.417 1.116.834 1.395.417.279.973.279 1.529.279h7.845c.556 0 1.112 0 1.529-.28.417-.278.695-.836.834-1.394l2.484-7.466zM12 16.308c-2.427 0-4.615-1.63-4.615-4.308s2.188-4.308 4.615-4.308c1.822 0 3.407.837 4.064 2.308H14.25c-.464-.558-1.205-.837-2.25-.837-1.532 0-2.59 1.116-2.59 2.837 0 1.72 1.058 2.837 2.59 2.837 1.045 0 1.786-.28 2.25-.837h1.814c-.657 1.47-2.242 2.308-4.064 2.308z"/>
          </svg>
        );
      case 'javascript':
        return (
          <svg viewBox="0 0 24 24" className="h-4 w-4 text-[#F7DF1E]">
            <path fill="currentColor" d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z"/>
          </svg>
        );
      case 'tailwind css':
        return (
          <svg viewBox="0 0 24 24" className="h-4 w-4 text-[#06B6D4]">
            <path fill="currentColor" d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624C16.337,6.182,14.976,4.8,12.001,4.8zM6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624C10.337,13.382,8.976,12,6.001,12z"/>
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <div className="group relative rounded-xl border border-zinc-200 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md dark:border-zinc-800 dark:bg-zinc-800/50">
      <div className="flex items-start justify-between">
        <div>
          <h3 className="text-xl font-light dark:text-white">{title}</h3>
          <p className="mt-1 text-sm text-zinc-500">{period}</p>
        </div>
        <Link 
          href={link}
          target="_blank"
          className="text-zinc-600 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 dark:text-zinc-400"
        >
          <ArrowUpRight />
        </Link>
      </div>
      <p className="mt-4 text-zinc-600 dark:text-zinc-400">{description}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span 
            key={tag}
            className="inline-flex items-center gap-1 rounded-full bg-zinc-100 px-3 py-1 text-sm text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400"
          >
            {getIconForTech(tag)}
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}