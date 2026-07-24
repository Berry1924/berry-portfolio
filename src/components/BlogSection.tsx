import React, { useState } from 'react';
import { BookOpen, Search, Clock, Calendar, ArrowRight } from 'lucide-react';
import { BLOG_ARTICLES } from '../data/portfolioData';
import type { BlogArticle } from '../types';

interface BlogSectionProps {
  onSelectBlog: (article: BlogArticle) => void;
}

export const BlogSection: React.FC<BlogSectionProps> = ({ onSelectBlog }) => {
  const [query, setQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'AI Engineering', 'Intelligent Transportation', 'Android Security'];

  const filteredArticles = BLOG_ARTICLES.filter(article => {
    const matchesCategory = selectedCategory === 'All' || article.category === selectedCategory;
    const matchesSearch = article.title.toLowerCase().includes(query.toLowerCase()) ||
      article.excerpt.toLowerCase().includes(query.toLowerCase()) ||
      article.tags.some(t => t.toLowerCase().includes(query.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="blog" className="py-20 relative bg-slate-950/40 border-t border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-12">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-accent-cyan/10 border border-accent-cyan/20 text-accent-cyan text-xs font-mono">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Engineering Blog & Research Notes</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 tracking-tight">
            Technical <span className="gradient-text-google">Articles & Writing</span>
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 max-w-xl font-sans">
            In-depth breakdowns on local AI operating systems, signal processing, and mobile threat architectures.
          </p>
        </div>

        {/* Search & Category Filter Controls */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-12">
          
          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-mono transition-all ${
                  selectedCategory === cat
                    ? 'bg-google-blue text-white shadow-md shadow-google-blue/20 font-semibold'
                    : 'bg-slate-800/80 text-slate-300 hover:bg-slate-700/80 border border-slate-700/60'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Bar */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search articles..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full bg-slate-900 border border-slate-800 rounded-xl pl-9 pr-4 py-2 text-xs font-sans text-slate-100 placeholder-slate-500 focus:outline-none focus:border-google-blue transition-colors"
            />
          </div>

        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredArticles.map((article) => (
            <article
              key={article.id}
              className="glass-card rounded-3xl p-6 flex flex-col justify-between space-y-5 hover:-translate-y-1.5 transition-all group"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs font-mono text-slate-400">
                  <span className="px-2.5 py-0.5 rounded-full font-semibold bg-google-blue/10 text-google-blue border border-google-blue/20">
                    {article.category}
                  </span>
                  <span className="flex items-center space-x-1">
                    <Clock className="w-3.5 h-3.5 text-slate-500" />
                    <span>{article.readTime}</span>
                  </span>
                </div>

                <h3 className="text-lg font-bold text-slate-100 font-sans group-hover:text-google-blue transition-colors leading-snug">
                  {article.title}
                </h3>

                <p className="text-xs text-slate-300 font-sans leading-relaxed line-clamp-3">
                  {article.excerpt}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
                <div className="flex items-center space-x-1.5 text-[11px] font-mono text-slate-500">
                  <Calendar className="w-3 h-3" />
                  <span>{article.date}</span>
                </div>

                <button
                  onClick={() => onSelectBlog(article)}
                  className="inline-flex items-center space-x-1 px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-google-blue text-slate-200 hover:text-white font-mono text-xs transition-all"
                >
                  <span>Read Article</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </article>
          ))}
        </div>

      </div>
    </section>
  );
};
