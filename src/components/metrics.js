/**
 * Metrics Counter Module
 * Smooth count-up animation for performance indicator numbers (GPA, project counts, awards).
 * Respects prefers-reduced-motion setting and preserves accessible initial text.
 */
export function initMetrics() {
  const metricEls = document.querySelectorAll('.metric-value[data-value]');
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function animateCounter(el) {
    const target = el.getAttribute('data-value');
    if (!target) return;

    if (prefersReduced || target.includes('Place') || target.includes('Top') || target === '—') {
      el.textContent = target;
      return;
    }

    const isDecimal = target.includes('.');
    const numericPart = parseFloat(target.replace(/[^0-9.]/g, ''));
    if (isNaN(numericPart)) {
      el.textContent = target;
      return;
    }

    const suffix = target.replace(/[0-9.]/g, '');
    const duration = 1200;
    const start = performance.now();

    function update(now) {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3); // Cubic ease out
      const current = numericPart * eased;

      if (isDecimal) {
        el.textContent = current.toFixed(2) + suffix;
      } else {
        el.textContent = Math.floor(current) + suffix;
      }

      if (progress < 1) {
        requestAnimationFrame(update);
      } else {
        el.textContent = target;
      }
    }
    requestAnimationFrame(update);
  }

  const metricObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        metricObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  metricEls.forEach(el => metricObserver.observe(el));
}
