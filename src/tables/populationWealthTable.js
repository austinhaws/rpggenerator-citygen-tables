const { THORP, HAMLET, VILLAGE, SMALL_TOWN, LARGE_TOWN, SMALL_CITY, LARGE_CITY, METROPOLIS } = require('../enum/populationType');

module.exports = {
    [THORP]: 40,
    [HAMLET]: 100,
    [VILLAGE]: 200,
    [SMALL_TOWN]: 800,
    [LARGE_TOWN]: 7000,
    [SMALL_CITY]: 15000,
    [LARGE_CITY]: 40000,
    [METROPOLIS]: 160000,
};
