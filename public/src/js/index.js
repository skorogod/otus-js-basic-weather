import { createWeatherInterface } from "./modules/createWeatherInterface.js";
import { clickHistoryLink } from "./modules/clickHistoryLink.js";
import { submitCityInputForm } from "./modules/submitInputCityForm.js"
import { getGeolocation } from "./modules/getGeolocation.js";


const res = await getGeolocation();



(async function () {
  const formEl = document.querySelector(".weather-form");
  
  await createWeatherInterface();

  const historyLinks = document.querySelectorAll(".history-link");

  historyLinks.forEach((el) => {
    el.addEventListener("click", clickHistoryLink);
  })

  formEl.addEventListener("submit", submitCityInputForm);
})();
