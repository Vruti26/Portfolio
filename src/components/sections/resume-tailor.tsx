'use client';

import { useRef } from 'react';
import { BrainCircuit } from 'lucide-react';
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
      gsap.from('.ai-tailor-content', {
        scrollTrigger: {
          trigger: container.current,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
        opacity: 0,
        y: 50,
        duration: 1,
        ease: 'power3.out',
      });
    },
    { scope: container }
  );

  return (
    <section id="ai-tailor" className="w-full py-20 bg-secondary" ref={container}>
      <div className="container max-w-4xl mx-auto">
        <div className="ai-tailor-content text-center mb-12">
          <div className="flex justify-center items-center gap-3 text-primary mb-4">
            <BrainCircuit className="w-10 h-10" />
            <h2 className="font-headline text-4xl md:text-5xl font-bold">AI Resume Tailor</h2>
          </div>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            Harness the power of AI to stand out. Paste a job description below, and I&apos;ll generate a tailored list of project highlights from my portfolio that best match the role.
          </p>
        </div>
        <div className="ai-tailor-content">
          <ResumeTailorForm projectPortfolio={projectPortfolio} />
        </div>
      </div>
    </section>
  );
}
