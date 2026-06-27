import type { Metadata } from 'next';
import { Belleza, Alegreya } from 'next/font/google';
import './globals.css';
import { cn } from '@/lib/utils';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Toaster } from '@/components/ui/toaster';
import { portfolioData } from '@/lib/data';

const fontHeadline = Belleza({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-headline',
});

const fontBody = Alegreya({
  subsets: ['latin'],
  variable: '--font-body',
});

// This defines a circular SVG icon to be used as a favicon
const circularIcon = `data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><circle cx='50' cy='50' r='48' fill='%23a855f7'/><path d='M50 30 L67.3 40 V60 L50 70 L32.7 60 V40 Z' fill='none' stroke='white' stroke-width='6' stroke-linejoin='round'/><circle cx='50' cy='50' r='6' fill='white'/></svg>`;

export const metadata: Metadata = {
  title: {
    default: `${portfolioData.personalInfo.name} | ${portfolioData.personalInfo.title}`,
    template: `%s | ${portfolioData.personalInfo.name}`,
  },
  description: portfolioData.personalInfo.bio,
  icons: {
    icon: circularIcon,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Alegreya&family=Belleza&display=swap" rel="stylesheet" />
      </head>
      <body
        className={cn(
          'antialiased font-body',
          fontHeadline.variable,
          fontBody.variable
        )}
      >
        <Header />
        <main>{children}</main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
