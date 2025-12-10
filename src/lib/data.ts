import type { PortfolioData } from './types';

export const portfolioData: PortfolioData = {
  personalInfo: {
    name: 'Your Name',
    title: 'Your Professional Title (e.g., Full-Stack Developer)',
    bio: "Write a short bio about yourself here. Talk about your passion, what you do, and what you're looking for. Keep it engaging and professional.",
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
    { name: 'React', proficiency: 95 },
    { name: 'Next.js', proficiency: 90 },
    { name: 'TypeScript', proficiency: 90 },
    { name: 'Node.js', proficiency: 85 },
    { name: 'GraphQL', proficiency: 80 },
    { name: 'UI/UX Design', proficiency: 88 },
    { name: 'Figma', proficiency: 92 },
    { name: 'Firebase', proficiency: 85 },
  ],
  projects: [
    {
      title: 'Project One Title',
      description: 'A brief and compelling description of your first project. Mention the main features and the problem it solves.',
      image: 'project-1',
      liveSiteUrl: '#',
      repositoryUrl: '#',
      tags: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    },
    {
      title: 'Project Two Title',
      description: 'A brief and compelling description of your second project. What technology did you use and what makes it special?',
      image: 'project-2',
      liveSiteUrl: '#',
      repositoryUrl: '#',
      tags: ['React', 'Node.js', 'Express', 'MongoDB'],
    },
    {
      title: 'Project Three Title',
      description: 'A brief and compelling description of your third project. Highlight your role and the outcomes.',
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
      period: 'Year - Present',
      description: [
        'A key accomplishment or responsibility in this role.',
        'Another achievement, preferably with a quantifiable result.',
        'How you contributed to the team or product.',
      ],
    },
    {
      role: 'Your Previous Role',
      company: 'Previous Company Name',
      period: 'Year - Year',
      description: [
        'A key accomplishment or responsibility in this role.',
        'Another achievement you are proud of.',
      ],
    },
  ],
  feedback: [
    {
      quote: "A glowing testimonial from a colleague, manager, or client. Keep it short and impactful.",
      author: 'Author Name',
      role: 'Author Title, Company',
      avatarImage: 'avatar-1',
    },
    {
      quote: "Another great testimonial. This adds credibility and shows that you work well with others.",
      author: 'Author Name',
      role: 'Author Title, Company',
      avatarImage: 'avatar-2',
    },
    {
      quote: "One more testimonial for good measure. Try to get a variety of perspectives if you can.",
      author: 'Author Name',
      role: 'Author Title, Company',
      avatarImage: 'avatar-3',
    },
  ],
};
