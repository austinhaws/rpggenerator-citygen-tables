const { THORP, HAMLET, VILLAGE, SMALL_TOWN, LARGE_TOWN, SMALL_CITY, LARGE_CITY, METROPOLIS } = require('../enum/populationType');

module.exports = {
    [THORP]: 0,
    [HAMLET]: 0,
    [VILLAGE]: 0,
    [SMALL_TOWN]: 0,
    [LARGE_TOWN]: 5,
    [SMALL_CITY]: 50,
    [LARGE_CITY]: 75,
    [METROPOLIS]: 99,
};
