// Keep the footer copyright year up to date automatically.
const yearEl = document.querySelector("footer p");
if (yearEl) {
  const year = new Date().getFullYear();
  yearEl.textContent = `© ${year} Rahul Nashier`;
}
