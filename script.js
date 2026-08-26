// ==============================
// WEDDING INVITATION SETTINGS
// Change the wedding date here.
// Format: YYYY-MM-DDTHH:MM:SS
// ==============================
const weddingDate = new Date("2026-12-12T16:00:00");

const pageLoader = document.getElementById("pageLoader");

window.addEventListener("load", () => {
  setTimeout(() => pageLoader.classList.add("hidden"), 450);
});

const countdownEls = {
  days: document.getElementById("days"),
  hours: document.getElementById("hours"),
  minutes: document.getElementById("minutes"),
  seconds: document.getElementById("seconds")
};

function updateCountdown() {
  const now = new Date();
  const diff = weddingDate - now;

  if (diff <= 0) {
    countdownEls.days.textContent = "0";
    countdownEls.hours.textContent = "0";
    countdownEls.minutes.textContent = "0";
    countdownEls.seconds.textContent = "0";
    return;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  countdownEls.days.textContent = days;
  countdownEls.hours.textContent = hours.toString().padStart(2, "0");
  countdownEls.minutes.textContent = minutes.toString().padStart(2, "0");
  countdownEls.seconds.textContent = seconds.toString().padStart(2, "0");
}

updateCountdown();
setInterval(updateCountdown, 1000);

// Reveal on scroll
const revealElements = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);

revealElements.forEach(el => observer.observe(el));

// Mobile nav
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("open");
  document.body.classList.toggle("menu-open");
  menuBtn.textContent = navLinks.classList.contains("open") ? "✕" : "☰";
});

navLinks.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    document.body.classList.remove("menu-open");
    menuBtn.textContent = "☰";
  });
});

// OPTIONAL PHOTO HELPER
// Put your files inside assets/images and then add the names below.
// You can delete this section and use regular <img> tags instead.

const photoMap = [
  ["assets/images/first-date.jpg", 0],
  ["assets/images/couple.jpg", 1],
  ["assets/images/proposal.jpg", 2],
  ["assets/images/venue.jpg", 3]
];

const placeholders = document.querySelectorAll(".placeholder-photo");

photoMap.forEach(([url, index]) => {
  const img = new Image();

  img.onload = () => {
    if (placeholders[index]) {
      placeholders[index].style.backgroundImage = `url("${url}")`;
      placeholders[index].classList.add("has-image");
    }
  };

  img.src = url;
});
