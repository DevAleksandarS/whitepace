const mobileBurgerSideNav = document.querySelector(
  ".nav-container-small-screen"
);
const blur = document.querySelector(".blur");

document.querySelector(".burger-menu").addEventListener("click", () => {
  mobileBurgerSideNav.style.transform = "translateX(0)";
  blur.style.visibility = "visible";
  blur.style.opacity = "1";
});

document.querySelector(".exit").addEventListener("click", () => {
  mobileBurgerSideNav.style.transform = "translateX(100%)";
  blur.style.opacity = "0";
  blur.style.visibility = "hidden";
});

blur.addEventListener("click", () => {
  mobileBurgerSideNav.style.transform = "translateX(100%)";
  blur.style.opacity = "0";
  blur.style.visibility = "hidden";
});
