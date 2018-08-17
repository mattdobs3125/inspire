import WeatherService from "./weather-service.js";

var weatherService = new WeatherService()



function draw (weather){
	let template = ""
	for (let i in weather){
		
		template = `
		
		<div class="text-block">
		<h4> ${weather.main.temp}</h4>
		</div>
		`;
		document.getElementById("weather-k").innerHTML = template
		
		
		
	}                                       
		
	}





export default class WeatherController {

	constructor() {
		//this will fire off get weather right away
		this.getWeather()
	}
	getWeather() {
		weatherService.getWeather(weather => {
			draw(weather);
			console.log(weather);

		})
	}
			
			//What can you do with this weather object?
}
