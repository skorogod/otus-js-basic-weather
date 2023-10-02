import { addHistoryListItem } from "./addHistoryListItem";

export function getSearchHistory() {
  const cities = JSON.parse(localStorage.getItem("cities"));

  if (cities) {
    cities.reverse().forEach((cityName) => {
      addHistoryListItem(cityName);
    });
  }
}
