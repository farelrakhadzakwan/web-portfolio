import React, { useState } from 'react';

const pipelineSteps = [
  {
    step: '01',
    phase: 'Phase 1',
    title: 'Problem Definition',
    summary: 'Scoping domain challenges, formulating research hypotheses, and defining target metrics.',
    detail: 'Scoping domain challenges, formulating research hypotheses, and defining target metrics (Accuracy, BIC, Silhouette).',
    tools: 'Hypothesis Testing · Literature Review · Metric Definition',
    caseStudy: 'Applied across Operator Fatigue Detection (PLTU Paiton), EEG Representation Learning, and Crowd Monitoring'
  },
  {
    step: '02',
    phase: 'Data',
    title: 'Dataset Preparation',
    summary: 'Collecting & processing multi-subject EEG (50 participants) and video surveillance streams.',
    detail: 'Collecting & processing multi-subject EEG (50 participants) and video surveillance datasets.',
    tools: 'EEG Electrode Mapping · OpenCV Streams · Data Annotation',
    caseStudy: 'Structured 50-participant prefrontal cortex EEG datasets & Jatim Park CCTV video feeds'
  },
  {
    step: '03',
    phase: 'Signals',
    title: 'Data Processing',
    summary: 'Signal filtering, Welch PSD extraction, bandpower calculations, and video frame preprocessing.',
    detail: 'Signal filtering, Welch PSD extraction, bandpower calculations, and video frame preprocessing.',
    tools: 'SciPy · MNE-Python · NumPy · Filter Pipelines',
    caseStudy: 'Notch filtering (50Hz), bandpass (0.5–40Hz), Welch PSD power spectral density calculation'
  },
  {
    step: '04',
    phase: 'Analysis',
    title: 'Exploratory Analysis',
    summary: 'Latent feature structure analysis, temporal dynamics inspection, and outlier detection.',
    detail: 'Latent feature structure analysis, temporal dynamics inspection, and outlier detection.',
    tools: 'Matplotlib · Seaborn · PCA · Latent Space Inspection',
    caseStudy: 'Principal Component Analysis (PCA) & temporal bandpower distribution plotting'
  },
  {
    step: '05',
    phase: 'Features',
    title: 'Feature Engineering',
    summary: 'Pseudo-labeling prefrontal cortex signals, feature scaling, and latent state space design.',
    detail: 'Pseudo-labeling prefrontal cortex signals, feature scaling, and latent state space design.',
    tools: 'K-Means · GMM · Silhouette Scoring · Standard Scaling',
    caseStudy: 'Pseudo-labeling pipeline for unsupervised EEG signals yielding 0.3601 Silhouette score'
  },
  {
    step: '06',
    phase: 'Modeling',
    title: 'Model Development',
    summary: 'Designing GMM-HMM models, YOLOv8 object counters, and semantic embedding pipelines.',
    detail: 'Designing GMM-HMM models, YOLOv8 object counters, and BAAI semantic embedding pipelines.',
    tools: 'PyTorch · Scikit-learn · YOLOv8 · BAAI/bge-small',
    caseStudy: 'Implemented YOLOv8 crowd counter, Neuro-Fuzzy dust controller, and BAAI embeddings'
  },
  {
    step: '07',
    phase: 'Tuning',
    title: 'Experimentation',
    summary: 'Hyperparameter tuning, cross-validation, and multi-class model benchmarking.',
    detail: 'Hyperparameter tuning, cross-validation, and multi-class model benchmarking.',
    tools: 'Random Forest · SVM · XGBoost · Stratified K-Fold',
    caseStudy: 'Benchmarked Decision Trees, KNN, Random Forest, and SVM across signal classes'
  },
  {
    step: '08',
    phase: 'Metrics',
    title: 'Evaluation',
    summary: 'Achieved 97.18% EEG accuracy, 0.3601 Silhouette score, and 84% recommendation accuracy.',
    detail: 'Achieved 97.18% EEG accuracy, 0.3601 Silhouette score, and 84% recommendation accuracy.',
    tools: 'ROC AUC · Confusion Matrix · BIC Score · F1 Metric',
    caseStudy: '97.18% EEG pseudo-labeling accuracy (K-Means + SVM) & 84% semantic match rate'
  },
  {
    step: '09',
    phase: 'Insight',
    title: 'Interpretation',
    summary: 'Translating probabilistic representations into actionable occupational stress & fatigue alerts.',
    detail: 'Translating probabilistic representations into actionable occupational stress & fatigue alerts.',
    tools: 'Domain Knowledge · HAKI Registration · Executive Alerts',
    caseStudy: 'Registered Intellectual Property (HAKI) for fatigue & stress monitoring representations'
  },
  {
    step: '10',
    phase: 'Production',
    title: 'Application / Deployment',
    summary: 'Packaging models into real-time FastAPI services, Docker containers, and Web APIs.',
    detail: 'Packaging models into real-time FastAPI services, Docker containers, and Web APIs.',
    tools: 'FastAPI · Docker · ONNX Runtime · Streamlit',
    caseStudy: 'Production-ready REST APIs, containerized inferencing services & real-time UI dashboards'
  }
];

const Methodology = ({ data }) => {
  const [activeStep, setActiveStep] = useState(0);
  const current = pipelineSteps[activeStep];

  return (
    <section className="py-24 bg-bg-secondary/40 border-y border-border-subtle overflow-hidden" id="methodology">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="fade-in mb-14 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-accent-blue text-xs font-semibold mb-3">
            Systematic Methodology
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-text-primary tracking-tight mb-4">
            Research &amp; Engineering Pipeline
          </h2>
          <p className="text-text-secondary text-base sm:text-lg leading-relaxed">
            How I approach AI research and engineering — bridging domain hypothesis formulation, signal representation design, model benchmarking, and production deployment.
          </p>
        </div>

        {/* Balanced Editorial Methodology Layout */}
        <div className="fade-in grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">

          {/* Left Column: 10-Step Progression */}
          <div className="lg:col-span-7 relative border-l border-border-subtle/80 pl-3 sm:pl-5 space-y-2.5" role="tablist" aria-label="Research Pipeline Steps">
            {pipelineSteps.map((item, idx) => {
              const isActive = activeStep === idx;
              return (
                <div
                  key={item.step}
                  onClick={() => setActiveStep(idx)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      setActiveStep(idx);
                    }
                  }}
                  role="tab"
                  tabIndex={0}
                  aria-selected={isActive}
                  className={`p-3.5 sm:p-4 rounded-xl border-l-2 transition-all cursor-pointer group ${
                    isActive
                      ? 'border-accent-blue bg-accent-blue/10 dark:bg-accent-blue/15 shadow-xs'
                      : 'border-transparent hover:border-border-light hover:bg-bg-card/50'
                  }`}
                >
                  <div className="flex items-center justify-between gap-3 mb-1">
                    <div className="flex items-center gap-3">
                      <span
                        className={`font-mono text-sm font-bold shrink-0 transition-colors ${
                          isActive ? 'text-accent-blue' : 'text-text-muted group-hover:text-accent-blue'
                        }`}
                      >
                        {item.step}
                      </span>
                      <h4
                        className={`font-display text-base font-bold transition-colors ${
                          isActive ? 'text-accent-blue' : 'text-text-primary group-hover:text-accent-blue'
                        }`}
                      >
                        {item.title}
                      </h4>
                    </div>
                    <span
                      className={`font-mono text-[0.65rem] font-bold uppercase tracking-wider px-2 py-0.5 rounded ${
                        isActive
                          ? 'bg-accent-blue text-white shadow-2xs'
                          : 'bg-bg-secondary text-text-muted border border-border-subtle'
                      }`}
                    >
                      {item.phase}
                    </span>
                  </div>
                  <p className="text-xs text-text-secondary leading-relaxed pl-7">
                    {item.summary}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Right Column: Editorial Methodology Evidence Panel */}
          <div className="lg:col-span-5 lg:sticky lg:top-24 space-y-6 bg-bg-card border border-border-subtle rounded-2xl p-6 sm:p-8 shadow-sm">
            
            <div className="flex items-center justify-between gap-3 pb-4 border-b border-border-subtle">
              <span className="text-xs font-semibold px-3 py-1 bg-accent-blue/10 text-accent-blue rounded-lg border border-accent-blue/20">
                Stage {current.step} of 10
              </span>
              <span className="text-xs text-text-muted font-medium">Pipeline Focus</span>
            </div>

            <div className="space-y-3">
              <h3 className="font-display text-xl sm:text-2xl font-bold text-text-primary tracking-tight">
                {current.title}
              </h3>

              <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
                {current.detail}
              </p>
            </div>

            {/* Contextual Technical Tools & Frameworks */}
            <div className="space-y-2 pt-4 border-t border-border-subtle">
              <div className="text-xs font-semibold text-text-muted uppercase tracking-wider">
                Technical Stack &amp; Tools
              </div>
              <div className="text-xs font-medium text-text-secondary bg-bg-secondary border border-border-subtle px-3.5 py-2.5 rounded-xl leading-relaxed">
                {current.tools}
              </div>
            </div>

            {/* Contextual Engineering Case Evidence */}
            <div className="space-y-2 pt-2">
              <div className="text-xs font-semibold text-text-muted uppercase tracking-wider">
                Applied Research Case
              </div>
              <p className="text-xs text-text-primary leading-relaxed pl-3.5 border-l-2 border-accent-blue/60 bg-accent-blue/5 py-3 pr-3 rounded-r-xl font-medium">
                {current.caseStudy}
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Methodology;
