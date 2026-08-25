export function initExperience() {
  const toggleBtns = document.querySelectorAll('.exp-toggle-btn');

  toggleBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const card = btn.closest('article');
      if (!card) return;

      const details = card.querySelector('.exp-details');
      const chevron = btn.querySelector('.chevron-icon');
      const toggleText = btn.querySelector('.toggle-text');

      if (!details) return;

      const isExpanded = btn.getAttribute('aria-expanded') === 'true';

      if (isExpanded) {
        // Minimize / Hide points
        details.classList.add('hidden');
        btn.setAttribute('aria-expanded', 'false');
        if (chevron) chevron.classList.remove('rotate-180');
        if (toggleText) toggleText.textContent = 'Show Details';
      } else {
        // Expand / Show points
        details.classList.remove('hidden');
        btn.setAttribute('aria-expanded', 'true');
        if (chevron) chevron.classList.add('rotate-180');
        if (toggleText) toggleText.textContent = 'Hide Details';
      }
    });
  });
}
