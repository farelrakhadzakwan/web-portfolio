import React from 'react';

const About = ({ data }) => {
  const highlights = [
    {
      value: '3.73',
      scale: '/ 4.00',
      title: 'Cumulative GPA',
      subtitle: 'Informatics Engineering · Universitas Brawijaya',
      iconColor: 'text-blue-500 bg-blue-500/10'
    },
    {
      value: '1st Place',
      scale: 'Winner',
      title: 'National Research Competition',
      subtitle: 'IEEE FEST 2025 · IEEE Student Branch UB',
      iconColor: 'text-amber-500 bg-amber-500/10'
    },
    {
      value: 'Registered IP',
      scale: 'Holder',
      title: 'Official HAKI Certificate',
      subtitle: 'Kemenkumham RI · EC00202656345',
      iconColor: 'text-emerald-500 bg-emerald-500/10'
    },
    {
      value: 'Top 10',
      scale: 'Finalist',
      title: 'National AI Talent Program',
      subtitle: 'Alibaba Cloud · Indonesia Talent Development',
      iconColor: 'text-indigo-500 bg-indigo-500/10'
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden" id="about">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="fade-in mb-14 max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-accent-blue text-xs font-semibold mb-3">
            Profile &amp; Background
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-text-primary tracking-tight">
            About Me
          </h2>
        </div>

        {/* Editorial Content Grid */}
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-16 items-start">
          
          {/* Narrative Storytelling (Left Column) */}
          <div className="fade-in space-y-6">
            <p className="font-display text-xl sm:text-2xl text-text-primary font-medium leading-relaxed tracking-tight">
              Artificial Intelligence Engineer and AI Researcher, graduated in Informatics Engineering from{' '}
              <span className="text-accent-blue font-semibold">Universitas Brawijaya</span> with a cumulative{' '}
              <span className="text-text-primary font-bold underline decoration-accent-blue/40 underline-offset-4">
                GPA of 3.73 / 4.00
              </span>.
            </p>

            <div className="space-y-4 text-text-secondary text-base sm:text-lg leading-relaxed font-normal">
              <p>
                My work bridges rigorous theoretical AI research and production-grade engineering applications. I specialize in machine learning, deep learning, computer vision, natural language processing, LLMs, retrieval-augmented generation (RAG), and EEG signal processing.
              </p>
              <p>
                Projects span from probabilistic EEG latent representation learning for occupational stress pattern analysis to real-time computer vision crowd monitoring for Jatim Park, industrial operator fatigue detection for PLTU Paiton, and semantic recommendation engines.
              </p>
            </div>

            {/* Quick Action Link to Projects */}
            <div className="pt-2">
              <a
                href="#methodology"
                className="inline-flex items-center gap-2 text-sm font-semibold text-accent-blue hover:text-blue-700 dark:hover:text-blue-300 transition-colors group"
              >
                <span>Explore my Research &amp; Engineering Pipeline</span>
                <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                </svg>
              </a>
            </div>
          </div>

          {/* Highlights Cards (Right Column) */}
          <div className="fade-in space-y-4">
            <div className="text-xs font-semibold uppercase tracking-wider text-text-muted mb-2">
              Key Academic &amp; Research Milestones
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {highlights.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-bg-card border border-border-subtle rounded-2xl p-5 hover:border-accent-blue/40 shadow-xs hover:shadow-md transition-all duration-200"
                >
                  <div className="font-display text-2xl font-extrabold text-text-primary tracking-tight mb-1 flex items-baseline gap-1.5">
                    <span>{item.value}</span>
                    <span className="text-xs font-semibold text-text-muted">{item.scale}</span>
                  </div>
                  <div className="text-xs font-bold text-text-primary mb-1">
                    {item.title}
                  </div>
                  <div className="text-[11px] text-text-muted leading-relaxed">
                    {item.subtitle}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default About;
