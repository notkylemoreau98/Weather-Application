const input = document.querySelector('.nav-input');
const date = document.querySelector('.nav-date');
const city = document.querySelector('.city');
const temp = document.querySelector('.temp');
const weatherType = document.querySelector('.weather-type');
const highLow = document.querySelector('.high-low');
const wind = document.querySelector('.wind-speed');
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

const api = {
	key: "785ca801015ed2e7c71e74dc9667b5c5",
	base: "https://api.openweathermap.org/data/2.5/"
}

function setQuery(e) {
		if(e.keyCode === 13) {
			getCurrentResults(input.value);
			getForecast(input.value);
			input.value = '';
		};
};

function getCurrentResults(query) {
	fetch(`${api.base}weather?q=${query}&units=imperial&APPID=${api.key}`)
		.then(weather => {
			return weather.json();
		}).then(displayCurrentResults);
};

function displayCurrentResults(weather) {
	console.log(weather);
	city.innerText = `${weather.name}, ${weather.sys.country}`;
	let now = new Date();
	date.innerText = dateBuilder(now);
	temp.innerHTML = `${Math.round(weather.main.temp)}<span>°F</span>`
	weatherType.innerText = weather.weather[0].main;
	highLow.innerText = `${Math.round(weather.main.temp_min)}°F / ${Math.round(weather.main.temp_max)}°F`
	wind.innerText = `${Math.round(weather.wind.speed)} Mph`
};

function getForecast(query) {
	fetch(`${api.base}forecast?q=${query}&units=imperial&APPID=${api.key}`)
		.then(forecast => {
			return forecast.json();
		}).then(displayForecast);
};

function displayForecast(forecast) {
	console.log(forecast);	
	let now = new Date();

	// Day One
	const dayOneName = document.querySelector('.day-one-name');
	const dayOneTemp = document.querySelector('.day-one-temp');
	const dayOneWeather = document.querySelector('.forecast-weather-one');
	const dayOneIcon = document.querySelector('.icon-1');
	now.setDate(now.getDate() + 1);
	dayOneName.innerText = updateForecastDay(now); 
	dayOneTemp.innerText = `${Math.round(forecast.list[0].main.temp)}°`;
	dayOneWeather.innerText = forecast.list[0].weather[0].description;
	dayOneIcon.innerHTML = `<img src="/Icons/${forecast.list[0].weather[0].icon}.png" class="icon" />`; 

	// Day Two
	const dayTwoName = document.querySelector('.day-two-name');
	const dayTwoTemp = document.querySelector('.day-two-temp');
	const dayTwoWeather = document.querySelector('.forecast-weather-two');
	const dayTwoIcon = document.querySelector('.icon-2');
	now.setDate(now.getDate() + 1);
	dayTwoName.innerText = updateForecastDay(now);
	dayTwoTemp.innerText = `${Math.round(forecast.list[1].main.temp)}°`;
	dayTwoWeather.innerText = forecast.list[1].weather[0].description;
	dayTwoIcon.innerHTML = `<img src="/Icons/${forecast.list[1].weather[0].icon}.png" class="icon" />`; 


	// Day Three
	const dayThreeName = document.querySelector('.day-three-name');
	const dayThreeTemp = document.querySelector('.day-three-temp');
	const dayThreeWeather = document.querySelector('.forecast-weather-three');
	const dayThreeIcon = document.querySelector('.icon-3');
	now.setDate(now.getDate() + 1);
	dayThreeName.innerText = updateForecastDay(now);
	dayThreeTemp.innerText = `${Math.round(forecast.list[2].main.temp)}°`;
	dayThreeWeather.innerText = forecast.list[2].weather[0].description;
	dayThreeIcon.innerHTML = `<img src="/Icons/${forecast.list[2].weather[0].icon}.png" class="icon" />`; 


	// Day Four
	const dayFourName = document.querySelector('.day-four-name');
	const dayFourTemp = document.querySelector('.day-four-temp');
	const dayFourWeather = document.querySelector('.forecast-weather-four');
	const dayFourIcon = document.querySelector('.icon-4');
	now.setDate(now.getDate() + 1)
	dayFourName.innerText = updateForecastDay(now);
	dayFourTemp.innerText = `${Math.round(forecast.list[3].main.temp)}°`;
	dayFourWeather.innerText = forecast.list[3].weather[0].description;
	dayFourIcon.innerHTML = `<img src="/Icons/${forecast.list[3].weather[0].icon}.png" class="icon" />`; 

	// Day Five
	const dayFiveName = document.querySelector('.day-five-name');
	const dayFiveTemp = document.querySelector('.day-five-temp');
	const dayFiveWeather = document.querySelector('.forecast-weather-five');
	const dayFiveIcon = document.querySelector('.icon-5');
	now.setDate(now.getDate() + 1)
	dayFiveName.innerText = updateForecastDay(now);
	dayFiveTemp.innerText = `${Math.round(forecast.list[4].main.temp)}°`;
	dayFiveWeather.innerText = forecast.list[4].weather[0].description;
	dayFiveIcon.innerHTML = `<img src="/Icons/${forecast.list[4].weather[0].icon}.png" class="icon" />`; 
};

function dateBuilder(d) {
	let day = days[d.getDay()];
	let date = d.getDate();
	let month = months[d.getMonth()];
	let year = d.getFullYear();

	return `${day}, ${month} ${date} ${year}`;
}

function updateForecastDay(d) {
	for (let i = 0; i < 5; i++) {
	let nextDay = days[d.getDay() + i];
	return `${nextDay}`
	}
};

input.addEventListener('keypress', setQuery);
