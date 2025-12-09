import { portfolioData } from '@/lib/data';
import { Card } from '@/components/ui/card';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { Code, Database, DraftingCompass } from 'lucide-react';
import type { LucideProps } from 'lucide-react';
import type { ForwardRefExoticComponent, RefAttributes } from 'react';

// A mapping from skill names to Lucide icons or custom SVGs
const skillIcons: { [key: string]: ForwardRefExoticComponent<Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>> | ((props: React.SVGProps<SVGSVGElement>) => JSX.Element) } = {
  'React': (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="-11.5 -10.23174 23 20.46348">
      <circle cx="0" cy="0" r="2.05" fill="#61DAFB"/>
      <g stroke="#61DAFB" strokeWidth="1" fill="none">
        <ellipse rx="11" ry="4.2"/>
        <ellipse rx="11" ry="4.2" transform="rotate(60)"/>
        <ellipse rx="11" ry="4.2" transform="rotate(120)"/>
      </g>
    </svg>
  ),
  'Next.js': (props) => (
    <svg {...props} viewBox="0 0 128 128"><path fill="black" d="M64 128C99.346 128 128 99.346 128 64C128 28.654 99.346 0 64 0C28.654 0 0 28.654 0 64C0 99.346 28.654 128 64 128Z"></path><path fill="white" d="M95.74 32.26L55.93 92.54C55.08 94.02 53.07 94.19 52 92.83L34.1 72.83C33.16 71.64 33.72 69.83 35.1 69.4L45.42 66.1C46.86 65.65 48.33 66.84 48.63 68.33L53.11 89.2L88.16 39.81C89.37 37.98 92.23 37.52 93.75 39.11L95.89 41.3C97.16 42.6 96.79 44.81 95.19 45.74L63.93 64.13L63.95 64.12C63.29 64.53 62.22 64.13 61.87 63.35L57.95 54.96C57.41 53.79 57.99 52.4 59.2 51.87L90.93 35.43C92.2 34.87 93.61 35.42 94.21 36.63L95.74 39.54C96.33 40.72 95.72 42.1 94.49 42.64L69.6 52.79C69.6 52.79 69.6 52.79 69.6 52.79C68.3 53.36 67.7 54.78 68.29 55.98L72.81 66.19C73.39 67.39 72.8 68.8 71.5 69.37L40.09 83.1C38.82 83.67 37.4 83.12 36.81 81.91L32.29 72.7C31.71 71.5 32.3 70.08 33.6 69.51L34.1 69.31"></path></svg>
  ),
  'TypeScript': (props) => (
    <svg {...props} viewBox="0 0 128 128"><path fill="#007acc" d="M0 0h128v128H0z"></path><path fill="white" d="M22.31 99.88V28.12h17.9v65.6h25.46v6.16H22.31zm52.3-64.8v6.17h25.46v58.63h17.9V35.08h-43.36zm-3.64-7.23c0-3.9 3.32-6.52 7.82-6.52s7.82 2.62 7.82 6.52c0 3.9-3.32 6.52-7.82 6.52s-7.82-2.62-7.82-6.52z"></path></svg>
  ),
  'Node.js': (props) => (
    <svg {...props} viewBox="0 0 256 256"><path fill="#339933" d="M211.59 187.822c-3.414-2.128-26.63-14.86-35.334-31.595l-8.423-16.323-38.358 22.012c-1.39 1.13-3.132 1.58-4.78 1.58-3.038 0-5.89-1.62-7.46-4.343l-34.93-60.19-38.356 22.01c-1.39 1.13-3.133 1.582-4.78 1.582-3.04 0-5.892-1.62-7.46-4.342L1.87 63.81c-2.12-3.66-0.34-8.312 3.9-9.74l37.89-12.56c3.27-1.086 6.77 0.416 8.52 3.268l24.78 42.662 45.45-26.096c2.4-1.74 5.39-2.22 8.16-1.42l37.892 12.56c4.238 1.43 5.998 6.08 3.89 9.74l-31.32 54.04 45.448-26.095c2.4-1.74 5.39-2.22 8.16-1.42l37.89 12.56c4.24 1.43 6.01 6.08 3.89 9.74l-52.54 90.54c-2.11 3.66-6.66 5.12-10.89 3.69z"></path></svg>
  ),
  'GraphQL': (props) => (
    <svg {...props} viewBox="0 0 400 400"><path fill="#E10098" d="m338 120.3-138 79.6-138-79.6L138 40.7l138 79.6zm-276.5 159L120.2 200l-58.7-33.9-61.4 35.5 61.4 35.5zm276.5 0L279.7 200l58.7-33.9 61.4 35.5-61.4 35.5zm-138.2 80l138-79.6 61.5-35.5-199.5 115.3L.5 243.8l61.5 35.5 138 79.6zM200 240.2l58.8 33.9-58.8 34-58.8-34 58.8-33.9zm-58.7-106.1L200 193l58.7-58.9-58.7-34-58.7 34zm-80.1 82l58.7-33.9 58.8 33.9-58.8 34-58.7-34zm218.8 0l-58.7-33.9-58.8 33.9 58.8 34 58.7-34zm-79.2-127.8l58.7 33.9-58.7 33.9-58.8-33.9 58.8-33.9z"></path></svg>
  ),
  'UI/UX Design': DraftingCompass,
  'Figma': (props) => (
    <svg {...props} viewBox="0 0 64 96"><path fill="#F24E1E" d="M32 64a16 16 0 1 1 0-32 16 16 0 0 1 0 32zM32 80a16 16 0 0 1-16-16h32a16 16 0 0 1-16 16z"></path><path fill="#FF7262" d="M16 48a16 16 0 0 1 16-16v32a16 16 0 0 1-16-16z"></path><path fill="#A259FF" d="M16 32a16 16 0 1 1 32 0 16 16 0 0 1-32 0z"></path><path fill="#1ABCFE" d="M16 16A16 16 0 0 1 32 0v32A16 16 0 0 1 16 16z"></path><path fill="#0ACF83" d="M32 80a16 16 0 0 1 16-16v32a16 16 0 0 1-16-16z"></path></svg>
  ),
  'Firebase': Database,
};

export function SkillsSection() {
  return (
    <section id="skills" className="w-full py-20 bg-secondary">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="font-headline text-4xl md:text-5xl font-bold text-primary">My Arsenal of Skills</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            A glimpse into the technologies and tools I use to bring ideas to life.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
          <TooltipProvider>
            {portfolioData.skills.map((skill) => {
              const Icon = skillIcons[skill.name] || Code;
              return (
                <Tooltip key={skill.name}>
                  <TooltipTrigger asChild>
                    <Card className="flex flex-col items-center justify-center p-6 text-center transition-all duration-300 hover:shadow-lg hover:-translate-y-2 hover:border-primary aspect-square">
                      <Icon className="w-12 h-12 text-primary" />
                    </Card>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{skill.name}</p>
                  </TooltipContent>
                </Tooltip>
              );
            })}
          </TooltipProvider>
        </div>
      </div>
    </section>
  );
}
