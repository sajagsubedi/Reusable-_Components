const Navbar = document.getElementById("Navbar");
const menuToggle = document.getElementById("menuToggle");
const hero = document.getElementById("hero");
const heroImg = ["banner1", "banner2", "banner3"];
const labelFlowBar = document.getElementById("labelFlow");
let labelFlowed = 0;
let currentImg = 0;

document.addEventListener("scroll", () => {
  if (window.scrollY > 10) {
    Navbar.classList.add("stickyNavbar");
  } else {
    Navbar.classList.remove("stickyNavbar");
  }
});
menuToggle.addEventListener("click", () => {
  Navbar.classList.toggle("active");
});
const changeImage = (inn) => {
  prevImg = currentImg;
  currentImg = currentImg + inn;
  if (currentImg > 2) {
    currentImg = currentImg - 3;
  } else if (currentImg < 0) {
    currentImg = currentImg + 3;
  }

  hero.classList.remove(heroImg[prevImg]);
  hero.classList.add(heroImg[currentImg]);
  labelFlowed = 0;
};
setInterval(() => {
  labelFlowed = labelFlowed + 1;
  labelFlowBar.style.width = `${labelFlowed}%`;
  if (labelFlowed > 100) {
    changeImage(1);
  }
}, 60);
