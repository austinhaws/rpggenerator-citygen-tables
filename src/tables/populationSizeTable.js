const populationType = require('../../src/enum/populationType');

module.exports = {
    [populationType.THORP]: { min: 20, max: 80 },
    [populationType.HAMLET]: { min: 81, max: 400 },
    [populationType.VILLAGE]: { min: 401, max: 900 },
    [populationType.SMALL_TOWN]: { min: 901, max: 2000 },
    [populationType.LARGE_TOWN]: { min: 2001, max: 5000 },
    [populationType.SMALL_CITY]: { min: 5001, max: 12000 },
    [populationType.LARGE_CITY]: { min: 12001, max: 32000 },
    [populationType.METROPOLIS]: { min: 32001, max: 90000 },
};
