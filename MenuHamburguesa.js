document.addEventListener("DOMContentLoaded", function () {
  const toggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".nav");

  toggle.addEventListener("click", () => {
    nav.classList.toggle("active");
  });
});