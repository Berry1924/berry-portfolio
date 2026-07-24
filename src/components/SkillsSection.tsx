import React, { useState } from 'react';
import { Cpu, Code, Shield, Wrench, Terminal, Sparkles } from 'lucide-react';
import { SKILLS } from '../data/portfolioData';

export const SkillsSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = [
    { name: 'All', icon: Sparkles },
    { name: 'Programming', icon: Code },
    { name: 'AI & ML', icon: Cpu },
    { name: 'Embedded & Hardware', icon: Terminal },
    { name: 'Networking & Security', icon: Shield },
    { name: 'Systems & Tools', icon: Wrench },
  ];

  const filteredSkills = activeCategory === 'All'
    ? SKILLS
    : SKILLS.filter(s => s.category === activeCategory);

  return (
    <section id="skills" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-12">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-google-blue/10 border border-google-blue/20 text-google-blue text-xs font-mono">
            <Cpu className="w-3.5 h-3.5" />
            <span>Technical Capabilities & Mastery</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 tracking-tight">
            Skills & <span className="gradient-text-google">Domain Expertise</span>
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 max-w-xl font-sans">
            Rigorous proficiency across software development, machine learning, embedded microcontrollers, and system architecture.
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
                    ? 'bg-gradient-to-r from-google-blue to-accent-indigo text-white shadow-md shadow-google-blue/20 font-semibold scale-105'
                    : 'bg-slate-800/80 text-slate-300 hover:bg-slate-700/80 border border-slate-700/60'
                }`}
              >
                <IconComp className="w-3.5 h-3.5" />
                <span>{cat.name}</span>
              </button>
            );
          })}
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, idx) => (
            <div
              key={idx}
              className="glass-card rounded-2xl p-6 space-y-4 hover:-translate-y-1 transition-all group"
            >
              
              {/* Header: Skill Name & Level Badge */}
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-google-blue group-hover:scale-125 transition-transform" />
                  <h3 className="text-base font-bold text-slate-100 font-sans">{skill.name}</h3>
                </div>
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-semibold bg-google-blue/10 text-google-blue border border-google-blue/20">
                  {skill.level}
                </span>
              </div>

              {/* Progress Bar */}
              <div className="space-y-1.5">
                <div className="flex justify-between text-xs font-mono text-slate-400">
                  <span>Proficiency</span>
                  <span className="text-google-blue font-bold">{skill.proficiency}%</span>
                </div>
                <div className="w-full h-2 rounded-full bg-slate-800 overflow-hidden p-0.5 border border-slate-700/50">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-google-blue via-accent-indigo to-accent-purple transition-all duration-1000"
                    style={{ width: `${skill.proficiency}%` }}
                  />
                </div>
              </div>

              {/* Description */}
              <p className="text-xs text-slate-400 font-sans leading-relaxed">
                {skill.description}
              </p>

              {/* Category Tag */}
              <div className="pt-2 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-mono text-slate-500">
                <span>Domain:</span>
                <span className="text-slate-300">{skill.category}</span>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
