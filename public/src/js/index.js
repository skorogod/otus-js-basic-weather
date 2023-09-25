(async function() {

    const API_KEY = 'e84f6a9560daa714e87d76927d78d870';

    const formEl = document.querySelector('.weather-form');
    const inputEl = formEl.querySelector('#input-city');
    const weatherInfoEl = document.querySelector(".weather-info");
    const historyListEl = document.querySelector('.history-list');

    let weatherInfo, cityName = '';

    getCities();

    const historyLinks = document.querySelectorAll('.history-link');

    async function getWeather(cityName) {
      const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${cityName}&appid=${API_KEY}`        
      );
      
      return await response.json();
  }
    
    ymaps.ready(async function() {
        let result = await ymaps.geolocation.get({provider: 'yandex'});
        console.log(result);
        let data = result.geoObjects.get(0).properties.get('metaDataProperty').GeocoderMetaData.AddressDetails.Country.AdministrativeArea;

        if ('SubAdministrativeArea' in data) {
            cityName = data.SubAdministrativeArea.Locality.LocalityName;
          } else if(data.Locality) {
            cityName = data.Locality.LocalityName;
          } else {
            cityName = data.AdministrativeAreaName;
          }
        
        let map = new ymaps.Map("map", {
          center: result.geoObjects.position,
          zoom: 10
        });
        
        weatherInfo = await getWeather(cityName);

        showWeather(weatherInfoEl, weatherInfo);

    })

    function getCities() {
      let cities = JSON.parse(localStorage.getItem('cities'));
      console.log("cities ", +cities)

      if(cities){
        cities.forEach(cityName => {
          addHistoryListItem(cityName);
        });
    }

    }

    function setCities(cityName) {
      let cities = JSON.parse(localStorage.getItem('cities'));

      if (!Array.isArray(cities)) {
        cities = [];
      };

      if(!cities.includes(cityName)){
        if (cities.length >= 10){
          cities = [cityName, ...cities.slice(0,3)];
        }
  
        else{
          cities.unshift(cityName);
        };

        addHistoryListItem(cityName);
  
        localStorage.setItem('cities', JSON.stringify(cities));
      };
    };


    function addHistoryListItem(cityName) {
      const li = document.createElement('li');
      li.innerHTML = `<a class='history-link' href='https://api.openweathermap.org/data/2.5/weather?units=metric&q=${cityName}&appid=${API_KEY}'>${cityName}</a>` 
      
      if(historyListEl.childElementCount >= 10){
        historyListEl.removeChild(historyListEl.childNodes[historyListEl.childNodes.length - 1])
      }
      historyListEl.prepend(li);
      
    }

    async function showMap() {
      let result = await ymaps.geolocation.get({provider: 'yandex'});
      let map = new ymaps.Map("map", {
        center: result.geoObjects.position,
        zoom: 10
      });
    }
    
    function showWeather(el, weather) {
        const city = weather.name;
        const temp = weather.main.temp;
        const icon = weather.weather[0].icon;

        const cityEl = document.querySelector(".city");
        cityEl.innerHTML = city;

        const tempEl = document.querySelector('.temp');
        tempEl.innerHTML = `${temp} &#xb0;C`;

        const iconEl = document.querySelector('.icon')
        iconEl.innerHTML = `<img src="https://openweathermap.org/img/wn/${icon}@2x.png" />`;
    }
    

    formEl.addEventListener("submit", async (ev) => {
        ev.preventDefault();

        cityName = inputEl.value;

        inputEl.value = "";

        weather = await getWeather(cityName);

        showWeather(weatherInfoEl, weather);

        setCities(cityName);

        await showMap()
    });

    historyLinks.forEach(el => {
      el.addEventListener('click', async function(ev) {
        ev.preventDefault();
        const cityName = el.innerHTML;
        console.log(cityName);
        weather = await getWeather(cityName);
        showWeather(weatherInfoEl, weather);
      });
    });

})();
