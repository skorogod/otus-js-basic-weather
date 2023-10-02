import { getWeather } from "./getWeather";
import { showWeather } from "./showWeather";
import { showMap } from "./showMap";
import { getGeolocation } from "./getGeolocation";
import { getSearchHistory } from "./getSearchHistory";

export async function createWeatherInterface() {
  const geolocation = await getGeolocation();
  let weather;

  console.log(geolocation);

  if (geolocation) {
    const cityName = geolocation.city;
    weather = await getWeather(cityName);
    console.log(weather);

    if (weather) {
      showWeather(weather);
      showMap(weather.coord.lat, weather.coord.lon);
    }
  }

  getSearchHistory();
}
