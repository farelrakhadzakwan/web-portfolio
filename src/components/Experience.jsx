import React from 'react';

const Experience = ({ data }) => {
  return (
    <section className="py-24" id="experience">
      <div className="max-w-7xl mx-auto px-6">
        
        {/*  Section Header  */}
        <div className="fade-in mb-16 max-w-2xl">
          <div className="font-mono text-xs font-bold tracking-[0.2em] uppercase text-accent-blue mb-3">
            04 / EXPERIENCE
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-text-primary tracking-tight mb-4">
            Professional Journey
          </h2>
          <p className="text-text-secondary text-base sm:text-lg leading-relaxed">
            Laboratory leadership, applied AI research internships, and technical training delivery.
          </p>
        </div>

        {/*  Vertical Editorial Timeline Container  */}
        <div className="fade-in divide-y divide-border-subtle/80 border-y border-border-subtle/80">

          {/*  Entry 1: Coordinator Lab Assistant  */}
          <article className="py-8 sm:py-10 grid lg:grid-cols-[260px_1fr] gap-6 lg:gap-12 items-start cursor-pointer group/card hover:bg-bg-card/30 rounded-2xl p-4 sm:p-6 transition-all border border-transparent hover:border-border-subtle/60" role="button" tabindex="0">
            <div className="space-y-1">
              <div className="font-mono text-xs font-bold text-accent-blue uppercase tracking-wider">
                Aug 2025 – Dec 2025
              </div>
              <div className="text-xs font-medium text-text-muted">
                Laboratory Leadership
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="font-display text-xl sm:text-2xl font-bold text-text-primary tracking-tight mb-1 group-hover/card:text-accent-blue transition-colors">
                    Coordinator Laboratory Assistant — Neural Networks Course
                  </h3>
                  <div className="text-sm font-semibold text-accent-blue">
                    Universitas Brawijaya
                  </div>
                </div>
                <button type="button" className="exp-toggle-btn shrink-0 px-3 py-1.5 rounded-lg bg-bg-secondary hover:bg-bg-card border border-border-subtle text-text-muted group-hover/card:text-accent-blue transition-all flex items-center gap-2 focus-visible:outline-none" aria-expanded="true" aria-label="Toggle details">
                  <span className="font-mono text-xs hidden sm:inline toggle-text">Hide Details</span>
                  <svg className="w-4 h-4 transition-transform duration-300 transform rotate-180 chevron-icon" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"></path>
                  </svg>
                </button>
              </div>

              {/*  Scope Tag  */}
              <div>
                <div className="font-mono text-xs text-text-muted font-medium bg-bg-secondary/80 px-3 py-1 rounded-md inline-block border border-border-subtle/50">
                  Scope: 14 Laboratory Assistants · 7 Classes
                </div>
              </div>

              {/*  Collapsible Bullet Points (Only UL collapses smoothly)  */}
              <div className="exp-bullets grid transition-[grid-template-rows,opacity] duration-300 ease-in-out grid-rows-[1fr] opacity-100">
                <div className="overflow-hidden">
                  <ul className="text-sm text-text-secondary space-y-2 leading-relaxed pt-1 pb-1">
                    <li className="flex items-start gap-2.5">
                      <span className="text-accent-blue font-bold shrink-0 mt-0.5">—</span>
                      <span>Coordinated 14 laboratory assistants across 7 classes to deliver standardized practical instruction.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="text-accent-blue font-bold shrink-0 mt-0.5">—</span>
                      <span>Standardized laboratory workflows, grading rubrics, and practical examination criteria.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="text-accent-blue font-bold shrink-0 mt-0.5">—</span>
                      <span>Managed real-time issue resolution and technical support during hands-on lab sessions.</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/*  Always Visible Impact Pill (Sits below bullet points in maximize mode; slides up under Scope in minimize mode)  */}
              <div className="transition-all duration-300">
                <span className="font-mono text-xs font-semibold text-accent-green bg-accent-green/10 border border-accent-green/20 px-3.5 py-1.5 rounded-md inline-flex items-center gap-1.5">
                  <span>✦ Impact:</span> ~30% readiness improvement · ~25% troubleshooting reduction
                </span>
              </div>
            </div>
          </article>

          {/*  Entry 2: AI Researcher  */}
          <article className="py-8 sm:py-10 grid lg:grid-cols-[260px_1fr] gap-6 lg:gap-12 items-start cursor-pointer group/card hover:bg-bg-card/30 rounded-2xl p-4 sm:p-6 transition-all border border-transparent hover:border-border-subtle/60" role="button" tabindex="0">
            <div className="space-y-1">
              <div className="font-mono text-xs font-bold text-accent-blue uppercase tracking-wider">
                Feb 2025 – Jun 2025
              </div>
              <div className="text-xs font-medium text-text-muted">
                AI Research Internship
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="font-display text-xl sm:text-2xl font-bold text-text-primary tracking-tight mb-1 group-hover/card:text-accent-blue transition-colors">
                    Researcher — Laboratory Enhanced Learning Internship
                  </h3>
                  <div className="text-sm font-semibold text-accent-blue">
                    Universitas Brawijaya
                  </div>
                </div>
                <button type="button" className="exp-toggle-btn shrink-0 px-3 py-1.5 rounded-lg bg-bg-secondary hover:bg-bg-card border border-border-subtle text-text-muted group-hover/card:text-accent-blue transition-all flex items-center gap-2 focus-visible:outline-none" aria-expanded="true" aria-label="Toggle details">
                  <span className="font-mono text-xs hidden sm:inline toggle-text">Hide Details</span>
                  <svg className="w-4 h-4 transition-transform duration-300 transform rotate-180 chevron-icon" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"></path>
                  </svg>
                </button>
              </div>

              {/*  Scope Tag  */}
              <div>
                <div className="font-mono text-xs text-text-muted font-medium bg-bg-secondary/80 px-3 py-1 rounded-md inline-block border border-border-subtle/50">
                  Scope: Prefrontal Cortex EEG Signals · Multi-subject Analysis
                </div>
              </div>

              {/*  Collapsible Bullet Points (Only UL collapses smoothly)  */}
              <div className="exp-bullets grid transition-[grid-template-rows,opacity] duration-300 ease-in-out grid-rows-[1fr] opacity-100">
                <div className="overflow-hidden">
                  <ul className="text-sm text-text-secondary space-y-2 leading-relaxed pt-1 pb-1">
                    <li className="flex items-start gap-2.5">
                      <span className="text-accent-blue font-bold shrink-0 mt-0.5">—</span>
                      <span>Formulated pseudo-labeling methodology for prefrontal cortex EEG signal representations.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="text-accent-blue font-bold shrink-0 mt-0.5">—</span>
                      <span>Evaluated unsupervised-to-supervised learning pipelines using K-Means, GMM, SVM, Decision Trees, and KNN.</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/*  Always Visible Benchmark Pill  */}
              <div className="transition-all duration-300">
                <span className="font-mono text-xs font-semibold text-accent-green bg-accent-green/10 border border-accent-green/20 px-3.5 py-1.5 rounded-md inline-flex items-center gap-1.5">
                  <span>✦ Benchmark:</span> 97.18% Accuracy achieved via K-Means + SVM Pipeline
                </span>
              </div>
            </div>
          </article>

          {/*  Entry 3: Advanced AI Lab Assistant  */}
          <article className="py-8 sm:py-10 grid lg:grid-cols-[260px_1fr] gap-6 lg:gap-12 items-start cursor-pointer group/card hover:bg-bg-card/30 rounded-2xl p-4 sm:p-6 transition-all border border-transparent hover:border-border-subtle/60" role="button" tabindex="0">
            <div className="space-y-1">
              <div className="font-mono text-xs font-bold text-accent-blue uppercase tracking-wider">
                Feb 2025 – Jun 2025
              </div>
              <div className="text-xs font-medium text-text-muted">
                Technical Instruction
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="font-display text-xl sm:text-2xl font-bold text-text-primary tracking-tight mb-1 group-hover/card:text-accent-blue transition-colors">
                    Laboratory Assistant — Advanced AI Course
                  </h3>
                  <div className="text-sm font-semibold text-accent-blue">
                    Universitas Brawijaya
                  </div>
                </div>
                <button type="button" className="exp-toggle-btn shrink-0 px-3 py-1.5 rounded-lg bg-bg-secondary hover:bg-bg-card border border-border-subtle text-text-muted group-hover/card:text-accent-blue transition-all flex items-center gap-2 focus-visible:outline-none" aria-expanded="true" aria-label="Toggle details">
                  <span className="font-mono text-xs hidden sm:inline toggle-text">Hide Details</span>
                  <svg className="w-4 h-4 transition-transform duration-300 transform rotate-180 chevron-icon" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"></path>
                  </svg>
                </button>
              </div>

              {/*  Scope Tag  */}
              <div>
                <div className="font-mono text-xs text-text-muted font-medium bg-bg-secondary/80 px-3 py-1 rounded-md inline-block border border-border-subtle/50">
                  Scope: 39 Practicians · Machine Learning Benchmarks
                </div>
              </div>

              {/*  Collapsible Bullet Points (Only UL collapses smoothly)  */}
              <div className="exp-bullets grid transition-[grid-template-rows,opacity] duration-300 ease-in-out grid-rows-[1fr] opacity-100">
                <div className="overflow-hidden">
                  <ul className="text-sm text-text-secondary space-y-2 leading-relaxed pt-1 pb-1">
                    <li className="flex items-start gap-2.5">
                      <span className="text-accent-blue font-bold shrink-0 mt-0.5">—</span>
                      <span>Prepared datasets and Python code demonstrations for 39 practicing students.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="text-accent-blue font-bold shrink-0 mt-0.5">—</span>
                      <span>Maintained reproducible Jupyter notebooks and benchmarked machine learning model performance.</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/*  Always Visible Outcome Pill  */}
              <div className="transition-all duration-300">
                <span className="font-mono text-xs font-semibold text-accent-green bg-accent-green/10 border border-accent-green/20 px-3.5 py-1.5 rounded-md inline-flex items-center gap-1.5">
                  <span>✦ Outcome:</span> ~30% reduction in student troubleshooting queries
                </span>
              </div>
            </div>
          </article>

          {/*  Entry 4: Module Maker  */}
          <article className="py-8 sm:py-10 grid lg:grid-cols-[260px_1fr] gap-6 lg:gap-12 items-start cursor-pointer group/card hover:bg-bg-card/30 rounded-2xl p-4 sm:p-6 transition-all border border-transparent hover:border-border-subtle/60" role="button" tabindex="0">
            <div className="space-y-1">
              <div className="font-mono text-xs font-bold text-accent-blue uppercase tracking-wider">
                May 2024 – Oct 2024
              </div>
              <div className="text-xs font-medium text-text-muted">
                Training &amp; Development
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="font-display text-xl sm:text-2xl font-bold text-text-primary tracking-tight mb-1 group-hover/card:text-accent-blue transition-colors">
                    Module Maker
                  </h3>
                  <div className="text-sm font-semibold text-accent-blue">
                    BKPSDM Kabupaten Malang
                  </div>
                </div>
                <button type="button" className="exp-toggle-btn shrink-0 px-3 py-1.5 rounded-lg bg-bg-secondary hover:bg-bg-card border border-border-subtle text-text-muted group-hover/card:text-accent-blue transition-all flex items-center gap-2 focus-visible:outline-none" aria-expanded="true" aria-label="Toggle details">
                  <span className="font-mono text-xs hidden sm:inline toggle-text">Hide Details</span>
                  <svg className="w-4 h-4 transition-transform duration-300 transform rotate-180 chevron-icon" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"></path>
                  </svg>
                </button>
              </div>

              {/*  Scope Tag  */}
              <div>
                <div className="font-mono text-xs text-text-muted font-medium bg-bg-secondary/80 px-3 py-1 rounded-md inline-block border border-border-subtle/50">
                  Scope: 10+ Modules · 20+ Staff Trained
                </div>
              </div>

              {/*  Collapsible Bullet Points (Only UL collapses smoothly)  */}
              <div className="exp-bullets grid transition-[grid-template-rows,opacity] duration-300 ease-in-out grid-rows-[1fr] opacity-100">
                <div className="overflow-hidden">
                  <ul className="text-sm text-text-secondary space-y-2 leading-relaxed pt-1 pb-1">
                    <li className="flex items-start gap-2.5">
                      <span className="text-accent-blue font-bold shrink-0 mt-0.5">—</span>
                      <span>Developed 10+ application modules with structured user guides and documentation.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="text-accent-blue font-bold shrink-0 mt-0.5">—</span>
                      <span>Delivered hands-on training sessions and application simulations for government staff.</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/*  Always Visible Impact Pill  */}
              <div className="transition-all duration-300">
                <span className="font-mono text-xs font-semibold text-accent-green bg-accent-green/10 border border-accent-green/20 px-3.5 py-1.5 rounded-md inline-flex items-center gap-1.5">
                  <span>✦ Impact:</span> 20+ employees trained · 95% module completion rate
                </span>
              </div>
            </div>
          </article>

        </div>

      </div>
    </section>
  );
};

export default Experience;
