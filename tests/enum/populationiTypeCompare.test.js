const populationTypeCompare = require('../../src/enum/populationTypeCompare');
const { THORP, HAMLET, VILLAGE, SMALL_TOWN, LARGE_TOWN, SMALL_CITY, LARGE_CITY, METROPOLIS } = require('../../src/enum/populationType');

test('getTableKeyFromRangeValue', () => {
    expect(populationTypeCompare(THORP, HAMLET)).toBeLessThan(0);
    expect(populationTypeCompare(THORP, THORP)).toBe(0);
    expect(populationTypeCompare(HAMLET, THORP)).toBeGreaterThan(0);

    expect(populationTypeCompare(METROPOLIS, METROPOLIS)).toBe(0);
    expect(populationTypeCompare(METROPOLIS, THORP)).toBeGreaterThan(0);

    const ordered = [
        THORP,
        HAMLET,
        VILLAGE,
        SMALL_TOWN,
        LARGE_TOWN,
        SMALL_CITY,
        LARGE_CITY,
        METROPOLIS,
    ];

    ordered
        .forEach((populationType, i) => {
            if (i > 0) {
                expect(populationTypeCompare(populationType, ordered[i - 1])).toBeGreaterThan(0);
            }
            expect(populationTypeCompare(populationType, populationType)).toBe(0);
            if (i < ordered.length - 1) {
                expect(populationTypeCompare(populationType, ordered[i + 1])).toBeLessThan(0);
            }
        });
});
