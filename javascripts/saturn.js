"use strict";

const outputSaturn = () => {
  
let saturnInfo = {
	"Name": "Saturn",
	"Year Discovered": "0",
	"Mass": "5.69 x 10<sup>26</sup> kg",
	"Size": "XXL",
	"Distance from Sun":  "1,427 milllion km",
	"Atmosphere Composition": "O, Ar, N",
	"Satellites":  "none",
	"Name of probes,orbiters,explorers":  "wow"
    };
let domString='';	
	    
for (var key in saturnInfo) {
domString += '<br>';
domString += `${key}`+ `: ` +  `${saturnInfo[key]} <br>`;

} return domString;
	     
};

module.exports = outputSaturn;