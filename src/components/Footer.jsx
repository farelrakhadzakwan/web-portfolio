import React from 'react';

const Footer = ({ data }) => {
  return (
    <footer className="border-t border-border-subtle bg-bg-secondary/60 py-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pb-6 border-b border-border-subtle/80 text-xs text-text-muted">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
            <span>Malang, Indonesia · Open for AI Engineering &amp; Research Opportunities</span>
          </div>
          
          {/* Static GMT+7 Timeline Indicator */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-bg-card border border-border-subtle rounded-xl shadow-2xs">
            <svg className="w-3.5 h-3.5 text-accent-blue" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="10"></circle>
              <polyline points="12 6 12 12 16 14"></polyline>
            </svg>
            <span className="text-text-muted">Timeline:</span>
            <strong className="text-text-primary font-semibold">GMT+7 (WIB)</strong>
          </div>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-text-muted">
          <p>© {new Date().getFullYear()} Farel Rakha Dzakwan. Designed for AI &amp; Research Excellence.</p>
          <div className="flex items-center gap-4">
            <a href="#about" className="hover:text-text-primary transition-colors">About</a>
            <a href="#projects" className="hover:text-text-primary transition-colors">Projects</a>
            <a href="#experience" className="hover:text-text-primary transition-colors">Experience</a>
            <a href="#contact" className="hover:text-text-primary transition-colors">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
