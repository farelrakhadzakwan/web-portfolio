export function initExperience() {
  const experienceCards = document.querySelectorAll('#experience article');

  experienceCards.forEach(card => {
    const btn = card.querySelector('.exp-toggle-btn');
    const bullets = card.querySelector('.exp-bullets');
    const chevron = card.querySelector('.chevron-icon');
    const toggleText = card.querySelector('.toggle-text');

    if (!bullets) return;

    function toggleCard(e) {
      // Avoid double toggling if clicked directly on a link inside card
      if (e.target.closest('a')) return;

      const isExpanded = btn.getAttribute('aria-expanded') === 'true';

      if (isExpanded) {
        // Minimize: Bullet points collapse to 0 height, Impact pill slides up under Scope tag
        bullets.classList.remove('grid-rows-[1fr]', 'opacity-100');
        bullets.classList.add('grid-rows-[0fr]', 'opacity-0');
        btn.setAttribute('aria-expanded', 'false');
        if (chevron) chevron.classList.remove('rotate-180');
        if (toggleText) toggleText.textContent = 'Show Details';
      } else {
        // Expand: Bullet points expand, pushing Impact pill below bullet points
        bullets.classList.remove('grid-rows-[0fr]', 'opacity-0');
        bullets.classList.add('grid-rows-[1fr]', 'opacity-100');
        btn.setAttribute('aria-expanded', 'true');
        if (chevron) chevron.classList.add('rotate-180');
        if (toggleText) toggleText.textContent = 'Hide Details';
      }
    }

    // Toggle on whole card click
    card.addEventListener('click', toggleCard);

    // Support keyboard accessibility (Enter / Space on card or button)
    card.addEventListener('keydown', (e) => {
      if ((e.key === 'Enter' || e.key === ' ') && e.target === card) {
        e.preventDefault();
        toggleCard(e);
      }
    });
  });
}
