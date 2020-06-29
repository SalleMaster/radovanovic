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
