import React from 'react';

const Metrics = ({ data }) => {
  return (
    <section aria-label="Key Performance Indicators" className="py-10 bg-bg-secondary border-y border-border-subtle">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center divide-y-0 divide-x-0 lg:divide-x divide-border-subtle">
          <div className="p-4">
            <div className="font-display text-2xl sm:text-3xl font-bold text-text-primary mb-1 metric-value" data-value="3.73">3.73</div>
            <div className="font-mono text-xs text-text-muted uppercase tracking-wider">GPA / 4.00<br />Universitas Brawijaya</div>
          </div>
          <div className="p-4">
            <div className="font-display text-2xl sm:text-3xl font-bold text-text-primary mb-1 metric-value" data-value="6">6</div>
            <div className="font-mono text-xs text-text-muted uppercase tracking-wider">AI &amp; Research Projects</div>
          </div>
          <div className="p-4">
            <div className="font-display text-2xl sm:text-3xl font-bold text-text-primary mb-1 metric-value" data-value="19">19</div>
            <div className="font-mono text-xs text-text-muted uppercase tracking-wider">Certifications Earned</div>
          </div>
          <div className="p-4">
            <div className="font-display text-2xl sm:text-3xl font-bold text-text-primary mb-1 metric-value" data-value="1">1</div>
            <div className="font-mono text-xs text-text-muted uppercase tracking-wider">Registered HAKI IP<br />(Kemenkumham RI)</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Metrics;
