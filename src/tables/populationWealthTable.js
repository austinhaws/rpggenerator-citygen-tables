const populationType = require('../../src/enum/populationType');

module.exports = {
    [populationType.THORP]: 40,
    [populationType.HAMLET]: 100,
    [populationType.VILLAGE]: 200,
    [populationType.SMALL_TOWN]: 800,
    [populationType.LARGE_TOWN]: 7000,
    [populationType.SMALL_CITY]: 15000,
    [populationType.LARGE_CITY]: 40000,
    [populationType.METROPOLIS]: 160000,
};
