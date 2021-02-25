const moduleExports = require('../index.js');
const populationType = require('../src/enum/populationType.js');
const getTableKeyFromRangeValue = require('../src/getTableKeyFromRangeValue.js');
const populationHasWallsTable = require('../src/tables/populationHasWallsTable.js');
const populationMilitaryTable = require('../src/tables/populationMilitaryTable.js');
const populationNumWallsTable = require('../src/tables/populationNumWallsTable.js');
const populationAcresTable = require('../src/tables/populationAcresTable.js');
const populationNumStructuresTable = require('../src/tables/populationNumStructuresTable.js');

test('exports', () => {
    const knownExports = {
        getTableKeyFromRangeValue,
        populationHasWallsTable,
        populationMilitaryTable,
        populationNumWallsTable,
        populationAcresTable,
        populationNumStructuresTable,
        populationType,
    };

    expect(Object.keys(moduleExports)).toStrictEqual(Object.keys(knownExports));
    Object.entries(knownExports)
        .forEach(([key, value]) => expect(moduleExports[key]).toBe(value));
});
