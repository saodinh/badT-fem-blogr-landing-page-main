const dropdownBtns = document.querySelectorAll("#dropdown-toggle");
const dropdowns = document.querySelectorAll(".dropdown");
const hamburgerBtn = document.querySelector(".hamburger");
const headerNav = document.querySelector(".header-nav");

document.querySelector(".nav-list").addEventListener("click", (e) => {
    dropdownBtns.forEach((btn) => btn.closest(".dropdown").classList.remove("show"));
    if (e.target.classList.contains("dropdown-toggle")) {
        e.target.closest(".dropdown").classList.toggle("show");
    }
});

document.addEventListener("click", (e) => {
    if (!e.target.classList.contains("dropdown-toggle")) {
        dropdowns.forEach((dropdown) => dropdown.classList.remove("show"));
    }
});

hamburgerBtn.addEventListener("click", () => {
    headerNav.classList.toggle("mobile-show");
});
