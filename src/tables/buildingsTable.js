const building = require('../enum/building');
const ward = require('../enum/ward');

module.exports = {
    [ward.ADMINISTRATION]: {
        10: { building: building.HOUSE, minMax: { min: 2, max: 3 } },
        12: { building: building.WORKSHOP, minMax: { min: 2, max: 2 } },
        14: { building: building.HOUSE, minMax: { min: 2, max: 3 } },
        15: { building: building.WAREHOUSE, minMax: { min: 2, max: 3 } },
        16: { building: building.WAREHOUSE, minMax: { min: 2, max: 3 } },
        21: { building: building.WORKSHOP, minMax: { min: 2, max: 2 } },
        26: { building: building.WORKSHOP, minMax: { min: 2, max: 2 } },
        36: { building: building.TAVERN, minMax: { min: 2, max: 3 } },
        46: { building: building.ADMIN, minMax: { min: 2, max: 2 } },
        51: { building: building.STABLE, minMax: { min: 1, max: 3 } },
        56: { building: building.OFFICE, minMax: { min: 2, max: 3 } },
        61: { building: building.SHOP, minMax: { min: 2, max: 3 } },
        66: { building: building.WAREHOUSE, minMax: { min: 2, max: 3 } },
        70: { building: building.HOUSE, minMax: { min: 2, max: 3 } },
        74: { building: building.HOSPITAL, minMax: { min: 2, max: 3 } },
        76: { building: building.INN, minMax: { min: 2, max: 3 } },
        79: { building: building.INN, minMax: { min: 2, max: 3 } },
        81: { building: building.RELIGIOUS, minMax: { min: 1, max: 3 } },
        83: { building: building.RELIGIOUS, minMax: { min: 1, max: 3 } },
        85: { building: building.BATH, minMax: { min: 2, max: 3 } },
        87: { building: building.BATH, minMax: { min: 2, max: 3 } },
        89: { building: building.BATH_HOUSE, minMax: { min: 2, max: 3 } },
        91: { building: building.FOUNTAIN, minMax: { min: 2, max: 3 } },
        92: { building: building.WELL, minMax: { min: 2, max: 3 } },
        93: { building: building.LIBRARY, minMax: { min: 1, max: 2 } },
        94: { building: building.CEMETERY, minMax: { min: 2, max: 3 } },
        95: { building: building.ASYLUM, minMax: { min: 2, max: 3 } },
        96: { building: building.CISTERN, minMax: { min: 3, max: 4 } },
        97: { building: building.GUILD_HALL, minMax: { min: 3, max: 4 } },
        98: { building: building.GRANARY, minMax: { min: 2, max: 2 } },
        99: { building: building.PRISON, minMax: { min: 2, max: 2 } },
        100: { building: building.PLAZA, minMax: { min: 1, max: 3 } },
    },
    [ward.CRAFTSMEN]: {
        10: { building: building.WORKSHOP, minMax: { min: 2, max: 2 } },
        12: { building: building.WORKSHOP, minMax: { min: 2, max: 2 } },
        14: { building: building.WORKSHOP, minMax: { min: 2, max: 2 } },
        15: { building: building.WORKSHOP, minMax: { min: 2, max: 2 } },
        16: { building: building.WORKSHOP, minMax: { min: 2, max: 2 } },
        21: { building: building.WORKSHOP, minMax: { min: 2, max: 2 } },
        26: { building: building.WORKSHOP, minMax: { min: 2, max: 2 } },
        36: { building: building.WORKSHOP, minMax: { min: 2, max: 2 } },
        46: { building: building.HOUSE, minMax: { min: 2, max: 3 } },
        51: { building: building.SHOP, minMax: { min: 2, max: 3 } },
        56: { building: building.SHOP, minMax: { min: 2, max: 3 } },
        61: { building: building.TAVERN, minMax: { min: 2, max: 3 } },
        66: { building: building.TAVERN, minMax: { min: 2, max: 3 } },
        70: { building: building.WORKSHOP, minMax: { min: 2, max: 2 } },
        74: { building: building.BATH_HOUSE, minMax: { min: 2, max: 3 } },
        76: { building: building.WAREHOUSE, minMax: { min: 2, max: 2 } },
        79: { building: building.WAREHOUSE, minMax: { min: 2, max: 2 } },
        81: { building: building.HOSPITAL, minMax: { min: 2, max: 3 } },
        83: { building: building.HOSPITAL, minMax: { min: 2, max: 3 } },
        85: { building: building.RELIGIOUS, minMax: { min: 2, max: 3 } },
        87: { building: building.RELIGIOUS, minMax: { min: 2, max: 3 } },
        89: { building: building.TENEMENT, minMax: { min: 2, max: 2 } },
        91: { building: building.ADMIN, minMax: { min: 2, max: 2 } },
        92: { building: building.BATH, minMax: { min: 2, max: 3 } },
        93: { building: building.BATH, minMax: { min: 2, max: 3 } },
        94: { building: building.GUILD_HALL, minMax: { min: 3, max: 4 } },
        95: { building: building.GUILD_HALL, minMax: { min: 3, max: 4 } },
        96: { building: building.FOUNTAIN, minMax: { min: 2, max: 3 } },
        97: { building: building.FOUNTAIN, minMax: { min: 2, max: 3 } },
        98: { building: building.WELL, minMax: { min: 2, max: 3 } },
        99: { building: building.CISTERN, minMax: { min: 3, max: 4 } },
        100: { building: building.THEATER, minMax: { min: 2, max: 2 } },
    },
    [ward.GATE]: {
        10: { building: building.TAVERN, minMax: { min: 2, max: 3 } },
        12: { building: building.INN, minMax: { min: 2, max: 3 } },
        14: { building: building.INN, minMax: { min: 2, max: 3 } },
        15: { building: building.INN, minMax: { min: 2, max: 3 } },
        16: { building: building.HOUSE, minMax: { min: 2, max: 2 } },
        21: { building: building.TAVERN, minMax: { min: 2, max: 3 } },
        26: { building: building.WORKSHOP, minMax: { min: 2, max: 3 } },
        36: { building: building.HOUSE, minMax: { min: 2, max: 2 } },
        46: { building: building.INN, minMax: { min: 2, max: 3 } },
        51: { building: building.STABLE, minMax: { min: 2, max: 3 } },
        56: { building: building.STABLE, minMax: { min: 2, max: 3 } },
        61: { building: building.WAREHOUSE, minMax: { min: 2, max: 2 } },
        66: { building: building.WAREHOUSE, minMax: { min: 2, max: 2 } },
        70: { building: building.WORKSHOP, minMax: { min: 2, max: 3 } },
        74: { building: building.WORKSHOP, minMax: { min: 2, max: 3 } },
        76: { building: building.SHOP, minMax: { min: 2, max: 3 } },
        79: { building: building.SHOP, minMax: { min: 2, max: 3 } },
        81: { building: building.HOSPITAL, minMax: { min: 2, max: 2 } },
        83: { building: building.HOSPITAL, minMax: { min: 2, max: 2 } },
        85: { building: building.RELIGIOUS, minMax: { min: 2, max: 2 } },
        87: { building: building.RELIGIOUS, minMax: { min: 2, max: 2 } },
        89: { building: building.OFFICE, minMax: { min: 2, max: 3 } },
        91: { building: building.CORRAL, minMax: { min: 2, max: 2 } },
        92: { building: building.ADMIN, minMax: { min: 2, max: 2 } },
        93: { building: building.ADMIN, minMax: { min: 2, max: 2 } },
        94: { building: building.ADMIN, minMax: { min: 2, max: 2 } },
        95: { building: building.BATH_HOUSE, minMax: { min: 2, max: 2 } },
        96: { building: building.BATH_HOUSE, minMax: { min: 2, max: 2 } },
        97: { building: building.BATH_HOUSE, minMax: { min: 2, max: 2 } },
        98: { building: building.BATH, minMax: { min: 2, max: 2 } },
        99: { building: building.WELL, minMax: { min: 2, max: 2 } },
        100: { building: building.FOUNTAIN, minMax: { min: 2, max: 2 } },
    },
    [ward.LAYOUT_EMPTY]: {},
    [ward.MARKET]: {
        10: { building: building.WAREHOUSE, minMax: { min: 2, max: 3 } },
        12: { building: building.WAREHOUSE, minMax: { min: 2, max: 3 } },
        14: { building: building.WAREHOUSE, minMax: { min: 2, max: 3 } },
        15: { building: building.WAREHOUSE, minMax: { min: 2, max: 3 } },
        16: { building: building.WAREHOUSE, minMax: { min: 2, max: 3 } },
        21: { building: building.WAREHOUSE, minMax: { min: 2, max: 3 } },
        26: { building: building.TAVERN, minMax: { min: 1, max: 3 } },
        36: { building: building.TAVERN, minMax: { min: 1, max: 3 } },
        46: { building: building.SHOP, minMax: { min: 1, max: 3 } },
        51: { building: building.STABLE, minMax: { min: 1, max: 2 } },
        56: { building: building.OFFICE, minMax: { min: 1, max: 2 } },
        61: { building: building.ADMIN, minMax: { min: 1, max: 3 } },
        66: { building: building.SHOP, minMax: { min: 1, max: 3 } },
        70: { building: building.HOUSE, minMax: { min: 1, max: 2 } },
        74: { building: building.RELIGIOUS, minMax: { min: 1, max: 2 } },
        76: { building: building.INN, minMax: { min: 1, max: 3 } },
        79: { building: building.INN, minMax: { min: 1, max: 3 } },
        81: { building: building.SHOP, minMax: { min: 1, max: 3 } },
        83: { building: building.SHOP, minMax: { min: 1, max: 3 } },
        85: { building: building.SHOP, minMax: { min: 1, max: 3 } },
        87: { building: building.HOUSE, minMax: { min: 1, max: 2 } },
        89: { building: building.RELIGIOUS, minMax: { min: 1, max: 2 } },
        91: { building: building.BATH, minMax: { min: 1, max: 2 } },
        92: { building: building.BATH, minMax: { min: 1, max: 2 } },
        93: { building: building.BATH, minMax: { min: 1, max: 2 } },
        94: { building: building.FOUNTAIN, minMax: { min: 1, max: 3 } },
        95: { building: building.FOUNTAIN, minMax: { min: 1, max: 3 } },
        96: { building: building.WELL, minMax: { min: 1, max: 3 } },
        97: { building: building.CISTERN, minMax: { min: 1, max: 2 } },
        98: { building: building.GRANARY, minMax: { min: 2, max: 2 } },
        99: { building: building.GUILD_HALL, minMax: { min: 1, max: 3 } },
        100: { building: building.PLAZA, minMax: { min: 1, max: 3 } },
    },
    [ward.MERCHANT]: {
        10: { building: building.HOUSE, minMax: { min: 1, max: 3 } },
        12: { building: building.WORKSHOP, minMax: { min: 2, max: 3 } },
        14: { building: building.HOUSE, minMax: { min: 1, max: 3 } },
        15: { building: building.WORKSHOP, minMax: { min: 2, max: 3 } },
        16: { building: building.WORKSHOP, minMax: { min: 2, max: 3 } },
        21: { building: building.WORKSHOP, minMax: { min: 2, max: 3 } },
        26: { building: building.SHOP, minMax: { min: 1, max: 3 } },
        36: { building: building.SHOP, minMax: { min: 1, max: 3 } },
        46: { building: building.WAREHOUSE, minMax: { min: 2, max: 3 } },
        51: { building: building.STABLE, minMax: { min: 1, max: 3 } },
        56: { building: building.OFFICE, minMax: { min: 1, max: 3 } },
        61: { building: building.TAVERN, minMax: { min: 1, max: 3 } },
        66: { building: building.TAVERN, minMax: { min: 1, max: 3 } },
        70: { building: building.HOSPITAL, minMax: { min: 1, max: 3 } },
        74: { building: building.RELIGIOUS, minMax: { min: 1, max: 3 } },
        76: { building: building.INN, minMax: { min: 1, max: 3 } },
        79: { building: building.INN, minMax: { min: 1, max: 3 } },
        81: { building: building.REST, minMax: { min: 1, max: 3 } },
        83: { building: building.GUILD_HALL, minMax: { min: 1, max: 3 } },
        85: { building: building.FOUNTAIN, minMax: { min: 1, max: 3 } },
        87: { building: building.ADMIN, minMax: { min: 2, max: 2 } },
        89: { building: building.BATH_HOUSE, minMax: { min: 1, max: 3 } },
        91: { building: building.BATH, minMax: { min: 1, max: 3 } },
        92: { building: building.BATH, minMax: { min: 1, max: 3 } },
        93: { building: building.WELL, minMax: { min: 1, max: 3 } },
        94: { building: building.LIBRARY, minMax: { min: 1, max: 2 } },
        95: { building: building.GARDEN, minMax: { min: 2, max: 3 } },
        96: { building: building.CEMETERY, minMax: { min: 1, max: 3 } },
        97: { building: building.CISTERN, minMax: { min: 3, max: 4 } },
        98: { building: building.GRANARY, minMax: { min: 2, max: 2 } },
        99: { building: building.PLAZA, minMax: { min: 1, max: 3 } },
        100: { building: building.UNIVERSITY, minMax: { min: 1, max: 2 } },
    },
    [ward.MILITARY]: {
        10: { building: building.WAREHOUSE, minMax: { min: 3, max: 4 } },
        12: { building: building.BARRACK, minMax: { min: 4, max: 4 } },
        14: { building: building.BARRACK, minMax: { min: 4, max: 4 } },
        15: { building: building.BARRACK, minMax: { min: 4, max: 4 } },
        16: { building: building.BARRACK, minMax: { min: 4, max: 4 } },
        21: { building: building.BARRACK, minMax: { min: 4, max: 4 } },
        26: { building: building.WAREHOUSE, minMax: { min: 3, max: 4 } },
        36: { building: building.HOUSE, minMax: { min: 2, max: 4 } },
        46: { building: building.WORKSHOP, minMax: { min: 2, max: 2 } },
        51: { building: building.STABLE, minMax: { min: 2, max: 3 } },
        56: { building: building.STABLE, minMax: { min: 2, max: 3 } },
        61: { building: building.TAVERN, minMax: { min: 2, max: 4 } },
        66: { building: building.TAVERN, minMax: { min: 2, max: 4 } },
        70: { building: building.BARRACK, minMax: { min: 4, max: 4 } },
        74: { building: building.WORKSHOP, minMax: { min: 2, max: 2 } },
        76: { building: building.SHOP, minMax: { min: 2, max: 4 } },
        78: { building: building.SHOP, minMax: { min: 2, max: 4 } },
        81: { building: building.WORKSHOP, minMax: { min: 2, max: 2 } },
        83: { building: building.WORKSHOP, minMax: { min: 2, max: 2 } },
        85: { building: building.PRISON, minMax: { min: 4, max: 4 } },
        87: { building: building.CORRAL, minMax: { min: 2, max: 2 } },
        89: { building: building.RELIGIOUS, minMax: { min: 2, max: 3 } },
        91: { building: building.ADMIN, minMax: { min: 2, max: 2 } },
        92: { building: building.ADMIN, minMax: { min: 2, max: 2 } },
        93: { building: building.ADMIN, minMax: { min: 2, max: 2 } },
        94: { building: building.ADMIN, minMax: { min: 2, max: 2 } },
        95: { building: building.BATH, minMax: { min: 2, max: 3 } },
        96: { building: building.WELL, minMax: { min: 2, max: 4 } },
        97: { building: building.FOUNTAIN, minMax: { min: 2, max: 4 } },
        98: { building: building.GRANARY, minMax: { min: 2, max: 2 } },
        99: { building: building.INFIRMARY, minMax: { min: 2, max: 2 } },
        100: { building: building.COLISEUM, minMax: { min: 2, max: 3 } },
    },
    [ward.ODORIFEROUS]: {
        10: { building: building.HOUSE, minMax: { min: 3, max: 4 } },
        12: { building: building.WORKSHOP, minMax: { min: 3, max: 4 } },
        14: { building: building.WORKSHOP, minMax: { min: 3, max: 4 } },
        15: { building: building.WORKSHOP, minMax: { min: 3, max: 4 } },
        16: { building: building.HOUSE, minMax: { min: 3, max: 4 } },
        21: { building: building.HOUSE, minMax: { min: 3, max: 4 } },
        26: { building: building.WORKSHOP, minMax: { min: 3, max: 4 } },
        36: { building: building.HOUSE, minMax: { min: 3, max: 4 } },
        46: { building: building.WORKSHOP, minMax: { min: 3, max: 4 } },
        51: { building: building.TAVERN, minMax: { min: 3, max: 4 } },
        56: { building: building.TAVERN, minMax: { min: 3, max: 4 } },
        61: { building: building.WAREHOUSE, minMax: { min: 3, max: 4 } },
        66: { building: building.SHOP, minMax: { min: 3, max: 4 } },
        70: { building: building.TENEMENT, minMax: { min: 3, max: 4 } },
        74: { building: building.TENEMENT, minMax: { min: 3, max: 4 } },
        76: { building: building.INN, minMax: { min: 3, max: 4 } },
        79: { building: building.INN, minMax: { min: 3, max: 4 } },
        81: { building: building.WORKSHOP, minMax: { min: 3, max: 4 } },
        83: { building: building.HOSPITAL, minMax: { min: 3, max: 4 } },
        85: { building: building.HOSPITAL, minMax: { min: 3, max: 4 } },
        87: { building: building.RELIGIOUS, minMax: { min: 2, max: 3 } },
        89: { building: building.RELIGIOUS, minMax: { min: 2, max: 3 } },
        91: { building: building.CORRAL, minMax: { min: 2, max: 2 } },
        92: { building: building.BATH, minMax: { min: 3, max: 4 } },
        93: { building: building.BATH, minMax: { min: 3, max: 4 } },
        94: { building: building.BATH, minMax: { min: 3, max: 4 } },
        95: { building: building.BATH, minMax: { min: 3, max: 4 } },
        96: { building: building.BATH, minMax: { min: 3, max: 4 } },
        97: { building: building.ADMIN, minMax: { min: 2, max: 2 } },
        98: { building: building.WELL, minMax: { min: 3, max: 4 } },
        99: { building: building.FOUNTAIN, minMax: { min: 3, max: 4 } },
        100: { building: building.CEMETERY, minMax: { min: 3, max: 4 } },
    },
    [ward.PATRICIATE]: {
        10: { building: building.HOUSE, minMax: { min: 1, max: 2 } },
        12: { building: building.HOUSE, minMax: { min: 1, max: 2 } },
        14: { building: building.WAREHOUSE, minMax: { min: 1, max: 2 } },
        15: { building: building.WAREHOUSE, minMax: { min: 1, max: 2 } },
        16: { building: building.WAREHOUSE, minMax: { min: 1, max: 2 } },
        21: { building: building.HOUSE, minMax: { min: 1, max: 2 } },
        26: { building: building.HOUSE, minMax: { min: 1, max: 2 } },
        36: { building: building.TAVERN, minMax: { min: 1, max: 2 } },
        46: { building: building.SHOP, minMax: { min: 1, max: 2 } },
        51: { building: building.STABLE, minMax: { min: 1, max: 2 } },
        56: { building: building.OFFICE, minMax: { min: 1, max: 2 } },
        61: { building: building.INN, minMax: { min: 1, max: 2 } },
        66: { building: building.RELIGIOUS, minMax: { min: 1, max: 2 } },
        70: { building: building.WAREHOUSE, minMax: { min: 1, max: 2 } },
        74: { building: building.WAREHOUSE, minMax: { min: 1, max: 2 } },
        76: { building: building.GARDEN, minMax: { min: 1, max: 2 } },
        79: { building: building.BATH, minMax: { min: 1, max: 2 } },
        81: { building: building.BATH, minMax: { min: 1, max: 2 } },
        83: { building: building.RESTAURANT, minMax: { min: 1, max: 2 } },
        85: { building: building.RESTAURANT, minMax: { min: 1, max: 2 } },
        87: { building: building.LIBRARY, minMax: { min: 1, max: 2 } },
        89: { building: building.HOSPITAL, minMax: { min: 1, max: 2 } },
        91: { building: building.ADMIN, minMax: { min: 2, max: 3 } },
        92: { building: building.FOUNTAIN, minMax: { min: 1, max: 2 } },
        93: { building: building.FOUNTAIN, minMax: { min: 1, max: 2 } },
        94: { building: building.WELL, minMax: { min: 1, max: 2 } },
        95: { building: building.BATH_HOUSE, minMax: { min: 1, max: 2 } },
        96: { building: building.CEMETERY, minMax: { min: 1, max: 2 } },
        97: { building: building.CISTERN, minMax: { min: 2, max: 2 } },
        98: { building: building.GRANARY, minMax: { min: 3, max: 3 } },
        99: { building: building.PLAZA, minMax: { min: 1, max: 2 } },
        100: { building: building.UNIVERSITY, minMax: { min: 1, max: 2 } },
    },
    [ward.RIVER]: {
        10: { building: building.HOUSE, minMax: { min: 3, max: 4 } },
        12: { building: building.WORKSHOP, minMax: { min: 3, max: 4 } },
        14: { building: building.WORKSHOP, minMax: { min: 3, max: 4 } },
        15: { building: building.WORKSHOP, minMax: { min: 3, max: 4 } },
        16: { building: building.HOUSE, minMax: { min: 3, max: 4 } },
        21: { building: building.HOUSE, minMax: { min: 3, max: 4 } },
        26: { building: building.HOUSE, minMax: { min: 3, max: 4 } },
        36: { building: building.HOUSE, minMax: { min: 3, max: 4 } },
        46: { building: building.TENEMENT, minMax: { min: 4, max: 4 } },
        51: { building: building.INN, minMax: { min: 3, max: 4 } },
        56: { building: building.INN, minMax: { min: 3, max: 4 } },
        61: { building: building.TENEMENT, minMax: { min: 3, max: 4 } },
        66: { building: building.SHOP, minMax: { min: 3, max: 4 } },
        70: { building: building.WORKSHOP, minMax: { min: 3, max: 4 } },
        74: { building: building.WORKSHOP, minMax: { min: 3, max: 4 } },
        76: { building: building.MILL, minMax: { min: 3, max: 4 } },
        79: { building: building.MILL, minMax: { min: 3, max: 4 } },
        81: { building: building.WORKSHOP, minMax: { min: 3, max: 4 } },
        83: { building: building.WORKSHOP, minMax: { min: 3, max: 4 } },
        85: { building: building.OFFICE, minMax: { min: 3, max: 4 } },
        87: { building: building.RELIGIOUS, minMax: { min: 2, max: 3 } },
        89: { building: building.BATH_HOUSE, minMax: { min: 3, max: 4 } },
        91: { building: building.CORRAL, minMax: { min: 2, max: 2 } },
        92: { building: building.BATH, minMax: { min: 3, max: 4 } },
        93: { building: building.BATH, minMax: { min: 3, max: 4 } },
        94: { building: building.BATH, minMax: { min: 3, max: 4 } },
        95: { building: building.BATH, minMax: { min: 3, max: 4 } },
        96: { building: building.BATH, minMax: { min: 3, max: 4 } },
        97: { building: building.ADMIN, minMax: { min: 2, max: 2 } },
        98: { building: building.GRANARY, minMax: { min: 2, max: 2 } },
        99: { building: building.WELL, minMax: { min: 3, max: 4 } },
        100: { building: building.FOUNTAIN, minMax: { min: 3, max: 4 } },
    },
    [ward.SEA]: {
        10: { building: building.HOUSE, minMax: { min: 3, max: 4 } },
        12: { building: building.WORKSHOP, minMax: { min: 3, max: 4 } },
        14: { building: building.WORKSHOP, minMax: { min: 3, max: 4 } },
        15: { building: building.WORKSHOP, minMax: { min: 3, max: 4 } },
        16: { building: building.HOUSE, minMax: { min: 3, max: 4 } },
        21: { building: building.HOUSE, minMax: { min: 3, max: 4 } },
        26: { building: building.HOUSE, minMax: { min: 3, max: 4 } },
        36: { building: building.HOUSE, minMax: { min: 3, max: 4 } },
        46: { building: building.TENEMENT, minMax: { min: 4, max: 4 } },
        51: { building: building.INN, minMax: { min: 3, max: 4 } },
        56: { building: building.INN, minMax: { min: 3, max: 4 } },
        61: { building: building.TENEMENT, minMax: { min: 3, max: 4 } },
        66: { building: building.SHOP, minMax: { min: 3, max: 4 } },
        70: { building: building.WORKSHOP, minMax: { min: 3, max: 4 } },
        74: { building: building.WORKSHOP, minMax: { min: 3, max: 4 } },
        76: { building: building.MILL, minMax: { min: 3, max: 4 } },
        79: { building: building.MILL, minMax: { min: 3, max: 4 } },
        81: { building: building.WORKSHOP, minMax: { min: 3, max: 4 } },
        83: { building: building.WORKSHOP, minMax: { min: 3, max: 4 } },
        85: { building: building.OFFICE, minMax: { min: 3, max: 4 } },
        87: { building: building.RELIGIOUS, minMax: { min: 2, max: 3 } },
        89: { building: building.BATH_HOUSE, minMax: { min: 3, max: 4 } },
        91: { building: building.CORRAL, minMax: { min: 2, max: 2 } },
        92: { building: building.BATH, minMax: { min: 3, max: 4 } },
        93: { building: building.BATH, minMax: { min: 3, max: 4 } },
        94: { building: building.BATH, minMax: { min: 3, max: 4 } },
        95: { building: building.BATH, minMax: { min: 3, max: 4 } },
        96: { building: building.BATH, minMax: { min: 3, max: 4 } },
        97: { building: building.ADMIN, minMax: { min: 2, max: 2 } },
        98: { building: building.GRANARY, minMax: { min: 2, max: 2 } },
        99: { building: building.WELL, minMax: { min: 3, max: 4 } },
        100: { building: building.FOUNTAIN, minMax: { min: 3, max: 4 } },
    },
    [ward.SHANTY]: {
        10: { building: building.HOUSE, minMax: { min: 4, max: 4 } },
        12: { building: building.WORKSHOP, minMax: { min: 4, max: 4 } },
        14: { building: building.WORKSHOP, minMax: { min: 4, max: 4 } },
        15: { building: building.WORKSHOP, minMax: { min: 4, max: 4 } },
        16: { building: building.HOUSE, minMax: { min: 4, max: 4 } },
        21: { building: building.HOUSE, minMax: { min: 4, max: 4 } },
        26: { building: building.HOUSE, minMax: { min: 4, max: 4 } },
        36: { building: building.HOUSE, minMax: { min: 4, max: 4 } },
        46: { building: building.HOUSE, minMax: { min: 4, max: 4 } },
        51: { building: building.HOUSE, minMax: { min: 4, max: 4 } },
        56: { building: building.HOUSE, minMax: { min: 4, max: 4 } },
        61: { building: building.HOUSE, minMax: { min: 4, max: 4 } },
        66: { building: building.HOUSE, minMax: { min: 4, max: 4 } },
        70: { building: building.HOUSE, minMax: { min: 4, max: 4 } },
        74: { building: building.HOUSE, minMax: { min: 4, max: 4 } },
        76: { building: building.HOUSE, minMax: { min: 4, max: 4 } },
        79: { building: building.HOUSE, minMax: { min: 4, max: 4 } },
        81: { building: building.HOUSE, minMax: { min: 4, max: 4 } },
        83: { building: building.HOUSE, minMax: { min: 4, max: 4 } },
        85: { building: building.TAVERN, minMax: { min: 4, max: 4 } },
        87: { building: building.TAVERN, minMax: { min: 4, max: 4 } },
        89: { building: building.TAVERN, minMax: { min: 4, max: 4 } },
        91: { building: building.TAVERN, minMax: { min: 4, max: 4 } },
        92: { building: building.TAVERN, minMax: { min: 4, max: 4 } },
        93: { building: building.TAVERN, minMax: { min: 4, max: 4 } },
        94: { building: building.WORKSHOP, minMax: { min: 4, max: 4 } },
        95: { building: building.WORKSHOP, minMax: { min: 4, max: 4 } },
        96: { building: building.WORKSHOP, minMax: { min: 4, max: 4 } },
        97: { building: building.WORKSHOP, minMax: { min: 4, max: 4 } },
        98: { building: building.WORKSHOP, minMax: { min: 4, max: 4 } },
        99: { building: building.WELL, minMax: { min: 4, max: 4 } },
        100: { building: building.FOUNTAIN, minMax: { min: 4, max: 4 } },
    },
    [ward.SLUM]: {
        10: { building: building.HOUSE, minMax: { min: 4, max: 4 } },
        12: { building: building.WORKSHOP, minMax: { min: 4, max: 4 } },
        14: { building: building.WORKSHOP, minMax: { min: 4, max: 4 } },
        15: { building: building.WORKSHOP, minMax: { min: 4, max: 4 } },
        16: { building: building.HOUSE, minMax: { min: 4, max: 4 } },
        21: { building: building.HOUSE, minMax: { min: 4, max: 4 } },
        26: { building: building.HOUSE, minMax: { min: 4, max: 4 } },
        36: { building: building.HOUSE, minMax: { min: 4, max: 4 } },
        46: { building: building.TENEMENT, minMax: { min: 4, max: 4 } },
        51: { building: building.TAVERN, minMax: { min: 4, max: 4 } },
        56: { building: building.TAVERN, minMax: { min: 4, max: 4 } },
        61: { building: building.WAREHOUSE, minMax: { min: 4, max: 4 } },
        66: { building: building.SHOP, minMax: { min: 4, max: 4 } },
        70: { building: building.WORKSHOP, minMax: { min: 4, max: 4 } },
        74: { building: building.WORKSHOP, minMax: { min: 4, max: 4 } },
        76: { building: building.INN, minMax: { min: 4, max: 4 } },
        79: { building: building.INN, minMax: { min: 4, max: 4 } },
        81: { building: building.WORKSHOP, minMax: { min: 4, max: 4 } },
        83: { building: building.WORKSHOP, minMax: { min: 4, max: 4 } },
        85: { building: building.HOSPITAL, minMax: { min: 4, max: 4 } },
        87: { building: building.HOSPITAL, minMax: { min: 4, max: 4 } },
        89: { building: building.RELIGIOUS, minMax: { min: 3, max: 4 } },
        91: { building: building.RELIGIOUS, minMax: { min: 3, max: 4 } },
        92: { building: building.BATH, minMax: { min: 4, max: 4 } },
        93: { building: building.BATH, minMax: { min: 4, max: 4 } },
        94: { building: building.BATH, minMax: { min: 4, max: 4 } },
        95: { building: building.BATH, minMax: { min: 4, max: 4 } },
        96: { building: building.BATH, minMax: { min: 4, max: 4 } },
        97: { building: building.ADMIN, minMax: { min: 2, max: 2 } },
        98: { building: building.WELL, minMax: { min: 4, max: 4 } },
        99: { building: building.FOUNTAIN, minMax: { min: 4, max: 4 } },
        100: { building: building.CEMETERY, minMax: { min: 3, max: 4 } },
    },
};