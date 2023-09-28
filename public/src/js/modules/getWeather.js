export async function getWeather(cityName) {
    const API_KEY = 'e84f6a9560daa714e87d76927d78d870'
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${cityName}&appid=${API_KEY}`
      );

      return await response.json();
    }

    catch (e) {
      return null;
    }
}