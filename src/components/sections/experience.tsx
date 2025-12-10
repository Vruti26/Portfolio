'use client';

import { useRef } from 'react';
import { portfolioData } from '@/lib/data';
import { Briefcase } from 'lucide-react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function ExperienceSection() {
  const container = useRef(null);

  useGSAP(
    () => {
      gsap.from('.timeline-item', {
        scrollTrigger: {
          trigger: container.current,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
        opacity: 0,
        x: (index) => (index % 2 === 0 ? -100 : 100),
        stagger: 0.3,
        duration: 0.8,
        ease: 'power3.out',
      });
    },
    { scope: container }
  );

  return (
    <section id="experience" className="w-full py-20 bg-secondary overflow-hidden" ref={container}>
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="font-headline text-4xl md:text-5xl font-bold text-primary">My Professional Journey</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            A timeline of my career growth, roles, and accomplishments.
          </p>
        </div>
        <div className="relative">
          <div className="absolute left-1/2 -translate-x-1/2 w-0.5 h-full bg-border" aria-hidden="true" />
          <div className="relative flex flex-col gap-12">
            {portfolioData.experience.map((item, index) => (
              <div key={index} className="timeline-item flex justify-center items-center">
                <div className="relative w-full max-w-4xl flex items-center" style={{
                  flexDirection: index % 2 === 0 ? 'row' : 'row-reverse'
                }}>
                  <div className="w-1/2 px-4" />
                  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                    <div className="z-10 flex items-center justify-center w-12 h-12 rounded-full bg-primary text-primary-foreground shadow-lg">
                      <Briefcase className="w-6 h-6" />
                    </div>
                  </div>
                  <div className="w-1/2 px-4">
                    <div className="bg-background p-6 rounded-lg shadow-md border" style={{
                       textAlign: index % 2 === 0 ? 'left' : 'right'
                    }}>
                      <p className="text-sm font-semibold text-primary">{item.period}</p>
                      <h3 className="text-xl font-bold font-headline mt-1">{item.role}</h3>
                      <p className="text-md font-semibold text-muted-foreground">{item.company}</p>
                      <ul className="mt-4 space-y-2 text-muted-foreground list-disc list-inside text-left">
                        {item.description.map((point, i) => (
                          <li key={i}>{point}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
