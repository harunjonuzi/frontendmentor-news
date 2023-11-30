import "/src/scss/style.scss";

const btnOpen = document.querySelector("#btnOpen");
const btnClose = document.querySelector("#btnClose");
const media = window.matchMedia("(width < 69.375em)");
const navContent = document.querySelector(".nav__content");
const navOverlay = document.querySelector(".nav__overlay");
const body = document.querySelector("body");

function openMobileMenu() {
  btnOpen.setAttribute("aria-expanded", "true");
  body.classList.add("noscroll");
}
function closeMobileMenu() {
  btnOpen.setAttribute("aria-expanded", "false");
  body.classList.remove("noscroll");
}
btnOpen.addEventListener("click", openMobileMenu);
btnClose.addEventListener("click", closeMobileMenu);

function setupNav(e) {
  if (e.matches) {
    // mobile
    console.log("is mobile");
    setTimeout(() => {
      navContent.style.display = "block";
      navOverlay.style.display = "block";
    }, 500);
  } else {
    // desktop
    console.log("is desktop");
    navContent.style.display = "";
    navOverlay.style.display = "none";
  }
}

setupNav(media);

media.addEventListener("change", function (e) {
  setupNav(e);
});

// Accessibility features
// - We don't want to select items with tab that are not shown on the screen, with this code when we press tab we can select the closebtn and the menu links that are not even visible on the screen
document.addEventListener("keyup", (e) => {
  if (e.key == "Tab") {
    console.log(document.activeElement);
  }
});
