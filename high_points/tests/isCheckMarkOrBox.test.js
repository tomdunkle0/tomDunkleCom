// Jest includes:
const each = require('jest-each').default;

// Constant includes:
const constants = require('./environment/constants');
const kConnecticut          = constants.kConnecticut;
const kConnecticutCheckMark = constants.kConnecticutCheckMark;

// Map Function includes:
const mapFunctions = require('./environment/mapFunctions');
const isCheckMarkOrBox = mapFunctions.isCheckMarkOrBox;

// Test Constant includes:
const testConstants = require('./resources/testConstants');
const kConnecticutCheckBox = testConstants.kConnecticutCheckBox;

// TODO: Consider using an 'arbitrary' state name instead:
const kInputAndExpectedOutputPairs = [
    [null,                  false],
    [undefined,             false],
    [kConnecticutCheckBox,  true ],
    [kConnecticutCheckMark, true ],
    [kConnecticut,          false]
];

describe(`validate results of isCheckMarkOrBox() with expected inputs`, () => {
    each(kInputAndExpectedOutputPairs).it(
            `passing '%s' as an input to the function produces output '%s'`,
            (input, output) => {
        expect(isCheckMarkOrBox(input)).toBe(output);
    });
}); /* validate results of isCheckMarkOrBox() with expected inputs */
