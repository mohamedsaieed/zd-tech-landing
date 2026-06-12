const dashboard = document.querySelector(".dashboard-card");
const loginCard = document.querySelector(".login-card");

document.addEventListener("mousemove", (e) => {
  if (!dashboard || !loginCard) return;

  const x = (window.innerWidth / 2 - e.clientX) / 45;
  const y = (window.innerHeight / 2 - e.clientY) / 45;

  dashboard.style.transform =
    `perspective(1000px) rotateY(${-14 + x}deg) rotateX(${5 + y}deg)`;

  loginCard.style.transform =
    `perspective(1000px) rotateY(${14 - x}deg) rotateX(${8 - y}deg)`;
});

const cards = document.querySelectorAll(".service-card, .analytics-card");

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
}, { threshold: 0.2 });

cards.forEach(card => observer.observe(card));