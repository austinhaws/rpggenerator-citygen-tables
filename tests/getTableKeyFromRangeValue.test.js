const { THORP, HAMLET, VILLAGE, SMALL_TOWN, LARGE_TOWN, SMALL_CITY, LARGE_CITY, METROPOLIS } = require('../src/enum/populationType');

const getTableKeyFromRangeValue = require("../src/getTableKeyFromRangeValue");
const populationNumWallsTable = require("../src/tables/populationNumWallsTable");

test('getTableKeyFromRangeValue', () => {
    expect(getTableKeyFromRangeValue({ table: populationNumWallsTable, value: 6 })).toBe(LARGE_CITY)
    expect(getTableKeyFromRangeValue({ table: populationNumWallsTable, value: 1 })).toBe(LARGE_TOWN)
    expect(getTableKeyFromRangeValue({ table: populationNumWallsTable, value: 0 })).toBe(THORP)
    expect(getTableKeyFromRangeValue({ table: populationNumWallsTable, value: -1 })).toBe(undefined)
    expect(getTableKeyFromRangeValue({ table: populationNumWallsTable, value: 100 })).toBe(undefined)
});
