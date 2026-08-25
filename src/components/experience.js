export function initExperience() {
  const experienceCards = document.querySelectorAll('#experience article');

  experienceCards.forEach(card => {
    const btn = card.querySelector('.exp-toggle-btn');
    const details = card.querySelector('.exp-details');
    const chevron = card.querySelector('.chevron-icon');
    const toggleText = card.querySelector('.toggle-text');

    if (!details) return;

    function toggleCard(e) {
      // Avoid double toggling if clicked directly on a link inside card
      if (e.target.closest('a')) return;

      const isExpanded = btn.getAttribute('aria-expanded') === 'true';

      if (isExpanded) {
        // Minimize (Hide bullet points smoothly)
        details.classList.remove('grid-rows-[1fr]', 'opacity-100');
        details.classList.add('grid-rows-[0fr]', 'opacity-0');
        btn.setAttribute('aria-expanded', 'false');
        if (chevron) chevron.classList.remove('rotate-180');
        if (toggleText) toggleText.textContent = 'Show Details';
      } else {
        // Expand (Show bullet points smoothly)
        details.classList.remove('grid-rows-[0fr]', 'opacity-0');
        details.classList.add('grid-rows-[1fr]', 'opacity-100');
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
