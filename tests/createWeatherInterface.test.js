import { waitFor } from "@testing-library/react";
import { createWeatherInterface } from "../src/js/modules/createWeatherInterface";

const fs = require("fs");
const path = require("path");

const html = fs.readFileSync(
  path.resolve(__dirname, "../src/index.html"),
  "utf-8",
);

const getWeather = jest.fn(() =>
  Promise.resolve({
    name: "Stockholm",
    main: { temp: 20.34 },
    weather: [{ icon: "2nd2x" }],
  }),
);

beforeEach(() => {
  document.documentElement.innerHTML = html.toString();
});

afterAll(() => {
  jest.clearAllMocks();
});

describe("createWeatherInterface", () => {
  const cityEl = document.querySelector(".city");
  const tempEl = document.querySelector(".temp");
  const iconEl = document.querySelector(".icon");

  test("createWeatherInterface is a function", () => {
    expect(createWeatherInterface).toBeInstanceOf(Function);
  });
  test("createWeatherInterface modifies elements on page", async () => {
    const getGeolocation = jest.fn(() =>
      Promise.resolve({
        coord: { lon: 18.0649, lat: 59.3326 },
        name: "Stockholm",
      }),
    );

    let mapEl = document.getElementById("map");
    expect(mapEl).toBeNull();

    await createWeatherInterface();

    waitFor(() => {
      expect(cityEl.innerHTML).toBe("Stockholm");
      expect(tempEl.innerHTML).toBe("20.34 &#xb0;C");
      expect(iconEl.innerHTML).toBe(
        '<img src="https://openweathermap.org/img/wn/2nd2x@2x.png" />',
      );
      mapEl = document.getElementById("map");
      expect(mapEl).toBeTruthy();
    });
  });

  test("city, temp, icon and map elements has empty innerHTML when getGeolocation returns null", async () => {
    const getGeolocation = jest.fn(() => Promise.resolve(null));

    let mapEl = document.getElementById("map");
    expect(mapEl).toBeNull();

    await createWeatherInterface();

    waitFor(() => {
      expect(cityEl.innerHTML).toBe("");
      expect(tempEl.innerHTML).toBe("");
      expect(iconEl.innerHTML).toBe("");

      mapEl = document.getElementById("map");
      expect(mapEl).toBeNull();
    });
  });
});
