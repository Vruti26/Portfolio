import type { PortfolioData } from './types';

export const portfolioData: PortfolioData = {
  personalInfo: {
    name: 'Vruti Rupapara',
    title: 'Creative Full-Stack Developer',
    bio: "I'm a passionate developer with a knack for creating elegant solutions in the least amount of time. I specialize in turning complex problems into simple, beautiful, and intuitive designs. I'm always looking for new challenges and opportunities to learn and grow.",
    contact: {
      email: 'your.email@example.com',
      phone: '+1 (123) 456-7890',
    },
    headshotImage: 'headshot',
  },
  socialLinks: [
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/your-profile' },
    { name: 'GitHub', url: 'https://github.com/your-username' },
    { name: 'CodePen', url: 'https://codepen.io/your-username' },
  ],
  skills: [
    
    { name: 'Firebase', proficiency: 75 },
    { name: 'Next.js', proficiency: 90 },
    { name: 'Tailwind CSS', proficiency: 92 },
    { name: 'Python', proficiency: 75 },
    { name: 'C language', proficiency: 85 },
    { name: 'JavaScript', proficiency: 95 },

    { name: 'Solidity (Beginner)', proficiency: 65 },
 
    
    { name: 'MongoDB', proficiency: 80 },
   
    { name: 'Git & GitHub', proficiency: 90 },
  
  ],
  projects: [
    {
      title: 'Project Alpha',
      description:
      'This is where you can describe Project Alpha. Explain the problem it solves, the technologies you used, and your specific role. Make it engaging and informative.',
      image: 'project-1',
      liveSiteUrl: '#',
      repositoryUrl: '#',
      tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Firebase'],  
      },
      {
        title: 'Project Beta',
        description:
          'Describe Project Beta here. What was the challenge? What was the outcome? Highlight key features and what you learned from the experience.',
        image: 'project-2',
        liveSiteUrl: '#',
        repositoryUrl: '#',
        tags: ['React', 'GSAP', 'Framer Motion', 'UI/UX'],
      },
    {
      title: 'Project Gamma',
      description: 'Provide a brief but powerful description of Project Gamma. Focus on the results and the skills you demonstrated.',
      image: 'project-3',
      liveSiteUrl: '#',
      repositoryUrl: '#',
      tags: ['UI/UX', 'Figma', 'User Research'],
    },
  ],
  experience: [
    {
      role: 'Your Most Recent Role',
      company: 'Company Name',
      period: 'Year – Present',
      description: [
        'Describe your responsibilities and achievements in this role.',
        'Use bullet points to list key contributions.',
        'Quantify your impact whenever possible (e.g., "Increased performance by 30%").',
      ],
    },
    {
      role: 'Previous Role',
      company: 'Another Company',
      period: 'Year – Year',
      description: [
        'Summarize your contributions and learnings from this position.',
        'Focus on skills and experiences that are relevant to the jobs you are applying for.',
      ],
    },
  ],
};
