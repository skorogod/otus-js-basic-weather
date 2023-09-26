import { addHistoryListItem } from "./addHistoryListItem.js";

export function getSearchHistory() {
    let cities = JSON.parse(localStorage.getItem("cities"));

    if (cities) {
      cities.forEach((cityName) => {
        addHistoryListItem(cityName);
      });
    }
}