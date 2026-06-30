import "../stylesheets/weatherDetails.css";

const displayWeatherDetails = (weatherData) => {
  const currentConditions = weatherData.currentConditions;

  const weatherDetailsContainer = document.querySelector(".weather-details");
  const header = document.querySelector(".weather-details h1");
  weatherDetailsContainer.replaceChildren(header);

  const cellContainer = document.createElement("div");
  cellContainer.classList.add("cell-container");

  const temp = currentConditions.temp;
  let cellColor;
  if (temp <= 10) cellColor = "cold";
  else if (temp <= 25) cellColor = "normal";
  else cellColor = "hot";

  const wind = createCell(
    "Wind",
    currentConditions.windspeed + " km/h",
    cellColor,
  );
  const humidity = createCell(
    "Humidity",
    currentConditions.humidity + "%",
    cellColor,
  );
  const feelsLike = createCell(
    "Feels Like",
    currentConditions.feelslike + "\u00B0C",
    cellColor,
  );
  const uvIndex = createCell("UV Index", currentConditions.uvindex, cellColor);
  const pressure = createCell(
    "Pressure",
    currentConditions.pressure + " mb",
    cellColor,
  );
  const dew = createCell("Dew", currentConditions.dew + "\u00B0C", cellColor);
  const cloudCover = createCell(
    "Cloud Cover",
    currentConditions.cloudcover,
    cellColor,
  );
  const sunrise = createCell("Sunrise", currentConditions.sunrise, cellColor);
  const sunset = createCell("Sunset", currentConditions.sunset, cellColor);

  cellContainer.append(
    wind,
    humidity,
    feelsLike,
    uvIndex,
    pressure,
    dew,
    cloudCover,
    sunrise,
    sunset,
  );

  weatherDetailsContainer.append(cellContainer);
};

const createCell = (cellTitle, cellData, cellColor) => {
  const div = document.createElement("div");
  div.classList.add("cell", cellColor);
  const title = document.createElement("p");
  title.classList.add("cell-title");
  const data = document.createElement("p");
  data.classList.add("cell-data");

  title.textContent = cellTitle;
  data.textContent = cellData;

  div.append(title, data);
  return div;
};

export { displayWeatherDetails };
