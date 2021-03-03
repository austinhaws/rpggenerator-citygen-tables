const { isArray, isFunction, isObject } = require('lodash');

/**
 * works in conjunction with invalidTableKeyValues to determine if values are valid in a table
 */
const isValueNotValid = ({
    // the key of the table for the value (if testing keys then this may be undefined)
    key,

    // how deep in to the layers of the table are we?
    level,

    // the validator for this data: array, function, or object; see invalidTableKeyValues keysIn/valuesIn for more details
    validator,

    // the value to validate
    value,
}) => {
    let isNotValid = false;

    if (isArray(validator)) {
        if (validator.length && isFunction(validator[0])) {
            isNotValid = !(validator.every(validatorFunc => validatorFunc({ key, level, validator: validatorFunc, value })))
// if (isNotValid) console.log('got here D', {value, isNotValid});
        } else {
            isNotValid = !validator.includes(value);
// if (isNotValid) console.log('got here C', {value, isNotValid, key, level, validator: validator.toString()});
        }

    } else if (isFunction(validator)) {
        isNotValid = !validator({ key, level, validator, value })
// if (isNotValid) console.log('got here B', {key, level, value, isNotValid, validator: validator.toString()});

    } else if (isObject(validator) && validator[level]) {
        // recurse: each level validator may be an array, function, or object
        isNotValid = isValueNotValid({ key, level, validator: validator[level], value })
// if (isNotValid) console.log('got here A', {value, isNotValid});

    } else {
        throw new Error('Not sure I know what you want to do with validator: ' + JSON.stringify(validator));
    }
    return isNotValid;
};

module.exports = isValueNotValid;
