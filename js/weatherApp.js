import { createDailyCards } from "./modules/createForecastWeatherCards.js";
import { startLoadingState, endLoadingState } from "./modules/setLoadingState.js";
import { handleError } from './modules/handleError.js';
import { fetchCurrWeatherData } from './modules/fetchCurrWeatherData.js';
import { fetchForecastWeatherData } from "./modules/fetchForecastWeatherData.js";
import { darkThemeIcons,lightThemeIcons } from "./modules/themeIcons.js";


const API_KEY = 'e732a92c66574d856b927e390c09674e';
const searchBar = document.querySelector('.weather__search-input');
const searchBtn = document.querySelector('.weather__search-btn');
const locationBtn = document.querySelector('.weather__location-btn');

// createHourlyCards();
createDailyCards();

const fetchFullWeatherData = async (data) => {
  try {
    await startLoadingState();
    await fetchCurrWeatherData(data, API_KEY);
    await fetchForecastWeatherData(data, API_KEY);
    await endLoadingState();
  } catch (error) {
    if (error.message === "Failed to fetch") {
      await handleError(
        "Uh oh! It looks like you're not connected to the internet. Please check your connection and try again.",
        "Refresh Page"
      );
    } else {
      await handleError(error.message, "Try Again");
    }
  }
}



//* ========== getting user location to get CURRENT weather ==========
const getUserLocation = async () => {
  const successCallback = async (position) => {
    const GPSData = {
      lat: position.coords.latitude,
      lon: position.coords.longitude
    }
    await fetchFullWeatherData(GPSData, API_KEY);
  }

  const errorCallback = (error) => {
    console.log(error);
    fetchFullWeatherData("Kyiv", API_KEY);
  }
  navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
}
locationBtn.addEventListener("click", getUserLocation);
getUserLocation();
// fetchFullWeatherData("Kyiv", API_KEY);




//* ========== formating city value before fetching CURRENT weather ==========
function search() {
  const formatedCity = searchBar.value.trim();
  fetchFullWeatherData(formatedCity, API_KEY);
}

//* ========== seaching wheather btns keyups ==========
searchBtn.addEventListener('click', search);
searchBar.addEventListener('keyup', function (event) {
  if (event.key == 'Enter') {
    search();
  }
})



//! ===============================================
//! =============== THEME MODE BTN ================
//! ===============================================
const root = document.documentElement;
const themeSwitcher = document.querySelector('#themeSwitcher');
const iconThemeSwitcher = themeSwitcher.querySelector('.aside__item-svg');

themeSwitcher.addEventListener('click', () => {
  root.classList.toggle('light');
  root.classList.toggle('dark');

  if (root.classList.contains('dark')) {
    withdrawSvgIcons(lightThemeIcons);
    iconThemeSwitcher.innerHTML = lightThemeIcons[iconThemeSwitcher.id];
  } else {
    withdrawSvgIcons(darkThemeIcons);
    iconThemeSwitcher.innerHTML = darkThemeIcons[iconThemeSwitcher.id];
  }
})


//! ===============================================
//! ============ CLOSE/OPEN ASIDE BTN =============
//! ===============================================
const asideBar = document.querySelector('.aside');
const asideLock = asideBar.querySelector('.lock');
const asideLockIcon = asideLock.querySelector('.aside__item-svg');
const asideLogo = document.querySelector(".aside__logo");
const asideLogoSVG = asideLogo.querySelector(".aside__logo-svg");

asideLock.addEventListener('click', () => {
  asideBar.classList.toggle('closed');

  if (asideBar.classList.contains('closed')) {
    asideLockIcon.id = 'lock-closed';
    asideLogoSVG.id = 'logoIcon';
  } else {
    asideLockIcon.id = 'lock-opened';
    asideLogoSVG.id = 'logoText';
  }

  if (root.classList.contains('dark')) {
    asideLockIcon.innerHTML = lightThemeIcons[asideLockIcon.id];
    asideLogoSVG.innerHTML = lightThemeIcons[asideLogoSVG.id];
  } else {
    asideLockIcon.innerHTML = darkThemeIcons[asideLockIcon.id];
    asideLogoSVG.innerHTML = darkThemeIcons[asideLogoSVG.id];
  }
})


//! ===============================================
//! ================== SVG ICONS ==================
//! ===============================================
const asideItemLinks = document.querySelectorAll(".aside__item-link");
const withdrawSvgIcons = async (themeIcons) => {
  asideItemLinks.forEach((item) => {
    const itemIcon = item.querySelector('.aside__item-svg');
    // console.log(itemIcon.id);
    itemIcon.innerHTML = themeIcons[itemIcon.id];
  })
}
withdrawSvgIcons(darkThemeIcons);