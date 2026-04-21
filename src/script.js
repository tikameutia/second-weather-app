function showDayAndTime() {
  let now = new Date();

  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let currentDay = days[now.getDay()];

  let currentHour = now.getHours();
  if (currentHour < 10) {
    currentHour = `0${currentHour}`;
  }

  let currentMinute = now.getMinutes();
  if (currentMinute < 10) {
    currentMinute = `0${currentMinute}`;
  }

  let currentDayandTime = document.querySelector("#current-day-and-time");
  currentDayandTime.innerHTML = `${currentDay} ${currentHour}:${currentMinute}`;
}

showDayAndTime();

function searchCity(event) {
  event.preventDefault();

  let apiKey = "0050t012172bb4a92f6b53332o6cb5f4";
  let cityInput = document.querySelector("#search-input");
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query={${cityInput.value}}&key=${apiKey}`;

  function searchTemperature(response) {
    let city = document.querySelector("#city");
    city.innerHTML = response.data.city;
    let temperature = document.querySelector("#temperature");
    temperature.innerHTML = Math.round(response.data.temperature.current);
    let humidity = document.querySelector("#humidity");
    humidity.innerHTML = response.data.temperature.humidity;
    let windSpeed = document.querySelector("#wind-speed");
    windSpeed.innerHTML = Math.round(response.data.wind.speed);
    let weatherDespcription = document.querySelector("#weather-description");
    weatherDespcription.innerHTML = response.data.condition.description;
  }

  axios.get(apiUrl).then(searchTemperature);
}

let form = document.querySelector("form");
form.addEventListener("submit", searchCity);
