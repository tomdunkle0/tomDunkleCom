// Jest includes:
const each = require('jest-each').default;

// Constant includes:
const constants = require('./environment/constants');
const kAlaskaMainland    = constants.kAlaskaMainland;
const kConnecticut       = constants.kConnecticut;
const kHawaii            = constants.kHawaii;
const kKauai             = constants.kKauai;
const kKodiakIsland      = constants.kKodiakIsland;
const kLightBlueFill     = constants.kLightBlueFill;
const kLightGreenFill    = constants.kLightGreenFill;
const kLightRedFill      = constants.kLightRedFill;
const kMaui              = constants.kMaui;
const kMichiganMainland  = constants.kMichiganMainland;
const kMichiganPeninsula = constants.kMichiganPeninsula;
const kOahu              = constants.kOahu;
const kStyle             = constants.kStyle;
const kUnpopulated       = constants.kUnpopulated;

// Test Constant includes:
const testConstants = require('./resources/testConstants');
const kHawaiianIslandsBlue      = testConstants.kHawaiianIslandsBlue;
const kIdaho                    = testConstants.kIdaho;
const kYearSliderValueAfter2014 = testConstants.kYearSliderValueAfter2014;
const kYearSliderValueAfter2015 = testConstants.kYearSliderValueAfter2015;
const kYearSliderValueAfter2016 = testConstants.kYearSliderValueAfter2016;
const kYearSliderValueAfter2017 = testConstants.kYearSliderValueAfter2017;
const kYearSliderValueAfter2018 = testConstants.kYearSliderValueAfter2018;

// Map Function includes:
const mapFunctions = require('./environment/mapFunctions');
const onPageLoad                   = mapFunctions.onPageLoad;
const resetStateFillColorToDefault = mapFunctions.resetStateFillColorToDefault;

// Test Function includes:
const testFunctions = require('./resources/testFunctions');
const changeValueOfSliderThumb     = testFunctions.changeValueOfSliderThumb;
const setPolygonFillColorLightBlue = testFunctions.setPolygonFillColorLightBlue;

// TODO: For certain tests, calling onPageLoad() is unnecessary.
//        Consider moving such tests to a separate suite.
beforeEach(() => {
    onPageLoad();
}); // beforeEach()

const kHawaiianIslandsRed = [kLightRedFill, kLightRedFill, kLightRedFill, kLightRedFill];

const kAlaskaAndKodiakRed        = [kLightRedFill,   kLightRedFill  ];
const kMichiganAndPeninsulaGreen = [kLightGreenFill, kLightGreenFill];

const kAlaskaAndKodiak      = [kAlaskaMainland, kKodiakIsland];
const kHawaiianIslands      = [kHawaii, kKauai, kMaui, kOahu];
const kMichiganAndPeninsula = [kMichiganMainland, kMichiganPeninsula];

describe(`validate results of resetStateFillColorToDefault() in expected cases`, () => {
    each([
        [[kConnecticut],        kConnecticut,       [kLightGreenFill]         ],
        [[kIdaho      ],        kIdaho,             [kLightRedFill  ]         ],
        [kMichiganAndPeninsula, kMichiganMainland,  kMichiganAndPeninsulaGreen],
        [kMichiganAndPeninsula, kMichiganPeninsula, kMichiganAndPeninsulaGreen],
        [kAlaskaAndKodiak,      kAlaskaMainland,    kAlaskaAndKodiakRed       ],
        [kAlaskaAndKodiak,      kKodiakIsland,      kAlaskaAndKodiakRed       ],
        [kHawaiianIslands,      kHawaii,            kHawaiianIslandsRed       ],
        [kHawaiianIslands,      kKauai,             kHawaiianIslandsRed       ],
        [kHawaiianIslands,      kMaui,              kHawaiianIslandsRed       ],
        [kHawaiianIslands,      kOahu,              kHawaiianIslandsRed       ],
        [kHawaiianIslands,      kUnpopulated,       kHawaiianIslandsBlue      ],
        [kHawaiianIslands,      null,               kHawaiianIslandsBlue      ],
        [kHawaiianIslands,      undefined,          kHawaiianIslandsBlue      ]
    ]).it(
            `case for resetting '%s' with input '%s' to fill colors '%s'`,
            (polygonsToColorLightBlue, polygonId, expectedFillColors) => {
        for (var polygonIndex in polygonsToColorLightBlue)
        {
            const polygon = document.getElementById(polygonsToColorLightBlue[polygonIndex]);
            setPolygonFillColorLightBlue(polygon);
            expect(polygon.getAttribute(kStyle)).toBe(kLightBlueFill);
        }

        resetStateFillColorToDefault(polygonId);

        for (var polygonIndex in polygonsToColorLightBlue)
        {
            const polygon = document.getElementById(polygonsToColorLightBlue[polygonIndex]);
            expect(polygon.getAttribute(kStyle)).toBe(expectedFillColors[polygonIndex]);
        }
    });
}); /* validate results of resetStateFillColorToDefault() in expected cases */

describe(`validate results of resetStateFillColorToDefault() on Michigan after resetting the year
            slider to before I high-pointed it 2`, () => {
    each([
        [kYearSliderValueAfter2014, kMichiganMainland],
        [kYearSliderValueAfter2015, kMichiganMainland],
        [kYearSliderValueAfter2016, kMichiganMainland],
        [kYearSliderValueAfter2017, kMichiganMainland],
        [kYearSliderValueAfter2018, kMichiganMainland],
        [kYearSliderValueAfter2014, kMichiganPeninsula],
        [kYearSliderValueAfter2015, kMichiganPeninsula],
        [kYearSliderValueAfter2016, kMichiganPeninsula],
        [kYearSliderValueAfter2017, kMichiganPeninsula],
        [kYearSliderValueAfter2018, kMichiganPeninsula]
    ]).it(
            `resetting Michigan while the year slider is set to '%s' by passing '%s' to
            resetStateFillColorToDefault()`,
            (yearSliderValue, polylineId) => {
        const michiganMainland = document.getElementById(kMichiganMainland);
        const michiganPeninsula = document.getElementById(kMichiganPeninsula);
        setPolygonFillColorLightBlue(michiganMainland);
        setPolygonFillColorLightBlue(michiganPeninsula);
        const yearSlider = changeValueOfSliderThumb(yearSliderValue);
        expect(michiganMainland.getAttribute(kStyle)).toBe(kLightBlueFill);
        expect(michiganPeninsula.getAttribute(kStyle)).toBe(kLightBlueFill);

        resetStateFillColorToDefault(polylineId);

        expect(yearSlider.value).toBe(yearSliderValue);
        expect(michiganMainland.getAttribute(kStyle)).toBe(kLightRedFill);
        expect(michiganPeninsula.getAttribute(kStyle)).toBe(kLightRedFill);
    });
}); /* validate results of resetStateFillColorToDefault() on Michigan after resetting the year
        slider to before I high-pointed it 2 */
