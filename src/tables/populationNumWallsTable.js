const { THORP, HAMLET, VILLAGE, SMALL_TOWN, LARGE_TOWN, SMALL_CITY, LARGE_CITY, METROPOLIS } = require('../enum/populationType');

module.exports = {
    [THORP]: { min: 0, max: 0 },
    [HAMLET]: { min: 0, max: 0 },
    [VILLAGE]: { min: 0, max: 0 },
    [SMALL_TOWN]: { min: 0, max: 0 },
    [LARGE_TOWN]: { min: 1, max: 1 },
    [SMALL_CITY]: { min: 1, max: 4 },
    [LARGE_CITY]: { min: 2, max: 6 },
    [METROPOLIS]: { min: 4, max: 9 },
};
