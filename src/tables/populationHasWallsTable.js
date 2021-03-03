const populationType = require('../../src/enum/populationType');

module.exports = {
    [populationType.THORP]: 0,
    [populationType.HAMLET]: 0,
    [populationType.VILLAGE]: 0,
    [populationType.SMALL_TOWN]: 0,
    [populationType.LARGE_TOWN]: 5,
    [populationType.SMALL_CITY]: 50,
    [populationType.LARGE_CITY]: 75,
    [populationType.METROPOLIS]: 99,
};
