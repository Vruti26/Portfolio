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

export const metadata: Metadata = {
  title: {
    default: `${portfolioData.personalInfo.name} | ${portfolioData.personalInfo.title}`,
    template: `%s | ${portfolioData.personalInfo.name}`,
  },
  description: portfolioData.personalInfo.bio,
  icons: {
    icon: `data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23a855f7' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><polyline points='16 18 22 12 16 6'></polyline><polyline points='8 6 2 12 8 18'></polyline></svg>`,
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
