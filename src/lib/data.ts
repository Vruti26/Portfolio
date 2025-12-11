import type { PortfolioData } from './types';

export const portfolioData: PortfolioData = {
  personalInfo: {
    name: 'Vruti Rupapara',
    title: 'Creative Developer',
    bio: "CE student at GEC Gandhinagar skilled in Next.js, GSAP, DSA, Firebase, and databases. I’ve built projects in Web3, AI, agritech, and UI-rich applications, and I love creating fast, scalable, and user-centric solutions",
    contact: {
      email: 'rupaparavruti@gmail.com.com',
      phone: '+1 (91) 7861880391',
    },
    headshotImage: 'headshot',
  },
  socialLinks: [
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/vruti-rupapara' },
    { name: 'GitHub', url: 'https://github.com/Vruti26' },
    { name: 'CodePen', url: 'https://codepen.io/Vruti26' },
  ],
  skills: [
    
    { name: 'Firebase', proficiency: 75 },
    { name: 'Next.js', proficiency: 90 },
    { name: 'Tailwind CSS', proficiency: 92 },
    { name: 'Python', proficiency: 75 },
    { name: 'C language', proficiency: 85 },
    { name: 'JavaScript', proficiency: 95 },

    { name: 'Solidity (Beginner)', proficiency: 65 },
    { name: 'Git & GitHub', proficiency: 90 },

  
  ],
  projects: [
    {
      title: 'Secret Letters – Personalized Message Generator',
      description:
        'A creative and interactive platform where users can generate personalized secret letters based on their name initials. The project features smooth GSAP animations, elegant UI built with Next.js and Tailwind CSS, and Firebase for storing user entries. Designed to deliver a unique and emotional experience with dynamic letter generation and clean, modern visuals.',
      image: 'project-2',
      liveSiteUrl: 'https://vrletter.vercel.app',
      repositoryUrl: 'https://github.com/Vruti26/Letter',
      tags: ['Next.js', 'Tailwind CSS', 'Firebase', 'GSAP'],
    },
    {
      
      title: 'Agritech Platform',
      description:
      'A smart agritech application that integrates the SentinelHub API to fetch satellite imagery and generate crop health insights. The system processes NDVI data, visualizes vegetation health, and provides farmers with easy-to-understand geospatial maps. Built with a clean Next.js UI and optimized API calls for fast rendering of satellite data',
      image: 'project-1',
      liveSiteUrl: 'https://vruti26.github.io/Agritech/',
      repositoryUrl: 'https://github.com/Vruti26/Agritech',
      tags: ['Sentinel API',
        'Next.js',
        'TypeScript',
       'Remote Sensing',
        
        'NDVI',
        'Tailwind CSS'],  
      },
     
    
  ],
  experience: [
    {
      role: 'Design Lead',
      company: 'Club IDE – GEC Gandhinagar',
      period: '2024 – 2025',
      description: [
        'Led the design team and created frameworks for social media posts, newsletters, flyers, and event branding.',
      ],
    },
    {
      role: 'Event Coordinator – Hack the Spring 2025',
      company: 'Club IDE – GEC Gandhinagar',
      period: 'Feb 2025',
      description: [
        'Coordinated and managed the execution of Hack the Spring 2025 hackathon held on 28 Feb 2025.',
      ],
    },
    {
      role: 'Volunteer',
      company: 'Club IDE – GEC Gandhinagar',
      period: '2023 – 2024',
      description: [
        'Contributed actively to club activities including event assistance, promotional work, and student engagement.',
      ],
    },
  ]
};
