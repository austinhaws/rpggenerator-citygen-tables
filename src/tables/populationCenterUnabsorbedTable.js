const populationType = require('../../src/enum/populationType');

module.exports = {
    [populationType.THORP]: 0.05,
    [populationType.HAMLET]: 0.05,
    [populationType.VILLAGE]: 0.10,
    [populationType.SMALL_TOWN]: 0.15,
    [populationType.LARGE_TOWN]: 0.20,
    [populationType.SMALL_CITY]: 0.25,
    [populationType.LARGE_CITY]: 0.30,
    [populationType.METROPOLIS]: 0.30,
};
