const getWeatherData = async (cityName) => {
  const response = await fetch(
    `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${cityName}?key=X49FQX5VARM8G9Z6CJ2W7NEK6&unitGroup=metric&iconSet=icons2`,
  );
  const responseJson = await response.json();
  return responseJson;
};

const filterWeatherData = async (cityName) => {
  const keys = [
    "address",
    "description",
    "timezone",
    "currentConditions",
    "days",
  ];

  const weatherData = await getWeatherData(cityName);
  const responseArr = Object.entries(weatherData);
  const responseFilterArr = responseArr.filter(([key]) => keys.includes(key));
  const responseFilterObj = Object.fromEntries(responseFilterArr);
  return responseFilterObj;
};

export { filterWeatherData };
