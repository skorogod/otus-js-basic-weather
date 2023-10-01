import { getWeather } from "./getWeather.js";
import { showWeather } from "./showWeather.js";
import { showMap } from "./showMap.js";
import { setSearchHistory } from "./setSearchHistory.js";
import { addHistoryListItem } from "./addHistoryListItem.js";

export async function submitCityInputForm(ev) {
    const inputEl = document.querySelector('.input-city');
    ev.preventDefault();

    const cityName = inputEl.value;

    inputEl.value = "";

    const weather = await getWeather(cityName);

    console.log(weather)
    
    if (weather) {
        showWeather(weather);
        showMap(weather.coord.lat, weather.coord.lon);
        setSearchHistory(cityName);
        addHistoryListItem(cityName);
    }
}