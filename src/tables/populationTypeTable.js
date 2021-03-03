const populationType = require('../../src/enum/populationType');

// random lookup value => result
module.exports = {
    10: populationType.THORP,
    30: populationType.HAMLET,
    50: populationType.VILLAGE,
    70: populationType.SMALL_TOWN,
    85: populationType.LARGE_TOWN,
    95: populationType.SMALL_CITY,
    99: populationType.LARGE_CITY,
    100: populationType.METROPOLIS,
};
