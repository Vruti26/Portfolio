import { HeroSection } from '@/components/sections/hero';
import { SkillsSection } from '@/components/sections/skills';
import { ProjectsSection } from '@/components/sections/projects';
import { ExperienceSection } from '@/components/sections/experience';
import { FeedbackSection } from '@/components/sections/feedback';
import { ResumeTailor } from '@/components/sections/resume-tailor';

export default function Home() {
  return (
    <>
      <HeroSection />
      <div className="bg-background">
        <SkillsSection />
        <ProjectsSection />
        <ExperienceSection />
        <FeedbackSection />
        <ResumeTailor />
      </div>
    </>
  );
}