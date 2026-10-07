import React from 'react';

const Achievements = ({ data }) => {
  return (
    <section className="py-24 bg-bg-secondary" id="achievements">
      <div className="max-w-7xl mx-auto px-6">
        <div className="fade-in mb-12">
          <div className="font-display text-xs font-semibold tracking-[3px] uppercase text-accent-blue mb-2 flex items-center gap-2">
            <span className="w-6 h-0.5 bg-gradient-to-r from-accent-blue to-accent-violet rounded-full"></span>
            Achievements
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-text-primary mb-2">Awards &amp; Certifications</h2>
        </div>

        {/*  Major Spotlight Achievements Grid  */}
        <div className="achievements-grid fade-in grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">

          {/*  1st Place IEEE FEST  */}
          <div className="achievement-card relative bg-gradient-to-br from-bg-card to-amber-950/10 border border-accent-amber/30 rounded-2xl p-6 text-center hover:border-accent-amber/60 transition-all duration-300 shadow-lg">
            <span className="absolute top-3 right-3 font-mono text-[0.65rem] font-bold uppercase tracking-wider text-accent-amber bg-accent-amber/10 border border-accent-amber/25 px-2.5 py-0.5 rounded-full">
              ✦ Top Achievement
            </span>
            <div className="w-12 h-12 mx-auto mb-4 text-accent-amber flex items-center justify-center">
              <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6M18 9h1.5a2.5 2.5 0 0 0 0-5H18M4 22h16M12 15a6 6 0 0 0 6-6V3H6v6a6 6 0 0 0 6 6zM12 15v7"></path>
              </svg>
            </div>
            <h3 className="font-display text-base font-bold text-text-primary mb-1">1st Place — IEEE FEST</h3>
            <p className="text-xs text-text-muted">Research Plan Competition<br />IEEE Student Branch UB · Sep 2025</p>
          </div>

          {/*  HAKI  */}
          <a href="https://hakcipta.dgip.go.id/legal/c/MDAxMjc2NTM1" target="_blank" rel="noopener noreferrer" className="achievement-card relative bg-gradient-to-br from-bg-card to-amber-950/10 border border-accent-amber/30 rounded-2xl p-6 text-center hover:border-accent-amber/60 transition-all duration-300 shadow-lg group" title="Verify Official HAKI Certificate — DGIP Kemenkumham RI">
            <span className="absolute top-3 right-3 font-mono text-[0.65rem] font-bold uppercase tracking-wider text-accent-amber bg-accent-amber/10 border border-accent-amber/25 px-2.5 py-0.5 rounded-full group-hover:bg-accent-amber group-hover:text-black transition-colors">
              ✦ Registered IP ↗
            </span>
            <div className="w-12 h-12 mx-auto mb-4 text-accent-amber flex items-center justify-center">
              <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                <path strokeLinecap="round" strokeLinejoin="round" d="m9 12 2 2 4-4"></path>
              </svg>
            </div>
            <h3 className="font-display text-base font-bold text-text-primary mb-1 group-hover:text-accent-amber transition-colors">HAKI — Intellectual Property</h3>
            <p className="text-xs text-text-muted">Rancang Bangun Aplikasi Peringatan Stres Kerja<br />Kemenkumham RI · Jun 2026</p>
          </a>

          {/*  Alibaba Top 10  */}
          <div className="achievement-card bg-bg-card/70 border border-border-subtle rounded-2xl p-6 text-center hover:border-border-light transition-all duration-300">
            <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center">
              <img src="assets/logo-alibaba.png" alt="Alibaba Cloud" className="w-8 h-8 object-contain bg-white p-1 rounded-md" loading="lazy" width="32" height="32" />
            </div>
            <h3 className="font-display text-base font-bold text-text-primary mb-1">Top 10 — National AI Program</h3>
            <p className="text-xs text-text-muted">AI Talent Development<br />Alibaba Cloud · Oct 2025</p>
          </div>

          {/*  Best Poster  */}
          <div className="achievement-card bg-bg-card/70 border border-border-subtle rounded-2xl p-6 text-center hover:border-border-light transition-all duration-300">
            <div className="w-12 h-12 mx-auto mb-4 text-accent-blue flex items-center justify-center">
              <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <circle cx="12" cy="8" r="7"></circle>
                <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>
              </svg>
            </div>
            <h3 className="font-display text-base font-bold text-text-primary mb-1">Best Poster — IEEE FEST</h3>
            <p className="text-xs text-text-muted">Research Plan Poster<br />IEEE Student Branch UB · Sep 2025</p>
          </div>

        </div>

        {/*  Certifications Accordion / List  */}
        <div className="cert-section fade-in space-y-8">

          {/*  Google  */}
          <div>
            <div className="flex flex-wrap items-center justify-between gap-2 mb-3 pb-2 border-b border-border-subtle">
              <h4 className="font-display text-base font-bold text-text-primary flex items-center gap-2">
                <svg className="w-5 h-5" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"></path>
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"></path>
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"></path>
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"></path>
                </svg>
                Google
              </h4>
              <span className="font-mono text-xs text-text-muted">August 2026 – August 2027 · ID: 190907239</span>
            </div>
            <div className="grid sm:grid-cols-2 gap-3">
              <a href="https://skillshop.credential.net/543f2c75-3754-445f-9d78-4ef13b8c9cf9" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between p-3.5 bg-bg-card border border-border-subtle rounded-xl text-xs font-medium text-text-secondary hover:text-text-primary hover:border-accent-blue/40 hover:bg-accent-blue/5 transition-all group">
                <span className="flex items-center gap-2">
                  <span className="text-accent-green font-bold">✓</span>
                  Google Analytics Certification
                </span>
                <span className="text-text-muted group-hover:text-accent-blue group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all">↗</span>
              </a>
            </div>
          </div>

          {/*  OpenAI  */}
          <div>
            <div className="flex flex-wrap items-center justify-between gap-2 mb-3 pb-2 border-b border-border-subtle">
              <h4 className="font-display text-base font-bold text-text-primary flex items-center gap-2">
                <img src="assets/logo-openai.png" alt="OpenAI" className="w-5 h-5 filter brightness-0 invert" loading="lazy" width="20" height="20" />
                OpenAI
              </h4>
              <span className="font-mono text-xs text-text-muted">August 2026</span>
            </div>
            <div className="grid sm:grid-cols-3 gap-3">
              <a href="https://academy.openai.com/home/certificate/3mk3mzygl5" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between p-3.5 bg-bg-card border border-border-subtle rounded-xl text-xs font-medium text-text-secondary hover:text-text-primary hover:border-accent-blue/40 hover:bg-accent-blue/5 transition-all group">
                <span className="flex items-center gap-2">
                  <span className="text-accent-green font-bold">✓</span>
                  OpenAI Academy: AI Foundations (ID: 3mk3mzygl5)
                </span>
                <span className="text-text-muted group-hover:text-accent-blue group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all">↗</span>
              </a>
              <a href="https://academy.openai.com/home/certificate/sujozg5gtd" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between p-3.5 bg-bg-card border border-border-subtle rounded-xl text-xs font-medium text-text-secondary hover:text-text-primary hover:border-accent-blue/40 hover:bg-accent-blue/5 transition-all group">
                <span className="flex items-center gap-2">
                  <span className="text-accent-green font-bold">✓</span>
                  OpenAI Academy: Applied AI Foundations (ID: sujozg5gtd)
                </span>
                <span className="text-text-muted group-hover:text-accent-blue group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all">↗</span>
              </a>
              <a href="https://academy.openai.com/home/certificate/jl2mbm4aos" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between p-3.5 bg-bg-card border border-border-subtle rounded-xl text-xs font-medium text-text-secondary hover:text-text-primary hover:border-accent-blue/40 hover:bg-accent-blue/5 transition-all group">
                <span className="flex items-center gap-2">
                  <span className="text-accent-green font-bold">✓</span>
                  OpenAI Academy: Agents and Workflows (ID: jl2mbm4aos)
                </span>
                <span className="text-text-muted group-hover:text-accent-blue group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all">↗</span>
              </a>
            </div>
          </div>

          {/*  Trust Training Partners  */}
          <div>
            <div className="flex flex-wrap items-center justify-between gap-2 mb-3 pb-2 border-b border-border-subtle">
              <h4 className="font-display text-base font-bold text-text-primary flex items-center gap-2">
                <img src="assets/logo-ttp.png" alt="Trust Training Partners" className="h-5 w-auto bg-white p-0.5 rounded" loading="lazy" />
                Trust Training Partners
              </h4>
              <span className="font-mono text-xs text-text-muted">March 2026 · ID: 26UBC03128311</span>
            </div>
            <div className="grid sm:grid-cols-1 gap-3">
              <a href="https://certv.trusttrain.com/digital-transcript/gUgnQE4kfsUeItZ5XWgs9wtTmRTEfCfG81ISiPcNJ4htMsOjKtpWGz7IJH0OdFON" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between p-3.5 bg-bg-card border border-border-subtle rounded-xl text-xs font-medium text-text-secondary hover:text-text-primary hover:border-accent-blue/40 hover:bg-accent-blue/5 transition-all group">
                <span className="flex items-center gap-2">
                  <span className="text-accent-green font-bold">✓</span>
                  Microsoft Office Desktop Application (Excel, PowerPoint, Word)
                </span>
                <span className="text-text-muted group-hover:text-accent-blue group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all">↗</span>
              </a>
            </div>
          </div>

          {/*  IDEA-AI  */}
          <div>
            <div className="flex flex-wrap items-center justify-between gap-2 mb-3 pb-2 border-b border-border-subtle">
              <h4 className="font-display text-base font-bold text-text-primary flex items-center gap-2">
                <img src="assets/logo-idea-ai.png" alt="IDEA-AI" className="h-5 w-auto" loading="lazy" />
                IDEA-AI
              </h4>
              <span className="font-mono text-xs text-text-muted">January 2026 · Expires Jan 2029</span>
            </div>
            <div className="grid sm:grid-cols-1 gap-3">
              <a href="https://lms.idea-ai.com.au/certificate-page/?user=5181&amp;course=60703" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between p-3.5 bg-bg-card border border-border-subtle rounded-xl text-xs font-medium text-text-secondary hover:text-text-primary hover:border-accent-blue/40 hover:bg-accent-blue/5 transition-all group">
                <span className="flex items-center gap-2">
                  <span className="text-accent-green font-bold">✓</span>
                  Generative Artificial Intelligence — Fundamental Principles &amp; Practical Applications
                </span>
                <span className="text-text-muted group-hover:text-accent-blue group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all">↗</span>
              </a>
            </div>
          </div>

          {/*  Universitas Brawijaya  */}
          <div>
            <div className="flex flex-wrap items-center justify-between gap-2 mb-3 pb-2 border-b border-border-subtle">
              <h4 className="font-display text-base font-bold text-text-primary flex items-center gap-2">
                <img src="assets/logo-ub.png" alt="Universitas Brawijaya" className="w-5 h-5 object-contain" loading="lazy" width="20" height="20" />
                Universitas Brawijaya
              </h4>
              <span className="font-mono text-xs text-text-muted">November 2025</span>
            </div>
            <div className="grid sm:grid-cols-1 gap-3">
              <div className="p-3.5 bg-bg-card border border-border-subtle rounded-xl text-xs font-medium text-text-secondary flex items-center gap-2">
                <span className="text-accent-green font-bold">✓</span>
                Brawijaya English Proficiency Test — Brawijaya Language Center
              </div>
            </div>
          </div>

          {/*  Alibaba Cloud  */}
          <div>
            <div className="flex flex-wrap items-center justify-between gap-2 mb-3 pb-2 border-b border-border-subtle">
              <h4 className="font-display text-base font-bold text-text-primary flex items-center gap-2">
                <img src="assets/logo-alibaba.png" alt="Alibaba Cloud" className="w-5 h-5 object-contain bg-white p-0.5 rounded" loading="lazy" width="20" height="20" />
                Alibaba Cloud
              </h4>
              <span className="font-mono text-xs text-text-muted">October 2025</span>
            </div>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
              <div className="p-3 bg-bg-card border border-border-subtle rounded-xl text-xs text-text-secondary flex items-center gap-2"><span className="text-accent-green font-bold">✓</span> Alibaba Cloud Platform for AI</div>
              <div className="p-3 bg-bg-card border border-border-subtle rounded-xl text-xs text-text-secondary flex items-center gap-2"><span className="text-accent-green font-bold">✓</span> Dive Into Generative AI</div>
              <div className="p-3 bg-bg-card border border-border-subtle rounded-xl text-xs text-text-secondary flex items-center gap-2"><span className="text-accent-green font-bold">✓</span> Fundamentals of RAG and Agents</div>
              <div className="p-3 bg-bg-card border border-border-subtle rounded-xl text-xs text-text-secondary flex items-center gap-2"><span className="text-accent-green font-bold">✓</span> Getting to Know Generative AI</div>
              <div className="p-3 bg-bg-card border border-border-subtle rounded-xl text-xs text-text-secondary flex items-center gap-2"><span className="text-accent-green font-bold">✓</span> GPU-accelerated ECS</div>
              <div className="p-3 bg-bg-card border border-border-subtle rounded-xl text-xs text-text-secondary flex items-center gap-2"><span className="text-accent-green font-bold">✓</span> The Inner Workings of Generative AI</div>
              <div className="p-3 bg-bg-card border border-border-subtle rounded-xl text-xs text-text-secondary flex items-center gap-2"><span className="text-accent-green font-bold">✓</span> The Large World of Language Models</div>
              <div className="p-3 bg-bg-card border border-border-subtle rounded-xl text-xs text-text-secondary flex items-center gap-2"><span className="text-accent-green font-bold">✓</span> Model Studio Fundamentals</div>
              <div className="p-3 bg-bg-card border border-border-subtle rounded-xl text-xs text-text-secondary flex items-center gap-2"><span className="text-accent-green font-bold">✓</span> Prompt Engineering Fundamentals</div>
              <div className="p-3 bg-bg-card border border-border-subtle rounded-xl text-xs text-text-secondary flex items-center gap-2"><span className="text-accent-green font-bold">✓</span> Using Generative AI Responsibly</div>
            </div>
          </div>

          {/*  Dicoding  */}
          <div>
            <div className="flex flex-wrap items-center justify-between gap-2 mb-3 pb-2 border-b border-border-subtle">
              <h4 className="font-display text-base font-bold text-text-primary flex items-center gap-2">
                <img src="assets/logo-dicoding.png" alt="Dicoding" className="w-5 h-5 object-contain" loading="lazy" width="20" height="20" />
                Dicoding
              </h4>
              <span className="font-mono text-xs text-text-muted">October 2024</span>
            </div>
            <div className="grid sm:grid-cols-2 gap-3">
              <div className="p-3 bg-bg-card border border-border-subtle rounded-xl text-xs text-text-secondary flex items-center gap-2"><span className="text-accent-green font-bold">✓</span> Belajar Dasar Visualisasi Data</div>
              <div className="p-3 bg-bg-card border border-border-subtle rounded-xl text-xs text-text-secondary flex items-center gap-2"><span className="text-accent-green font-bold">✓</span> Memulai Pemrograman dengan Python</div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Achievements;
