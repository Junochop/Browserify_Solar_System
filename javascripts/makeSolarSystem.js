"use strict";

const uranus = require('./uranus');
const jupiter = require('./jupiter');
const mars = require('./mars');
const sun = require('./sun');
const neptune = require('./neptune');
const venus = require('./venus');
const earth = require('./earth');
const mercury = require('./mercury');
const saturn = require('./saturn');
const solarSystemGenerator = {

   uranus, jupiter, mars, sun, saturn, neptune, venus, earth, mercury

};

module.exports = solarSystemGenerator;