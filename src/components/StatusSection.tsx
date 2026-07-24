import React from 'react';
import { Activity, Hammer, GraduationCap, BookOpen, GitPullRequest, Radio } from 'lucide-react';
import { CURRENT_STATUS } from '../data/portfolioData';

export const StatusSection: React.FC = () => {
  return (
    <section id="status" className="py-16 relative bg-slate-950/40 border-y border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-12">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono">
            <Activity className="w-3.5 h-3.5 animate-pulse" />
            <span>Live Activity Monitor</span>
          </div>
          <h2 className="text-3xl font-extrabold text-slate-100 tracking-tight">
            Current <span className="gradient-text-google">Engineering Status</span>
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 max-w-xl font-sans">
            Real-time breakdown of active build tasks, literature reading, and research prototypes.
          </p>
        </div>

        {/* Status Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* Currently Building */}
          <div className="glass-card rounded-2xl p-6 space-y-4 border-t-2 border-t-google-blue">
            <div className="flex items-center space-x-2.5">
              <div className="p-2 rounded-xl bg-google-blue/10 text-google-blue">
                <Hammer className="w-4 h-4" />
              </div>
              <h3 className="text-sm font-bold text-slate-100 font-mono">Currently Building</h3>
            </div>
            <ul className="space-y-2.5 text-xs text-slate-300 font-sans">
              {CURRENT_STATUS.currentlyBuilding.map((item, idx) => (
                <li key={idx} className="flex items-start space-x-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-google-blue mt-1.5 shrink-0" />
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Currently Researching */}
          <div className="glass-card rounded-2xl p-6 space-y-4 border-t-2 border-t-accent-indigo">
            <div className="flex items-center space-x-2.5">
              <div className="p-2 rounded-xl bg-accent-indigo/10 text-accent-indigo">
                <Radio className="w-4 h-4" />
              </div>
              <h3 className="text-sm font-bold text-slate-100 font-mono">Currently Researching</h3>
            </div>
            <ul className="space-y-2.5 text-xs text-slate-300 font-sans">
              {CURRENT_STATUS.currentlyResearching.map((item, idx) => (
                <li key={idx} className="flex items-start space-x-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent-indigo mt-1.5 shrink-0" />
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Currently Learning */}
          <div className="glass-card rounded-2xl p-6 space-y-4 border-t-2 border-t-accent-cyan">
            <div className="flex items-center space-x-2.5">
              <div className="p-2 rounded-xl bg-accent-cyan/10 text-accent-cyan">
                <GraduationCap className="w-4 h-4" />
              </div>
              <h3 className="text-sm font-bold text-slate-100 font-mono">Currently Learning</h3>
            </div>
            <ul className="space-y-2.5 text-xs text-slate-300 font-sans">
              {CURRENT_STATUS.currentlyLearning.map((item, idx) => (
                <li key={idx} className="flex items-start space-x-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent-cyan mt-1.5 shrink-0" />
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Current Reading */}
          <div className="glass-card rounded-2xl p-6 space-y-4 border-t-2 border-t-amber-500">
            <div className="flex items-center space-x-2.5">
              <div className="p-2 rounded-xl bg-amber-500/10 text-amber-400">
                <BookOpen className="w-4 h-4" />
              </div>
              <h3 className="text-sm font-bold text-slate-100 font-mono">Current Literature</h3>
            </div>
            <ul className="space-y-2.5 text-xs text-slate-300 font-sans">
              {CURRENT_STATUS.currentReading.map((item, idx) => (
                <li key={idx} className="flex items-start space-x-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-1.5 shrink-0" />
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Open Source Focus */}
          <div className="glass-card rounded-2xl p-6 space-y-4 border-t-2 border-t-emerald-500 lg:col-span-2">
            <div className="flex items-center space-x-2.5">
              <div className="p-2 rounded-xl bg-emerald-500/10 text-emerald-400">
                <GitPullRequest className="w-4 h-4" />
              </div>
              <h3 className="text-sm font-bold text-slate-100 font-mono">Open Source Commit Focus</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {CURRENT_STATUS.openSourceFocus.map((item, idx) => (
                <div key={idx} className="bg-slate-900/60 p-3 rounded-xl border border-slate-800 flex items-start space-x-2.5 text-xs text-slate-300">
                  <span className="px-1.5 py-0.5 rounded bg-emerald-500/10 text-emerald-400 font-mono text-[10px] border border-emerald-500/20 shrink-0">ACTIVE</span>
                  <span className="leading-relaxed">{item}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
