import { getWeather } from "./getWeather";
import { showMap } from "./showMap";
import { showWeather } from "./showWeather";

export async function clickHistoryLink(ev) {
  ev.preventDefault();

  const cityName = ev.target.innerHTML;
  const weather = await getWeather(cityName);

  if (weather) {
    showWeather(weather);
    showMap(weather.coord.lat, weather.coord.lon);
  }
}
