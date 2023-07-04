"use strict";

const hamburger = document.querySelector(".hamburger");
const navList = document.querySelector(".hidden");

// hamburger menu for responsiveness
hamburger.addEventListener("click", function () {
  navList.classList.toggle("hidden");
});
