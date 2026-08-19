# Portfolio Redesign — Farel Rakha Dzakwan

You are an Expert UI/UX Designer and Senior Creative Frontend Developer specializing in high-end, premium personal portfolios for AI engineers, researchers, and technical professionals.

I already have a live personal portfolio website:
https://farelrakhadzakwan.my.id/

Your task is to **redesign and upgrade the existing website**, creating a bespoke, premium aesthetic uniquely tailored to an AI professional.

The current website contains real information about me, my education, experience, projects, research, certifications, skills, and achievements. Preserve factual information unless there is a clear reason to restructure it.

The primary objective is:
> Elevate the design into a sophisticated **Cyber-Minimalist** aesthetic that feels dynamic, intelligent, and deeply technical without feeling like a standard website builder template.

---

# 1. CORE POSITIONING

My professional identity:
**Farel Rakha Dzakwan**  
AI Engineer & Researcher  
Informatics Engineering graduate from Universitas Brawijaya.

My strongest areas are:
- Machine Learning
- AI Research
- Computer Vision
- EEG Signal Processing
- Probabilistic Modeling

The portfolio should feel like a premium, dynamic interface belonging to a high-tier AI engineer:
> **Bespoke Cyber-Minimalism × Engineering Excellence**

---

# 2. DESIGN PHILOSOPHY & VISUAL DIRECTION

Use a sleek, modern **Cyber-Minimalist** aesthetic.

## Color & Vibe
- **Dark Mode First**: Use deep dark backgrounds (e.g., `#0a0a0f`, `#10101a` or dark navy).
- **Glowing Accents**: Implement subtle, high-contrast glowing accents (e.g., electric blue `#4f7cff`, neon green `#00ff88`, cyan, or purple).
- **Glassmorphism**: Use backdrop-filter blurs (`blur(20px)`) for the navigation bar and cards to make the UI feel translucent and ultra-modern.

## Typography Pairing (Advanced)
Create a "hacker/developer" terminal vibe integrated with modern readability.
- **Primary Headings & Body**: A modern Sans-Serif font (like `Inter`, `Geist`, or `Plus Jakarta Sans`).
- **Technical Elements (Tags, Dates, Metrics, Footer Diagnostics)**: A Monospace font (like `JetBrains Mono` or `Fira Code`).

---

# 3. LAYOUT PRINCIPLES

Break the rigid grid. Avoid perfectly symmetrical 3-column layouts everywhere.

- **Bento Box Layout**: Introduce modern asymmetric Bento Box structures for grids like 'Skills' and 'Achievements'. Allow some elements to span two columns to create visual interest.
- **Depth**: Allow slight overlaps or glowing borders to establish a sense of Z-depth.
- **Cards**: Keep card borders thin (`1px solid rgba(255,255,255,0.1)`) and let the glassmorphism and hover glows do the visual work.

---

# 4. MICRO-INTERACTIONS & POLISH

An interface that feels alive encourages interaction. 

- **3D Tilt Effect**: Add smooth 3D perspective tilts to project cards, skill groups, and achievement cards when hovered.
- **Cursor-Tracking Glow**: Implement a radial gradient glow on cards that follows the user's mouse position (`--glow-x`, `--glow-y`).
- **Button Animations**: Add smooth hover states (e.g., an arrow icon inside the primary button that slides right on hover).
- **Matrix / Cyber Scramble Effect**: When hovering over section titles or project types, rapidly scramble the characters briefly before settling on the real text to reinforce the technical AI theme.

---

# 5. SCROLL ANIMATIONS

Do not let elements appear statically.
- **Scroll Reveal**: Write a lightweight JavaScript Intersection Observer script.
- Sections and grid items should smoothly fade-in and slide-up as the user scrolls.
- **Staggered Delays**: Add stagger delays to grid children (e.g., `100ms` between items) so they cascade into view sequentially rather than all at once.

---

# 6. DYNAMIC UI ELEMENTS

- **Animated Metric Counters**: For statistics like "GPA 3.73" or "15+ Certifications", implement a JavaScript count-up animation that triggers when scrolled into view.
- **Live WIB Clock**: Add a real-time ticking clock in the footer formatted for the WIB timezone.
- **System Diagnostics**: Include terminal-like status text in the footer (e.g., `SYSTEM: MODEL INFERENCE READY`) with a pulsing neon green dot.

---

# 7. CONTENT STRUCTURE

Preserve the following semantic sections while applying the new design system:
1. **Hero**: Striking introduction, animated portrait, gradient text.
2. **Metrics Bar**: Quick numeric highlights.
3. **Marquee Ticker**: Infinite scrolling technical keywords.
4. **About**: Personal narrative and an expandable 10-step "Interactive Research → Engineering Pipeline".
5. **Projects**: Filterable grid featuring case studies like *EEG GMM-HMM*, *Jatim Park Crowd Counting*, etc.
6. **Experience**: Timeline format.
7. **Skills**: Bento grid with technical tags.
8. **Achievements**: Spotlight awards and verified certifications.
9. **Contact**: Simple, accessible links with a "Copy to Clipboard" email button.

---

# 8. FINAL QUALITY BAR

The finished website should make these statements visually obvious:
> This is a high-end, bespoke portfolio.
> The developer possesses strong UI/UX sensibilities alongside their AI engineering skills.
> The interface is dynamic, responsive, and meticulously polished.

Do NOT produce a standard, rigid bootstrap-style template. The design MUST wow the user at first glance.
