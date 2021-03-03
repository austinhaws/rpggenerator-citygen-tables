const populationType = require('../enum/populationType');

module.exports = {
    [populationType.THORP]: { min: 0, max: 0 },
    [populationType.HAMLET]: { min: 0, max: 1 },
    [populationType.VILLAGE]: { min: 0, max: 2 },
    [populationType.SMALL_TOWN]: { min: 1, max: 3 },
    [populationType.LARGE_TOWN]: { min: 1, max: 4 },
    [populationType.SMALL_CITY]: { min: 2, max: 4 },
    [populationType.LARGE_CITY]: { min: 3, max: 7 },
    [populationType.METROPOLIS]: { min: 4, max: 8 },
};
