const populationType = require('../../src/enum/populationType');

module.exports = {
    [populationType.THORP]: { min: 0, max: 0 },
    [populationType.HAMLET]: { min: 0, max: 0 },
    [populationType.VILLAGE]: { min: 0, max: 0 },
    [populationType.SMALL_TOWN]: { min: 0, max: 0 },
    [populationType.LARGE_TOWN]: { min: 1, max: 1 },
    [populationType.SMALL_CITY]: { min: 1, max: 4 },
    [populationType.LARGE_CITY]: { min: 2, max: 6 },
    [populationType.METROPOLIS]: { min: 4, max: 9 },
};
