"use strict";

function updatePlaceholder() {
  var input = document.getElementById("email");

  if (window.matchMedia("(max-width: 375px)").matches) {
    input.placeholder = "Enter email";
  }
}

updatePlaceholder();
window.addEventListener("resize", updatePlaceholder);