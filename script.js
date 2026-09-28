// =============================
// D' SOCIETY — INTERACTIONS
// =============================

// 1) Animated "D........" typing-style dots
const dots = document.getElementById("dots");
let dotCount = 0;

function animateDots() {
  dotCount = (dotCount + 1) % 9;
  dots.textContent = ".".repeat(dotCount);
}

setInterval(animateDots, 260);
animateDots();

// 2) Restricted navigation popup
const modal = document.getElementById("crewModal");
const closeBtn = document.getElementById("modalClose");
const okayBtn = document.getElementById("modalOkay");
const restrictedLinks = document.querySelectorAll(".restricted");

function openModal(event) {
  if (event) event.preventDefault();
  modal.classList.add("show");
  modal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
  closeBtn.focus();
}

function closeModal() {
  modal.classList.remove("show");
  modal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

restrictedLinks.forEach((link) => {
  link.addEventListener("click", openModal);
});

closeBtn.addEventListener("click", closeModal);
okayBtn.addEventListener("click", closeModal);

modal.addEventListener("click", (event) => {
  if (event.target === modal) closeModal();
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && modal.classList.contains("show")) {
    closeModal();
  }
});

// 3) Ask D' button → Google Form
// IMPORTANT: Replace this URL with your actual Google Form link.
const GOOGLE_FORM_URL = "https://forms.gle/C2jQdxv65QrvztJT7";

document.getElementById("askButton").addEventListener("click", () => {
  window.open(GOOGLE_FORM_URL, "_blank", "noopener,noreferrer");
});

// 4) Mobile menu
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
});

document.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
  });
});
