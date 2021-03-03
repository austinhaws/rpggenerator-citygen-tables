const isValueNotValid = require('./isValueNotValid');

// none of the above (object missing level)
test('isValueNotValid: array', () => {
    const validator = ['i exist!', 'no you don\'t', 'no yo mamma don\'t'];
    expect(isValueNotValid({
        key: 'hi',
        level: 0,
        validator,
        value: 'i exist!',
    })).toBe(false);

    expect(isValueNotValid({
        key: 'hi',
        level: 0,
        validator,
        value: 'i exist!!',
    })).toBe(true);
});

test('isValueNotValid: function', () => {
    const validator = ({ key, level, value }) => {
        expect(key).toBe('hi');
        expect(level).toBe(0);
        return value === 'i exist!';
    };

    expect(isValueNotValid({
        key: 'hi',
        level: 0,
        validator,
        value: 'i exist!',
    })).toBe(false);

    expect(isValueNotValid({
        key: 'hi',
        level: 0,
        validator,
        value: 'i exist!!',
    })).toBe(true);
});

test('isValueNotValid: object => array', () => {
    const validator = {
        0: ['i exist!', 'no you don\'t', 'no yo mamma don\'t'],
    };

    expect(isValueNotValid({
        key: 'hi',
        level: 0,
        validator,
        value: 'i exist!',
    })).toBe(false);

    expect(isValueNotValid({
        key: 'hi',
        level: 0,
        validator,
        value: 'i exist!!',
    })).toBe(true);
});

test('isValueNotValid: object => function', () => {
    const validator = {
        0: ({ key, level, value }) => {
            expect(key).toBe('hi');
            expect(level).toBe(0);
            return value === 'i exist!';
        },
    };

    expect(isValueNotValid({
        key: 'hi',
        level: 0,
        validator,
        value: 'i exist!',
    })).toBe(false);

    expect(isValueNotValid({
        key: 'hi',
        level: 0,
        validator,
        value: 'i exist!!',
    })).toBe(true);
});

// this is a weird one where the level is nested in itself in the validator
// (just proves recursion works no matter developer stupidity)
test('isValueNotValid: object => object => array', () => {
    const validator = {
        0: {
            0: ({ key, level, value }) => {
                expect(key).toBe('hi');
                expect(level).toBe(0);
                return value === 'i exist!';
            }
        },
    };

    expect(isValueNotValid({
        key: 'hi',
        level: 0,
        validator,
        value: 'i exist!',
    })).toBe(false);

    expect(isValueNotValid({
        key: 'hi',
        level: 0,
        validator,
        value: 'i exist!!',
    })).toBe(true);
});

// if developer doesn't provide a tester for a level then they get an exception! BAM!
test('isValueNotValid: object => does not exist', () => {
    const validator = {};

    expect(() => isValueNotValid({
        key: 'hi',
        level: 0,
        validator,
        value: 'i exist!',
    })).toThrow(/Not sure I know what you want to do with validator/);

});
