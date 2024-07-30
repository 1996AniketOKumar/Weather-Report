// Use a new API key
const api_key = "84965b8c81dba9ef3ffc6a08395d3bcc";

// Function to get and display weather data
const getWeather = async (city) => {
  try {
    const cityNameElement = document.getElementById("cityName");
    const tempElement = document.getElementById("temp");
    const feelsLikeElement = document.getElementById("feels_like");
    const humidityElement = document.getElementById("humidity");
    const minTempElement = document.getElementById("min_temp");
    const maxTempElement = document.getElementById("max_temp");
    const windSpeedElement = document.getElementById("wind.speed");
    const windDegreesElement = document.getElementById("wind.degrees");
    const sunriseElement = document.getElementById("sunrise");
    const sunsetElement = document.getElementById("sunset");

    cityNameElement.innerHTML = city;

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=Metric&appid=${api_key}`;
    const response = await fetch(url);
    const data = await response.json();

    if (response.ok) {
      tempElement.innerHTML = data.main.temp;
      feelsLikeElement.innerHTML = data.main.feels_like;
      humidityElement.innerHTML = data.main.humidity;
      minTempElement.innerHTML = data.main.temp_min;
      maxTempElement.innerHTML = data.main.temp_max;
      windSpeedElement.innerHTML = data.wind.speed;
      windDegreesElement.innerHTML = data.wind.deg;
      sunriseElement.innerHTML = new Date(data.sys.sunrise * 1000).toLocaleTimeString();
      sunsetElement.innerHTML = new Date(data.sys.sunset * 1000).toLocaleTimeString();
    } else {
      console.error("Error fetching weather data:", data.message);
    }
  } catch (err) {
    console.error("Error:", err);
  }
};

// Event listener for the search button
document.getElementById("submit").addEventListener("click", (e) => {
  e.preventDefault();
  const city = document.getElementById("city").value;
  getWeather(city);
});

// Initial call to get weather for a default city
getWeather("Patna");
