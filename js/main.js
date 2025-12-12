// Parallax / Fade Hero-Visual
const heroVisual = document.getElementById("hero-visual");
window.addEventListener("scroll", () => {
  const scrollY = window.scrollY || window.pageYOffset;
  const max = 320;
  const progress = Math.min(scrollY / max, 1);
  if (heroVisual) {
    heroVisual.style.transform =
      `scale(${1 + progress * 0.05}) translateY(${progress * 18}px)`;
    heroVisual.style.opacity = String(1 - progress * 0.75);
  }
});

// Scroll-Fade-In
const fadeElements = document.querySelectorAll(".fade-in");
const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in-view");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 }
);
fadeElements.forEach(el => observer.observe(el));

// Footer Year
const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = new Date().getFullYear();

// Mobile Nav Toggle
const navToggle = document.getElementById("navToggle");
const navLinks = document.getElementById("navLinks");

if (navToggle && navLinks) {
  navToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });

  // Close menu on link click (mobile)
  navLinks.querySelectorAll("a").forEach(a => {
    a.addEventListener("click", () => {
      navLinks.classList.remove("open");
      navToggle.setAttribute("aria-expanded", "false");
    });
  });
}