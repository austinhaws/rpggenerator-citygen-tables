const populationType = require('../../src/enum/populationType');

module.exports = {
    [populationType.THORP]: 1,
    [populationType.HAMLET]: 1,
    [populationType.VILLAGE]: 1,
    [populationType.SMALL_TOWN]: 3,
    [populationType.LARGE_TOWN]: 5,
    [populationType.SMALL_CITY]: 8,
    [populationType.LARGE_CITY]: 18,
    [populationType.METROPOLIS]: 35,
};
