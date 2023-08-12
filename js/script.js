const WEATHER_APIKEY = 'e732a92c66574d856b927e390c09674e',
      searchBar = document.querySelector('.card__search-input'),
      searchBtn = document.querySelector('.card__search-btn'),

      cityWeather = document.querySelector('.card__weather-city')
      descrWeather = document.querySelector('.card__weather-descr'),
      tempWeather = document.querySelector('.card__weather-temp'),
      humidityWeather = document.querySelector('.card__weather-humidity'),
      windWeather = document.querySelector('.card__weather-wind'),
      iconWeather = document.querySelector('.card__weather-icon');

      loader = document.querySelector('.card__weather');
//! SEARCHING AND DISPLAYING WEATHER
function searchWeather(city) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${WEATHER_APIKEY}`)
    .then((response) => {
        if (!response.ok) {
            alert(`Incorrect city - ${city}`);
        }
        return response.json();
    })
    .then((data) => showWeather(data));
}

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

    loader.classList.remove('loading')

    document.body.style.background = "url('https://source.unsplash.com/2048x1080/?" + name + "&city') center center/cover no-repeat";
}
function search() {
    searchWeather(searchBar.value);
}


//! BTN KEYUP
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

