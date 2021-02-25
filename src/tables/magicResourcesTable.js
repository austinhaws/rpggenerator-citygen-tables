const { THORP, HAMLET, VILLAGE, SMALL_TOWN, LARGE_TOWN, SMALL_CITY, LARGE_CITY, METROPOLIS } = require('../enum/populationType');

module.exports = {
    [THORP]: 0,
    [HAMLET]: 0,
    [VILLAGE]: 0.01,
    [SMALL_TOWN]: 0.05,
    [LARGE_TOWN]: 0.05,
    [SMALL_CITY]: 0.1,
    [LARGE_CITY]: 0.1,
    [METROPOLIS]: 0.1,
};
