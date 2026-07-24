import React from 'react';
import { X, ExternalLink, BookOpen, Layers, CheckCircle2, ArrowUpRight, Cpu, ShieldAlert, Lightbulb } from 'lucide-react';
import { GithubIcon } from './Icons';
import type { Project } from '../types';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/75 backdrop-blur-md overflow-y-auto">
      <div
        className="relative w-full max-w-4xl bg-[#0F172A] border border-slate-700/80 rounded-3xl shadow-2xl overflow-hidden text-slate-100 my-8 animate-in fade-in zoom-in duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Header Bar */}
        <div className="flex items-center justify-between p-6 border-b border-slate-800 bg-slate-900/80 sticky top-0 z-10 backdrop-blur-md">
          <div>
            <div className="flex items-center space-x-2">
              <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono font-semibold bg-google-blue/10 text-google-blue border border-google-blue/20">
                {project.category}
              </span>
              <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                {project.status}
              </span>
            </div>
            <h2 className="text-xl sm:text-2xl font-extrabold text-slate-100 font-sans mt-1">
              {project.title}
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 font-mono mt-0.5">{project.subtitle}</p>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-slate-200 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body Content */}
        <div className="p-6 sm:p-8 space-y-8 max-h-[75vh] overflow-y-auto">
          
          {/* Action Links Bar */}
          <div className="flex flex-wrap items-center gap-3 p-4 rounded-2xl bg-slate-900/60 border border-slate-800">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center space-x-2 px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-mono text-xs border border-slate-700 transition-all"
              >
                <GithubIcon className="w-4 h-4 text-google-blue" />
                <span>GitHub Repository</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-slate-400" />
              </a>
            )}
            {project.docUrl && (
              <a
                href={project.docUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center space-x-2 px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-mono text-xs border border-slate-700 transition-all"
              >
                <BookOpen className="w-4 h-4 text-accent-indigo" />
                <span>Documentation / Paper</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-slate-400" />
              </a>
            )}
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center space-x-2 px-4 py-2 rounded-xl bg-gradient-to-r from-google-blue to-accent-purple text-white font-mono text-xs font-semibold shadow-md transition-all"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Live Interactive Demo</span>
              </a>
            )}
          </div>

          {/* Problem & Solution Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            <div className="p-5 rounded-2xl bg-rose-500/5 border border-rose-500/20 space-y-3">
              <div className="flex items-center space-x-2 text-rose-400 font-mono text-xs font-bold uppercase">
                <ShieldAlert className="w-4 h-4" />
                <span>The Problem</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 font-sans leading-relaxed">
                {project.problem}
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-emerald-500/5 border border-emerald-500/20 space-y-3">
              <div className="flex items-center space-x-2 text-emerald-400 font-mono text-xs font-bold uppercase">
                <Lightbulb className="w-4 h-4" />
                <span>Engineered Solution</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 font-sans leading-relaxed">
                {project.solution}
              </p>
            </div>

          </div>

          {/* Architecture Description */}
          <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-3">
            <h3 className="text-sm font-bold text-slate-200 font-mono flex items-center space-x-2">
              <Layers className="w-4 h-4 text-google-blue" />
              <span>System Architecture & Pipeline</span>
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 font-mono leading-relaxed bg-slate-950 p-4 rounded-xl border border-slate-800/80">
              {project.architecture}
            </p>
          </div>

          {/* Key Features List */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold text-slate-200 font-mono flex items-center space-x-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>Key Features & Capabilities</span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {project.features.map((feat, idx) => (
                <div key={idx} className="flex items-start space-x-2.5 p-3 rounded-xl bg-slate-900/60 border border-slate-800 text-xs text-slate-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-google-blue mt-1.5 shrink-0" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack Badges */}
          <div className="space-y-3">
            <h3 className="text-sm font-bold text-slate-200 font-mono flex items-center space-x-2">
              <Cpu className="w-4 h-4 text-accent-indigo" />
              <span>Technologies & Tools Used</span>
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 rounded-xl bg-slate-800 text-slate-200 font-mono text-xs border border-slate-700"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Future Improvements */}
          <div className="p-5 rounded-2xl bg-amber-500/5 border border-amber-500/20 space-y-3">
            <h3 className="text-xs font-mono font-bold uppercase text-amber-400">Future Roadmap & Enhancements</h3>
            <ul className="space-y-1.5 text-xs text-slate-300 font-sans">
              {project.futureImprovements.map((imp, idx) => (
                <li key={idx} className="flex items-start space-x-2">
                  <span className="text-amber-400 font-bold">•</span>
                  <span>{imp}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Footer */}
        <div className="p-4 border-t border-slate-800 bg-slate-900/80 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-mono transition-colors"
          >
            Close Viewer
          </button>
        </div>

      </div>
    </div>
  );
};
