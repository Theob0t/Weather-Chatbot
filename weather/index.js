//CHATBOT Weather

"use strict";

const axios = require("axios");
const apikey = `5eedbdf5ed004745ad2135036191302`;

let getWeather = (location, type = "forecast") => {
    return new Promise(async(resolve, reject) => {
		
		
		try{
			const weatherForecast = await axios.get("http://api.apixu.com/v1/forecast.json",
			{
				params: {
					key: apikey, q: location, days: 2
				}
			});
		
		resolve(weatherForecast.data)
	}
		catch(err){reject(err);}
	});
}

module.exports = getWeather;