# 🌌 AI Engineer & AI Researcher Portfolio — Farel Rakha Dzakwan

Personal portfolio website for **Farel Rakha Dzakwan** (AI Engineer & AI Researcher). Built with high visual aesthetic standards (Cyber-Minimalism Dark Mode, Glassmorphism, Monospace Typography, and Interactive Micro-interactions).

---

## 🚀 Technical Architecture (Refactored)

This project has been massively refactored from static HTML/Vanilla JS into a modular **React application** powered by **Vite** and **Tailwind CSS**.

### Single Source of Truth (SSOT)
The portfolio uses a robust YAML configuration (`docs/MasterContentSpesification.yaml`) as the definitive Single Source of Truth. 
React components (e.g. `Hero.jsx`, `Projects.jsx`) dynamically read from this YAML file to render the content, meaning all data updates (projects, work experience, achievements) only need to be done in one central file.

### 🎨 Visual & Technical Highlights

- **Component-based React UI**: Codebase is split into manageable components inside `src/components/`.
- **Cyber-Minimalist Aesthetics**: Deep dark background (`#0a0a0f`) paired with glowing accent colors (`#4f7cff`, `#7c5cff`, `#00ff88`, `#38bdf8`) and smooth radial glows.
- **Glassmorphism Navigation**: Floating navigation bar featuring backdrop-filter blur (`20px`) and color saturation effect.
- **Advanced Typography**: Modern Sans-Serif (**Inter** & **Space Grotesk**) paired with Monospace (**JetBrains Mono**) for tags, dates, metrics, and terminal status indicators.
- **Interactive Micro-Interactions** (Integrated via React Hooks & Vanilla JS hybrids):
  - **3D Card Tilt Effect**: Dynamic perspective rotate on cursor hover for project, skill, and achievement cards.
  - **Cursor-Tracking Radial Glow**: Mouse-following radial glow highlights on project cards.
  - **Text Scramble Matrix Effect**: Scrambles section headers and project tags into random cyber characters on hover.
  - **Animated Metric Counters**: Smooth count-up animation for key performance indicators (GPA, project counts, awards).
  - **Live WIB Clock & Model Status**: Diagnostic footer showing real-time WIB timezone clock and glowing inference readiness status.
- **Responsive Timeline Architecture**: Experiences and Organizational Activity use a modern horizontal timeline on desktop to maximize screen space, and gracefully degrade to a vertical timeline on mobile devices.

---

## 📁 Directory Structure

```text
WebPortfolio/
├── docs/
│   └── MasterContentSpesification.yaml # Single Source of Truth for Content
├── public/
│   └── assets/                  # Logos, icons, and image assets
├── src/
│   ├── components/              # Modular React Components (Hero, About, Projects, etc.)
│   ├── App.jsx                  # Main React App integrating YAML parsing
│   ├── main.jsx                 # React Entry Point
│   └── style.css                # Custom CSS Design System & Tailwind Directives
├── index.html                   # HTML Shell for Vite
├── vite.config.js               # Vite Configuration
├── package.json                 # Dependencies (React, js-yaml, Tailwind, Vite)
└── README.md                    # Project documentation
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

3. **Run local development server:**
   ```bash
   npm run dev
   ```
   Then visit `http://localhost:5173`.

4. **Build for production:**
   ```bash
   npm run build
   ```

---

## 🛠️ Built With

- **React 18** — UI Component Library
- **Vite** — Next Generation Frontend Tooling
- **Tailwind CSS v4** — Utility-first CSS framework
- **js-yaml** — YAML parser for SSOT implementation
- **HTML5 & CSS3** — Semantic structure and animations
- **Google Fonts** — Inter, Space Grotesk, JetBrains Mono

---

© 2026 Farel Rakha Dzakwan. Built with precision and AI research rigor.
