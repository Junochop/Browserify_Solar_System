"use strict";
console.log("hello");

const SolarSystemGenerator = require('./makeSolarSystem');
document.getElementById('buttons').addEventListener('click', (event) => {
	let planetSelected;
	//console.log("hello");
	if(event.target.id === "buttons"){
		planetSelected = 'sun';
		
	} else {
		planetSelected = event.target.id;
		console.log(planetSelected);
	}


document.getElementById('output').innerHTML = SolarSystemGenerator[`${planetSelected}`]();
});

