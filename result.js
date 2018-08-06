// axios.get("http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID=KEY").then((response) => {
// 	console.log(response);


window.addEventListener('load', () => {
    // console.log(window.location.search);

    var urlParams = new URLSearchParams(window.location.search);
    // console.log(urlParams.get('location_zip'));
    const what_to_search = urlParams.get('select_result');
    // console.log(what_to_search);

    if (what_to_search === 'zip') {
    	// console.log('zip');
		const zip_string = urlParams.get('location_zip');
		// console.log(zip_string);
		const zip_link = 'http://api.openweathermap.org/data/2.5/weather?zip=' + zip_string +',us&appid=KEY';
		// console.log(zip_link);
		axios.get(zip_link).then(displayWeatherFromAxios);

    } else {
    	console.log('city_country');
    	const city_string = urlParams.get('location_city').toLowerCase();
    	const country_string = urlParams.get('location_country').toLowerCase();

    	// console.log(city_string);
    	// console.log(country_string);

    	const city_country_link = 'http://api.openweathermap.org/data/2.5/weather?q=' + city_string + ',' +
    	country_string +'&APPID=KEY';
    	axios.get(city_country_link).then(displayWeatherFromAxios);
    }

});

function displayWeatherFromAxios(response) {
	const data = response.data;
	console.log(data);

	const countryName = getCountryName(data.sys.country);
	document.getElementById('city_result').innerText = data.name.toUpperCase();
	document.getElementById('country_result').innerText = countryName;


	document.getElementById('current').innerText = 'CURRENT TEMPERATURE: ' + data.main.temp;
	document.getElementById('min').innerText = 'MIN: ' + data.main.temp_min;
	document.getElementById('max').innerText = 'MAX: ' + data.main.temp_max;

	document.getElementById('humidity').innerText = 'HUMIDITY: ' + data.main.humidity;
	document.getElementById('wind').innerText = 'WIND SPEED: ' + data.wind.speed;


	const description = data.weather[0].description.toLowerCase();
	const resultElement = document.getElementById("result_main");
	console.log(data.weather[0].description);
	if (description === 'clear sky' || description === 'sunny' || description === 'clear') {
		resultElement.className = "sunny";
	} else if (description.includes('cloud')) {
		resultElement.className = "cloudy";
	} else if (description.includes('rain') || description.includes('drizzle')) {
		resultElement.className = "rainy";
	} else if (description.includes('thunder')) {
		resultElement.className = "thunder";
	} else {
		resultElement.className = "default";
	}
}





