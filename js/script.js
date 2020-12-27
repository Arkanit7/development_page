let toggler = document.querySelector(".toggler");
let headerMain = document.querySelector(".main__header");
let nav = document.querySelector(".navbar__nav");
let body = document.querySelector("body");

toggler.onclick = function () {
  toggler.classList.toggle("toggler_active");
  headerMain.classList.toggle("main__header_bg");
  nav.classList.toggle("navbar__nav_active");
  body.classList.toggle("body_lock");
  document.body.scrollTop = document.documentElement.scrollTop = 0; //прокрутка до самого верху сторінки
};
