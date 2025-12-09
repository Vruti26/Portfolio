'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { portfolioData } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Quote } from 'lucide-react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);


export function FeedbackSection() {
  const container = useRef(null);
  
  useGSAP(
    () => {
      gsap.from('.feedback-card', {
        scrollTrigger: {
          trigger: container.current,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
        opacity: 0,
        y: 50,
        stagger: 0.2,
        duration: 0.8,
        ease: 'power3.out',
      });
    },
    { scope: container }
  );

  return (
    <section id="feedback" className="w-full py-20 bg-background" ref={container}>
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="font-headline text-4xl md:text-5xl font-bold text-primary">What Others Say</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Testimonials from colleagues and clients I&apos;ve had the pleasure of working with.
          </p>
        </div>
        <Carousel
          opts={{
            align: 'start',
            loop: true,
          }}
          className="w-full max-w-4xl mx-auto"
        >
          <CarouselContent>
            {portfolioData.feedback.map((item, index) => {
              const avatarImage = PlaceHolderImages.find(img => img.id === item.avatarImage);
              return (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-1">
                    <Card className="feedback-card h-full flex flex-col">
                      <CardContent className="flex flex-col items-center text-center justify-center flex-grow p-6">
                        <Quote className="w-10 h-10 text-primary/20 mb-4" />
                        <p className="text-muted-foreground italic mb-6 flex-grow">&quot;{item.quote}&quot;</p>
                        {avatarImage && (
                          <Image
                            src={avatarImage.imageUrl}
                            alt={item.author}
                            width={64}
                            height={64}
                            className="rounded-full mb-4 border-2 border-primary"
                            data-ai-hint={avatarImage.imageHint}
                          />
                        )}
                        <p className="font-bold font-headline text-foreground">{item.author}</p>
                        <p className="text-sm text-muted-foreground">{item.role}</p>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              );
            })}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
}
