export function addHistoryListItem(cityName) {
  const API_KEY = "e84f6a9560daa714e87d76927d78d870";

  const historyListEl = document.querySelector(".history-list");

  const historyLinks = historyListEl.querySelectorAll(".history-link");
  const citiesArr = [];

  for (const link of historyLinks) {
    if (!citiesArr.includes(link.innerHTML)) {
      citiesArr.push(link.innerHTML);
    }
  }

  if (!citiesArr.includes(cityName)) {
    const li = document.createElement("li");

    li.innerHTML = `<a class='history-link' href='https://api.openweathermap.org/data/2.5/weather?units=metric&q=${cityName}&appid=${API_KEY}'>${cityName}</a>`;

    if (historyListEl.childElementCount >= 10) {
      historyListEl.removeChild(
        historyListEl.childNodes[historyListEl.childNodes.length - 1],
      );
    }

    historyListEl.prepend(li);
  }
}
