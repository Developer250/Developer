const api = {
  key: "a2ffde2ee02758e6b281c73ff5e2240c",
  base: "https://api.openweathermap.org/data/2.5/"
}
const searchbox = document.querySelector('.search-box');
searchbox.addEventListener('keypress', setQuery);

function setQuery(evt) {
  if (evt.keyCode == 13) {
    var query = getResults(searchbox.value);
    console.log(searchbox.value);
    getResults(query);
  }
}

function getResults(query) {
  fetch(`${api.base}weather?q=${query}&units=metricAPPID=${api.key}`)
  .then(weather => {
    console.log(weather);
    return weather.json();
  }).then(displayResults);
}
function displayResults(weather) {
  console.log(weather);
}
