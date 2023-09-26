export function showWeather(weather) {
    const city = weather.name;
    const temp = weather.main.temp;
    const icon = weather.weather[0].icon;

    const cityEl = document.querySelector(".city");
    cityEl.innerHTML = city;

    const tempEl = document.querySelector(".temp");
    tempEl.innerHTML = `${temp} &#xb0;C`;

    const iconEl = document.querySelector(".icon");
    iconEl.innerHTML = `<img src="https://openweathermap.org/img/wn/${icon}@2x.png" />`;
}