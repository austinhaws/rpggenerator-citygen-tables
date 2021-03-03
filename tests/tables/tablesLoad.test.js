const moduleExports = require('../../index.js');
const buildingsByWardTable = require('../../src/tables/buildingsByWardTable');
const buildingsTable = require('../../src/tables/buildingsTable');
const buildingSubTypesTable = require('../../src/tables/buildingSubTypesTable');
const commoditiesTable = require('../../src/tables/commoditiesTable');
const commodityCountTable = require('../../src/tables/commodityCountTable');
const famousOccurrenceTable = require('../../src/tables/famousOccurrenceTable');
const famousTable = require('../../src/tables/famousTable');
const guildModifiersTable = require('../../src/tables/guildModifiersTable');
const guildsTable = require('../../src/tables/guildsTable');
const getAllDirFiles = require('../util/getAllDirFiles');
const integrationTable = require('../../src/tables/integrationTable');
const kingIncomeTable = require('../../src/tables/kingIncomeTable');
const magicResourcesTable = require('../../src/tables/magicResourcesTable');
const maxWardsByPopulationType = require('../../src/tables/maxWardsByPopulationType');
const nameNumSyllablesTable = require('../../src/tables/nameNumSyllablesTable');
const nameNumWordsTable = require('../../src/tables/nameNumWordsTable');
const namePrefixesTable = require('../../src/tables/namePrefixesTable');
const nameSuffixesTable = require('../../src/tables/nameSuffixesTable');
const nameWordsCountTable = require('../../src/tables/nameWordsCountTable');
const nameWordsTable = require('../../src/tables/nameWordsTable');
const npcClassesMaxLevelTable = require('../../src/tables/npcClassesMaxLevelTable');
const npcClassInfluenceTable = require('../../src/tables/npcClassInfluenceTable');
const npcClassRandomClassTable = require('../../src/tables/npcClassRandomClassTable');
const npcLevelModifierTable = require('../../src/tables/npcLevelModifierTable');
const populationAcresTable = require('../../src/tables/populationAcresTable');
const populationCenterUnabsorbedTable = require('../../src/tables/populationCenterUnabsorbedTable');
const populationInfluencePointsTable = require('../../src/tables/populationInfluencePointsTable');
const populationHasWallsTable = require('../../src/tables/populationHasWallsTable');
const populationMilitaryTable = require('../../src/tables/populationMilitaryTable');
const populationNumStructuresTable = require('../../src/tables/populationNumStructuresTable');
const populationNumWallsTable = require('../../src/tables/populationNumWallsTable');
const populationPowerCenterModifierTable = require('../../src/tables/populationPowerCenterModifierTable');
const populationPowerCenterTable = require('../../src/tables/populationPowerCenterTable');
const populationSizeTable = require('../../src/tables/populationSizeTable');
const populationTypeTable = require('../../src/tables/populationTypeTable');
const populationWardDensityTable = require('../../src/tables/populationWardDensityTable');
const populationWealthTable = require('../../src/tables/populationWealthTable');
const powerCenterAlignmentTable = require('../../src/tables/powerCenterAlignmentTable');
const powerCenterTypeTable = require('../../src/tables/powerCenterAlignmentTable');
const professionRatioTable = require('../../src/tables/professionRatioTable');
const professionTable = require('../../src/tables/professionTable');
const racePercentsTable = require('../../src/tables/racePercentsTable');
const racesRandomTable = require('../../src/tables/racesRandomTable');
const syllablesTable = require('../../src/tables/syllablesTable');
const wardAcresUsedTable = require('../../src/tables/wardAcresUsedTable');
const invalidTableKeyValues = require('./methods/invalidTableKeyValues/isTableKeyValuesValid.js');
const ward = require('../../src/enum/ward');
const building = require('../../src/enum/building');
const populationType = require('../../src/enum/populationType.js');
const profession = require('../../src/enum/profession.js');
const integration = require('../../src/enum/integration.js');
const npcClass = require('../../src/enum/npcClass.js');
const isValueNotValid = require('./methods/invalidTableKeyValues/isValueNotValid.js');
const race = require('../../src/enum/race.js');
const randomWardTable = require('../../src/tables/randomWardTable.js');

const valueIsNumber = ({ allowNull = false } = {}) => ({ value }) => {
    const num = +value;
    // console.log('valueIsNumber', { num, value });
    return (allowNull || value !== null) && (num || (num === 0));
};
const valueIsString = () => ({ value }) => value && (typeof value === 'string');
const valueIsInEnum = list => {
    const enumValues = Object.values(list);
    return ({ value }) => enumValues.includes(value);
};
const valuesAreInEnum = list => {
    const enumValues = Object.values(list);
    return ({ value }) => value.some(subValue => !enumValues.includes(subValue)) === false;
};
const valueIsMinMax = () => ({ value }) => {
    const isValid = value &&
        value.min !== undefined &&
        value.max !== undefined &&
        value.min <= value.max;

    expect(!!value).toBe(true);
    expect(value.min).not.toBe(undefined);
    expect(value.max).not.toBe(undefined);
    expect(value.min).toBeLessThanOrEqual(value.max);

    return isValid;
};

const createTableIsArrayTest = valueIsValidFunc => ({
    func: ({ table }) => table.some(entry => !valueIsValidFunc()({ value: entry })),
    result: false,
});

const testLayer = ({ layer, level, tests }) => {
    let testsInvalid = false;
// console.log({level, layer});
    if (1 === tests.length) {
        testsInvalid = isValueNotValid({
            level,
            validator: tests[0],
            value: layer,
        });
        // if (testsInvalid) {
        //     console.log('-- A --');
        // }
    } else {
        const keys = Object.keys(layer);
        testsInvalid = testsInvalid ||
            keys.some(key => isValueNotValid({ level, validator: tests[0], value: key })) ||
            keys.some(key => testLayer({
                layer: layer[key],
                level: level + 1,
                tests: tests.slice(1),
            }));
        // if (testsInvalid) {
        //     console.log('-- B --', {keys, func: tests[0].toString()});
        // }
    }
    return testsInvalid;
};

/**
 * a table is layers of key => value
 * the tests all check an individual key until the last test checks the final value of a key path
 *
 * @param {array} tests ({value}) => {...do test...} predefined or custom functions
 */
const createMultiLayerTest = tests => ({
    func: ({ table }) => testLayer({
        layer: table,
        level: 0,
        tests,
    }),
    result: false,
});

const tables = [
    {
        name: 'buildingsByWardTable',
        table: buildingsByWardTable,
        tests: [createMultiLayerTest([valueIsInEnum(ward), valuesAreInEnum(building)])],
    },
    {
        name: 'buildingsTable',
        table: buildingsTable,
        tests: [
            createMultiLayerTest([
                valueIsInEnum(ward),
                valueIsNumber(),
                ({ value }) => valueIsInEnum(building)({ value: value.building }) && valueIsMinMax()({ value: value.minMax })
            ]),
        ],
    },
    {
        name: 'buildingSubTypesTable',
        table: buildingSubTypesTable,
        tests: [
            createMultiLayerTest([valueIsInEnum(building), valueIsNumber(), valueIsString()]),
        ],
    },
    {
        name: 'commoditiesTable',
        table: commoditiesTable,
        tests: [createMultiLayerTest([valueIsNumber(), valueIsString()])],
    },
    {
        name: 'commodityCountTable',
        table: commodityCountTable,
        tests: [createMultiLayerTest([valueIsInEnum(populationType), valueIsMinMax()])],
    },
    {
        name: 'famousOccurrenceTable',
        table: famousOccurrenceTable,
        tests: [createMultiLayerTest([valueIsInEnum(populationType), valueIsMinMax()])],
    },
    {
        name: 'famousTable',
        table: famousTable,
        tests: [createMultiLayerTest([valueIsNumber(), valueIsString()])],
    },
    {
        name: 'guildModifiersTable',
        table: guildModifiersTable,
        tests: [createMultiLayerTest([valueIsInEnum(populationType), valueIsMinMax()])],
    },
    {
        name: 'guildsTable',
        table: guildsTable,
        tests: [createMultiLayerTest([valueIsString(), valuesAreInEnum(profession)])],
    },
    {
        name: 'integrationTable',
        table: integrationTable,
        tests: [createMultiLayerTest([valueIsNumber(), valueIsInEnum(integration)])],
    },
    {
        name: 'kingIncomeTable',
        table: kingIncomeTable,
        tests: [createMultiLayerTest([valueIsInEnum(populationType), valueIsNumber()])],
    },
    {
        name: 'magicResourcesTable',
        table: magicResourcesTable,
        tests: [createMultiLayerTest([valueIsInEnum(populationType), valueIsNumber()])],
    },
    {
        name: 'maxWardsByPopulationType',
        table: maxWardsByPopulationType,
        tests: [createMultiLayerTest([valueIsInEnum(populationType), valueIsNumber({ allowNull: true })])],
    },
    {
        name: 'nameNumSyllablesTable',
        table: nameNumSyllablesTable,
        tests: [createMultiLayerTest([valueIsNumber(), valueIsNumber()])],
    },
    {
        name: 'nameNumWordsTable',
        table: nameNumWordsTable,
        tests: [createMultiLayerTest([valueIsNumber(), valueIsNumber()])],
    },
    {
        name: 'namePrefixesTable',
        table: namePrefixesTable,
        tests: [createTableIsArrayTest(valueIsString)],
    },
    {
        name: 'nameSuffixesTable',
        table: nameSuffixesTable,
        tests: [createTableIsArrayTest(valueIsString)],
    },
    {
        name: 'nameWordsCountTable',
        table: nameWordsCountTable,
        tests: [createMultiLayerTest([valueIsNumber(), valueIsNumber()])],
    },
    {
        name: 'nameWordsTable',
        table: nameWordsTable,
        tests: [createTableIsArrayTest(valueIsString)],
    },
    {
        name: 'npcClassesMaxLevelTable',
        table: npcClassesMaxLevelTable,
        tests: [createMultiLayerTest([valueIsInEnum(npcClass), valueIsNumber()])],
    },
    {
        name: 'npcClassInfluenceTable',
        table: npcClassInfluenceTable,
        tests: [createMultiLayerTest([valueIsInEnum(npcClass), valueIsNumber()])],
    },
    {
        name: 'npcClassRandomClassTable',
        table: npcClassRandomClassTable,
        tests: [createMultiLayerTest([valueIsNumber, valueIsInEnum(npcClass)])],
    },
    {
        name: 'npcLevelModifierTable',
        table: npcLevelModifierTable,
        tests: [createMultiLayerTest([valueIsInEnum(populationType), valueIsNumber()])],
    },
    {
        name: 'populationAcresTable',
        table: populationAcresTable,
        tests: [createMultiLayerTest([valueIsInEnum(populationType), valueIsMinMax()])],
    },
    {
        name: 'populationCenterUnabsorbedTable',
        table: populationCenterUnabsorbedTable,
        tests: [createMultiLayerTest([valueIsInEnum(populationType), valueIsNumber()])],
    },
    {
        name: 'populationInfluencePointsTable',
        table: populationInfluencePointsTable,
        tests: [createMultiLayerTest([valueIsInEnum(populationType), valueIsMinMax()])],
    },
    {
        name: 'populationHasWallsTable',
        table: populationHasWallsTable,
        tests: [createMultiLayerTest([valueIsInEnum(populationType), valueIsNumber()])],
    },
    {
        name: 'populationMilitaryTable',
        table: populationMilitaryTable,
        tests: [createMultiLayerTest([valueIsInEnum(populationType), valueIsNumber()])],
    },
    {
        name: 'populationNumStructuresTable',
        table: populationNumStructuresTable,
        tests: [createMultiLayerTest([valueIsInEnum(populationType), valueIsMinMax()])],
    },
    {
        name: 'populationNumWallsTable',
        table: populationNumWallsTable,
        tests: [createMultiLayerTest([valueIsInEnum(populationType), valueIsMinMax()])],
    },
    {
        name: 'populationPowerCenterModifierTable',
        table: populationPowerCenterModifierTable,
        tests: [createMultiLayerTest([valueIsInEnum(populationType), valueIsNumber()])],
    },
    {
        name: 'populationPowerCenterTable',
        table: populationPowerCenterTable,
        tests: [createMultiLayerTest([valueIsInEnum(populationType), valueIsMinMax()])],
    },
    {
        name: 'populationSizeTable',
        table: populationSizeTable,
        tests: [createMultiLayerTest([valueIsInEnum(populationType), valueIsMinMax()])],
    },
    {
        name: 'populationTypeTable',
        table: populationTypeTable,
        tests: [createMultiLayerTest([valueIsNumber(), valueIsInEnum(populationType)])],
    },
    {
        name: 'populationWardDensityTable',
        table: populationWardDensityTable,
        tests: [
            createMultiLayerTest([valueIsInEnum(populationType), valueIsInEnum(ward), valueIsNumber()]),
        ],
    },
    {
        name: 'populationWealthTable',
        table: populationWealthTable,
        tests: [createMultiLayerTest([valueIsInEnum(populationType), valueIsNumber()])],
    },
    {
        name: 'powerCenterAlignmentTable',
        table: powerCenterAlignmentTable,
        tests: [createMultiLayerTest([valueIsNumber(), valueIsString()])],
    },
    {
        name: 'powerCenterTypeTable',
        table: powerCenterTypeTable,
        tests: [createMultiLayerTest([valueIsNumber(), valueIsString()])],
    },
    {
        name: 'professionRatioTable',
        table: professionRatioTable,
        tests: [createMultiLayerTest([valueIsInEnum(profession), valueIsNumber()])],
    },
    {
        name: 'professionTable',
        table: professionTable,
        tests: [createMultiLayerTest([valueIsNumber(), valueIsInEnum(profession)])],
    },
    {
        name: 'racePercentsTable',
        table: racePercentsTable,
        tests: [createMultiLayerTest([valueIsInEnum(integration), valueIsNumber(), valueIsNumber()])],
    },
    {
        name: 'racesRandomTable',
        table: racesRandomTable,
        tests: [createMultiLayerTest([valueIsNumber(), valueIsInEnum(race)])],
    },
    {
        name: 'syllablesTable',
        table: syllablesTable,
        tests: [createMultiLayerTest([valueIsNumber(), valueIsString()])],
    },
    {
        name: 'wardAcresUsedTable',
        table: wardAcresUsedTable,
        tests: [createMultiLayerTest([valueIsInEnum(populationType), valueIsMinMax()])],
    },
    {
        name: 'randomWardTable',
        table: randomWardTable,
        tests: [createMultiLayerTest([valueIsNumber(), valueIsInEnum(ward)])],
    },
];

test('all tables load', () => {

    tables.forEach(tableInfo => expect(!!tableInfo.table).toBe(true));

    // tests for each table type:
    // no null keys
    // no null values
    // keys are sequential for range tables
    // min max tables have min max values

    expect(tables.length).toBe(getAllDirFiles('./src/tables/').length);
});

describe('all tables are in index.js exports', () => {
    const exportedModules = Object.values(moduleExports);
    tables.forEach(tableInfo => (
        test(`${tableInfo.name}: Found in exports`, () => (
            expect(exportedModules.indexOf(tableInfo.table)).not.toBe(-1)
        ))
    ))
});

describe('table tests', () => {
    tables
        // .slice(1, 2)
        .forEach(tableInfo => (
            test(`${tableInfo.name}: table specific tests`, () => {
                expect(tableInfo.tests.length).not.toBe(0);
                tableInfo.tests.forEach(testToRun => (
                    expect(testToRun.func({ table: tableInfo.table, ...testToRun.params })).toStrictEqual(testToRun.result)
                ))
            })
        ))
});
