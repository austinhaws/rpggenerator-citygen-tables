const { THORP, HAMLET, VILLAGE, SMALL_TOWN, LARGE_TOWN, SMALL_CITY, LARGE_CITY, METROPOLIS } = require('../enum/populationType');

module.exports = {
    [THORP]: 1,
    [HAMLET]: 1,
    [VILLAGE]: 1,
    [SMALL_TOWN]: 3,
    [LARGE_TOWN]: 5,
    [SMALL_CITY]: 8,
    [LARGE_CITY]: 18,
    [METROPOLIS]: 35,
};
