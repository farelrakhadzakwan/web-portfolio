import React from 'react';

const Achievements = ({ data }) => {
  return (
    <section className="py-24 bg-bg-secondary/40 border-y border-border-subtle" id="achievements">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="fade-in mb-14 max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-accent-blue text-xs font-semibold mb-3">
            Honors &amp; Credentials
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-text-primary tracking-tight mb-2">
            Awards &amp; Certifications
          </h2>
          <p className="text-text-secondary text-base sm:text-lg leading-relaxed">
            National research competition honors, intellectual property rights, and industry AI certifications.
          </p>
        </div>

        {/* Major Spotlight Achievements Grid */}
        <div className="fade-in grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">

          {/* 1st Place IEEE FEST */}
          <div className="relative bg-bg-card border border-amber-200/90 dark:border-amber-800/60 rounded-2xl p-6 text-center shadow-xs hover:border-accent-amber hover:shadow-lg hover:shadow-amber-500/5 hover:-translate-y-1 transition-all duration-300">
            <span className="absolute top-3.5 right-3.5 text-[10px] font-bold uppercase tracking-wider text-amber-800 bg-amber-100/90 border border-amber-200 dark:text-amber-300 dark:bg-amber-950/60 dark:border-amber-800/60 px-2.5 py-0.5 rounded-full">
              Winner
            </span>
            <div className="w-12 h-12 mx-auto mb-4 text-accent-amber flex items-center justify-center bg-amber-500/10 rounded-xl">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6M18 9h1.5a2.5 2.5 0 0 0 0-5H18M4 22h16M12 15a6 6 0 0 0 6-6V3H6v6a6 6 0 0 0 6 6zM12 15v7"></path>
              </svg>
            </div>
            <h3 className="font-display text-base font-bold text-text-primary mb-1">1st Place — IEEE FEST</h3>
            <p className="text-xs text-text-muted">Research Plan Competition<br />IEEE Student Branch UB · Sep 2025</p>
          </div>

          {/* HAKI */}
          <a
            href="https://hakcipta.dgip.go.id/legal/c/MDAxMjc2NTM1"
            target="_blank"
            rel="noopener noreferrer"
            className="relative bg-bg-card border border-amber-200/90 dark:border-amber-800/60 rounded-2xl p-6 text-center shadow-xs hover:border-accent-amber hover:shadow-lg hover:shadow-amber-500/5 hover:-translate-y-1 transition-all duration-300 group"
            title="Verify Official HAKI Certificate — DGIP Kemenkumham RI"
          >
            <span className="absolute top-3.5 right-3.5 text-[10px] font-bold uppercase tracking-wider text-amber-800 bg-amber-100/90 border border-amber-200 dark:text-amber-300 dark:bg-amber-950/60 dark:border-amber-800/60 px-2.5 py-0.5 rounded-full group-hover:bg-amber-500 group-hover:text-white transition-colors">
              Registered IP ↗
            </span>
            <div className="w-12 h-12 mx-auto mb-4 text-accent-amber flex items-center justify-center bg-amber-500/10 rounded-xl">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                <path strokeLinecap="round" strokeLinejoin="round" d="m9 12 2 2 4-4"></path>
              </svg>
            </div>
            <h3 className="font-display text-base font-bold text-text-primary mb-1 group-hover:text-accent-amber transition-colors">
              HAKI — Intellectual Property
            </h3>
            <p className="text-xs text-text-muted">Rancang Bangun Peringatan Stres Kerja<br />Kemenkumham RI · Jun 2026</p>
          </a>

          {/* Alibaba Top 10 */}
          <div className="bg-bg-card border border-border-subtle rounded-2xl p-6 text-center shadow-xs hover:border-accent-blue/40 hover:shadow-lg hover:shadow-blue-500/5 hover:-translate-y-1 transition-all duration-300">
            <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center bg-bg-secondary rounded-xl">
              <img src="assets/logo-alibaba.png" alt="Alibaba Cloud" className="w-7 h-7 object-contain" loading="lazy" width="28" height="28" />
            </div>
            <h3 className="font-display text-base font-bold text-text-primary mb-1">Top 10 — National AI Program</h3>
            <p className="text-xs text-text-muted">AI Talent Development<br />Alibaba Cloud · Oct 2025</p>
          </div>

          {/* Best Poster */}
          <div className="bg-bg-card border border-border-subtle rounded-2xl p-6 text-center shadow-xs hover:border-accent-blue/40 hover:shadow-lg hover:shadow-blue-500/5 hover:-translate-y-1 transition-all duration-300">
            <div className="w-12 h-12 mx-auto mb-4 text-accent-blue flex items-center justify-center bg-blue-500/10 rounded-xl">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <circle cx="12" cy="8" r="7"></circle>
                <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>
              </svg>
            </div>
            <h3 className="font-display text-base font-bold text-text-primary mb-1">Best Poster — IEEE FEST</h3>
            <p className="text-xs text-text-muted">Research Plan Poster<br />IEEE Student Branch UB · Sep 2025</p>
          </div>

        </div>

        {/* Certifications by Issuer */}
        <div className="fade-in space-y-8">

          {/* Google */}
          <div>
            <div className="flex flex-wrap items-center justify-between gap-2 mb-3 pb-2 border-b border-border-subtle">
              <h4 className="font-display text-base font-bold text-text-primary flex items-center gap-2">
                <svg className="w-4 h-4" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"></path>
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"></path>
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"></path>
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"></path>
                </svg>
                Google
              </h4>
              <span className="font-mono text-xs text-text-muted">Aug 2026 – Aug 2027 · ID: 190907239</span>
            </div>
            <div className="grid sm:grid-cols-2 gap-3">
              <a
                href="https://skillshop.credential.net/543f2c75-3754-445f-9d78-4ef13b8c9cf9"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3.5 bg-bg-card border border-border-subtle rounded-xl text-xs font-medium text-text-secondary hover:text-text-primary hover:border-accent-blue/40 shadow-xs hover:shadow transition-all group"
              >
                <span className="flex items-center gap-2">
                  <span className="text-emerald-500 font-bold">✓</span>
                  Google Analytics Certification
                </span>
                <span className="text-text-muted group-hover:text-accent-blue group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all">↗</span>
              </a>
            </div>
          </div>

          {/* OpenAI */}
          <div>
            <div className="flex flex-wrap items-center justify-between gap-2 mb-3 pb-2 border-b border-border-subtle">
              <h4 className="font-display text-base font-bold text-text-primary flex items-center gap-2">
                <img src="assets/logo-openai.png" alt="OpenAI" className="w-4 h-4 object-contain" loading="lazy" width="16" height="16" />
                OpenAI
              </h4>
              <span className="font-mono text-xs text-text-muted">August 2026</span>
            </div>
            <div className="grid sm:grid-cols-3 gap-3">
              <a
                href="https://academy.openai.com/home/certificate/3mk3mzygl5"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3.5 bg-bg-card border border-border-subtle rounded-xl text-xs font-medium text-text-secondary hover:text-text-primary hover:border-accent-blue/40 shadow-xs hover:shadow transition-all group"
              >
                <span className="flex items-center gap-2">
                  <span className="text-emerald-500 font-bold">✓</span>
                  OpenAI Academy: AI Foundations
                </span>
                <span className="text-text-muted group-hover:text-accent-blue transition-all">↗</span>
              </a>
              <a
                href="https://academy.openai.com/home/certificate/sujozg5gtd"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3.5 bg-bg-card border border-border-subtle rounded-xl text-xs font-medium text-text-secondary hover:text-text-primary hover:border-accent-blue/40 shadow-xs hover:shadow transition-all group"
              >
                <span className="flex items-center gap-2">
                  <span className="text-emerald-500 font-bold">✓</span>
                  Applied AI Foundations
                </span>
                <span className="text-text-muted group-hover:text-accent-blue transition-all">↗</span>
              </a>
              <a
                href="https://academy.openai.com/home/certificate/jl2mbm4aos"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3.5 bg-bg-card border border-border-subtle rounded-xl text-xs font-medium text-text-secondary hover:text-text-primary hover:border-accent-blue/40 shadow-xs hover:shadow transition-all group"
              >
                <span className="flex items-center gap-2">
                  <span className="text-emerald-500 font-bold">✓</span>
                  Agents and Workflows
                </span>
                <span className="text-text-muted group-hover:text-accent-blue transition-all">↗</span>
              </a>
            </div>
          </div>

          {/* Trust Training Partners & IDEA-AI */}
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <div className="flex flex-wrap items-center justify-between gap-2 mb-3 pb-2 border-b border-border-subtle">
                <h4 className="font-display text-base font-bold text-text-primary flex items-center gap-2">
                  <img src="assets/logo-ttp.png" alt="Trust Training Partners" className="h-4 w-auto rounded" loading="lazy" />
                  Trust Training Partners
                </h4>
                <span className="font-mono text-xs text-text-muted">March 2026</span>
              </div>
              <a
                href="https://certv.trusttrain.com/digital-transcript/gUgnQE4kfsUeItZ5XWgs9wtTmRTEfCfG81ISiPcNJ4htMsOjKtpWGz7IJH0OdFON"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3.5 bg-bg-card border border-border-subtle rounded-xl text-xs font-medium text-text-secondary hover:text-text-primary hover:border-accent-blue/40 shadow-xs hover:shadow transition-all group"
              >
                <span className="flex items-center gap-2">
                  <span className="text-emerald-500 font-bold">✓</span>
                  Microsoft Office Desktop Applications Certified
                </span>
                <span className="text-text-muted group-hover:text-accent-blue transition-all">↗</span>
              </a>
            </div>

            <div>
              <div className="flex flex-wrap items-center justify-between gap-2 mb-3 pb-2 border-b border-border-subtle">
                <h4 className="font-display text-base font-bold text-text-primary flex items-center gap-2">
                  <img src="assets/logo-idea-ai.png" alt="IDEA-AI" className="h-4 w-auto" loading="lazy" />
                  IDEA-AI
                </h4>
                <span className="font-mono text-xs text-text-muted">Jan 2026 – Jan 2029</span>
              </div>
              <a
                href="https://lms.idea-ai.com.au/certificate-page/?user=5181&course=60703"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3.5 bg-bg-card border border-border-subtle rounded-xl text-xs font-medium text-text-secondary hover:text-text-primary hover:border-accent-blue/40 shadow-xs hover:shadow transition-all group"
              >
                <span className="flex items-center gap-2">
                  <span className="text-emerald-500 font-bold">✓</span>
                  Generative AI: Fundamental Principles &amp; Applications
                </span>
                <span className="text-text-muted group-hover:text-accent-blue transition-all">↗</span>
              </a>
            </div>
          </div>

          {/* Alibaba Cloud Certifications Grid */}
          <div>
            <div className="flex flex-wrap items-center justify-between gap-2 mb-3 pb-2 border-b border-border-subtle">
              <h4 className="font-display text-base font-bold text-text-primary flex items-center gap-2">
                <img src="assets/logo-alibaba.png" alt="Alibaba Cloud" className="w-4 h-4 object-contain" loading="lazy" width="16" height="16" />
                Alibaba Cloud Certifications
              </h4>
              <span className="font-mono text-xs text-text-muted">October 2025</span>
            </div>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-2.5">
              {[
                'Alibaba Cloud Platform for AI',
                'Dive Into Generative AI',
                'Fundamentals of RAG and Agents',
                'Getting to Know Generative AI',
                'GPU-accelerated ECS',
                'The Inner Workings of Generative AI',
                'The Large World of Language Models',
                'Model Studio Fundamentals',
                'Prompt Engineering Fundamentals',
                'Using Generative AI Responsibly'
              ].map((c, cIdx) => (
                <div
                  key={cIdx}
                  className="p-3 bg-bg-card border border-border-subtle rounded-xl text-xs text-text-secondary flex items-center gap-2 shadow-2xs hover:border-accent-blue/30 transition-colors"
                >
                  <span className="text-emerald-500 font-bold">✓</span>
                  <span className="truncate">{c}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Achievements;
