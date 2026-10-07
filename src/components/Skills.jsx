import React from 'react';

const Skills = ({ data }) => {
  return (
    <section className="py-24" id="skills">
      <div className="max-w-7xl mx-auto px-6">
        <div className="fade-in mb-12">
          <div className="font-display text-xs font-semibold tracking-[3px] uppercase text-accent-blue mb-2 flex items-center gap-2">
            <span className="w-6 h-0.5 bg-gradient-to-r from-accent-blue to-accent-violet rounded-full"></span>
            Skills
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-text-primary mb-2">Technical Toolkit</h2>
          <p className="text-text-secondary text-base">Core competencies across AI research, engineering, and development.</p>
        </div>

        <div className="skills-grid fade-in grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

          {/*  ML  */}
          <div className="skill-group bg-bg-card/70 border border-border-subtle rounded-2xl p-6 hover:border-accent-blue/40 transition-all duration-300">
            <div className="w-10 h-10 rounded-lg bg-accent-blue/10 border border-accent-blue/20 text-accent-blue flex items-center justify-center mb-4">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
              </svg>
            </div>
            <h3 className="font-display text-base font-semibold text-text-primary mb-3">Machine Learning</h3>
            <div className="flex flex-wrap gap-2">
              <span className="skill-tag font-mono text-xs px-2.5 py-1 rounded bg-white/5 border border-border-subtle text-text-secondary hover:border-accent-blue/30 hover:text-accent-blue transition-colors">Scikit-learn</span>
              <span className="skill-tag font-mono text-xs px-2.5 py-1 rounded bg-white/5 border border-border-subtle text-text-secondary hover:border-accent-blue/30 hover:text-accent-blue transition-colors">XGBoost</span>
              <span className="skill-tag font-mono text-xs px-2.5 py-1 rounded bg-white/5 border border-border-subtle text-text-secondary hover:border-accent-blue/30 hover:text-accent-blue transition-colors">Random Forest</span>
              <span className="skill-tag font-mono text-xs px-2.5 py-1 rounded bg-white/5 border border-border-subtle text-text-secondary hover:border-accent-blue/30 hover:text-accent-blue transition-colors">SVM</span>
              <span className="skill-tag font-mono text-xs px-2.5 py-1 rounded bg-white/5 border border-border-subtle text-text-secondary hover:border-accent-blue/30 hover:text-accent-blue transition-colors">Semi-Supervised Learning</span>
            </div>
          </div>

          {/*  DL  */}
          <div className="skill-group bg-bg-card/70 border border-border-subtle rounded-2xl p-6 hover:border-accent-blue/40 transition-all duration-300">
            <div className="w-10 h-10 rounded-lg bg-accent-blue/10 border border-accent-blue/20 text-accent-blue flex items-center justify-center mb-4">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="3"></circle>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 2v3m0 14v3M2 12h3m14 0h3m-3.5-6.5l-2.1 2.1m-8.8 8.8l-2.1 2.1m0-13l2.1 2.1m8.8 8.8l2.1 2.1"></path>
              </svg>
            </div>
            <h3 className="font-display text-base font-semibold text-text-primary mb-3">Deep Learning</h3>
            <div className="flex flex-wrap gap-2">
              <span className="skill-tag font-mono text-xs px-2.5 py-1 rounded bg-white/5 border border-border-subtle text-text-secondary hover:border-accent-blue/30 hover:text-accent-blue transition-colors">PyTorch</span>
              <span className="skill-tag font-mono text-xs px-2.5 py-1 rounded bg-white/5 border border-border-subtle text-text-secondary hover:border-accent-blue/30 hover:text-accent-blue transition-colors">ANN</span>
              <span className="skill-tag font-mono text-xs px-2.5 py-1 rounded bg-white/5 border border-border-subtle text-text-secondary hover:border-accent-blue/30 hover:text-accent-blue transition-colors">CNN</span>
              <span className="skill-tag font-mono text-xs px-2.5 py-1 rounded bg-white/5 border border-border-subtle text-text-secondary hover:border-accent-blue/30 hover:text-accent-blue transition-colors">RNN</span>
              <span className="skill-tag font-mono text-xs px-2.5 py-1 rounded bg-white/5 border border-border-subtle text-text-secondary hover:border-accent-blue/30 hover:text-accent-blue transition-colors">LSTM</span>
            </div>
          </div>

          {/*  CV  */}
          <div className="skill-group bg-bg-card/70 border border-border-subtle rounded-2xl p-6 hover:border-accent-blue/40 transition-all duration-300">
            <div className="w-10 h-10 rounded-lg bg-accent-blue/10 border border-accent-blue/20 text-accent-blue flex items-center justify-center mb-4">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                <circle cx="12" cy="12" r="3"></circle>
              </svg>
            </div>
            <h3 className="font-display text-base font-semibold text-text-primary mb-3">Computer Vision</h3>
            <div className="flex flex-wrap gap-2">
              <span className="skill-tag font-mono text-xs px-2.5 py-1 rounded bg-white/5 border border-border-subtle text-text-secondary hover:border-accent-blue/30 hover:text-accent-blue transition-colors">YOLO / YOLOv8</span>
              <span className="skill-tag font-mono text-xs px-2.5 py-1 rounded bg-white/5 border border-border-subtle text-text-secondary hover:border-accent-blue/30 hover:text-accent-blue transition-colors">OpenCV</span>
              <span className="skill-tag font-mono text-xs px-2.5 py-1 rounded bg-white/5 border border-border-subtle text-text-secondary hover:border-accent-blue/30 hover:text-accent-blue transition-colors">Object Detection</span>
              <span className="skill-tag font-mono text-xs px-2.5 py-1 rounded bg-white/5 border border-border-subtle text-text-secondary hover:border-accent-blue/30 hover:text-accent-blue transition-colors">Crowd Counting</span>
              <span className="skill-tag font-mono text-xs px-2.5 py-1 rounded bg-white/5 border border-border-subtle text-text-secondary hover:border-accent-blue/30 hover:text-accent-blue transition-colors">Facial Landmark</span>
            </div>
          </div>

          {/*  Signal Processing  */}
          <div className="skill-group bg-bg-card/70 border border-border-subtle rounded-2xl p-6 hover:border-accent-blue/40 transition-all duration-300">
            <div className="w-10 h-10 rounded-lg bg-accent-blue/10 border border-accent-blue/20 text-accent-blue flex items-center justify-center mb-4">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2 12h3l3-9 4 18 3-12 2 3h4"></path>
              </svg>
            </div>
            <h3 className="font-display text-base font-semibold text-text-primary mb-3">Signal Processing</h3>
            <div className="flex flex-wrap gap-2">
              <span className="skill-tag font-mono text-xs px-2.5 py-1 rounded bg-white/5 border border-border-subtle text-text-secondary hover:border-accent-blue/30 hover:text-accent-blue transition-colors">EEG Processing</span>
              <span className="skill-tag font-mono text-xs px-2.5 py-1 rounded bg-white/5 border border-border-subtle text-text-secondary hover:border-accent-blue/30 hover:text-accent-blue transition-colors">Welch PSD</span>
              <span className="skill-tag font-mono text-xs px-2.5 py-1 rounded bg-white/5 border border-border-subtle text-text-secondary hover:border-accent-blue/30 hover:text-accent-blue transition-colors">Bandpower</span>
              <span className="skill-tag font-mono text-xs px-2.5 py-1 rounded bg-white/5 border border-border-subtle text-text-secondary hover:border-accent-blue/30 hover:text-accent-blue transition-colors">GMM-HMM</span>
              <span className="skill-tag font-mono text-xs px-2.5 py-1 rounded bg-white/5 border border-border-subtle text-text-secondary hover:border-accent-blue/30 hover:text-accent-blue transition-colors">Temporal Modeling</span>
            </div>
          </div>

          {/*  NLP  */}
          <div className="skill-group bg-bg-card/70 border border-border-subtle rounded-2xl p-6 hover:border-accent-blue/40 transition-all duration-300">
            <div className="w-10 h-10 rounded-lg bg-accent-blue/10 border border-accent-blue/20 text-accent-blue flex items-center justify-center mb-4">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                <path strokeLinecap="round" strokeLinejoin="round" d="M8 9h8M8 13h5"></path>
              </svg>
            </div>
            <h3 className="font-display text-base font-semibold text-text-primary mb-3">NLP &amp; Generative AI</h3>
            <div className="flex flex-wrap gap-2">
              <span className="skill-tag font-mono text-xs px-2.5 py-1 rounded bg-white/5 border border-border-subtle text-text-secondary hover:border-accent-blue/30 hover:text-accent-blue transition-colors">Text Mining</span>
              <span className="skill-tag font-mono text-xs px-2.5 py-1 rounded bg-white/5 border border-border-subtle text-text-secondary hover:border-accent-blue/30 hover:text-accent-blue transition-colors">Sentiment Analysis</span>
              <span className="skill-tag font-mono text-xs px-2.5 py-1 rounded bg-white/5 border border-border-subtle text-text-secondary hover:border-accent-blue/30 hover:text-accent-blue transition-colors">Semantic Matching</span>
              <span className="skill-tag font-mono text-xs px-2.5 py-1 rounded bg-white/5 border border-border-subtle text-text-secondary hover:border-accent-blue/30 hover:text-accent-blue transition-colors">LLMs</span>
              <span className="skill-tag font-mono text-xs px-2.5 py-1 rounded bg-white/5 border border-border-subtle text-text-secondary hover:border-accent-blue/30 hover:text-accent-blue transition-colors">RAG</span>
              <span className="skill-tag font-mono text-xs px-2.5 py-1 rounded bg-white/5 border border-border-subtle text-text-secondary hover:border-accent-blue/30 hover:text-accent-blue transition-colors">AI Agents</span>
              <span className="skill-tag font-mono text-xs px-2.5 py-1 rounded bg-white/5 border border-border-subtle text-text-secondary hover:border-accent-blue/30 hover:text-accent-blue transition-colors">Prompt Engineering</span>
            </div>
          </div>

          {/*  Dev & Cloud  */}
          <div className="skill-group bg-bg-card/70 border border-border-subtle rounded-2xl p-6 hover:border-accent-blue/40 transition-all duration-300">
            <div className="w-10 h-10 rounded-lg bg-accent-blue/10 border border-accent-blue/20 text-accent-blue flex items-center justify-center mb-4">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <polyline points="16 18 22 12 16 6"></polyline>
                <polyline points="8 6 2 12 8 18"></polyline>
              </svg>
            </div>
            <h3 className="font-display text-base font-semibold text-text-primary mb-3">Development &amp; Cloud</h3>
            <div className="flex flex-wrap gap-2">
              <span className="skill-tag font-mono text-xs px-2.5 py-1 rounded bg-white/5 border border-border-subtle text-text-secondary hover:border-accent-blue/30 hover:text-accent-blue transition-colors">Python</span>
              <span className="skill-tag font-mono text-xs px-2.5 py-1 rounded bg-white/5 border border-border-subtle text-text-secondary hover:border-accent-blue/30 hover:text-accent-blue transition-colors">FastAPI</span>
              <span className="skill-tag font-mono text-xs px-2.5 py-1 rounded bg-white/5 border border-border-subtle text-text-secondary hover:border-accent-blue/30 hover:text-accent-blue transition-colors">Docker</span>
              <span className="skill-tag font-mono text-xs px-2.5 py-1 rounded bg-white/5 border border-border-subtle text-text-secondary hover:border-accent-blue/30 hover:text-accent-blue transition-colors">Git</span>
              <span className="skill-tag font-mono text-xs px-2.5 py-1 rounded bg-white/5 border border-border-subtle text-text-secondary hover:border-accent-blue/30 hover:text-accent-blue transition-colors">Linux</span>
              <span className="skill-tag font-mono text-xs px-2.5 py-1 rounded bg-white/5 border border-border-subtle text-text-secondary hover:border-accent-blue/30 hover:text-accent-blue transition-colors">Alibaba Cloud</span>
              <span className="skill-tag font-mono text-xs px-2.5 py-1 rounded bg-white/5 border border-border-subtle text-text-secondary hover:border-accent-blue/30 hover:text-accent-blue transition-colors">Google Colab</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Skills;
