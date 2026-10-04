const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add("visible");
  });
}, { threshold: 0.12 });

document.querySelectorAll(".reveal").forEach(el => observer.observe(el));

const nav = document.querySelector(".nav");
let lastScroll = 0;
window.addEventListener("scroll", () => {
  const y = window.scrollY;
  nav.style.background = y > 20 ? "rgba(0,0,0,.84)" : "rgba(0,0,0,.72)";
  lastScroll = y;
}, { passive: true });
