export function setSearchHistory(cityName) {
    let cities = JSON.parse(localStorage.getItem("cities"));

    if (!Array.isArray(cities)) {
      cities = [];
    }

    if (!cities.includes(cityName)) {
      if (cities.length >= 10) {
        cities = [cityName, ...cities.slice(0, 8)];
      } else {
        cities.unshift(cityName);
      }

      localStorage.setItem("cities", JSON.stringify(cities));
    }
  }