import Link from 'next/link';
import { portfolioData } from '@/lib/data';
import { Github, Linkedin, Codepen, CodeXml } from 'lucide-react';

const iconMap = {
  GitHub: Github,
  LinkedIn: Linkedin,
  CodePen: Codepen,
};

export function Footer() {
  return (
    <footer id="contact" className="bg-secondary text-secondary-foreground py-12">
      <div className="container text-center">
        <div className="flex justify-center items-center gap-3 mb-6">
           <CodeXml className="w-8 h-8 text-primary" />
          <h2 className="text-3xl font-headline">Artifolio</h2>
        </div>
        <p className="max-w-md mx-auto text-muted-foreground mb-6 text-justify">
          Thank you for visiting my portfolio. Let&apos;s connect and create something amazing together.
        </p>
        <div className="flex justify-center gap-4 mb-8">
          {portfolioData.socialLinks.map((link) => {
            const Icon = iconMap[link.name];
            return (
              <Link
                href={link.url}
                key={link.name}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.name}
                className="text-secondary-foreground hover:text-primary transition-colors"
              >
                <Icon className="w-6 h-6" />
              </Link>
            );
          })}
        </div>
        <div className="border-t pt-6 text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} {portfolioData.personalInfo.name}. All Rights Reserved.</p>
          
        </div>
      </div>
    </footer>
  );
}
