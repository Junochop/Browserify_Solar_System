"use strict";

const outputUranus = () => {
  
let uranusInfo = {
	"Name": "Uranus",
	"Year Discovered": "Big Bang",
	"Mass": "1.02 x 10<sup>26</sup> kg",
	"Size": "Medium",
	"Distance from Sun":  "2,871 milllion km",
	"Atmosphere Composition": "O, Ar, N",
	"Satellites":  "none",
	"Name of probes,orbiters,explorers":  "poop"
    };
let domString='';	
	    
for (var key in uranusInfo) {
domString += '<br>';
domString += `${key}`+ `: ` +  `${uranusInfo[key]} <br>`;

} return domString;
	     
};

module.exports = outputUranus;