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
  // var rule = CSSRulePlugin.getRule('.header-anim2:after'); //get the rule
  // gsap.to(rule, { duration: 3, cssRule: { color: 'blue' } });

  var tl = gsap.timeline();

  tl.from('.header-anim1', { duration: 1, opacity: 0 })
    .from('.header-anim2', { duration: 2, opacity: 0 })
    .from('.header-anim3', { duration: 0.7, opacity: 0 })
    .from('.header-anim4', { duration: 0.7, opacity: 0 });
  // .from('.header-anim5', { duration: 2, opacity: 0 });
});
