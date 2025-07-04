// Jest includes:
const each = require('jest-each').default;

// Constant includes:
const constants = require('./environment/constants');
const kHawaii        = constants.kHawaii;
const kKauai         = constants.kKauai;
const kLightBlueFill = constants.kLightBlueFill;
const kMaui          = constants.kMaui;
const kOahu          = constants.kOahu;
const kStyle         = constants.kStyle;

// Map Function includes:
const mapFunctions = require('./environment/mapFunctions');
const matchLightBlueFillForHawaiianIslands = mapFunctions.matchLightBlueFillForHawaiianIslands;
const onPageLoad                           = mapFunctions.onPageLoad;

// Test Constant includes:
const testConstants = require('./resources/testConstants');
const kHawaiianIslandsBlue = testConstants.kHawaiianIslandsBlue;

// Test Function includes:
const testFunctions = require('./resources/testFunctions');
const setPolygonFillColorLightBlue = testFunctions.setPolygonFillColorLightBlue;

// Cluster of island fill colors:
const kHawaiianIslandsEmpty = [null, null, null, null];

const kInitialAndExpectedFinalStylesSets = [
    [kHawaiianIslandsEmpty,                                            kHawaiianIslandsEmpty],
    [[kLightBlueFill, null,           null,           null          ], kHawaiianIslandsBlue ],
    [[null,           kLightBlueFill, null,           null          ], kHawaiianIslandsBlue ],
    [[null,           null,           kLightBlueFill, null          ], kHawaiianIslandsBlue ],
    [[null,           null,           null,           kLightBlueFill], kHawaiianIslandsBlue ],
    [[kLightBlueFill, kLightBlueFill, null,           null          ], kHawaiianIslandsBlue ],
    [[kLightBlueFill, null,           kLightBlueFill, null          ], kHawaiianIslandsBlue ],
    [[kLightBlueFill, null,           null,           kLightBlueFill], kHawaiianIslandsBlue ],
    [[null,           kLightBlueFill, kLightBlueFill, null          ], kHawaiianIslandsBlue ],
    [[null,           kLightBlueFill, null,           kLightBlueFill], kHawaiianIslandsBlue ],
    [[null,           null,           kLightBlueFill, kLightBlueFill], kHawaiianIslandsBlue ],
    [[kLightBlueFill, kLightBlueFill, kLightBlueFill, null          ], kHawaiianIslandsBlue ],
    [[kLightBlueFill, kLightBlueFill, null,           kLightBlueFill], kHawaiianIslandsBlue ],
    [[kLightBlueFill, null,           kLightBlueFill, kLightBlueFill], kHawaiianIslandsBlue ],
    [[null,           kLightBlueFill, kLightBlueFill, kLightBlueFill], kHawaiianIslandsBlue ],
    [kHawaiianIslandsBlue,                                             kHawaiianIslandsBlue ]
];

describe(`validate results of matchLightBlueFillForHawaiianIslands() in expected cases`, () => {
    each(kInitialAndExpectedFinalStylesSets).it(
            `passing input '%s' produces output '%s'`,
            (initialStyles, expectedFinalStyles) => {
        onPageLoad();
        const hawaiiIndex = 0;
        const kauaiIndex = 1;
        const mauiIndex = 2;
        const oahuIndex = 3;
        const hawaii = document.getElementById(kHawaii);
        const kauai = document.getElementById(kKauai);
        const maui = document.getElementById(kMaui);
        const oahu = document.getElementById(kOahu);
        if (initialStyles[hawaiiIndex] === kLightBlueFill) setPolygonFillColorLightBlue(hawaii);
        if (initialStyles[kauaiIndex] === kLightBlueFill) setPolygonFillColorLightBlue(kauai);
        if (initialStyles[mauiIndex] === kLightBlueFill) setPolygonFillColorLightBlue(maui);
        if (initialStyles[oahuIndex] === kLightBlueFill) setPolygonFillColorLightBlue(oahu);
        expect(hawaii.getAttribute(kStyle)).toBe(initialStyles[hawaiiIndex]);
        expect(kauai.getAttribute(kStyle)).toBe(initialStyles[kauaiIndex]);
        expect(maui.getAttribute(kStyle)).toBe(initialStyles[mauiIndex]);
        expect(oahu.getAttribute(kStyle)).toBe(initialStyles[oahuIndex]);

        matchLightBlueFillForHawaiianIslands();

        expect(hawaii.getAttribute(kStyle)).toBe(expectedFinalStyles[hawaiiIndex]);
        expect(kauai.getAttribute(kStyle)).toBe(expectedFinalStyles[kauaiIndex]);
        expect(maui.getAttribute(kStyle)).toBe(expectedFinalStyles[mauiIndex]);
        expect(oahu.getAttribute(kStyle)).toBe(expectedFinalStyles[oahuIndex]);
    });
}); /* validate results of matchLightBlueFillForHawaiianIslands() in expected cases */
