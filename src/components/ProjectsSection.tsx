import React, { useState } from 'react';
import { Folder, ExternalLink, ArrowRight, Layers, Sparkles, Cpu, Shield, Activity } from 'lucide-react';
import { GithubIcon } from './Icons';
import { PROJECTS } from '../data/portfolioData';
import type { Project } from '../types';

interface ProjectsSectionProps {
  onSelectProject: (project: Project) => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ onSelectProject }) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = [
    { name: 'All', icon: Sparkles },
    { name: 'AI Systems', icon: Cpu },
    { name: 'Security & Android', icon: Shield },
    { name: 'Research & ITS', icon: Activity },
    { name: 'Machine Learning', icon: Layers },
  ];

  const filteredProjects = activeCategory === 'All'
    ? PROJECTS
    : PROJECTS.filter(p => p.category === activeCategory);

  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-12">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-google-blue/10 border border-google-blue/20 text-google-blue text-xs font-mono">
            <Folder className="w-3.5 h-3.5" />
            <span>Featured Engineering Work</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 tracking-tight">
            Major <span className="gradient-text-google">Projects & Architecture</span>
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 max-w-2xl font-sans">
            High-impact AI operating systems, mobile security engines, and Intelligent Transportation System hardware prototypes.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => {
            const IconComp = cat.icon;
            const isActive = activeCategory === cat.name;
            return (
              <button
                key={cat.name}
                onClick={() => setActiveCategory(cat.name)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-xl text-xs font-mono transition-all ${
                  isActive
                    ? 'bg-gradient-to-r from-google-blue via-accent-indigo to-accent-purple text-white shadow-md shadow-google-blue/20 font-semibold scale-105'
                    : 'bg-slate-800/80 text-slate-300 hover:bg-slate-700/80 border border-slate-700/60'
                }`}
              >
                <IconComp className="w-3.5 h-3.5" />
                <span>{cat.name}</span>
              </button>
            );
          })}
        </div>

        {/* Projects Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="glass-card rounded-3xl p-6 sm:p-8 flex flex-col justify-between space-y-6 hover:-translate-y-1.5 transition-all group relative overflow-hidden"
            >
              {/* Card Subtle Top Line Gradient */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-google-blue via-accent-indigo to-accent-purple opacity-75" />

              <div className="space-y-4">
                
                {/* Header Info */}
                <div className="flex items-start justify-between">
                  <div>
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-semibold bg-google-blue/10 text-google-blue border border-google-blue/20">
                      {project.category}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-extrabold text-slate-100 font-sans mt-2 group-hover:text-google-blue transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs text-slate-400 font-mono mt-0.5">{project.subtitle}</p>
                  </div>

                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 shrink-0">
                    {project.status}
                  </span>
                </div>

                {/* Tagline */}
                <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 font-mono text-xs text-google-blue">
                  ⚡ {project.tagline}
                </div>

                {/* Solution Summary */}
                <p className="text-xs sm:text-sm text-slate-300 font-sans leading-relaxed line-clamp-3">
                  {project.solution}
                </p>

                {/* Tech Badges */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {project.techStack.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded-lg bg-slate-800/90 text-slate-300 text-[11px] font-mono border border-slate-700/60"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

              </div>

              {/* Card Footer Action Bar */}
              <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
                      title="GitHub Repository"
                    >
                      <GithubIcon className="w-4 h-4" />
                    </a>
                  )}
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
                      title="Live Demo"
                    >
                      <ExternalLink className="w-4 h-4 text-google-blue" />
                    </a>
                  )}
                </div>

                <button
                  onClick={() => onSelectProject(project)}
                  className="inline-flex items-center space-x-1.5 px-4 py-2 rounded-xl bg-slate-800 hover:bg-google-blue text-slate-200 hover:text-white font-mono text-xs transition-all group-hover:shadow-md"
                >
                  <span>Architecture & Details</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
