const populationType = require('../../src/enum/populationType');

module.exports = {
    [populationType.THORP]: { min: 0, max: 0 },
    [populationType.HAMLET]: { min: 0, max: 0 },
    [populationType.VILLAGE]: { min: 0, max: 2 },
    [populationType.SMALL_TOWN]: { min: 0, max: 3 },
    [populationType.LARGE_TOWN]: { min: 0, max: 4 },
    [populationType.SMALL_CITY]: { min: 0, max: 5 },
    [populationType.LARGE_CITY]: { min: 0, max: 6 },
    [populationType.METROPOLIS]: { min: 0, max: 7 },
};
