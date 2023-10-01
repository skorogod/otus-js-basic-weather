import { getWeather } from "./getWeather.js";
import { showWeather } from "./showWeather.js"
import { showMap } from "./showMap.js"
import { getGeolocation } from "./getGeolocation.js"
import { getSearchHistory } from "./getSearchHistory.js";

export async function createWeatherInterface() {
    const geolocation = await getGeolocation();
    let weather;

    console.log(geolocation)

    if (geolocation) {
        let cityName = geolocation.city;
        weather = await getWeather(cityName);
        console.log(weather)
        
        if (weather) {
            showWeather(weather);
            showMap(weather.coord.lat, weather.coord.lon)
        }
    }

    getSearchHistory()
}