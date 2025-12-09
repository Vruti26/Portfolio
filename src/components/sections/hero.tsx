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
    <div id="about" className="relative h-screen" ref={container}>
      {heroBg && (
        <Parallax
          bgImage={heroBg.imageUrl}
          bgImageAlt="abstract background"
          strength={isMobile ? 100 : 300}
          className="h-full"
        >
          <div className="absolute inset-0 bg-black/60" />
        </Parallax>
      )}
      <div className="container absolute inset-0 z-10 flex h-full items-center justify-center text-white pt-[100px]">
        <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="flex flex-col gap-8 items-center md:items-start text-center md:text-left">
              <h1 className="hero-name font-headline text-5xl md:text-7xl font-bold text-white tracking-tighter">
                {portfolioData.personalInfo.name}
              </h1>
              <p className="hero-title text-xl md:text-2xl text-primary-foreground font-medium">
                {portfolioData.personalInfo.title}
              </p>
              <p className="hero-bio text-lg text-primary-foreground/90 leading-relaxed max-w-lg">
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
                <div className="relative w-[300px] h-[300px] md:w-[400px] md:h-[400px] group">
                  <svg
                    className="absolute inset-0 w-full h-full"
                    viewBox="0 0 400 400"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <defs>
                      <clipPath id="blob-path">
                        <path d="M356.5,230.5Q342,311,271,349.5Q200,388,127,356.5Q54,325,43,242.5Q32,160,88,96.5Q144,33,222,41.5Q300,50,341.5,125Q383,200,356.5,230.5Z" />
                      </clipPath>
                    </defs>
                  </svg>
                  <Image
                    src={headshot.imageUrl}
                    alt={headshot.description}
                    width={400}
                    height={400}
                    priority
                    className="relative object-cover w-full h-full shadow-2xl transition-transform duration-500 group-hover:scale-105"
                    style={{ clipPath: 'url(#blob-path)' }}
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
