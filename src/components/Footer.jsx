import React from 'react';

const Footer = ({ data }) => {
  return (
    <footer className="border-t border-border-subtle bg-[#08080d] py-10">
    <div className="max-w-7xl mx-auto px-6">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pb-6 border-b border-border-subtle font-mono text-xs text-text-muted">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-accent-green"></span>
          <span>Based in Indonesia · Open for AI Engineering &amp; Research Opportunities</span>
        </div>
        <div className="flex items-center gap-2">
          <svg className="w-3.5 h-3.5 opacity-60" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="10"></circle>
            <polyline points="12 6 12 12 16 14"></polyline>
          </svg>
          LOCAL TIME: <strong className="text-text-primary font-semibold" id="liveClock">--:--:-- WIB</strong>
        </div>
      </div>
      <div className="pt-6 text-center text-xs text-text-muted">
        <p>© 2026 Farel Rakha Dzakwan. Built with precision and AI research rigor.</p>
      </div>
    </div>
  </footer>
  );
};

export default Footer;
