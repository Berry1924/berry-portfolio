import React from 'react';
import { ArrowUp } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#060911] border-t border-slate-800/80 text-slate-400 font-sans pt-16 pb-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-slate-800/80">
          
          {/* Brand & Quote Column */}
          <div className="md:col-span-6 space-y-4">
            <div className="flex items-center space-x-2">
              <span className="font-extrabold text-xl text-slate-100 font-sans tracking-tight">
                {PERSONAL_INFO.fullName}
              </span>
              <span className="text-xs font-mono text-google-blue font-semibold px-2 py-0.5 rounded bg-google-blue/10 border border-google-blue/20">
                Berry.ai
              </span>
            </div>
            
            <p className="text-xs text-slate-400 font-sans italic max-w-md leading-relaxed">
              "{PERSONAL_INFO.mission}"
            </p>

            <p className="text-xs text-slate-500 font-mono">
              SKP Engineering College • Anna University (2025–2029)
            </p>
          </div>

          {/* Quick Section Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase text-slate-200 tracking-wider">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs font-sans">
              <li><a href="#about" className="hover:text-google-blue transition-colors">About & Philosophy</a></li>
              <li><a href="#projects" className="hover:text-google-blue transition-colors">Major Projects & OS</a></li>
              <li><a href="#research" className="hover:text-google-blue transition-colors">Research & Publications</a></li>
              <li><a href="#skills" className="hover:text-google-blue transition-colors">Skills & Capabilities</a></li>
              <li><a href="#blog" className="hover:text-google-blue transition-colors">Engineering Blog</a></li>
              <li><a href="#contact" className="hover:text-google-blue transition-colors">Social Profiles & Contact</a></li>
            </ul>
          </div>

          {/* Core Projects Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase text-slate-200 tracking-wider">
              Featured Systems
            </h4>
            <ul className="space-y-2 text-xs font-mono text-slate-400">
              <li><a href="https://github.com/BerrySurya/NEON-AI-OS" target="_blank" rel="noreferrer" className="hover:text-google-blue transition-colors">NEON AI OS</a></li>
              <li><a href="https://github.com/BerrySurya/SafeNet-Android" target="_blank" rel="noreferrer" className="hover:text-google-blue transition-colors">SafeNet Security</a></li>
              <li><a href="https://github.com/BerrySurya/DAAS-V2V-Research" target="_blank" rel="noreferrer" className="hover:text-google-blue transition-colors">DAAS-V2V Protocol</a></li>
              <li><a href="https://github.com/BerrySurya/AI-Voice-Detection" target="_blank" rel="noreferrer" className="hover:text-google-blue transition-colors">AI Voice Forensics</a></li>
            </ul>
          </div>

        </div>

        {/* Bottom Credits & Back To Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono">
          <p className="text-slate-500 text-center sm:text-left">
            © {new Date().getFullYear()} A. Berry Sugandh Surya (Berry). Engineered with React, TypeScript & Tailwind CSS.
          </p>

          <div className="flex items-center space-x-4">
            <button
              onClick={scrollToTop}
              className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 transition-colors"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5 text-google-blue" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
