import React, { useState } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { ParticleBackground } from './components/ParticleBackground';
import { Navbar } from './components/Navbar';
import { CommandPalette } from './components/CommandPalette';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { StatusSection } from './components/StatusSection';
import { SkillsSection } from './components/SkillsSection';
import { ProjectsSection } from './components/ProjectsSection';
import { ProjectModal } from './components/ProjectModal';
import { ResearchSection } from './components/ResearchSection';
import { ResearchModal } from './components/ResearchModal';
import { OpenSourceSection } from './components/OpenSourceSection';
import { BlogSection } from './components/BlogSection';
import { BlogModal } from './components/BlogModal';
import { TimelineSection } from './components/TimelineSection';
import { AchievementsSection } from './components/AchievementsSection';
import { ResumeModal } from './components/ResumeModal';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

import { PROJECTS, RESEARCH_ITEMS, BLOG_ARTICLES } from './data/portfolioData';
import type { Project, ResearchItem, BlogArticle } from './types';

export const AppContent: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [selectedResearch, setSelectedResearch] = useState<ResearchItem | null>(null);
  const [selectedBlog, setSelectedBlog] = useState<BlogArticle | null>(null);
  const [isCommandPaletteOpen, setIsCommandPaletteOpen] = useState<boolean>(false);
  const [isResumeOpen, setIsResumeOpen] = useState<boolean>(false);

  const handleSelectProjectById = (id: string) => {
    const proj = PROJECTS.find(p => p.id === id);
    if (proj) setSelectedProject(proj);
  };

  const handleSelectResearchById = (id: string) => {
    const paper = RESEARCH_ITEMS.find(r => r.id === id);
    if (paper) setSelectedResearch(paper);
  };

  const handleSelectBlogById = (id: string) => {
    const article = BLOG_ARTICLES.find(b => b.id === id);
    if (article) setSelectedBlog(article);
  };

  return (
    <div className="relative min-h-screen font-sans antialiased text-slate-100 bg-[#090D16] selection:bg-google-blue selection:text-white transition-colors duration-300">
      
      {/* Background Interactive Particle Canvas */}
      <ParticleBackground />

      {/* Glassmorphic Navbar */}
      <Navbar
        onOpenCommandPalette={() => setIsCommandPaletteOpen(true)}
        onOpenResume={() => setIsResumeOpen(true)}
      />

      {/* Main Page Sections */}
      <main className="relative z-10 space-y-8">
        <HeroSection onOpenResume={() => setIsResumeOpen(true)} />
        <AboutSection />
        <StatusSection />
        <SkillsSection />
        <ProjectsSection onSelectProject={(p) => setSelectedProject(p)} />
        <ResearchSection onSelectResearch={(r) => setSelectedResearch(r)} />
        <OpenSourceSection />
        <BlogSection onSelectBlog={(b) => setSelectedBlog(b)} />
        <TimelineSection />
        <AchievementsSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Modals & Dialogs */}
      <CommandPalette
        isOpen={isCommandPaletteOpen}
        onClose={() => setIsCommandPaletteOpen(false)}
        onSelectProject={handleSelectProjectById}
        onSelectResearch={handleSelectResearchById}
        onSelectBlog={handleSelectBlogById}
        onOpenResume={() => setIsResumeOpen(true)}
      />

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      <ResearchModal
        research={selectedResearch}
        onClose={() => setSelectedResearch(null)}
      />

      <BlogModal
        article={selectedBlog}
        onClose={() => setSelectedBlog(null)}
      />

      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />

    </div>
  );
};

export function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;
