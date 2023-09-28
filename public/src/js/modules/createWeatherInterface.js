import { getWeather } from "./getWeather.js";
import { showWeather } from "./showWeather.js"
import { showMap } from "./showMap.js"
import { getGeolocation } from "./getGeolocation.js"
import { getSearchHistory } from "./getSearchHistory.js";

export async function createWeatherInterface() {
    const cityName = await getGeolocation();
    let weather;

    if (cityName) {
        weather = await getWeather(cityName);
        
        if (weather) {
            showWeather(weather);
            showMap(weather.coord.lat, weather.coord.lon)
        }
    }

    getSearchHistory()
    
}