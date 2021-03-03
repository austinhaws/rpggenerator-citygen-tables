const building = require("./src/enum/populationType");
const integration = require("./src/enum/populationType");
const npcClass = require("./src/enum/populationType");
const profession = require("./src/enum/populationType");
const race = require("./src/enum/populationType");
const ward = require("./src/enum/populationType");
const populationType = require("./src/enum/populationType");
const getTableKeyFromRangeValue = require("./src/getTableKeyFromRangeValue");
const populationTypeCompare = require('./src/methods/populationTypeCompare');
const buildingsByWardTable = require('./src/tables/buildingsByWardTable');
const buildingsTable = require('./src/tables/buildingsTable');
const buildingSubTypesTable = require('./src/tables/buildingSubTypesTable');
const commoditiesTable = require('./src/tables/commoditiesTable');
const commodityCountTable = require('./src/tables/commodityCountTable');
const famousOccurrenceTable = require('./src/tables/famousOccurrenceTable');
const famousTable = require('./src/tables/famousTable');
const guildModifiersTable = require('./src/tables/guildModifiersTable');
const guildsTable = require('./src/tables/guildsTable');
const integrationTable = require('./src/tables/integrationTable');
const kingIncomeTable = require('./src/tables/kingIncomeTable');
const magicResourcesTable = require('./src/tables/magicResourcesTable');
const maxWardsByPopulationType = require('./src/tables/maxWardsByPopulationType');
const nameNumSyllablesTable = require('./src/tables/nameNumSyllablesTable');
const nameNumWordsTable = require('./src/tables/nameNumWordsTable');
const namePrefixesTable = require('./src/tables/namePrefixesTable');
const nameSuffixesTable = require('./src/tables/nameSuffixesTable');
const nameWordsCountTable = require('./src/tables/nameWordsCountTable');
const nameWordsTable = require('./src/tables/nameWordsTable');
const npcClassesMaxLevelTable = require('./src/tables/npcClassesMaxLevelTable');
const npcClassInfluenceTable = require('./src/tables/npcClassInfluenceTable');
const npcClassRandomClassTable = require('./src/tables/npcClassRandomClassTable');
const npcLevelModifierTable = require('./src/tables/npcLevelModifierTable');
const populationAcresTable = require('./src/tables/populationAcresTable');
const populationCenterUnabsorbedTable = require('./src/tables/populationCenterUnabsorbedTable');
const populationInfluencePointsTable = require('./src/tables/populationInfluencePointsTable');
const populationHasWallsTable = require('./src/tables/populationHasWallsTable');
const populationMilitaryTable = require('./src/tables/populationMilitaryTable');
const populationNumStructuresTable = require('./src/tables/populationNumStructuresTable');
const populationNumWallsTable = require('./src/tables/populationNumWallsTable');
const populationPowerCenterModifierTable = require('./src/tables/populationPowerCenterModifierTable');
const populationPowerCenterTable = require('./src/tables/populationPowerCenterTable');
const populationSizeTable = require('./src/tables/populationSizeTable');
const populationTypeTable = require('./src/tables/populationTypeTable');
const populationWardDensityTable = require('./src/tables/populationWardDensityTable');
const populationWealthTable = require('./src/tables/populationWealthTable');
const powerCenterAlignmentTable = require('./src/tables/powerCenterAlignmentTable');
const powerCenterTypeTable = require('./src/tables/powerCenterAlignmentTable');
const professionRatioTable = require('./src/tables/professionRatioTable');
const professionTable = require('./src/tables/professionTable');
const racePercentsTable = require('./src/tables/racePercentsTable');
const randomWardTable = require('./src/tables/randomWardTable');
const racesRandomTable = require('./src/tables/racesRandomTable');
const syllablesTable = require('./src/tables/syllablesTable');
const wardAcresUsedTable = require('./src/tables/wardAcresUsedTable');

exports.getTableKeyFromRangeValue = getTableKeyFromRangeValue;

exports.buildingsByWardTable = buildingsByWardTable;
exports.buildingsTable = buildingsTable;
exports.buildingSubTypesTable = buildingSubTypesTable;
exports.commoditiesTable = commoditiesTable;
exports.commodityCountTable = commodityCountTable;
exports.famousOccurrenceTable = famousOccurrenceTable;
exports.famousTable = famousTable;
exports.guildModifiersTable = guildModifiersTable;
exports.guildsTable = guildsTable;
exports.integrationTable = integrationTable;
exports.kingIncomeTable = kingIncomeTable;
exports.magicResourcesTable = magicResourcesTable;
exports.maxWardsByPopulationType = maxWardsByPopulationType;
exports.nameNumSyllablesTable = nameNumSyllablesTable;
exports.nameNumWordsTable = nameNumWordsTable;
exports.namePrefixesTable = namePrefixesTable;
exports.nameSuffixesTable = nameSuffixesTable;
exports.nameWordsCountTable = nameWordsCountTable;
exports.nameWordsTable = nameWordsTable;
exports.npcClassesMaxLevelTable = npcClassesMaxLevelTable;
exports.npcClassInfluenceTable = npcClassInfluenceTable;
exports.npcClassRandomClassTable = npcClassRandomClassTable;
exports.npcLevelModifierTable = npcLevelModifierTable;
exports.populationAcresTable = populationAcresTable;
exports.populationCenterUnabsorbedTable = populationCenterUnabsorbedTable;
exports.populationInfluencePointsTable = populationInfluencePointsTable;
exports.populationHasWallsTable = populationHasWallsTable;
exports.populationMilitaryTable = populationMilitaryTable;
exports.populationNumStructuresTable = populationNumStructuresTable;
exports.populationNumWallsTable = populationNumWallsTable;
exports.populationPowerCenterModifierTable = populationPowerCenterModifierTable;
exports.populationPowerCenterTable = populationPowerCenterTable;
exports.populationSizeTable = populationSizeTable;
exports.populationTypeTable = populationTypeTable;
exports.populationWardDensityTable = populationWardDensityTable;
exports.populationWealthTable = populationWealthTable;
exports.powerCenterAlignmentTable = powerCenterAlignmentTable;
exports.powerCenterTypeTable = powerCenterTypeTable;
exports.professionRatioTable = professionRatioTable;
exports.professionTable = professionTable;
exports.racePercentsTable = racePercentsTable;
exports.racesRandomTable = racesRandomTable;
exports.randomWardTable = randomWardTable;
exports.syllablesTable = syllablesTable;
exports.wardAcresUsedTable = wardAcresUsedTable;

exports.building = building;
exports.integration = integration;
exports.npcClass = npcClass;
exports.populationType = populationType;
exports.populationTypeCompare = populationTypeCompare;
exports.profession = profession;
exports.race = race;
exports.ward = ward;
