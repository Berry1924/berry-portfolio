import React from 'react';
import { X, Calendar, Clock, Tag, Share2 } from 'lucide-react';
import type { BlogArticle } from '../types';

interface BlogModalProps {
  article: BlogArticle | null;
  onClose: () => void;
}

export const BlogModal: React.FC<BlogModalProps> = ({ article, onClose }) => {
  if (!article) return null;

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    alert('Article link copied to clipboard!');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/75 backdrop-blur-md overflow-y-auto">
      <div
        className="relative w-full max-w-3xl bg-[#0F172A] border border-slate-700/80 rounded-3xl shadow-2xl overflow-hidden text-slate-100 my-8 animate-in fade-in zoom-in duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Header Bar */}
        <div className="flex items-center justify-between p-6 border-b border-slate-800 bg-slate-900/80 sticky top-0 z-10 backdrop-blur-md">
          <div className="flex items-center space-x-3 text-xs font-mono text-slate-400">
            <span className="px-2.5 py-0.5 rounded-full font-semibold bg-google-blue/10 text-google-blue border border-google-blue/20">
              {article.category}
            </span>
            <span className="flex items-center space-x-1">
              <Calendar className="w-3.5 h-3.5 text-slate-500" />
              <span>{article.date}</span>
            </span>
            <span className="flex items-center space-x-1">
              <Clock className="w-3.5 h-3.5 text-slate-500" />
              <span>{article.readTime}</span>
            </span>
          </div>

          <div className="flex items-center space-x-2">
            <button
              onClick={handleShare}
              className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-slate-200 transition-colors"
              title="Share Article"
            >
              <Share2 className="w-4 h-4" />
            </button>
            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-slate-200 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Article Body Content */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[75vh] overflow-y-auto">
          
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-100 font-sans tracking-tight leading-snug">
            {article.title}
          </h1>

          <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 text-xs sm:text-sm text-slate-300 italic font-sans">
            "{article.excerpt}"
          </div>

          {/* Render Markdown Content as formatted blocks */}
          <div className="prose prose-invert max-w-none text-slate-300 text-xs sm:text-sm font-sans space-y-4 leading-relaxed">
            {article.content.split('\n\n').map((paragraph, idx) => {
              if (paragraph.startsWith('# ')) {
                return (
                  <h2 key={idx} className="text-xl font-bold text-slate-100 font-sans pt-4 pb-1 border-b border-slate-800">
                    {paragraph.replace('# ', '')}
                  </h2>
                );
              }
              if (paragraph.startsWith('## ')) {
                return (
                  <h3 key={idx} className="text-base font-bold text-google-blue font-sans pt-3">
                    {paragraph.replace('## ', '')}
                  </h3>
                );
              }
              if (paragraph.startsWith('### ')) {
                return (
                  <h4 key={idx} className="text-sm font-semibold text-slate-200 font-mono pt-2">
                    {paragraph.replace('### ', '')}
                  </h4>
                );
              }
              if (paragraph.startsWith('```')) {
                return (
                  <pre key={idx} className="p-4 rounded-xl bg-slate-950 border border-slate-800 font-mono text-xs text-emerald-400 overflow-x-auto">
                    <code>{paragraph.replace(/```[a-z]*/g, '')}</code>
                  </pre>
                );
              }
              return (
                <p key={idx} className="leading-relaxed">
                  {paragraph}
                </p>
              );
            })}
          </div>

          {/* Tags Footer */}
          <div className="pt-6 border-t border-slate-800 flex flex-wrap gap-2 items-center">
            <Tag className="w-3.5 h-3.5 text-slate-500 mr-1" />
            {article.tags.map((tag, idx) => (
              <span
                key={idx}
                className="px-2.5 py-1 rounded-lg bg-slate-800 text-slate-300 font-mono text-xs border border-slate-700"
              >
                #{tag}
              </span>
            ))}
          </div>

        </div>

        {/* Footer Bar */}
        <div className="p-4 border-t border-slate-800 bg-slate-900/80 flex items-center justify-between text-xs font-mono text-slate-400">
          <span>Author: A. Berry Sugandh Surya</span>
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-google-blue hover:bg-blue-600 text-white font-medium transition-colors"
          >
            Done Reading
          </button>
        </div>

      </div>
    </div>
  );
};
