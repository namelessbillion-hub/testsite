// Fade in the main content on load
window.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('main, header, footer').forEach(el => {
    el.classList.add('fade-in');
  });
});