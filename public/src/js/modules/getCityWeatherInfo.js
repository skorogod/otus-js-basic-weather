import { getWeather } from "./getWeather.js";
import { showWeather } from "./showWeather.js";
import { showMap } from "./showMap.js";
import { setSearchHistory } from "./setSearchHistory.js";

export async function getCityWeatherInfo (ev) {
    const inputEl = document.querySelector('.input-city');
    ev.preventDefault();

    const cityName = inputEl.value;

    inputEl.value = "";

    const weather = await getWeather(cityName);

    showWeather(weather);
    showMap(weather.coord.lat, weather.coord.lon);
    setSearchHistory(cityName);
}