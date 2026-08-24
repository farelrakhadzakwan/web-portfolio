/**
 * Matrix Text Scramble Module
 * Micro-interaction scrambling text headers into random tech characters on hover.
 */
export function initScramble() {
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReduced) return;

  const scrambleChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&*';

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
          return scrambleChars[Math.floor(Math.random() * scrambleChars.length)];
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
}
