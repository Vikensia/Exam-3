"use strict";

document.addEventListener("DOMContentLoaded", function () {
  var images = document.querySelectorAll(".photo");
  var positions = ["photo-1", "photo-2", "photo-3"];
  setInterval(function () {
    var currentClasses = Array.from(images).map(function (img) {
      return positions.find(function (pos) {
        return img.classList.contains(pos);
      });
    });
    images.forEach(function (img, index) {
      var _img$classList;

      (_img$classList = img.classList).remove.apply(_img$classList, positions);

      img.classList.add(currentClasses[(index + 2) % positions.length]);
    });
  }, 5000);
});