// ==============================
// WEDDING INVITATION SETTINGS
// ==============================

// Change the wedding date here.
const weddingDate = new Date("2026-12-12T16:00:00");

// Paste your real RSVP form link here.
// Example: "https://docs.google.com/forms/d/e/FORM_ID/viewform"
const RSVP_BASE_URL = "https://forms.google.com/";

// Personalized invitation URL format:
// https://YOURUSERNAME.github.io/YOUR-REPO/?guest=Rawat%20Family&id=RF001
//
// guest = guest or family name
// id    = optional invitation ID
//
// Examples:
// ?guest=Rawat%20Family&id=RF001
// ?guest=Rahul%20and%20Priya&id=RP002
// ?guest=Mr.%20and%20Mrs.%20Sharma&id=MS003

const params = new URLSearchParams(window.location.search);
const guest = (params.get("guest") || "").trim();
const inviteId = (params.get("id") || "").trim();

const guestNameEl = document.getElementById("guestName");
const inviteCodeWrap = document.getElementById("inviteCodeWrap");
const inviteCodeEl = document.getElementById("inviteCode");
const heroMessage = document.getElementById("heroMessage");
const rsvpButton = document.getElementById("rsvpButton");

// Safe fallback if someone opens the normal site URL.
if (guest) {
  guestNameEl.textContent = guest;

  heroMessage.textContent =
    `would be honoured to celebrate the beginning of our forever with you, ${guest}.`;

  // Give the page title a personalized touch.
  document.title = `Ayushi & Ishant | Invitation for ${guest}`;
} else {
  guestNameEl.textContent = "Our Family & Friends";
  heroMessage.textContent =
    "would be honoured to celebrate the beginning of our forever with you.";
}

if (inviteId) {
  inviteCodeEl.textContent = inviteId;
  inviteCodeWrap.hidden = false;
}

// Carry guest and invite ID into the RSVP link.
// This works immediately as URL parameters. If your RSVP platform supports
// prefilling, you can later map these to its exact field names.
const rsvpUrl = new URL(RSVP_BASE_URL);

if (guest) {
  rsvpUrl.searchParams.set("guest", guest);
}

if (inviteId) {
  rsvpUrl.searchParams.set("invite_id", inviteId);
}

rsvpButton.href = rsvpUrl.toString();

// ==============================
// PAGE LOADER
// ==============================
const pageLoader = document.getElementById("pageLoader");

window.addEventListener("load", () => {
  setTimeout(() => pageLoader.classList.add("hidden"), 450);
});

// ==============================
// COUNTDOWN
// ==============================
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

// ==============================
// REVEAL ON SCROLL
// ==============================
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

// ==============================
// MOBILE NAVIGATION
// ==============================
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

// ==============================
// OPTIONAL PHOTO HELPER
// ==============================
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
