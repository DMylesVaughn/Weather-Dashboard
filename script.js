// JavaScript code to handle user interactions and API requests
const apiKey = '66f125a971ea63ae56591c312a185439';
const searchForm = document.getElementById('city-search-form');
const cityInput = document.getElementById('city-input');
const currentConditions = document.getElementById('current-conditions');
const forecast = document.getElementById('forecast');
const searchHistory = document.getElementById('search-history');

searchForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const cityName = cityInput.value;
  getWeatherData(cityName);
});

function getWeatherData(cityName) {
  // Make an API request to OpenWeatherMap using fetch
  fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${apiKey}`)
    .then((response) => response.json())
    .then((data) => {
      // Process and display the weather data
      displayWeatherData(data);
      // Save the city in search history
      addToSearchHistory(cityName);
    })
    .catch((error) => {
      console.error(error);
    });
}

function displayWeatherData(data) {
  // Need to parse the data and update the HTML elements
  currentConditions.innerHTML="";
  forecast.innerHTML="";
}

function addToSearchHistory(cityName) {
  // Add the city to the search history
  const cityButton = document.createElement('button');
  cityButton.textContent = cityName;
  cityButton.className = 'city-button';
  cityButton.addEventListener('click', () => getWeatherData(cityName));
  searchHistory.appendChild(cityButton);
}