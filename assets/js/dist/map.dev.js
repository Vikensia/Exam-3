"use strict";

var myIcon = L.icon({
  iconUrl: '../assets/plugins/leaflet/images/marker-icon.png',
  iconSize: [25, 41],
  iconAnchor: [12, 43],
  popupAnchor: [1, -43],
  shadowUrl: '../assets/plugins/leaflet/images/marker-shadow.png',
  shadowSize: [41, 41],
  shadowAnchor: [12, 43]
});
document.querySelector(".initMap").addEventListener("click", function () {
  document.getElementById("map").innerHTML = '';
  initMap();
});

function initMap() {
  var map = L.map('map').setView([30.406505449363866, -88.96498995001923], 16);
  L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OSM</a>'
  }).addTo(map);
  L.marker([30.406505449363866, -88.96498995001923], {
    icon: myIcon
  }).addTo(map).bindPopup('Canvix location');
}