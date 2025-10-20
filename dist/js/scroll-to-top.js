window.addEventListener("DOMContentLoaded", () => {
  let scroll = document.querySelector('.scrollToTop');
  window.addEventListener('scroll', function() {
    scroll.classList.toggle("active", window.scrollY > 500);
  });
  scroll.onclick = function() { window.scrollTo({ top: 0, behavior: 'smooth' }); }
});