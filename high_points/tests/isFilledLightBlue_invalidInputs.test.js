// Jest includes:
const each = require('jest-each').default;

// Map Function includes:
const mapFunctions = require('./environment/mapFunctions');
const isFilledLightBlue = mapFunctions.isFilledLightBlue;

// Test Constant includes:
const testConstants = require('./resources/testConstants');
const kUnpopulatedInputs = testConstants.kUnpopulatedInputs;

describe(`given a polygon input that is unpopulated, isFilledLightBlue() returns false`, () => {
    each(kUnpopulatedInputs).it(
            `calling the function with '%s' as the polygon returns false`,
            (invalidPolygon) => {
        const result = isFilledLightBlue(invalidPolygon);

        expect(result).toBe(false);
    });
}); /* given a polygon input that is unpopulated, isFilledLightBlue() returns false */
