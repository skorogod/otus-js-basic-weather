import "./css/styles.css";

import { createWeatherInterface } from "./js/modules/createWeatherInterface";
import { clickHistoryLink } from "./js/modules/clickHistoryLink";
import { submitCityInputForm } from "./js/modules/submitInputCityForm";

(async function () {
  const formEl = document.querySelector(".weather-form");

  await createWeatherInterface();

  const historyLinks = document.querySelectorAll(".history-link");

  historyLinks.forEach((el) => {
    el.addEventListener("click", clickHistoryLink);
  });

  formEl.addEventListener("submit", submitCityInputForm);
})();
