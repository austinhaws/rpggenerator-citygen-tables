const isValueNotValid = require('./isValueNotValid');

/**
 * table is a key => array of basic values.
 * make sure each array has values and no values are null
 * Can do custom checking by passing functions in to keysIn/valuesIn, otherwise pass in arrays, or can be falsey to not be tested
 *
 *
 * @param {object} table the table object to test
 * @param {object} param {keysIn, level, valuesIn}
 * @param {int} level how deep nesting level for objects in objects (tables in tables)
 */
module.exports = ({
    // the table object data to test
    table,

    // array of valid keys for this table
    // OR array of validator functions
    // OR ({key, level}) => { ... custom validator ... }
    // OR {0: ({key, level}) => { ... custom validator ... }, 1: ({key, level}) => { ... custom validator ... }}; ie object of validators by level
    // NOTE: functions should return true if the key is valid (this function will "not" that logic)
    keysIn,

    // array of valid values for this table
    // OR array of validator functions
    // OR ({data, level}) => { ... custom validator ... }
    // OR {0: ({data, level}) => { ... custom validator ... }, 1: ({data, level}) => { ... custom validator ... }}; ie object of validators by level
    // NOTE: functions should return true if the value is valid (this function will "not" that logic)
    valuesIn,

    // the nested level of validation in the table {key: { key2: value} }
    level = 0,
}) => (
    Object.entries(table)
        .filter(([key, valuesArray]) => (
            // console.log('key check', {key}) ||
            isValueNotValid({ key, level, validator: keysIn, value: key }) ||
            // console.log('value check', {valuesArray}) ||
            isValueNotValid({ key, level, validator: valuesIn, value: valuesArray }))
        )
        // .map(([key, valuesArray]) => console.log('invalidTableKeyValues: Invalid entries', {
        //      keyIsValid: isValueNotValid({ key, level, validator: keysIn, value: key }),
        //      valueIsValid: isValueNotValid({ key, level, validator: valuesIn, value: valuesArray }),
        //      key,
        //      valuesArray
        //      }) ||
        //      [key, valuesArray])
        .length
);
