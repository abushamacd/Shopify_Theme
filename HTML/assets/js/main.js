const txts = document.querySelector(".animate-text").children,
  txtsLen = txts.length;
let index = 0;
const textInTimer = 3000,
  textOutTimer = 2800;

function animateText() {
  for (let i = 0; i < txtsLen; i++) {
    txts[i].classList.remove("text-in", "text-out");
  }
  txts[index].classList.add("text-in");

  setTimeout(function () {
    txts[index].classList.add("text-out");
  }, textOutTimer);

  setTimeout(function () {
    if (index == txtsLen - 1) {
      index = 0;
    } else {
      index++;
    }
    animateText();
  }, textInTimer);
}

window.onload = animateText;

// sticky navbar
window.onscroll = function () {
  myFunction();
};

var navbar = document.getElementById("navbar");
const mobileMenu = document.getElementById("mobile_menu");
const desktopMenuLi = document.getElementsByClassName("mega-menu");
const megaMenu = document.getElementsByClassName("mega-menu-wrapper");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky_nvabar");
    if (navbar.classList.contains("sticky_nvabar")) {
      mobileMenu.classList.add("sticky", "top-[54px]");
      for (let i = 0; i < megaMenu.length; i++) {
        desktopMenuLi[i].onmouseenter = function () {
          megaMenu[i].classList.add("sticky_top");
        };
      }
    } else {
      mobileMenu.classList.remove("sticky");
    }
  } else {
    navbar.classList.remove("sticky_nvabar");
    for (let i = 0; i < megaMenu.length; i++) {
      desktopMenuLi[i].onmouseenter = function () {
        megaMenu[i].classList.remove("sticky_top");
      };
    }
  }
}

// Toggle Navbar
const openNavbar = () => {
  const navbarOpen = document.getElementById("navbar_open");
  const navbarClose = document.getElementById("navbar_close");
  const mobileMenu = document.getElementById("mobile_menu");
  const navBar = document.getElementById("navbar");
  navbarOpen.classList.remove("block");
  navbarOpen.classList.add("hidden");
  navbarClose.classList.remove("hidden");
  navbarClose.classList.add("block");
  mobileMenu.classList.remove("hidden");
  mobileMenu.classList.add("block");
  navBar.classList.remove("bg-[#fff]");
  navBar.classList.add("bg-[#EFEFEF]");
};
const closeNavbar = () => {
  const navbarOpen = document.getElementById("navbar_open");
  const navbarClose = document.getElementById("navbar_close");
  const mobileMenu = document.getElementById("mobile_menu");
  const navBar = document.getElementById("navbar");
  navbarOpen.classList.remove("hidden");
  navbarClose.classList.remove("block");
  navbarClose.classList.add("hidden");
  mobileMenu.classList.remove("block");
  mobileMenu.classList.add("hidden");
  navBar.classList.remove("bg-[#EFEFEF]");
  navBar.classList.add("bg-[#fff]");
};

// mobile menu
const accordionHeader = document.querySelectorAll(".accordion-header");
accordionHeader.forEach((header) => {
  header.addEventListener("click", function () {
    const accordionContent =
      header.parentElement.querySelector(".accordion-content");
    let accordionMaxHeight = accordionContent.style.maxHeight;

    // Condition handling
    if (accordionMaxHeight == "0px" || accordionMaxHeight.length == 0) {
      accordionContent.style.maxHeight = `${
        accordionContent.scrollHeight + 32
      }px`;
      header.querySelector(".fas").classList.remove("fa-angle-down");
      header.querySelector(".fas").classList.add("fa-minus");
    } else {
      accordionContent.style.maxHeight = `0px`;
      header.querySelector(".fas").classList.add("fa-angle-down");
      header.querySelector(".fas").classList.remove("fa-minus");
    }
  });
});

const expandMobileMenu = () => {
  const singleMenu = document.getElementById("single_menu");
  if (singleMenu.classList.contains("h-screen")) {
    singleMenu.classList.remove("h-screen");
  } else {
    singleMenu.classList.add("h-screen");
  }
};

// footer
const menuTitle = document.querySelectorAll(".footer_menu_title");
menuTitle.forEach((header) => {
  header.addEventListener("click", function () {
    const menuItems = header.parentElement.querySelector(".menu_items");
    if (menuItems.classList.contains("hidden")) {
      menuItems.classList.remove("hidden");
      menuItems.classList.add("block");
    } else {
      menuItems.classList.add("hidden");
    }
  });
});
