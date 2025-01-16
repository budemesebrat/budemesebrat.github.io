"use strict";
////// MOBILE-NAVIGATION //////
const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector("#nav-bar");

btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});

const allLinks = document.querySelectorAll(".lin");

allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    if (link.classList.contains("lin")) headerEl.classList.toggle("nav-open");
  });
});

////// COUNTDOWN //////
const countDown = () => {
  const targetDate = new Date("June 28, 2025 13:00:00").getTime();

  const timer = setInterval(() => {
    const now = new Date().getTime();
    const timeLeft = targetDate - now;
    if (timeLeft < 0) {
      clearInterval(timer);
      document.getElementById("countdown").innerHTML = "Odpočet vypršel!";
      return;
    }
    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    document.getElementById("days").innerText = days;
    document.getElementById("hours").innerText = hours;
    document.getElementById("minutes").innerText = minutes;
    document.getElementById("seconds").innerText = seconds;
  }, 1000);
};
countDown();
