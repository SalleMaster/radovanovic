// Navbar Toggle
burgerMenu = document.querySelector('.burger-menu');
menuResponsive = document.querySelector('.menu-responsive');
links = document.querySelectorAll('.link');

const toggleNavbar = () => {
  burgerMenu.classList.toggle('active');
  menuResponsive.classList.toggle('active');
};

const removeNavbar = () => {
  burgerMenu.classList.remove('active');
  menuResponsive.classList.remove('active');
};

burgerMenu.addEventListener('click', toggleNavbar);
links.forEach((link) => {
  link.addEventListener('click', removeNavbar);
});

// GSAP Hero Animation
window.addEventListener('load', (event) => {
  var tl = gsap.timeline();

  tl.to('.loading-anim1', { duration: 1, opacity: 0 })
    .to('.loading-anim2', { duration: 0.5, opacity: 1 })
    .to('.loading-anim2', { duration: 0.5, opacity: 0 })
    .to('.loading-screen', { duration: 1, scaleY: 0 })
    .from('.header-anim1', { duration: 1, opacity: 0 })
    .from('.header-anim2-overlay', { duration: 2, scaleY: 1 })
    .from('.header-anim3', { duration: 0.7, opacity: 0 })
    .from('.header-anim4', { duration: 0.7, opacity: 0 })
    .from('.header-anim5', { duration: 2, opacity: 0 }, '-=1.4');

  const html = document.querySelector('html');

  setTimeout(() => {
    html.style.overflow = 'auto';
  }, 2000);
});
