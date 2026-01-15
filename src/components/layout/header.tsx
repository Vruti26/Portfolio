'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Code2, Menu, Terminal, Hash, X } from 'lucide-react'; // Added X icon
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
  SheetClose, // Import SheetClose for the minimal close button
} from "@/components/ui/sheet"

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'AI Tailor', href: '#ai-tailor' },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll(); 
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out',
        isScrolled
          ? 'bg-[#0f172a]/80 backdrop-blur-md border-b border-slate-800 py-3 shadow-sm'
          : 'bg-transparent border-b border-transparent py-5'
      )}
    >
      <div className="container flex items-center justify-between h-10 px-4 md:px-6">
        
        {/* Logo */}
        <Link href="/" className="group flex items-center gap-2 relative z-50">
          <div className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-tr from-purple-600 to-cyan-600 shadow-lg transition-transform group-hover:scale-105 group-hover:rotate-3">
            <Code2 className="w-6 h-6 text-white" />
          </div>
          <span className="font-mono text-xl font-bold tracking-tight text-slate-100">
            <span className="text-purple-400">&lt;</span>
            Portfolio
            <span className="text-purple-400">/&gt;</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1 bg-[#1e293b]/50 backdrop-blur-sm px-2 py-1.5 rounded-full border border-slate-700/50">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="px-4 py-2 text-sm font-mono font-medium text-slate-400 transition-all hover:text-white hover:bg-slate-700/50 rounded-full"
            >
              <span className="text-purple-500 opacity-0 transition-opacity hover:opacity-100 mr-1">&gt;</span>
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:block">
            <Button 
              asChild 
              className="bg-cyan-500 hover:bg-cyan-600 text-white font-bold shadow-lg transition-all rounded-xl hover:-translate-y-0.5"
            >
              <Link href="#contact">
                <Terminal className="w-4 h-4 mr-2" />
                Let's Talk
              </Link>
            </Button>
        </div>

        {/* Minimal Mobile Menu */}
        <div className="md:hidden">
           <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
            <SheetTrigger asChild>
              {/* Minimal Dashboard Trigger */}
              <button 
                className="flex items-center justify-center h-11 w-11 rounded-full border border-slate-700 bg-[#1e293b]/80 text-slate-200 backdrop-blur-md active:scale-95 transition-all shadow-[0_0_15px_rgba(0,0,0,0.2)]"
                aria-label="Open Menu"
              >
                <Menu className="h-5 w-5" strokeWidth={2.5} />
              </button>
            </SheetTrigger>
            
            <SheetContent side="right" className="w-[85vw] sm:w-[380px] bg-[#020617] border-l border-slate-800 p-0 text-slate-200 flex flex-col">
                <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
                
                {/* Minimal Header with Close Button */}
                <div className="flex items-center justify-between px-6 pt-6 pb-4">
                    <span className="font-mono text-sm text-slate-500">Navigation</span>
                    <SheetClose asChild>
                        <button className="h-10 w-10 flex items-center justify-center rounded-full bg-slate-800/50 hover:bg-slate-800 text-slate-400 hover:text-white transition-colors">
                            <X className="h-5 w-5" />
                        </button>
                    </SheetClose>
                </div>

                {/* Clean List Links */}
                <div className="flex flex-col h-full px-6 py-4">
                    <div className="flex flex-col gap-2">
                        {navLinks.map((link, idx) => (
                            <Link 
                                key={link.name}
                                href={link.href}
                                onClick={() => setIsMenuOpen(false)}
                                className="group flex items-center p-4 rounded-2xl bg-slate-900/50 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 transition-all duration-300"
                                style={{ animationDelay: `${idx * 50}ms` }}
                            >
                                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#0f172a] text-purple-400 group-hover:scale-110 transition-transform">
                                    <Hash className="w-5 h-5" />
                                </div>
                                <span className="ml-4 font-mono text-lg font-medium text-slate-300 group-hover:text-white">
                                    {link.name}
                                </span>
                            </Link>
                        ))}
                    </div>

                    {/* Bottom Action */}
                    <div className="mt-auto pb-8">
                        <Button 
                            asChild 
                            onClick={() => setIsMenuOpen(false)} 
                            className="w-full h-14 bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-500 hover:to-cyan-500 text-white font-bold text-lg shadow-lg rounded-2xl"
                        >
                            <Link href="#contact" className="flex items-center justify-center gap-2">
                                <Terminal className="w-5 h-5" />
                                Initialize Contact
                            </Link>
                        </Button>
                    </div>
                </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}