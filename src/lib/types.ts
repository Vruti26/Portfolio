export type PersonalInfo = {
  name: string;
  title: string;
  bio: string;
  contact: {
    email: string;
    phone: string;
  };
  headshotImage: string;
};

export type SocialLink = {
  name: 'LinkedIn' | 'GitHub' | 'CodePen';
  url: string;
};

export type Skill = {
  name: string;
  proficiency: number;
};

export type Project = {
  title: string;
  description: string;
  image: string;
  liveSiteUrl?: string;
  repositoryUrl?: string;
  tags: string[];
};

export type Experience = {
  role: string;
  company: string;
  period: string;
  description: string[];
};

export type PortfolioData = {
  personalInfo: PersonalInfo;
  socialLinks: SocialLink[];
  skills: Skill[];
  projects: Project[];
  experience: Experience[];
};
