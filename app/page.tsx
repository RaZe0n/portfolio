"use client";
import Link from "next/link";
import ProjectCard from "@/components/ProjectCard"; 
import { 
  ArrowUpRight, 
  Github, 
  Twitter, 
  Linkedin, 
  Code2, 
  Briefcase,
  Rocket,
  Cpu,
  Globe,
  Mail,
  Database,
  Container,
  Cloud,
  Boxes,
  ChevronRight
} from "lucide-react";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import { BackgroundVortex } from "@/components/ui/background-vortex";
import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import { Meteors } from "@/components/ui/meteors";
import AnimatedGradientText from "@/components/ui/animated-gradient-text";
import { cn } from "@/lib/utils";
import { Spotlight } from "@/components/ui/spotlight";
import { useInView } from "react-intersection-observer";
import { AnimatedBeam } from "@/components/ui/animated-beam";
import { AnimatedBeamDemo } from "@/components/ui/animated-beam-demo";
// Add this function before the Portfolio component
const getIconForTech = (tech: string) => {
  const techLower = tech.toLowerCase();
  switch (techLower) {
    case 'react':
      return (
        <svg viewBox="0 0 24 24" className="h-4 w-4 text-[#61DAFB]">
          <path fill="currentColor" d="M12 13.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z"/>
          <path fill="currentColor" d="M12 21.35c-1.3 0-2.557-.041-3.741-.124-1.104-.078-2.157-.207-3.127-.387a7.862 7.862 0 0 1-1.017-.27.644.644 0 0 1-.458-.57c-.037-.164.007-.331.123-.47.116-.14.29-.223.477-.231.187-.008.37.059.503.186.134.127.212.303.216.489 0 0 .017.127.178.233.195.129.577.27 1.182.403.891.196 2.052.353 3.441.457.03.002.06.002.089 0 2.72.201 5.45.201 8.17 0 .03.002.06.002.089 0 1.39-.104 2.55-.26 3.441-.457.605-.133.987-.274 1.182-.403.161-.106.178-.233.178-.233a.644.644 0 0 1 .216-.49c.134-.126.316-.193.503-.185.187.008.361.092.477.231.116.14.16.306.123.47a.644.644 0 0 1-.458.57c-.332.116-.67.208-1.017.27-.97.18-2.023.309-3.127.387-1.184.083-2.441.124-3.741.124Z"/>
          <path
            fill="currentColor"
            d="M12 21.35c-.905 0-1.795-.289-2.587-.953-.79-.663-1.466-1.71-2.004-3.02-.538-1.31-.914-2.87-1.119-4.589-.205-1.72-.23-3.578-.073-5.482.157-1.903.467-3.84.925-5.698.443-1.796.745-3.726.897-5.529.151-1.847.127-3.647.07-5.31.197-1.663.557-3.166 1.069-4.421.511-1.255 1.133-2.225 1.839-2.817.706-.592 1.444-.827 2.16.827.706.592 1.328 1.562 1.839 2.817.512 1.255.872 2.758 1.069 4.421.197 1.663.221 3.463.07 5.31-.152 1.846-.453 3.726-.897 5.529-.425 1.727-.975 3.384-1.645 4.857a2.074 2.074 0 0 0-.126.22.644.644 0 0 1 .275.87c.16.072.344.072.504 0 .16.073.28.208.33.375.688 1.541 1.26 3.265 1.702 5.061.458 1.858.768 3.795.925 5.698.157 1.904.132 3.762-.073 5.482-.205 1.719-.581 3.279-1.119 4.589-.538 1.31-1.214 2.357-2.004 3.02-.792.664-1.682.953-2.587.953Z"/>
        </svg>
      );
    case 'next.js':
      return (
        <svg viewBox="0 0 24 24" className="h-4 w-4">
          <path fill="currentColor" d="M11.572 0c-.176 0-.31.001-.358.007a19.76 19.76 0 0 1-.364.033C7.443.346 4.25 2.185 2.228 5.012a11.875 11.875 0 0 0-2.119 5.243c-.096.659-.108.854-.108 1.747s.012 1.089.108 1.748c.652 4.506 3.86 8.292 8.209 9.695.779.25 1.6.422 2.534.525.363.04 1.935.04 2.299 0 1.611-.178 2.977-.577 4.323-1.264.207-.106.247-.134.219-.158-.02-.013-.9-1.193-1.955-2.62l-1.919-2.592-2.404-3.558a338.739 338.739 0 0 0-2.422-3.556c-.009-.002-.018 1.579-.023 3.51-.007 3.38-.01 3.515-.052 3.595a.426.426 0 0 1-.206.214c-.075.037-.14.044-.495.044H7.81l-.108-.068a.438.438 0 0 1-.157-.171l-.05-.106.006-4.703.007-4.705.072-.092a.645.645 0 0 1 .174-.143c.096-.047.134-.051.5-.051.478 0 .558.018.682.154.035.038 1.337 1.999 2.895 4.361a10760.433 10760.433 0 0 0 4.735 7.17l1.9 2.879.096-.063a12.317 12.317 0 0 0 2.466-2.163 11.944 11.944 0 0 0 2.824-6.134c.096-.66.108-.854.108-1.748 0-.893-.012-1.088-.108-1.747-.652-4.506-3.859-8.292-8.208-9.695a12.597 12.597 0 0 0-2.499-.523A33.119 33.119 0 0 0 11.573 0zm4.069 7.217c.347 0 .408.005.486.047a.473.473 0 0 1 .237.277c.018.06.023 1.365.018 4.304l-.006 4.218-.744-1.14-.746-1.14v-3.066c0-1.982.01-3.097.023-3.15a.478.478 0 0 1 .233-.296c.096-.05.13-.054.5-.054z"/>
        </svg>
      );
    case 'laravel':
      return (
        <svg viewBox="0 0 24 24" className="h-4 w-4 text-[#FF2D20]">
          <path fill="currentColor" d="M23.642 5.43a.364.364 0 01.014.1v5.149c0 .135-.073.26-.189.326l-4.323 2.49v4.934a.378.378 0 01-.188.326L9.93 23.949a.316.316 0 01-.066.027c-.008.002-.016.008-.024.01a.348.348 0 01-.192 0c-.011-.002-.02-.008-.03-.012-.02-.008-.042-.014-.062-.025L.533 18.755a.376.376 0 01-.189-.326V2.974c0-.033.005-.066.014-.098.003-.012.01-.02.014-.032a.369.369 0 01.023-.058c.004-.013.015-.022.023-.033l.033-.045c.012-.01.025-.018.037-.027.014-.012.027-.024.041-.034L5.357.07a.363.363 0 01.364 0l4.828 2.785a.378.378 0 01.188.326v6.188l3.958-2.227-3.989-2.3a.378.378 0 01-.188-.326V2.974c0-.033.004-.066.014-.098.003-.012.01-.02.014-.032a.369.369 0 01.023-.058c.004-.013.015-.022.023-.033l.033-.045c.012-.01.025-.018.037-.027.014-.012.027-.024.041-.034L14.472.07a.363.363 0 01.364 0l4.828 2.785a.378.378 0 01.188.326v6.188l3.958-2.227"/>
        </svg>
      );
    case 'blade':
      return (
        <svg viewBox="0 0 24 24" className="h-4 w-4 text-[#F05340]">
          <path fill="currentColor" d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 15.308c-.697 1.247-2.255 1.586-3.475 1.586-.199 0-.387-.008-.567-.024-1.614-.136-3.02-.803-3.96-1.86-.869-.979-1.065-2.372-.166-3.153.901-.781 2.291-.891 3.434-.274 1.142.617 2.15 2.132 2.65 3.239.265.587.437 1.138.437 1.138l.087-.161c.062-.116.13-.235.2-.351a5.365 5.365 0 0 0 .477-1.063c.245-.761.38-1.73-.02-2.461a3.041 3.041 0 0 0-.626-.793c-.563-.562-1.305-.876-2.087-.876-1.877 0-3.235 1.522-3.235 3.242 0 1.719 1.358 3.241 3.235 3.241.876 0 1.68-.342 2.286-.904a.5.5 0 1 1 .708.708 4.084 4.084 0 0 1-2.994 1.196c-2.351 0-4.235-1.974-4.235-4.241 0-2.268 1.884-4.242 4.235-4.242 1.023 0 1.996.374 2.752 1.051.447.401.803.894 1.023 1.437.447 1.096.339 2.359.013 3.435-.065.215-.138.423-.217.623-.029.073-.06.146-.091.218z"/>
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
      return <Code2 className="h-4 w-4" />;
  }
};

export default function Portfolio() {
  return (
    <main className="min-h-screen bg-zinc-50 px-6 dark:bg-zinc-900">
      {/* Hero Section */}
      <section className="mx-auto max-w-3xl pt-32">
        <div className="mb-8 inline-flex animate-fade-in items-center rounded-full  py-1 text-sm  dark:bg-emerald-950/30 dark:text-emerald-400">
          <AnimatedGradientText>
        <span
          className={cn(
            `inline animate-gradient bg-gradient-to-r from-[#ffaa40] via-[#9c40ff] to-[#ffaa40] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent`,
          )}
        >
          Currently looking for an internship
        </span>
        <ChevronRight className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
      </AnimatedGradientText>
        </div>
        <h1 className="mb-4 animate-fade-in bg-gradient-to-r from-zinc-900 via-zinc-800 to-zinc-900 bg-clip-text text-4xl font-light text-transparent dark:from-white dark:via-zinc-300 dark:to-white md:text-5xl">
          Hi, I&apos;m Finn Bruinzeel{' '}
          <span className="animate-wave inline-block text-yellow-500">
            &#x1F44B;
          </span>
        </h1>
        <p className="mb-8 animate-fade-in text-lg text-zinc-600 dark:text-zinc-400">
          Student at Bit Academy, passionate about web development and design.  
        </p>
        <div className="flex gap-4">
          <SocialLink href="https://github.com" icon={<Github size={20} />} label="GitHub" />
          <SocialLink href="https://twitter.com" icon={<Twitter size={20} />} label="Twitter" />
          <SocialLink href="https://linkedin.com" icon={<Linkedin size={20} />} label="LinkedIn" />
          <SocialLink href="mailto:hello@example.com" icon={<Mail size={20} />} label="Email" />
        </div>
      </section>

      {/* About Section */}
      <section className="mx-auto max-w-3xl py-8">
        <SectionHeader icon={<Globe className="text-blue-500" />} title="About" />
        <p className="text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
          My approach to design focuses on creating intuitive and seamless user experiences, where every element serves a purpose, and every pixel tells a story.
        </p>
      </section>

      {/* Projects Section */}
      <section className="mx-auto max-w-3xl py-12">
        <SectionHeader icon={<Rocket className="text-orange-500" />} title="My Projects" />
        <p className="mb-8 text-zinc-600 dark:text-zinc-400">
          Check out some of my work down below
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <CardContainer key={i} className="inter-var">
              <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto h-auto rounded-xl p-6 border">
                <CardItem
                  translateZ="50"
                  className="text-xl font-bold text-neutral-600 dark:text-white"
                >
                  {project.title}
                </CardItem>
                <CardItem translateZ="100" className="w-full mt-4">
                  <Image
                    src={project.image}
                    height={400}
                    width={600}
                    className="w-full h-[200px] object-cover rounded-xl group-hover/card:shadow-xl bg-zinc-100 dark:bg-zinc-800"
                    alt={project.title}
                  />
                </CardItem>
                <CardItem
                  as="p"
                  translateZ="60"
                  className="text-neutral-500 text-sm mt-4 dark:text-neutral-300"
                >
                  {project.description}
                </CardItem>
                <CardItem
                  as="p"
                  translateZ="60"
                  className="text-neutral-500 text-sm mt-2 dark:text-neutral-400"
                >
                  {project.period}
                </CardItem>
                <CardItem translateZ="100" className="mt-4">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span 
                        key={tag}
                        className="inline-flex items-center gap-1 rounded-full bg-zinc-100 px-3 py-1 text-sm text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400"
                      >
                        {getIconForTech(tag)}
                        {tag}
                      </span>
                    ))}
                  </div>
                </CardItem>
                <div className="mt-8">
                  <CardItem
                    translateZ={20}
                    as={Link}
                    href={project.link}
                    target="_blank"
                    className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-sm font-bold"
                  >
                    View Project →
                  </CardItem>
                </div>
              </CardBody>
            </CardContainer>
          ))}
        </div>
      </section>

      {/* Work Experience */}
      <section className="mx-auto max-w-3xl py-12">
        <SectionHeader icon={<Briefcase className="text-purple-500" />} title="Work Experience / Education" />
        <div className="space-y-12">
          {experience.map((job, i) => (
            <ExperienceCard key={i} {...job} />
          ))}
        </div>
      </section>

      {/* Skills Section */}
      <section className="mx-auto max-w-3xl py-24">
        <SectionHeader icon={<Cpu className="text-emerald-500" />} title="Skills" />
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {skillsWithIcons.map((skill, i) => (
            <SkillBar key={i} skill={skill} />
          ))}
        </div>
      </section>
      
      <section></section>

      {/* Contact Section */}
      <section className="mx-auto max-w-3xl py-24">
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-zinc-800 to-black p-8 shadow-xl dark:from-zinc-900 dark:to-black md:p-12">
          <div className="relative z-10">
            <SectionHeader 
              icon={<Mail className="text-blue-400" />} 
              title="Get in Touch" 
              lightText={true}
            />
            <p className="mb-8 text-lg text-zinc-300">
              Text
            </p>
            <div className="flex flex-col gap-6 md:flex-row">
              <Link
                href="mailto:hello@example.com"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-3 text-sm font-medium text-zinc-900 shadow-lg transition-all hover:-translate-y-1 hover:shadow-xl"
              >
                <Mail size={18} />
                hello@example.com
              </Link>
              <Link
                href="/resume.pdf"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-zinc-800 px-6 py-3 text-sm font-medium text-white shadow-lg transition-all hover:-translate-y-1 hover:shadow-xl"
              >
                Download Resume
                <ArrowUpRight size={18} />
              </Link>
            </div>
          </div>

          {/* Decorative Elements */}
          <div className="absolute right-0 top-0 -translate-y-1/3 translate-x-1/3">
            <div className="h-96 w-96 rounded-full bg-blue-500 opacity-20 blur-3xl" />
          </div>
          <div className="absolute bottom-0 left-0 translate-y-1/3 -translate-x-1/3">
            <div className="h-96 w-96 rounded-full bg-purple-500 opacity-20 blur-3xl" />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="mx-auto max-w-3xl pb-12 text-center text-sm text-zinc-600 dark:text-zinc-400">
        <p>© {new Date().getFullYear()} Finn Bruinzeel. All rights reserved.</p>
        <p className="mt-2 flex items-center justify-center gap-2">
          Built with
          <span className="inline-flex items-center transition-transform hover:scale-110">
            <svg viewBox="0 0 24 24" className="h-5 w-5 text-[#61DAFB]">
              <path fill="currentColor" d="M12 13.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z"/>
              <path fill="currentColor" d="M12 21.35c-1.3 0-2.557-.041-3.741-.124-1.104-.078-2.157-.207-3.127-.387a7.862 7.862 0 0 1-1.017-.27.644.644 0 0 1-.458-.57c-.037-.164.007-.331.123-.47.116-.14.29-.223.477-.231.187-.008.37.059.503.186.134.127.212.303.216.489 0 0 .017.127.178.233.195.129.577.27 1.182.403.891.196 2.052.353 3.441.457.03.002.06.002.089 0 2.72.201 5.45.201 8.17 0 .03.002.06.002.089 0 1.39-.104 2.55-.26 3.441-.457.605-.133.987-.274 1.182-.403.161-.106.178-.233.178-.233a.644.644 0 0 1 .216-.49c.134-.126.316-.193.503-.185.187.008.361.092.477.231.116.14.16.306.123.47a.644.644 0 0 1-.458.57c-.332.116-.67.208-1.017.27-.97.18-2.023.309-3.127.387-1.184.083-2.441.124-3.741.124Z"/>
              <path
                fill="currentColor"
                d="M12 21.35c-.905 0-1.795-.289-2.587-.953-.79-.663-1.466-1.71-2.004-3.02-.538-1.31-.914-2.87-1.119-4.589-.205-1.72-.23-3.578-.073-5.482.157-1.903.467-3.84.925-5.698.443-1.796.745-3.726.897-5.529.151-1.847.127-3.647.07-5.31.197-1.663.557-3.166 1.069-4.421.511-1.255 1.133-2.225 1.839-2.817.706-.592 1.444-.827 2.16.827.706.592 1.328 1.562 1.839 2.817.512 1.255.872 2.758 1.069 4.421.197 1.663.221 3.463.07 5.31-.152 1.846-.453 3.726-.897 5.529-.425 1.727-.975 3.384-1.645 4.857a2.074 2.074 0 0 0-.126.22.644.644 0 0 1 .275.87c.16.072.344.072.504 0 .16.073.28.208.33.375.688 1.541 1.26 3.265 1.702 5.061.458 1.858.768 3.795.925 5.698.157 1.904.132 3.762-.073 5.482-.205 1.719-.581 3.279-1.119 4.589-.538 1.31-1.214 2.357-2.004 3.02-.792.664-1.682.953-2.587.953Z"/>
            </svg>
            <span className="ml-1 font-medium text-[#61DAFB]">React</span>
          </span>
          &
          <span className="inline-flex items-center transition-transform hover:scale-110">
            <svg viewBox="0 0 24 24" className="h-5 w-5">
              <path fill="currentColor" d="M11.572 0c-.176 0-.31.001-.358.007a19.76 19.76 0 0 1-.364.033C7.443.346 4.25 2.185 2.228 5.012a11.875 11.875 0 0 0-2.119 5.243c-.096.659-.108.854-.108 1.747s.012 1.089.108 1.748c.652 4.506 3.86 8.292 8.209 9.695.779.25 1.6.422 2.534.525.363.04 1.935.04 2.299 0 1.611-.178 2.977-.577 4.323-1.264.207-.106.247-.134.219-.158-.02-.013-.9-1.193-1.955-2.62l-1.919-2.592-2.404-3.558a338.739 338.739 0 0 0-2.422-3.556c-.009-.002-.018 1.579-.023 3.51-.007 3.38-.01 3.515-.052 3.595a.426.426 0 0 1-.206.214c-.075.037-.14.044-.495.044H7.81l-.108-.068a.438.438 0 0 1-.157-.171l-.05-.106.006-4.703.007-4.705.072-.092a.645.645 0 0 1 .174-.143c.096-.047.134-.051.5-.051.478 0 .558.018.682.154.035.038 1.337 1.999 2.895 4.361a10760.433 10760.433 0 0 0 4.735 7.17l1.9 2.879.096-.063a12.317 12.317 0 0 0 2.466-2.163 11.944 11.944 0 0 0 2.824-6.134c.096-.66.108-.854.108-1.748 0-.893-.012-1.088-.108-1.747-.652-4.506-3.859-8.292-8.208-9.695a12.597 12.597 0 0 0-2.499-.523A33.119 33.119 0 0 0 11.573 0zm4.069 7.217c.347 0 .408.005.486.047a.473.473 0 0 1 .237.277c.018.06.023 1.365.018 4.304l-.006 4.218-.744-1.14-.746-1.14v-3.066c0-1.982.01-3.097.023-3.15a.478.478 0 0 1 .233-.296c.096-.05.13-.054.5-.054z"/>
            </svg>
            <span className="ml-1 font-medium">Next.js</span>
          </span>
        </p>
      </footer>
    </main>
  );
}

function SectionHeader({ icon, title, lightText }: { 
  icon: React.ReactNode; 
  title: string;
  lightText?: boolean;
}) {
  return (
    <div className="mb-4 flex items-center gap-3">
      <div className={`rounded-xl p-2 ${
        lightText 
          ? 'bg-zinc-800/50' 
          : 'bg-white shadow-sm dark:bg-zinc-800'
      }`}>
        {icon}
      </div>
      <h2 className={`text-2xl font-light ${
        lightText 
          ? 'text-white' 
          : 'dark:text-white'
      }`}>
        {title}
      </h2>
    </div>
  );
}

function SocialLink({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) {
  return (
    <Link
      href={href}
      className="group flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-md dark:bg-zinc-800"
      target="_blank"
      aria-label={label}
    >
      <span className="text-zinc-600 transition-colors group-hover:text-zinc-900 dark:text-zinc-400 dark:group-hover:text-zinc-200">
        {icon}
      </span>
    </Link>
  );
}

function ExperienceCard({ company, role, period, description }: {
  company: string;
  role: string;
  period: string;
  description: string;
}) {
  // Helper function to determine which logo to show
  const getCompanyLogo = (company: string) => {
    if (company.toLowerCase().includes('bit academy')) {
      return (
        <div className="h-8 w-8 rounded-full bg-white p-1.5 shadow-sm">
          <svg viewBox="0 0 24 24" className="h-full w-full text-[#ffff20]">
            <path fill="currentColor" d="M6.494 3.619c-.176-.318-.493-.318-.67 0L2.747 8.234c-.176.318-.176.835 0 1.153l3.077 4.615c.176.318.493.318.67 0l3.077-4.615c.176-.318.176-.835 0-1.153L6.494 3.619zm6.67 0c-.177-.318-.494-.318-.67 0l-3.077 4.615c-.177.318-.177.835 0 1.153l3.076 4.615c.177.318.494.318.67 0l3.077-4.615c.176-.318.176-.835 0-1.153l-3.077-4.615zm6.67 0c-.177-.318-.494-.318-.67 0l-3.077 4.615c-.177.318-.177.835 0 1.153l3.076 4.615c.177.318.494.318.67 0l3.077-4.615c.176-.318.176-.835 0-1.153l-3.077-4.615z"/>
          </svg>
        </div>
      );
    } else if (company.toLowerCase().includes('alfa')) {
      return (
        <div className="h-8 w-8 rounded-full bg-white p-1.5 shadow-sm">
          <svg viewBox="0 0 24 24" className="h-full w-full text-[#E31837]">
            <path fill="currentColor" d="M12 2L2 7v10l10 5 10-5V7L12 2zm0 2.333L20 8l-8 4-8-4 8-3.667V4.333zM4 8.8v6.867L11.333 19v-6.8L4 8.8zm16 0l-7.333 3.4V19L20 15.667V8.8z"/>
          </svg>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="group relative rounded-xl border border-zinc-200 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md dark:border-zinc-800 dark:bg-zinc-800/50">
      <div className="flex items-start justify-between">
        <div>
          <h3 className="text-xl font-light dark:text-white">{role}</h3>
          <div className="mt-2 flex items-center gap-3">
            <p className="text-zinc-600 dark:text-zinc-400">{company}</p>
            {getCompanyLogo(company)}
          </div>
          <p className="mt-1 text-sm text-zinc-500">{period}</p>
        </div>
      </div>
      <p className="mt-4 text-zinc-600 dark:text-zinc-400">{description}</p>
    </div>
  );
}

function ProjectCardTest({ title, period, description, tags, link }: {
  title: string;
  period: string;
  description: string;
  tags: string[];
  link: string;
}) {
  const getIconForTech = (tech: string) => {
    const techLower = tech.toLowerCase();
    switch (techLower) {
      case 'react':
        return <Code2 className="h-4 w-4 text-[#61DAFB]" />;
      case 'next.js':
        return <Code2 className="h-4 w-4" />;
      case 'typescript':
        return <Code2 className="h-4 w-4 text-[#3178C6]" />;
      case 'laravel':
        return <Code2 className="h-4 w-4 text-[#FF2D20]" />;
      case 'blade':
        return <Code2 className="h-4 w-4 text-[#F05340]" />;
      case 'javascript':
        return <Code2 className="h-4 w-4 text-[#F7DF1E]" />;
      case 'tailwind css':
        return <Code2 className="h-4 w-4 text-[#06B6D4]" />;
      default:
        return <Code2 className="h-4 w-4" />;
    }
  };

  return (
    <Link 
      href={link}
      className="group block rounded-xl border border-zinc-200 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md dark:border-zinc-800 dark:bg-zinc-800/50"
      target="_blank"
    >
      <div className="flex items-start justify-between">
        <div>
          <h3 className="text-xl font-light dark:text-white">{title}</h3>
          <p className="mt-1 text-sm text-zinc-500">{period}</p>
        </div>
        <ArrowUpRight className="text-zinc-600 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 dark:text-zinc-400" />
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
    </Link>
  );
}

const experience = [
  {
    company: "Bit Academy (Noorderpoort)",
    role: "Student",
    period: "2024 - Present",
    description: "Bit Academy is a school for web development and design. I'm currently studying Full Stack Development and Design."
  },
  {
    company: "Software Developer (Alfa College)",
    role: "Student",
    period: "2019 - 2021",
    description: "Studied Software Development at Alfa College. Learned the basics of programming and software development. Did not finish the course."
  }
];

const projects = [
  {
    title: "SDG House Plein 17",
    period: "Oct 2024 - Present",
    description: "Landing page for a social development goals wewbiste, including user interfaces and a dashboard for the admin",
    tags: ["Laravel", "Blade", "JavaScript", "Tailwind CSS"],
    link: "https://github.com/AniekHulshof/sdg-plein17",
    image: "/img/image.png"
  },
  {
    title: "PMOT",
    period: "Oct 2024 - Present",
    description: "PMOT",
    tags: ["Laravel", "Blade", "JavaScript", "Tailwind CSS"],
    link: "https://github.com/AniekHulshof/sdg-plein17",
    image: "/img/pmot.png"
  },
  {
    title: "SDG House Plein 17",
    period: "Oct 2024 - Present",
    description: "Landing page for a social development goals wewbiste, including user interfaces and a dashboard for the admin",
    tags: ["Laravel", "Blade", "JavaScript", "Tailwind CSS"],
    link: "https://github.com/AniekHulshof/sdg-plein17",
    image: "/img/image.png"
  },
];

const skillsWithIcons = [
  {
    name: "React",
    proficiency: 90,
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5 text-[#61DAFB]">
        <path
          fill="currentColor"
          d="M12 13.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z"/>
        <path
          fill="currentColor"
          d="M12 21.35c-1.3 0-2.557-.041-3.741-.124-1.104-.078-2.157-.207-3.127-.387a7.862 7.862 0 0 1-1.017-.27.644.644 0 0 1-.458-.57c-.037-.164.007-.331.123-.47.116-.14.29-.223.477-.231.187-.008.37.059.503.186.134.127.212.303.216.489 0 0 .017.127.178.233.195.129.577.27 1.182.403.891.196 2.052.353 3.441.457.03.002.06.002.089 0 2.72.201 5.45.201 8.17 0 .03.002.06.002.089 0 1.39-.104 2.55-.26 3.441-.457.605-.133.987-.274 1.182-.403.161-.106.178-.233.178-.233a.644.644 0 0 1 .216-.49c.134-.126.316-.193.503-.185.187.008.361.092.477.231.116.14.16.306.123.47a.644.644 0 0 1-.458.57c-.332.116-.67.208-1.017.27-.97.18-2.023.309-3.127.387-1.184.083-2.441.124-3.741.124Z"/>
        <path
          fill="currentColor"
          d="M12 21.35c-.905 0-1.795-.289-2.587-.953-.79-.663-1.466-1.71-2.004-3.02-.538-1.31-.914-2.87-1.119-4.589-.205-1.72-.23-3.578-.073-5.482.157-1.903.467-3.84.925-5.698.443-1.796.745-3.726.897-5.529.151-1.847.127-3.647.07-5.31.197-1.663.557-3.166 1.069-4.421.511-1.255 1.133-2.225 1.839-2.817.706-.592 1.444-.827 2.16.827.706.592 1.328 1.562 1.839 2.817.512 1.255.872 2.758 1.069 4.421.197 1.663.221 3.463.07 5.31-.152 1.846-.453 3.726-.897 5.529-.425 1.727-.975 3.384-1.645 4.857a2.074 2.074 0 0 0-.126.22.644.644 0 0 1 .275.87c.16.072.344.072.504 0 .16.073.28.208.33.375.688 1.541 1.26 3.265 1.702 5.061.458 1.858.768 3.795.925 5.698.157 1.904.132 3.762-.073 5.482-.205 1.719-.581 3.279-1.119 4.589-.538 1.31-1.214 2.357-2.004 3.02-.792.664-1.682.953-2.587.953Z"/>
      </svg>
    )
  },
  {
    name: "HTML",
    proficiency: 60,
    icon: <Cloud className="h-5 w-5 text-orange-500" />
  },
  {
    name: "CSS",
    proficiency: 60,
    icon: <Cloud className="h-5 w-5 text-orange-500" />
  },
  {
    name: "Next.js",
    proficiency: 85,
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5">
        <path
          fill="currentColor"
          d="M11.572 0c-.176 0-.31.001-.358.007a19.76 19.76 0 0 1-.364.033C7.443.346 4.25 2.185 2.228 5.012a11.875 11.875 0 0 0-2.119 5.243c-.096.659-.108.854-.108 1.747s.012 1.089.108 1.748c.652 4.506 3.86 8.292 8.209 9.695.779.25 1.6.422 2.534.525.363.04 1.935.04 2.299 0 1.611-.178 2.977-.577 4.323-1.264.207-.106.247-.134.219-.158-.02-.013-.9-1.193-1.955-2.62l-1.919-2.592-2.404-3.558a338.739 338.739 0 0 0-2.422-3.556c-.009-.002-.018 1.579-.023 3.51-.007 3.38-.01 3.515-.052 3.595a.426.426 0 0 1-.206.214c-.075.037-.14.044-.495.044H7.81l-.108-.068a.438.438 0 0 1-.157-.171l-.05-.106.006-4.703.007-4.705.072-.092a.645.645 0 0 1 .174-.143c.096-.047.134-.051.5-.051.478 0 .558.018.682.154.035.038 1.337 1.999 2.895 4.361a10760.433 10760.433 0 0 0 4.735 7.17l1.9 2.879.096-.063a12.317 12.317 0 0 0 2.466-2.163 11.944 11.944 0 0 0 2.824-6.134c.096-.66.108-.854.108-1.748 0-.893-.012-1.088-.108-1.747-.652-4.506-3.859-8.292-8.208-9.695a12.597 12.597 0 0 0-2.499-.523A33.119 33.119 0 0 0 11.573 0zm4.069 7.217c.347 0 .408.005.486.047a.473.473 0 0 1 .237.277c.018.06.023 1.365.018 4.304l-.006 4.218-.744-1.14-.746-1.14v-3.066c0-1.982.01-3.097.023-3.15a.478.478 0 0 1 .233-.296c.096-.05.13-.054.5-.054z"
        />
      </svg>
    )
  },
  {
    name: "TypeScript",
    proficiency: 80,
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5 text-[#3178C6]">
        <path fill="currentColor" d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z"/>
      </svg>
    )
  },
  {
    name: "Node.js",
    proficiency: 75,
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5 text-[#339933]">
        <path
          fill="currentColor"
          d="M11.998,24c-0.321,0-0.641-0.084-0.922-0.247l-0.002,0.002C6.927,0.647,6.208,1.547,6.208,2.936v1.873h5.818v0.624H6.208H4.271c-1.397,0-2.619,0.825-3.002,2.4c-0.44,1.798-0.459,2.918,0,4.798c0.34,1.394,1.154,2.4,2.551,2.4h1.652v-2.164c0-1.563,1.379-2.939,3.002-2.939h5.816c1.336,0,2.408-1.085,2.408-2.408V2.936c0-1.284-1.106-2.249-2.408-2.465C13.335,0.276,12.727,0.002,11.751,0zM15.209,17.001c0.601,0,1.088,0.488,1.088,1.086c0,0.601-0.488,1.088-1.088,1.088c-0.599,0-1.086-0.488-1.086-1.088C14.123,17.488,14.61,17.001,15.209,17.001z"
        />
      </svg>
    )
  },
  {
    name: "Python",
    proficiency: 70,
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5">
        <path
          fill="#3776AB"
          d="M11.751,0c-0.975,0.002-1.916,0.089-2.741,0.235l-0.002,0.002C6.927,0.647,6.208,1.547,6.208,2.936v1.873h5.818v0.624H6.208H4.271c-1.397,0-2.619,0.825-3.002,2.4c-0.44,1.798-0.459,2.918,0,4.798c0.34,1.394,1.154,2.4,2.551,2.4h1.652v-2.164c0-1.563,1.379-2.939,3.002-2.939h5.816c1.336,0,2.408-1.085,2.408-2.408V2.936c0-1.284-1.106-2.249-2.408-2.465C13.335,0.276,12.727,0.002,11.751,0zM15.209,17.001c0.601,0,1.088,0.488,1.088,1.086c0,0.601-0.488,1.088-1.088,1.088c-0.599,0-1.086-0.488-1.086-1.088C14.123,17.488,14.61,17.001,15.209,17.001z"
        />
        <path
          fill="#FFC331"
          d="M17.618,5.433v2.164c0,1.576-1.365,2.939-3.002,2.939H8.801c-1.315,0-2.408,1.116-2.408,2.408v4.51c0,1.284,1.129,2.041,2.408,2.408c1.533,0,3.002,0.519,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624C16.337,13.382,14.976,12,12.001,12zM15.209,17.001c0.601,0,1.088,0.488,1.088,1.086c0,0.601-0.488,1.088-1.088,1.088c-0.599,0-1.086-0.488-1.086-1.088C14.123,17.488,14.61,17.001,15.209,17.001z"
        />
      </svg>
    )
  },
  {
    name: "PostgreSQL",
    proficiency: 75,
    icon: <Database className="h-5 w-5 text-blue-500" />
  },
  {
    name: "Docker",
    proficiency: 65,
    icon: <Container className="h-5 w-5 text-blue-500" />
  },
  {
    name: "AWS",
    proficiency: 60,
    icon: <Cloud className="h-5 w-5 text-orange-500" />
  },
  {
    name: "Laravel",
    proficiency: 60,
    icon: <Cloud className="h-5 w-5 text-orange-500" />
  },
  {
    name: "Blade",
    proficiency: 60,
    icon: <Cloud className="h-5 w-5 text-orange-500" />
  },
  {
    name: "TailwindCSS",
    proficiency: 95,
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5 text-[#06B6D4]">
        <path
          fill="currentColor"
          d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624C16.337,6.182,14.976,4.8,12.001,4.8zM6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624C10.337,13.382,8.976,12,6.001,12z"
        />
      </svg>
    )
  },
  {
    name: "GraphQL",
    proficiency: 70,
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5 text-[#E10098]">
        <path
          fill="currentColor"
          d="M12,1.3l-1.4,0.8L3.8,6.9L2.4,7.7v8.6l1.4,0.8l6.8,4l1.4,0.8l1.4-0.8l6.8-4l1.4-0.8V7.7l-1.4-0.8L13.4,2.1L12,1.3z M12,3.1 l6,3.5v6.8l-6,3.5l-6-3.5v-6.8L12,3.1z"
        />
        <circle fill="currentColor" cx="12" cy="2.5" r="1.5"/>
        <circle fill="currentColor" cx="12" cy="21.5" r="1.5"/>
        <circle fill="currentColor" cx="21.5" cy="12" r="1.5"/>
        <circle fill="currentColor" cx="2.5" cy="12" r="1.5"/>
        <circle fill="currentColor" cx="18.5" cy="18.5" r="1.5"/>
        <circle fill="currentColor" cx="5.5" cy="5.5" r="1.5"/>
        <circle fill="currentColor" cx="18.5" cy="5.5" r="1.5"/>
        <circle fill="currentColor" cx="5.5" cy="18.5" r="1.5"/>
      </svg>
    )
  }
];

const SkillBar = ({ skill }: { skill: typeof skillsWithIcons[0] }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <div
      ref={ref}
      className="flex flex-col gap-2 rounded-xl border border-zinc-200 bg-white p-4 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md dark:border-zinc-800 dark:bg-zinc-800/50"
    >
      <div className="flex items-center gap-3">
        {skill.icon}
        <span className="text-sm text-zinc-600 dark:text-zinc-400">
          {skill.name}
        </span>
      </div>
      <div className="h-2 w-full overflow-hidden rounded-full bg-zinc-100 dark:bg-zinc-700">
        <div 
          className={cn(
            "h-full rounded-full bg-emerald-500 transition-all duration-1000",
            inView ? "animate-slide-width" : "w-0"
          )}
          style={{ '--width': `${skill.proficiency}%` } as React.CSSProperties}
        />
      </div>
      <span className="text-xs text-zinc-500 dark:text-zinc-500">
        {skill.proficiency}%
      </span>
    </div>
  );
};
