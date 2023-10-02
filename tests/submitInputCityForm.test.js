import { waitFor } from "@testing-library/react";
import { submitCityInputForm } from "../src/js/modules/submitInputCityForm";

const fs = require("fs");
const path = require("path");

const html = fs.readFileSync(
  path.resolve(__dirname, "../src/index.html"),
  "utf-8",
);

beforeEach(() => {
  document.documentElement.innerHTML = html.toString();
});

afterEach(() => {
  jest.clearAllMocks();
});

describe("submitInputCityForm", () => {
  const cityEl = document.querySelector(".city");
  const tempEl = document.querySelector(".temp");
  const iconEl = document.querySelector(".icon");
  const weatherMap = document.querySelector("#map");

  test("submitCityInputForm is a function", () => {
    expect(submitCityInputForm).toBeInstanceOf(Function);
  });

  test("submitCityInputForm modifies elements on page", () => {
    const getWeather = jest.fn(() =>
      Promise.resolve({
        name: "Stockholm",
        main: { temp: 20.34 },
        weather: [{ icon: "2nd2x" }],
      }),
    );

    const formEl = document.querySelector(".weather-form");

    formEl.addEventListener("submit", submitCityInputForm);

    formEl.value = "Stockholm";

    formEl.submit();

    waitFor(() => {
      expect(cityEl.innerHTML).toBe("Stockholm");
      expect(tempEl.innerHTML).toBe("20.34 &#xb0;C");
      expect(iconEl.innerHTML).toBe(
        '<img src="https://openweathermap.org/img/wn/2nd2x@2x.png" />',
      );

      const mapEl = document.getElementById("map");
      expect(mapEl).toBeTruthy();
    });
  });
});
