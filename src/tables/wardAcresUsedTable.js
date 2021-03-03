const populationType = require("../enum/populationType");

module.exports = {
    [populationType.THORP]: { min: 1, max: 2 },
    [populationType.HAMLET]: { min: 1, max: 3 },
    [populationType.VILLAGE]: { min: 2, max: 5 },
    [populationType.SMALL_TOWN]: { min: 2, max: 7 },
    [populationType.LARGE_TOWN]: { min: 3, max: 9 },
    [populationType.SMALL_CITY]: { min: 4, max: 11 },
    [populationType.LARGE_CITY]: { min: 5, max: 13 },
    [populationType.METROPOLIS]: { min: 6, max: 15 },
};
