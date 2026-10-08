import React, { useState } from 'react';

const filterCategories = [
  { id: 'all', label: 'All Projects' },
  { id: 'research', label: 'AI Research' },
  { id: 'cv', label: 'Computer Vision' },
  { id: 'nlp', label: 'NLP & LLM' },
  { id: 'iot', label: 'Intelligent Systems & IoT' },
];

const projectsData = [
  {
    id: 'thesis-gmm-hmm',
    category: 'research',
    badge: 'Undergraduate Thesis',
    title: 'Latent EEG Representation Learning Using GMM-HMM for Stress Pattern Analysis',
    description: 'Analyzed latent structure and temporal dynamics of EEG signals using GMM-HMM to study probabilistic representations of patterns associated with stress-inducing activities across 50 participants.',
    tags: ['AI Research', 'EEG Signal Processing', 'GMM-HMM', 'Probabilistic Modeling', 'Python'],
    isFeatured: true,
    meta: [
      { label: 'Period', value: 'Aug 2025 – Jul 2026' },
      { label: 'Role', value: 'AI Researcher' },
      { label: 'Best BIC', value: '-20.17M (40 Hz)' },
      { label: 'Silhouette Score', value: '0.3601 (20 Hz)' },
      { label: 'Validation', value: 'Random Forest, SVM, XGBoost' },
      { label: 'Tech Stack', value: 'NumPy, SciPy, Scikit-learn, MNE' },
    ]
  },
  {
    id: 'crowd-counting-jatim-park',
    category: 'cv',
    badge: 'Applied Research Project',
    title: 'Real-Time Crowd Counting Using YOLOv8 for Jatim Park',
    description: 'Real-time crowd detection and counting system for estimating visitor density from surveillance video streams in amusement park sectors.',
    tags: ['Computer Vision', 'YOLOv8', 'Object Detection', 'OpenCV', 'PyTorch'],
    period: 'Aug 2025 – Jun 2026',
    highlight: 'Real-time Video Inference'
  },
  {
    id: 'fatigue-pltu-paiton',
    category: 'cv',
    badge: 'Industrial AI Research',
    title: 'Operator Fatigue Detection Using Computer Vision for PLTU Paiton',
    description: 'Automated alertness monitoring system analyzing facial landmarks and eyelid aspect ratios (EAR) to detect drowsiness in critical power plant operators.',
    tags: ['Computer Vision', 'Facial Landmarks', 'EAR / MAR Metrics', 'MediaPipe', 'Safety AI'],
    period: 'Jul 2025 – Dec 2025',
    highlight: 'Safety Critical Pipeline'
  },
  {
    id: 'semantic-job-recommendation',
    category: 'nlp',
    badge: 'AI Recommendation Engine',
    title: 'Semantic Job Recommendation Engine Using BAAI/bge-small-en-v1.5',
    description: 'Developed an automated resume-job matching service utilizing dense sentence transformers and cosine similarity embeddings, yielding 84% recommendation accuracy.',
    tags: ['NLP', 'Sentence Transformers', 'Vector Search', 'FastAPI', 'Dense Retrieval'],
    period: 'Jan 2026 – May 2026',
    highlight: '84% Match Accuracy'
  },
  {
    id: 'dust-suppression-neuro-fuzzy',
    category: 'iot',
    badge: 'Intelligent Control System',
    title: 'Neuro-Fuzzy Autonomous Coal Dust Suppression Controller',
    description: 'Adaptive fuzzy inference system integrated with neural network controllers to regulate industrial water spraying based on environmental sensor telemetry.',
    tags: ['Intelligent Systems', 'Neuro-Fuzzy', 'ANFIS', 'IoT Sensors', 'Industrial Automation'],
    period: 'Mar 2025 – Aug 2025',
    highlight: 'Dynamic Spray Control'
  },
  {
    id: 'eeg-sleep-stage',
    category: 'research',
    badge: 'Signal Processing Benchmark',
    title: 'Multi-Channel EEG Sleep Stage Classification & Spectral Benchmarking',
    description: 'Comparative study across machine learning algorithms classifying sleep stages (N1, N2, N3, REM) from Polysomnography electrophysiological recordings.',
    tags: ['EEG Processing', 'Bandpower Spectral Analysis', 'Random Forest', 'SVM', 'Bio-Signals'],
    period: 'Sep 2024 – Feb 2025',
    highlight: 'Multi-class Waveform Benchmark'
  }
];

const Projects = ({ data }) => {
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredProjects = projectsData.filter(p => {
    if (activeFilter === 'all') return true;
    return p.category === activeFilter;
  });

  return (
    <section className="py-24 bg-bg-secondary/40 border-y border-border-subtle" id="projects">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="fade-in mb-10 max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-accent-blue text-xs font-semibold mb-3">
            Portfolio Evidence
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-text-primary tracking-tight mb-3">
            Featured Projects
          </h2>
          <p className="text-text-secondary text-base sm:text-lg leading-relaxed">
            Selected projects spanning AI research, computer vision, natural language processing, and intelligent systems.
          </p>
        </div>

        {/* Filter Bar */}
        <div className="fade-in flex flex-wrap gap-2 sm:gap-2.5 mb-10" role="tablist" aria-label="Project Categories">
          {filterCategories.map(cat => {
            const isActive = activeFilter === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveFilter(cat.id)}
                role="tab"
                aria-selected={isActive}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-blue ${
                  isActive
                    ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md shadow-blue-500/20'
                    : 'bg-bg-card border border-border-subtle text-text-secondary hover:text-text-primary hover:border-border-light'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {filteredProjects.map(proj => {
            if (proj.isFeatured) {
              return (
                <div
                  key={proj.id}
                  className="fade-in md:col-span-2 bg-bg-card border border-border-subtle rounded-3xl p-6 sm:p-9 hover:border-accent-blue/40 shadow-sm hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-300 relative overflow-hidden"
                >
                  <div className="grid lg:grid-cols-2 gap-8 items-start">
                    <div>
                      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 text-accent-blue text-xs font-bold uppercase tracking-wider mb-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent-blue animate-pulse"></span>
                        {proj.badge}
                      </div>
                      <h3 className="font-display text-xl sm:text-2xl lg:text-3xl font-extrabold text-text-primary mb-3 leading-snug">
                        {proj.title}
                      </h3>
                      <p className="text-text-secondary text-sm sm:text-base leading-relaxed mb-6">
                        {proj.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {proj.tags.map((tag, tIdx) => (
                          <span
                            key={tIdx}
                            className="text-xs px-3 py-1 rounded-lg bg-bg-secondary text-text-secondary border border-border-subtle font-medium"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Metadata Card */}
                    <div className="bg-bg-secondary/70 border border-border-subtle rounded-2xl p-5 sm:p-6 space-y-3 text-xs sm:text-sm">
                      <div className="text-xs font-bold text-text-muted uppercase tracking-wider pb-1 border-b border-border-subtle">
                        Research Specifications
                      </div>
                      {proj.meta.map((m, mIdx) => (
                        <div key={mIdx} className="flex justify-between items-center py-1.5 border-b border-border-subtle/50 last:border-b-0">
                          <span className="text-text-muted text-xs">{m.label}</span>
                          <span className="text-text-primary font-semibold text-right">{m.value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            }

            return (
              <div
                key={proj.id}
                className="fade-in bg-bg-card border border-border-subtle rounded-2xl p-6 sm:p-7 hover:border-accent-blue/40 shadow-xs hover:shadow-md hover:-translate-y-1 transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <span className="inline-block text-[11px] font-bold text-accent-blue uppercase tracking-wider mb-2">
                    {proj.badge}
                  </span>
                  <h3 className="font-display text-lg font-bold text-text-primary mb-2.5 leading-snug">
                    {proj.title}
                  </h3>
                  <p className="text-text-secondary text-xs sm:text-sm leading-relaxed mb-5">
                    {proj.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {proj.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-[11px] px-2.5 py-1 rounded-md bg-bg-secondary text-text-secondary border border-border-subtle font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-border-subtle text-xs">
                  <span className="text-text-muted font-mono">{proj.period}</span>
                  <span className="font-bold text-accent-blue">{proj.highlight}</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Projects;
