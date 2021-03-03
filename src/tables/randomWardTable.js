const building = require('../enum/building');
const ward = require('../enum/ward');

// 	ward	    1->10 (1 = not common)	range	X >= percentile
// ----------------------------------------------------------------------------------------
//  ---- 25 % -----
// Patriciate	1	                    1	            1
// Administration2	                    10	            11
// Sea	        3	                    2	            13
// River	        4	                    3	            16
// Odiferous	    5	                    9	            25
//  ---- 75% ----
// Shanty	    6	                    5	            30
// Slums	        7               	    10              40
// Merchant	    8	                    15	            55
// Market	    9	                    20	            75
// Craftsmen	    10	                    25	            100
module.exports = {
    1: ward.PATRICIATE,
    11: ward.ADMINISTRATION,
    13: ward.SEA,
    16: ward.RIVER,
    25: ward.ODORIFEROUS,
    30: ward.SHANTY,
    40: ward.SLUM,
    55: ward.MERCHANT,
    75: ward.MARKET,
    100: ward.CRAFTSMEN,
};
