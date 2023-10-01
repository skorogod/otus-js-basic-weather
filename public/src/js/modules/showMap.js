export function showMap(x, y) {
  const mapEl = document.getElementById("weathermap");
  mapEl.innerHTML = '<div id="map" class="map"></div>';

  let map = new L.Map('map');

  map.setView([x, y], 12);

  L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
  }).addTo(map);
}