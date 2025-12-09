import { portfolioData } from '@/lib/data';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

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
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {portfolioData.skills.map((skill) => (
            <Card key={skill.name} className="flex flex-col items-center justify-center p-6 text-center transition-all duration-300 hover:shadow-lg hover:-translate-y-2 hover:border-primary">
                <CardTitle className="text-lg font-medium font-body text-foreground">
                  {skill.name}
                </CardTitle>
                <CardContent className="p-0 mt-4 w-full">
                   <Progress value={skill.proficiency} aria-label={`${skill.name} proficiency`} />
                </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
