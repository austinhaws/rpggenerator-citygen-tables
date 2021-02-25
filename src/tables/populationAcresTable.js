const { THORP, HAMLET, VILLAGE, SMALL_TOWN, LARGE_TOWN, SMALL_CITY, LARGE_CITY, METROPOLIS } = require('../enum/populationType');

// population per acre density (pg 55)
module.exports = {
    [THORP]: { min: 1, max: 9 },
    [HAMLET]: { min: 10, max: 19 },
    [VILLAGE]: { min: 20, max: 29 },
    [SMALL_TOWN]: { min: 30, max: 39 },
    [LARGE_TOWN]: { min: 40, max: 79 },
    [SMALL_CITY]: { min: 80, max: 120 },
    [LARGE_CITY]: { min: 121, max: 149 },
    [METROPOLIS]: { min: 150, max: 200 },
};
