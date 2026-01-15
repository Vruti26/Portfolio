'use client';

import { useRef, useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Github, Linkedin, Codepen, Mail, ArrowRight, Code2, Database, FileCode2, Terminal } from 'lucide-react';
import { portfolioData } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button } from '@/components/ui/button';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const iconMap: Record<string, any> = {
  GitHub: Github,
  LinkedIn: Linkedin,
  CodePen: Codepen,
  Email: Mail
};

interface Particle {
  id: number;
  text: string;
  left: number;
  duration: number;
  delay: number;
}

export function HeroSection() {
  const headshot = PlaceHolderImages.find(img => img.id === portfolioData.personalInfo.headshotImage);
  const container = useRef(null);
  
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    const codeSymbols = ['{', '}', '</>', '01', '&&', '||', ';', '*', '=>'];
    const newParticles = Array.from({ length: 15 }).map((_, i) => ({
      id: i,
      text: codeSymbols[Math.floor(Math.random() * codeSymbols.length)],
      left: Math.random() * 100,
      duration: 10 + Math.random() * 10,
      delay: Math.random() * 5
    }));
    setParticles(newParticles);
  }, []);

  useGSAP(
    () => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.from('.hero-greeting', { y: 20, opacity: 0, duration: 0.8, delay: 0.2 })
        .from('.hero-name-line', { y: 20, opacity: 0, duration: 0.8 }, '-=0.6')
        .from('.hero-title-line', { x: -30, opacity: 0, duration: 0.8 }, '-=0.6')
        .from('.hero-bio', { y: 20, opacity: 0, duration: 0.8 }, '-=0.6')
        .from('.hero-buttons', { scale: 0.9, opacity: 0, duration: 0.8 }, '-=0.6')
        .from('.social-icon', { y: 20, opacity: 0, stagger: 0.1, duration: 0.6 }, '-=0.4')
        .from('.profile-frame', { scale: 0.8, opacity: 0, rotate: 180, duration: 1.2 }, 0.5)
        .from('.tech-badge', { scale: 0, opacity: 0, stagger: 0.2, duration: 0.8, ease: 'back.out(1.7)' }, '-=0.8');
    },
    { scope: container }
  );

  return (
    <div id="home" className="pt-10 relative min-h-screen w-full overflow-hidden bg-[#0f172a] text-slate-200" ref={container}>
      
      <style jsx global>{`
        @keyframes float-particle {
          0% { transform: translateY(100vh) rotate(0deg); opacity: 0; }
          10%, 90% { opacity: 0.1; }
          100% { transform: translateY(-100px) rotate(360deg); opacity: 0; }
        }
        @keyframes float-badge {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
        }
        @keyframes pulse-glow {
          0%, 100% { opacity: 0.5; transform: scale(1); }
          50% { opacity: 0.8; transform: scale(1.1); }
        }
        @keyframes scroll-wheel {
          0% { transform: translateY(0); opacity: 1; }
          100% { transform: translateY(15px); opacity: 0; }
        }
        .code-grid-bg {
          background-image: linear-gradient(#c084fc22 1px, transparent 1px), linear-gradient(90deg, #c084fc22 1px, transparent 1px);
          background-size: 50px 50px;
        }
      `}</style>

      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="code-grid-bg absolute inset-0 opacity-10 animate-[gridMove_20s_linear_infinite]" />
        {particles.map((p) => (
          <div
            key={p.id}
            className="absolute font-mono text-purple-400/20 text-xl pointer-events-none select-none"
            style={{
              left: `${p.left}%`,
              animation: `float-particle ${p.duration}s infinite linear`,
              animationDelay: `${p.delay}s`,
              bottom: '-50px'
            }}
          >
            {p.text}
          </div>
        ))}
        <div className="absolute inset-0 bg-gradient-to-b from-[#020617]/80 via-[#0f172a]/50 to-[#0f172a]" />
      </div>

      {/* Main Content */}
      <div className="container relative z-10 flex min-h-screen flex-col items-center justify-center pt-24 md:pt-0">
        <div className="grid w-full grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-8">
          
          {/* Left Column: Text */}
          <div className="flex flex-col gap-6 text-center lg:text-left">
            <div className="hero-greeting flex items-center justify-center gap-2 font-mono text-lg text-purple-400 lg:justify-start">
              <span>Hello, I&apos;m</span>
              <span className="animate-pulse">|</span>
            </div>

            <h1 className="hero-name-line font-mono text-4xl font-bold leading-tight md:text-5xl xl:text-6xl">
              <span className="bg-gradient-to-r from-purple-400 via-purple-300 to-cyan-400 bg-clip-text text-transparent">
                {portfolioData.personalInfo.name}
              </span>
            </h1>

            <div className="hero-title-line font-mono text-xl text-cyan-400 md:text-2xl">
              <span className="mr-2 text-slate-500">//</span>
              {portfolioData.personalInfo.title}
            </div>

            <p className="hero-bio max-w-lg text-lg leading-relaxed text-slate-400 mx-auto lg:mx-0">
              {portfolioData.personalInfo.bio}
            </p>

            <div className="hero-buttons mt-4 flex flex-wrap items-center justify-center gap-4 lg:justify-start">
              <Button 
                size="lg" 
                asChild 
                className="group relative overflow-hidden bg-gradient-to-r from-purple-500 to-cyan-500 px-8 py-6 text-lg font-bold text-white transition-all hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(192,132,252,0.4)]"
              >
                <Link href="#contact">
                  Get In Touch
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              
              <Button 
                size="lg" 
                variant="outline" 
                asChild
                className="group border-2 border-purple-500 bg-transparent px-8 py-6 text-lg font-bold text-purple-400 hover:-translate-y-1 hover:bg-purple-500 hover:text-white hover:shadow-[0_0_20px_rgba(192,132,252,0.4)]"
              >
                <Link href="#projects">
                  View Projects
                  <Terminal className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>

            <div className="mt-4 flex justify-center gap-4 lg:justify-start">
              {portfolioData.socialLinks.map((link) => {
                const Icon = iconMap[link.name] || Github;
                return (
                  <Link
                    href={link.url}
                    key={link.name}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-icon flex h-12 w-12 items-center justify-center rounded-xl border border-slate-700 bg-[#1e293b] text-slate-400 transition-all hover:-translate-y-1 hover:border-purple-500 hover:bg-[#334155] hover:text-purple-400 hover:shadow-lg"
                  >
                    <Icon className="h-6 w-6" />
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Right Column: Image & Badges */}
          {/* Sizing Adjusted: h-[280px] w-[280px] base, scales up to sm:350px and md:450px */}
          <div className="relative mx-auto mt-2 flex h-[280px] w-[280px] items-center justify-center sm:mt-4 sm:h-[350px] sm:w-[350px] md:h-[450px] md:w-[450px] lg:mt-0">
            
            <div className="absolute inset-0 -z-10 animate-[pulse-glow_3s_ease-in-out_infinite] rounded-full bg-radial-gradient from-purple-500/20 to-transparent blur-3xl" 
                 style={{ background: 'radial-gradient(circle, rgba(192,132,252,0.2) 0%, transparent 70%)' }}
            />

            {/* Frame Sizing Adjusted: h-[230px] w-[230px] base */}
            <div className="profile-frame relative h-[230px] w-[230px] overflow-hidden rounded-full border-[3px] border-purple-500 bg-[#1e293b] shadow-[0_0_30px_rgba(192,132,252,0.3)] sm:pt-3 sm:h-[300px] sm:w-[300px]md:pt-6 md:h-[380px] md:w-[380px]">
              {headshot ? (
                <Image
                  src={headshot.imageUrl}
                  alt={headshot.description}
                  fill
                  className="object-cover"
                  priority
                  data-ai-hint={headshot.imageHint}
                />
              ) : (
                <div className="flex h-full w-full items-center justify-center">
                  <Code2 className="h-32 w-32 text-purple-500/30" />
                </div>
              )}
            </div>

            {/* Badges: Added responsive padding (p-3 md:p-4) and text sizes */}
            <div className="tech-badge absolute right-0 top-[10%] animate-[float-badge_3s_ease-in-out_infinite] rounded-2xl border border-slate-700 bg-[#1e293b]/90 p-3 shadow-xl backdrop-blur-md transition-transform hover:scale-105 hover:border-cyan-400 md:p-4">
              <div className="flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-cyan-500/10 md:h-10 md:w-10">
                  <Code2 className="h-5 w-5 text-cyan-400 md:h-6 md:w-6" />
                </div>
                <div>
                  <div className="font-bold text-slate-200 text-sm md:text-base">React</div>
                  <div className="text-[10px] text-slate-400 md:text-xs">Next.js Expert</div>
                </div>
              </div>
            </div>

            <div className="tech-badge absolute bottom-[15%] right-[-5%] animate-[float-badge_3.5s_ease-in-out_infinite] rounded-2xl border border-slate-700 bg-[#1e293b]/90 p-3 shadow-xl backdrop-blur-md transition-transform hover:scale-105 hover:border-green-400 md:p-4" style={{ animationDelay: '1s' }}>
              <div className="flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-green-500/10 md:h-10 md:w-10">
                  <Database className="h-5 w-5 text-green-400 md:h-6 md:w-6" />
                </div>
                <div>
                  <div className="font-bold text-slate-200 text-sm md:text-base">Node.js</div>
                  <div className="text-[10px] text-slate-400 md:text-xs">Full Stack</div>
                </div>
              </div>
            </div>

            <div className="tech-badge absolute left-[-5%] top-[50%] animate-[float-badge_4s_ease-in-out_infinite] rounded-2xl border border-slate-700 bg-[#1e293b]/90 p-3 shadow-xl backdrop-blur-md transition-transform hover:scale-105 hover:border-yellow-400 md:p-4" style={{ animationDelay: '2s' }}>
              <div className="flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-yellow-500/10 md:h-10 md:w-10">
                  <FileCode2 className="h-5 w-5 text-yellow-400 md:h-6 md:w-6" />
                </div>
                <div>
                  <div className="font-bold text-slate-200 text-sm md:text-base">JavaScript</div>
                  <div className="text-[10px] text-slate-400 md:text-xs">ES6+ & TS</div>
                </div>
              </div>
            </div>

          </div>
        </div>

        
        
      </div>
    </div>
  );
}