  document.addEventListener("DOMContentLoaded", function () {
    const toggle = document.querySelector(".menu-toggle");
    const navList = document.querySelector(".nav-list");

    toggle.addEventListener("click", () => {
      navList.classList.toggle("active");
    });
  });