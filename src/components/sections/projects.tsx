'use client';

import { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ExternalLink, Github, Folder } from 'lucide-react';
import { portfolioData } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function ProjectsSection() {
  const container = useRef(null);

  useGSAP(
    () => {
      gsap.fromTo(
        '.project-card',
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.2,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: container.current,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      );
      
      // Animate Section Header
      gsap.fromTo(
        '.section-header',
        { opacity: 0, x: -50 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          scrollTrigger: {
            trigger: container.current,
            start: 'top 85%',
          }
        }
      );
    },
    { scope: container }
  );

  return (
    <section id="projects" className="w-full py-20 bg-[#0f172a] text-slate-200" ref={container}>
      <div className="container px-4 md:px-6">
        
        {/* Section Header */}
        <div className="section-header flex items-center gap-4 mb-16 max-w-6xl mx-auto">
          <span className="font-mono text-purple-400 text-xl font-bold">02</span>
          <h2 className="font-mono text-3xl md:text-4xl font-bold flex gap-2">
            <span className="text-purple-400">&lt;</span>
            <span className="text-cyan-400">Projects</span>
            <span className="text-purple-400">/&gt;</span>
          </h2>
          <div className="h-[1px] bg-gradient-to-r from-purple-500/50 to-transparent flex-1 ml-4"></div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {portfolioData.projects.map((project, index) => {
            const projectImage = PlaceHolderImages.find(img => img.id === project.image);
            
            return (
              <div 
                key={index} 
                className="project-card group relative flex flex-col overflow-hidden rounded-2xl border border-slate-800 bg-[#1e293b] transition-all duration-300 hover:-translate-y-2 hover:border-purple-500 hover:shadow-[0_15px_30px_rgba(0,0,0,0.4)]"
              >
                {/* Image Area with Overlay */}
                <div className="relative h-56 w-full overflow-hidden bg-[#020617]">
                  {projectImage ? (
                    <Image
                      src={projectImage.imageUrl}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110 group-hover:opacity-40"
                      data-ai-hint={projectImage.imageHint}
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center text-slate-700">
                        <Folder size={64} />
                    </div>
                  )}
                  
                  {/* Hover Overlay with Links */}
                  <div className="absolute inset-0 flex items-center justify-center gap-6 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    {project.liveSiteUrl && (
                      <Link 
                        href={project.liveSiteUrl} 
                        target="_blank"
                        className="flex h-12 w-12 items-center justify-center rounded-full bg-purple-500 text-white shadow-lg transition-transform hover:scale-110 hover:bg-cyan-400"
                        title="View Live Site"
                      >
                        <ExternalLink size={20} />
                      </Link>
                    )}
                    {project.repositoryUrl && (
                      <Link 
                        href={project.repositoryUrl} 
                        target="_blank"
                        className="flex h-12 w-12 items-center justify-center rounded-full bg-slate-800 text-white border border-slate-600 shadow-lg transition-transform hover:scale-110 hover:border-purple-500"
                        title="View Code"
                      >
                        <Github size={20} />
                      </Link>
                    )}
                  </div>
                </div>

                {/* Content Area */}
                <div className="flex flex-grow flex-col p-6">
                  <h3 className="mb-2 font-mono text-xl font-bold text-cyan-400 group-hover:text-purple-400 transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="mb-6 text-sm leading-relaxed text-slate-400 flex-grow">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tags.map(tag => (
                      <span 
                        key={tag} 
                        className="rounded-md border border-slate-700 bg-[#0f172a] px-3 py-1 font-mono text-xs text-purple-400"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}