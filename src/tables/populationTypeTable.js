const { THORP, HAMLET, VILLAGE, SMALL_TOWN, LARGE_TOWN, SMALL_CITY, LARGE_CITY, METROPOLIS } = require("../enum/populationType");

// random lookup value => result
module.exports = {
    10: THORP,
    30: HAMLET,
    50: VILLAGE,
    70: SMALL_TOWN,
    85: LARGE_TOWN,
    95: SMALL_CITY,
    99: LARGE_CITY,
    100: METROPOLIS,
};
