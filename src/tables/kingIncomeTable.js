const populationType = require('../../src/enum/populationType');

module.exports = {
    [populationType.THORP]: 0.003,
    [populationType.HAMLET]: 0.002,
    [populationType.VILLAGE]: 0.002,
    [populationType.SMALL_TOWN]: 0.01,
    [populationType.LARGE_TOWN]: 0.01,
    [populationType.SMALL_CITY]: 0.005,
    [populationType.LARGE_CITY]: 0.0025,
    [populationType.METROPOLIS]: 0.0005,
};
