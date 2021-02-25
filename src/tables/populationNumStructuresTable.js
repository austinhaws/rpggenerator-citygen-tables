const { THORP, HAMLET, VILLAGE, SMALL_TOWN, LARGE_TOWN, SMALL_CITY, LARGE_CITY, METROPOLIS } = require('../enum/populationType');

module.exports = {
    [THORP]: { min: 0, max: 4 },
    [HAMLET]: { min: 5, max: 9 },
    [VILLAGE]: { min: 10, max: 14 },
    [SMALL_TOWN]: { min: 15, max: 19 },
    [LARGE_TOWN]: { min: 20, max: 39 },
    [SMALL_CITY]: { min: 40, max: 49 },
    [LARGE_CITY]: { min: 50, max: 69 },
    [METROPOLIS]: { min: 60, max: 80 },
};
