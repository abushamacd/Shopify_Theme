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

var overlay = document.getElementById("sidebar_overlay");

// sticky navbar
window.onscroll = function () {
  myFunction();
};

var navbar = document.getElementById("navbar");
const mobileMenu = document.getElementById("mobile_menu");
const notificationArea = document.getElementById("notifications_area");
const cartArea = document.getElementById("cart_area");
const desktopMenuLi = document.getElementsByClassName("mega-menu");
const megaMenu = document.getElementsByClassName("mega-menu-wrapper");
const serachBar = document.getElementById("serach_bar");
var sticky = navbar.offsetTop;

const overlayActive = () => {
  if (overlay.classList.contains("hidden")) {
    overlay.classList.remove("hidden");
    overlay.classList.add("block");
  } else {
    overlay.classList.remove("block");
    overlay.classList.add("hidden");
  }
};

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky_nvabar");
    if (navbar.classList.contains("sticky_nvabar")) {
      mobileMenu.classList.add("sticky", "top-[54px]");
      notificationArea.classList.add("sticky_top");
      cartArea.classList.add("sticky_top");
      serachBar.classList.add("top_0");
      for (let i = 0; i < megaMenu.length; i++) {
        desktopMenuLi[i].onmouseenter = function () {
          megaMenu[i].classList.add("sticky_top");
        };
      }
    } else {
    }
  } else {
    navbar.classList.remove("sticky_nvabar");
    mobileMenu.classList.remove("sticky", "top-[54px]");
    notificationArea.classList.remove("sticky_top");
    cartArea.classList.remove("sticky_top");
    serachBar.classList.remove("top_0");

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
  navBar.classList.add("sticky");
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
  navBar.classList.remove("sticky");
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

// account details
$(".account_details_open").click(function () {
  $(".address_form").removeClass("hidden").addClass("block");
});

$(".account_details_close").click(function () {
  $(".address_form").removeClass("block").addClass("hidden");
});

// notificaiton
$(".notification_open").click(function () {
  $(".notifications_area").addClass("active");
  overlay.classList.remove("hidden");
  overlay.classList.add("block");
});
$(".notification_close").click(function () {
  $(".notifications_area").removeClass("active");
  overlay.classList.remove("block");
  overlay.classList.add("hidden");
});
// search
$(".serach_open").click(function () {
  $(".serach_bar").addClass("active");
  overlay.classList.remove("hidden");
  overlay.classList.add("block");
});
$(".serach_close").click(function () {
  $(".serach_bar").removeClass("active");
  overlay.classList.remove("block");
  overlay.classList.add("hidden");
});
// cart
$(".cart_open").click(function () {
  $(".cart_area").addClass("active");
  overlay.classList.remove("hidden");
  overlay.classList.add("block");
});
$(".cart_close").click(function () {
  $(".cart_area").removeClass("active");
  overlay.classList.remove("block");
  overlay.classList.add("hidden");
});

var incrementButton = document.getElementsByClassName("inc");
var decrementButton = document.getElementsByClassName("dec");
// increment
for (var i = 0; i < incrementButton.length; i++) {
  var button = incrementButton[i];
  button.addEventListener("click", function (event) {
    var buttonClicked = event.target;
    var input = buttonClicked.parentElement.children[1];
    var inputValue = input.value;
    var newValue = parseInt(inputValue) + 1;
    input.value = newValue;
  });
}

// decrement
for (var i = 0; i < decrementButton.length; i++) {
  var button = decrementButton[i];
  button.addEventListener("click", function (event) {
    var buttonClicked = event.target;
    var input = buttonClicked.parentElement.children[1];
    var inputValue = input.value;
    if (inputValue < 1) {
      input.value = inputValue;
    } else {
      var newValue = parseInt(inputValue) - 1;
      input.value = newValue;
    }
  });
}

const orderDetailsExpand = () => {
  const orderDetailes = document.getElementById("order_details");
  const showOrder = document.getElementById("show_order");
  const hideOrder = document.getElementById("hide_order");
  if (orderDetailes.classList.contains("hidden")) {
    orderDetailes.classList.remove("hidden");
    orderDetailes.classList.add("block");
    hideOrder.classList.remove("hidden");
    showOrder.classList.add("hidden");
  } else {
    orderDetailes.classList.remove("block");
    orderDetailes.classList.add("hidden");
    hideOrder.classList.add("hidden");
    showOrder.classList.remove("hidden");
  }
};

const billingDetailsOpen = () => {
  const billingDetails = document.getElementById("billing_info");
  billingDetails.classList.remove("hidden");
  billingDetails.classList.add("block");
};

const billingDetailsClose = () => {
  const billingDetails = document.getElementById("billing_info");
  billingDetails.classList.remove("block");
  billingDetails.classList.add("hidden");
};

const rememberFormExpand = () => {
  const rememberForm = document.getElementById("remembar_form");
  if (rememberForm.classList.contains("hidden")) {
    rememberForm.classList.remove("hidden");
    rememberForm.classList.add("block");
  } else {
    rememberForm.classList.remove("block");
    rememberForm.classList.add("hidden");
  }
};

const descExpand = () => {
  const productDesc = document.getElementById("product_desc_top");
  const showMoreText = document.getElementById("show_More");
  const showLessText = document.getElementById("show_Less");
  if (productDesc.classList.contains("h-[100px]")) {
    productDesc.classList.remove("h-[100px]", "bottom_shadow");
    showLessText.classList.remove("hidden");
    showMoreText.classList.add("hidden");
  } else {
    productDesc.classList.add("h-[100px]", "bottom_shadow");
    showLessText.classList.add("hidden");
    showMoreText.classList.remove("hidden");
  }
};

const saveInfo = document.getElementById("save_info");
const rememberLabel = document.getElementById("remember_lable");
if (saveInfo !== null) {
  saveInfo.onclick = function () {
    rememberFormExpand();
  };
}

if (rememberLabel !== null) {
  rememberLabel.onclick = function () {
    rememberFormExpand();
  };
}

// Product Gallary
const productImage = document.getElementById("product_main_img");
const productThumb = document.getElementsByClassName("thumbnail_img");
let activeImages = document.getElementsByClassName("active");
for (let i = 0; i < productThumb.length; i++) {
  productThumb[i].addEventListener("click", function () {
    if (activeImages.length > 0) {
      activeImages[0].classList.remove("active");
    }
    this.classList.add("active");
    productImage.src = this.src;
  });
}

let prev = document.getElementById("prev");
let next = document.getElementById("next");

if (prev !== null) {
  prev.addEventListener("click", function () {
    document.getElementById("product_thumbnails").scrollTop -= 70;
  });
}

if (prev !== null) {
  next.addEventListener("click", function () {
    document.getElementById("product_thumbnails").scrollTop += 70;
  });
}

let before = document.getElementById("before");
let after = document.getElementById("after");

if (prev !== null) {
  before.addEventListener("click", function () {
    console.log("object");
    document.getElementById("product_thumbnails").scrollLeft -= 70;
  });
}

if (prev !== null) {
  after.addEventListener("click", function () {
    document.getElementById("product_thumbnails").scrollLeft += 70;
  });
}

// $(".slider-for").slick({
//   slidesToShow: 1,
//   slidesToScroll: 1,
//   arrows: false,
//   fade: true,
//   asNavFor: ".slider-nav",
// });
// $(".slider-nav").slick({
//   slidesToShow: 3,
//   slidesToScroll: 1,
//   asNavFor: ".slider-for",
//   dots: false,
//   centerMode: true,
//   focusOnSelect: true,
//   arrows: true,
//   // prevArrow: false,
//   // nextArrow: false,
//   responsive: [
//     {
//       breakpoint: 1024,
//       settings: {
//         slidesToShow: 4,
//         slidesToScroll: 1,
//         infinite: true,
//         dots: true,
//       },
//     },
//     {
//       breakpoint: 600,
//       settings: {
//         slidesToShow: 4,
//         slidesToScroll: 1,
//       },
//     },
//     {
//       breakpoint: 480,
//       settings: {
//         slidesToShow: 4,
//         slidesToScroll: 1,
//       },
//     },
//     // You can unslick at a given breakpoint now by adding:
//     // settings: "unslick"
//     // instead of a settings object
//   ],
// });

// mobile menu
// var mmButton = document.getElementsByClassName("mm_button");
// for (var i = 0; i < mmButton.length; i++) {
//   var button = mmButton[i];
//   button.addEventListener("click", function (event) {
//     var buttonClicked = event.target;
//     var ul = buttonClicked.parentElement.children[1];
//     console.log(ul);
//     if (ul.classList.contains("hidden")) {
//       ul.classList.remove("hidden");
//     } else {
//       ul.classList.add("hidden");
//     }
//     // var inputValue = input.value;
//     // var newValue = parseInt(inputValue) + 1;
//     // input.value = newValue;
//   });
// }
