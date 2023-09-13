import { formatDate } from "./convertUnits.js";
 
// export const filterForecastWeatherData = async (forecastWeatherData) => {
//   const forecastWeatherSection = document.querySelector(".weather__forecast");
//   const prevFilterContainer = document.querySelector(".weather__forecast-filter-container");
//   const specialDates = new Set(["All Days"]);

//   if (prevFilterContainer) {
//     prevFilterContainer.remove();
//   }

//   const filterContainer = document.createElement("div");
//   filterContainer.classList.add("weather__forecast-filter-container");
//   forecastWeatherSection.insertBefore(filterContainer, forecastWeatherSection.firstChild);

//   let filterValue = 0; // Initialize the filterValue variable with 0
//   for (let i = 0; i < forecastWeatherData.list.length; i++) {
//     specialDates.add(await formatDate(forecastWeatherData.list[i].dt, "short"));
//   }

//   filterContainer.addEventListener("wheel", (event) => {
//     event.preventDefault();
//     filterContainer.scrollLeft += event.deltaY * 2;
//   })

//   specialDates.forEach(async (specialDate) => {
//     const filterItem = document.createElement("div");
//     filterItem.classList.add("weather__forecast-filter-item", "dynamic-data", "loading");

//     if (specialDate === "All Days") {
//       filterValue = ""; // Set an empty value for "All Days"
//       filterItem.classList.add("active");
//     } else {
//       filterItem.classList.remove("active"); // Remove "active" class for non-"All Days" items
//     }

//     filterItem.innerHTML = specialDate;
//     filterItem.setAttribute("data-value", filterValue); // Set the value attribute
//     filterContainer.appendChild(filterItem);

//     // Increment the filterValue for the next item
//     filterValue++;
//   })

//   const filterItems = document.querySelectorAll(".weather__forecast-filter-item");
//   filterItems.forEach(async (filterItem) => {
//     filterItem.addEventListener("click", async () => {
//       filterItems.forEach((item) => {
//         item.classList.remove("active");
//       })

//       filterItem.classList.add("active");
//     })
//   })
// }


export const filterForecastWeatherData = async (forecastWeatherData) => {
  const forecastWeatherSection = document.querySelector(".weather__forecast");
  const prevFilterContainer = document.querySelector(".weather__forecast-filter-container");
  const specialDates = new Set(["All Days"]);

  if (prevFilterContainer) {
    prevFilterContainer.remove();
  }

  const filterContainer = document.createElement("div");
  filterContainer.classList.add("weather__forecast-filter-container");

  let filterValue = 0; // Initialize the filterValue variable with 0
  for (let i = 0; i < forecastWeatherData.list.length; i++) {
    specialDates.add(await formatDate(forecastWeatherData.list[i].dt, "short"));
  }

  forecastWeatherSection.insertBefore(filterContainer, forecastWeatherSection.firstChild);

  filterContainer.addEventListener("wheel", (event) => {
    event.preventDefault();
    filterContainer.scrollLeft += event.deltaY * 2;
  })

  specialDates.forEach(async (specialDate) => {
    const filterItem = document.createElement("div");
    filterItem.classList.add("weather__forecast-filter-item", "dynamic-data", "loading");

    if (specialDate === "All Days") {
      filterValue = ""; // Set an empty value for "All Days"
      filterItem.classList.add("active");
    } else {
      filterItem.classList.remove("active"); // Remove "active" class for non-"All Days" items
    }

    filterItem.innerHTML = specialDate;
    filterItem.setAttribute("data-value", filterValue); // Set the value attribute
    filterContainer.appendChild(filterItem);

    // Increment the filterValue for the next item
    filterValue++;
  })

  const filterItems = document.querySelectorAll(".weather__forecast-filter-item");
  const dailyForecastWeatherDates = document.querySelectorAll(".weather__forecast-date");
  
  dailyForecastWeatherDates.forEach(dailyDateSection => {
    dailyDateSection.parentElement.parentElement.style.display = "flex";
  })
  
  filterItems.forEach(filterItem => {
    filterItem.addEventListener("click", () => {
      const filterItems = document.querySelectorAll(".weather__forecast-filter-item");
  
      filterItems.forEach(item => item.classList.remove("active"));
  
      dailyForecastWeatherDates.forEach(dailyDateSection => {
        const displayStyle = filterItem.innerHTML === "All Days" || dailyDateSection.innerHTML === filterItem.innerHTML ? "flex" : "none";
        dailyDateSection.parentElement.parentElement.style.display = displayStyle;
      })

      filterItem.classList.add("active");
    })
  })
  
}