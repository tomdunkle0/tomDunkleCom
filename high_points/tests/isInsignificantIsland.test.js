// Jest includes:
const each = require('jest-each').default;

// Constant includes:
const constants = require('./environment/constants');
const kAlaskaMainland = constants.kAlaskaMainland;

// Map Function includes:
const mapFunctions = require('./environment/mapFunctions');
const isInsignificantIsland = mapFunctions.isInsignificantIsland;

// Test Constant includes:
const testConstants = require('./resources/testConstants');
const kAlaskaIslands1 = testConstants.kAlaskaIslands1;
const kAlaskaIslands2 = testConstants.kAlaskaIslands2;
const kAlaskaIslands3 = testConstants.kAlaskaIslands3;
const kAlaskaIslands4 = testConstants.kAlaskaIslands4;
const kAlaskaIslands5 = testConstants.kAlaskaIslands5;
const kAlaskaIslands6 = testConstants.kAlaskaIslands6;
const kAlaskaIslands7 = testConstants.kAlaskaIslands7;
const kAlaskaIslands8 = testConstants.kAlaskaIslands8;
const kKaula          = testConstants.kKaula;
const kMolokai        = testConstants.kMolokai;
const kNiihau         = testConstants.kNiihau;

const kInputAndExpectedOutputPairs = [
    [null,            false],
    [undefined,       false],
    [kAlaskaIslands1, true ],
    [kAlaskaIslands2, true ],
    [kAlaskaIslands3, true ],
    [kAlaskaIslands4, true ],
    [kAlaskaIslands5, true ],
    [kAlaskaIslands6, true ],
    [kAlaskaIslands7, true ],
    [kAlaskaIslands8, true ],
    [kAlaskaMainland, false],
    [kKaula,          true ],
    [kMolokai,        true ],
    [kNiihau,         true ]
];

describe(`validate results of isInsignificantIsland() with expected inputs`, () => {
    each(kInputAndExpectedOutputPairs).it(
            `passing '%s' as an input to the function produces output '%s'`,
            (input, output) => {
        expect(isInsignificantIsland(input)).toBe(output);
    });
}); /* validate results of isInsignificantIsland() with expected inputs */
