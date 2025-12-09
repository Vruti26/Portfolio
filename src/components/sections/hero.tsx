'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Github, Linkedin, Codepen } from 'lucide-react';
import { portfolioData } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button } from '@/components/ui/button';
import { Parallax } from 'react-parallax';

const iconMap = {
  GitHub: Github,
  LinkedIn: Linkedin,
  CodePen: Codepen,
};

export function HeroSection() {
  const headshot = PlaceHolderImages.find(img => img.id === portfolioData.personalInfo.headshotImage);
  const heroBg = PlaceHolderImages.find(img => img.id === 'hero-bg');

  return (
    <div id="about" className="relative">
      <Parallax
          blur={{ min: -15, max: 15 }}
          bgImage={heroBg?.imageUrl || ''}
          bgImageAlt={heroBg?.description || ''}
          strength={-200}
          className="h-screen"
      >
        <div className="absolute inset-0 bg-black/50" />
      </Parallax>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="container grid md:grid-cols-2 gap-12 items-center text-white">
          <div className="flex flex-col gap-6 items-start text-left bg-black/30 backdrop-blur-sm p-8 rounded-lg">
            <h1 className="font-headline text-5xl md:text-7xl font-bold text-white tracking-tighter">
              {portfolioData.personalInfo.name}
            </h1>
            <p className="text-xl md:text-2xl text-slate-200 font-medium">
              {portfolioData.personalInfo.title}
            </p>
            <p className="text-lg text-slate-300 leading-relaxed">
              {portfolioData.personalInfo.bio}
            </p>
            <div className="flex items-center gap-4 mt-4">
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
                      className="text-slate-300 hover:text-white transition-colors"
                    >
                      <Icon className="w-6 h-6" />
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="relative hidden md:flex justify-center items-center">
            {headshot && (
              <div className="relative w-[300px] h-[300px] md:w-[400px] md:h-[400px] group">
                <div className="absolute inset-0 bg-primary/70 rounded-full transform transition-transform duration-500 group-hover:scale-105" />
                <Image
                  src={headshot.imageUrl}
                  alt={headshot.description}
                  width={400}
                  height={400}
                  priority
                  className="relative rounded-full object-cover border-8 border-background/50 shadow-2xl transform transition-transform duration-500 group-hover:scale-105"
                  data-ai-hint={headshot.imageHint}
                />
                 <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-accent/70 rounded-full opacity-70 transform transition-transform duration-500 group-hover:scale-110 group-hover:rotate-12" />
                 <div className="absolute -top-4 -left-4 w-16 h-16 bg-secondary/70 rounded-full opacity-70 transform transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-12" />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
