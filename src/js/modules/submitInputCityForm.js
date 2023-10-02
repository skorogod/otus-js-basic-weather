import { getWeather } from "./getWeather";
import { showWeather } from "./showWeather";
import { showMap } from "./showMap";
import { setSearchHistory } from "./setSearchHistory";
import { addHistoryListItem } from "./addHistoryListItem";

export async function submitCityInputForm(ev) {
  const inputEl = document.querySelector(".input-city");
  ev.preventDefault();

  const cityName = inputEl.value;

  inputEl.value = "";

  const weather = await getWeather(cityName);

  console.log(weather);

  if (weather) {
    showWeather(weather);
    showMap(weather.coord.lat, weather.coord.lon);
    setSearchHistory(cityName);
    addHistoryListItem(cityName);
  }
}
