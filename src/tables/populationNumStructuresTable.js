const populationType = require('../../src/enum/populationType');

module.exports = {
    [populationType.THORP]: { min: 0, max: 4 },
    [populationType.HAMLET]: { min: 5, max: 9 },
    [populationType.VILLAGE]: { min: 10, max: 14 },
    [populationType.SMALL_TOWN]: { min: 15, max: 19 },
    [populationType.LARGE_TOWN]: { min: 20, max: 39 },
    [populationType.SMALL_CITY]: { min: 40, max: 49 },
    [populationType.LARGE_CITY]: { min: 50, max: 69 },
    [populationType.METROPOLIS]: { min: 60, max: 80 },
};
