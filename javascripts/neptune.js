"use strict";

const outputNeptune = () => {
  
let neptuneInfo = {
	"Name": "Neptune",
	"Year Discovered": "0",
	"Mass": "10kg",
	"Size": "Medium",
	"Distance from Sun":  "57.9 milllion km",
	"Atmosphere Composition": "Carbon Gas",
	"Satellites":  "XM Radio",
	"Name of probes,orbiters,explorers":  "wow"
    };
let domString='';	
	    
for (var key in neptuneInfo) {
domString += '<br>';
domString += `${key}`+ `: ` +  `${neptuneInfo[key]} <br>`;

} return domString;
	     
};

module.exports = outputNeptune;