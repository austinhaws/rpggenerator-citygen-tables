const moduleExports = require('../index.js');
const building = require("../src/enum/building");
const buildingQuality = require("../src/enum/buildingQuality");
const guild = require("../src/enum/guild");
const integration = require("../src/enum/integration");
const npcClass = require("../src/enum/npcClass");
const profession = require("../src/enum/profession");
const race = require("../src/enum/race");
const ward = require("../src/enum/ward");
const populationType = require('../src/enum/populationType.js');
const getTableKeyFromRangeValue = require('../src/getTableKeyFromRangeValue.js');
const buildingsByWardTable = require('../src/tables/buildingsByWardTable');
const buildingsTable = require('../src/tables/buildingsTable');
const buildingSubTypesTable = require('../src/tables/buildingSubTypesTable');
const commoditiesTable = require('../src/tables/commoditiesTable');
const commodityCountTable = require('../src/tables/commodityCountTable');
const famousOccurrenceTable = require('../src/tables/famousOccurrenceTable');
const famousTable = require('../src/tables/famousTable');
const guildModifiersTable = require('../src/tables/guildModifiersTable');
const guildsTable = require('../src/tables/guildsTable');
const integrationTable = require('../src/tables/integrationTable');
const kingIncomeTable = require('../src/tables/kingIncomeTable');
const magicResourcesTable = require('../src/tables/magicResourcesTable');
const maxWardsByPopulationType = require('../src/tables/maxWardsByPopulationType');
const nameNumSyllablesTable = require('../src/tables/nameNumSyllablesTable');
const nameNumWordsTable = require('../src/tables/nameNumWordsTable');
const namePrefixesTable = require('../src/tables/namePrefixesTable');
const nameSuffixesTable = require('../src/tables/nameSuffixesTable');
const nameWordsCountTable = require('../src/tables/nameWordsCountTable');
const nameWordsTable = require('../src/tables/nameWordsTable');
const npcClassesMaxLevelTable = require('../src/tables/npcClassesMaxLevelTable');
const npcClassInfluenceTable = require('../src/tables/npcClassInfluenceTable');
const npcClassRandomClassTable = require('../src/tables/npcClassRandomClassTable');
const npcLevelModifierTable = require('../src/tables/npcLevelModifierTable');
const populationAcresTable = require('../src/tables/populationAcresTable');
const populationCenterUnabsorbedTable = require('../src/tables/populationCenterUnabsorbedTable');
const populationInfluencePointsTable = require('../src/tables/populationInfluencePointsTable');
const populationHasWallsTable = require('../src/tables/populationHasWallsTable');
const populationMilitaryTable = require('../src/tables/populationMilitaryTable');
const populationNumStructuresTable = require('../src/tables/populationNumStructuresTable');
const populationNumWallsTable = require('../src/tables/populationNumWallsTable');
const populationPowerCenterModifierTable = require('../src/tables/populationPowerCenterModifierTable');
const populationPowerCenterTable = require('../src/tables/populationPowerCenterTable');
const populationSizeTable = require('../src/tables/populationSizeTable');
const populationTypeTable = require('../src/tables/populationTypeTable');
const populationWardDensityTable = require('../src/tables/populationWardDensityTable');
const populationWealthTable = require('../src/tables/populationWealthTable');
const powerCenterAlignmentTable = require('../src/tables/powerCenterAlignmentTable');
const powerCenterTypeTable = require('../src/tables/powerCenterAlignmentTable');
const professionRatioTable = require('../src/tables/professionRatioTable');
const professionTable = require('../src/tables/professionTable');
const racePercentsTable = require('../src/tables/racePercentsTable');
const racesRandomTable = require('../src/tables/racesRandomTable');
const randomWardTable = require('../src/tables/randomWardTable');
const syllablesTable = require('../src/tables/syllablesTable');
const wardAcresUsedTable = require('../src/tables/wardAcresUsedTable');
const populationTypeCompare = require("../src/methods/populationTypeCompare");

test('exports', () => {
    const knownExports = {
        getTableKeyFromRangeValue,

        buildingsByWardTable,
        buildingsTable,
        buildingSubTypesTable,
        commoditiesTable,
        commodityCountTable,
        famousOccurrenceTable,
        famousTable,
        guildModifiersTable,
        guildsTable,
        integrationTable,
        kingIncomeTable,
        magicResourcesTable,
        maxWardsByPopulationType,
        nameNumSyllablesTable,
        nameNumWordsTable,
        namePrefixesTable,
        nameSuffixesTable,
        nameWordsCountTable,
        nameWordsTable,
        npcClassesMaxLevelTable,
        npcClassInfluenceTable,
        npcClassRandomClassTable,
        npcLevelModifierTable,
        populationAcresTable,
        populationCenterUnabsorbedTable,
        populationInfluencePointsTable,
        populationHasWallsTable,
        populationMilitaryTable,
        populationNumStructuresTable,
        populationNumWallsTable,
        populationPowerCenterModifierTable,
        populationPowerCenterTable,
        populationSizeTable,
        populationTypeTable,
        populationWardDensityTable,
        populationWealthTable,
        powerCenterAlignmentTable,
        powerCenterTypeTable,
        professionRatioTable,
        professionTable,
        racePercentsTable,
        racesRandomTable,
        randomWardTable,
        syllablesTable,
        wardAcresUsedTable,

        building,
        buildingQuality,
        guild,
        integration,
        npcClass,
        populationType,
        populationTypeCompare,
        profession,
        race,
        ward,
    };

    expect(Object.keys(moduleExports)).toStrictEqual(Object.keys(knownExports));
    Object.entries(knownExports)
        .forEach(([key, value]) => expect(moduleExports[key]).toBe(value));
});
