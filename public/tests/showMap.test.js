import { map } from "leaflet";
import { showMap } from "../src/js/modules/showMap.js";

const fs = require('fs');
const path = require('path');
const html = fs.readFileSync(path.resolve(__dirname, '../index.html'), 'utf8');

beforeEach(() => {
    document.documentElement.innerHTML = html.toString();
})

describe('showMap', () => {
    test("Element with id = map won't be empty afte showMap execution", () => {
        const weathermapEl = document.getElementById("weathermap");
        let mapEl = document.getElementById("map");
        expect(mapEl).toBeNull();
        showMap(18.0649, 59.3326);
        mapEl = document.getElementById("map")
        expect(mapEl).toBeTruthy();
    });
})