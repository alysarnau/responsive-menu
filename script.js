const links = document.querySelectorAll(".nav-list li a");
const rootElement = document.documentElement;
const newsletter = document.querySelector(".newsletter")
window.onscroll = () => scrollProgress()



for (link of links) {
  link.addEventListener("click", smoothScroll);
}

function smoothScroll(e) {
  e.preventDefault();
  const href = this.getAttribute("href");
  document.querySelector(href).scrollIntoView({
    behavior: "smooth",
  });
  hideMenu();
}

// RESPONSIVE MOBILE MENU
const menu = document.querySelector(".nav-list");
const hamburger = document.querySelector(".hamburger");
const close = document.querySelector(".close");
const menuWrapper = document.querySelector(".nav-wrapper");

const showMenu = () => {
    hamburger.style.display = "none";
    close.style.transform = "translateY(0)";
    menuWrapper.style.transform = "translateX(0)";
    menu.style.transform = "translateX(0)";

};

const hideMenu = () => {
    close.style.transform = "translateY(-20rem)";
    hamburger.style.display = "block";
    menuWrapper.style.transform = "translateX(-200%)";
    menu.style.transform = "translateX(200%)";
    subMenuThree.style.transform = "translateX(-100%)";
};

hamburger.addEventListener("click", showMenu);
close.addEventListener("click", hideMenu);
menuWrapper.addEventListener("click", hideMenu);

// submenu logic
const thirdLink = document.querySelector(".third-link")
const back = document.querySelector(".back-to-menu")
const subMenuThree = document.querySelector(".submenu-three")

thirdLink.addEventListener("click", () => {
  // menu slide out of page
  menu.style.transform = "translateX(-100%)";
  // submenu slide in
  subMenuThree.style.transform = "translateX(0%)"
})

back.addEventListener("click", () => {
  menu.style.transform = "translateX(0%)";
  subMenuThree.style.transform = "translateX(-100%)";
})

const newsletterExit = document.querySelector("#close-newsletter")

function scrollProgress() {
  const currentScrollState = document.body.scrollTop || rootElement.scrollTop
  const pageHeight = rootElement.scrollHeight - rootElement.clientHeight
  const scrollPercent = (currentScrollState / pageHeight) * 100

  if (scrollPercent > 80) {
    newsletter.style.transform = "translateX(0%)"
  } else {
    newsletter.style.transform = "translateX(-100%)"
  }

  newsletterExit.addEventListener("click", () => {
    newsletter.style.transform = "translateX(-100%)"
  })
}






