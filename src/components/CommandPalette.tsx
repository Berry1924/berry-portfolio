import React, { useEffect, useState } from 'react';
import { Search, X, Folder, BookOpen, Code, Terminal, Sun, Moon, Cpu, User, ExternalLink } from 'lucide-react';
import { PROJECTS, RESEARCH_ITEMS, BLOG_ARTICLES, SKILLS, SOCIAL_PROFILES } from '../data/portfolioData';
import { useTheme } from '../context/ThemeContext';

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectProject: (projectId: string) => void;
  onSelectResearch: (researchId: string) => void;
  onSelectBlog: (blogId: string) => void;
  onOpenResume: () => void;
}

export const CommandPalette: React.FC<CommandPaletteProps> = ({
  isOpen,
  onClose,
  onSelectProject,
  onSelectResearch,
  onSelectBlog,
  onOpenResume
}) => {
  const [query, setQuery] = useState('');
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        if (isOpen) onClose();
        else setQuery('');
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const filteredProjects = PROJECTS.filter(p =>
    p.title.toLowerCase().includes(query.toLowerCase()) ||
    p.tagline.toLowerCase().includes(query.toLowerCase()) ||
    p.techStack.some(t => t.toLowerCase().includes(query.toLowerCase()))
  );

  const filteredResearch = RESEARCH_ITEMS.filter(r =>
    r.title.toLowerCase().includes(query.toLowerCase()) ||
    r.topic.toLowerCase().includes(query.toLowerCase())
  );

  const filteredBlog = BLOG_ARTICLES.filter(b =>
    b.title.toLowerCase().includes(query.toLowerCase()) ||
    b.tags.some(t => t.toLowerCase().includes(query.toLowerCase()))
  );

  const filteredSkills = SKILLS.filter(s =>
    s.name.toLowerCase().includes(query.toLowerCase()) ||
    s.category.toLowerCase().includes(query.toLowerCase())
  ).slice(0, 5);

  const filteredSocials = SOCIAL_PROFILES.filter(s =>
    s.platform.toLowerCase().includes(query.toLowerCase()) ||
    s.username.toLowerCase().includes(query.toLowerCase())
  ).slice(0, 5);

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 px-4 bg-black/60 backdrop-blur-md transition-opacity">
      <div className="relative w-full max-w-2xl bg-[#0F172A] border border-slate-700/60 rounded-2xl shadow-2xl overflow-hidden text-slate-100 animate-in fade-in zoom-in duration-200">
        
        {/* Search Input Bar */}
        <div className="flex items-center px-4 py-3.5 border-b border-slate-800 bg-slate-900/60">
          <Search className="w-5 h-5 text-google-blue mr-3 shrink-0" />
          <input
            type="text"
            placeholder="Type a command or search projects, research, skills, articles..."
            className="w-full bg-transparent text-sm focus:outline-none text-slate-100 placeholder-slate-400 font-sans"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            autoFocus
          />
          <button
            onClick={onClose}
            className="p-1 rounded-lg hover:bg-slate-800 text-slate-400 hover:text-slate-200"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Results Container */}
        <div className="max-h-[60vh] overflow-y-auto p-3 space-y-4 text-xs font-sans">
          
          {/* Quick Actions */}
          {!query && (
            <div className="space-y-1">
              <p className="px-3 py-1.5 text-[10px] font-semibold tracking-wider text-slate-400 uppercase">Quick Actions</p>
              <button
                onClick={() => { onOpenResume(); onClose(); }}
                className="w-full flex items-center px-3 py-2 rounded-lg hover:bg-slate-800/80 text-left transition-colors"
              >
                <User className="w-4 h-4 text-google-blue mr-3" />
                <span className="font-medium text-slate-200">Open Interactive Resume Viewer</span>
              </button>
              <button
                onClick={() => { setTheme(theme === 'dark' ? 'light' : 'dark'); onClose(); }}
                className="w-full flex items-center px-3 py-2 rounded-lg hover:bg-slate-800/80 text-left transition-colors"
              >
                {theme === 'dark' ? <Sun className="w-4 h-4 text-amber-400 mr-3" /> : <Moon className="w-4 h-4 text-purple-400 mr-3" />}
                <span className="font-medium text-slate-200">Toggle {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}</span>
              </button>
            </div>
          )}

          {/* Projects */}
          {filteredProjects.length > 0 && (
            <div className="space-y-1">
              <p className="px-3 py-1.5 text-[10px] font-semibold tracking-wider text-slate-400 uppercase flex items-center">
                <Folder className="w-3.5 h-3.5 mr-1.5 text-google-blue" /> Projects ({filteredProjects.length})
              </p>
              {filteredProjects.map((p) => (
                <button
                  key={p.id}
                  onClick={() => { onSelectProject(p.id); onClose(); }}
                  className="w-full flex items-center justify-between px-3 py-2 rounded-lg hover:bg-slate-800/80 text-left transition-colors"
                >
                  <div className="flex items-center min-w-0 mr-2">
                    <span className="w-2 h-2 rounded-full bg-google-blue mr-2 shrink-0"></span>
                    <span className="font-medium text-slate-200 truncate">{p.title}</span>
                    <span className="ml-2 text-[10px] text-slate-400 shrink-0">{p.subtitle}</span>
                  </div>
                  <span className="px-2 py-0.5 text-[10px] rounded bg-google-blue/10 text-google-blue font-mono border border-google-blue/20 shrink-0">{p.category}</span>
                </button>
              ))}
            </div>
          )}

          {/* Research Papers */}
          {filteredResearch.length > 0 && (
            <div className="space-y-1">
              <p className="px-3 py-1.5 text-[10px] font-semibold tracking-wider text-slate-400 uppercase flex items-center">
                <Cpu className="w-3.5 h-3.5 mr-1.5 text-accent-indigo" /> Research & Innovations ({filteredResearch.length})
              </p>
              {filteredResearch.map((r) => (
                <button
                  key={r.id}
                  onClick={() => { onSelectResearch(r.id); onClose(); }}
                  className="w-full flex items-center justify-between px-3 py-2 rounded-lg hover:bg-slate-800/80 text-left transition-colors"
                >
                  <div className="flex items-center min-w-0 mr-2">
                    <span className="w-2 h-2 rounded-full bg-accent-indigo mr-2 shrink-0"></span>
                    <span className="font-medium text-slate-200 truncate">{r.title}</span>
                  </div>
                  <span className="px-2 py-0.5 text-[10px] rounded bg-accent-indigo/10 text-accent-indigo font-mono border border-accent-indigo/20 shrink-0">{r.status}</span>
                </button>
              ))}
            </div>
          )}

          {/* Blog Articles */}
          {filteredBlog.length > 0 && (
            <div className="space-y-1">
              <p className="px-3 py-1.5 text-[10px] font-semibold tracking-wider text-slate-400 uppercase flex items-center">
                <BookOpen className="w-3.5 h-3.5 mr-1.5 text-accent-cyan" /> Engineering Blog ({filteredBlog.length})
              </p>
              {filteredBlog.map((b) => (
                <button
                  key={b.id}
                  onClick={() => { onSelectBlog(b.id); onClose(); }}
                  className="w-full flex items-center justify-between px-3 py-2 rounded-lg hover:bg-slate-800/80 text-left transition-colors"
                >
                  <span className="font-medium text-slate-200 truncate">{b.title}</span>
                  <span className="text-[10px] text-slate-400 font-mono ml-2 shrink-0">{b.readTime}</span>
                </button>
              ))}
            </div>
          )}

          {/* Skills */}
          {filteredSkills.length > 0 && (
            <div className="space-y-1">
              <p className="px-3 py-1.5 text-[10px] font-semibold tracking-wider text-slate-400 uppercase flex items-center">
                <Code className="w-3.5 h-3.5 mr-1.5 text-emerald-400" /> Skills ({filteredSkills.length})
              </p>
              <div className="flex flex-wrap gap-1.5 px-3 py-1">
                {filteredSkills.map((s, idx) => (
                  <span key={idx} className="px-2.5 py-1 rounded bg-slate-800 text-slate-300 text-[11px] font-mono border border-slate-700">
                    {s.name} ({s.proficiency}%)
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Social Profiles */}
          {filteredSocials.length > 0 && (
            <div className="space-y-1">
              <p className="px-3 py-1.5 text-[10px] font-semibold tracking-wider text-slate-400 uppercase flex items-center">
                <ExternalLink className="w-3.5 h-3.5 mr-1.5 text-purple-400" /> Social Links & Profiles
              </p>
              {filteredSocials.map((s, idx) => (
                <a
                  key={idx}
                  href={s.url}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between px-3 py-2 rounded-lg hover:bg-slate-800/80 text-slate-200 transition-colors"
                >
                  <span className="font-medium">{s.platform} ({s.username})</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>
              ))}
            </div>
          )}

          {filteredProjects.length === 0 && filteredResearch.length === 0 && filteredBlog.length === 0 && filteredSkills.length === 0 && (
            <div className="py-8 text-center text-slate-400">
              <Terminal className="w-8 h-8 mx-auto mb-2 opacity-50 text-slate-500" />
              <p className="text-sm font-medium">No matching commands or resources found.</p>
              <p className="text-xs text-slate-500 mt-1">Try searching for "NEON AI", "MATLAB", "SafeNet", or "Python".</p>
            </div>
          )}

        </div>

        {/* Footer info */}
        <div className="px-4 py-2 border-t border-slate-800/80 bg-slate-900/80 flex items-center justify-between text-[11px] text-slate-400 font-mono">
          <span>Navigate with <kbd className="px-1.5 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700">ESC</kbd> to exit</span>
          <span>Berry.ai Command Palette v2.0</span>
        </div>

      </div>
    </div>
  );
};
