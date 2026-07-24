import React from 'react';
import { Milestone } from 'lucide-react';
import { TIMELINE } from '../data/portfolioData';

export const TimelineSection: React.FC = () => {
  return (
    <section id="timeline" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-google-blue/10 border border-google-blue/20 text-google-blue text-xs font-mono">
            <Milestone className="w-3.5 h-3.5" />
            <span>Academic & Career Trajectory</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 tracking-tight">
            Journey & <span className="gradient-text-google">Milestones</span>
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 max-w-xl font-sans">
            Chronological progression across Anna University ECE coursework, major engineering builds, research initiatives, and long-term vision.
          </p>
        </div>

        {/* Vertical Timeline Container */}
        <div className="relative border-l-2 border-slate-800 ml-4 md:ml-32 space-y-12">
          {TIMELINE.map((item) => (
            <div key={item.id} className="relative pl-8 md:pl-10 group">
              
              {/* Timeline Node Dot */}
              <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-[#090D16] border-2 border-google-blue group-hover:bg-google-blue group-hover:scale-125 transition-all shadow-md shadow-google-blue/50" />

              {/* Year Label Floating Left on Large Screens */}
              <div className="hidden md:block absolute -left-36 top-1.5 text-right w-24">
                <span className="text-xs font-mono font-bold text-google-blue px-2 py-1 rounded bg-google-blue/10 border border-google-blue/20">
                  {item.year}
                </span>
              </div>

              {/* Timeline Card */}
              <div className="glass-card rounded-2xl p-6 space-y-4 hover:-translate-y-1 transition-all">
                
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div>
                    <span className="md:hidden text-xs font-mono text-google-blue font-bold mr-2">
                      [{item.year}]
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono bg-slate-800 text-slate-300 border border-slate-700">
                      {item.category}
                    </span>
                    <h3 className="text-lg font-bold text-slate-100 font-sans mt-1">
                      {item.title}
                    </h3>
                    <p className="text-xs text-google-blue font-mono">{item.institution} • {item.location}</p>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-slate-300 font-sans leading-relaxed">
                  {item.description}
                </p>

                {/* Highlights Bullet List */}
                <div className="pt-2 border-t border-slate-800/80 space-y-1.5">
                  {item.highlights.map((h, hIdx) => (
                    <div key={hIdx} className="flex items-start space-x-2 text-xs text-slate-400 font-sans">
                      <span className="text-google-blue font-bold mt-0.5">•</span>
                      <span>{h}</span>
                    </div>
                  ))}
                </div>

              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
