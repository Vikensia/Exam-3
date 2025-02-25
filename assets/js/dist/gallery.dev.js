"use strict";

document.addEventListener("DOMContentLoaded", function () {
  var images = document.querySelectorAll(".photo");
  var positions = ["photo-1", "photo-2", "photo-3"];
  setInterval(function () {
    // Получаем текущие классы элементов
    var currentClasses = Array.from(images).map(function (img) {
      return positions.find(function (pos) {
        return img.classList.contains(pos);
      });
    }); // Меняем классы местами по кругу

    images.forEach(function (img, index) {
      var _img$classList;

      (_img$classList = img.classList).remove.apply(_img$classList, positions);

      img.classList.add(currentClasses[(index + 2) % positions.length]); // Смещаем на один шаг назад
    });
  }, 5000); // Менять классы каждые 2 секунды
});