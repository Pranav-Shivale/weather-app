import { filterWeatherData } from "./weatherApi.js";
import { displayTempInfo } from "./displayTempInfo.js";
import { displayWeatherDetails } from "./displayWeatherDetails.js";
import { loading, stopLoading } from "./loading.js";

const searchCityWeather = () => {
  const cityForm = document.querySelector(".city-form");
  const searchInput = document.querySelector("#search-input");

  cityForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const cityName = searchInput.value;
    displayWeather(cityName);
    cityForm.reset();
  });
};

const displayWeather = async (cityName) => {
  loading();

  try {
    const weatherData = await filterWeatherData(cityName);
    displayTempInfo(weatherData);
    displayWeatherDetails(weatherData);
  } catch (error) {
    alert("Please enter a valid city/location.");
    stopLoading();
    console.error(error);
  }
};

export { searchCityWeather };
