/**
 * Projects Module
 * Category filter buttons and smooth visual transitions for project cards.
 */
export function initProjects() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card[data-category]');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => {
        b.classList.remove('active', 'border-accent-blue', 'bg-accent-blue/10', 'text-text-primary');
        b.classList.add('border-border-subtle', 'text-text-secondary');
        b.setAttribute('aria-selected', 'false');
      });

      btn.classList.add('active', 'border-accent-blue', 'bg-accent-blue/10', 'text-text-primary');
      btn.classList.remove('border-border-subtle', 'text-text-secondary');
      btn.setAttribute('aria-selected', 'true');

      const filter = btn.getAttribute('data-filter');

      projectCards.forEach(card => {
        const categories = card.getAttribute('data-category').split(',');
        if (filter === 'all' || categories.includes(filter)) {
          card.style.display = '';
          card.classList.remove('hidden');
        } else {
          card.style.display = 'none';
          card.classList.add('hidden');
        }
      });
    });
  });
}
