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
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky_nvabar");
  } else {
    navbar.classList.remove("sticky_nvabar");
  }
}

// Toggle Navbar
const openNavbar = () => {
  const navbarOpen = document.getElementById("navbar_open");
  const navbarClose = document.getElementById("navbar_close");
  navbarOpen.classList.remove("block");
  navbarOpen.classList.add("hidden");
  navbarClose.classList.remove("hidden");
  navbarClose.classList.add("block");
};
const closeNavbar = () => {
  const navbarOpen = document.getElementById("navbar_open");
  const navbarClose = document.getElementById("navbar_close");
  navbarOpen.classList.remove("hidden");
  navbarClose.classList.remove("block");
  navbarClose.classList.add("hidden");
};

// footer
const expandMenu = () => {
  const menuItems = document.getElementById("menu_items");
  if (menuItems.classList.contains("hidden")) {
    menuItems.classList.remove("hidden");
  } else {
    menuItems.classList.add("hidden");
  }
};
