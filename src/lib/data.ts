import type { PortfolioData } from './types';

export const portfolioData: PortfolioData = {
  personalInfo: {
    name: 'Vruti Rupapara',
    title: 'Full-Stack Developer | Cybersecurity Enthusiast',
    bio: 'Computer Engineering student at Government Engineering College, Gandhinagar, graduating in 2027. I enjoy building interactive web applications and exploring cybersecurity, DevSecOps, and modern technologies. My work spans full-stack development, agricultural intelligence, and security-focused projects.',
    contact: {
      email: 'rupaparavruti@gmail.com',
      phone: '',
    },
    headshotImage: 'headshot',
  },
  socialLinks: [
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/vruti-rupapara' },
    { name: 'GitHub', url: 'https://github.com/Vruti26' },
    { name: 'CodePen', url: 'https://codepen.io/Vruti26' },
  ],
  skills: [
    { name: 'Java', proficiency: 75 },
    { name: 'C language', proficiency: 85 },
    { name: 'Python', proficiency: 75 },
    { name: 'Solidity (Beginner)', proficiency: 65 },

    { name: 'Firebase', proficiency: 75 },
    { name: 'Next.js', proficiency: 90 },
    { name: 'Tailwind CSS', proficiency: 92 },
    
   
    { name: 'JavaScript', proficiency: 95 },

   
    { name: 'Git & GitHub', proficiency: 90 },
  ],
  projects: [
    {
      title: 'Panopticon — Mempool Intrusion Detection System',
      description: 'A blockchain security project exploring real-time mempool monitoring, suspicious transaction detection, and proactive security mechanisms. The project focuses on understanding transaction behaviour and identifying potentially malicious activity before confirmation.',
      image: 'project-4',
      repositoryUrl: 'https://github.com/Vruti26/Panopticon',
      tags: ['Solidity', 'Python', 'Node.js', 'Ethers.js'],
    },
    {
      title: 'VerseFlow — Reading & Publishing Platform',
      description: 'A digital reading and publishing platform designed to connect readers and writers through a smooth, distraction-free experience. Built with Next.js, Tailwind CSS, Firebase, and GSAP.',
      image: 'project-3',
      liveSiteUrl: 'https://verseflow-vr.vercel.app',
      repositoryUrl: 'https://github.com/Vruti26/Verseflow',
      tags: ['Next.js', 'Tailwind CSS', 'Firebase', 'GSAP'],
    },
    
    {
      title: 'Secret Letters — Personalized Message Generator',
      description: 'An interactive platform for generating personalized secret letters using name initials. It combines animated interactions, a modern interface, and Firebase integration.',
      image: 'project-2',
      liveSiteUrl: 'https://vrletter.vercel.app',
      repositoryUrl: 'https://github.com/Vruti26/Letter',
      tags: ['Next.js', 'Tailwind CSS', 'Firebase', 'GSAP'],
    },
    {
      title: 'Agritch — Agricultural Intelligence Platform',
      description: 'A farmer-focused application that combines satellite vegetation observations, weather information, and soil data to provide understandable field insights and agricultural recommendations.',
      image: 'project-1',
      liveSiteUrl: 'https://vruti26.github.io/Agritech/',
      repositoryUrl: 'https://github.com/Vruti26/Agritech',
      tags: ['Python', 'Flask', 'JavaScript', 'Leaflet', 'Sentinel Hub', 'Open-Meteo'],
    },
  ],
  experience: [
     {
      role: 'Frontend Developer Intern',
      company: 'InfoLabz IT Services Pvt. Ltd.',
      period: 'July 2026',
      description: [
        'Developed dynamic web applications (Real-Time News Aggregator, Crypto Tracker) using React.js, React Hooks, and React Router',
      ],
    },
     {
      role: 'Evaluation Coordinator – Hack the Spring 2026',
      company: 'GEC Gandhinagar',
      period: 'Feb 2026',
      description: [
        'Recruited and onboarded the expert judging panel while coordinating seamless pitch sessions.',
      ],
    },
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
        'Contributed actively to club activities, including event assistance, promotional work, and student engagement.',
      ],
    },
  ],
  location: 'Gujarat, India',
  email: 'rupaparavruti@gmail.com',
  phone: '',
};
