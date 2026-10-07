import React from 'react';

const Projects = ({ data }) => {
  return (
    <section className="py-24 bg-bg-secondary" id="projects">
      <div className="max-w-7xl mx-auto px-6">
        <div className="fade-in mb-10">
          <div className="font-display text-xs font-semibold tracking-[3px] uppercase text-accent-blue mb-2 flex items-center gap-2">
            <span className="w-6 h-0.5 bg-gradient-to-r from-accent-blue to-accent-violet rounded-full"></span>
            Projects
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-text-primary mb-3">Featured Work</h2>
          <p className="text-text-secondary text-base max-w-xl">
            Selected projects spanning AI research, computer vision, NLP, and intelligent systems.
          </p>
        </div>

        {/*  Filter Bar  */}
        <div className="fade-in flex flex-wrap gap-2.5 mb-10" role="tablist" aria-label="Project Categories">
          <button className="filter-btn active px-5 py-2 rounded-full text-xs font-medium border border-accent-blue bg-accent-blue/10 text-text-primary transition-all cursor-pointer focus-visible:ring-2 focus-visible:ring-accent-blue" data-filter="all" role="tab" aria-selected="true">All</button>
          <button className="filter-btn px-5 py-2 rounded-full text-xs font-medium border border-border-subtle text-text-secondary hover:text-text-primary hover:border-accent-blue/50 transition-all cursor-pointer focus-visible:ring-2 focus-visible:ring-accent-blue" data-filter="research" role="tab" aria-selected="false">AI Research</button>
          <button className="filter-btn px-5 py-2 rounded-full text-xs font-medium border border-border-subtle text-text-secondary hover:text-text-primary hover:border-accent-blue/50 transition-all cursor-pointer focus-visible:ring-2 focus-visible:ring-accent-blue" data-filter="cv" role="tab" aria-selected="false">Computer Vision</button>
          <button className="filter-btn px-5 py-2 rounded-full text-xs font-medium border border-border-subtle text-text-secondary hover:text-text-primary hover:border-accent-blue/50 transition-all cursor-pointer focus-visible:ring-2 focus-visible:ring-accent-blue" data-filter="nlp" role="tab" aria-selected="false">NLP</button>
          <button className="filter-btn px-5 py-2 rounded-full text-xs font-medium border border-border-subtle text-text-secondary hover:text-text-primary hover:border-accent-blue/50 transition-all cursor-pointer focus-visible:ring-2 focus-visible:ring-accent-blue" data-filter="iot" role="tab" aria-selected="false">IoT</button>
        </div>

        {/*  Projects Grid  */}
        <div className="grid md:grid-cols-2 gap-6">

          {/*  Project 1: Featured Main (Thesis)  */}
          <div className="project-card featured-main fade-in md:col-span-2 bg-gradient-to-br from-bg-card to-bg-card/90 border border-accent-blue/30 rounded-2xl p-6 sm:p-8 hover:border-accent-blue/60 transition-all duration-300 group" data-category="research">
            <div className="grid lg:grid-cols-2 gap-8 items-start">
              <div>
                <div className="font-mono text-xs font-semibold uppercase tracking-wider text-accent-violet mb-2">Undergraduate Thesis</div>
                <h3 className="font-display text-xl sm:text-2xl font-semibold text-text-primary mb-3 leading-snug group-hover:text-accent-blue transition-colors">
                  Latent EEG Representation Learning Using GMM-HMM for Stress Pattern Analysis
                </h3>
                <p className="text-text-secondary text-sm leading-relaxed mb-6">
                  Analyzed latent structure and temporal dynamics of EEG signals using GMM-HMM to study probabilistic representations of patterns associated with stress-inducing activities from 50 participants.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="font-mono text-xs px-3 py-1 rounded-full bg-accent-blue/10 text-accent-blue border border-accent-blue/20">AI Research</span>
                  <span className="font-mono text-xs px-3 py-1 rounded-full bg-accent-blue/10 text-accent-blue border border-accent-blue/20">EEG Signal Processing</span>
                  <span className="font-mono text-xs px-3 py-1 rounded-full bg-accent-blue/10 text-accent-blue border border-accent-blue/20">GMM-HMM</span>
                  <span className="font-mono text-xs px-3 py-1 rounded-full bg-accent-blue/10 text-accent-blue border border-accent-blue/20">Probabilistic Modeling</span>
                </div>
              </div>
              <div className="bg-bg-primary/50 border border-border-subtle rounded-xl p-5 space-y-2.5 text-xs text-text-secondary">
                <div className="flex justify-between border-b border-border-subtle pb-2">
                  <span className="text-text-muted">Period:</span>
                  <span className="text-text-primary font-medium">Aug 2025 – Jul 2026</span>
                </div>
                <div className="flex justify-between border-b border-border-subtle pb-2">
                  <span className="text-text-muted">Role:</span>
                  <span className="text-text-primary font-medium">AI Researcher</span>
                </div>
                <div className="flex justify-between border-b border-border-subtle pb-2">
                  <span className="text-text-muted">Best BIC:</span>
                  <span className="font-mono font-semibold text-accent-green">-20.17M (40 Hz)</span>
                </div>
                <div className="flex justify-between border-b border-border-subtle pb-2">
                  <span className="text-text-muted">Silhouette Score:</span>
                  <span className="font-mono font-semibold text-accent-green">0.3601 (20 Hz)</span>
                </div>
                <div className="flex justify-between border-b border-border-subtle pb-2">
                  <span className="text-text-muted">Validation:</span>
                  <span className="text-text-primary font-medium">Random Forest, SVM, XGBoost</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-text-muted">Tech Stack:</span>
                  <span className="text-text-primary font-medium">Python, NumPy, SciPy, Scikit-learn</span>
                </div>
              </div>
            </div>
          </div>

          {/*  Project 2: Jatim Park  */}
          <div className="project-card fade-in bg-bg-card border border-border-subtle rounded-2xl p-6 sm:p-7 hover:border-accent-blue/40 transition-all duration-300 flex flex-col justify-between" data-category="cv">
            <div>
              <div className="font-mono text-xs font-semibold uppercase tracking-wider text-accent-violet mb-2">Research Project</div>
              <h3 className="font-display text-lg font-semibold text-text-primary mb-2.5 leading-snug">
                Real-Time Crowd Counting Using YOLOv8 for Jatim Park
              </h3>
              <p className="text-text-secondary text-xs sm:text-sm leading-relaxed mb-4">
                Real-time crowd detection and counting system for estimating visitor density from surveillance video streams.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="font-mono text-xs px-3 py-1 rounded-full bg-accent-cyan/10 text-accent-cyan border border-accent-cyan/20">Computer Vision</span>
                <span className="font-mono text-xs px-3 py-1 rounded-full bg-accent-cyan/10 text-accent-cyan border border-accent-cyan/20">YOLOv8</span>
                <span className="font-mono text-xs px-3 py-1 rounded-full bg-accent-cyan/10 text-accent-cyan border border-accent-cyan/20">Object Detection</span>
              </div>
            </div>
            <div className="flex items-center justify-between pt-4 border-t border-border-subtle text-xs">
              <span className="text-text-muted">Aug 2025 – Jun 2026</span>
              <span className="font-mono font-semibold text-accent-green">Real-time Detection</span>
            </div>
          </div>

          {/*  Project 3: PLTU Paiton  */}
          <div className="project-card fade-in bg-bg-card border border-border-subtle rounded-2xl p-6 sm:p-7 hover:border-accent-blue/40 transition-all duration-300 flex flex-col justify-between" data-category="cv">
            <div>
              <div className="font-mono text-xs font-semibold uppercase tracking-wider text-accent-violet mb-2">Research Project</div>
              <h3 className="font-display text-lg font-semibold text-text-primary mb-2.5 leading-snug">
                Operator Fatigue Detection Using Computer Vision for PLTU Paiton
              </h3>
              <p className="text-text-secondary text-xs sm:text-sm leading-relaxed mb-4">
                Automated CV system to identify visual indicators of operator fatigue and drowsiness in industrial environments.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="font-mono text-xs px-3 py-1 rounded-full bg-accent-cyan/10 text-accent-cyan border border-accent-cyan/20">Computer Vision</span>
                <span className="font-mono text-xs px-3 py-1 rounded-full bg-accent-cyan/10 text-accent-cyan border border-accent-cyan/20">Deep Learning</span>
                <span className="font-mono text-xs px-3 py-1 rounded-full bg-accent-blue/10 text-accent-blue border border-accent-blue/20">Industrial AI</span>
              </div>
            </div>
            <div className="flex items-center justify-between pt-4 border-t border-border-subtle text-xs">
              <span className="text-text-muted">Jun 2026 · Occupational Safety</span>
              <span className="font-mono font-semibold text-accent-green">Industrial Monitoring</span>
            </div>
          </div>

          {/*  Project 4: ScanCV  */}
          <div className="project-card fade-in bg-bg-card border border-border-subtle rounded-2xl p-6 sm:p-7 hover:border-accent-blue/40 transition-all duration-300 flex flex-col justify-between" data-category="nlp">
            <div>
              <div className="font-mono text-xs font-semibold uppercase tracking-wider text-accent-violet mb-2">Capstone Project</div>
              <h3 className="font-display text-lg font-semibold text-text-primary mb-2.5 leading-snug">
                ScanCV: Web-Based Job Recommendation System
              </h3>
              <p className="text-text-secondary text-xs sm:text-sm leading-relaxed mb-4">
                Job recommendation platform matching seekers with positions based on CV information using BAAI General Embedding.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="font-mono text-xs px-3 py-1 rounded-full bg-accent-green/10 text-accent-green border border-accent-green/20">NLP</span>
                <span className="font-mono text-xs px-3 py-1 rounded-full bg-accent-green/10 text-accent-green border border-accent-green/20">Semantic Matching</span>
                <span className="font-mono text-xs px-3 py-1 rounded-full bg-accent-blue/10 text-accent-blue border border-accent-blue/20">Machine Learning</span>
              </div>
            </div>
            <div className="flex items-center justify-between pt-4 border-t border-border-subtle text-xs">
              <span className="text-text-muted">Feb – Jun 2025 · 70+ users</span>
              <span className="font-mono font-semibold text-accent-green">84% Accuracy</span>
            </div>
          </div>

          {/*  Project 5: IoT IEEE  */}
          <div className="project-card fade-in bg-bg-card border border-border-subtle rounded-2xl p-6 sm:p-7 hover:border-accent-blue/40 transition-all duration-300 flex flex-col justify-between" data-category="iot">
            <div>
              <div className="font-mono text-xs font-semibold uppercase tracking-wider text-accent-amber mb-2">Competition Project · 🥇 1st Place</div>
              <h3 className="font-display text-lg font-semibold text-text-primary mb-2.5 leading-snug">
                IoT-Based Tobacco Dust Control System with Personal Safety Tags
              </h3>
              <p className="text-text-secondary text-xs sm:text-sm leading-relaxed mb-4">
                IoT monitoring and warning system for occupational exposure to tobacco dust using Neuro-Fuzzy inference.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="font-mono text-xs px-3 py-1 rounded-full bg-accent-amber/10 text-accent-amber border border-accent-amber/20">Industrial IoT</span>
                <span className="font-mono text-xs px-3 py-1 rounded-full bg-accent-amber/10 text-accent-amber border border-accent-amber/20">Edge Computing</span>
                <span className="font-mono text-xs px-3 py-1 rounded-full bg-accent-blue/10 text-accent-blue border border-accent-blue/20">Neuro-Fuzzy</span>
              </div>
            </div>
            <div className="flex items-center justify-between pt-4 border-t border-border-subtle text-xs">
              <span className="text-text-muted">IEEE FEST — UB</span>
              <span className="font-mono font-semibold text-accent-green">1st Place + Best Poster</span>
            </div>
          </div>

          {/*  Project 6: EEG Pseudo-Labeling  */}
          <div className="project-card fade-in bg-bg-card border border-border-subtle rounded-2xl p-6 sm:p-7 hover:border-accent-blue/40 transition-all duration-300 flex flex-col justify-between" data-category="research">
            <div>
              <div className="font-mono text-xs font-semibold uppercase tracking-wider text-accent-violet mb-2">Research Internship</div>
              <h3 className="font-display text-lg font-semibold text-text-primary mb-2.5 leading-snug">
                Pseudo-Labeling of Prefrontal Cortex EEG Signals
              </h3>
              <p className="text-text-secondary text-xs sm:text-sm leading-relaxed mb-4">
                Clustering-to-classification pipeline for pseudo-labeling EEG signal representations using K-Means and GMM.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="font-mono text-xs px-3 py-1 rounded-full bg-accent-blue/10 text-accent-blue border border-accent-blue/20">Semi-Supervised</span>
                <span className="font-mono text-xs px-3 py-1 rounded-full bg-accent-blue/10 text-accent-blue border border-accent-blue/20">EEG</span>
                <span className="font-mono text-xs px-3 py-1 rounded-full bg-accent-blue/10 text-accent-blue border border-accent-blue/20">K-Means</span>
              </div>
            </div>
            <div className="flex items-center justify-between pt-4 border-t border-border-subtle text-xs">
              <span className="text-text-muted">Feb – Jun 2025</span>
              <span className="font-mono font-semibold text-accent-green">97.18% (K-Means+SVM)</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Projects;
