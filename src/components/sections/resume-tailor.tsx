'use client';

import { useRef } from 'react';
import { BrainCircuit, TerminalSquare } from 'lucide-react';
import { ResumeTailorForm } from '@/components/resume-tailor-form';
import { portfolioData } from '@/lib/data';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function ResumeTailor() {
  const projectPortfolio = portfolioData.projects
    .map(p => `- ${p.title}: ${p.description}`)
    .join('\n');
    
  const container = useRef(null);

  useGSAP(
    () => {
      gsap.from('.ai-header', {
        scrollTrigger: {
          trigger: container.current,
          start: 'top 80%',
        },
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: 'power3.out',
      });

      gsap.from('.terminal-window', {
        scrollTrigger: {
          trigger: '.terminal-window',
          start: 'top 85%',
        },
        opacity: 0,
        scale: 0.95,
        y: 30,
        duration: 0.8,
        delay: 0.2,
        ease: 'back.out(1.7)',
      });
    },
    { scope: container }
  );

  return (
    <section id="ai-tailor" className="w-full py-20 bg-[#0f172a] text-slate-200" ref={container}>
      <div className="container px-4 md:px-6 max-w-5xl mx-auto">
        
        {/* Section Header */}
        <div className="ai-header flex flex-col items-center text-center mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-3 rounded-xl bg-purple-500/10 border border-purple-500/30">
              <BrainCircuit className="w-8 h-8 text-purple-400" />
            </div>
          </div>
          
          <h2 className="font-mono text-3xl md:text-4xl font-bold flex gap-2 mb-4">
            <span className="text-purple-400">&lt;</span>
            <span className="text-cyan-400">AI_Resume_Tailor</span>
            <span className="text-purple-400">/&gt;</span>
          </h2>
          
          <p className="text-lg text-slate-400 max-w-2xl leading-relaxed">
            Harness the power of AI to stand out. Paste a job description below, and I&apos;ll generate a 
            <span className="text-cyan-400"> JSON-formatted list</span> of project highlights from my portfolio that best match the role.
          </p>
        </div>

        {/* Terminal Window Container */}
        <div className="terminal-window relative rounded-xl border border-slate-700 bg-[#1e293b] shadow-2xl overflow-hidden">
          
          {/* Terminal Title Bar */}
          <div className="flex items-center justify-between px-4 py-3 bg-[#020617] border-b border-slate-700">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
              <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
            </div>
            <div className="flex items-center gap-2 text-xs text-slate-500 font-mono">
              <TerminalSquare className="w-3 h-3" />
              <span>resume-optimizer.sh</span>
            </div>
            <div className="w-12"></div> {/* Spacer for alignment */}
          </div>

          {/* Terminal Content (The Form) */}
          <div className="p-6 md:p-8 bg-[#1e293b]">
            {/* Note: You may need to style the inputs inside ResumeTailorForm 
               to match the dark theme (bg-[#0f172a], border-slate-700, text-slate-200)
            */}
            <ResumeTailorForm projectPortfolio={projectPortfolio} />
          </div>

          {/* Decorative Glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-50 blur-sm"></div>
        </div>

      </div>
    </section>
  );
}