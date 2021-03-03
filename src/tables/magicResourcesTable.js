const populationType = require('../../src/enum/populationType');

module.exports = {
    [populationType.THORP]: 0,
    [populationType.HAMLET]: 0,
    [populationType.VILLAGE]: 0.01,
    [populationType.SMALL_TOWN]: 0.05,
    [populationType.LARGE_TOWN]: 0.05,
    [populationType.SMALL_CITY]: 0.1,
    [populationType.LARGE_CITY]: 0.1,
    [populationType.METROPOLIS]: 0.1,
};
