const populationType = require('../../src/enum/populationType');

// population per acre density (pg 55)
module.exports = {
    [populationType.THORP]: { min: 1, max: 9 },
    [populationType.HAMLET]: { min: 10, max: 19 },
    [populationType.VILLAGE]: { min: 20, max: 29 },
    [populationType.SMALL_TOWN]: { min: 30, max: 39 },
    [populationType.LARGE_TOWN]: { min: 40, max: 79 },
    [populationType.SMALL_CITY]: { min: 80, max: 120 },
    [populationType.LARGE_CITY]: { min: 121, max: 149 },
    [populationType.METROPOLIS]: { min: 150, max: 200 },
};
