'use client';

import { useRef } from 'react';
import { portfolioData } from '@/lib/data';
import { Briefcase, Calendar, Building2 } from 'lucide-react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function ExperienceSection() {
  const container = useRef(null);

  useGSAP(
    () => {
      // Header Animation
      gsap.fromTo(
        '.section-header',
        { opacity: 0, x: -30 },
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

      // Timeline Line Animation
      gsap.fromTo(
        '.timeline-line',
        { scaleY: 0 },
        {
          scaleY: 1,
          duration: 1.5,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: container.current,
            start: 'top 60%',
          }
        }
      );

      // Items Animation
      gsap.from('.timeline-item', {
        scrollTrigger: {
          trigger: container.current,
          start: 'top 70%',
          toggleActions: 'play none none none',
        },
        opacity: 0,
        x: (index) => (index % 2 === 0 ? -50 : 50),
        stagger: 0.3,
        duration: 0.8,
        ease: 'power3.out',
      });
    },
    { scope: container }
  );

  return (
    <section id="experience" className="w-full py-20 bg-[#0f172a] text-slate-200 overflow-hidden" ref={container}>
      <div className="container px-4 md:px-6">
        
        {/* Section Header */}
        <div className="section-header flex items-center gap-4 mb-20 max-w-6xl mx-auto">
          <span className="font-mono text-purple-400 text-xl font-bold">04</span>
          <h2 className="font-mono text-3xl md:text-4xl font-bold flex gap-2">
            <span className="text-purple-400">&lt;</span>
            <span className="text-cyan-400">Experience</span>
            <span className="text-purple-400">/&gt;</span>
          </h2>
          <div className="h-[1px] bg-gradient-to-r from-purple-500/50 to-transparent flex-1 ml-4"></div>
        </div>

        {/* Timeline Container */}
        <div className="relative max-w-5xl mx-auto">
          
          {/* Central Line */}
          <div className="timeline-line absolute left-0 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-purple-500 via-cyan-500 to-transparent md:-translate-x-1/2 origin-top ml-4 md:ml-0" aria-hidden="true" />
          
          <div className="relative flex flex-col gap-12 md:gap-20">
            {portfolioData.experience.map((item, index) => (
              <div 
                key={index} 
                className={`timeline-item flex flex-col md:flex-row items-start md:items-center w-full ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                
                {/* Content Side */}
                <div className="w-full md:w-1/2 pl-12 md:pl-0 md:px-8">
                  <div className={`relative bg-[#1e293b] p-6 rounded-2xl border border-slate-700 shadow-xl transition-all hover:border-purple-500 hover:shadow-[0_10px_30px_rgba(0,0,0,0.3)] group text-left ${index % 2 !== 0 && 'md:text-right'}`}>
                    
                    {/* Header */}
                    <div className={`flex flex-col gap-2 mb-4 ${index % 2 !== 0 ? 'md:items-end' : 'md:items-start'}`}>
                      <div className="inline-flex items-center gap-2 rounded-full bg-purple-500/10 px-3 py-1 text-xs font-medium text-purple-300 border border-purple-500/20">
                        <Calendar className="w-3 h-3" />
                        {item.period}
                      </div>
                      <h3 className="text-xl font-bold text-slate-100 group-hover:text-cyan-400 transition-colors">
                        {item.role}
                      </h3>
                      <div className={`flex items-center gap-2 text-slate-400 font-mono text-sm ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
                        <Building2 className="w-4 h-4" />
                        {item.company}
                      </div>
                    </div>

                    {/* Description List */}
                    <ul className={`space-y-2 text-slate-400 text-sm leading-relaxed ${index % 2 !== 0 ? 'md:text-right' : 'md:text-left'}`}>
                      {item.description.map((point, i) => (
                        <li key={i} className={`flex items-start gap-2 ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-500" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Mobile-only connector line helper */}
                    <div className="absolute top-8 -left-12 w-8 h-[2px] bg-slate-700 md:hidden" />
                  </div>
                </div>

                {/* Center Marker */}
                <div className="absolute left-4 md:left-1/2 -translate-x-1/2 flex items-center justify-center">
                  <div className="relative flex items-center justify-center w-8 h-8 rounded-full bg-[#0f172a] border-2 border-purple-500 z-10 shadow-[0_0_15px_rgba(168,85,247,0.5)]">
                    <div className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse" />
                  </div>
                </div>

                {/* Empty Side (Spacer for Desktop) */}
                <div className="hidden md:block w-1/2" />
                
              </div>
            ))}
          </div>
        </div>
        
      </div>
    </section>
  );
}