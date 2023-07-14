let anchorTags = document.querySelectorAll(".menu li a");
  const navigation = document.getElementById("navigation");
  const offFunc = () => {
    navigation.classList.remove("active");
  };
  for (let i = 0; i < anchorTags.length; i++) {
    anchorTags[i].addEventListener("click", offFunc);
  }
const ToggleMenu = () => {
  navigation.classList.toggle("active");
};
