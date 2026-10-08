import React from 'react';

const orgItems = [
  {
    period: 'Jul 2024 – Aug 2024',
    role: 'Secretary',
    org: 'MMD (Mahasiswa Membangun Desa)',
    bullets: [
      'Trained 30 elementary students in computer literacy & Canva, assisted 2 local SMEs with digital catalog transformation.',
      'Produced village profile documentary video winning 1st place in regional SAK-RT competition.'
    ]
  },
  {
    period: 'Oct 2022 – Feb 2023',
    role: 'Advocacy & Student Prosperity',
    org: 'EMIF (Informatics Student Executive Board)',
    bullets: [
      'Researched and distributed 20+ academic scholarship & exchange opportunities to student body.',
      'Assisted 10+ students in academic administrative processes, tuition appeals, and study plan advisement.'
    ]
  },
  {
    period: 'Aug 2023',
    role: 'Liaison Officer',
    org: 'Statistika Ria & Festival Sains Data',
    bullets: [
      'Coordinated logistics & dedicated liaison communication for 100+ national competition delegates.',
      'Managed event schedules and speaker accommodation, achieving 90%+ speaker satisfaction rating.'
    ]
  },
  {
    period: 'Aug 2023',
    role: 'Liaison Officer',
    org: 'Asosiasi Pendidikan Tinggi Informatika (APTIKOM)',
    bullets: [
      'Managed registration and technical setup for 200+ academic participants and 5 keynote professors.',
      'Maintained structured communication channels and coordinated breakout technical sessions.'
    ]
  }
];

const Organization = ({ data }) => {
  return (
    <section className="py-24 bg-bg-secondary/40 border-y border-border-subtle" id="organization">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="fade-in mb-14 max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-accent-blue text-xs font-semibold mb-3">
            Community &amp; Governance
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-text-primary tracking-tight mb-2">
            Leadership &amp; Volunteering
          </h2>
          <p className="text-text-secondary text-base sm:text-lg leading-relaxed">
            Student advocacy, event coordination, and community digital transformation initiatives.
          </p>
        </div>

        {/* Timeline Grid */}
        <div className="fade-in grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {orgItems.map((item, idx) => (
            <div
              key={idx}
              className="bg-bg-card border border-border-subtle rounded-2xl p-6 shadow-xs hover:border-accent-blue/40 hover:shadow-md hover:-translate-y-1 transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                <div className="font-mono text-xs font-bold text-accent-blue mb-2 uppercase tracking-wider">
                  {item.period}
                </div>
                <h3 className="font-display text-lg font-bold text-text-primary mb-1 leading-snug">
                  {item.role}
                </h3>
                <div className="text-xs font-semibold text-text-muted mb-4">
                  {item.org}
                </div>

                <ul className="space-y-2 text-xs text-text-secondary">
                  {item.bullets.map((b, bIdx) => (
                    <li key={bIdx} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent-blue/60 mt-1.5 shrink-0"></span>
                      <span className="leading-relaxed">{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Organization;
