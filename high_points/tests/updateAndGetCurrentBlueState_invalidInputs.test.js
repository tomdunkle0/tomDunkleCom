// Jest includes:
const each = require('jest-each').default;

// Map Function includes:
const mapFunctions = require('./environment/mapFunctions');
const updateAndGetCurrentBlueState = mapFunctions.updateAndGetCurrentBlueState;

// Test Constant includes:
const testConstants = require('./resources/testConstants');
const kArbitraryPolylineId = testConstants.kArbitraryPolylineId;
const kUnpopulatedInputs   = testConstants.kUnpopulatedInputs;

describe(`given a mouseEvent input that is unpopulated, updateAndGetCurrentBlueState() returns
            null`, () => {
    each(kUnpopulatedInputs).it(
            `calling the function with '%s' as the mouseEvent returns null`,
            (invalidMouseEvent) => {
        const updateResult = updateAndGetCurrentBlueState(invalidMouseEvent, kArbitraryPolylineId);

        expect(updateResult).toBe(null);
    });
}); /* given a mouseEvent input that is unpopulated, updateAndGetCurrentBlueState() returns
        null */
