import React from 'react';
import { ShieldCheck, Trophy } from 'lucide-react';
import { ACHIEVEMENTS, CERTIFICATIONS } from '../data/portfolioData';

export const AchievementsSection: React.FC = () => {
  return (
    <section className="py-20 relative bg-slate-950/30 border-t border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-mono">
            <Trophy className="w-3.5 h-3.5" />
            <span>Honors, Competitions & Certifications</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 tracking-tight">
            Achievements & <span className="gradient-text-google">Credentials</span>
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 max-w-xl font-sans">
            Technical awards, hackathon victories, paper presentation honors, and industry cloud & AI certifications.
          </p>
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {ACHIEVEMENTS.map((ach) => (
            <div key={ach.id} className="glass-card rounded-2xl p-6 space-y-4 flex flex-col justify-between border-l-4 border-l-amber-500 hover:-translate-y-1 transition-all">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-semibold bg-amber-500/10 text-amber-400 border border-amber-500/20">
                    {ach.badgeText}
                  </span>
                  <span className="text-xs font-mono text-slate-500">{ach.year}</span>
                </div>
                <h3 className="text-base font-bold text-slate-100 font-sans">
                  {ach.title}
                </h3>
                <p className="text-xs text-google-blue font-mono">{ach.organization}</p>
                <p className="text-xs text-slate-300 font-sans leading-relaxed">
                  {ach.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Certifications Box */}
        <div className="space-y-6">
          <h3 className="text-center text-lg font-bold text-slate-200 font-mono flex items-center justify-center space-x-2">
            <ShieldCheck className="w-5 h-5 text-google-blue" />
            <span>Verified Technical Certifications</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {CERTIFICATIONS.map((cert) => (
              <div key={cert.id} className="glass-card rounded-2xl p-5 space-y-3 flex flex-col justify-between">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono font-semibold bg-google-blue/10 text-google-blue border border-google-blue/20">
                      {cert.issuer}
                    </span>
                    <span className="text-[10px] font-mono text-emerald-400">✓ {cert.status}</span>
                  </div>
                  <h4 className="text-xs sm:text-sm font-bold text-slate-100 font-sans leading-snug">
                    {cert.title}
                  </h4>
                </div>

                <div className="pt-2 border-t border-slate-800/80 space-y-1.5 text-[11px] font-mono text-slate-400">
                  <span className="block text-[10px] text-slate-500 uppercase">Verified Skills:</span>
                  <div className="flex flex-wrap gap-1">
                    {cert.skillsVerified.map((s, idx) => (
                      <span key={idx} className="px-1.5 py-0.5 rounded bg-slate-900 text-slate-300 text-[10px]">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
