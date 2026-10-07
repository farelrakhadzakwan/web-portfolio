import React from 'react';

const Contact = ({ data }) => {
  return (
    <section className="py-24" id="contact">
      <div className="max-w-7xl mx-auto px-6">
        <div className="fade-in text-center max-w-2xl mx-auto">
          <div className="font-display text-xs font-semibold tracking-[3px] uppercase text-accent-blue mb-3 inline-flex items-center gap-2 justify-center">
            <span className="w-6 h-0.5 bg-gradient-to-r from-accent-blue to-accent-violet rounded-full"></span>
            Contact
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-text-primary mb-4">Let's Build Intelligent Systems</h2>
          <p className="text-text-secondary text-base mb-8 leading-relaxed">
            Interested in AI research, machine learning, computer vision, data-driven systems, or intelligent applications? Let's connect.
          </p>

          <div className="flex flex-wrap justify-center items-center gap-3">
            <a href="mailto:professionalfarelrakhad@gmail.com" className="contact-link flex items-center gap-2 px-6 py-3 bg-bg-card border border-border-subtle rounded-xl text-sm font-semibold text-text-primary hover:border-accent-blue hover:bg-accent-blue/10 hover:-translate-y-0.5 transition-all cursor-pointer focus-visible:ring-2 focus-visible:ring-accent-blue" id="emailCopyBtn" data-email="professionalfarelrakhad@gmail.com" aria-label="Copy Email Address">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="2" y="4" width="20" height="16" rx="2"></rect>
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
              </svg>
              <span className="email-btn-text">Email</span>
            </a>

            <a href="https://www.linkedin.com/in/farel-rakha-dzakwan/" target="_blank" rel="noopener noreferrer" className="contact-link flex items-center gap-2 px-6 py-3 bg-bg-card border border-border-subtle rounded-xl text-sm font-semibold text-text-primary hover:border-accent-blue hover:bg-accent-blue/10 hover:-translate-y-0.5 transition-all focus-visible:ring-2 focus-visible:ring-accent-blue">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path>
              </svg>
              LinkedIn
            </a>

            <a href="https://github.com/farelrakhadzakwan/" target="_blank" rel="noopener noreferrer" className="contact-link flex items-center gap-2 px-6 py-3 bg-bg-card border border-border-subtle rounded-xl text-sm font-semibold text-text-primary hover:border-accent-blue hover:bg-accent-blue/10 hover:-translate-y-0.5 transition-all focus-visible:ring-2 focus-visible:ring-accent-blue">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"></path>
              </svg>
              GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
