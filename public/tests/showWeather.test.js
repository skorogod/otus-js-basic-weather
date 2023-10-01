import { showWeather } from "../src/js/modules/showWeather.js";
import { getWeather } from "../src/js/modules/getWeather.js";
import { waitFor } from "@testing-library/react";

const fs = require("fs");
const path = require('path');
const html = fs.readFileSync(path.resolve(__dirname, "../index.html"), 'utf-8');

global.fetch = jest.fn(() => 
    Promise.resolve({json: () => 
        Promise.resolve({
                        name: 'Moscow',
                        main: {temp: 20.34},
                        weather: [{icon: '2nd2x'}],
    })})
);

beforeEach(() => {
    document.documentElement.innerHTML = html.toString();
    const cityEl = document.querySelector(".city");
    const tempEl = document.querySelector(".temp");
    const iconEl = document.querySelector(".icon");
});

afterEach(() => {
    fetch.mockClear();
})

describe("showWeather is a function", () => {
    test("showWeather is a function", () => {
        expect(showWeather).toBeInstanceOf(Function);
    });

    test("showWeather is a function", async () => {
        const weather = await getWeather('Moscow');
        showWeather(weather);
        waitFor(() => {
            expect(cityEl.innerHTML).toBe('Moscow');
            expect(tempEl.innerHTML).toBe('20.34 &#xb0;C')
            expect(iconEl.innerHTML).toBe('<img src="https://openweathermap.org/img/wn/2nd2x@2x.png" />')
        })
    })
    
})