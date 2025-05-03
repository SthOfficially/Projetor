const sections = document.querySelectorAll('section');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
}, {
  threshold: 0.1
});

sections.forEach(section => {
  observer.observe(section);
});
const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('nav');
const links = document.querySelectorAll('nav ul li a');
const sectionsToScroll = document.querySelectorAll('section[id]');