import type { PortfolioData } from './types';

export const portfolioData: PortfolioData = {
  personalInfo: {
    name: 'Vruti Rupapara',
    title: 'Creative Full-Stack Developer',
    bio: "I'm a passionate developer and designer with a knack for creating elegant, efficient, and user-centric digital experiences. With a strong foundation in both front-end and back-end technologies, I love bringing ideas to life from concept to deployment. My goal is to build things that are not only functional but also beautiful and a joy to use.",
    contact: {
      email: 'alex.doe@example.com',
      phone: '+1 (555) 123-4567',
    },
    headshotImage: 'headshot',
  },
  socialLinks: [
    { name: 'LinkedIn', url: 'https://www.linkedin.com/' },
    { name: 'GitHub', url: 'https://github.com/' },
    { name: 'CodePen', url: 'https://codepen.io/' },
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
      title: 'Project Alpha',
      description: 'A cutting-edge e-commerce platform built with Next.js and GraphQL, featuring a highly interactive and responsive user interface. Focused on performance and SEO.',
      image: 'project-1',
      liveSiteUrl: '#',
      repositoryUrl: '#',
      tags: ['Next.js', 'TypeScript', 'GraphQL', 'Stripe'],
    },
    {
      title: 'Project Beta',
      description: 'A collaborative real-time whiteboard application using WebSockets and React. Allows multiple users to brainstorm and visualize ideas simultaneously.',
      image: 'project-2',
      liveSiteUrl: '#',
      repositoryUrl: '#',
      tags: ['React', 'WebSockets', 'Node.js', 'Canvas API'],
    },
    {
      title: 'Project Gamma',
      description: 'A mobile-first social media dashboard designed to provide content creators with analytics and scheduling tools. Built with a focus on intuitive UI/UX.',
      image: 'project-3',
      liveSiteUrl: '#',
      repositoryUrl: '#',
      tags: ['React Native', 'Firebase', 'Data Visualization'],
    },
  ],
  experience: [
    {
      role: 'Senior Frontend Developer',
      company: 'Tech Innovators Inc.',
      period: '2020 - Present',
      description: [
        'Led the development of a major redesign for the company’s flagship product, improving user engagement by 40%.',
        'Mentored junior developers and established best practices for code quality and testing.',
        'Architected and implemented a new design system using Storybook and Styled Components.',
      ],
    },
    {
      role: 'Full-Stack Developer',
      company: 'Creative Solutions LLC',
      period: '2018 - 2020',
      description: [
        'Developed and maintained full-stack web applications for various clients.',
        'Worked closely with designers and project managers to deliver high-quality products on schedule.',
        'Optimized application performance, reducing load times by an average of 50%.',
      ],
    },
    {
      role: 'UI/UX Design Intern',
      company: 'Design Forward',
      period: '2017 - 2018',
      description: [
        'Assisted in creating wireframes, mockups, and prototypes for mobile and web applications.',
        'Conducted user research and usability testing to gather feedback and inform design decisions.',
      ],
    },
  ],
  feedback: [
    {
      quote: "Alex is a rare talent who combines technical expertise with a keen eye for design. The new platform is not only fast and reliable but also a pleasure to use. A true professional.",
      author: 'Jane Smith',
      role: 'CEO, Tech Innovators Inc.',
      avatarImage: 'avatar-1',
    },
    {
      quote: "Working with Alex was a fantastic experience. Their ability to translate complex requirements into a simple, elegant solution was instrumental to our project's success.",
      author: 'John Davis',
      role: 'Project Manager, Creative Solutions LLC',
      avatarImage: 'avatar-2',
    },
    {
      quote: "I was consistently impressed by Alex's dedication and creativity. They are a proactive problem-solver and a great team player who elevates everyone around them.",
      author: 'Emily White',
      role: 'Lead Designer, Design Forward',
      avatarImage: 'avatar-3',
    },
  ],
};
