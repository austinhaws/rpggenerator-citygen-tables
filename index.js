const populationType = require("./src/enum/populationType");
const getTableKeyFromRangeValue = require("./src/getTableKeyFromRangeValue");
const populationNumWallsTable = require("./src/tables/populationNumWallsTable");
const populationHasWallsTable = require("./src/tables/populationHasWallsTable");
const populationMilitaryTable = require("./src/tables/populationMilitaryTable");
const populationAcresTable = require("./src/tables/populationAcresTable");
const populationNumStructuresTable = require("./src/tables/populationNumStructuresTable");

exports.getTableKeyFromRangeValue = getTableKeyFromRangeValue;

exports.populationHasWallsTable = populationHasWallsTable;
exports.populationMilitaryTable = populationMilitaryTable;
exports.populationNumWallsTable = populationNumWallsTable;
exports.populationAcresTable = populationAcresTable;
exports.populationNumStructuresTable = populationNumStructuresTable;
exports.populationType = populationType;
