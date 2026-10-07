import React from 'react';

const About = ({ data }) => {
  return (
    <section className="py-24" id="about">
      <div className="max-w-7xl mx-auto px-6">
        
        {/*  Section Header  */}
        <div className="fade-in mb-14">
          <div className="font-mono text-xs font-bold tracking-[0.2em] uppercase text-accent-blue mb-3">
            01 / ABOUT
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-text-primary tracking-tight">
            Who I Am
          </h2>
        </div>

        {/*  Editorial Content Grid  */}
        <div className="grid lg:grid-cols-[1fr_320px] gap-12 lg:gap-20 items-start">
          
          {/*  Narrative Storytelling (Left Column)  */}
          <div className="fade-in space-y-8">
            {/*  Level 1 Typography Statement  */}
            <p className="font-display text-xl sm:text-2xl text-text-primary font-medium leading-relaxed tracking-tight">
              Artificial Intelligence Engineer and AI Researcher, recently graduated in Informatics Engineering from <span className="text-accent-blue font-semibold">Universitas Brawijaya</span> with a cumulative <span className="text-text-primary font-bold underline decoration-accent-blue/40 underline-offset-4">GPA of 3.73 / 4.00</span>.
            </p>

            {/*  Level 2 Typography Paragraphs  */}
            <div className="space-y-5 text-text-secondary text-base sm:text-lg leading-relaxed font-normal">
              <p>
                My work bridges rigorous theoretical AI research and production-grade engineering applications. I specialize in machine learning, deep learning, computer vision, EEG signal processing, data analysis, and natural language processing.
              </p>
              <p>
                Projects range from probabilistic EEG latent representation learning for stress pattern analysis to real-time computer vision crowd monitoring for Jatim Park, industrial operator fatigue detection for PLTU Paiton, and semantic job recommendation engines.
              </p>
            </div>
          </div>

          {/*  Selected Evidence Column (Right Column)  */}
          <div className="fade-in pt-6 lg:pt-0 border-t lg:border-t-0 lg:border-l border-border-subtle lg:pl-10 space-y-8">
            <div className="font-mono text-xs font-bold uppercase tracking-widest text-text-muted">
              SELECTED EVIDENCE
            </div>

            <div className="space-y-6">
              {/*  Evidence 1: GPA  */}
              <div className="pb-6 border-b border-border-subtle/60">
                <div className="font-display text-3xl font-extrabold text-text-primary tracking-tight mb-1">
                  3.73 <span className="text-sm font-normal text-text-muted">/ 4.00</span>
                </div>
                <div className="text-xs font-medium text-text-secondary">
                  Cumulative GPA · Universitas Brawijaya
                </div>
              </div>

              {/*  Evidence 2: IEEE FEST  */}
              <div className="pb-6 border-b border-border-subtle/60">
                <div className="font-display text-xl font-bold text-text-primary tracking-tight mb-1">
                  1st Place Winner
                </div>
                <div className="text-xs font-medium text-text-secondary">
                  National Research Competition · IEEE FEST 2025
                </div>
              </div>

              {/*  Evidence 3: HAKI  */}
              <div className="pb-6 border-b border-border-subtle/60">
                <div className="font-display text-xl font-bold text-text-primary tracking-tight mb-1">
                  Registered IP Holder
                </div>
                <div className="text-xs font-medium text-text-secondary">
                  Official HAKI IP Certificate · Kemenkumham RI
                </div>
              </div>

              {/*  Evidence 4: Alibaba Top 10  */}
              <div>
                <div className="font-display text-xl font-bold text-text-primary tracking-tight mb-1">
                  Top 10 AI Talent
                </div>
                <div className="text-xs font-medium text-text-secondary">
                  National AI Program · Alibaba Cloud
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default About;
