import React, { useState } from 'react';

const Contact = ({ data }) => {
  const [copied, setCopied] = useState(false);
  const email = 'professionalfarelrakhad@gmail.com';

  const handleCopyEmail = (e) => {
    e.preventDefault();
    if (navigator?.clipboard?.writeText) {
      navigator.clipboard.writeText(email).then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2500);
      }).catch(() => {
        window.location.href = `mailto:${email}`;
      });
    } else {
      window.location.href = `mailto:${email}`;
    }
  };

  return (
    <section className="py-24 relative overflow-hidden" id="contact">
      <div className="max-w-7xl mx-auto px-6">
        <div className="fade-in max-w-2xl mx-auto text-center bg-bg-card border border-border-subtle rounded-3xl p-8 sm:p-12 shadow-sm relative overflow-hidden">
          
          {/* Subtle ambient aura behind contact card */}
          <div className="absolute top-0 right-1/4 w-72 h-72 bg-gradient-to-br from-blue-500/10 to-indigo-500/10 rounded-full blur-3xl pointer-events-none -z-0"></div>

          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-accent-blue text-xs font-semibold mb-4">
              Get in Touch
            </div>

            <h2 className="font-display text-3xl sm:text-4xl font-bold text-text-primary mb-4 tracking-tight">
              Let's Build Intelligent Systems Together
            </h2>
            <p className="text-text-secondary text-base mb-8 leading-relaxed">
              Open for AI engineering roles, applied machine learning research collaborations, and computer vision system development.
            </p>

            <div className="flex flex-wrap justify-center items-center gap-3.5">
              {/* Copy Email Button */}
              <button
                type="button"
                onClick={handleCopyEmail}
                className={`flex items-center gap-2.5 px-6 py-3.5 rounded-xl text-sm font-semibold transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-blue shadow-xs ${
                  copied
                    ? 'bg-emerald-500/10 border border-emerald-500 text-emerald-600 dark:text-emerald-400'
                    : 'bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white shadow-blue-500/25'
                }`}
                aria-label="Copy Email Address"
                title="Click to copy email address"
              >
                {copied ? (
                  <>
                    <svg className="w-4 h-4 text-emerald-500" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>✓ Email Copied!</span>
                  </>
                ) : (
                  <>
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="2" y="4" width="20" height="16" rx="2"></rect>
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                    </svg>
                    <span>Copy Email Address</span>
                  </>
                )}
              </button>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/farel-rakha-dzakwan/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-3.5 bg-bg-secondary hover:bg-bg-card border border-border-subtle rounded-xl text-sm font-semibold text-text-primary hover:border-border-light shadow-2xs hover:shadow transition-all focus-visible:ring-2 focus-visible:ring-accent-blue"
              >
                <svg className="w-4 h-4 fill-current text-[#0A66C2]" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path>
                </svg>
                <span>LinkedIn</span>
              </a>

              {/* GitHub */}
              <a
                href="https://github.com/farelrakhadzakwan/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-3.5 bg-bg-secondary hover:bg-bg-card border border-border-subtle rounded-xl text-sm font-semibold text-text-primary hover:border-border-light shadow-2xs hover:shadow transition-all focus-visible:ring-2 focus-visible:ring-accent-blue"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"></path>
                </svg>
                <span>GitHub</span>
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
