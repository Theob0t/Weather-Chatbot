//CHATBOT Parser

"use strict";
const weather = require("../weather");
const colors = require('colors');

let getFeel = temp => {
    if(temp < 5) {
		return "shivering cold";
	} else if(temp >= 5 && temp < 15) {
		return "pretty cold";
	} else if(temp >= 15 && temp < 25) {
		return "moderately cold";
	} else if(temp >= 25 && temp < 32) {
		return "quite warm";
	} else if(temp >= 32 && temp < 40) {
		return "very hot";
	} else {
		return "super hot";
	}
}

let currentWeather = response => {
	if(`${response.location}`){
			
		    let location =`${response.location.name}`; 
		    let temp = `${response.current.temp_c}`;
		    let text = getFeel(temp);
		    let condition = `${response.current.condition.text}`;

		    const result = `Right now, it is ${text.toLowerCase().rainbow} in ${location.inverse}. It is ${condition.rainbow} and ${temp.inverse} degrees Celsus.`;
		    
			return result;
		}

	else{return "err";}

};

module.exports = currentWeather;