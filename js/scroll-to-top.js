(function (){
  "use strict";
  let scroll = document.querySelector('.scrollTop');
  window.addEventListener('scroll', function() {
    scroll.classList.toggle("active", window.scrollY > 500);
  });
  scroll.onclick = function() { window.scrollTo({ top: 0, behavior: 'smooth' }); }
}());

AOS.init({
  offset: 400, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 1000 // values from 0 to 3000, with step 50ms
});