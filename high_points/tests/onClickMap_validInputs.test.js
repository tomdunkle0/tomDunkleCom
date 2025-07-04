// Jest includes:
const each = require('jest-each').default;

// Constant includes:
const constants                = require('./environment/constants');
const kAlabama                 = constants.kAlabama;
const kAlabamaCheckMark        = constants.kAlabamaCheckMark;
const kAlaskaMainland          = constants.kAlaskaMainland;
const kArizona                 = constants.kArizona;
const kArizonaCheckMark        = constants.kArizonaCheckMark;
const kArkansas                = constants.kArkansas;
const kArkansasCheckMark       = constants.kArkansasCheckMark;
const kCalifornia              = constants.kCalifornia;
const kCaliforniaCheckMark     = constants.kCaliforniaCheckMark;
const kColorado                = constants.kColorado;
const kColoradoCheckMark       = constants.kColoradoCheckMark;
const kConnecticut             = constants.kConnecticut;
const kConnecticutCheckMark    = constants.kConnecticutCheckMark;
const kDelaware                = constants.kDelaware;
const kDelawareCheckMark       = constants.kDelawareCheckMark;
const kDirectoryNameHighPoints = constants.kDirectoryNameHighPoints;
const kFileExtensionHtml       = constants.kFileExtensionHtml;
const kFirstChildIndex         = constants.kFirstChildIndex;
const kFlorida                 = constants.kFlorida;
const kFloridaCheckBox         = constants.kFloridaCheckBox;
const kGeorgia                 = constants.kGeorgia;
const kGeorgiaCheckMark        = constants.kGeorgiaCheckMark;
const kHawaii                  = constants.kHawaii;
const kHawaiiCheckBox          = constants.kHawaiiCheckBox;
const kIllinois                = constants.kIllinois;
const kIllinoisCheckMark       = constants.kIllinoisCheckMark;
const kIndiana                 = constants.kIndiana;
const kIndianaCheckMark        = constants.kIndianaCheckMark;
const kIowa                    = constants.kIowa;
const kIowaCheckBox            = constants.kIowaCheckBox;
const kIowaCheckMark           = constants.kIowaCheckMark;
const kKansas                  = constants.kKansas;
const kKansasCheckMark         = constants.kKansasCheckMark;
const kKauai                   = constants.kKauai;
const kKentucky                = constants.kKentucky;
const kKentuckyCheckMark       = constants.kKentuckyCheckMark;
const kKodiakIsland            = constants.kKodiakIsland;
const kLouisiana               = constants.kLouisiana;
const kLouisianaCheckMark      = constants.kLouisianaCheckMark;
const kMaine                   = constants.kMaine;
const kMaineCheckMark          = constants.kMaineCheckMark;
const kMaryland                = constants.kMaryland;
const kMarylandCheckMark       = constants.kMarylandCheckMark;
const kMassachusetts           = constants.kMassachusetts;
const kMassachusettsCheckMark  = constants.kMassachusettsCheckMark;
const kMaui                    = constants.kMaui;
const kMichiganCheckBox        = constants.kMichiganCheckBox;
const kMichiganCheckMark       = constants.kMichiganCheckMark;
const kMichiganMainland        = constants.kMichiganMainland;
const kMichiganPeninsula       = constants.kMichiganPeninsula;
const kMinnesota               = constants.kMinnesota;
const kMinnesotaCheckMark      = constants.kMinnesotaCheckMark;
const kMississippi             = constants.kMississippi;
const kMississippiCheckMark    = constants.kMississippiCheckMark;
const kMissouri                = constants.kMissouri;
const kMissouriCheckMark       = constants.kMissouriCheckMark;
const kMontana                 = constants.kMontana;
const kMontanaCheckBox         = constants.kMontanaCheckBox;
const kNebraska                = constants.kNebraska;
const kNebraskaCheckMark       = constants.kNebraskaCheckMark;
const kNevada                  = constants.kNevada;
const kNevadaCheckBox          = constants.kNevadaCheckBox;
const kNevadaCheckMark         = constants.kNevadaCheckMark;
const kNewJersey               = constants.kNewJersey;
const kNewJerseyCheckMark      = constants.kNewJerseyCheckMark;
const kNewHampshire            = constants.kNewHampshire;
const kNewHampshireCheckMark   = constants.kNewHampshireCheckMark;
const kNewMexico               = constants.kNewMexico;
const kNewMexicoCheckMark      = constants.kNewMexicoCheckMark;
const kNewYork                 = constants.kNewYork;
const kNewYorkCheckMark        = constants.kNewYorkCheckMark;
const kNorthCarolina           = constants.kNorthCarolina;
const kNorthCarolinaCheckMark  = constants.kNorthCarolinaCheckMark;
const kNorthDakota             = constants.kNorthDakota;
const kNorthDakotaCheckMark    = constants.kNorthDakotaCheckMark;
const kOahu                    = constants.kOahu;
const kOhio                    = constants.kOhio;
const kOhioCheckMark           = constants.kOhioCheckMark;
const kOklahoma                = constants.kOklahoma;
const kOklahomaCheckMark       = constants.kOklahomaCheckMark;
const kOregon                  = constants.kOregon;
const kOregonCheckBox          = constants.kOregonCheckBox;
const kPennsylvania            = constants.kPennsylvania;
const kPennsylvaniaCheckMark   = constants.kPennsylvaniaCheckMark;
const kPrefixCheckBox          = constants.kPrefixCheckBox;
const kPrefixGreenState        = constants.kPrefixGreenState;
const kPrefixRedState          = constants.kPrefixRedState;
const kRhodeIsland             = constants.kRhodeIsland;
const kRhodeIslandCheckMark    = constants.kRhodeIslandCheckMark;
const kSouthCarolina           = constants.kSouthCarolina;
const kSouthCarolinaCheckMark  = constants.kSouthCarolinaCheckMark;
const kSouthDakota             = constants.kSouthDakota;
const kSouthDakotaCheckMark    = constants.kSouthDakotaCheckMark;
const kStateNameAlabama        = constants.kStateNameAlabama;
const kStateNameAlaska         = constants.kStateNameAlaska;
const kStateNameArizona        = constants.kStateNameArizona;
const kStateNameArkansas       = constants.kStateNameArkansas;
const kStateNameCalifornia     = constants.kStateNameCalifornia;
const kStateNameColorado       = constants.kStateNameColorado;
const kStateNameConnecticut    = constants.kStateNameConnecticut;
const kStateNameDelaware       = constants.kStateNameDelaware;
const kStateNameGeorgia        = constants.kStateNameGeorgia;
const kStateNameIllinois       = constants.kStateNameIllinois;
const kStateNameIndiana        = constants.kStateNameIndiana;
const kStateNameIowa           = constants.kStateNameIowa;
const kStateNameKansas         = constants.kStateNameKansas;
const kStateNameKentucky       = constants.kStateNameKentucky;
const kStateNameLouisiana      = constants.kStateNameLouisiana;
const kStateNameMaine          = constants.kStateNameMaine;
const kStateNameMaryland       = constants.kStateNameMaryland;
const kStateNameMassachusetts  = constants.kStateNameMassachusetts;
const kStateNameMichigan       = constants.kStateNameMichigan;
const kStateNameMinnesota      = constants.kStateNameMinnesota;
const kStateNameMississippi    = constants.kStateNameMississippi;
const kStateNameMissouri       = constants.kStateNameMissouri;
const kStateNameNebraska       = constants.kStateNameNebraska;
const kStateNameNevada         = constants.kStateNameNevada;
const kStateNameNewHampshire   = constants.kStateNameNewHampshire;
const kStateNameNewJersey      = constants.kStateNameNewJersey;
const kStateNameNewMexico      = constants.kStateNameNewMexico;
const kStateNameNewYork        = constants.kStateNameNewYork;
const kStateNameNorthCarolina  = constants.kStateNameNorthCarolina;
const kStateNameNorthDakota    = constants.kStateNameNorthDakota;
const kStateNameOhio           = constants.kStateNameOhio;
const kStateNameOklahoma       = constants.kStateNameOklahoma;
const kStateNamePennsylvania   = constants.kStateNamePennsylvania;
const kStateNameRhodeIsland    = constants.kStateNameRhodeIsland;
const kStateNameSouthCarolina  = constants.kStateNameSouthCarolina;
const kStateNameSouthDakota    = constants.kStateNameSouthDakota;
const kStateNameTennessee      = constants.kStateNameTennessee;
const kStateNameTexas          = constants.kStateNameTexas;
const kStateNameUtah           = constants.kStateNameUtah;
const kStateNameVermont        = constants.kStateNameVermont;
const kStateNameVirginia       = constants.kStateNameVirginia;
const kStateNameWestVirginia   = constants.kStateNameWestVirginia;
const kStateNameWisconsin      = constants.kStateNameWisconsin;
const kTennessee               = constants.kTennessee;
const kTennesseeCheckBox       = constants.kTennesseeCheckBox;
const kTennesseeCheckMark      = constants.kTennesseeCheckMark;
const kTexas                   = constants.kTexas;
const kTexasCheckMark          = constants.kTexasCheckMark;
const kUtah                    = constants.kUtah;
const kUtahCheckBox            = constants.kUtahCheckBox;
const kUtahCheckMark           = constants.kUtahCheckMark;
const kVermont                 = constants.kVermont;
const kVermontCheckMark        = constants.kVermontCheckMark;
const kVirginia                = constants.kVirginia;
const kVirginiaCheckMark       = constants.kVirginiaCheckMark;
const kWestVirginia            = constants.kWestVirginia;
const kWestVirginiaCheckMark   = constants.kWestVirginiaCheckMark;
const kWisconsin               = constants.kWisconsin;
const kWisconsinCheckMark      = constants.kWisconsinCheckMark;

// Map Function includes:
const mapFunctions = require('./environment/mapFunctions');
const isUnpopulated = mapFunctions.isUnpopulated;
const onClickMap    = mapFunctions.onClickMap;
const onPageLoad    = mapFunctions.onPageLoad;

// Test Constant includes:
const testConstants = require('./resources/testConstants');
const kAlaskaIslands1      = testConstants.kAlaskaIslands1;
const kAlaskaIslands2      = testConstants.kAlaskaIslands2;
const kAlaskaIslands3      = testConstants.kAlaskaIslands3;
const kAlaskaIslands4      = testConstants.kAlaskaIslands4;
const kAlaskaIslands5      = testConstants.kAlaskaIslands5;
const kAlaskaIslands6      = testConstants.kAlaskaIslands6;
const kAlaskaIslands7      = testConstants.kAlaskaIslands7;
const kAlaskaIslands8      = testConstants.kAlaskaIslands8;
const kArbitraryPolylineId = testConstants.kArbitraryPolylineId;
const kConnecticutCheckBox = testConstants.kConnecticutCheckBox;
const kIdaho               = testConstants.kIdaho;
const kKaula               = testConstants.kKaula;
const kMolokai             = testConstants.kMolokai;
const kNiihau              = testConstants.kNiihau;
const kStateNameIdaho      = testConstants.kStateNameIdaho;
const kStateNameWashington = testConstants.kStateNameWashington;
const kStateNameWyoming    = testConstants.kStateNameWyoming;
const kWashington          = testConstants.kWashington;
const kWyoming             = testConstants.kWyoming;

// Test Function includes:
const testFunctions = require('./resources/testFunctions');
const moveSliderToBeforeStateWasHighPointed = testFunctions.moveSliderToBeforeStateWasHighPointed;

// Miscellaneous constants:
const kAlabamaCheckBox       = kPrefixCheckBox + kStateNameAlabama;
const kAlaskaCheckBox        = kPrefixCheckBox + kStateNameAlaska;
const kArizonaCheckBox       = kPrefixCheckBox + kStateNameArizona;
const kArkansasCheckBox      = kPrefixCheckBox + kStateNameArkansas;
const kCaliforniaCheckBox    = kPrefixCheckBox + kStateNameCalifornia;
const kColoradoCheckBox      = kPrefixCheckBox + kStateNameColorado;
const kDelawareCheckBox      = kPrefixCheckBox + kStateNameDelaware;
const kGeorgiaCheckBox       = kPrefixCheckBox + kStateNameGeorgia;
const kIdahoCheckBox         = kPrefixCheckBox + kStateNameIdaho;
const kIllinoisCheckBox      = kPrefixCheckBox + kStateNameIllinois;
const kIndianaCheckBox       = kPrefixCheckBox + kStateNameIndiana;
const kKansasCheckBox        = kPrefixCheckBox + kStateNameKansas;
const kKentuckyCheckBox      = kPrefixCheckBox + kStateNameKentucky;
const kLouisianaCheckBox     = kPrefixCheckBox + kStateNameLouisiana;
const kMaineCheckBox         = kPrefixCheckBox + kStateNameMaine;
const kMarylandCheckBox      = kPrefixCheckBox + kStateNameMaryland;
const kMassachusettsCheckBox = kPrefixCheckBox + kStateNameMassachusetts;
const kMinnesotaCheckBox     = kPrefixCheckBox + kStateNameMinnesota;
const kMississippiCheckBox   = kPrefixCheckBox + kStateNameMississippi;
const kMissouriCheckBox      = kPrefixCheckBox + kStateNameMissouri;
const kNebraskaCheckBox      = kPrefixCheckBox + kStateNameNebraska;
const kNewHampshireCheckBox  = kPrefixCheckBox + kStateNameNewHampshire;
const kNewJerseyCheckBox     = kPrefixCheckBox + kStateNameNewJersey;
const kNewMexicoCheckBox     = kPrefixCheckBox + kStateNameNewMexico;
const kNewYorkCheckBox       = kPrefixCheckBox + kStateNameNewYork;
const kNorthDakotaCheckBox   = kPrefixCheckBox + kStateNameNorthDakota;
const kOhioCheckBox          = kPrefixCheckBox + kStateNameOhio;
const kOklahomaCheckBox      = kPrefixCheckBox + kStateNameOklahoma;
const kPennsylvaniaCheckBox  = kPrefixCheckBox + kStateNamePennsylvania;
const kRhodeIslandCheckBox   = kPrefixCheckBox + kStateNameRhodeIsland;
const kSouthCarolinaCheckBox = kPrefixCheckBox + kStateNameSouthCarolina;
const kSouthDakotaCheckBox   = kPrefixCheckBox + kStateNameSouthDakota;
const kTexasCheckBox         = kPrefixCheckBox + kStateNameTexas;
const kVermontCheckBox       = kPrefixCheckBox + kStateNameVermont;
const kWashingtonCheckBox    = kPrefixCheckBox + kStateNameWashington;
const kWestVirginiaCheckBox  = kPrefixCheckBox + kStateNameWestVirginia;
const kWisconsinCheckBox     = kPrefixCheckBox + kStateNameWisconsin;
const kWyomingCheckBox       = kPrefixCheckBox + kStateNameWyoming;

beforeEach(() => {
    onPageLoad();
}); // beforeEach()

// TODO: This is a good basic test, but I should also consider trying to get the ID
//        and show that it can't be used to call clearInterval() again.
test(`calling onClickMap() with a valid green state clears
        mapContainer.orientationChangeIntervalId`, () => {
    const mapContainer = document.body.children[kFirstChildIndex];
    const arbitraryPolyline = document.getElementById(kArbitraryPolylineId);
    const clickEvent = { target: arbitraryPolyline };
    expect(isUnpopulated(mapContainer.orientationChangeIntervalId)).toBe(false);

    onClickMap(clickEvent);

    expect(isUnpopulated(mapContainer.orientationChangeIntervalId)).toBe(true);
}); /* calling onClickMap() with a valid green state clears
        mapContainer.orientationChangeIntervalId */

const normallyGreenStatesWhoseCheckBoxesHandleClickEvents = [
    kStateNameIowa,
    kStateNameNorthCarolina,
    kStateNameTennessee,
    kStateNameUtah,
    kStateNameVirginia
];

describe(`clicking on check boxes that handle click events produces no action after changing the
            year slider value to before those states were high-pointed`, () => {
    each(normallyGreenStatesWhoseCheckBoxesHandleClickEvents).it(
            `clicking on the '%s' check box after moving the slider returns null`,
            (stateName) => {
        const statePolylineId = kPrefixGreenState + stateName;
        moveSliderToBeforeStateWasHighPointed(statePolylineId);
        const checkBoxId = kPrefixCheckBox + stateName;
        const clickEvent = { target: document.getElementById(checkBoxId) };
        expect(isUnpopulated(clickEvent.target)).toBe(false);

        expect(onClickMap(clickEvent)).toBe(null);
    });
}); /* clicking on check boxes that handle click events produces no action after changing the
        year slider value to before those states were high-pointed */

const polylinesWithUsableLinks = [
    [kAlabama,                kStateNameAlabama      ],
    [kAlabamaCheckMark,       kStateNameAlabama      ],
    [kArizona,                kStateNameArizona      ],
    [kArizonaCheckMark,       kStateNameArizona      ],
    [kArkansas,               kStateNameArkansas     ],
    [kArkansasCheckMark,      kStateNameArkansas     ],
    [kCalifornia,             kStateNameCalifornia   ],
    [kCaliforniaCheckMark,    kStateNameCalifornia   ],
    [kColorado,               kStateNameColorado     ],
    [kColoradoCheckMark,      kStateNameColorado     ],
    [kConnecticut,            kStateNameConnecticut  ],
    [kConnecticutCheckMark,   kStateNameMassachusetts],
    [kDelaware,               kStateNameDelaware     ],
    [kDelawareCheckMark,      kStateNamePennsylvania ],
    [kGeorgia,                kStateNameGeorgia      ],
    [kGeorgiaCheckMark,       kStateNameGeorgia      ],
    [kIllinois,               kStateNameIllinois     ],
    [kIllinoisCheckMark,      kStateNameWisconsin    ],
    [kIndiana,                kStateNameIndiana      ],
    [kIndianaCheckMark,       kStateNameIndiana      ],
    [kIowa,                   kStateNameIowa         ],
    [kIowaCheckMark,          kStateNameIowa         ],
    [kKansas,                 kStateNameKansas       ],
    [kKansasCheckMark,        kStateNameKansas       ],
    [kKentucky,               kStateNameKentucky     ],
    [kKentuckyCheckMark,      kStateNameKentucky     ],
    [kLouisiana,              kStateNameLouisiana    ],
    [kLouisianaCheckMark,     kStateNameLouisiana    ],
    [kMaine,                  kStateNameMaine        ],
    [kMaineCheckMark,         kStateNameMaine        ],
    [kMaryland,               kStateNameMaryland     ],
    [kMarylandCheckMark,      kStateNameMaryland     ],
    [kMassachusetts,          kStateNameMassachusetts],
    [kMassachusettsCheckMark, kStateNameVermont      ],
    [kMichiganMainland,       kStateNameMichigan     ],
    [kMichiganPeninsula,      kStateNameMichigan     ],
    [kMichiganCheckMark,      kStateNameMichigan     ],
    [kMinnesota,              kStateNameMinnesota    ],
    [kMinnesotaCheckMark,     kStateNameMinnesota    ],
    [kMississippi,            kStateNameMississippi  ],
    [kMississippiCheckMark,   kStateNameTennessee    ],
    [kMissouri,               kStateNameMissouri     ],
    [kMissouriCheckMark,      kStateNameMissouri     ],
    [kNebraska,               kStateNameNebraska     ],
    [kNebraskaCheckMark,      kStateNameNebraska     ],
    [kNevada,                 kStateNameNevada       ],
    [kNevadaCheckMark,        kStateNameNevada       ],
    [kNewHampshire,           kStateNameNewHampshire ],
    [kNewHampshireCheckMark,  kStateNameNewHampshire ],
    [kNewJersey,              kStateNameNewJersey    ],
    [kNewJerseyCheckMark,     kStateNameNewYork      ],
    [kNewMexico,              kStateNameNewMexico    ],
    [kNewMexicoCheckMark,     kStateNameNewMexico    ],
    [kNewYork,                kStateNameNewYork      ],
    [kNewYorkCheckMark,       kStateNameNewYork      ],
    [kNorthCarolina,          kStateNameNorthCarolina],
    [kNorthCarolinaCheckMark, kStateNameNorthCarolina],
    [kNorthDakota,            kStateNameNorthDakota  ],
    [kNorthDakotaCheckMark,   kStateNameNorthDakota  ],
    [kOhio,                   kStateNameOhio         ],
    [kOhioCheckMark,          kStateNameOhio         ],
    [kOklahoma,               kStateNameOklahoma     ],
    [kOklahomaCheckMark,      kStateNameColorado     ],
    [kPennsylvania,           kStateNamePennsylvania ],
    [kPennsylvaniaCheckMark,  kStateNamePennsylvania ],
    [kRhodeIsland,            kStateNameRhodeIsland  ],
    [kRhodeIslandCheckMark,   kStateNameRhodeIsland  ],
    [kSouthCarolina,          kStateNameSouthCarolina],
    [kSouthCarolinaCheckMark, kStateNameSouthCarolina],
    [kSouthDakota,            kStateNameSouthDakota  ],
    [kSouthDakotaCheckMark,   kStateNameSouthDakota  ],
    [kTennessee,              kStateNameTennessee    ],
    [kTennesseeCheckMark,     kStateNameTennessee    ],
    [kTexas,                  kStateNameTexas        ],
    [kTexasCheckMark,         kStateNameNewMexico    ],
    [kUtah,                   kStateNameUtah         ],
    [kUtahCheckMark,          kStateNameUtah         ],
    [kVermont,                kStateNameVermont      ],
    [kVermontCheckMark,       kStateNameVermont      ],
    [kVirginia,               kStateNameVirginia     ],
    [kVirginiaCheckMark,      kStateNameVirginia     ],
    [kWestVirginia,           kStateNameWestVirginia ],
    [kWestVirginiaCheckMark,  kStateNameWestVirginia ],
    [kWisconsin,              kStateNameWisconsin    ],
    [kWisconsinCheckMark,     kStateNameWisconsin    ]
];

describe(`validate the results of onClickMap() for polylines that are expected to lead to other
            pages when clicked on`, () => {
    each(polylinesWithUsableLinks).it(
            `clicking on '%s' returns the page address for '%s'`,
            (polylineId, expectedState) => {
        const clickEvent = { target: document.getElementById(polylineId) };
        expect(isUnpopulated(kDirectoryNameHighPoints)).toBe(false);
        expect(isUnpopulated(kFileExtensionHtml)).toBe(false);

        const expectedReturnValue = kDirectoryNameHighPoints + expectedState + kFileExtensionHtml;
        expect(onClickMap(clickEvent)).toBe(expectedReturnValue);
    });
}); /* validate the results of onClickMap() for polylines that are expected to lead to other
        pages when clicked on */

const polylinesWithoutUsableLinks = [
    kAlabamaCheckBox,
    kAlaskaCheckBox,
    kAlaskaMainland,
    kAlaskaIslands1,
    kAlaskaIslands2,
    kAlaskaIslands3,
    kAlaskaIslands4,
    kAlaskaIslands5,
    kAlaskaIslands6,
    kAlaskaIslands7,
    kAlaskaIslands8,
    kArizonaCheckBox,
    kArkansasCheckBox,
    kCaliforniaCheckBox,
    kColoradoCheckBox,
    kConnecticutCheckBox,
    kDelawareCheckBox,
    kFlorida,
    kFloridaCheckBox,
    kGeorgiaCheckBox,
    kHawaii,
    kHawaiiCheckBox,
    kIdaho,
    kIdahoCheckBox,
    kIllinoisCheckBox,
    kIndianaCheckBox,
    kKansasCheckBox,
    kKauai,
    kKaula,
    kKentuckyCheckBox,
    kKodiakIsland,
    kLouisianaCheckBox,
    kMaineCheckBox,
    kMarylandCheckBox,
    kMassachusettsCheckBox,
    kMaui,
    kMichiganCheckBox,
    kMinnesotaCheckBox,
    kMississippiCheckBox,
    kMissouriCheckBox,
    kMolokai,
    kMontana,
    kMontanaCheckBox,
    kNebraskaCheckBox,
    kNewHampshireCheckBox,
    kNewJerseyCheckBox,
    kNewMexicoCheckBox,
    kNewYorkCheckBox,
    kNiihau,
    kNorthDakotaCheckBox,
    kOahu,
    kOhioCheckBox,
    kOklahomaCheckBox,
    kOregon,
    kOregonCheckBox,
    kPennsylvaniaCheckBox,
    kRhodeIslandCheckBox,
    kSouthCarolinaCheckBox,
    kSouthDakotaCheckBox,
    kTexasCheckBox,
    kVermontCheckBox,
    kWashington,
    kWashingtonCheckBox,
    kWestVirginiaCheckBox,
    kWisconsinCheckBox,
    kWyoming,
    kWyomingCheckBox
];

describe(`validate the results of onClickMap() for polylines that are expected not to lead to
            another page`, () => {
    each(polylinesWithoutUsableLinks).it(
            `clicking on '%s' returns null`,
            (polylineId) => {
        const clickEvent = { target: document.getElementById(polylineId) };
        expect(isUnpopulated(clickEvent.target)).toBe(false);

        expect(onClickMap(clickEvent)).toBe(null);
    });
}); /* validate the results of onClickMap() for polylines that are expected not to lead to
        another page */
