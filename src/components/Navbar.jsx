import React from 'react';

const Navbar = ({ data }) => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-5" id="navbar">
    <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
      <a href="#" className="font-display text-xl font-bold tracking-tight text-text-primary hover:text-accent-blue transition-colors" aria-label="Farel Rakha Dzakwan Home">
        Rakha<span className="text-accent-blue">.</span>
      </a>

      {/*  Nav Links  */}
      <nav id="navLinks" className="hidden md:flex flex-col md:flex-row absolute md:static top-full left-0 right-0 bg-bg-primary/95 md:bg-transparent backdrop-blur-xl md:backdrop-blur-none border-b border-border-subtle md:border-none p-6 md:p-0 gap-5 md:gap-8 text-sm font-medium text-text-secondary shadow-2xl md:shadow-none" aria-label="Main Navigation">
        <a href="#about" className="hover:text-text-primary transition-colors py-1 relative">About</a>
        <a href="#projects" className="hover:text-text-primary transition-colors py-1 relative">Projects</a>
        <a href="#experience" className="hover:text-text-primary transition-colors py-1 relative">Experience</a>
        <a href="#organization" className="hover:text-text-primary transition-colors py-1 relative">Organization</a>
        <a href="#skills" className="hover:text-text-primary transition-colors py-1 relative">Skills</a>
        <a href="#achievements" className="hover:text-text-primary transition-colors py-1 relative">Achievements</a>
        <a href="#contact" className="hover:text-text-primary transition-colors py-1 relative">Contact</a>
      </nav>

      {/*  Mobile Toggle Button  */}
      <button className="md:hidden flex flex-col justify-center gap-1.5 p-2 rounded-md focus-visible:ring-2 focus-visible:ring-accent-blue" id="navToggle" aria-label="Open menu" aria-expanded="false" aria-controls="navLinks">
        <span className="w-6 h-0.5 bg-text-primary rounded-full transition-transform"></span>
        <span className="w-6 h-0.5 bg-text-primary rounded-full transition-opacity"></span>
        <span className="w-6 h-0.5 bg-text-primary rounded-full transition-transform"></span>
      </button>
    </div>
  </header>
  );
};

export default Navbar;
