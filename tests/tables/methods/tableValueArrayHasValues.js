// table is a key => array of basic values.
// make sure each array has values and no values are null
module.exports = table => (
    Object.values(table)
        .map(valuesArray => (
            valuesArray.filter(arrayEntry => (
                !arrayEntry && (arrayEntry !== null && arrayEntry !== undefined && arrayEntry !== undefined)
            ))
        ))
        .filter(mismatchedValues => mismatchedValues.length)
);
