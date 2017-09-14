"use strict";

const outputMars = () => {
  
let marsInfo = {
	"Name": "Mars",
	"Year Discovered": "0",
	"Mass": "10kg",
	"Size": "Very Small",
	"Distance from Sun":  "57.9 milllion km",
	"Atmosphere Composition": "Gas",
	"Satellites":  "none",
	"Name of probes,orbiters,explorers":  "MARS Candy"
    };
let domString='';	
	    
for (var key in marsInfo) {
domString += '<br>';
domString += `${key}`+ `: ` +  `${marsInfo[key]} <br>`;

} return domString;
	     
};

module.exports = outputMars;