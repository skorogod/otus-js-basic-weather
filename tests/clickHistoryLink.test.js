import { waitFor } from "@testing-library/react";
import { clickHistoryLink } from "../src/js/modules/clickHistoryLink";
import { addHistoryListItem } from "../src/js/modules/addHistoryListItem";

const fs = require("fs");
const path = require("path");

const html = fs.readFileSync(
  path.resolve(__dirname, "../src/index.html"),
  "utf-8",
);

beforeEach(() => {
  document.documentElement.innerHTML = html.toString();
  addHistoryListItem("Stockholm");
});

afterEach(() => {
  jest.clearAllMocks();
});

describe("clickHistoryLink", () => {
  const cityEl = document.querySelector(".city");
  const tempEl = document.querySelector(".temp");
  const iconEl = document.querySelector(".icon");

  test("clickHistoryLink is a function", () => {
    expect(clickHistoryLink).toBeInstanceOf(Function);
  });
  test("clicHistoryLink modifies elements on page", async () => {
    const getWeather = jest.fn(() =>
      Promise.resolve({
        name: "Stockholm",
        main: { temp: 20.34 },
        weather: [{ icon: "2nd2x" }],
      }),
    );

    let mapEl = document.getElementById("map");

    expect(mapEl).toBeNull();

    const historyLink = document.querySelector(".history-link");
    historyLink.addEventListener("click", clickHistoryLink);

    historyLink.click();

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

  test("city, temp, icon and map elements has empty innerHTML when getWeather returns null", async () => {
    const getWeather = jest.fn(() => Promise.resolve(null));

    let mapEl = document.getElementById("map");
    expect(mapEl).toBeNull();

    const historyLink = document.querySelector(".history-link");
    historyLink.addEventListener("click", clickHistoryLink);

    waitFor(() => {
      expect(cityEl.innerHTML).toBe("");
      expect(tempEl.innerHTML).toBe("");
      expect(iconEl.innerHTML).toBe("");

      mapEl = document.getElementById("map");
      expect(mapEl).toBeNull();
    });
  });
});
