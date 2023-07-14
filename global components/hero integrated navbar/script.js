const Navbar = document.getElementById("Navbar");
const menuToggle = document.getElementById("menuToggle");
console.log(window);

document.addEventListener("scroll", () => {
  if (window.scrollY > 10) {
    Navbar.classList.add("stickyNavbar");
  } else {
    Navbar.classList.remove("stickyNavbar");
  }
});
menuToggle.addEventListener("click",()=>{
  Navbar.classList.toggle("active")
})