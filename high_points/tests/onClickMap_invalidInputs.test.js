// Jest includes:
const each = require('jest-each').default;

// Map Function includes:
const mapFunctions = require('./environment/mapFunctions');
const onClickMap = mapFunctions.onClickMap;

// Test Constant includes:
const testConstants = require('./resources/testConstants');
const kUnpopulatedInputs = testConstants.kUnpopulatedInputs;

describe(`given a clickEvent input that is unpopulated, onClickMap() returns null`, () => {
    each(kUnpopulatedInputs).it(
            `calling the function with '%s' as the clickEvent returns null`,
            (invalidClickEvent) => {
        const clickResult = onClickMap(invalidClickEvent);

        expect(clickResult).toBe(null);
    });
}); /* given a clickEvent input that is unpopulated, onClickMap() returns null */

describe(`given a clickEvent input whose target attribute is unpopulated, onClickMap() returns
            null`, () => {
    each(kUnpopulatedInputs).it(
            `calling the function with a clickEvent whose target is '%s' returns null`,
            (invalidTarget) => {
        const clickEvent = { target: invalidTarget };

        const clickResult = onClickMap(clickEvent);

        expect(clickResult).toBe(null);
    });
}); /* given a clickEvent input whose target attribute is unpopulated, onClickMap() returns
        null */

describe(`given a clickEvent input whose target has an unpopulated id attribute, onClickMap()
            returns null`, () => {
    each(kUnpopulatedInputs).it(
            `calling the function with a clickEvent whose target has an id of '%s' returns null`,
            (invalidId) => {
        const target = { id: invalidId };
        const clickEvent = { target: target };

        const clickResult = onClickMap(clickEvent);

        expect(clickResult).toBe(null);
    });
}); /* given a clickEvent input whose target has an unpopulated id attribute, onClickMap()
        returns null */
