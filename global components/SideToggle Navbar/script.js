const Navbar = document.getElementById("Navbar");
const menuToggle = document.getElementById("menuToggle");
menuToggle.addEventListener("click", () => {
    Navbar.classList.toggle("active")
})