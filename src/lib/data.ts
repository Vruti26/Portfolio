import type { PortfolioData } from './types';

export const portfolioData: PortfolioData = {
  personalInfo: {
    name: 'Your Name Here',
    title: 'Your Professional Title (e.g., Creative Full-Stack Developer)',
    bio: 'Write a short, engaging bio about yourself here. Mention your key skills, what you are passionate about, and what you are looking for. Make it professional but also personal.',
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
      title: 'Your First Project Title',
      description:
      'Replace this with a compelling description of your project. Talk about the problem it solves, the technologies used, and your role in its development. Keep it concise and impactful.',
      image: 'project-1',
      liveSiteUrl: '#',
      repositoryUrl: '#',
      tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Firebase'],  
      },
      {
        title: 'Your Second Project Title',
        description:
          'Another great project of yours. Describe what makes it unique, the challenges you faced, and what you learned. Highlight key features and outcomes.',
        image: 'project-2',
        liveSiteUrl: '#',
        repositoryUrl: '#',
        tags: ['React', 'GSAP', 'Framer Motion', 'UI/UX'],
      },
    {
      title: 'Your Third Project Title',
      description: 'A brief and compelling description of your third project. Highlight your role and the outcomes. Show off your skills and the value you brought to the project.',
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
