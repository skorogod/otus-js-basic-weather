import { createWeatherInterface } from "./modules/createWeatherInterface.js";
import { clickHistoryLink } from "./modules/clickHistoryLink.js";
import { getCityWeatherInfo } from "./modules/getCityWeatherInfo.js"

ymaps.ready(() => (async function () {
  const formEl = document.querySelector(".weather-form");
  
  await createWeatherInterface();

  const historyLinks = document.querySelectorAll(".history-link");

  historyLinks.forEach((el) => {
    el.addEventListener("click", clickHistoryLink);
  })

  formEl.addEventListener("submit", getCityWeatherInfo);
})());
