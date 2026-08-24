/**
 * Navigation Module
 * Handles glassmorphism background toggle on scroll, active section highlight,
 * and mobile drawer toggle with full keyboard and accessibility support.
 */
export function initNavigation() {
  const navbar = document.getElementById('navbar');
  const navToggle = document.getElementById('navToggle');
  const navLinks = document.getElementById('navLinks');
  const scrollIndicator = document.getElementById('scrollIndicator');
  const sections = document.querySelectorAll('section[id]');

  // Scroll handler for navbar elevation & scroll indicator
  window.addEventListener('scroll', () => {
    if (navbar) {
      if (window.scrollY > 40) {
        navbar.classList.add('navbar-scrolled', 'py-3');
        navbar.classList.remove('py-5');
      } else {
        navbar.classList.remove('navbar-scrolled', 'py-3');
        navbar.classList.add('py-5');
      }
    }

    if (scrollIndicator) {
      if (window.scrollY > 180) {
        scrollIndicator.classList.add('opacity-0', 'pointer-events-none');
      } else {
        scrollIndicator.classList.remove('opacity-0', 'pointer-events-none');
      }
    }

    updateActiveNav();
  }, { passive: true });

  // Mobile drawer toggle logic
  if (navToggle && navLinks) {
    const toggleMenu = (open) => {
      const isExpanded = open !== undefined ? open : navLinks.classList.contains('hidden');
      if (isExpanded) {
        navLinks.classList.remove('hidden');
        navLinks.classList.add('flex');
        navToggle.setAttribute('aria-expanded', 'true');
        navToggle.setAttribute('aria-label', 'Close menu');
        document.body.style.overflow = 'hidden';
      } else {
        navLinks.classList.add('hidden');
        navLinks.classList.remove('flex');
        navToggle.setAttribute('aria-expanded', 'false');
        navToggle.setAttribute('aria-label', 'Open menu');
        document.body.style.overflow = '';
      }
    };

    navToggle.addEventListener('click', () => toggleMenu());

    // Close mobile menu on clicking any link
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => toggleMenu(false));
    });

    // Close on Escape key press
    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && !navLinks.classList.contains('hidden')) {
        toggleMenu(false);
      }
    });
  }

  // Highlight active menu item based on current scroll position
  function updateActiveNav() {
    const scrollY = window.scrollY + 140;
    sections.forEach(section => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      const id = section.getAttribute('id');
      const link = document.querySelector(`#navLinks a[href="#${id}"]`);
      if (link) {
        if (scrollY >= top && scrollY < top + height) {
          link.classList.add('text-text-primary', 'font-semibold');
          link.classList.remove('text-text-secondary');
          link.setAttribute('aria-current', 'page');
        } else {
          link.classList.remove('text-text-primary', 'font-semibold');
          link.classList.add('text-text-secondary');
          link.removeAttribute('aria-current');
        }
      }
    });
  }
}
