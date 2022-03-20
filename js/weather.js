const API_KEY = "0a228b51fcd2376bec385eeaa434048f";

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const long = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${API_KEY}&units=metric`;
  fetch(url).then((Response) =>
    Response.json().then((data) => {
      const weather = document.getElementById("weather");
      const curWeather = weather.querySelector("span:first-child");
      const curCity = weather.querySelector("span:nth-child(2)");
      const temp = document.createElement("span");
      weather.appendChild(temp);
      curWeather.innerText = data.name;
      curCity.innerText = data.weather[0].main;
      temp.innerText = `/${Math.round(data.main.temp)} ℃`;
    })
  );
}
function onGeoError() {
  alert("Can't find you. No weather for you.");
}
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
