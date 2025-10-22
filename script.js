const menuButton = document.querySelector(".menu-btn");
const menuButtonImg = document.querySelector(".menu-btn img");
const menuList = document.querySelector("nav ul");

menuButton.addEventListener("click", () => {
  if (menuButtonImg.src.includes("icon-menu.svg")) {
    menuList.style.transform = "translateX(0)";
    menuButtonImg.src = "assets/images/icon-menu-close.svg";
  } else {
    menuList.style.transform = "translateX(100%)";
    menuButtonImg.src = "assets/images/icon-menu.svg";
  }
});
