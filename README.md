# 🌌 AI Engineer & AI Researcher Portfolio — Farel Rakha Dzakwan

Personal portfolio website for **Farel Rakha Dzakwan** (AI Engineer & AI Researcher). Built with high aesthetic standards, clean modern typography, responsive design, and performance optimizations.

Live at: [farelrakhadzakwan.my.id](https://farelrakhadzakwan.my.id)

---

## ⚡ Key Highlights & Architecture (Patch v2.1.0)

### 🎨 Human-Crafted Visual Excellence
- **Dual Theme (Dark & Light Mode)**: Fully bespoke color system (Midnight Navy & Slate for Dark Mode, Crisp Porcelain & Slate for Light Mode) designed to eliminate generic AI-generated template clichés.
- **Circular Reveal Theme Animation**: Uses the cutting-edge **View Transitions API** to create a circular radial wipe radiating directly from the theme toggle button.
- **Comprehensive AI Focus**: Highlights core AI engineering and research disciplines including **Machine Learning**, **Deep Learning**, **Computer Vision**, **NLP**, **LLM**, **RAG**, **Generative AI**, and **EEG Signal Processing**.
- **Interactive Methodology Pipeline**: 10-stage sequential research pipeline with real-time stage inspection and research evidence telemetry.
- **Dynamic Projects Showcase**: Category filtering (*All*, *Research & Thesis*, *Computer Vision*, *NLP & LLM*, *IoT & Systems*) with dedicated thesis spotlight and empirical metric tags (e.g., *87.5% Accuracy*, *p < 0.05*).
- **Verified Credentials & HAKI IP**: Showcases 1st Place IEEE FEST 2025, Kemenkumham HAKI Registered Intellectual Property, Alibaba Cloud Top 10, and verified certificates from Google, OpenAI, DeepLearning.AI, and Dicoding.
- **Seamless Micro-Interactions**: 1-click clipboard email copy with animated confirmation (`✓ Email Copied!`), collapsible career accordions, and static timeline status (`Timeline: GMT+7 (WIB)`).

### 🚀 Performance & Lightweight Engineering
- **Zero Runtime Parsing Overhead**: Data is pre-bundled as optimized static JSON (`src/data/portfolioData.json`), completely eliminating client-side `js-yaml` runtime parsing lags.
- **100% Declarative React State**: All 11 legacy imperative DOM scripts have been replaced with clean, modular React components.
- **Single Lightweight IntersectionObserver**: Smooth 60 FPS viewport reveal animations without heavy third-party animation libraries or scroll-listener thrashing.
- **Optimized Bundle Size**: Production JavaScript bundle reduced to **~325 kB** (~95.8 kB gzip), compiling in **~1.1 seconds** via Vite.

---

## 📁 Directory Structure

```text
WebPortfolio/
├── CHANGELOG.md                 # Detailed patch notes and version history
├── README.md                    # Project documentation
├── index.html                   # HTML Shell for Vite with initial theme script
├── package.json                 # Dependencies and scripts
├── vite.config.js               # Vite Configuration
├── docs/
│   ├── MasterContentSpesification.yaml # Comprehensive content master specification
│   └── raw_assets/             # Reference materials and raw media
├── public/
│   └── assets/                  # High-res portraits, icons, and badges
└── src/
    ├── App.jsx                  # Root React component & IntersectionObserver
    ├── main.jsx                 # React entry point
    ├── style.css                # Curated design tokens, theme variables & animations
    ├── data/
    │   └── portfolioData.json   # Pre-bundled static portfolio dataset
    └── components/              # Modular, reactive UI components
        ├── Navbar.jsx           # Responsive navigation & View Transition theme toggle
        ├── Hero.jsx             # Hero section with formal portrait & AI focus chips
        ├── Metrics.jsx          # Performance KPI cards (GPA, Projects, Certs, HAKI)
        ├── About.jsx            # Editorial research background & milestone highlights
        ├── Methodology.jsx      # Interactive 10-stage research pipeline
        ├── Projects.jsx         # Filterable project showcase & thesis spotlight
        ├── Experience.jsx       # Career timeline with collapsible accordions
        ├── Organization.jsx     # Leadership & community governance cards
        ├── Skills.jsx           # Categorized technical competencies
        ├── Achievements.jsx     # Honors, certifications & registered IP
        ├── Contact.jsx          # Contact actions with 1-click email copy
        └── Footer.jsx           # Regional timeline (GMT+7) & footer navigation
```

---

## 🚀 Quick Start / Local Development

1. **Clone the repository:**
   ```bash
   git clone https://github.com/farelrakhadzakwan/web-portfolio.git
   cd web-portfolio
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start local development server:**
   ```bash
   npm run dev
   ```
   Open `http://localhost:5173` in your browser.

4. **Build for production:**
   ```bash
   npm run build
   ```

5. **Preview production build locally:**
   ```bash
   npm run preview
   ```

---

## 🛠️ Tech Stack

- **Framework**: [React 19](https://react.dev/)
- **Bundler & Dev Server**: [Vite 8](https://vitejs.dev/)
- **Styling**: Vanilla CSS Design System with Tailwind CSS v4 utilities
- **Typography**: [Inter](https://fonts.google.com/specimen/Inter), [Outfit](https://fonts.google.com/specimen/Outfit), [JetBrains Mono](https://fonts.google.com/specimen/JetBrains+Mono)
- **Animation & Transitions**: CSS Transitions, Keyframe Animations, View Transitions API, Intersection Observer

---

## 📄 License & Attribution

© 2026 Farel Rakha Dzakwan. Designed and developed for AI Engineering & Research Excellence.
