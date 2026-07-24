export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: 'AI Systems' | 'Security & Android' | 'Research & ITS' | 'Machine Learning';
  tagline: string;
  problem: string;
  solution: string;
  architecture: string;
  features: string[];
  techStack: string[];
  githubUrl: string;
  docUrl?: string;
  demoUrl?: string;
  futureImprovements: string[];
  status: 'Production' | 'Active Development' | 'Research Prototype';
  featured: boolean;
}

export interface ResearchItem {
  id: string;
  title: string;
  status: 'Paper Drafted' | 'Active Research' | 'Simulated & Testing' | 'Patent Pending Concept';
  topic: string;
  venue: string;
  targetDate: string;
  abstract: string;
  architectureDetails: string;
  authors: string[];
  techUsed: string[];
  patentIdea?: string;
}

export interface SkillItem {
  name: string;
  proficiency: number; // 0 to 100
  level: 'Expert' | 'Advanced' | 'Proficient' | 'Building';
  category: 'Programming' | 'AI & ML' | 'Embedded & Hardware' | 'Networking & Security' | 'Systems & Tools';
  description: string;
}

export interface BlogArticle {
  id: string;
  title: string;
  slug: string;
  category: 'AI Engineering' | 'Intelligent Transportation' | 'Android Security' | 'Research';
  date: string;
  readTime: string;
  excerpt: string;
  content: string;
  tags: string[];
  featured?: boolean;
}

export interface Achievement {
  id: string;
  title: string;
  category: 'Technical Competition' | 'Paper Presentation' | 'Hackathon' | 'Academic Award' | 'Research' | 'Open Source';
  organization: string;
  year: string;
  description: string;
  badgeText: string;
}

export interface Certification {
  id: string;
  title: string;
  issuer: 'AWS' | 'Google' | 'Microsoft' | 'Coursera' | 'Anna University';
  date: string;
  credentialId?: string;
  status: 'Completed' | 'In Progress' | 'Upcoming Focus';
  skillsVerified: string[];
}

export interface TimelineEntry {
  id: string;
  year: string;
  period: string;
  title: string;
  institution: string;
  location: string;
  category: 'Education' | 'Research' | 'Open Source' | 'Hackathon' | 'Milestone';
  description: string;
  highlights: string[];
}

export interface SocialProfile {
  platform: string;
  username: string;
  url: string;
  category: 'Code & Dev' | 'Research & Papers' | 'Professional & Social' | 'Competitive Code';
  icon: string;
  isVerified: boolean;
  actionText: string;
}

export interface CurrentStatus {
  currentlyBuilding: string[];
  currentlyLearning: string[];
  currentlyResearching: string[];
  currentReading: string[];
  openSourceFocus: string[];
}
