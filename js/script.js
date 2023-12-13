const main = document.querySelector("#main");
const sidebar = document.querySelectorAll("#sidebar");
let mainTop = main.offsetTop;

console.log(sidebar);

function fixedNav() {
  if (window.scrollY >= mainTop) {
    sidebar.forEach((side) => {
      side.classList.add("position-fixed");
    });
  } else {
    sidebar.forEach((side) => {
      side.classList.remove("position-fixed");
    });
  }
}

window.addEventListener("scroll", fixedNav);

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  freeMode: false,
  scrollbar: {
    el: ".swiper-scrollbar",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
