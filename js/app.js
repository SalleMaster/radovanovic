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

  // tl.to('.loading-anim1', { duration: 1, opacity: 0 })
  //   .to('.loading-anim2', { duration: 0.5, opacity: 1 })
  //   .to('.loading-anim2', { duration: 0.5, opacity: 0 })
  //   .to('.loading-screen', { duration: 1, scaleY: 0 })
  //   .from('.header-anim1', { duration: 1, opacity: 0 })
  //   .from('.header-anim2-overlay', { duration: 2, scaleY: 1 })
  //   .from('.header-anim3', { duration: 0.7, opacity: 0 })
  //   .from('.header-anim4', { duration: 0.7, opacity: 0 })
  //   .from('.header-anim5', { duration: 2, opacity: 0 }, '-=1.4');

  tl.to('.loading-anim1', { duration: 1, opacity: 0 })
    .to('.loading-anim2', { duration: 0.5, opacity: 1 })
    .to('.loading-anim2', { duration: 0.5, opacity: 0 })
    .to('.loading-screen', { duration: 1, scaleY: 0 })
    .from('.header-anim1', { duration: 1, opacity: 0 })
    .from('.header-anim2-overlay', { duration: 2, scaleY: 1 }, '-=1')
    .from('.header-anim3', { duration: 1, opacity: 0 }, '-=2')
    .from('.header-anim4', { duration: 1, opacity: 0 }, '-=2')
    .from('.header-anim5', { duration: 2, opacity: 0 }, '-=2');

  const html = document.querySelector('html');

  setTimeout(() => {
    html.style.overflow = 'auto';
  }, 2000);
});

// Fade In Left & Right
// const fadeInLeft = document.querySelectorAll('.fade-in-left');
// const fadeInRight = document.querySelectorAll('.fade-in-right');

// fadeInLeft.forEach((fadeIn) => {
//   gsap.from(fadeIn, {
//     scrollTrigger: {
//       // markers: true,
//       trigger: fadeIn,
//       start: 'bottom bottom', // when the Bottom of the trigger hits the Bottom of the viewport
//     },
//     duration: 3,
//     ease: 'power4.out',
//     opacity: '0',
//   });
// });

// fadeInRight.forEach((fadeIn) => {
//   gsap.from(fadeIn, {
//     scrollTrigger: {
//       trigger: fadeIn,
//       start: 'bottom bottom', // when the Bottom of the trigger hits the Bottom of the viewport
//     },
//     duration: 3,
//     ease: 'power4.out',
//     opacity: '0',
//   });
// });

// Basic Fade In
const fadeIn = document.querySelectorAll('.fade-in');

fadeIn.forEach((fade) => {
  gsap.from(fade, {
    scrollTrigger: {
      trigger: fade,
      start: 'bottom bottom', // when the Bottom of the trigger hits the Bottom of the viewport
    },
    duration: 3,
    ease: 'power4.out',
    opacity: '0',
  });
});
