import "../stylesheets/tempInfo.css";

const displayTempInfo = async (weatherData) => {
  const currentConditions = weatherData.currentConditions;

  const tempInfoContainer = document.querySelector(".temp-info");
  const cityForm = document.querySelector(".city-form");
  tempInfoContainer.replaceChildren(cityForm);

  const iconImg = document.createElement("img");
  const icon = await import(
    `../images/weather-icons/${currentConditions.icon}.svg`
  );
  iconImg.src = icon.default;
  iconImg.classList.add("weather-icon");

  const tempDiv = document.createElement("div");
  tempDiv.classList.add("temp");
  const tempValue = document.createElement("p");
  tempValue.classList.add("temp-value");
  tempValue.textContent = currentConditions.temp;
  const tempCondition = document.createElement("p");
  tempCondition.classList.add("temp-condition");
  tempCondition.textContent = currentConditions.conditions;
  tempDiv.append(tempValue, tempCondition);

  const hr = document.createElement("hr");

  const dateDiv = document.createElement("div");
  dateDiv.classList.add("date");
  const date = document.createElement("p");
  date.textContent = weatherData.days[0].datetime;
  const time = document.createElement("p");
  time.textContent = currentConditions.datetime;
  const dayNight = document.createElement("p");
  const isDay =
    currentConditions.datetimeEpoch >= currentConditions.sunriseEpoch &&
    currentConditions.datetimeEpoch <= currentConditions.sunsetEpoch;
  isDay ? (dayNight.textContent = "Day") : (dayNight.textContent = "Night");
  dateDiv.append(date, time, dayNight);

  const address = document.createElement("p");
  address.classList.add("address");
  address.textContent = weatherData.address;

  tempInfoContainer.append(iconImg, tempDiv, hr, dateDiv, address);
};

export { displayTempInfo };
