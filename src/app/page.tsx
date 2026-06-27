
'use client';

import { useState } from 'react';
import { HeroSection } from '@/components/sections/hero';
import { SkillsSection } from '@/components/sections/skills';
import { ProjectsSection } from '@/components/sections/projects';
import { ExperienceSection } from '@/components/sections/experience';
import { ResumeTailor } from '@/components/sections/resume-tailor';
import { ContactSection } from '@/components/sections/contact';
import { IntroOverlay } from '@/components/sections/intro-overlay';

export default function Home() {
  const [showIntro, setShowIntro] = useState(true);

  return (
    <>
      {showIntro && <IntroOverlay onComplete={() => setShowIntro(false)} />}
      
      <div className={showIntro ? 'hidden' : 'block'}>
        <HeroSection />
        <div className="bg-background">
          <SkillsSection />
          <ProjectsSection />
          <ExperienceSection />
          <ContactSection />
          <ResumeTailor />
        </div>
      </div>
    </>
  );
}
