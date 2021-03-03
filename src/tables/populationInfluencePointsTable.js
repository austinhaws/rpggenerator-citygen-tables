const populationType = require('../../src/enum/populationType');

module.exports = {
    [populationType.THORP]: { min: 18, max: 23 },
    [populationType.HAMLET]: { min: 31, max: 38 },
    [populationType.VILLAGE]: { min: 50, max: 62 },
    [populationType.SMALL_TOWN]: { min: 81, max: 89 },
    [populationType.LARGE_TOWN]: { min: 188, max: 353 },
    [populationType.SMALL_CITY]: { min: 1807, max: 2209 },
    [populationType.LARGE_CITY]: { min: 13520, max: 16830 },
    [populationType.METROPOLIS]: { min: 29982, max: 36645 },
};
