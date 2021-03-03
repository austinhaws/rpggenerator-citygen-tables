const populationType = require('../../src/enum/populationType');

module.exports = {
    [populationType.THORP]: 2,
    [populationType.HAMLET]: 4,
    [populationType.VILLAGE]: 8,
    [populationType.SMALL_TOWN]: null,
    [populationType.LARGE_TOWN]: null,
    [populationType.SMALL_CITY]: null,
    [populationType.LARGE_CITY]: null,
    [populationType.METROPOLIS]: null,
};
