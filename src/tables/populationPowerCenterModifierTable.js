const populationType = require('../../src/enum/populationType');

module.exports = {
    [populationType.THORP]: -1,
    [populationType.HAMLET]: 0,
    [populationType.VILLAGE]: 1,
    [populationType.SMALL_TOWN]: 2,
    [populationType.LARGE_TOWN]: 3,
    [populationType.SMALL_CITY]: 4,
    [populationType.LARGE_CITY]: 5,
    [populationType.METROPOLIS]: 6,
};
