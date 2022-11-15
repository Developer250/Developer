const api = {
  key: "a2ffde2ee02758e6b281c73ff5e2240c"
//  url: `https://api.openweathermap.org/data/2.5/weather?q=${inputVal}&appid=${apiKey}&units=metric`;
}
const searchbox = document.querySelector('.search-box');
searchbox.addEventListener('keypress', setQuery);

function setQuery(evt) {
  if (evt.keyCode == 13) {
    getResults(searchbox.value);
    console.log(searchbox.value);
  }
}

function getResults(query) {
  fetch(`${api.base}weather?q=${query}&units=metricAPPID=${api.key}`)
  .then(weather => {
    return weather.json();
  }).then(displayResults);
}
function displayResults(weather) {
  console.log(weather);
}
