import React from 'react';

const Hero = ({ data }) => {
  return (
    <section className="relative overflow-hidden pt-28 pb-20 lg:pt-36 lg:pb-28 bg-gradient-to-b from-slate-50/80 via-white to-slate-50/50 dark:from-bg-primary dark:via-bg-primary dark:to-bg-secondary/40" id="hero">
      {/* Ambient Atmospheric Lighting (Unifying canvas with portrait studio tones) */}
      <div className="absolute top-1/4 right-5 lg:right-24 w-[460px] h-[460px] bg-gradient-to-br from-blue-500/12 via-indigo-500/10 to-transparent rounded-full blur-3xl pointer-events-none -z-0"></div>
      <div className="absolute top-1/3 left-0 w-[380px] h-[380px] bg-gradient-to-tr from-indigo-500/8 via-blue-500/5 to-transparent rounded-full blur-3xl pointer-events-none -z-0"></div>

      <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-16 items-center">

          {/* Left Column: Bio & Core Narrative */}
          <div className="hero-content fade-in text-center lg:text-left">
            {/* Live Availability Status Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50/90 dark:bg-blue-950/40 border border-blue-200/80 dark:border-blue-800/50 text-blue-700 dark:text-blue-300 text-xs font-semibold mb-6 shadow-xs">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>Available for AI Engineering &amp; Research</span>
            </div>

            {/* Name Heading */}
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-text-primary mb-3">
              {data?.personal?.full_name || 'Farel Rakha Dzakwan'}
            </h1>

            {/* Role Title with Rich Blue-Indigo Gradient */}
            <p className="font-display text-xl sm:text-2xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 dark:from-blue-400 dark:via-indigo-300 dark:to-blue-300 mb-6">
              {data?.positioning?.primary_identity || 'AI Engineer & AI Researcher'}
            </p>

            {/* Articulate Core Bio Statement */}
            <p className="text-text-secondary text-base sm:text-lg max-w-xl mx-auto lg:mx-0 mb-6 leading-relaxed">
              Specializing in machine learning, computer vision, signal processing, and applied AI research. Bridging theoretical probabilistic modeling with production-grade intelligent systems.
            </p>

            {/* Technical Domain Tags (Breaks visual monotony) */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-2 mb-8 max-w-xl">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-medium bg-bg-secondary text-text-secondary border border-border-subtle shadow-2xs">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                Machine Learning
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-medium bg-bg-secondary text-text-secondary border border-border-subtle shadow-2xs">
                <span className="w-1.5 h-1.5 rounded-full bg-sky-500"></span>
                Deep Learning
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-medium bg-bg-secondary text-text-secondary border border-border-subtle shadow-2xs">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-500"></span>
                Computer Vision
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-medium bg-bg-secondary text-text-secondary border border-border-subtle shadow-2xs">
                <span className="w-1.5 h-1.5 rounded-full bg-violet-500"></span>
                NLP
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-medium bg-bg-secondary text-text-secondary border border-border-subtle shadow-2xs">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-500"></span>
                LLM
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-medium bg-bg-secondary text-text-secondary border border-border-subtle shadow-2xs">
                <span className="w-1.5 h-1.5 rounded-full bg-pink-500"></span>
                RAG
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-medium bg-bg-secondary text-text-secondary border border-border-subtle shadow-2xs">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                Generative AI
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-medium bg-bg-secondary text-text-secondary border border-border-subtle shadow-2xs">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-500"></span>
                EEG Signal Processing
              </span>
            </div>

            {/* Action CTAs + Direct Social Links */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3.5">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white shadow-md shadow-blue-500/25 hover:shadow-lg hover:shadow-blue-500/35 transition-all duration-200 group"
              >
                View Selected Projects
                <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                </svg>
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl font-semibold text-sm border border-border-subtle hover:border-border-light bg-bg-card hover:bg-bg-secondary text-text-primary transition-all duration-200 shadow-xs hover:shadow"
              >
                Get in Touch
              </a>

              {/* Direct Social Links with Clean Tactile Buttons */}
              <div className="flex items-center gap-2 pl-2 sm:pl-3 border-l border-border-subtle">
                <a
                  href="https://github.com/farelrakhadzakwan/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl text-text-muted hover:text-text-primary bg-bg-secondary hover:bg-bg-card border border-border-subtle/60 transition-all shadow-2xs"
                  aria-label="GitHub Profile"
                  title="GitHub Profile"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"></path>
                  </svg>
                </a>
                <a
                  href="https://www.linkedin.com/in/farel-rakha-dzakwan/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl text-text-muted hover:text-text-primary bg-bg-secondary hover:bg-bg-card border border-border-subtle/60 transition-all shadow-2xs"
                  aria-label="LinkedIn Profile"
                  title="LinkedIn Profile"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path>
                  </svg>
                </a>
                <a
                  href="mailto:professionalfarelrakhad@gmail.com"
                  className="p-2.5 rounded-xl text-text-muted hover:text-text-primary bg-bg-secondary hover:bg-bg-card border border-border-subtle/60 transition-all shadow-2xs"
                  aria-label="Send Email"
                  title="Send Email"
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="2" y="4" width="20" height="16" rx="2"></rect>
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Layered Showcase Card with Ambient Glow */}
          <div className="hero-avatar-wrapper fade-in flex justify-center relative mt-6 lg:mt-0">
            {/* Ambient Aura behind photo */}
            <div className="absolute w-72 h-80 sm:w-80 sm:h-96 bg-gradient-to-tr from-blue-500/25 via-indigo-500/20 to-purple-500/20 rounded-full blur-3xl -z-10 pointer-events-none"></div>

            {/* Relative Frame Container */}
            <div className="relative">
              {/* Floating Top Badge: Education & GPA */}
              <div className="absolute -top-3.5 -right-2 sm:-right-4 z-20 bg-bg-card/95 backdrop-blur-md border border-border-subtle px-3.5 py-2 rounded-xl shadow-lg shadow-black/5 dark:shadow-black/40 flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-blue-500/10 text-accent-blue flex items-center justify-center shrink-0">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5z"></path>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path>
                  </svg>
                </div>
                <div className="text-left">
                  <div className="text-[10px] font-semibold text-text-muted uppercase tracking-wider">Universitas Brawijaya</div>
                  <div className="text-xs font-bold text-text-primary">GPA 3.73 / 4.00</div>
                </div>
              </div>

              {/* Floating Bottom Badge: 1st Place IEEE FEST */}
              <div className="absolute -bottom-3.5 -left-2 sm:-left-4 z-20 bg-bg-card/95 backdrop-blur-md border border-amber-200/90 dark:border-amber-800/60 px-3.5 py-2 rounded-xl shadow-lg shadow-black/5 dark:shadow-black/40 flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-amber-500/10 text-accent-amber flex items-center justify-center shrink-0">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6M18 9h1.5a2.5 2.5 0 0 0 0-5H18M4 22h16M12 15a6 6 0 0 0 6-6V3H6v6a6 6 0 0 0 6 6zM12 15v7"></path>
                  </svg>
                </div>
                <div className="text-left">
                  <div className="text-[10px] font-bold text-amber-700 dark:text-amber-400 uppercase tracking-wider">1st Place Winner</div>
                  <div className="text-xs font-bold text-text-primary">IEEE FEST 2025</div>
                </div>
              </div>

              {/* Layered Showcase Card Frame */}
              <div className="p-3 bg-bg-card/90 backdrop-blur-xl rounded-3xl border border-border-subtle shadow-2xl shadow-indigo-950/10 dark:shadow-black/50 w-full max-w-[280px] sm:max-w-[320px]">
                <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-slate-900 shadow-inner">
                  <img
                    src="assets/profile-card.png"
                    alt="Farel Rakha Dzakwan — AI Engineer & AI Researcher"
                    className="w-full h-full object-cover object-top"
                    width="320"
                    height="427"
                    fetchPriority="high"
                  />
                  {/* Subtle bottom vignette to blend naturally */}
                  {/* Subtle bottom vignette to blend naturally */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent pointer-events-none"></div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
