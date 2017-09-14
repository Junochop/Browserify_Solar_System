"use strict";

const outputMercury = () => {
  
let mercuryInfo = {
	"Name": "Mercury",
	"Year Discovered": "0",
	"Mass": "5 million kg",
	"Size": "Very Small",
	"Distance from Sun":  "57.9 milllion km",
	"Atmosphere Composition": "H, He, O",
	"Satellites":  "none",
	"Name of probes,orbiters,explorers":  "wow"
    };
let domString='';	
	    
for (var key in mercuryInfo) {
domString += '<br>';
domString += `${key}`+ `: ` +  `${mercuryInfo[key]} <br>`;

} return domString;
	     
};

module.exports = outputMercury;