import React from 'react';
import { X, Download, FileText } from 'lucide-react';
import { PERSONAL_INFO, PROJECTS, RESEARCH_ITEMS } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handleDownload = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md overflow-y-auto">
      <div
        className="relative w-full max-w-4xl bg-[#090D16] border border-slate-700/80 rounded-3xl shadow-2xl overflow-hidden text-slate-100 my-8 animate-in fade-in zoom-in duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Header Bar */}
        <div className="flex items-center justify-between p-6 border-b border-slate-800 bg-slate-900/90 sticky top-0 z-10 backdrop-blur-md">
          <div className="flex items-center space-x-3">
            <div className="p-2.5 rounded-xl bg-google-blue/10 text-google-blue border border-google-blue/20">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-slate-100 font-sans">
                Curriculum Vitae / ATS Resume
              </h2>
              <p className="text-xs text-slate-400 font-mono">A. Berry Sugandh Surya • AI Systems Engineer</p>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <button
              onClick={handleDownload}
              className="inline-flex items-center space-x-2 px-4 py-2 rounded-xl bg-gradient-to-r from-google-blue to-accent-indigo text-white font-mono text-xs font-semibold shadow-md hover:opacity-95 transition-all"
            >
              <Download className="w-4 h-4" />
              <span>Download PDF / Print</span>
            </button>
            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-slate-200 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Resume Printable Document Body */}
        <div id="printable-resume" className="p-8 sm:p-12 space-y-8 max-h-[75vh] overflow-y-auto bg-[#0B0F19] font-sans text-xs sm:text-sm text-slate-200">
          
          {/* Header Contact Block */}
          <div className="border-b border-slate-800 pb-6 space-y-3">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div>
                <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-100 tracking-tight font-sans">
                  {PERSONAL_INFO.fullName}
                </h1>
                <p className="text-sm font-mono text-google-blue font-semibold mt-0.5">
                  AI Systems Engineer & Researcher • ECE Undergraduate
                </p>
              </div>
              <div className="text-xs font-mono text-slate-400 space-y-1 text-left sm:text-right">
                <p>{PERSONAL_INFO.email}</p>
                <p>github.com/BerrySurya | linkedin.com/in/berry-sugandh-surya</p>
                <p>{PERSONAL_INFO.location}</p>
              </div>
            </div>
          </div>

          {/* Executive Summary */}
          <div className="space-y-2">
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-google-blue border-b border-slate-800 pb-1">
              Executive Summary
            </h2>
            <p className="text-xs text-slate-300 leading-relaxed font-sans">
              Electronics and Communication Engineering (ECE) student (2025–2029) at SKP Engineering College (Anna University) with a strong foundation in autonomous agentic AI operating systems, Vehicle-to-Vehicle (V2V) Intelligent Transportation protocol research, and privacy-first Android threat engines. Targeted toward AI engineering and research roles at Google, OpenAI, NVIDIA, Microsoft, and Tesla AI.
            </p>
          </div>

          {/* Education */}
          <div className="space-y-2">
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-google-blue border-b border-slate-800 pb-1">
              Education
            </h2>
            <div className="flex justify-between items-start text-xs font-sans">
              <div>
                <p className="font-bold text-slate-100">{PERSONAL_INFO.education.degree}</p>
                <p className="text-slate-400">{PERSONAL_INFO.education.college} (Anna University)</p>
              </div>
              <span className="font-mono text-slate-400">{PERSONAL_INFO.education.period}</span>
            </div>
          </div>

          {/* Major Projects & Systems Built */}
          <div className="space-y-4">
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-google-blue border-b border-slate-800 pb-1">
              Engineered Systems & Key Projects
            </h2>

            {PROJECTS.map((proj) => (
              <div key={proj.id} className="space-y-1.5 text-xs font-sans">
                <div className="flex justify-between font-bold text-slate-100">
                  <span>{proj.title} ({proj.subtitle})</span>
                  <span className="font-mono text-slate-400 text-[11px]">{proj.status}</span>
                </div>
                <p className="text-slate-300 italic">{proj.tagline}</p>
                <ul className="list-disc list-inside text-slate-400 space-y-1 pl-1">
                  <li><strong>Architecture:</strong> {proj.architecture}</li>
                  <li><strong>Solution:</strong> {proj.solution}</li>
                </ul>
              </div>
            ))}
          </div>

          {/* Research & Publications */}
          <div className="space-y-3">
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-google-blue border-b border-slate-800 pb-1">
              Academic Research & Publications
            </h2>

            {RESEARCH_ITEMS.map((paper) => (
              <div key={paper.id} className="space-y-1 text-xs font-sans">
                <p className="font-bold text-slate-100">{paper.title}</p>
                <p className="text-slate-400 font-mono">Target: {paper.venue} ({paper.targetDate})</p>
                <p className="text-slate-300 italic">"{paper.abstract}"</p>
              </div>
            ))}
          </div>

          {/* Skills Breakdown */}
          <div className="space-y-2">
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-google-blue border-b border-slate-800 pb-1">
              Technical Skill Matrix
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-mono text-slate-300">
              <p><strong>Languages:</strong> Python, C, C++, Kotlin, MATLAB, TypeScript</p>
              <p><strong>AI & ML:</strong> TensorFlow Lite, Ollama, Whisper, Agentic AI, PyTorch</p>
              <p><strong>Hardware & Embedded:</strong> ESP32, CAN Bus, V2V Protocols, IoT, DSP</p>
              <p><strong>Systems & Tools:</strong> Linux, Git, Android NDK, Docker, Next.js</p>
            </div>
          </div>

        </div>

        {/* Footer Actions */}
        <div className="p-4 border-t border-slate-800 bg-slate-900/90 flex items-center justify-between text-xs font-mono text-slate-400">
          <span>ATS Verified Format • Updated 2026</span>
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 transition-colors"
          >
            Close Resume
          </button>
        </div>

      </div>
    </div>
  );
};
