const mobileNav = document.querySelector(".mobile-navbar-btn");
const navHeader = document.querySelector(".header");
function toggleNavbar(){
    navHeader.classList.toggle("active")
}
mobileNav.addEventListener("click", toggleNavbar)