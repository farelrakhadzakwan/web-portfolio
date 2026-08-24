/**
 * Live Clock Module
 * Displays real-time clock synchronized with WIB timezone in the footer diagnostic bar.
 */
export function initLiveClock() {
  const liveClock = document.getElementById('liveClock');
  if (!liveClock) return;

  function updateClock() {
    const now = new Date();
    // Convert to WIB (UTC+7)
    const options = { timeZone: 'Asia/Jakarta', hour12: false, hour: '2-digit', minute: '2-digit', second: '2-digit' };
    const timeStr = new Intl.DateTimeFormat('en-GB', options).format(now);
    liveClock.textContent = `${timeStr} WIB`;
  }

  setInterval(updateClock, 1000);
  updateClock();
}
