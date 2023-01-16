const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "2c87c17ec5msh3df6ee08f22d666p1c8421jsn3a8db3b8729b",
    "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
  },
};
const getWeather=(city)=>{
cityName.innerHTML= city;
	fetch(
		"https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city= " +city,
		options
	  )
		.then((response) => response.json())
		.then((response) => {
		  console.log(response);
		  temp.innerHTML= response.temp;
		  cloud_pct.innerHTML = response.cloud_pct;
		  feels_like.innerHTML = response.feels_like;
		  humidity.innerHTML = response.humidity;
		  min_temp.innerHTML = response.min_temp;
		  max_temp.innerHTML = response.max_temp;
		  wind_speed.innerHTML = response.wind_speed;
		  sunrise.innerHTML= response.sunrise;
	  sunset.innerHTML=response.sunset;
	  wind_degree.innerHTML=response.wind_degree; 
		})
		.catch((err) => console.error(err));
}

submit.addEventListener("click",()=>{
	//e.preventDefault();
	getWeather(city.value)
})
getWeather("Islamabad")
