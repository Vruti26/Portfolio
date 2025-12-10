'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { CodeXml, Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
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
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out',
        isScrolled
          ? 'bg-background/80 backdrop-blur-sm border-b'
          : 'bg-transparent border-b border-transparent'
      )}
    >
      <div className="container flex items-center justify-between h-16">
        <Link href="/" className="flex items-center gap-2">
          <CodeXml className={cn("w-8 h-8", isScrolled ? "text-primary" : "text-black")} />
          <span className={cn("text-xl font-bold font-headline", isScrolled ? "text-foreground" : "text-black")}>
            Artifolio
          </span>
        </Link>
        <nav className="hidden md:flex items-center gap-2">
          {navLinks.map((link) => (
            <Button asChild variant="ghost" key={link.name}>
              <Link
                href={link.href}
                className={cn("text-sm font-medium transition-colors", isScrolled ? "text-muted-foreground hover:text-foreground" : "text-black/80 hover:text-black")}
              >
                {link.name}
              </Link>
            </Button>
          ))}
        </nav>
        <div className="hidden md:block">
            <Button asChild variant={isScrolled ? 'default' : 'outline'}>
              <Link href="#contact" className={cn(!isScrolled && "text-black border-black hover:bg-black hover:text-white")}>Contact Me</Link>
            </Button>
        </div>

        <div className="md:hidden">
           <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className={cn(isScrolled ? "text-foreground" : "text-black", "hover:bg-black/10")}>
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
                <div className="flex flex-col gap-4 p-4">
                    <Link href="/" className="flex items-center gap-2 mb-4" onClick={() => setIsMenuOpen(false)}>
                      <CodeXml className="w-8 h-8 text-textheader" />
                      <span className="text-xl font-bold font-headline text-foreground">
                        Artifolio
                      </span>
                    </Link>
                    {navLinks.map((link) => (
                      <Button asChild variant="ghost" key={link.name} onClick={() => setIsMenuOpen(false)}>
                        <Link href={link.href} className="text-lg">
                            {link.name}
                        </Link>
                      </Button>
                    ))}
                    <Button asChild onClick={() => setIsMenuOpen(false)} className="mt-4">
                        <Link href="#contact">Contact Me</Link>
                    </Button>
                </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
