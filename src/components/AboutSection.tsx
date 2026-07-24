import React from 'react';
import { Target, Compass, BookOpen, ShieldCheck, Cpu, Zap, Layers } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const AboutSection: React.FC = () => {
  const coreValues = [
    {
      icon: Cpu,
      title: "First-Principles Systems Engineering",
      description: "I don't rely on shallow abstractions. I build understanding from the hardware registers and RF signals up to higher-level AI models."
    },
    {
      icon: ShieldCheck,
      title: "Privacy & Safety First",
      description: "AI systems must empower users without harvesting their private data. Offline inference and local-first architectures are non-negotiable."
    },
    {
      icon: Zap,
      title: "Sub-Millisecond Performance",
      description: "Whether optimizing C++ vector query engines or DSRC vehicular safety packets, low latency is critical to real-world reliability."
    },
    {
      icon: Layers,
      title: "Open Source Impact",
      description: "Sharing architectures openly accelerates human technological progress. I publish core tools, protocols, and documentation for all developers."
    }
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-google-blue/10 border border-google-blue/20 text-google-blue text-xs font-mono">
            <Compass className="w-3.5 h-3.5" />
            <span>Engineering Philosophy & Profile</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 tracking-tight">
            About <span className="gradient-text-google">Berry</span>
          </h2>
          <p className="text-sm text-slate-400 max-w-2xl font-sans">
            AI Systems Engineer, Researcher, and Open Source builder dedicated to solving complex, real-world problems.
          </p>
        </div>

        {/* Bio Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          
          {/* Biography Box */}
          <div className="lg:col-span-7 glass-card rounded-3xl p-6 sm:p-8 space-y-6">
            <h3 className="text-xl font-bold text-slate-100 flex items-center space-x-2">
              <BookOpen className="w-5 h-5 text-google-blue" />
              <span>Professional Biography</span>
            </h3>

            <div className="space-y-4 text-sm text-slate-300 font-sans leading-relaxed">
              <p>
                My name is <strong className="text-slate-100">{PERSONAL_INFO.fullName}</strong> (known professionally as <strong className="text-google-blue">Berry</strong>). I am currently an Electronics and Communication Engineering (ECE) undergraduate at <strong className="text-slate-100">SKP Engineering College, Anna University (2025 – 2029)</strong>.
              </p>
              <p>
                My passion lies at the intersection of <strong className="text-slate-100">Artificial Intelligence, Embedded Systems, and Intelligent Transportation Networks</strong>. Unlike conventional software development, my engineering methodology focuses on building end-to-end autonomous systems—from micro-controller hardware signals to deep learning model inference.
              </p>
              <p>
                Whether developing local agentic AI operating systems like <strong className="text-accent-indigo">NEON AI OS</strong> or modeling density-aware Vehicle-to-Vehicle (V2V) safety protocols like <strong className="text-accent-cyan">DAAS-V2V</strong>, my goal is to engineer technology that operates reliably under real-world constraints.
              </p>
            </div>

            {/* Academic Highlights */}
            <div className="pt-4 border-t border-slate-800 grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-mono">
              <div className="bg-slate-900/60 p-3.5 rounded-xl border border-slate-800">
                <span className="text-slate-500 block mb-1">Degree Program</span>
                <span className="text-slate-200 font-semibold">{PERSONAL_INFO.education.degree}</span>
              </div>
              <div className="bg-slate-900/60 p-3.5 rounded-xl border border-slate-800">
                <span className="text-slate-500 block mb-1">University Affiliation</span>
                <span className="text-slate-200 font-semibold">{PERSONAL_INFO.education.college} (Anna University)</span>
              </div>
            </div>

          </div>

          {/* Vision & Long Term Goals Box */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="glass-card rounded-3xl p-6 sm:p-8 space-y-5 border-l-4 border-l-google-blue">
              <h3 className="text-lg font-bold text-slate-100 flex items-center space-x-2">
                <Target className="w-5 h-5 text-google-blue" />
                <span>Long Term Mission & Target Labs</span>
              </h3>

              <p className="text-xs sm:text-sm text-slate-300 font-sans leading-relaxed">
                {PERSONAL_INFO.longTermGoal.vision}
              </p>

              <div className="space-y-2 pt-2">
                <span className="text-xs font-mono text-slate-400">Target Research & Engineering Labs:</span>
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {PERSONAL_INFO.longTermGoal.dreamCompanies.map((company, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded-lg bg-slate-800/90 text-slate-200 text-xs font-mono border border-slate-700/80 hover:border-google-blue/50 transition-colors"
                    >
                      {company}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-3 border-t border-slate-800/80 space-y-2">
                <span className="text-xs font-mono text-slate-400">Primary Engineering Roles:</span>
                <ul className="text-xs font-sans text-slate-300 space-y-1">
                  {PERSONAL_INFO.longTermGoal.roles.map((role, idx) => (
                    <li key={idx} className="flex items-center space-x-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-google-blue"></span>
                      <span>{role}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

          </div>

        </div>

        {/* Engineering Philosophy Cards */}
        <div className="space-y-6">
          <h3 className="text-center text-lg font-bold text-slate-200 font-mono">
            Core Engineering Principles
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreValues.map((val, idx) => {
              const IconComp = val.icon;
              return (
                <div key={idx} className="glass-card rounded-2xl p-6 space-y-3 hover:-translate-y-1 transition-all">
                  <div className="w-10 h-10 rounded-xl bg-google-blue/10 border border-google-blue/20 flex items-center justify-center text-google-blue">
                    <IconComp className="w-5 h-5" />
                  </div>
                  <h4 className="text-sm font-bold text-slate-100 font-sans">{val.title}</h4>
                  <p className="text-xs text-slate-400 font-sans leading-relaxed">{val.description}</p>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
