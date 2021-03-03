const populationType = require('../../src/enum/populationType');

module.exports = {
    [populationType.THORP]: -10,
    [populationType.HAMLET]: -6,
    [populationType.VILLAGE]: -2,
    [populationType.SMALL_TOWN]: 0,
    [populationType.LARGE_TOWN]: 4,
    [populationType.SMALL_CITY]: 8,
    [populationType.LARGE_CITY]: 12,
    [populationType.METROPOLIS]: 18,
};
