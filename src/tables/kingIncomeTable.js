const { THORP, HAMLET, VILLAGE, SMALL_TOWN, LARGE_TOWN, SMALL_CITY, LARGE_CITY, METROPOLIS } = require('../enum/populationType');

module.exports = {
    [THORP]: 0.003,
    [HAMLET]: 0.002,
    [VILLAGE]: 0.002,
    [SMALL_TOWN]: 0.01,
    [LARGE_TOWN]: 0.01,
    [SMALL_CITY]: 0.005,
    [LARGE_CITY]: 0.0025,
    [METROPOLIS]: 0.0005,
};
