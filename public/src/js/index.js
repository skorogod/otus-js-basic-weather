import { createWeatherInterface } from "./modules/createWeatherInterface.js";
import { clickHistoryLink } from "./modules/clickHistoryLink.js";
import { getCityWeatherInfo } from "./modules/getCityWeatherInfo.js"

ymaps.ready(() => (async function () {
  const formEl = document.querySelector(".weather-form");
  const inputEl = formEl.querySelector("#input-city");
  const weatherInfoEl = document.querySelector(".weather-info");
  const historyListEl = document.querySelector(".history-list");
  const mapEl = document.querySelector("#map");
  let weatherInfo, cityName = "";

  await createWeatherInterface();

  const historyLinks = document.querySelectorAll(".history-link");

  historyLinks.forEach((el) => {
    el.addEventListener("click", clickHistoryLink);
  })

  formEl.addEventListener("submit", getCityWeatherInfo);
})());
