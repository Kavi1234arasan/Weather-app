const apiKey = '6c167afc768c1c31f977517b924f5e07'; // Your API key

function getWeather() {
  const city = document.getElementById('cityInput').value.trim();
  if (!city) {
    alert("Please enter a city name");
    return;
  }

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  fetch(url)
    .then(response => {
      if (!response.ok) throw new Error("City not found");
      return response.json();
    })
    .then(data => {
      document.getElementById('cityName').textContent = `${data.name}, ${data.sys.country}`;
      document.getElementById('temp').textContent = `Temperature: ${data.main.temp} °C`;
      document.getElementById('desc').textContent = `Weather: ${data.weather[0].description}`;
      document.getElementById('humidity').textContent = `Humidity: ${data.main.humidity}%`;
      document.getElementById('wind').textContent = `Wind Speed: ${data.wind.speed} m/s`;
      document.getElementById('weatherResult').style.display = 'block';
    })
    .catch(error => {
      alert(error.message);
      document.getElementById('weatherResult').style.display = 'none';
    });
}
