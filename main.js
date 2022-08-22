const mobileNav = document.querySelector(".mobile-navbar-btn");
const navHeader = document.querySelector(".header");
function toggleNavbar(){
    navHeader.classList.toggle("active")
}
mobileNav.addEventListener("click", toggleNavbar)

const navbarLink = document.querySelectorAll(".navbar-link");
navbarLink.forEach(n => n.addEventListener("click", function (){
    navHeader.classList.remove("active");
}))