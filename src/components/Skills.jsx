import React from 'react';

const skillCategories = [
  {
    title: 'Machine Learning',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
      </svg>
    ),
    skills: ['Scikit-learn', 'XGBoost', 'Random Forest', 'SVM', 'Semi-Supervised Learning', 'K-Means', 'Feature Engineering']
  },
  {
    title: 'Deep Learning',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="3"></circle>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 2v3m0 14v3M2 12h3m14 0h3m-3.5-6.5l-2.1 2.1m-8.8 8.8l-2.1 2.1m0-13l2.1 2.1m8.8 8.8l2.1 2.1"></path>
      </svg>
    ),
    skills: ['PyTorch', 'Neural Networks (ANN)', 'CNN', 'RNN', 'LSTM', 'Backpropagation', 'Model Optimization']
  },
  {
    title: 'Computer Vision',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
        <circle cx="12" cy="12" r="3"></circle>
      </svg>
    ),
    skills: ['YOLOv8', 'OpenCV', 'MediaPipe', 'Object Detection', 'Crowd Counting', 'Facial Landmarks (EAR / MAR)']
  },
  {
    title: 'Signal Processing',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2 12h3l3-9 4 18 3-12 2 3h4"></path>
      </svg>
    ),
    skills: ['EEG Signal Processing', 'Welch PSD', 'Bandpower Spectral Analysis', 'GMM-HMM', 'MNE-Python', 'SciPy Signal']
  },
  {
    title: 'NLP, LLMs & Generative AI',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 9h8M8 13h5"></path>
      </svg>
    ),
    skills: ['Large Language Models (LLM)', 'RAG Pipelines', 'BAAI Dense Embeddings', 'Vector Search', 'Prompt Engineering', 'Semantic Matching']
  },
  {
    title: 'Engineering & Cloud',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <polyline points="16 18 22 12 16 6"></polyline>
        <polyline points="8 6 2 12 8 18"></polyline>
      </svg>
    ),
    skills: ['Python', 'FastAPI', 'Docker', 'Git & GitHub', 'Linux Shell', 'Alibaba Cloud', 'ONNX Runtime', 'Streamlit']
  }
];

const Skills = ({ data }) => {
  return (
    <section className="py-24" id="skills">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="fade-in mb-14 max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-accent-blue text-xs font-semibold mb-3">
            Core Competencies
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-text-primary tracking-tight mb-2">
            Technical Skills
          </h2>
          <p className="text-text-secondary text-base sm:text-lg leading-relaxed">
            Methodologies, frameworks, and tools across AI research, engineering, and deployment.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="fade-in grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((cat, idx) => (
            <div
              key={idx}
              className="bg-bg-card border border-border-subtle rounded-2xl p-6 sm:p-7 shadow-xs hover:border-accent-blue/40 hover:shadow-lg hover:shadow-blue-500/5 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-blue-500/10 text-accent-blue flex items-center justify-center mb-5">
                  {cat.icon}
                </div>
                <h3 className="font-display text-lg font-bold text-text-primary mb-4">
                  {cat.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((s, sIdx) => (
                    <span
                      key={sIdx}
                      className="text-xs px-2.5 py-1 rounded-lg bg-bg-secondary text-text-secondary border border-border-subtle font-medium hover:text-text-primary hover:border-accent-blue/40 transition-colors"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;
