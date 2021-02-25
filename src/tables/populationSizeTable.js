const { THORP, HAMLET, VILLAGE, SMALL_TOWN, LARGE_TOWN, SMALL_CITY, LARGE_CITY, METROPOLIS } = require('../enum/populationType');

module.exports = {
    [THORP]: { min: 20, max: 80 },
    [HAMLET]: { min: 81, max: 400 },
    [VILLAGE]: { min: 401, max: 900 },
    [SMALL_TOWN]: { min: 901, max: 2000 },
    [LARGE_TOWN]: { min: 2001, max: 5000 },
    [SMALL_CITY]: { min: 5001, max: 12000 },
    [LARGE_CITY]: { min: 12001, max: 32000 },
    [METROPOLIS]: { min: 32001, max: 90000 },
};
