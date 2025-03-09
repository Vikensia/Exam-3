"use strict";

document.querySelector(".hamburger").addEventListener("click", function () {
  document.querySelector(".hamburger").classList.toggle('is-active');
  document.body.classList.toggle('open-mobile-menu');
});
document.querySelector(".page-shadow").addEventListener("click", function () {
  document.querySelector(".hamburger").classList.toggle('is-active');
  document.body.classList.toggle('open-mobile-menu');
});
document.querySelector(".mobile-menu").addEventListener("click", function () {
  document.querySelector(".hamburger").classList.toggle('is-active');
  document.body.classList.toggle('open-mobile-menu');
});