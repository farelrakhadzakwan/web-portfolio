import React from 'react';

const Hero = ({ data }) => {
  return (
    <section className="min-h-screen flex items-center relative overflow-hidden pt-28 pb-16 bg-gradient-to-b from-bg-primary to-bg-secondary" id="hero">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(79,124,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(79,124,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none"></div>
      <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-accent-blue/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
        <div className="grid lg:grid-cols-[1fr_360px] gap-12 lg:gap-16 items-center">

          {/*  Left Column: Bio & CTA  */}
          <div className="hero-content fade-in text-center lg:text-left">
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-none mb-3">
              {data?.personal?.full_name?.split(' ').slice(0, 2).join(' ')}<br />
              <span className="bg-gradient-to-r from-accent-blue via-accent-violet to-accent-cyan bg-clip-text text-transparent">{data?.personal?.full_name?.split(' ').slice(-1)}</span>
            </h1>
            <p className="font-display text-accent-blue text-xl sm:text-2xl font-medium mb-6">
              {data?.positioning?.primary_identity}
            </p>
            <p className="text-text-secondary text-base sm:text-lg max-w-xl mx-auto lg:mx-0 mb-3 leading-relaxed">
              {data?.positioning?.core_statement}
            </p>
            <p className="text-text-muted text-sm sm:text-base italic mb-8">
              {data?.positioning?.supporting_statement}
            </p>

            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
              <a href="#projects" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg font-semibold text-sm bg-gradient-to-r from-accent-blue to-accent-violet text-white shadow-lg shadow-accent-blue/20 hover:shadow-accent-blue/40 hover:-translate-y-0.5 transition-all duration-300">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"></path>
                </svg>
                View Projects
              </a>
              <a href="#contact" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg font-semibold text-sm border border-border-light bg-bg-card/60 text-text-primary hover:border-accent-blue hover:bg-accent-blue/10 transition-all duration-300">
                Let's Connect
              </a>
            </div>
          </div>

          {/*  Right Column: Portrait Card  */}
          <div className="hero-avatar-wrapper fade-in flex justify-center">
            <div className="hero-portrait-container relative w-full max-w-[320px] aspect-[3/4] rounded-2xl overflow-hidden border border-accent-blue/30 shadow-2xl bg-[#0d0d17] group transition-all duration-500 hover:-translate-y-1.5 hover:border-accent-blue/60 hover:shadow-accent-blue/20">
              <div className="absolute inset-0 bg-radial from-accent-blue/20 to-transparent pointer-events-none z-10"></div>
              <img src="assets/profile-card.png" alt="Farel Rakha Dzakwan — AI Engineer &amp; AI Researcher" className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105" width="320" height="426" fetchpriority="high" />
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 inline-flex items-center gap-2 px-4 py-2 bg-bg-primary/85 backdrop-blur-md border border-white/10 rounded-full text-xs text-text-primary font-medium shadow-lg whitespace-nowrap">
                <span className="w-2 h-2 rounded-full bg-accent-green shadow-[0_0_8px_var(--color-accent-green)] animate-pulse-dot"></span>
                Universitas Brawijaya
              </div>
            </div>
          </div>

        </div>
      </div>

      {/*  Scroll Indicator  */}
      <div id="scrollIndicator" className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-text-muted text-xs transition-opacity duration-500 pointer-events-none">
        <svg className="w-5 h-5 animate-bounce" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 5v14M5 12l7 7 7-7"></path>
        </svg>
        <span>scroll</span>
      </div>
    </section>
  );
};

export default Hero;
