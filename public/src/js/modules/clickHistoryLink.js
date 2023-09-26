import { getWeather } from "./getWeather.js";
import { showMap } from "./showMap.js";
import { showWeather } from "./showWeather.js";

export async function clickHistoryLink(ev) {
    ev.preventDefault();

    const cityName = ev.target.innerHTML;
    weather = await getWeather(cityName);

    showWeather(weather);
    showMap(weather.coord.lat, weather.coord.lon)
}