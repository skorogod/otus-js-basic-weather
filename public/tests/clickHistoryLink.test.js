import { clickHistoryLink } from "../src/js/modules/clickHistoryLink.js";
import { waitFor } from "@testing-library/react";
import { addHistoryListItem } from "../src/js/modules/addHistoryListItem.js";

const fs = require('fs');
const path = require('path');
const html = fs.readFileSync(path.resolve(__dirname, "../index.html"), 'utf-8');


beforeEach(() => {
    document.documentElement.innerHTML = html.toString();
    const cityEl = document.querySelector(".city");
    const tempEl = document.querySelector(".temp");
    const iconEl = document.querySelector(".icon");
    const weatherMap = document.querySelector("#map");

    addHistoryListItem('Stockholm');
    
})

describe('clickHistoryLink', () => {
    test('clickHistoryLink is a function', () => {
        expect(clickHistoryLink).toBeInstanceOf(Function);
    })
    test("clicHistoryLink modifies elements on page", async () => {
        const getWeather = jest.fn(() => Promise.resolve({
            name: 'Stockholm',
            main: {temp: 20.34},
            weather: [{icon: '2nd2x'}],
        }))

        let mapEl = document.getElementById("map");

        expect(mapEl).toBeNull();

        const historyLink = document.querySelector('.history-link');
        historyLink.addEventListener("click", clickHistoryLink);

        historyLink.click();

        waitFor(() => {
            expect(cityEl.innerHTML).toBe("Stockholm");
            expect(tempEl.innerHTML).toBe('20.34 &#xb0;C')
            expect(iconEl.innerHTML).toBe('<img src="https://openweathermap.org/img/wn/2nd2x@2x.png" />')
            mapEl = document.getElementById("map")
            expect(mapEl).toBeTruthy();
        })
    });

    test("city, temp, icon and map elements has empty innerHTML when getWeather returns null", async () => {
        const getWeather = jest.fn(() => Promise.resolve(null));

        let mapEl = document.getElementById("map");
        expect(mapEl).toBeNull();

        const historyLink = document.querySelector('.history-link');
        historyLink.addEventListener("click", clickHistoryLink);

        waitFor(
            () => {
                expect(cityEl.innerHTML).toBe("");
                expect(tempEl.innerHTML).toBe('');
                expect(iconEl.innerHTML).toBe('');

                let mapEl = document.getElementById("map");
                expect(mapEl).toBeNull();
            }
        )
    })
})