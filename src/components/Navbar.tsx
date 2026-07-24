import React, { useState, useEffect } from 'react';
import { Sun, Moon, Command, FileText, Menu, X } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { PERSONAL_INFO } from '../data/portfolioData';

interface NavbarProps {
  onOpenCommandPalette: () => void;
  onOpenResume: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenCommandPalette, onOpenResume }) => {
  const { theme, setTheme, isDark } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Status', href: '#status' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Research', href: '#research' },
    { name: 'Open Source', href: '#opensource' },
    { name: 'Blog', href: '#blog' },
    { name: 'Timeline', href: '#timeline' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? isDark
            ? 'bg-[#090D16]/85 backdrop-blur-md border-b border-slate-800/80 shadow-lg'
            : 'bg-white/85 backdrop-blur-md border-b border-slate-200 shadow-md'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          
          {/* Logo */}
          <a href="#" className="flex items-center space-x-3 group">
            <div className="relative w-9 h-9 rounded-xl bg-gradient-to-tr from-google-blue via-accent-indigo to-accent-purple p-[1.5px] transition-transform duration-300 group-hover:scale-105">
              <div className="w-full h-full bg-[#0F172A] rounded-[10px] flex items-center justify-center">
                <span className="font-bold font-mono text-base gradient-text-google">B</span>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="flex items-center space-x-1.5">
                <span className="font-bold tracking-tight text-base sm:text-lg text-slate-100 dark:text-slate-100 light:text-slate-900 group-hover:text-google-blue transition-colors">
                  {PERSONAL_INFO.preferredName}
                </span>
                <span className="text-xs font-mono text-google-blue font-semibold px-1.5 py-0.5 rounded bg-google-blue/10 border border-google-blue/20">
                  .ai
                </span>
              </div>
              <span className="text-[10px] text-slate-400 font-mono hidden sm:inline-block">
                AI Systems & ECE Engineer
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center space-x-1 lg:space-x-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3 py-1.5 rounded-lg text-xs font-medium text-slate-300 hover:text-white hover:bg-slate-800/60 light:text-slate-700 light:hover:text-slate-900 light:hover:bg-slate-100 transition-all duration-200"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Actions (Command Palette, Theme Toggle, Resume CTA) */}
          <div className="flex items-center space-x-2 sm:space-x-3">
            
            {/* Command Palette Trigger Button */}
            <button
              onClick={onOpenCommandPalette}
              className="flex items-center space-x-2 px-2.5 sm:px-3 py-1.5 rounded-xl bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700/60 text-slate-300 light:bg-slate-100 light:border-slate-300 light:text-slate-700 text-xs font-mono transition-all group"
              title="Open Command Palette (Ctrl+K)"
            >
              <Command className="w-3.5 h-3.5 text-google-blue group-hover:rotate-12 transition-transform" />
              <span className="hidden sm:inline">Search</span>
              <kbd className="hidden sm:inline-block px-1.5 py-0.5 text-[10px] rounded bg-slate-900 text-slate-400 border border-slate-700/80 light:bg-slate-200 light:text-slate-600">
                ⌘K
              </kbd>
            </button>

            {/* Theme Toggle */}
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="p-2 rounded-xl bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700/60 text-slate-300 light:bg-slate-100 light:border-slate-300 light:text-slate-700 transition-all"
              aria-label="Toggle Theme"
            >
              {theme === 'dark' ? (
                <Sun className="w-4 h-4 text-amber-400" />
              ) : (
                <Moon className="w-4 h-4 text-accent-indigo" />
              )}
            </button>

            {/* Resume Button */}
            <button
              onClick={onOpenResume}
              className="relative inline-flex items-center space-x-1.5 px-3.5 py-1.5 rounded-xl bg-gradient-to-r from-google-blue to-accent-indigo text-white font-medium text-xs shadow-md hover:shadow-google-blue/25 hover:opacity-95 transition-all active:scale-95"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Resume</span>
            </button>

            {/* Mobile Menu Trigger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-2 rounded-xl bg-slate-800/80 border border-slate-700/60 text-slate-300"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>

          </div>
        </div>
      </div>

      {/* Mobile Dropdown Navigation */}
      {mobileMenuOpen && (
        <div className="xl:hidden border-b border-slate-800 bg-[#090D16]/95 backdrop-blur-xl px-4 pt-2 pb-4 space-y-2">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-lg text-sm font-medium text-slate-300 hover:bg-slate-800 hover:text-white transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </header>
  );
};
