import { getSearchHistory } from "../src/js/modules/getSearchHistory.js";
const fs = require("fs");
const path = require('path');
const html = fs.readFileSync(path.resolve(__dirname, '../index.html'), 'utf-8');

beforeEach(() => {
    document.documentElement.innerHTML = html.toString();
})

describe("getSearchHistory", () => {
    test("getSearchHistory is a function", () => {
        expect(getSearchHistory).toBeInstanceOf(Function);
    });

    test("history list contains elements after getSearchHistory()", () => {
        let cities = ['Moscow', 'London', 'Berlin'];
        localStorage.setItem('cities', JSON.stringify(cities))
        
        getSearchHistory();

        const listEl = document.querySelector('.history-list');

        expect(listEl.childElementCount).toBe(3);
        expect(listEl.childNodes[0].innerHTML).toBe(`<a class=\"history-link\" href=\"https://api.openweathermap.org/data/2.5/weather?units=metric&amp;q=Moscow&amp;appid=e84f6a9560daa714e87d76927d78d870\">Moscow</a>`);
        expect(listEl.childNodes[1].innerHTML).toBe(`<a class=\"history-link\" href=\"https://api.openweathermap.org/data/2.5/weather?units=metric&amp;q=London&amp;appid=e84f6a9560daa714e87d76927d78d870\">London</a>`);
        expect(listEl.childNodes[2].innerHTML).toBe(`<a class=\"history-link\" href=\"https://api.openweathermap.org/data/2.5/weather?units=metric&amp;q=Berlin&amp;appid=e84f6a9560daa714e87d76927d78d870\">Berlin</a>`);
    })
})