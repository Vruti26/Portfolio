'use client';

import { useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Github, Linkedin, Codepen } from 'lucide-react';
import { portfolioData } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button } from '@/components/ui/button';
import { Parallax } from 'react-parallax';
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
  const [isMobile, setIsMobile] = useState(false);
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

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div id="about" className="relative h-[110vh] overflow-hidden" ref={container}>
      {heroBg && (
        <Parallax
          bgImage={heroBg.imageUrl}
          bgImageAlt="abstract background"
          strength={isMobile ? 100 : 400}
          className="h-full"
        >
          <div className="absolute inset-0 bg-black/70" />
        </Parallax>
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
                <div className="relative w-[320px] h-[320px] md:w-[420px] md:h-[420px] group">
                   <svg
                    className="absolute inset-0 w-full h-full text-primary/20 transform -translate-x-4 -translate-y-4 transition-transform duration-500 group-hover:rotate-12 group-hover:scale-110"
                    viewBox="0 0 100 100"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                  >  <filter id="vignetteFilter" x="-50%" y="-50%" width="200%" height="200%">
                    <path d="M50,0C77.6,0,100,22.4,100,50S77.6,100,50,100,0,77.6,0,50,22.4,0,50,0Z" transform="scale(0.95) translate(2, 2)"/>
                    </filter>
                    
                  </svg>
                 
                  <Image
                    src={headshot.imageUrl}
                    alt={headshot.description}
                    width={420}
                    height={420}
                    priority
                    className="relative object-cover w-full h-full rounded-full shadow-2xl transition-transform duration-500 group-hover:scale-105"
                    data-ai-hint={headshot.imageHint}
                  />
                </div>
              )}
            </div>
          </div>
      </div>
    </div>
  );
}
