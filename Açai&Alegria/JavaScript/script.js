// Animação ao rolar
window.addEventListener('scroll', () => {
  document.querySelectorAll('section').forEach(sec => {
    const top = window.scrollY;
    const offset = sec.offsetTop - 400;
    const height = sec.offsetHeight;

    if (top >= offset && top < offset + height) {
      sec.classList.add('show');
    }
  });
});

// Menu hambúrguer
const toggle = document.querySelector(".menu-toggle");
const navList = document.querySelector(".nav-list");

toggle.addEventListener("click", () => {
  navList.classList.toggle("show");
});
