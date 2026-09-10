// Keep the footer copyright year up to date automatically.
const yearEl = document.querySelector("footer p");
if (yearEl) {
  const year = new Date().getFullYear();
  yearEl.textContent = `© ${year} Rahul Nashier`;
}

// Mobile nav toggle.
const navToggle = document.getElementById("navToggle");
const navLinks = document.getElementById("navLinks");

if (navToggle && navLinks) {
  navToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });

  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("open");
      navToggle.setAttribute("aria-expanded", "false");
    });
  });
}

// Close the mobile nav when Escape is pressed.
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && navLinks.classList.contains("open")) {
    navLinks.classList.remove("open");
    navToggle.setAttribute("aria-expanded", "false");
    navToggle.focus();
  }
});


// Highlight the nav link for the section currently in view.
const sections = document.querySelectorAll("main section[id]");
const navAnchors = navLinks ? navLinks.querySelectorAll("a") : [];
if (sections.length && navAnchors.length && "IntersectionObserver" in window) {
  const spyObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      navAnchors.forEach((link) => {
        const isActive = link.getAttribute("href") === `#${entry.target.id}`;
        link.classList.toggle("active", isActive);
      });
    });
  }, { rootMargin: "-50% 0px -50% 0px" });
  sections.forEach((section) => spyObserver.observe(section));
}
