const populationType = require("./src/enum/populationType");
const getTableKeyFromRangeValue = require("./src/getTableKeyFromRangeValue");
const populationNumWallsTable = require("./src/tables/populationNumWallsTable");
const populationHasWallsTable = require("./src/tables/populationHasWallsTable");
const populationMilitaryTable = require("./src/tables/populationMilitaryTable");
const populationAcresTable = require("./src/tables/populationAcresTable");
const populationNumStructuresTable = require("./src/tables/populationNumStructuresTable");
const kingIncomeTable = require("./src/tables/kingIncomeTable");
const magicResourcesTable = require("./src/tables/magicResourcesTable");
const populationSizeTable = require("./src/tables/populationSizeTable");
const populationTypeTable = require("./src/tables/populationTypeTable");
const populationWealthTable = require("./src/tables/populationWealthTable");

exports.getTableKeyFromRangeValue = getTableKeyFromRangeValue;

exports.kingIncomeTable = kingIncomeTable;
exports.magicResourcesTable = magicResourcesTable;
exports.populationAcresTable = populationAcresTable;
exports.populationHasWallsTable = populationHasWallsTable;
exports.populationMilitaryTable = populationMilitaryTable;
exports.populationNumStructuresTable = populationNumStructuresTable;
exports.populationNumWallsTable = populationNumWallsTable;
exports.populationSizeTable = populationSizeTable;
exports.populationTypeTable = populationTypeTable;
exports.populationWealthTable = populationWealthTable;

exports.populationType = populationType;
