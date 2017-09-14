"use strict";

const outputVenus = () => {
  
let venusInfo = {
	"Name": "Venus",
	"Year Discovered": "0",
	"Mass": "10 kg",
	"Size": "Small",
	"Distance from Sun":  "57.9 milllion km",
	"Atmosphere Composition": "O, Ar, N",
	"Satellites":  "none",
	"Name of probes,orbiters,explorers":  "wow"
    };
let domString='';	
	    
for (var key in venusInfo) {
domString += '<br>';
domString += `${key}`+ `: ` +  `${venusInfo[key]} <br>`;

} return domString;
	     
};

module.exports = outputVenus;