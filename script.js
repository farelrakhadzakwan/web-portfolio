// ========== NAVBAR SCROLL ==========
const navbar = document.querySelector('.navbar');
const scrollIndicator = document.querySelector('.scroll-indicator');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 50);
  if (scrollIndicator) {
    scrollIndicator.classList.toggle('hidden', window.scrollY > 200);
  }
});

// ========== MOBILE MENU ==========
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');
if (navToggle) {
  navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
    const spans = navToggle.querySelectorAll('span');
    if (navLinks.classList.contains('open')) {
      spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
      spans[1].style.opacity = '0';
      spans[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
    } else {
      spans[0].style.transform = '';
      spans[1].style.opacity = '';
      spans[2].style.transform = '';
    }
  });
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      const spans = navToggle.querySelectorAll('span');
      spans[0].style.transform = '';
      spans[1].style.opacity = '';
      spans[2].style.transform = '';
    });
  });
}

// ========== ACTIVE NAV LINK ==========
const sections = document.querySelectorAll('.section[id]');
function updateActiveNav() {
  const scrollY = window.scrollY + 120;
  sections.forEach(section => {
    const top = section.offsetTop;
    const height = section.offsetHeight;
    const id = section.getAttribute('id');
    const link = document.querySelector(`.nav-links a[href="#${id}"]`);
    if (link) {
      if (scrollY >= top && scrollY < top + height) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    }
  });
}
window.addEventListener('scroll', updateActiveNav);

// ========== SCROLL REVEAL WITH STAGGER ==========
function initScrollReveal() {
  const fadeEls = document.querySelectorAll('.fade-in');

  // Group elements by their parent section for staggering
  const sectionGroups = new Map();
  fadeEls.forEach(el => {
    const section = el.closest('.section, .hero, .metrics-bar, .footer');
    const key = section ? section.id || section.className : 'default';
    if (!sectionGroups.has(key)) sectionGroups.set(key, []);
    sectionGroups.get(key).push(el);
  });

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const section = el.closest('.section, .hero, .metrics-bar, .footer');
        const key = section ? section.id || section.className : 'default';
        const group = sectionGroups.get(key) || [];
        const index = group.indexOf(el);

        // Stagger delay: 120ms between siblings
        const delay = index * 120;
        el.style.transitionDelay = `${delay}ms`;
        el.classList.add('visible');

        // Clear delay after animation completes
        setTimeout(() => { el.style.transitionDelay = ''; }, delay + 900);
        observer.unobserve(el);
      }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -60px 0px' });

  fadeEls.forEach(el => observer.observe(el));
}
initScrollReveal();

// Also reveal child cards/items with stagger inside grids
function initGridStagger() {
  const grids = document.querySelectorAll('.skills-grid, .achievements-grid, .projects-grid');
  grids.forEach(grid => {
    const children = grid.children;
    Array.from(children).forEach((child, i) => {
      child.style.opacity = '0';
      child.style.transform = 'translateY(30px)';
      child.style.transition = 'opacity 0.6s cubic-bezier(0.16,1,0.3,1), transform 0.6s cubic-bezier(0.16,1,0.3,1)';
    });

    const obs = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          Array.from(children).forEach((child, i) => {
            setTimeout(() => {
              child.style.opacity = '1';
              child.style.transform = 'translateY(0)';
            }, i * 100);
          });
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    obs.observe(grid);
  });
}
initGridStagger();

// ========== 3D TILT EFFECT ON PROJECT CARDS ==========
function initTiltEffect() {
  const cards = document.querySelectorAll('.project-card, .skill-group, .achievement-card');
  
  cards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = ((y - centerY) / centerY) * -4;
      const rotateY = ((x - centerX) / centerX) * 4;

      card.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = '';
      card.style.transition = 'all 0.5s cubic-bezier(0.16, 1, 0.3, 1)';
      setTimeout(() => { card.style.transition = ''; }, 500);
    });

    card.addEventListener('mouseenter', () => {
      card.style.transition = 'none';
    });
  });
}
initTiltEffect();

// ========== METRIC COUNTER ANIMATION ==========
function animateCounter(el) {
  const target = el.getAttribute('data-value');
  const isDecimal = target.includes('.');
  const isRatio = target.includes('/');
  
  if (isRatio || target.includes('Place') || target.includes('Top')) {
    el.textContent = target;
    return;
  }
  
  const numericPart = parseFloat(target.replace(/[^0-9.]/g, ''));
  const suffix = target.replace(/[0-9.]/g, '');
  const duration = 1500;
  const start = performance.now();
  
  function update(now) {
    const elapsed = now - start;
    const progress = Math.min(elapsed / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    const current = numericPart * eased;
    
    if (isDecimal) {
      el.textContent = current.toFixed(2) + suffix;
    } else {
      el.textContent = Math.floor(current) + suffix;
    }
    if (progress < 1) requestAnimationFrame(update);
    else el.textContent = target;
  }
  requestAnimationFrame(update);
}

const metricEls = document.querySelectorAll('.metric-value[data-value]');
const metricObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      animateCounter(entry.target);
      metricObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 });
metricEls.forEach(el => metricObserver.observe(el));

// ========== PROJECT FILTER ==========
const filterBtns = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card[data-category]');

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const filter = btn.getAttribute('data-filter');
    
    projectCards.forEach(card => {
      const categories = card.getAttribute('data-category').split(',');
      if (filter === 'all' || categories.includes(filter)) {
        card.style.display = '';
        card.style.animation = 'fadeUp 0.4s ease forwards';
      } else {
        card.style.display = 'none';
      }
    });
  });
});

// Fade up keyframes
const style = document.createElement('style');
style.textContent = `
  @keyframes fadeUp {
    from { opacity: 0; transform: translateY(16px); }
    to { opacity: 1; transform: translateY(0); }
  }
`;
document.head.appendChild(style);

// ========== INTERACTIVE PIPELINE ==========
const pipelineSteps = document.querySelectorAll('.pipeline-step[data-step]');
const pipelineStepNum = document.getElementById('pipelineStepNum');
const pipelineStepTitle = document.getElementById('pipelineStepTitle');
const pipelineStepDesc = document.getElementById('pipelineStepDesc');
const pipelineStepTools = document.getElementById('pipelineStepTools');

pipelineSteps.forEach(step => {
  step.addEventListener('click', () => {
    pipelineSteps.forEach(s => s.classList.remove('active'));
    step.classList.add('active');
    const stepNum = step.getAttribute('data-step');
    const title = step.getAttribute('data-title');
    const detail = step.getAttribute('data-detail');
    const tools = step.getAttribute('data-tools');
    
    if (pipelineStepNum) pipelineStepNum.textContent = `STEP ${stepNum}`;
    if (pipelineStepTitle) pipelineStepTitle.textContent = title;
    if (pipelineStepDesc) pipelineStepDesc.textContent = detail;
    if (pipelineStepTools) pipelineStepTools.textContent = `Tools: ${tools}`;
  });
});

// Pipeline Expand/Minimize Toggle
const pipelineToggleBtn = document.getElementById('pipelineToggleBtn');
const pipelineStepsWrapper = document.getElementById('pipelineStepsWrapper');
if (pipelineToggleBtn && pipelineStepsWrapper) {
  pipelineToggleBtn.addEventListener('click', () => {
    const isExpanded = pipelineStepsWrapper.classList.contains('expanded');
    const toggleLabel = pipelineToggleBtn.querySelector('.toggle-label');
    
    if (isExpanded) {
      pipelineStepsWrapper.classList.remove('expanded');
      pipelineStepsWrapper.classList.add('collapsed');
      pipelineToggleBtn.classList.remove('expanded');
      if (toggleLabel) toggleLabel.textContent = 'Expand (10 Steps)';
      pipelineToggleBtn.setAttribute('aria-expanded', 'false');
    } else {
      pipelineStepsWrapper.classList.remove('collapsed');
      pipelineStepsWrapper.classList.add('expanded');
      pipelineToggleBtn.classList.add('expanded');
      if (toggleLabel) toggleLabel.textContent = 'Minimize';
      pipelineToggleBtn.setAttribute('aria-expanded', 'true');
    }
  });
}

// ========== LIVE CLOCK ==========
const liveClock = document.getElementById('liveClock');
function updateClock() {
  if (!liveClock) return;
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, '0');
  const mins = String(now.getMinutes()).padStart(2, '0');
  const secs = String(now.getSeconds()).padStart(2, '0');
  liveClock.textContent = `${hours}:${mins}:${secs} WIB`;
}
setInterval(updateClock, 1000);
updateClock();

// ========== MATRIX / CYBER SCRAMBLE EFFECT ==========
const scrambleLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&*';
function scrambleText(element) {
  const originalText = element.getAttribute('data-original') || element.textContent;
  if (!element.getAttribute('data-original')) {
    element.setAttribute('data-original', originalText);
  }
  let iteration = 0;
  clearInterval(element.scrambleInterval);
  
  element.scrambleInterval = setInterval(() => {
    element.textContent = originalText
      .split('')
      .map((char, index) => {
        if (index < iteration || char === ' ' || char === '—') {
          return originalText[index];
        }
        return scrambleLetters[Math.floor(Math.random() * scrambleLetters.length)];
      })
      .join('');
      
    if (iteration >= originalText.length) {
      clearInterval(element.scrambleInterval);
    }
    iteration += 1 / 2;
  }, 30);
}

document.querySelectorAll('.section-title, .project-type').forEach(el => {
  el.addEventListener('mouseenter', () => scrambleText(el));
});

// ========== COPY EMAIL TO CLIPBOARD ==========
const emailCopyBtn = document.getElementById('emailCopyBtn');
if (emailCopyBtn) {
  emailCopyBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const email = emailCopyBtn.getAttribute('data-email') || 'professionalfarelrakhad@gmail.com';
    const textSpan = emailCopyBtn.querySelector('.email-btn-text');
    
    navigator.clipboard.writeText(email).then(() => {
      if (textSpan) textSpan.textContent = '✓ Copied!';
      emailCopyBtn.classList.add('copied');
      
      setTimeout(() => {
        if (textSpan) textSpan.textContent = 'Email';
        emailCopyBtn.classList.remove('copied');
      }, 2000);
    }).catch(err => {
      window.location.href = `mailto:${email}`;
    });
  });
}

// ========== GLOW FOLLOW ON HOVER ==========
function initGlowFollow() {
  const cards = document.querySelectorAll('.project-card, .skill-group');
  cards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      card.style.setProperty('--glow-x', `${x}px`);
      card.style.setProperty('--glow-y', `${y}px`);
    });
  });
}
initGlowFollow();
