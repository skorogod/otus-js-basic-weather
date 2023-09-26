export function showMap(x, y) {
    let map = document.getElementById("map");
    map.innerHTML = '';

    map = new ymaps.Map("map", {
      center: [x, y],
      zoom: 10,
    });
  }