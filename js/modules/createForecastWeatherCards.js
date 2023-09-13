// export const createHourlyCards = () => {
//   const hourlyForecastWeatherSection = document.querySelector(".card-3");

//   for (let i = 0; i < 5; i++) {
//     const hourlyForecastWeatherCard = document.createElement("div");
//     hourlyForecastWeatherCard.classList.add("card-3__sm");

//     const hourlyForecastWeatherDateTime = document.createElement("div");
//     hourlyForecastWeatherDateTime.classList.add("card-3__sm-datetime-container");
    
//     const hourlyForecastWeatherDate = document.createElement("div");
//     hourlyForecastWeatherDate.classList.add("card-3__sm-date","dynamic-data", "loading");
//     hourlyForecastWeatherDate.innerHTML = "&nbsp;";

//     const hourlyForecastWeatherTime = document.createElement("div");
//     hourlyForecastWeatherTime.classList.add("card-3__sm-time", "dynamic-data", "loading");
//     hourlyForecastWeatherTime.innerHTML = "&nbsp;";

//     const hourlyForecastWeatherTemp = document.createElement("div");
//     hourlyForecastWeatherTemp.classList.add("card-3__sm-temp", "dynamic-data", "loading");
//     hourlyForecastWeatherTemp.innerHTML = "&emsp;&emsp;";

//     hourlyForecastWeatherDateTime.appendChild(hourlyForecastWeatherDate);
//     hourlyForecastWeatherDateTime.appendChild(hourlyForecastWeatherTime);

//     hourlyForecastWeatherCard.appendChild(hourlyForecastWeatherDateTime);
//     hourlyForecastWeatherCard.appendChild(hourlyForecastWeatherTemp);

//     hourlyForecastWeatherSection.appendChild(hourlyForecastWeatherCard);
//   }
// }

// ForecastWeather
export const createDailyCards = () => {
  const dailyForecastWeatherSection = document.querySelector(".weather__forecast-data");

  for (let i = 0; i < 40; i++) {
    const dailyForecastWeatherCard = document.createElement("div");
    dailyForecastWeatherCard.classList.add("weather__forecast-card");

    const dailyForecastWeatherDateTime = document.createElement("div");
    dailyForecastWeatherDateTime.classList.add("weather__forecast-datetime");

    const dailyForecastWeatherDate = document.createElement("div");
    dailyForecastWeatherDate.classList.add("weather__forecast-date", "dynamic-data", "loading");
    dailyForecastWeatherDate.innerHTML = "&nbsp;";

    const dailyForecastWeatherTime = document.createElement("div");
    dailyForecastWeatherTime.classList.add("weather__forecast-time", "dynamic-data", "loading");
    dailyForecastWeatherTime.innerHTML = "&nbsp;";

    const dailyForecastWeatherIcon = document.createElement("img");
    dailyForecastWeatherIcon.classList.add("weather__forecast-icon", "dynamic-data", "loading");

    const dailyForecastWeatherDetails = document.createElement("div");
    dailyForecastWeatherDetails.classList.add("weather__forecast-details");

    const dailyForecastWeatherTemp = document.createElement("div");
    dailyForecastWeatherTemp.classList.add("weather__forecast-temp", "dynamic-data", "loading");
    dailyForecastWeatherTemp.innerHTML = "&emsp;&emsp;";

    const dailyForecastWeatherDescr = document.createElement("div");
    dailyForecastWeatherDescr.classList.add("weather__forecast-descr", "dynamic-data", "loading");
    dailyForecastWeatherDescr.innerHTML = "&emsp;&emsp;";

    dailyForecastWeatherDateTime.appendChild(dailyForecastWeatherDate);
    dailyForecastWeatherDateTime.appendChild(dailyForecastWeatherTime);

    dailyForecastWeatherCard.appendChild(dailyForecastWeatherDateTime);
    dailyForecastWeatherCard.appendChild(dailyForecastWeatherIcon);

    dailyForecastWeatherDetails.appendChild(dailyForecastWeatherTemp);
    dailyForecastWeatherDetails.appendChild(dailyForecastWeatherDescr);

    dailyForecastWeatherCard.appendChild(dailyForecastWeatherDetails);

    dailyForecastWeatherSection.appendChild(dailyForecastWeatherCard);
  }
}
