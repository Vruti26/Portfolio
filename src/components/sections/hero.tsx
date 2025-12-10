
'use client';

import { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Github, Linkedin, Codepen } from 'lucide-react';
import { portfolioData } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button } from '@/components/ui/button';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const iconMap = {
  GitHub: Github,
  LinkedIn: Linkedin,
  CodePen: Codepen,
};

export function HeroSection() {
  const headshot = PlaceHolderImages.find(img => img.id === portfolioData.personalInfo.headshotImage);
  const heroBg = PlaceHolderImages.find(img => img.id === 'hero-bg');
  const container = useRef(null);

  useGSAP(
    () => {
      gsap.from('.hero-name', {
        duration: 1,
        y: 50,
        opacity: 0,
        ease: 'power3.out',
        delay: 0.2,
      });
      gsap.from('.hero-title', {
        duration: 1,
        y: 50,
        opacity: 0,
        ease: 'power3.out',
        delay: 0.4,
      });
      gsap.from('.hero-bio', {
        duration: 1,
        y: 50,
        opacity: 0,
        ease: 'power3.out',
        delay: 0.6,
      });
      gsap.from('.hero-buttons', {
        duration: 1,
        y: 50,
        opacity: 0,
        ease: 'power3.out',
        delay: 0.8,
      });
      gsap.from('.hero-image', {
        duration: 1.2,
        scale: 0.9,
        opacity: 0,
        ease: 'power3.out',
        delay: 1,
      });
    },
    { scope: container }
  );

  return (
    <div id="about" className="relative h-[100vh] overflow-hidden" ref={container}>
      {heroBg && (
        <>
          <Image
            src={heroBg.imageUrl}
            alt="abstract background"
            fill
            className="object-cover"
            priority
            data-ai-hint={heroBg.imageHint}
          />
          <div className="absolute inset-0 bg-black/70" />
        </>
      )}
      <div className="container absolute inset-0 z-10 flex h-full items-center justify-center pt-[140px] md:pt-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="flex flex-col gap-8 items-center md:items-start text-center md:text-left">
              <h1 className="hero-name font-headline text-5xl md:text-7xl font-bold text-white tracking-tighter">
                {portfolioData.personalInfo.name}
              </h1>
              <p className="hero-title text-xl md:text-2xl text-primary-foreground font-medium">
                {portfolioData.personalInfo.title}
              </p>
              <p className="hero-bio text-lg text-primary-foreground/90 leading-relaxed max-w-lg text-justify">
                {portfolioData.personalInfo.bio}
              </p>
              <div className="hero-buttons flex flex-col sm:flex-row items-center gap-4 mt-4">
                <Button size="lg" asChild>
                  <Link href="#projects">View My Work</Link>
                </Button>
                <div className="flex items-center gap-4">
                  {portfolioData.socialLinks.map((link) => {
                    const Icon = iconMap[link.name];
                    return (
                      <Link
                        href={link.url}
                        key={link.name}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={link.name}
                        className="text-white hover:text-primary-foreground transition-colors"
                      >
                        <Icon className="w-6 h-6" />
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>
          
            <div className="hero-image relative flex justify-center items-center">
              {headshot && (
               
                 
                  <Image
                    src={headshot.imageUrl}
                    alt={headshot.description}
                    width={200}
                    height={100}
                    priority
                    className="relative object-cover w-[300px] h-[300px] rounded-full shadow-2xl transition-transform duration-500 group-hover:scale-205"
                    data-ai-hint={headshot.imageHint}
                  />
               
              )}
            </div>
          </div>
      </div>
    </div>
  );
}
