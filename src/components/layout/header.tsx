'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { CodeXml } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'AI Tailor', href: '#ai-tailor' },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out',
        isScrolled
          ? 'bg-background/80 backdrop-blur-sm border-b'
          : 'bg-transparent'
      )}
    >
      <div className="container flex items-center justify-between h-16">
        <Link href="/" className="flex items-center gap-2">
          <CodeXml className="w-8 h-8 text-primary" />
          <span className="text-xl font-bold font-headline text-foreground">
            Artifolio
          </span>
        </Link>
        <nav className="hidden md:flex items-center gap-2">
          {navLinks.map((link) => (
            <Button asChild variant="ghost" key={link.name}>
              <Link
                href={link.href}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.name}
              </Link>
            </Button>
          ))}
        </nav>
        <Button asChild>
          <Link href="#contact">Contact Me</Link>
        </Button>
      </div>
    </header>
  );
}
