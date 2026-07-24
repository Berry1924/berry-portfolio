import React, { useState } from 'react';
import { Mail, MapPin, Send, ExternalLink, Sparkles, ShieldCheck } from 'lucide-react';
import { PERSONAL_INFO, SOCIAL_PROFILES } from '../data/portfolioData';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [submitted, setSubmitted] = useState(false);

  const categories = ['All', 'Code & Dev', 'Research & Papers', 'Professional & Social', 'Competitive Code'];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
      alert('Thank you! Your message has been sent directly to Berry.');
    }, 1500);
  };

  const filteredProfiles = activeCategory === 'All'
    ? SOCIAL_PROFILES
    : SOCIAL_PROFILES.filter(s => s.category === activeCategory);

  return (
    <section id="contact" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-google-blue/10 border border-google-blue/20 text-google-blue text-xs font-mono">
            <Mail className="w-3.5 h-3.5" />
            <span>Direct Communications & Social Hub</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 tracking-tight">
            Get In <span className="gradient-text-google">Touch</span>
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 max-w-xl font-sans">
            Open for AI research collaborations, engineering internships, open-source initiatives, and academic inquiry.
          </p>
        </div>

        {/* Top Form & Quick Details Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-20">
          
          {/* Left Details & Status Box */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="glass-card rounded-3xl p-6 sm:p-8 space-y-6">
              <h3 className="text-lg font-bold text-slate-100 font-sans flex items-center space-x-2">
                <Sparkles className="w-5 h-5 text-google-blue" />
                <span>Contact Details & Availability</span>
              </h3>

              <div className="space-y-4 text-xs sm:text-sm font-sans text-slate-300">
                
                <div className="flex items-start space-x-3 p-3.5 rounded-2xl bg-slate-900/60 border border-slate-800">
                  <Mail className="w-5 h-5 text-google-blue shrink-0 mt-0.5" />
                  <div>
                    <span className="text-slate-500 font-mono text-[11px] block">Primary Email</span>
                    <a href={`mailto:${PERSONAL_INFO.email}`} className="font-semibold text-slate-100 hover:text-google-blue transition-colors">
                      {PERSONAL_INFO.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-3 p-3.5 rounded-2xl bg-slate-900/60 border border-slate-800">
                  <MapPin className="w-5 h-5 text-accent-indigo shrink-0 mt-0.5" />
                  <div>
                    <span className="text-slate-500 font-mono text-[11px] block">Location</span>
                    <span className="font-semibold text-slate-100">{PERSONAL_INFO.location}</span>
                  </div>
                </div>

                <div className="flex items-start space-x-3 p-3.5 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
                  <ShieldCheck className="w-5 h-5 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-mono text-[11px] block font-bold">Current Availability</span>
                    <span className="text-xs text-slate-200">{PERSONAL_INFO.availabilityStatus}</span>
                  </div>
                </div>

              </div>
            </div>

            {/* Quick Response Notice */}
            <div className="p-5 rounded-2xl bg-slate-900/40 border border-slate-800/80 text-xs font-mono text-slate-400 leading-relaxed">
              ⚡ Typical response time for academic and engineering inquiries: <strong className="text-slate-200">Under 24 Hours</strong>.
            </div>

          </div>

          {/* Right Contact Form */}
          <div className="lg:col-span-7 glass-card rounded-3xl p-6 sm:p-8 space-y-6">
            <h3 className="text-lg font-bold text-slate-100 font-sans flex items-center space-x-2">
              <Send className="w-5 h-5 text-google-blue" />
              <span>Send Me a Direct Message</span>
            </h3>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-xs font-mono text-slate-400">Your Full Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Dr. Alan Turing"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-2.5 text-xs text-slate-100 placeholder-slate-500 focus:outline-none focus:border-google-blue transition-colors"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-mono text-slate-400">Your Email Address *</label>
                  <input
                    type="email"
                    required
                    placeholder="name@organization.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-2.5 text-xs text-slate-100 placeholder-slate-500 focus:outline-none focus:border-google-blue transition-colors"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-mono text-slate-400">Subject</label>
                <input
                  type="text"
                  placeholder="e.g. AI Research Collaboration Inquiry"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-2.5 text-xs text-slate-100 placeholder-slate-500 focus:outline-none focus:border-google-blue transition-colors"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-mono text-slate-400">Message Content *</label>
                <textarea
                  required
                  rows={4}
                  placeholder="Write your message details here..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-2.5 text-xs text-slate-100 placeholder-slate-500 focus:outline-none focus:border-google-blue transition-colors"
                />
              </div>

              <button
                type="submit"
                disabled={submitted}
                className="w-full inline-flex items-center justify-center space-x-2 px-6 py-3 rounded-xl bg-gradient-to-r from-google-blue via-accent-indigo to-accent-purple text-white font-semibold text-xs shadow-lg shadow-google-blue/20 hover:shadow-google-blue/40 transition-all active:scale-[0.98] disabled:opacity-50"
              >
                {submitted ? (
                  <span>Sending Message...</span>
                ) : (
                  <>
                    <span>Transmit Message</span>
                    <Send className="w-3.5 h-3.5" />
                  </>
                )}
              </button>
            </form>
          </div>

        </div>

        {/* Centralized 20+ Verified Social Links Grid */}
        <div className="space-y-8 pt-8 border-t border-slate-800/80">
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h3 className="text-xl font-extrabold text-slate-100 font-sans">
                Verified Digital Presence & <span className="gradient-text-google">Profiles</span>
              </h3>
              <p className="text-xs text-slate-400 font-mono mt-0.5">Explore 20+ academic, competitive coding, and social handles.</p>
            </div>

            {/* Category Filter Tabs */}
            <div className="flex flex-wrap gap-1.5">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-3 py-1 rounded-lg text-xs font-mono transition-all ${
                    activeCategory === cat
                      ? 'bg-google-blue text-white font-semibold'
                      : 'bg-slate-800/80 text-slate-400 hover:bg-slate-700 hover:text-slate-200'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredProfiles.map((prof, idx) => (
              <a
                key={idx}
                href={prof.url}
                target="_blank"
                rel="noreferrer"
                className="glass-card rounded-2xl p-4 flex flex-col justify-between space-y-3 hover:-translate-y-1 transition-all group"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <span className="w-2 h-2 rounded-full bg-google-blue group-hover:scale-125 transition-transform" />
                    <span className="font-bold text-sm text-slate-100 group-hover:text-google-blue transition-colors font-sans">
                      {prof.platform}
                    </span>
                  </div>
                  {prof.isVerified && (
                    <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-1.5 py-0.5 rounded border border-emerald-500/20">
                      ✓ Verified
                    </span>
                  )}
                </div>

                <p className="text-xs text-slate-400 font-mono truncate">{prof.username}</p>

                <div className="pt-2 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-mono text-google-blue font-semibold">
                  <span>{prof.actionText}</span>
                  <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </div>
              </a>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
