import React, { useEffect } from 'react';
import portfolioData from './data/portfolioData.json';

import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import Metrics from './components/Metrics.jsx';
import About from './components/About.jsx';
import Methodology from './components/Methodology.jsx';
import Projects from './components/Projects.jsx';
import Experience from './components/Experience.jsx';
import Organization from './components/Organization.jsx';
import Skills from './components/Skills.jsx';
import Achievements from './components/Achievements.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';

function App() {
  useEffect(() => {
    // Lightweight IntersectionObserver for smooth scroll entrance
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: '0px 0px -30px 0px' }
    );

    document.querySelectorAll('.fade-in').forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Navbar data={portfolioData} />
      <main id="main-content">
        <Hero data={portfolioData} />
        <Metrics data={portfolioData} />
        <About data={portfolioData} />
        <Methodology data={portfolioData} />
        <Projects data={portfolioData} />
        <Experience data={portfolioData} />
        <Organization data={portfolioData} />
        <Skills data={portfolioData} />
        <Achievements data={portfolioData} />
        <Contact data={portfolioData} />
      </main>
      <Footer data={portfolioData} />
    </>
  );
}

export default App;
