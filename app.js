let now = new Date();
let h2= document.querySelector("#date");
let days = [
"Sunday",
"Monday",
"Tuesday",
"Wednesday",
"Thursday",
"Friday",
"Saturday"
];
let day = days[now.getDay()];
let hours = now.getHours();
let minutes = now.getMinutes();
if (minutes < 10) {
minutes = "0" + minutes;
}

h2.innerHTML = day + " " + hours + ":" + minutes;
function findCity(event) {
event.preventDefault();
let city = document.querySelector("#city-input").value;
searchCity(city);
}
let form = document.querySelector("#submit-form");
form.addEventListener("submit", findCity);

function showCurrentLoc(response) {
document.querySelector("h1").innerHTML = response.data.name;
let currentTemp = document.querySelector("#max-temp-today");
let temperature = Math.round(response.data.main.temp);
currentTemp.innerHTML = temperature;
document.querySelector("#humid-no").innerHTML = response.data.main.humidity;
document.querySelector("#wind-no").innerHTML = response.data.wind.speed;
}

function handlePosition(position) {
let lat = position.coords.latitude;
let lon = position.coords.longitude;
let apiKey = "a867e25f2d83db579421a57fd8e937ec";
let nowUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
axios.get(nowUrl).then(showCurrentLoc);
}
function currentLocation() {
navigator.geolocation.getCurrentPosition(handlePosition);
}



function showTemperature(response) {
let city = document.querySelector(".city");
city.innerHTML = response.data.name;
let currentTemp = document.querySelector("#max-temp-today");
let temperature = Math.round(response.data.main.temp);
currentTemp.innerHTML = temperature;
document.querySelector("#humid-no").innerHTML = response.data.main.humidity;
document.querySelector("#wind-no").innerHTML = response.data.wind.speed;
}

function searchCity(city) {
let key = "a867e25f2d83db579421a57fd8e937ec";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric`;
axios.get(apiUrl).then(showTemperature);
}