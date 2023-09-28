import { getWeather } from "./getWeather.js";
import { showMap } from "./showMap.js";
import { showWeather } from "./showWeather.js";

export async function clickHistoryLink(ev) {
    ev.preventDefault();

    const cityName = ev.target.innerHTML;
    let weather = await getWeather(cityName);

    if (weather) {
        showWeather(weather);
        showMap(weather.coord.lat, weather.coord.lon)
    }
}