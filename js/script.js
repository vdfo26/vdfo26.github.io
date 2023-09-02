window.addEventListener('DOMContentLoaded', function() {
  console.log('loaded');
    
  //! ========== ASIDE CLOSE/OPEN ==========
  const asideBar = document.querySelector('.aside'),
    asideCloseBtn = asideBar.querySelector('.aside__swipe'),
    asideCloseBtnImg = asideCloseBtn.querySelector('.aside__swipe-img'),
    asideLogoImg = asideBar.querySelector('.aside__logo-img');

  asideCloseBtn.addEventListener('click', () => {
    asideBar.classList.toggle('closed');
    
    //? ====== asideCloseBtnImg & asideLogoImg changing ======
    if (asideBar.classList.contains('closed')) {
      asideCloseBtnImg.src = "icons/aside/arrowRight.png";
      asideLogoImg.src = "icons/assets/logo/logoIcon-black.png";
    } else {
      asideCloseBtnImg.src = "icons/aside/arrowLeft.png";
      asideLogoImg.src = "icons/assets/logo/logoText-black.png";
    }
  })

  //! ========== WEATHER FETCHING & DISPLAYING ==========
  const WEATHER_APIKEY = 'e732a92c66574d856b927e390c09674e',
    searchBar = document.querySelector('.weather__search-input'),
    searchBtn = document.querySelector('.weather__search-btn'),    
    weatherCard = document.querySelector('.weather__display'),
    cityWeather = document.querySelector('.weather__display-city'),
    descrWeather = document.querySelector('.weather__display-descr'),
    tempWeather = document.querySelector('.weather__display-temp'),
    humidityWeather = document.querySelector('.weather__display-humidity'),
    windWeather = document.querySelector('.weather__display-wind'),
    iconWeather = document.querySelector('.weather__display-icon');

  //* ========== fetching weather ==========
  function searchWeather(city) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${WEATHER_APIKEY}`)
    .then((response) => {
      if (!response.ok) {
        alert('Wheather is not found');
      }
      return response.json();
    })
    .then((data) => showWeather(data));
  }

  //* ========== displaying weather ==========
  function showWeather(data) {
    const {name} = data,
      {speed} = data.wind,
      {temp, humidity} = data.main,
      {icon, description} = data.weather[0];
    
  cityWeather.innerText = `Weather in ${name}`;
  descrWeather.innerText = description;
  tempWeather.innerText = `${temp} °C`;
  humidityWeather.innerText = `Humidity: ${humidity} %`;
  windWeather.innerText = `Wind speed: ${speed} km/h`;
  iconWeather.src = `https://openweathermap.org/img/wn/${icon}.png`;
  }

  //* ===== checking for correct city before fetching weather =====
  function search() {
    correctValue = searchBar.value.split(' ').join('');
    searchWeather(correctValue);
  }

  //* ========== seaching wheather btns keyups ==========
  searchBar.addEventListener('keyup', function(event) {
      if (event.key == 'Enter') {
          search();
      }
  })
  searchBtn.addEventListener('keyup', function(event) {
      if (event.key == 'Enter') {
          search();
      }
  })
  searchBtn.addEventListener('click', function() {search()});
  
  //! ========== DARK MODE THEME SWITCHER ==========
  // const darkModeBtn = document.getElementById('theme-switcher'),
  //     logoImg = document.querySelector('.nav__logo-img'),
  //     timerBlocks = document.querySelectorAll('.promo__timer-block');
  // darkModeBtn.addEventListener('change', () => {
  //     document.body.classList.toggle('dark-mode');

  //     if (document.body.classList.contains('dark-mode')) {
  //         logoImg.src="icons/logo-white.png";
  //         timerBlocks.forEach((block) => {
  //             block.style.background = "#333";
  //         })
  //     } else {
  //         logoImg.src="icons/logo-black.png";
  //         timerBlocks.forEach((block) => {
  //             block.style.background = "#F2F5F5";
  //         })
  //     }

  // })
  const themeSwitcher = document.querySelector('#themeSwitcher'),
    icoThemeSwitcher = themeSwitcher.querySelector('img'),
    spanThemeSwitcher = themeSwitcher.querySelector('span'),
    textThemeSwitcher = themeSwitcher.querySelector('.aside__item-text');

  themeSwitcher.addEventListener('click', (event) => {
    document.body.classList.toggle('darkMode');

    if (document.body.classList.contains('darkMode')) {
      icoThemeSwitcher.src="icons/aside/moon.svg";
      spanThemeSwitcher.innerHTML = 'Dark Mode';
      textThemeSwitcher.innerHTML = 'Dark Mode';
    } else {
      icoThemeSwitcher.src="icons/aside/sun.svg";
      spanThemeSwitcher.innerHTML = 'Light Mode';
      textThemeSwitcher.innerHTML = 'Light Mode';
    }
  })
})