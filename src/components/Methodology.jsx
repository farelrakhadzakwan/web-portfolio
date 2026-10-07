import React from 'react';

const Methodology = ({ data }) => {
  return (
    <section className="py-24 bg-bg-secondary/40 border-y border-border-subtle overflow-hidden" id="methodology">
      <div className="max-w-7xl mx-auto px-6">
        
        {/*  Section Header  */}
        <div className="fade-in mb-14 max-w-3xl">
          <div className="font-mono text-xs font-bold tracking-[0.2em] uppercase text-accent-blue mb-3">
            02 / METHODOLOGY
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-text-primary tracking-tight mb-4">
            Research to Engineering Pipeline
          </h2>
          <p className="text-text-secondary text-base sm:text-lg leading-relaxed">
            How I approach AI research and engineering — bridging domain hypothesis formulation, signal representation design, model benchmarking, and production deployment.
          </p>
        </div>

        {/*  Balanced Editorial Methodology Layout  */}
        <div className="fade-in grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">

          {/*  Left Column: Continuous 10-Step Progression with Structural Guide Line (58% width / col-span-7)  */}
          <div className="lg:col-span-7 relative border-l border-border-subtle/60 pl-3 sm:pl-5 space-y-2" id="pipelineSteps" role="tablist" aria-label="Research Pipeline Steps">

            {/*  Step 01  */}
            <div className="pipeline-step active p-3.5 sm:p-4 rounded-r-xl border-l-2 border-accent-blue bg-accent-blue/5 hover:bg-accent-blue/10 transition-all cursor-pointer group" role="tab" tabindex="0" aria-selected="true" data-step="01" data-title="Problem Definition" data-detail="Scoping domain challenges, formulating research hypotheses, and defining target metrics (Accuracy, BIC, Silhouette)." data-tools="Hypothesis Testing · Literature Review · Metric Definition" data-case="Applied across Operator Fatigue Detection (PLTU Paiton), EEG Representation Learning, and Crowd Monitoring">
              <div className="flex items-center justify-between gap-3 mb-1">
                <div className="flex items-center gap-3">
                  <span className="step-num font-mono text-sm font-bold text-accent-blue shrink-0">01</span>
                  <h4 className="font-display text-base font-bold text-text-primary group-hover:text-accent-blue transition-colors">Problem Definition</h4>
                </div>
                <span className="font-mono text-[0.65rem] font-bold text-accent-blue uppercase tracking-wider px-2 py-0.5 rounded bg-accent-blue/10 border border-accent-blue/20">Phase 1</span>
              </div>
              <p className="text-xs text-text-secondary leading-relaxed pl-7">Scoping domain challenges, formulating research hypotheses, and defining target metrics.</p>
            </div>

            {/*  Step 02  */}
            <div className="pipeline-step p-3.5 sm:p-4 rounded-r-xl border-l-2 border-transparent hover:border-border-light hover:bg-bg-card/40 transition-all cursor-pointer group" role="tab" tabindex="0" aria-selected="false" data-step="02" data-title="Dataset Preparation" data-detail="Collecting &amp; processing multi-subject EEG (50 participants) and video surveillance datasets." data-tools="EEG Electrode Mapping · OpenCV Streams · Data Annotation" data-case="Structured 50-participant prefrontal cortex EEG datasets &amp; Jatim Park CCTV video feeds">
              <div className="flex items-center justify-between gap-3 mb-1">
                <div className="flex items-center gap-3">
                  <span className="step-num font-mono text-sm font-bold text-text-muted shrink-0 group-hover:text-accent-blue transition-colors">02</span>
                  <h4 className="font-display text-base font-bold text-text-primary group-hover:text-accent-blue transition-colors">Dataset Preparation</h4>
                </div>
                <span className="font-mono text-[0.65rem] font-bold text-text-muted uppercase tracking-wider px-2 py-0.5 rounded bg-bg-secondary border border-border-subtle">Data</span>
              </div>
              <p className="text-xs text-text-secondary leading-relaxed pl-7">Collecting &amp; processing multi-subject EEG (50 participants) and video surveillance streams.</p>
            </div>

            {/*  Step 03  */}
            <div className="pipeline-step p-3.5 sm:p-4 rounded-r-xl border-l-2 border-transparent hover:border-border-light hover:bg-bg-card/40 transition-all cursor-pointer group" role="tab" tabindex="0" aria-selected="false" data-step="03" data-title="Data Processing" data-detail="Signal filtering, Welch PSD extraction, bandpower calculations, and video frame preprocessing." data-tools="SciPy · MNE-Python · NumPy · Filter Pipelines" data-case="Notch filtering (50Hz), bandpass (0.5–40Hz), Welch PSD power spectral density calculation">
              <div className="flex items-center justify-between gap-3 mb-1">
                <div className="flex items-center gap-3">
                  <span className="step-num font-mono text-sm font-bold text-text-muted shrink-0 group-hover:text-accent-blue transition-colors">03</span>
                  <h4 className="font-display text-base font-bold text-text-primary group-hover:text-accent-blue transition-colors">Data Processing</h4>
                </div>
                <span className="font-mono text-[0.65rem] font-bold text-text-muted uppercase tracking-wider px-2 py-0.5 rounded bg-bg-secondary border border-border-subtle">Signals</span>
              </div>
              <p className="text-xs text-text-secondary leading-relaxed pl-7">Signal filtering, Welch PSD extraction, bandpower calculations, and video frame preprocessing.</p>
            </div>

            {/*  Step 04  */}
            <div className="pipeline-step p-3.5 sm:p-4 rounded-r-xl border-l-2 border-transparent hover:border-border-light hover:bg-bg-card/40 transition-all cursor-pointer group" role="tab" tabindex="0" aria-selected="false" data-step="04" data-title="Exploratory Analysis" data-detail="Latent feature structure analysis, temporal dynamics inspection, and outlier detection." data-tools="Matplotlib · Seaborn · PCA · Latent Space Inspection" data-case="Principal Component Analysis (PCA) &amp; temporal bandpower distribution plotting">
              <div className="flex items-center justify-between gap-3 mb-1">
                <div className="flex items-center gap-3">
                  <span className="step-num font-mono text-sm font-bold text-text-muted shrink-0 group-hover:text-accent-blue transition-colors">04</span>
                  <h4 className="font-display text-base font-bold text-text-primary group-hover:text-accent-blue transition-colors">Exploratory Analysis</h4>
                </div>
                <span className="font-mono text-[0.65rem] font-bold text-text-muted uppercase tracking-wider px-2 py-0.5 rounded bg-bg-secondary border border-border-subtle">Analysis</span>
              </div>
              <p className="text-xs text-text-secondary leading-relaxed pl-7">Latent feature structure analysis, temporal dynamics inspection, and outlier detection.</p>
            </div>

            {/*  Step 05  */}
            <div className="pipeline-step p-3.5 sm:p-4 rounded-r-xl border-l-2 border-transparent hover:border-border-light hover:bg-bg-card/40 transition-all cursor-pointer group" role="tab" tabindex="0" aria-selected="false" data-step="05" data-title="Feature Engineering" data-detail="Pseudo-labeling prefrontal cortex signals, feature scaling, and latent state space design." data-tools="K-Means · GMM · Silhouette Scoring · Standard Scaling" data-case="Pseudo-labeling pipeline for unsupervised EEG signals yielding 0.3601 Silhouette score">
              <div className="flex items-center justify-between gap-3 mb-1">
                <div className="flex items-center gap-3">
                  <span className="step-num font-mono text-sm font-bold text-text-muted shrink-0 group-hover:text-accent-blue transition-colors">05</span>
                  <h4 className="font-display text-base font-bold text-text-primary group-hover:text-accent-blue transition-colors">Feature Engineering</h4>
                </div>
                <span className="font-mono text-[0.65rem] font-bold text-text-muted uppercase tracking-wider px-2 py-0.5 rounded bg-bg-secondary border border-border-subtle">Features</span>
              </div>
              <p className="text-xs text-text-secondary leading-relaxed pl-7">Pseudo-labeling prefrontal cortex signals, feature scaling, and latent state space design.</p>
            </div>

            {/*  Step 06  */}
            <div className="pipeline-step p-3.5 sm:p-4 rounded-r-xl border-l-2 border-transparent hover:border-border-light hover:bg-bg-card/40 transition-all cursor-pointer group" role="tab" tabindex="0" aria-selected="false" data-step="06" data-title="Model Development" data-detail="Designing GMM-HMM models, YOLOv8 object counters, and BAAI semantic embedding pipelines." data-tools="PyTorch · Scikit-learn · YOLOv8 · BAAI/bge-small" data-case="Implemented YOLOv8 crowd counter, Neuro-Fuzzy dust controller, and BAAI embeddings">
              <div className="flex items-center justify-between gap-3 mb-1">
                <div className="flex items-center gap-3">
                  <span className="step-num font-mono text-sm font-bold text-text-muted shrink-0 group-hover:text-accent-blue transition-colors">06</span>
                  <h4 className="font-display text-base font-bold text-text-primary group-hover:text-accent-blue transition-colors">Model Development</h4>
                </div>
                <span className="font-mono text-[0.65rem] font-bold text-text-muted uppercase tracking-wider px-2 py-0.5 rounded bg-bg-secondary border border-border-subtle">Modeling</span>
              </div>
              <p className="text-xs text-text-secondary leading-relaxed pl-7">Designing GMM-HMM models, YOLOv8 object counters, and BAAI semantic embedding pipelines.</p>
            </div>

            {/*  Step 07  */}
            <div className="pipeline-step p-3.5 sm:p-4 rounded-r-xl border-l-2 border-transparent hover:border-border-light hover:bg-bg-card/40 transition-all cursor-pointer group" role="tab" tabindex="0" aria-selected="false" data-step="07" data-title="Experimentation" data-detail="Hyperparameter tuning, cross-validation, and multi-class model benchmarking." data-tools="Random Forest · SVM · XGBoost · Stratified K-Fold" data-case="Benchmarked Decision Trees, KNN, Random Forest, and SVM across signal classes">
              <div className="flex items-center justify-between gap-3 mb-1">
                <div className="flex items-center gap-3">
                  <span className="step-num font-mono text-sm font-bold text-text-muted shrink-0 group-hover:text-accent-blue transition-colors">07</span>
                  <h4 className="font-display text-base font-bold text-text-primary group-hover:text-accent-blue transition-colors">Experimentation</h4>
                </div>
                <span className="font-mono text-[0.65rem] font-bold text-text-muted uppercase tracking-wider px-2 py-0.5 rounded bg-bg-secondary border border-border-subtle">Tuning</span>
              </div>
              <p className="text-xs text-text-secondary leading-relaxed pl-7">Hyperparameter tuning, cross-validation, and multi-class model benchmarking.</p>
            </div>

            {/*  Step 08  */}
            <div className="pipeline-step p-3.5 sm:p-4 rounded-r-xl border-l-2 border-transparent hover:border-border-light hover:bg-bg-card/40 transition-all cursor-pointer group" role="tab" tabindex="0" aria-selected="false" data-step="08" data-title="Evaluation" data-detail="Achieved 97.18% EEG accuracy, 0.3601 Silhouette score, and 84% recommendation accuracy." data-tools="ROC AUC · Confusion Matrix · BIC Score · F1 Metric" data-case="97.18% EEG pseudo-labeling accuracy (K-Means + SVM) &amp; 84% semantic match rate">
              <div className="flex items-center justify-between gap-3 mb-1">
                <div className="flex items-center gap-3">
                  <span className="step-num font-mono text-sm font-bold text-text-muted shrink-0 group-hover:text-accent-blue transition-colors">08</span>
                  <h4 className="font-display text-base font-bold text-text-primary group-hover:text-accent-blue transition-colors">Evaluation</h4>
                </div>
                <span className="font-mono text-[0.65rem] font-bold text-text-muted uppercase tracking-wider px-2 py-0.5 rounded bg-bg-secondary border border-border-subtle">Metrics</span>
              </div>
              <p className="text-xs text-text-secondary leading-relaxed pl-7">Achieved 97.18% EEG accuracy, 0.3601 Silhouette score, and 84% recommendation accuracy.</p>
            </div>

            {/*  Step 09  */}
            <div className="pipeline-step p-3.5 sm:p-4 rounded-r-xl border-l-2 border-transparent hover:border-border-light hover:bg-bg-card/40 transition-all cursor-pointer group" role="tab" tabindex="0" aria-selected="false" data-step="09" data-title="Interpretation" data-detail="Translating probabilistic representations into actionable occupational stress &amp; fatigue alerts." data-tools="Domain Knowledge · HAKI Registration · Executive Alerts" data-case="Registered Intellectual Property (HAKI) for fatigue &amp; stress monitoring representations">
              <div className="flex items-center justify-between gap-3 mb-1">
                <div className="flex items-center gap-3">
                  <span className="step-num font-mono text-sm font-bold text-text-muted shrink-0 group-hover:text-accent-blue transition-colors">09</span>
                  <h4 className="font-display text-base font-bold text-text-primary group-hover:text-accent-blue transition-colors">Interpretation</h4>
                </div>
                <span className="font-mono text-[0.65rem] font-bold text-text-muted uppercase tracking-wider px-2 py-0.5 rounded bg-bg-secondary border border-border-subtle">Insight</span>
              </div>
              <p className="text-xs text-text-secondary leading-relaxed pl-7">Translating probabilistic representations into actionable occupational stress &amp; fatigue alerts.</p>
            </div>

            {/*  Step 10  */}
            <div className="pipeline-step p-3.5 sm:p-4 rounded-r-xl border-l-2 border-transparent hover:border-border-light hover:bg-bg-card/40 transition-all cursor-pointer group" role="tab" tabindex="0" aria-selected="false" data-step="10" data-title="Application / Deployment" data-detail="Packaging models into real-time FastAPI services, Docker containers, and Web APIs." data-tools="FastAPI · Docker · ONNX Runtime · Streamlit" data-case="Production-ready REST APIs, containerized inferencing services &amp; real-time UI dashboards">
              <div className="flex items-center justify-between gap-3 mb-1">
                <div className="flex items-center gap-3">
                  <span className="step-num font-mono text-sm font-bold text-text-muted shrink-0 group-hover:text-accent-blue transition-colors">10</span>
                  <h4 className="font-display text-base font-bold text-text-primary group-hover:text-accent-blue transition-colors">Application / Deployment</h4>
                </div>
                <span className="font-mono text-[0.65rem] font-bold text-accent-green uppercase tracking-wider px-2 py-0.5 rounded bg-accent-green/10 border border-accent-green/20">Production</span>
              </div>
              <p className="text-xs text-text-secondary leading-relaxed pl-7">Packaging models into real-time FastAPI services, Docker containers, and Web APIs.</p>
            </div>

          </div>

          {/*  Right Column: Editorial Methodology Evidence Panel (42% width / col-span-5)  */}
          <div className="lg:col-span-5 lg:sticky lg:top-24 space-y-6 bg-bg-card/50 border border-border-subtle/80 rounded-2xl p-6 sm:p-7 backdrop-blur-sm" id="pipelineDetailCard" role="tabpanel">
            
            <div className="flex items-center justify-between gap-3 pb-4 border-b border-border-subtle/80">
              <span className="font-mono text-xs font-bold uppercase tracking-widest px-2.5 py-1 bg-accent-blue/10 text-accent-blue border border-accent-blue/20 rounded" id="pipelineStepNum">
                STAGE 01 OF 10
              </span>
              <span className="font-mono text-[0.7rem] text-text-muted font-medium uppercase tracking-wider">Methodology Deep Dive</span>
            </div>

            <div className="space-y-3">
              <h3 className="font-display text-xl sm:text-2xl font-bold text-text-primary tracking-tight" id="pipelineStepTitle">
                Problem Definition
              </h3>

              <p className="text-xs sm:text-sm text-text-secondary leading-relaxed" id="pipelineStepDesc">
                Scoping domain challenges, formulating research hypotheses, and defining target metrics (Accuracy, BIC, Silhouette).
              </p>
            </div>

            {/*  Contextual Technical Tools & Frameworks  */}
            <div className="space-y-2 pt-4 border-t border-border-subtle/60">
              <div className="font-mono text-[0.7rem] font-bold uppercase tracking-wider text-text-muted">
                Technical Stack &amp; Tools
              </div>
              <div className="font-mono text-xs font-medium text-accent-cyan bg-accent-cyan/10 border border-accent-cyan/20 px-3.5 py-2 rounded-lg leading-relaxed" id="pipelineStepTools">
                Tools: Hypothesis Testing · Literature Review · Metric Definition
              </div>
            </div>

            {/*  Contextual Engineering Case Evidence  */}
            <div className="space-y-2 pt-2">
              <div className="font-mono text-[0.7rem] font-bold uppercase tracking-wider text-text-muted">
                Applied Research Case
              </div>
              <p className="text-xs text-text-primary leading-relaxed pl-3.5 border-l-2 border-accent-blue/50 bg-accent-blue/5 py-2.5 pr-3 rounded-r-md font-medium" id="pipelineStepCase">
                Applied across Operator Fatigue Detection (PLTU Paiton), EEG Representation Learning, and Crowd Monitoring
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Methodology;
