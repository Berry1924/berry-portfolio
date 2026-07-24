import React from 'react';
import { Cpu, ArrowRight, Radio, Shield, Sparkles } from 'lucide-react';
import { RESEARCH_ITEMS } from '../data/portfolioData';
import type { ResearchItem } from '../types';

interface ResearchSectionProps {
  onSelectResearch: (research: ResearchItem) => void;
}

export const ResearchSection: React.FC<ResearchSectionProps> = ({ onSelectResearch }) => {
  const researchRoadmapDomains = [
    { title: "Intelligent Transportation Systems (ITS)", desc: "Density-aware V2V protocols, DSRC/C-V2X congestion modeling, APCC algorithms.", icon: Radio, highlight: "DAAS-V2V" },
    { title: "Agentic AI & Computer Architecture", desc: "Hierarchical memory routers, local tool execution policies, sub-300ms KWS.", icon: Cpu, highlight: "NEON AI OS" },
    { title: "Embedded & Edge AI Inference", desc: "Quantized neural networks on ESP32, ARM, and mobile NPU accelerators.", icon: Sparkles, highlight: "TFLite Edge" },
    { title: "Cybersecurity & Network Forensics", desc: "Offline DNS-over-HTTPS filtering, synthetic audio deepfake detection.", icon: Shield, highlight: "SafeNet" }
  ];

  return (
    <section id="research" className="py-20 relative bg-slate-950/30 border-t border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-12">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-accent-indigo/10 border border-accent-indigo/20 text-accent-indigo text-xs font-mono">
            <Cpu className="w-3.5 h-3.5" />
            <span>Academic Research & Patents</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 tracking-tight">
            Research & <span className="gradient-text-indigo">Publications</span>
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 max-w-2xl font-sans">
            Formal papers, mathematical models, and patent-pending concepts in vehicular communications and local agent memory.
          </p>
        </div>

        {/* Papers Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {RESEARCH_ITEMS.map((paper) => (
            <div
              key={paper.id}
              className="glass-card rounded-3xl p-6 sm:p-8 flex flex-col justify-between space-y-5 border-l-4 border-l-accent-indigo hover:-translate-y-1 transition-all"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-semibold bg-accent-indigo/10 text-accent-indigo border border-accent-indigo/20">
                    {paper.topic}
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    {paper.status}
                  </span>
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-slate-100 font-sans leading-snug">
                  {paper.title}
                </h3>

                <p className="text-xs text-slate-400 font-mono">
                  Venue: <span className="text-slate-200">{paper.venue}</span>
                </p>

                <p className="text-xs sm:text-sm text-slate-300 font-sans leading-relaxed line-clamp-3 italic">
                  "{paper.abstract}"
                </p>
              </div>

              <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
                <span className="text-[11px] font-mono text-slate-500">
                  Target: {paper.targetDate}
                </span>

                <button
                  onClick={() => onSelectResearch(paper)}
                  className="inline-flex items-center space-x-1.5 px-4 py-2 rounded-xl bg-accent-indigo/10 hover:bg-accent-indigo text-accent-indigo hover:text-white font-mono text-xs border border-accent-indigo/30 transition-all"
                >
                  <span>Read Full Abstract</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* Research Roadmap Domains */}
        <div className="space-y-6">
          <h3 className="text-center text-lg font-bold text-slate-200 font-mono">
            Core Research Domains & Roadmap
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {researchRoadmapDomains.map((dom, idx) => {
              const IconComp = dom.icon;
              return (
                <div key={idx} className="glass-card rounded-2xl p-6 space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="p-2.5 rounded-xl bg-slate-800 text-accent-cyan border border-slate-700">
                      <IconComp className="w-4 h-4" />
                    </div>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-400">
                      {dom.highlight}
                    </span>
                  </div>
                  <h4 className="text-sm font-bold text-slate-100 font-sans">{dom.title}</h4>
                  <p className="text-xs text-slate-400 font-sans leading-relaxed">{dom.desc}</p>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
