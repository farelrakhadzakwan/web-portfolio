/**
 * Email Copy Module
 * Copies email address to clipboard on click with clear visual feedback state.
 */
export function initEmailCopy() {
  const emailCopyBtn = document.getElementById('emailCopyBtn');
  if (!emailCopyBtn) return;

  emailCopyBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const email = emailCopyBtn.getAttribute('data-email') || 'professionalfarelrakhad@gmail.com';
    const textSpan = emailCopyBtn.querySelector('.email-btn-text');

    navigator.clipboard.writeText(email).then(() => {
      if (textSpan) textSpan.textContent = '✓ Copied!';
      emailCopyBtn.classList.add('border-accent-green', 'text-accent-green', 'bg-accent-green/10');

      setTimeout(() => {
        if (textSpan) textSpan.textContent = 'Email';
        emailCopyBtn.classList.remove('border-accent-green', 'text-accent-green', 'bg-accent-green/10');
      }, 2200);
    }).catch(() => {
      window.location.href = `mailto:${email}`;
    });
  });
}
