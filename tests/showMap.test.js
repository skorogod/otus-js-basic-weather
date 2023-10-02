import { showMap } from "../src/js/modules/showMap";

const fs = require("fs");
const path = require("path");

const html = fs.readFileSync(
  path.resolve(__dirname, "../src/index.html"),
  "utf8",
);

beforeEach(() => {
  document.documentElement.innerHTML = html.toString();
});

describe("showMap", () => {
  test("Element with id = map won't be empty afte showMap execution", () => {
    let mapEl = document.getElementById("map");
    expect(mapEl).toBeNull();

    showMap(18.0649, 59.3326);
    mapEl = document.getElementById("map");

    expect(mapEl).toBeTruthy();
  });
});
