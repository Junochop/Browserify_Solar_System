"use strict";

const outputEarth = () => {
  
let earthInfo = {
	"Name": "Earth",
	"Year Discovered": "0",
	"Mass": "15.98 x 10<sup>24</sup> kg",
	"Size": "12,756 km in radius",
	"Distance from Sun":  "149.6 milllion km",
	"Atmosphere Composition": "O, Ar, N",
	"Satellites":  "XM Radio, Sirius",
	"Name of probes,orbiters,explorers":  "LandSat"
    };
let domString='';	
	    
for (var key in earthInfo) {
domString += '<br>';
domString += `${key}`+ `: ` +  `${earthInfo[key]} <br>`;

} return domString;
	     
};

module.exports = outputEarth;