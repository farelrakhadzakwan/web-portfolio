import { useEffect, useState } from 'react';
import * as yaml from 'js-yaml';
import masterContentRaw from '../docs/MasterContentSpesification.yaml?raw';

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

// Import vanilla JS scripts that initialize animations, etc.
import { initNavigation } from './components/navigation.js';
import { initMetrics } from './components/metrics.js';
import { initPipeline } from './components/pipeline.js';
import { initProjects } from './components/projects.js';
import { initExperience } from './components/experience.js';
import { initTiltAndGlow } from './components/tilt.js';
import { initScramble } from './components/scramble.js';
import { initEmailCopy } from './components/emailCopy.js';
import { initLiveClock } from './components/clock.js';
import { initScrollReveal } from './components/scrollReveal.js';

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    try {
      const parsedData = yaml.load(masterContentRaw);
      setData(parsedData);
      console.log('YAML Data Loaded:', parsedData);
    } catch (e) {
      console.error('Error parsing YAML:', e);
    }
  }, []);

  useEffect(() => {
    if (data) {
      // Re-initialize vanilla javascript plugins after React renders
      setTimeout(() => {
        initNavigation();
        initMetrics();
        initPipeline();
        initProjects();
        initExperience();
        initTiltAndGlow();
        initScramble();
        initEmailCopy();
        initLiveClock();
        initScrollReveal();
      }, 100);
    }
  }, [data]);

  if (!data) return <div className="min-h-screen flex items-center justify-center font-mono text-[#38bdf8] bg-[#0a0a0f]">system_boot... loading AI_Engineer_Profile...</div>;

  return (
    <>
      <Navbar data={data} />
      <main id="main-content">
        <Hero data={data} />
        <Metrics data={data} />
        <About data={data} />
        <Methodology data={data} />
        <Projects data={data} />
        <Experience data={data} />
        <Organization data={data} />
        <Skills data={data} />
        <Achievements data={data} />
        <Contact data={data} />
      </main>
      <Footer data={data} />
    </>
  );
}

export default App;
