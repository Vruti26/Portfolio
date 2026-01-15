import Link from 'next/link';
import { portfolioData } from '@/lib/data';
import { Github, Linkedin, Codepen, Mail, Terminal, Code2 } from 'lucide-react';

const iconMap: Record<string, any> = {
  GitHub: Github,
  LinkedIn: Linkedin,
  CodePen: Codepen,
  Email: Mail
};

export function Footer() {
  return (
    <footer className="w-full border-t border-slate-800 bg-[#020617] pt-12 pb-8 text-slate-400">
      <div className="container px-4 md:px-6">
        
        <div className="flex flex-col items-center justify-center gap-6 text-center">
          
          {/* Logo / Brand */}
          <Link href="/" className="group flex items-center gap-2">
            <div className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-tr from-purple-600 to-cyan-600 shadow-lg transition-transform group-hover:scale-105 group-hover:rotate-3">
              <Code2 className="w-6 h-6 text-white" />
            </div>
            <span className="font-mono text-xl font-bold tracking-tight text-slate-100">
              <span className="text-purple-400">&lt;</span>
              Portfolio
              <span className="text-purple-400">/&gt;</span>
            </span>
          </Link>

          <p className="max-w-md text-sm leading-relaxed text-slate-500 font-mono">
            // Built with Next.js, Tailwind CSS, and a love for clean code.
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-4 mt-2">
            {portfolioData.socialLinks.map((link) => {
              const Icon = iconMap[link.name] || Github;
              return (
                <Link
                  href={link.url}
                  key={link.name}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.name}
                  className="group flex h-10 w-10 items-center justify-center rounded-lg border border-slate-800 bg-[#0f172a] transition-all hover:-translate-y-1 hover:border-purple-500 hover:text-purple-400 hover:shadow-lg"
                >
                  <Icon className="h-5 w-5 transition-transform group-hover:scale-110" />
                </Link>
              );
            })}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-slate-800/50 pt-8 text-xs font-mono text-slate-600 md:flex-row">
          <p>
            &copy; {new Date().getFullYear()} <span className="text-slate-400">{portfolioData.personalInfo.name}</span>. All rights reserved.
          </p>
          
          <div className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse"></div>
            <span>System Status: Online</span>
          </div>
        </div>

      </div>
    </footer>
  );
}