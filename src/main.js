import './style.css';
import { initNavigation } from './components/navigation.js';
import { initMetrics } from './components/metrics.js';
import { initPipeline } from './components/pipeline.js';
import { initProjects } from './components/projects.js';
import { initTiltAndGlow } from './components/tilt.js';
import { initScramble } from './components/scramble.js';
import { initEmailCopy } from './components/emailCopy.js';
import { initLiveClock } from './components/clock.js';
import { initScrollReveal } from './components/scrollReveal.js';

document.addEventListener('DOMContentLoaded', () => {
  initNavigation();
  initMetrics();
  initPipeline();
  initProjects();
  initTiltAndGlow();
  initScramble();
  initEmailCopy();
  initLiveClock();
  initScrollReveal();
});
