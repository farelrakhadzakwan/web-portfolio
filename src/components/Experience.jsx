import React, { useState } from 'react';

const experienceList = [
  {
    id: 0,
    period: 'Aug 2025 – Dec 2025',
    category: 'Laboratory Leadership',
    role: 'Coordinator Laboratory Assistant — Neural Networks Course',
    organization: 'Universitas Brawijaya',
    scope: 'Supervised practicum delivery for 100+ undergraduate students across deep learning, convolutional networks, and recurrent architectures.',
    bullets: [
      'Led team of 6 lab assistants in designing curriculum, lab manuals, and automated evaluation metrics for CNN, RNN, and LSTM practicums.',
      'Conducted hands-on mentoring sessions on PyTorch implementation, backpropagation math, and model optimization techniques.',
      'Achieved 95%+ student satisfaction rating and streamlined grading workflows with automated submission verification.'
    ],
    impact: 'Curriculum & Team Leadership · 100+ Students Mentored'
  },
  {
    id: 1,
    period: 'Jan 2025 – Jun 2025',
    category: 'Academic Teaching',
    role: 'Laboratory Assistant — Artificial Intelligence Course',
    organization: 'Universitas Brawijaya',
    scope: 'Facilitated core AI lab curriculum covering informed search heuristics, probabilistic reasoning, and classical machine learning.',
    bullets: [
      'Taught A*, Minimax game theory, Naive Bayes, Decision Trees, and K-Means clustering implementations in Python.',
      'Assisted students during debugging workshops and graded 80+ mid-term and final project algorithmic implementations.',
      'Created standardized coding templates and reproducible environment Docker files for student assignments.'
    ],
    impact: 'Search Heuristics & Machine Learning Fundamentals'
  },
  {
    id: 2,
    period: 'Feb 2024 – Jul 2024',
    category: 'Industry Apprenticeship',
    role: 'Machine Learning & AI Engineering Mentee',
    organization: 'Bangkit Academy led by Google, Tokopedia, GoTo, Traveloka',
    scope: 'Completed rigorous 900+ hour national artificial intelligence incubation focusing on deep learning pipelines and production deployment.',
    bullets: [
      'Engineered machine learning pipelines incorporating TensorFlow, Keras, data augmentation, and hyperparameter optimization.',
      'Collaborated on cross-functional capstone project integrating mobile app frontend with cloud-hosted inference API.',
      'Graduated in top tier cohort with TensorFlow Developer Certification credentials.'
    ],
    impact: '900+ Hours Intensive AI Track · Top Tier Cohort'
  },
  {
    id: 3,
    period: 'Aug 2025 – Oct 2025',
    category: 'Talent Incubation',
    role: 'National AI Program Finalist',
    organization: 'Alibaba Cloud — AI Talent Development',
    scope: 'Selected among Top 10 national talents to design generative AI solutions and scalable cloud infrastructure.',
    bullets: [
      'Deployed large language models and vector embedding search pipelines on Alibaba Cloud infrastructure.',
      'Benchmarked latency, throughput, and inference costs across distributed compute instances.',
      'Awarded Top 10 National AI Talent credential by Alibaba Cloud Indonesia.'
    ],
    impact: 'Top 10 National Finalist · Generative AI & Cloud'
  }
];

const Experience = ({ data }) => {
  const [expanded, setExpanded] = useState({ 0: true, 1: true });

  const toggleItem = (id) => {
    setExpanded(prev => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <section className="py-24" id="experience">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="fade-in mb-16 max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-accent-blue text-xs font-semibold mb-3">
            Career &amp; Academic Journey
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-text-primary tracking-tight mb-4">
            Experience
          </h2>
          <p className="text-text-secondary text-base sm:text-lg leading-relaxed">
            Laboratory leadership, applied AI research internships, and technical curriculum delivery.
          </p>
        </div>

        {/* Vertical Editorial Timeline */}
        <div className="fade-in divide-y divide-border-subtle/80 border-y border-border-subtle/80">
          {experienceList.map(item => {
            const isOpen = !!expanded[item.id];
            return (
              <article
                key={item.id}
                onClick={() => toggleItem(item.id)}
                className="py-8 sm:py-10 grid lg:grid-cols-[260px_1fr] gap-6 lg:gap-12 items-start cursor-pointer group hover:bg-bg-card/40 rounded-2xl p-4 sm:p-6 transition-all border border-transparent hover:border-border-subtle"
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    toggleItem(item.id);
                  }
                }}
              >
                {/* Left Column: Period & Category */}
                <div className="space-y-1">
                  <div className="font-mono text-xs font-bold text-accent-blue uppercase tracking-wider">
                    {item.period}
                  </div>
                  <div className="text-xs font-medium text-text-muted">
                    {item.category}
                  </div>
                </div>

                {/* Right Column: Title, Org, Scope, & Accordion Content */}
                <div className="space-y-3">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="font-display text-xl sm:text-2xl font-bold text-text-primary tracking-tight mb-1 group-hover:text-accent-blue transition-colors">
                        {item.role}
                      </h3>
                      <div className="text-sm font-semibold text-accent-blue">
                        {item.organization}
                      </div>
                    </div>
                    
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleItem(item.id);
                      }}
                      className="shrink-0 px-3 py-1.5 rounded-xl bg-bg-secondary hover:bg-bg-card border border-border-subtle text-text-muted group-hover:text-accent-blue transition-all flex items-center gap-2"
                      aria-expanded={isOpen}
                    >
                      <span className="font-mono text-xs hidden sm:inline">
                        {isOpen ? 'Hide Details' : 'Show Details'}
                      </span>
                      <svg
                        className={`w-4 h-4 transition-transform duration-300 transform ${isOpen ? 'rotate-180' : ''}`}
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"></path>
                      </svg>
                    </button>
                  </div>

                  {/* Scope statement */}
                  <p className="text-xs sm:text-sm text-text-secondary leading-relaxed font-normal">
                    {item.scope}
                  </p>

                  {/* Collapsible Content */}
                  {isOpen && (
                    <div className="pt-2 space-y-3 animate-in fade-in slide-in-from-top-1 duration-200">
                      <ul className="space-y-2 text-xs sm:text-sm text-text-secondary">
                        {item.bullets.map((b, bIdx) => (
                          <li key={bIdx} className="flex items-start gap-2.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-accent-blue mt-2 shrink-0"></span>
                            <span className="leading-relaxed">{b}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Impact Pill */}
                      <div className="pt-2">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-semibold bg-blue-500/10 text-accent-blue border border-blue-500/20">
                          ✦ {item.impact}
                        </span>
                      </div>
                    </div>
                  )}
                </div>
              </article>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Experience;
