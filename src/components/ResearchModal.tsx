import React from 'react';
import { X, FileText, Cpu, Lightbulb, Copy } from 'lucide-react';
import type { ResearchItem } from '../types';

interface ResearchModalProps {
  research: ResearchItem | null;
  onClose: () => void;
}

export const ResearchModal: React.FC<ResearchModalProps> = ({ research, onClose }) => {
  if (!research) return null;

  const copyCitation = () => {
    const citation = `${research.authors.join(', ')}. "${research.title}." ${research.venue}, ${research.targetDate}.`;
    navigator.clipboard.writeText(citation);
    alert('Citation copied to clipboard!');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/75 backdrop-blur-md overflow-y-auto">
      <div
        className="relative w-full max-w-3xl bg-[#0F172A] border border-slate-700/80 rounded-3xl shadow-2xl overflow-hidden text-slate-100 my-8 animate-in fade-in zoom-in duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Header Bar */}
        <div className="flex items-center justify-between p-6 border-b border-slate-800 bg-slate-900/80 sticky top-0 z-10 backdrop-blur-md">
          <div>
            <div className="flex items-center space-x-2">
              <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono font-semibold bg-accent-indigo/10 text-accent-indigo border border-accent-indigo/20">
                {research.topic}
              </span>
              <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                {research.status}
              </span>
            </div>
            <h2 className="text-lg sm:text-xl font-extrabold text-slate-100 font-sans mt-1 leading-snug">
              {research.title}
            </h2>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-slate-200 transition-colors shrink-0 ml-4"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[75vh] overflow-y-auto font-sans text-xs sm:text-sm">
          
          {/* Metadata Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 rounded-2xl bg-slate-900/60 border border-slate-800 font-mono text-xs">
            <div>
              <span className="text-slate-500 block">Target Publication Venue:</span>
              <span className="text-slate-200 font-semibold">{research.venue}</span>
            </div>
            <div>
              <span className="text-slate-500 block">Target Date:</span>
              <span className="text-slate-200 font-semibold">{research.targetDate}</span>
            </div>
            <div className="sm:col-span-2">
              <span className="text-slate-500 block">Authors:</span>
              <span className="text-google-blue font-semibold">{research.authors.join(', ')}</span>
            </div>
          </div>

          {/* Abstract */}
          <div className="space-y-2">
            <h3 className="text-sm font-bold text-slate-200 font-mono flex items-center space-x-2">
              <FileText className="w-4 h-4 text-google-blue" />
              <span>Abstract</span>
            </h3>
            <p className="text-slate-300 leading-relaxed p-4 rounded-2xl bg-slate-950 border border-slate-800 italic">
              "{research.abstract}"
            </p>
          </div>

          {/* Methodology / Architecture */}
          <div className="space-y-2">
            <h3 className="text-sm font-bold text-slate-200 font-mono flex items-center space-x-2">
              <Cpu className="w-4 h-4 text-accent-indigo" />
              <span>Methodology & System Architecture</span>
            </h3>
            <p className="text-slate-300 leading-relaxed">
              {research.architectureDetails}
            </p>
          </div>

          {/* Patent Idea if present */}
          {research.patentIdea && (
            <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/20 space-y-1">
              <div className="flex items-center space-x-2 text-amber-400 font-mono font-bold text-xs uppercase">
                <Lightbulb className="w-4 h-4" />
                <span>Patent Concept</span>
              </div>
              <p className="text-slate-200 font-mono text-xs">{research.patentIdea}</p>
            </div>
          )}

          {/* Tech Used */}
          <div className="space-y-2">
            <span className="text-xs font-mono text-slate-400 block">Simulation & Hardware Stack:</span>
            <div className="flex flex-wrap gap-2">
              {research.techUsed.map((t, idx) => (
                <span key={idx} className="px-2.5 py-1 rounded-lg bg-slate-800 text-slate-300 font-mono text-xs border border-slate-700">
                  {t}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* Footer Actions */}
        <div className="p-4 border-t border-slate-800 bg-slate-900/80 flex items-center justify-between">
          <button
            onClick={copyCitation}
            className="inline-flex items-center space-x-2 px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-mono text-xs transition-colors"
          >
            <Copy className="w-3.5 h-3.5 text-google-blue" />
            <span>Copy Citation</span>
          </button>

          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-google-blue hover:bg-blue-600 text-white text-xs font-mono font-medium transition-colors"
          >
            Close Abstract
          </button>
        </div>

      </div>
    </div>
  );
};
