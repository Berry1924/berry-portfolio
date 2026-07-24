import React from 'react';
import { ArrowRight, FileText, Mail, Sparkles, Terminal, ChevronDown } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { PERSONAL_INFO } from '../data/portfolioData';

interface HeroSectionProps {
  onOpenResume: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenResume }) => {
  return (
    <section className="relative min-h-screen pt-28 pb-16 flex flex-col justify-center items-center overflow-hidden">
      
      {/* Ambient Gradient Glows */}
      <div className="glow-orb w-96 h-96 bg-google-blue top-20 -left-20" />
      <div className="glow-orb w-96 h-96 bg-accent-purple bottom-10 -right-20" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Text Content Column */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Availability Badge */}
            <div className="inline-flex items-center space-x-2.5 px-3.5 py-1.5 rounded-full bg-slate-800/80 border border-slate-700/80 backdrop-blur-md shadow-sm">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span className="text-xs font-mono font-medium text-slate-300">
                {PERSONAL_INFO.availabilityStatus}
              </span>
            </div>

            {/* Name & Animated Headline */}
            <div className="space-y-2">
              <h2 className="text-sm sm:text-base font-mono tracking-wider uppercase text-google-blue font-semibold">
                {PERSONAL_INFO.fullName}
              </h2>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-100 leading-[1.1]">
                Engineering <br className="hidden sm:inline" />
                <span className="gradient-text-google">Intelligent AI Systems</span> <br />
                & Future Tech
              </h1>
            </div>

            {/* Mission Statement Box */}
            <div className="relative p-4 sm:p-5 rounded-2xl bg-slate-900/60 border border-slate-800 backdrop-blur-md">
              <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-google-blue via-accent-indigo to-accent-purple rounded-l-2xl" />
              <p className="text-sm sm:text-base italic text-slate-300 font-sans leading-relaxed">
                "{PERSONAL_INFO.mission}"
              </p>
            </div>

            {/* Sub-headline */}
            <p className="text-xs sm:text-sm text-slate-400 font-sans max-w-2xl leading-relaxed">
              ECE Undergrad (2025–2029) at SKP Engineering College, Anna University. Specializing in autonomous agentic OS architectures, density-adaptive V2V transportation security, and privacy-first Android threat engines.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4 pt-2">
              <a
                href="#projects"
                className="inline-flex items-center space-x-2 px-6 py-3 rounded-xl bg-gradient-to-r from-google-blue via-accent-indigo to-accent-purple text-white font-semibold text-sm shadow-lg shadow-google-blue/20 hover:shadow-google-blue/40 hover:scale-[1.02] active:scale-[0.98] transition-all"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                onClick={onOpenResume}
                className="inline-flex items-center space-x-2 px-5 py-3 rounded-xl bg-slate-800/90 hover:bg-slate-700/90 text-slate-200 font-semibold text-sm border border-slate-700 transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <FileText className="w-4 h-4 text-google-blue" />
                <span>Resume PDF</span>
              </button>

              <a
                href="#contact"
                className="inline-flex items-center space-x-2 px-5 py-3 rounded-xl bg-slate-900/80 hover:bg-slate-800/80 text-slate-300 font-medium text-sm border border-slate-800 transition-all"
              >
                <Mail className="w-4 h-4 text-accent-cyan" />
                <span>Contact Me</span>
              </a>
            </div>

            {/* Social Quick Bar */}
            <div className="flex items-center justify-center lg:justify-start space-x-4 pt-4 border-t border-slate-800/80">
              <span className="text-xs font-mono text-slate-500">Connect:</span>
              <a
                href="https://github.com/BerrySurya"
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-lg bg-slate-800/60 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors"
                aria-label="GitHub"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com/in/berry-sugandh-surya"
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-lg bg-slate-800/60 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <LinkedinIcon className="w-4 h-4 text-google-blue" />
              </a>
              <a
                href="mailto:berry.sugandh.surya@gmail.com"
                className="p-2 rounded-lg bg-slate-800/60 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors"
                aria-label="Email"
              >
                <Mail className="w-4 h-4 text-accent-cyan" />
              </a>
              <a
                href="https://x.com/BerrySurya_AI"
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-lg bg-slate-800/60 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors font-bold text-xs"
              >
                𝕏
              </a>
            </div>

          </div>

          {/* Right Visual Image & Interactive Card Column */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md">
              
              {/* Glow background behind portrait */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-google-blue via-accent-indigo to-accent-purple opacity-30 blur-xl animate-pulse-slow" />

              {/* Portrait & Tech Terminal Card Container */}
              <div className="relative glass-panel rounded-3xl p-6 border border-slate-700/60 shadow-2xl space-y-5">
                
                {/* Tech Header */}
                <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                    <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                    <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  </div>
                  <div className="flex items-center space-x-1.5 text-[11px] font-mono text-slate-400">
                    <Terminal className="w-3.5 h-3.5 text-google-blue" />
                    <span>berry-ai-workstation</span>
                  </div>
                </div>

                {/* Professional Profile Graphic / Image Badge */}
                <div className="relative rounded-2xl overflow-hidden bg-slate-950 border border-slate-800 p-6 flex flex-col items-center justify-center text-center space-y-4">
                  <div className="relative w-24 h-24 rounded-2xl bg-gradient-to-tr from-google-blue via-accent-indigo to-accent-purple p-1 shadow-xl">
                    <div className="w-full h-full bg-[#0B0F19] rounded-xl flex items-center justify-center">
                      <span className="text-3xl font-mono font-bold gradient-text-google">B</span>
                    </div>
                    <div className="absolute -bottom-1 -right-1 p-1 bg-slate-900 rounded-full border border-slate-700">
                      <Sparkles className="w-4 h-4 text-google-yellow animate-spin" style={{ animationDuration: '8s' }} />
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-slate-100">{PERSONAL_INFO.fullName}</h3>
                    <p className="text-xs text-google-blue font-mono mt-0.5">AI Systems & Research Engineer</p>
                    <p className="text-[11px] text-slate-400 font-mono mt-1">SKP Engineering College • Anna University</p>
                  </div>

                  <div className="w-full grid grid-cols-2 gap-2 text-left pt-2 border-t border-slate-800 text-[11px] font-mono">
                    <div className="bg-slate-900/80 p-2 rounded-lg border border-slate-800">
                      <span className="text-slate-500 block">Focus:</span>
                      <span className="text-slate-200 font-medium">Agentic OS & V2V</span>
                    </div>
                    <div className="bg-slate-900/80 p-2 rounded-lg border border-slate-800">
                      <span className="text-slate-500 block">Target Labs:</span>
                      <span className="text-slate-200 font-medium">Google / OpenAI</span>
                    </div>
                  </div>
                </div>

                {/* Terminal Live Output Simulation */}
                <div className="bg-slate-950 p-3.5 rounded-xl border border-slate-800 font-mono text-[11px] text-slate-300 space-y-1.5">
                  <p className="text-slate-500">$ neon-ai-os --status</p>
                  <p className="text-emerald-400">✓ System Status: 100% Operational</p>
                  <p className="text-slate-400">⚡ Memory Engine: Chroma Vector active</p>
                  <p className="text-accent-cyan">📡 DAAS-V2V Protocol: MATLAB model 42% latency drop</p>
                </div>

              </div>

            </div>
          </div>

        </div>

        {/* Statistics Cards */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {PERSONAL_INFO.stats.map((stat, idx) => (
            <div key={idx} className="glass-card rounded-2xl p-4 sm:p-6 text-center group hover:-translate-y-1 transition-all">
              <div className="text-2xl sm:text-3xl font-extrabold font-mono gradient-text-google mb-1 group-hover:scale-105 transition-transform">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm text-slate-400 font-sans font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Scroll Indicator */}
        <div className="mt-12 flex flex-col items-center justify-center">
          <a href="#about" className="flex flex-col items-center text-slate-500 hover:text-google-blue transition-colors group">
            <span className="text-[10px] font-mono tracking-widest uppercase mb-1">Scroll to Explore</span>
            <ChevronDown className="w-4 h-4 animate-bounce" />
          </a>
        </div>

      </div>
    </section>
  );
};
