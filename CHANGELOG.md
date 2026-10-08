# 📝 Changelog & Patch Notes

All notable changes, visual updates, and performance optimizations for Farel Rakha Dzakwan's portfolio website are documented in this file.

---

## [2.1.0] - 2026-10-08

### 🎨 Visual & Aesthetic Retouch (Design Excellence)
- **Human-Crafted Visual Identity**: Eliminated generic AI-generated template characteristics (e.g. over-saturated rainbow neons, noisy glow overlays, and rigid borders) in favor of a bespoke, executive AI Engineer aesthetic.
- **Tailored Color Palettes**:
  - **Dark Mode**: Deep midnight navy background (`#070d18` / `#0b1325`), subtle slate borders (`rgba(255, 255, 255, 0.08)`), and sophisticated royal blue / indigo accents (`#2563eb`, `#3b82f6`).
  - **Light Mode**: Clean porcelain background (`#f8fafc` / `#ffffff`), crisp borders (`#e2e8f0`), and high-contrast typography (`#0f172a`).
- **Circular Reveal Theme Transition**: Implemented the modern **View Transitions API** with circular clipping animations (`::view-transition-old` and `::view-transition-new`) centered at the toggle switch location for a seamless transition between Light and Dark modes.
- **Static Neural Network Nodes Favicon**: Replaced typography-based monogram with a clean, static Neural Network Nodes symbol (symmetrical deep learning triad with glowing synaptic connections and midnight squircle container) providing high contrast on all browser tab backgrounds, alongside crisp multi-resolution PNG and ICO fallbacks (16px, 32px, 180px, 192px).
- **Hero Section Overhaul**:
  - Embedded high-resolution formal portrait with ambient radial lighting.
  - Added academic & award badges: **Universitas Brawijaya (GPA 3.73 / 4.00)** and **1st Place Winner IEEE FEST 2025**.
  - Updated AI focus chips to highlight cutting-edge domains: **Machine Learning**, **Deep Learning**, **Computer Vision**, **NLP**, **LLM**, **RAG**, **Generative AI**, and **EEG Signal Processing**.
- **Metrics Section**: 4 elevated metric cards displaying GPA (3.73), AI & Research Projects (6), Professional Certifications (19), and Registered HAKI IP (1) with refined hover effects.
- **Editorial About Section**: Refined academic & research narrative paired with 4 key milestone highlight cards.
- **Interactive Methodology Pipeline**: 10-stage sequential research pipeline (*Data Acquisition, Preprocessing, Feature Engineering, Model Architecture, Training & Optimization, Validation, Explainable AI, System Integration, Hardware Deployment, Real-Time Inference*) with interactive tab switching and a sticky research evidence card.
- **Dynamic Projects Showcase**: Added responsive category filters (*All, Research & Thesis, Computer Vision, NLP & LLM, IoT & Systems*) with dedicated thesis spotlight and empirical metric tags (e.g., *87.5% Accuracy*, *p < 0.05*).
- **Career & Organization Timelines**:
  - Smooth collapsible accordion system for research, engineering, and teaching assistant roles.
  - 4 structured leadership and public advocacy cards (*MMD Secretary, EMIF Advocacy, Liaison Officer Statistika, Liaison Officer APTIKOM*).
- **Achievements & Verified Credentials**: Highlighted IEEE FEST 1st place, Kemenkumham HAKI IP, and Alibaba Cloud Top 10 honors alongside verified certificates from Google, OpenAI, DeepLearning.AI, and Dicoding.
- **Contact & Footer Refinement**:
  - Clean card layout with interactive 1-click clipboard copy button with visual confirmation (`✓ Email Copied!`), GitHub, and LinkedIn actions.
  - Fixed, static regional timezone pill: **`Timeline: GMT+7 (WIB)`**.

---

### ⚡ Performance & Architectural Refactor (Lightweight & Optimal)
- **Eliminated Runtime YAML Overhead**: Replaced client-side `js-yaml` fetch and parse execution (which added 40+ KB transfer and client CPU lag on every page load) with pre-bundled static JSON (`src/data/portfolioData.json`).
- **100% Declarative React State Architecture**:
  - Removed **11 legacy imperative vanilla JS scripts** (`pipeline.js`, `projects.js`, `experience.js`, `emailCopy.js`, `metrics.js`, `navigation.js`, `scrollReveal.js`, `theme.js`, `clock.js`, `scramble.js`, `tilt.js`, and `src/main.js`).
  - Converted all interactions (project filters, pipeline step selection, experience accordion toggles, email copy, navbar scroll detection, mobile drawer) into idiomatic React components.
- **Unified IntersectionObserver**: Replaced multiple scroll event handlers with a single, highly performant `IntersectionObserver` for smooth 60 FPS `.fade-in` reveals without layout thrashing.
- **Bundle Size Reduction**: Reduced JavaScript production bundle from **~425 kB** down to **~325 kB** (~95.8 kB gzip), achieving a **~24% reduction** in client bundle weight.
- **Instant Load & Zero Spinner Lag**: Initial paint is instantaneous without artificial loading spinners or blocking scripts.
- **Blazing Fast Builds**: Production build via Vite compiles in ~1.1 seconds.

---

## [2.0.0] - 2026-10-07
- Initial migration from static multi-page HTML/CSS to React 18 and Vite.
- Established YAML Single Source of Truth (`docs/MasterContentSpesification.yaml`).
- Initial dark mode styling with Tailwind CSS.
