import React from 'react';
import { GitBranch, Star, GitCommit, ExternalLink } from 'lucide-react';
import { GithubIcon } from './Icons';
import { PROJECTS } from '../data/portfolioData';

export const OpenSourceSection: React.FC = () => {
  // Simulated GitHub Contribution Grid (16 weeks x 7 days)
  const weeks = Array.from({ length: 16 });
  const days = Array.from({ length: 7 });

  const getIntensity = (wIndex: number, dIndex: number) => {
    const seed = (wIndex * 7 + dIndex * 13) % 10;
    if (seed > 7) return 'bg-emerald-400';
    if (seed > 4) return 'bg-emerald-500/80';
    if (seed > 2) return 'bg-emerald-600/50';
    if (seed > 1) return 'bg-emerald-800/30';
    return 'bg-slate-800/60';
  };

  const topLanguages = [
    { name: 'Python', pct: 45, color: 'bg-google-blue' },
    { name: 'Kotlin / C++', pct: 30, color: 'bg-accent-indigo' },
    { name: 'TypeScript', pct: 15, color: 'bg-accent-cyan' },
    { name: 'MATLAB / Hardware', pct: 10, color: 'bg-amber-500' },
  ];

  return (
    <section id="opensource" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-12">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono">
            <GithubIcon className="w-3.5 h-3.5" />
            <span>Open Source & GitHub Ecosystem</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 tracking-tight">
            Code & <span className="gradient-text-google">Contributions</span>
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 max-w-xl font-sans">
            Transparent public code repositories, active commit activity, and language distributions.
          </p>
        </div>

        {/* GitHub Stats Dashboard Container */}
        <div className="glass-card rounded-3xl p-6 sm:p-8 space-y-8 mb-12">
          
          {/* Header Stats Bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-slate-800">
            <div className="flex items-center space-x-3">
              <div className="p-3 rounded-2xl bg-slate-900 border border-slate-800 text-slate-100">
                <GithubIcon className="w-6 h-6 text-google-blue" />
              </div>
              <div>
                <a
                  href="https://github.com/BerrySurya"
                  target="_blank"
                  rel="noreferrer"
                  className="text-base font-bold text-slate-100 hover:text-google-blue font-mono flex items-center space-x-1.5"
                >
                  <span>@BerrySurya</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-500" />
                </a>
                <p className="text-xs text-slate-400 font-sans">AI Systems Engineer & Researcher</p>
              </div>
            </div>

            <div className="flex items-center space-x-4 text-xs font-mono">
              <div className="bg-slate-900 p-2.5 rounded-xl border border-slate-800 flex items-center space-x-2">
                <GitCommit className="w-4 h-4 text-emerald-400" />
                <span className="text-slate-300">540+ Commits (Past Year)</span>
              </div>
              <div className="bg-slate-900 p-2.5 rounded-xl border border-slate-800 flex items-center space-x-2">
                <Star className="w-4 h-4 text-amber-400" />
                <span className="text-slate-300">120+ Stars Earned</span>
              </div>
            </div>
          </div>

          {/* Contribution Matrix Heatmap */}
          <div className="space-y-3">
            <div className="flex items-center justify-between text-xs font-mono text-slate-400">
              <span>Public Contribution Activity Grid</span>
              <span className="text-[11px] text-slate-500">Less → More</span>
            </div>

            <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 overflow-x-auto">
              <div className="flex gap-1.5 min-w-[600px] justify-between">
                {weeks.map((_, wIdx) => (
                  <div key={wIdx} className="flex flex-col gap-1.5">
                    {days.map((_, dIdx) => (
                      <div
                        key={dIdx}
                        className={`w-3.5 h-3.5 rounded-sm transition-transform hover:scale-125 ${getIntensity(wIdx, dIdx)}`}
                        title={`Activity level: ${wIdx + 1}`}
                      />
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Languages Distribution Bar */}
          <div className="space-y-3">
            <span className="text-xs font-mono text-slate-400 block">Repository Language Ratio</span>
            <div className="w-full h-3 rounded-full bg-slate-900 overflow-hidden flex p-0.5 border border-slate-800">
              {topLanguages.map((lang, idx) => (
                <div
                  key={idx}
                  className={`h-full ${lang.color} first:rounded-l-full last:rounded-r-full`}
                  style={{ width: `${lang.pct}%` }}
                  title={`${lang.name}: ${lang.pct}%`}
                />
              ))}
            </div>
            <div className="flex flex-wrap gap-4 text-xs font-mono text-slate-400 pt-1">
              {topLanguages.map((lang, idx) => (
                <div key={idx} className="flex items-center space-x-1.5">
                  <span className={`w-2.5 h-2.5 rounded-full ${lang.color}`} />
                  <span>{lang.name} ({lang.pct}%)</span>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Pinned Repositories Grid */}
        <div className="space-y-4">
          <h3 className="text-lg font-bold text-slate-200 font-mono flex items-center space-x-2">
            <GitBranch className="w-4 h-4 text-google-blue" />
            <span>Pinned Repositories</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {PROJECTS.slice(0, 4).map((repo) => (
              <div key={repo.id} className="glass-card rounded-2xl p-5 space-y-3 border border-slate-800 hover:border-google-blue/40 transition-colors">
                <div className="flex items-center justify-between">
                  <a
                    href={repo.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm font-bold text-slate-100 hover:text-google-blue font-mono flex items-center space-x-2"
                  >
                    <GithubIcon className="w-4 h-4 text-slate-400" />
                    <span>BerrySurya/{repo.title.replace(/\s+/g, '-')}</span>
                  </a>
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-slate-800 text-slate-400 border border-slate-700">
                    Public
                  </span>
                </div>

                <p className="text-xs text-slate-300 font-sans leading-relaxed line-clamp-2">
                  {repo.subtitle} - {repo.tagline}
                </p>

                <div className="flex items-center justify-between text-xs font-mono text-slate-400 pt-2 border-t border-slate-800/60">
                  <div className="flex items-center space-x-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-google-blue" />
                    <span>{repo.techStack[0]}</span>
                  </div>

                  <div className="flex items-center space-x-3">
                    <span className="flex items-center space-x-1">
                      <Star className="w-3.5 h-3.5 text-amber-400" />
                      <span>{Math.floor(Math.random() * 30) + 15}</span>
                    </span>
                    <span className="flex items-center space-x-1">
                      <GitBranch className="w-3.5 h-3.5 text-slate-400" />
                      <span>{Math.floor(Math.random() * 8) + 3}</span>
                    </span>
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
