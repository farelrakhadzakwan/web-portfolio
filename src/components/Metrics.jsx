import React from 'react';

const metricItems = [
  {
    value: '3.73',
    label: 'Cumulative GPA (4.00)',
    sublabel: 'Universitas Brawijaya',
    badge: 'Graduated',
    badgeColor: 'text-blue-600 bg-blue-500/10 border-blue-500/20'
  },
  {
    value: '6',
    label: 'AI & Research Projects',
    sublabel: 'Thesis, Industrial, & Applied',
    badge: 'Completed',
    badgeColor: 'text-indigo-600 bg-indigo-500/10 border-indigo-500/20'
  },
  {
    value: '19',
    label: 'Professional Certifications',
    sublabel: 'Google, OpenAI, & Partners',
    badge: 'Verified',
    badgeColor: 'text-cyan-600 bg-cyan-500/10 border-cyan-500/20'
  },
  {
    value: '1',
    label: 'Registered HAKI IP',
    sublabel: 'Kemenkumham RI Certified',
    badge: 'Official IP',
    badgeColor: 'text-amber-600 bg-amber-500/10 border-amber-500/20'
  }
];

const Metrics = ({ data }) => {
  return (
    <section aria-label="Key Performance Indicators" className="py-10 bg-bg-secondary/40 border-y border-border-subtle/80">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {metricItems.map((item, idx) => (
            <div
              key={idx}
              className="group bg-bg-card border border-border-subtle rounded-2xl p-5 sm:p-6 text-center shadow-xs hover:border-accent-blue/40 hover:shadow-lg hover:shadow-blue-500/5 hover:-translate-y-1 transition-all duration-300 relative overflow-hidden"
            >
              {/* Subtle top indicator line on hover */}
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-accent-blue/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              
              <div className="font-display text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-300 mb-1.5 tracking-tight">
                {item.value}
              </div>
              <div className="text-xs sm:text-sm text-text-primary font-semibold mb-1">
                {item.label}
              </div>
              <div className="text-[11px] sm:text-xs text-text-muted font-normal">
                {item.sublabel}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Metrics;
