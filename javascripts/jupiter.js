"use strict";

const outputJupiter = () => {
  
let jupiterInfo = {
	"Name": "Jupiter",
	"Year Discovered": "1919",
	"Mass": "2 billion kg",
	"Size": "big",
	"Distance from Sun":  "200 km",
	"Atmosphere Composition": "Gas",
	"Satellites":  "XM Radio",
	"Name of probes,orbiters,explorers":  "Google"
    };
let domString='';	
	    
for (var key in jupiterInfo) {
domString += '<br>';
domString += `${key}`+ `: ` +  `${jupiterInfo[key]} <br>`;

} return domString;
	     
};

module.exports = outputJupiter;