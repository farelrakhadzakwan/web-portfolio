import React from 'react';

const Organization = ({ data }) => {
  return (
    <section className="py-24 bg-bg-secondary" id="organization">
      <div className="max-w-7xl mx-auto px-6">
        <div className="fade-in mb-12">
          <div className="font-display text-xs font-semibold tracking-[3px] uppercase text-accent-blue mb-2 flex items-center gap-2">
            <span className="w-6 h-0.5 bg-gradient-to-r from-accent-blue to-accent-violet rounded-full"></span>
            Organization &amp; Activity
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-text-primary mb-2">Leadership &amp; Volunteering</h2>
          <p className="text-text-secondary text-base">Event coordination, student advocacy, and community outreach.</p>
        </div>

        <div className="fade-in horizontal-timeline vertical-timeline grid lg:grid-cols-4 gap-8 lg:gap-6">

          <div className="relative pt-6 lg:pt-10">
            <div className="absolute lg:top-2 left-0 lg:left-0 w-3.5 h-3.5 rounded-full bg-accent-blue shadow-[0_0_12px_var(--color-accent-blue)] z-10"></div>
            <div className="font-mono text-xs text-text-muted font-medium mb-2">July 2024 – August 2024</div>
            <h3 className="font-display text-base font-semibold text-text-primary mb-1">Secretary</h3>
            <div className="text-xs font-semibold text-accent-blue mb-3">MMD (Mahasiswa Membangun Desa)</div>
            <ul className="text-xs text-text-secondary space-y-1.5">
              <li className="relative pl-3 before:content-['›'] before:absolute before:left-0 before:text-accent-blue before:font-bold">Trained 30 elementary students in computer skills &amp; Canva, assisted 2 local SMEs with product digitalization</li>
              <li className="relative pl-3 before:content-['›'] before:absolute before:left-0 before:text-accent-blue before:font-bold">Produced village profile video winning 1st place in SAK-RT competition</li>
            </ul>
          </div>

          <div className="relative pt-6 lg:pt-10">
            <div className="absolute lg:top-2 left-0 lg:left-0 w-3.5 h-3.5 rounded-full bg-bg-primary border-2 border-accent-blue z-10"></div>
            <div className="font-mono text-xs text-text-muted font-medium mb-2">October 2022 – February 2023</div>
            <h3 className="font-display text-base font-semibold text-text-primary mb-1">Advocacy and Student Prosperity</h3>
            <div className="text-xs font-semibold text-accent-blue mb-3">EMIF (Informatics Student Executive Board)</div>
            <ul className="text-xs text-text-secondary space-y-1.5">
              <li className="relative pl-3 before:content-['›'] before:absolute before:left-0 before:text-accent-blue before:font-bold">Researched and distributed 20+ academic &amp; scholarship opportunities</li>
              <li className="relative pl-3 before:content-['›'] before:absolute before:left-0 before:text-accent-blue before:font-bold">Supported 10+ students in academic administration and course planning</li>
            </ul>
          </div>

          <div className="relative pt-6 lg:pt-10">
            <div className="absolute lg:top-2 left-0 lg:left-0 w-3.5 h-3.5 rounded-full bg-bg-primary border-2 border-accent-blue z-10"></div>
            <div className="font-mono text-xs text-text-muted font-medium mb-2">August 2023</div>
            <h3 className="font-display text-base font-semibold text-text-primary mb-1">Liaison Officer</h3>
            <div className="text-xs font-semibold text-accent-blue mb-3">Statistika Ria dan Festival Sains Data</div>
            <ul className="text-xs text-text-secondary space-y-1.5">
              <li className="relative pl-3 before:content-['›'] before:absolute before:left-0 before:text-accent-blue before:font-bold">Coordinated logistics &amp; participant communication for 100+ participants</li>
              <li className="relative pl-3 before:content-['›'] before:absolute before:left-0 before:text-accent-blue before:font-bold">Managed event timelines, contributing to 90% speaker satisfaction</li>
            </ul>
          </div>

          <div className="relative pt-6 lg:pt-10">
            <div className="absolute lg:top-2 left-0 lg:left-0 w-3.5 h-3.5 rounded-full bg-bg-primary border-2 border-accent-blue z-10"></div>
            <div className="font-mono text-xs text-text-muted font-medium mb-2">August 2023</div>
            <h3 className="font-display text-base font-semibold text-text-primary mb-1">Liaison Officer</h3>
            <div className="text-xs font-semibold text-accent-blue mb-3">Asosiasi Pendidikan Tinggi Informatika</div>
            <ul className="text-xs text-text-secondary space-y-1.5">
              <li className="relative pl-3 before:content-['›'] before:absolute before:left-0 before:text-accent-blue before:font-bold">Managed registration and technical setup for 200+ participants &amp; 5 speakers</li>
              <li className="relative pl-3 before:content-['›'] before:absolute before:left-0 before:text-accent-blue before:font-bold">Supported structured communication throughout the conference</li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Organization;
