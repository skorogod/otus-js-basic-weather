import { addHistoryListItem } from "../src/js/modules/addHistoryListItem.js";

const fs = require('fs');
const path = require('path');
const html = fs.readFileSync(path.resolve(__dirname, '../index.html'), 'utf8');

beforeEach(() => {
    document.documentElement.innerHTML = html.toString();
})

describe("addHistoryListITem", () => {

    test("addHistoryListItem is a function", () => {
        expect(addHistoryListItem).toBeInstanceOf(Function);
    });

    test("add list item with Moscow CityName", () => {
        let listEl = document.querySelector('.history-list');
        const cityName = 'Moscow';
        addHistoryListItem("Moscow");
        expect(listEl.childElementCount).toBe(1);
        expect(listEl.childNodes[0].innerHTML).toBe(`<a class=\"history-link\" href=\"https://api.openweathermap.org/data/2.5/weather?units=metric&amp;q=${cityName}&amp;appid=e84f6a9560daa714e87d76927d78d870\">${cityName}</a>`);
    })
})