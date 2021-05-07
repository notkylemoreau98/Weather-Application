const input = document.querySelector('.nav__input');
const date = document.querySelector('.nav__date');
const city = document.querySelector('.weather__city');
const temp = document.querySelector('.weather__temp');
const weatherType = document.querySelector('.weather__type');
const highLow = document.querySelector('.weather__highLow');
const wind = document.querySelector('.weather__windSpeed');

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

const api = {
	key: "fbab35c7a46eeb8b49c815d43a8a4c04",
	base: "https://api.openweathermap.org/data/2.5/"
}

input.addEventListener('keypress', setQuery);

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
	wind.innerHTML = `<i class="fas fa-wind"></i> ${Math.round(weather.wind.speed)} Mph`
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
	const dayOneName = document.querySelector('.forecast__dayOneName');
	const dayOneTemp = document.querySelector('.forecast__dayOneTemp');
	const dayOneWeather = document.querySelector('.forecast__weatherOne');
	const dayOneIcon = document.querySelector('.icon-1');
	now.setDate(now.getDate() + 1);
	dayOneName.innerText = updateForecastDay(now); 
	dayOneTemp.innerText = `${Math.round(forecast.list[0].main.temp)}°`;
	dayOneWeather.innerText = forecast.list[0].weather[0].description;
	console.log(forecast.list[0].weather[0].icon)
	dayOneIcon.innerHTML = `<img src="./Icons/${forecast.list[0].weather[0].icon}.png" class="icon" />`; 
	
// 	/Icons/${forecast.list[0].weather[0].icon}.png

	// Day Two
	const dayTwoName = document.querySelector('.forecast__dayTwoName');
	const dayTwoTemp = document.querySelector('.forecast__dayTwoTemp');
	const dayTwoWeather = document.querySelector('.forecast__weatherTwo');
	const dayTwoIcon = document.querySelector('.icon-2');
	now.setDate(now.getDate() + 1);
	dayTwoName.innerText = updateForecastDay(now);
	dayTwoTemp.innerText = `${Math.round(forecast.list[1].main.temp)}°`;
	dayTwoWeather.innerText = forecast.list[1].weather[0].description;
	dayTwoIcon.innerHTML = `<img src="./Icons/${forecast.list[1].weather[0].icon}.png" class="icon" />`; 


	// Day Three
	const dayThreeName = document.querySelector('.forecast__dayThreeName');
	const dayThreeTemp = document.querySelector('.forecast__dayThreeTemp');
	const dayThreeWeather = document.querySelector('.forecast__weatherThree');
	const dayThreeIcon = document.querySelector('.icon-3');
	now.setDate(now.getDate() + 1);
	dayThreeName.innerText = updateForecastDay(now);
	dayThreeTemp.innerText = `${Math.round(forecast.list[2].main.temp)}°`;
	dayThreeWeather.innerText = forecast.list[2].weather[0].description;
	dayThreeIcon.innerHTML = `<img src="./Icons/${forecast.list[2].weather[0].icon}.png" class="icon" />`; 


	// Day Four
	const dayFourName = document.querySelector('.forecast__dayFourName');
	const dayFourTemp = document.querySelector('.forecast__dayFourTemp');
	const dayFourWeather = document.querySelector('.forecast__weatherFour');
	const dayFourIcon = document.querySelector('.icon-4');
	now.setDate(now.getDate() + 1)
	dayFourName.innerText = updateForecastDay(now);
	dayFourTemp.innerText = `${Math.round(forecast.list[3].main.temp)}°`;
	dayFourWeather.innerText = forecast.list[3].weather[0].description;
	dayFourIcon.innerHTML = `<img src="./Icons/${forecast.list[3].weather[0].icon}.png" class="icon" />`; 

	// Day Five
	const dayFiveName = document.querySelector('.forecast__dayFiveName');
	const dayFiveTemp = document.querySelector('.forecast__dayFiveTemp');
	const dayFiveWeather = document.querySelector('.forecast__weatherFive');
	const dayFiveIcon = document.querySelector('.icon-5');
	now.setDate(now.getDate() + 1)
	dayFiveName.innerText = updateForecastDay(now);
	dayFiveTemp.innerText = `${Math.round(forecast.list[4].main.temp)}°`;
	dayFiveWeather.innerText = forecast.list[4].weather[0].description;
	dayFiveIcon.innerHTML = `<img src="./Icons/${forecast.list[4].weather[0].icon}.png" class="icon" />`; 
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
