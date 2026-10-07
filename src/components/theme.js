/**
 * Theme Controller Module
 * Manages industrial laboratory surface modes:
 * - 'paper': Warm Paper (#F4F1EA / #E8E3D8) with Carbon Black ink
 * - 'carbon': Carbon Black (#111111) terminal with Warm Paper annotations
 */
export function initTheme() {
  const root = document.documentElement;
  const themeToggle = document.getElementById('themeToggle');
  const themeModeText = document.getElementById('themeModeText');

  // Check saved theme or default to 'paper'
  const savedTheme = localStorage.getItem('lab_theme') || 'paper';
  setTheme(savedTheme);

  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const currentTheme = root.getAttribute('data-theme') || 'paper';
      const newTheme = currentTheme === 'carbon' ? 'paper' : 'carbon';
      setTheme(newTheme);
    });
  }

  function setTheme(theme) {
    root.setAttribute('data-theme', theme);
    localStorage.setItem('lab_theme', theme);

    if (themeToggle) {
      themeToggle.setAttribute('aria-label', `Switch to ${theme === 'carbon' ? 'Warm Paper' : 'Carbon Black'} theme`);
    }

    if (themeModeText) {
      themeModeText.textContent = theme === 'carbon' ? 'CARBON' : 'PAPER';
    }

    // Update meta theme-color for mobile address bar
    const metaThemeColor = document.querySelector('meta[name="theme-color"]');
    if (metaThemeColor) {
      metaThemeColor.setAttribute('content', theme === 'carbon' ? '#111111' : '#F4F1EA');
    }
  }
}
