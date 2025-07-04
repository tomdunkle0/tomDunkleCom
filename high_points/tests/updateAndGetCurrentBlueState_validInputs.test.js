// Jest includes:
const each = require('jest-each').default;

// Constant includes:
const constants               = require('./environment/constants');
const kAlabama                = constants.kAlabama;
const kAlaskaMainland         = constants.kAlaskaMainland;
const kArizona                = constants.kArizona;
const kArkansas               = constants.kArkansas;
const kCalifornia             = constants.kCalifornia;
const kColorado               = constants.kColorado;
const kConnecticut            = constants.kConnecticut;
const kConnecticutCheckMark   = constants.kConnecticutCheckMark;
const kDelaware               = constants.kDelaware;
const kDelawareCheckMark      = constants.kDelawareCheckMark;
const kFlorida                = constants.kFlorida;
const kFloridaCheckBox        = constants.kFloridaCheckBox;
const kGeorgia                = constants.kGeorgia;
const kGeorgiaCheckMark       = constants.kGeorgiaCheckMark;
const kHawaii                 = constants.kHawaii;
const kIllinois               = constants.kIllinois;
const kIllinoisCheckMark      = constants.kIllinoisCheckMark;
const kIndiana                = constants.kIndiana;
const kIowa                   = constants.kIowa;
const kIowaCheckBox           = constants.kIowaCheckBox;
const kIowaCheckMark          = constants.kIowaCheckMark;
const kKansas                 = constants.kKansas;
const kKauai                  = constants.kKauai;
const kKentucky               = constants.kKentucky;
const kKodiakIsland           = constants.kKodiakIsland;
const kLightBlueFill          = constants.kLightBlueFill;
const kLightGreenFill         = constants.kLightGreenFill;
const kLightRedFill           = constants.kLightRedFill;
const kLouisiana              = constants.kLouisiana;
const kMaine                  = constants.kMaine;
const kMaryland               = constants.kMaryland;
const kMarylandCheckMark      = constants.kMarylandCheckMark;
const kMassachusetts          = constants.kMassachusetts;
const kMassachusettsCheckMark = constants.kMassachusettsCheckMark;
const kMaui                   = constants.kMaui;
const kMichiganCheckMark      = constants.kMichiganCheckMark;
const kMichiganMainland       = constants.kMichiganMainland;
const kMichiganPeninsula      = constants.kMichiganPeninsula;
const kMinnesota              = constants.kMinnesota;
const kMinnesotaCheckMark     = constants.kMinnesotaCheckMark;
const kMississippi            = constants.kMississippi;
const kMissouri               = constants.kMissouri;
const kMontana                = constants.kMontana;
const kMontanaCheckBox        = constants.kMontanaCheckBox;
const kNebraska               = constants.kNebraska;
const kNevada                 = constants.kNevada;
const kNevadaCheckBox         = constants.kNevadaCheckBox;
const kNevadaCheckMark        = constants.kNevadaCheckMark;
const kNewJersey              = constants.kNewJersey;
const kNewJerseyCheckMark     = constants.kNewJerseyCheckMark;
const kNewHampshire           = constants.kNewHampshire;
const kNewMexico              = constants.kNewMexico;
const kNewYork                = constants.kNewYork;
const kNewYorkCheckMark       = constants.kNewYorkCheckMark;
const kNorthCarolina          = constants.kNorthCarolina;
const kNorthCarolinaCheckBox  = constants.kNorthCarolinaCheckBox;
const kNorthCarolinaCheckMark = constants.kNorthCarolinaCheckMark;
const kNorthDakota            = constants.kNorthDakota;
const kOahu                   = constants.kOahu;
const kOhio                   = constants.kOhio;
const kOklahoma               = constants.kOklahoma;
const kOklahomaCheckMark      = constants.kOklahomaCheckMark;
const kOregon                 = constants.kOregon;
const kOregonCheckBox         = constants.kOregonCheckBox;
const kPennsylvania           = constants.kPennsylvania;
const kPennsylvaniaCheckMark  = constants.kPennsylvaniaCheckMark;
const kPrefixRedState         = constants.kPrefixRedState;
const kRhodeIsland            = constants.kRhodeIsland;
const kSouthCarolina          = constants.kSouthCarolina;
const kSouthCarolinaCheckMark = constants.kSouthCarolinaCheckMark;
const kSouthDakota            = constants.kSouthDakota;
const kStyle                  = constants.kStyle;
const kTennessee              = constants.kTennessee;
const kTennesseeCheckBox      = constants.kTennesseeCheckBox;
const kTennesseeCheckMark     = constants.kTennesseeCheckMark;
const kTexas                  = constants.kTexas;
const kTexasCheckMark         = constants.kTexasCheckMark;
const kUnpopulated            = constants.kUnpopulated;
const kUtah                   = constants.kUtah;
const kUtahCheckBox           = constants.kUtahCheckBox;
const kUtahCheckMark          = constants.kUtahCheckMark;
const kVermont                = constants.kVermont;
const kVermontCheckMark       = constants.kVermontCheckMark;
const kViewBox                = constants.kViewBox;
const kVirginia               = constants.kVirginia;
const kVirginiaCheckBox       = constants.kVirginiaCheckBox;
const kVirginiaCheckMark      = constants.kVirginiaCheckMark;
const kWestVirginia           = constants.kWestVirginia;
const kWestVirginiaCheckMark  = constants.kWestVirginiaCheckMark;
const kWisconsin              = constants.kWisconsin;
const kYearSliderId           = constants.kYearSliderId;

// Map Function includes:
const mapFunctions = require('./environment/mapFunctions');
const getStateIdForMousedOverPolygon = mapFunctions.getStateIdForMousedOverPolygon;
const onPageLoad                     = mapFunctions.onPageLoad;
const updateAndGetCurrentBlueState   = mapFunctions.updateAndGetCurrentBlueState;

// Test Constant includes:
const testConstants = require('./resources/testConstants');
const kIdaho      = testConstants.kIdaho;
const kWashington = testConstants.kWashington;
const kWyoming    = testConstants.kWyoming;

// Test Function includes:
const testFunctions = require('./resources/testFunctions');
const moveSliderToBeforeStateWasHighPointed = testFunctions.moveSliderToBeforeStateWasHighPointed;
const simulateMouseHoveringOverState        = testFunctions.simulateMouseHoveringOverState;

beforeEach(() => {
    onPageLoad();
}); // beforeEach()

const casesForMovingFromANormallyGreenStateToAnotherState = [
    [kArizona,           kCalifornia       ],
    [kNevada,            kCalifornia       ],
    [kCalifornia,        kOregon           ],
    [kNevada,            kOregon           ],
    [kArizona,           kNevada           ],
    [kCalifornia,        kNevada           ],
    [kUtah,              kNevada           ],
    [kCalifornia,        kArizona          ],
    [kColorado,          kArizona          ],
    [kNevada,            kArizona          ],
    [kNewMexico,         kArizona          ],
    [kUtah,              kArizona          ],
    [kArizona,           kUtah             ],
    [kColorado,          kUtah             ],
    [kNevada,            kUtah             ],
    [kNewMexico,         kUtah             ],
    [kNevada,            kIdaho            ],
    [kUtah,              kIdaho            ],
    [kArizona,           kNewMexico        ],
    [kColorado,          kNewMexico        ],
    [kOklahoma,          kNewMexico        ],
    [kTexas,             kNewMexico        ],
    [kUtah,              kNewMexico        ],
    [kArizona,           kColorado         ],
    [kKansas,            kColorado         ],
    [kNebraska,          kColorado         ],
    [kNewMexico,         kColorado         ],
    [kOklahoma,          kColorado         ],
    [kUtah,              kColorado         ],
    [kColorado,          kWyoming          ],
    [kNebraska,          kWyoming          ],
    [kSouthDakota,       kWyoming          ],
    [kUtah,              kWyoming          ],
    [kNorthDakota,       kMontana          ],
    [kSouthDakota,       kMontana          ],
    [kArkansas,          kTexas            ],
    [kLouisiana,         kTexas            ],
    [kNewMexico,         kTexas            ],
    [kOklahoma,          kTexas            ],
    [kArkansas,          kOklahoma         ],
    [kColorado,          kOklahoma         ],
    [kKansas,            kOklahoma         ],
    [kMissouri,          kOklahoma         ],
    [kNewMexico,         kOklahoma         ],
    [kTexas,             kOklahoma         ],
    [kColorado,          kKansas           ],
    [kMissouri,          kKansas           ],
    [kNebraska,          kKansas           ],
    [kOklahoma,          kKansas           ],
    [kColorado,          kNebraska         ],
    [kIowa,              kNebraska         ],
    [kKansas,            kNebraska         ],
    [kMissouri,          kNebraska         ],
    [kSouthDakota,       kNebraska         ],
    [kIowa,              kSouthDakota      ],
    [kMinnesota,         kSouthDakota      ],
    [kNebraska,          kSouthDakota      ],
    [kNorthDakota,       kSouthDakota      ],
    [kMinnesota,         kNorthDakota      ],
    [kSouthDakota,       kNorthDakota      ],
    [kArkansas,          kLouisiana        ],
    [kMississippi,       kLouisiana        ],
    [kTexas,             kLouisiana        ],
    [kLouisiana,         kArkansas         ],
    [kMississippi,       kArkansas         ],
    [kMissouri,          kArkansas         ],
    [kOklahoma,          kArkansas         ],
    [kTennessee,         kArkansas         ],
    [kTexas,             kArkansas         ],
    [kArkansas,          kMissouri         ],
    [kIllinois,          kMissouri         ],
    [kIowa,              kMissouri         ],
    [kKansas,            kMissouri         ],
    [kKentucky,          kMissouri         ],
    [kNebraska,          kMissouri         ],
    [kOklahoma,          kMissouri         ],
    [kTennessee,         kMissouri         ],
    [kIllinois,          kIowa             ],
    [kMinnesota,         kIowa             ],
    [kMissouri,          kIowa             ],
    [kNebraska,          kIowa             ],
    [kSouthDakota,       kIowa             ],
    [kWisconsin,         kIowa             ],
    [kIowa,              kMinnesota        ],
    [kNorthDakota,       kMinnesota        ],
    [kSouthDakota,       kMinnesota        ],
    [kWisconsin,         kMinnesota        ],
    [kAlabama,           kMississippi      ],
    [kArkansas,          kMississippi      ],
    [kLouisiana,         kMississippi      ],
    [kTennessee,         kMississippi      ],
    [kIndiana,           kIllinois         ],
    [kIowa,              kIllinois         ],
    [kKentucky,          kIllinois         ],
    [kMissouri,          kIllinois         ],
    [kWisconsin,         kIllinois         ],
    [kIllinois,          kWisconsin        ],
    [kIowa,              kWisconsin        ],
    [kMichiganPeninsula, kWisconsin        ],
    [kMinnesota,         kWisconsin        ],
    [kGeorgia,           kAlabama          ],
    [kMississippi,       kAlabama          ],
    [kTennessee,         kAlabama          ],
    [kAlabama,           kTennessee        ],
    [kArkansas,          kTennessee        ],
    [kGeorgia,           kTennessee        ],
    [kKentucky,          kTennessee        ],
    [kMississippi,       kTennessee        ],
    [kMissouri,          kTennessee        ],
    [kNorthCarolina,     kTennessee        ],
    [kVirginia,          kTennessee        ],
    [kIllinois,          kKentucky         ],
    [kIndiana,           kKentucky         ],
    [kMissouri,          kKentucky         ],
    [kOhio,              kKentucky         ],
    [kTennessee,         kKentucky         ],
    [kVirginia,          kKentucky         ],
    [kWestVirginia,      kKentucky         ],
    [kIllinois,          kIndiana          ],
    [kKentucky,          kIndiana          ],
    [kMichiganMainland,  kIndiana          ],
    [kOhio,              kIndiana          ],
    [kIndiana,           kMichiganMainland ],
    [kMichiganPeninsula, kMichiganMainland ],
    [kOhio,              kMichiganMainland ],
    [kMichiganMainland,  kMichiganPeninsula],
    [kWisconsin,         kMichiganPeninsula],
    [kAlabama,           kFlorida          ],
    [kGeorgia,           kFlorida          ],
    [kAlabama,           kGeorgia          ],
    [kNorthCarolina,     kGeorgia          ],
    [kSouthCarolina,     kGeorgia          ],
    [kTennessee,         kGeorgia          ],
    [kIndiana,           kOhio             ],
    [kKentucky,          kOhio             ],
    [kMichiganMainland,  kOhio             ],
    [kPennsylvania,      kOhio             ],
    [kWestVirginia,      kOhio             ],
    [kGeorgia,           kSouthCarolina    ],
    [kNorthCarolina,     kSouthCarolina    ],
    [kGeorgia,           kNorthCarolina    ],
    [kSouthCarolina,     kNorthCarolina    ],
    [kTennessee,         kNorthCarolina    ],
    [kVirginia,          kNorthCarolina    ],
    [kKentucky,          kVirginia         ],
    [kMaryland,          kVirginia         ],
    [kNorthCarolina,     kVirginia         ],
    [kTennessee,         kVirginia         ],
    [kWestVirginia,      kVirginia         ],
    [kKentucky,          kWestVirginia     ],
    [kMaryland,          kWestVirginia     ],
    [kOhio,              kWestVirginia     ],
    [kPennsylvania,      kWestVirginia     ],
    [kVirginia,          kWestVirginia     ],
    [kDelaware,          kMaryland         ],
    [kPennsylvania,      kMaryland         ],
    [kVirginia,          kMaryland         ],
    [kWestVirginia,      kMaryland         ],
    [kMaryland,          kDelaware         ],
    [kNewJersey,         kDelaware         ],
    [kPennsylvania,      kDelaware         ],
    [kDelaware,          kPennsylvania     ],
    [kMaryland,          kPennsylvania     ],
    [kNewJersey,         kPennsylvania     ],
    [kNewYork,           kPennsylvania     ],
    [kOhio,              kPennsylvania     ],
    [kWestVirginia,      kPennsylvania     ],
    [kConnecticut,       kNewJersey        ],
    [kDelaware,          kNewJersey        ],
    [kNewYork,           kNewJersey        ],
    [kPennsylvania,      kNewJersey        ],
    [kConnecticut,       kNewYork          ],
    [kMassachusetts,     kNewYork          ],
    [kNewJersey,         kNewYork          ],
    [kPennsylvania,      kNewYork          ],
    [kVermont,           kNewYork          ],
    [kMassachusetts,     kConnecticut      ],
    [kNewJersey,         kConnecticut      ],
    [kNewYork,           kConnecticut      ],
    [kRhodeIsland,       kConnecticut      ],
    [kConnecticut,       kRhodeIsland      ],
    [kMassachusetts,     kRhodeIsland      ],
    [kConnecticut,       kMassachusetts    ],
    [kNewHampshire,      kMassachusetts    ],
    [kNewYork,           kMassachusetts    ],
    [kRhodeIsland,       kMassachusetts    ],
    [kVermont,           kMassachusetts    ],
    [kMassachusetts,     kVermont          ],
    [kNewHampshire,      kVermont          ],
    [kNewYork,           kVermont          ],
    [kMaine,             kNewHampshire     ],
    [kMassachusetts,     kNewHampshire     ],
    [kVermont,           kNewHampshire     ],
    [kNewHampshire,      kMaine            ]
];

describe(`when moving the mouse from normally-green state A to state B, calling
            updateAndGetCurrentBlueState() turns state B light blue`, () => {
    each(casesForMovingFromANormallyGreenStateToAnotherState).it(
            `case for moving mouse from '%s' to '%s'`,
            (mostRecentBlueStateId, toStateId) => {
        simulateMouseHoveringOverState(mostRecentBlueStateId);
        const toState = document.getElementById(toStateId);
        const mouseEvent = { target: toState };
        expect(toState.getAttribute(kStyle)).toBe(null);

        const updateResult = updateAndGetCurrentBlueState(mouseEvent, mostRecentBlueStateId);

        expect(updateResult).toBe(toStateId);
        expect(toState.getAttribute(kStyle)).toBe(kLightBlueFill);
    });
}); /* when moving the mouse from green state A to state B, calling
        updateAndGetCurrentBlueState() turns state B light blue */

describe(`when moving the mouse from normally-green state A to state B, calling
            updateAndGetCurrentBlueState() changes the light blue fill of state A to light
            green`, () => {
    each(casesForMovingFromANormallyGreenStateToAnotherState).it(
            `case for moving mouse from '%s' to '%s'`,
            (mostRecentBlueStateId, toStateId) => {
        const mostRecentBlueState = simulateMouseHoveringOverState(mostRecentBlueStateId);
        const mouseEvent = { target: document.getElementById(toStateId) };
        expect(mostRecentBlueState.getAttribute(kStyle)).toBe(kLightBlueFill);

        const updateResult = updateAndGetCurrentBlueState(mouseEvent, mostRecentBlueStateId);

        expect(updateResult).toBe(toStateId);
        expect(mostRecentBlueState.getAttribute(kStyle)).toBe(kLightGreenFill);
    });
}); /* when moving the mouse from normally-green state A to state B, calling
        updateAndGetCurrentBlueState() changes the light blue fill of state A to light green */

const casesForMovingFromANormallyRedStateToAnotherState = [
    [kOregon,     kCalifornia ],
    [kIdaho,      kOregon     ],
    [kWashington, kOregon     ],
    [kIdaho,      kWashington ],
    [kOregon,     kWashington ],
    [kIdaho,      kNevada     ],
    [kOregon,     kNevada     ],
    [kIdaho,      kUtah       ],
    [kWyoming,    kUtah       ],
    [kOregon,     kIdaho      ],
    [kMontana,    kIdaho      ],
    [kWashington, kIdaho      ],
    [kWyoming,    kIdaho      ],
    [kWyoming,    kColorado   ],
    [kIdaho,      kWyoming    ],
    [kMontana,    kWyoming    ],
    [kIdaho,      kMontana    ],
    [kWyoming,    kMontana    ],
    [kWyoming,    kNebraska   ],
    [kMontana,    kSouthDakota],
    [kWyoming,    kSouthDakota],
    [kMontana,    kNorthDakota],
    [kFlorida,    kAlabama    ],
    [kFlorida,    kGeorgia    ]
];

describe(`when moving the mouse from normally-red state A to state B, calling
            updateAndGetCurrentBlueState() turns state B light blue`, () => {
    each(casesForMovingFromANormallyRedStateToAnotherState).it(
            `case for moving mouse from '%s' to '%s'`,
            (mostRecentBlueStateId, toStateId) => {
        simulateMouseHoveringOverState(mostRecentBlueStateId);
        const toState = document.getElementById(toStateId);
        const mouseEvent = { target: toState };
        expect(toState.getAttribute(kStyle)).toBe(null);

        const updateResult = updateAndGetCurrentBlueState(mouseEvent, mostRecentBlueStateId);

        expect(updateResult).toBe(toStateId);
        expect(toState.getAttribute(kStyle)).toBe(kLightBlueFill);
    });
}); /* when moving the mouse from normally-red state A to state B, calling
        updateAndGetCurrentBlueState() turns state B light blue */

describe(`when moving the mouse from normally-red state A to state B, calling
            updateAndGetCurrentBlueState() changes the light blue fill of state A to light
            red`, () => {
    each(casesForMovingFromANormallyRedStateToAnotherState).it(
            `case for moving mouse from '%s' to '%s'`,
            (mostRecentBlueStateId, toStateId) => {
        const mostRecentBlueState = simulateMouseHoveringOverState(mostRecentBlueStateId);
        const mouseEvent = { target: document.getElementById(toStateId) };
        expect(mostRecentBlueState.getAttribute(kStyle)).toBe(kLightBlueFill);

        const updateResult = updateAndGetCurrentBlueState(mouseEvent, mostRecentBlueStateId);

        expect(updateResult).toBe(toStateId);
        expect(mostRecentBlueState.getAttribute(kStyle)).toBe(kLightRedFill);
    });
}); /* when moving the mouse from normally-red state A to state B, calling
        updateAndGetCurrentBlueState() changes the light blue fill of state A to light
        red */

const normallyGreenBorderStates = [
    kCalifornia,
    kArizona,
    kNewMexico,
    kTexas,
    kNorthDakota,
    kLouisiana,
    kMinnesota,
    kMississippi,
    kIllinois,
    kWisconsin,
    kMichiganPeninsula,
    kAlabama,
    kIndiana,
    kMichiganMainland,
    kGeorgia,
    kOhio,
    kSouthCarolina,
    kNorthCarolina,
    kVirginia,
    kMaryland,
    kDelaware,
    kPennsylvania,
    kNewJersey,
    kNewYork,
    kConnecticut,
    kRhodeIsland,
    kMassachusetts,
    kVermont,
    kNewHampshire,
    kMaine
];

const normallyRedBorderStates = [
    kAlaskaMainland,
    kKodiakIsland,
    kOregon,
    kWashington,
    kIdaho,
    kHawaii,
    kMaui,
    kOahu,
    kKauai,
    kMontana,
    kFlorida
];

const statesBorderingTheViewBox = normallyGreenBorderStates.concat(normallyRedBorderStates);

describe(`when moving the mouse from the view box into a state, calling
            updateAndGetCurrentBlueState() fills the new state light blue`, () => {
    each(statesBorderingTheViewBox).it(
            `case for moving mouse into '%s' from the view box`,
            (stateId) => {
        const state = document.getElementById(stateId);
        const mouseEvent = { target: state };
        const mostRecentBlueStateId = kUnpopulated;
        expect(state.getAttribute(kStyle)).toBe(null);

        const updateResult = updateAndGetCurrentBlueState(mouseEvent, mostRecentBlueStateId);

        expect(updateResult).toBe(stateId);
        expect(state.getAttribute(kStyle)).toBe(kLightBlueFill);
    });
}); /* when moving the mouse from the view box into a state, calling
        updateAndGetCurrentBlueState() fills the new state light blue */

describe(`when moving the mouse from a normally-green state into the view box, calling
            updateAndGetCurrentBlueState() fills the state light green`, () => {
    each(normallyGreenBorderStates).it(
            `case for moving mouse into the view box from '%s'`,
            (mostRecentBlueStateId) => {
        const mostRecentBlueState = simulateMouseHoveringOverState(mostRecentBlueStateId);
        const mouseEvent = { target: document.getElementById(kViewBox) };
        expect(mostRecentBlueState.getAttribute(kStyle)).toBe(kLightBlueFill);

        const updateResult = updateAndGetCurrentBlueState(mouseEvent, mostRecentBlueStateId);

        expect(updateResult).toBe(null);
        expect(mostRecentBlueState.getAttribute(kStyle)).toBe(kLightGreenFill);
    });
}); /* when moving the mouse from a normally-green state into the view box, calling
        updateAndGetCurrentBlueState() fills the state light green */

describe(`when moving the mouse from a state into the view box, calling
            updateAndGetCurrentBlueState() performs no operation on the view box`, () => {
    each(statesBorderingTheViewBox).it(
            `case for moving mouse into the view box from '%s'`,
            (mostRecentBlueStateId) => {
        simulateMouseHoveringOverState(mostRecentBlueStateId);
        const viewBox = document.getElementById(kViewBox);
        const mouseEvent = { target: viewBox };
        expect(viewBox.getAttribute(kStyle)).toBe(null);

        const updateResult = updateAndGetCurrentBlueState(mouseEvent, mostRecentBlueStateId);

        expect(updateResult).toBe(null);
        expect(viewBox.getAttribute(kStyle)).toBe(null);
    });
}); /* when moving the mouse from a state into the view box, calling
        updateAndGetCurrentBlueState() performs no operation on the view box */

describe(`when moving the mouse from a normally-red state into the view box, calling
            updateAndGetCurrentBlueState() fills the state light red`, () => {
    each(normallyRedBorderStates).it(
            `case for moving mouse into the view box from '%s'`,
            (mostRecentBlueStateId) => {
        const mostRecentBlueState = simulateMouseHoveringOverState(mostRecentBlueStateId);
        const mouseEvent = { target: document.getElementById(kViewBox) };
        expect(mostRecentBlueState.getAttribute(kStyle)).toBe(kLightBlueFill);

        const updateResult = updateAndGetCurrentBlueState(mouseEvent, mostRecentBlueStateId);

        expect(updateResult).toBe(null);
        expect(mostRecentBlueState.getAttribute(kStyle)).toBe(kLightRedFill);
    });
}); /* when moving the mouse from a normally-red state into the view box, calling
        updateAndGetCurrentBlueState() fills the state light red */

describe(`when moving the mouse from the view box into a state, calling
            updateAndGetCurrentBlueState() performs no operation on the view box`, () => {
    each(statesBorderingTheViewBox).it(
            `case for moving mouse into '%s' from the view box`,
            (stateId) => {
        const mouseEvent = { target: document.getElementById(stateId) };
        const mostRecentBlueStateId = kUnpopulated;
        const viewBox = document.getElementById(kViewBox);
        expect(viewBox.getAttribute(kStyle)).toBe(null);

        const updateResult = updateAndGetCurrentBlueState(mouseEvent, mostRecentBlueStateId);

        expect(updateResult).toBe(stateId);
        expect(viewBox.getAttribute(kStyle)).toBe(null);
    });
}); /* when moving the mouse from the view box into a state, calling
        updateAndGetCurrentBlueState() performs no operation on the view box */

const casesForMovingFromANormallyGreenStateToACheckMarkOrBox = [
    [kCalifornia,    kNevadaCheckBox        ],
    [kCalifornia,    kNevadaCheckMark       ],
    [kNorthCarolina, kTennesseeCheckBox     ],
    [kMinnesota,     kIowaCheckBox          ],
    [kAlabama,       kFloridaCheckBox       ],
    [kTennessee,     kGeorgiaCheckMark      ],
    [kNorthCarolina, kGeorgiaCheckMark      ],
    [kNorthCarolina, kSouthCarolinaCheckMark],
    [kTennessee,     kNorthCarolinaCheckBox ],
    [kTennessee,     kNorthCarolinaCheckMark],
    [kVirginia,      kNorthCarolinaCheckMark],
    [kNorthCarolina, kVirginiaCheckBox      ],
    [kWestVirginia,  kVirginiaCheckBox      ],
    [kNorthCarolina, kVirginiaCheckMark     ],
    [kTennessee,     kVirginiaCheckMark     ],
    [kWestVirginia,  kVirginiaCheckMark     ],
    [kVirginia,      kWestVirginiaCheckMark ],
    [kMaryland,      kWestVirginiaCheckMark ],
    [kPennsylvania,  kWestVirginiaCheckMark ],
    [kPennsylvania,  kMarylandCheckMark     ],
    [kWestVirginia,  kMarylandCheckMark     ]
];

describe(`when moving the mouse from a normally-green state to a check mark or box, calling
            updateAndGetCurrentBlueState() fills the new state light blue`, () => {
    each(casesForMovingFromANormallyGreenStateToACheckMarkOrBox).it(
            `case for moving mouse from '%s' to '%s'`,
            (mostRecentBlueStateId, checkMarkOrBoxId) => {
        simulateMouseHoveringOverState(mostRecentBlueStateId);
        const mouseEvent = { target: document.getElementById(checkMarkOrBoxId) };
        const toStateId = getStateIdForMousedOverPolygon(checkMarkOrBoxId);
        const toState = document.getElementById(toStateId);
        expect(toState.getAttribute(kStyle)).toBe(null);

        const updateResult = updateAndGetCurrentBlueState(mouseEvent, mostRecentBlueStateId);

        expect(updateResult).toBe(toStateId);
        expect(toState.getAttribute(kStyle)).toBe(kLightBlueFill);
    });
}); /* when moving the mouse from a normally-green state to a check mark or box, calling
        updateAndGetCurrentBlueState() fills the new state light blue */

describe(`when moving the mouse from a normally-green state to a check mark or box, calling
            updateAndGetCurrentBlueState() performs no operation on the check mark or box`, () => {
    each(casesForMovingFromANormallyGreenStateToACheckMarkOrBox).it(
            `case for moving mouse from '%s' to '%s'`,
            (mostRecentBlueStateId, checkMarkOrBoxId) => {
        simulateMouseHoveringOverState(mostRecentBlueStateId);
        const checkMarkOrBox = document.getElementById(checkMarkOrBoxId);
        const mouseEvent = { target: checkMarkOrBox };
        expect(checkMarkOrBox.getAttribute(kStyle)).toBe(null);

        const updateResult = updateAndGetCurrentBlueState(mouseEvent, mostRecentBlueStateId);

        const toStateId = getStateIdForMousedOverPolygon(checkMarkOrBoxId);
        expect(updateResult).toBe(toStateId);
        expect(checkMarkOrBox.getAttribute(kStyle)).toBe(null);
    });
}); /* when moving the mouse from a normally-green state to a check mark or box, calling
        updateAndGetCurrentBlueState() performs no operation on the check mark or box */

describe(`when moving the mouse from a normally-green state to a check mark or box, calling
            updateAndGetCurrentBlueState() changes the old state from light blue to light
            green`, () => {
    each(casesForMovingFromANormallyGreenStateToACheckMarkOrBox).it(
            `case for moving mouse from '%s' to '%s'`,
            (mostRecentBlueStateId, checkMarkOrBoxId) => {
        const mostRecentBlueState = simulateMouseHoveringOverState(mostRecentBlueStateId);
        const mouseEvent = { target: document.getElementById(checkMarkOrBoxId) };
        expect(mostRecentBlueState.getAttribute(kStyle)).toBe(kLightBlueFill);

        const updateResult = updateAndGetCurrentBlueState(mouseEvent, mostRecentBlueStateId);

        const toStateId = getStateIdForMousedOverPolygon(checkMarkOrBoxId);
        expect(updateResult).toBe(toStateId);
        expect(mostRecentBlueState.getAttribute(kStyle)).toBe(kLightGreenFill);
    });
}); /* when moving the mouse from a normally-green state to a check mark or box, calling
        updateAndGetCurrentBlueState() changes the old state from light blue to light
        green */

const casesForMovingFromANormallyRedStateToACheckMarkOrBox = [
    [kWashington, kOregonCheckBox ],
    [kWyoming,    kUtahCheckBox   ],
    [kWyoming,    kUtahCheckMark  ],
    [kWyoming,    kMontanaCheckBox]
];

describe(`when moving the mouse from a normally-red state to a check mark or box, calling
            updateAndGetCurrentBlueState() fills the new state light blue`, () => {
    each(casesForMovingFromANormallyRedStateToACheckMarkOrBox).it(
            `case for moving mouse from '%s' to '%s'`,
            (mostRecentBlueStateId, checkMarkOrBoxId) => {
        simulateMouseHoveringOverState(mostRecentBlueStateId);
        const mouseEvent = { target: document.getElementById(checkMarkOrBoxId) };
        const toStateId = getStateIdForMousedOverPolygon(checkMarkOrBoxId);
        const toState = document.getElementById(toStateId);
        expect(toState.getAttribute(kStyle)).toBe(null);

        const updateResult = updateAndGetCurrentBlueState(mouseEvent, mostRecentBlueStateId);

        expect(updateResult).toBe(toStateId);
        expect(toState.getAttribute(kStyle)).toBe(kLightBlueFill);
    });
}); /* when moving the mouse from a normally-red state to a check mark or box, calling
        updateAndGetCurrentBlueState() fills the new state light blue */

describe(`when moving the mouse from a normally-red state to a check mark or box, calling
            updateAndGetCurrentBlueState() performs no operation on the check mark or box`, () => {
    each(casesForMovingFromANormallyRedStateToACheckMarkOrBox).it(
            `case for moving mouse from '%s' to '%s'`,
            (mostRecentBlueStateId, checkMarkOrBoxId) => {
        simulateMouseHoveringOverState(mostRecentBlueStateId);
        const checkMarkOrBox = document.getElementById(checkMarkOrBoxId);
        const mouseEvent = { target: checkMarkOrBox };
        expect(checkMarkOrBox.getAttribute(kStyle)).toBe(null);

        const updateResult = updateAndGetCurrentBlueState(mouseEvent, mostRecentBlueStateId);

        const toStateId = getStateIdForMousedOverPolygon(checkMarkOrBoxId);
        expect(updateResult).toBe(toStateId);
        expect(checkMarkOrBox.getAttribute(kStyle)).toBe(null);
    });
}); /* when moving the mouse from a normally-red state to a check mark or box, calling
        updateAndGetCurrentBlueState() performs no operation on the check mark or box */

describe(`when moving the mouse from a normally-red state to a check mark or box, calling
            updateAndGetCurrentBlueState() changes the old state from light blue to light
            red`, () => {
    each(casesForMovingFromANormallyRedStateToACheckMarkOrBox).it(
            `case for moving mouse from '%s' to '%s'`,
            (mostRecentBlueStateId, checkMarkOrBoxId) => {
        const mostRecentBlueState = simulateMouseHoveringOverState(mostRecentBlueStateId);
        const mouseEvent = { target: document.getElementById(checkMarkOrBoxId) };
        expect(mostRecentBlueState.getAttribute(kStyle)).toBe(kLightBlueFill);

        const updateResult = updateAndGetCurrentBlueState(mouseEvent, mostRecentBlueStateId);

        const toStateId = getStateIdForMousedOverPolygon(checkMarkOrBoxId);
        expect(updateResult).toBe(toStateId);
        expect(mostRecentBlueState.getAttribute(kStyle)).toBe(kLightRedFill);
    });
}); /* when moving the mouse from a normally-red state to a check mark or box, calling
        updateAndGetCurrentBlueState() changes the old state from light blue to light red */

const casesForMovingFromACheckMarkToAnotherCheckMark = [
    [kNorthCarolinaCheckMark, kSouthCarolinaCheckMark],
    [kSouthCarolinaCheckMark, kNorthCarolinaCheckMark],
    [kPennsylvaniaCheckMark,  kMarylandCheckMark     ],
    [kMarylandCheckMark,      kPennsylvaniaCheckMark ]
];

describe(`when moving the mouse between two check marks, calling updateAndGetCurrentBlueState()
            fills the corresponding new state light blue`, () => {
    each(casesForMovingFromACheckMarkToAnotherCheckMark).it(
            `case for moving mouse from '%s' to '%s'`,
            (fromCheckMarkId, toCheckMarkId) => {
        const mostRecentBlueStateId = getStateIdForMousedOverPolygon(fromCheckMarkId);
        simulateMouseHoveringOverState(mostRecentBlueStateId);
        const mouseEvent = { target: document.getElementById(toCheckMarkId) };
        const toStateId = getStateIdForMousedOverPolygon(toCheckMarkId);
        const toState = document.getElementById(toStateId);
        expect(mostRecentBlueStateId).not.toBe(kUnpopulated);
        expect(toState.getAttribute(kStyle)).toBe(null);

        const updateResult = updateAndGetCurrentBlueState(mouseEvent, mostRecentBlueStateId);

        expect(updateResult).toBe(toStateId);
        expect(toState.getAttribute(kStyle)).toBe(kLightBlueFill);
    });
}); /* when moving the mouse between two check marks, calling updateAndGetCurrentBlueState()
        fills the corresponding new state light blue */

describe(`when moving the mouse between two check marks, calling updateAndGetCurrentBlueState()
            performs no operation on the new check mark`, () => {
    each(casesForMovingFromACheckMarkToAnotherCheckMark).it(
            `case for moving mouse from '%s' to '%s'`,
            (fromCheckMarkId, toCheckMarkId) => {
        const mostRecentBlueStateId = getStateIdForMousedOverPolygon(fromCheckMarkId);
        simulateMouseHoveringOverState(mostRecentBlueStateId);
        const newCheckMark = document.getElementById(toCheckMarkId);
        const mouseEvent = { target: newCheckMark };
        expect(mostRecentBlueStateId).not.toBe(kUnpopulated);
        expect(newCheckMark.getAttribute(kStyle)).toBe(null);

        const updateResult = updateAndGetCurrentBlueState(mouseEvent, mostRecentBlueStateId);

        const toStateId = getStateIdForMousedOverPolygon(toCheckMarkId);
        expect(updateResult).toBe(toStateId);
        expect(newCheckMark.getAttribute(kStyle)).toBe(null);
    });
}); /* when moving the mouse between two check marks, calling updateAndGetCurrentBlueState()
        performs no operation on the new check mark */

describe(`when moving the mouse between two check marks, calling updateAndGetCurrentBlueState()
            performs no operation on the old check mark`, () => {
    each(casesForMovingFromACheckMarkToAnotherCheckMark).it(
            `case for moving mouse from '%s' to '%s'`,
            (fromCheckMarkId, toCheckMarkId) => {
        const mostRecentBlueStateId = getStateIdForMousedOverPolygon(fromCheckMarkId);
        simulateMouseHoveringOverState(mostRecentBlueStateId);
        const oldCheckMark = document.getElementById(fromCheckMarkId);
        const mouseEvent = { target: document.getElementById(toCheckMarkId) };
        expect(mostRecentBlueStateId).not.toBe(kUnpopulated);
        expect(oldCheckMark.getAttribute(kStyle)).toBe(null);

        const updateResult = updateAndGetCurrentBlueState(mouseEvent, mostRecentBlueStateId);

        const toStateId = getStateIdForMousedOverPolygon(toCheckMarkId);
        expect(updateResult).toBe(toStateId);
        expect(oldCheckMark.getAttribute(kStyle)).toBe(null);
    });
}); /* when moving the mouse between two check marks, calling updateAndGetCurrentBlueState()
        performs no operation on the old check mark */

describe(`when moving the mouse between two check marks, calling updateAndGetCurrentBlueState()
            resets the fill on the previous state to light green`, () => {
    each(casesForMovingFromACheckMarkToAnotherCheckMark).it(
            `case for moving mouse from '%s' to '%s'`,
            (fromCheckMarkId, toCheckMarkId) => {
        const mostRecentBlueStateId = getStateIdForMousedOverPolygon(fromCheckMarkId);
        const mostRecentBlueState = simulateMouseHoveringOverState(mostRecentBlueStateId);
        const mouseEvent = { target: document.getElementById(toCheckMarkId) };
        expect(mostRecentBlueState.getAttribute(kStyle)).toBe(kLightBlueFill);

        const updateResult = updateAndGetCurrentBlueState(mouseEvent, mostRecentBlueStateId);

        const toStateId = getStateIdForMousedOverPolygon(toCheckMarkId);
        expect(updateResult).toBe(toStateId);
        expect(mostRecentBlueState.getAttribute(kStyle)).toBe(kLightGreenFill);
    });
}); /* when moving the mouse between two check marks, calling updateAndGetCurrentBlueState()
        resets the fill on the previous state to light green */

const mostCasesForMovingBetweenACheckBoxAndAState = [
    [kOregonCheckBox,  kWashington],
    [kMontanaCheckBox, kWyoming   ],
    [kFloridaCheckBox, kAlabama   ]
];

const mostCasesForMovingBetweenACheckMarkAndAState = [
    [kNevadaCheckMark,        kCalifornia   ],
    [kUtahCheckMark,          kWyoming      ],
    [kIowaCheckMark,          kMinnesota    ],
    [kTennesseeCheckMark,     kNorthCarolina],
    [kTennesseeCheckMark,     kVirginia     ],
    [kGeorgiaCheckMark,       kTennessee    ],
    [kGeorgiaCheckMark,       kNorthCarolina],
    [kSouthCarolinaCheckMark, kNorthCarolina],
    [kNorthCarolinaCheckMark, kTennessee    ],
    [kNorthCarolinaCheckMark, kVirginia     ],
    [kVirginiaCheckMark,      kNorthCarolina],
    [kVirginiaCheckMark,      kTennessee    ],
    [kVirginiaCheckMark,      kWestVirginia ],
    [kMarylandCheckMark,      kWestVirginia ],
    [kMarylandCheckMark,      kPennsylvania ],
    [kWestVirginiaCheckMark,  kMaryland     ],
    [kWestVirginiaCheckMark,  kPennsylvania ]
];

const casesForMovingBetweenAStateAndACheckMarkThatRedirectsToTheSameState = [
    [kTexasCheckMark,         kNewMexico    ],
    [kOklahomaCheckMark,      kColorado     ],
    [kIllinoisCheckMark,      kWisconsin    ],
    [kDelawareCheckMark,      kPennsylvania ],
    [kNewJerseyCheckMark,     kNewYork      ],
    [kConnecticutCheckMark,   kMassachusetts],
    [kMassachusettsCheckMark, kVermont      ]
];

const casesForMovingBetweenACheckMarkOrBoxAndAState =
    (
        mostCasesForMovingBetweenACheckBoxAndAState.concat
        (
            mostCasesForMovingBetweenACheckMarkAndAState
        )
    ).concat
    (
        casesForMovingBetweenAStateAndACheckMarkThatRedirectsToTheSameState
    );

describe(`when moving the mouse from a check mark or box into a state, calling
            updateAndGetCurrentBlueState() fills the new state light blue`, () => {
    each(casesForMovingBetweenACheckMarkOrBoxAndAState).it(
            `case for moving mouse from '%s' to '%s'`,
            (checkMarkOrBoxId, toStateId) => {
        const toState = document.getElementById(toStateId);
        const mouseEvent = { target: toState };
        const mostRecentBlueStateId = getStateIdForMousedOverPolygon(checkMarkOrBoxId);
        expect(mostRecentBlueStateId).not.toBe(kUnpopulated);
        expect(toState.getAttribute(kStyle)).toBe(null);

        const updateResult = updateAndGetCurrentBlueState(mouseEvent, mostRecentBlueStateId);

        expect(updateResult).toBe(toStateId);
        expect(toState.getAttribute(kStyle)).toBe(kLightBlueFill);
    });
}); /* when moving the mouse from a check mark or box into a state, calling
        updateAndGetCurrentBlueState() fills the new state light blue */

describe(`when moving the mouse from a check mark or box into a state, calling
            updateAndGetCurrentBlueState() performs no operation on the check mark or box`, () => {
    each(casesForMovingBetweenACheckMarkOrBoxAndAState).it(
            `case for moving mouse from '%s' to '%s'`,
            (checkMarkOrBoxId, toStateId) => {
        const checkMarkOrBox = document.getElementById(checkMarkOrBoxId);
        const mouseEvent = { target: document.getElementById(toStateId) };
        const mostRecentBlueStateId = getStateIdForMousedOverPolygon(checkMarkOrBoxId);
        expect(mostRecentBlueStateId).not.toBe(kUnpopulated);
        expect(checkMarkOrBox.getAttribute(kStyle)).toBe(null);

        const updateResult = updateAndGetCurrentBlueState(mouseEvent, mostRecentBlueStateId);

        expect(updateResult).toBe(toStateId);
        expect(checkMarkOrBox.getAttribute(kStyle)).toBe(null);
    });
}); /* when moving the mouse from a check mark or box into a state, calling
        updateAndGetCurrentBlueState() performs no operation on the check mark or box */

describe(`when moving the mouse from a check mark into a state, calling
            updateAndGetCurrentBlueState() fills the old state light green`, () => {
    each(mostCasesForMovingBetweenACheckMarkAndAState).it(
            `case for moving mouse from '%s' to '%s'`,
            (checkMarkOrBoxId, toStateId) => {
        const mostRecentBlueStateId = getStateIdForMousedOverPolygon(checkMarkOrBoxId);
        const mostRecentBlueState = simulateMouseHoveringOverState(mostRecentBlueStateId);
        const mouseEvent = { target: document.getElementById(toStateId) };
        expect(mostRecentBlueState.getAttribute(kStyle)).toBe(kLightBlueFill);

        const updateResult = updateAndGetCurrentBlueState(mouseEvent, mostRecentBlueStateId);

        expect(updateResult).toBe(toStateId);
        expect(mostRecentBlueState.getAttribute(kStyle)).toBe(kLightGreenFill);
    });
}); /* when moving the mouse from a check mark into a state, calling
        updateAndGetCurrentBlueState() fills the old state light green */

describe(`when moving the mouse from a check box into a state, calling
            updateAndGetCurrentBlueState() fills the old state light red`, () => {
    each(mostCasesForMovingBetweenACheckBoxAndAState).it(
            `case for moving mouse from '%s' to '%s'`,
            (checkMarkOrBoxId, toStateId) => {
        const mostRecentBlueStateId = getStateIdForMousedOverPolygon(checkMarkOrBoxId);
        const mostRecentBlueState = simulateMouseHoveringOverState(mostRecentBlueStateId);
        const mouseEvent = { target: document.getElementById(toStateId) };
        expect(mostRecentBlueState.getAttribute(kStyle)).toBe(kLightBlueFill);

        const updateResult = updateAndGetCurrentBlueState(mouseEvent, mostRecentBlueStateId);

        expect(updateResult).toBe(toStateId);
        expect(mostRecentBlueState.getAttribute(kStyle)).toBe(kLightRedFill);
    });
}); /* when moving the mouse from a check box into a state, calling
        updateAndGetCurrentBlueState() fills the old state light red */

const casesForMovingBetweenACheckBoxAndAStateAfterChangingYearSliderValue = [
    [kNevadaCheckBox,        kCalifornia   ],
    [kUtahCheckBox,          kWyoming      ],
    [kIowaCheckBox,          kMinnesota    ],
    [kTennesseeCheckBox,     kNorthCarolina],
    [kNorthCarolinaCheckBox, kTennessee    ],
    [kVirginiaCheckBox,      kTennessee    ],
    [kVirginiaCheckBox,      kNorthCarolina]
];

describe(`when moving the mouse from a check box into a state after changing the year slider value,
            calling updateAndGetCurrentBlueState() fills the old state light red`, () => {
    each(casesForMovingBetweenACheckBoxAndAStateAfterChangingYearSliderValue).it(
            `case for moving mouse from '%s' to '%s'`,
            (checkBoxId, toStateId) => {
        const mostRecentBlueStateId = getStateIdForMousedOverPolygon(checkBoxId);
        moveSliderToBeforeStateWasHighPointed(mostRecentBlueStateId);
        const mostRecentBlueState = simulateMouseHoveringOverState(mostRecentBlueStateId);
        const mouseEvent = { target: document.getElementById(toStateId) };
        expect(mostRecentBlueState.getAttribute(kStyle)).toBe(kLightBlueFill);

        const updateResult = updateAndGetCurrentBlueState(mouseEvent, mostRecentBlueStateId);

        expect(updateResult).toBe(toStateId);
        expect(mostRecentBlueState.getAttribute(kStyle)).toBe(kLightRedFill);
    });
}); /* when moving the mouse from a check box into a state after changing the year slider value,
        calling updateAndGetCurrentBlueState() fills the old state light red */

describe(`when moving the mouse from a redirecting check mark to the same state redirected to,
            calling updateAndGetCurrentBlueState() performs no operation`, () => {
    each(casesForMovingBetweenAStateAndACheckMarkThatRedirectsToTheSameState).it(
            `case for moving mouse from '%s' to '%s'`,
            (checkMarkId, toStateId) => {
        const mostRecentBlueStateId = getStateIdForMousedOverPolygon(checkMarkId);
        const mostRecentBlueState = simulateMouseHoveringOverState(mostRecentBlueStateId);
        const mouseEvent = { target: document.getElementById(toStateId) };
        expect(mostRecentBlueState.getAttribute(kStyle)).toBe(kLightBlueFill);

        const updateResult = updateAndGetCurrentBlueState(mouseEvent, mostRecentBlueStateId);

        expect(updateResult).toBe(mostRecentBlueStateId);
        expect(mostRecentBlueState.getAttribute(kStyle)).toBe(kLightBlueFill);
    });
}); /* when moving the mouse from a redirecting check mark to the same state redirected to,
        calling updateAndGetCurrentBlueState() performs no operation */

describe(`when moving the mouse from a state to a check mark that redirects to the same state,
            calling updateAndGetCurrentBlueState() performs no operation on the check
            mark`, () => {
    each(casesForMovingBetweenAStateAndACheckMarkThatRedirectsToTheSameState).it(
            `case for moving mouse to '%s' from '%s'`,
            (checkMarkId, mostRecentBlueStateId) => {
        simulateMouseHoveringOverState(mostRecentBlueStateId);
        const checkMark = document.getElementById(checkMarkId);
        const mouseEvent = { target: checkMark };
        expect(checkMark.getAttribute(kStyle)).toBe(null);

        const updateResult = updateAndGetCurrentBlueState(mouseEvent, mostRecentBlueStateId);

        expect(updateResult).toBe(mostRecentBlueStateId);
        expect(checkMark.getAttribute(kStyle)).toBe(null);
    });
}); /* when moving the mouse from a state to a check mark that redirects to the same state,
        calling updateAndGetCurrentBlueState() performs no operation on the check
        mark */

describe(`when moving the mouse from a state to a check mark that redirects to the same state,
            calling updateAndGetCurrentBlueState() performs no operation on the state`, () => {
    each(casesForMovingBetweenAStateAndACheckMarkThatRedirectsToTheSameState).it(
            `case for moving mouse from '%s' to '%s'`,
            (checkMarkId, mostRecentBlueStateId) => {
        const mostRecentBlueState = simulateMouseHoveringOverState(mostRecentBlueStateId);
        const mouseEvent = { target: document.getElementById(checkMarkId) };
        expect(mostRecentBlueState.getAttribute(kStyle)).toBe(kLightBlueFill);

        const updateResult = updateAndGetCurrentBlueState(mouseEvent, mostRecentBlueStateId);

        expect(updateResult).toBe(mostRecentBlueStateId);
        expect(mostRecentBlueState.getAttribute(kStyle)).toBe(kLightBlueFill);
    });
}); /* when moving the mouse from a state to a check mark that redirects to the same state,
        calling updateAndGetCurrentBlueState() performs no operation on the state */

const checkMarksBorderingTheViewBox = [
    kMichiganCheckMark,
    kMinnesotaCheckMark,
    kNewYorkCheckMark,
    kVermontCheckMark
];

describe(`when moving the mouse from a check mark to the view box, calling
            updateAndGetCurrentBlueState() performs no operation on the view box`, () => {
    each(checkMarksBorderingTheViewBox).it(
            `case for moving mouse from '%s' to the view box`,
            (checkMarkId) => {
        const mostRecentBlueStateId = getStateIdForMousedOverPolygon(checkMarkId);
        simulateMouseHoveringOverState(mostRecentBlueStateId);
        const viewBox = document.getElementById(kViewBox);
        const mouseEvent = { target: viewBox };
        expect(viewBox.getAttribute(kStyle)).toBe(null);

        const updateResult = updateAndGetCurrentBlueState(mouseEvent, mostRecentBlueStateId);

        expect(updateResult).toBe(null);
        expect(viewBox.getAttribute(kStyle)).toBe(null);
    });
}); /* when moving the mouse from a check mark to the view box, calling
        updateAndGetCurrentBlueState() performs no operation on the view box */

describe(`when moving the mouse from a check mark to the view box, calling
            updateAndGetCurrentBlueState() resets the corresponding state from light blue to light
            green`, () => {
    each(checkMarksBorderingTheViewBox).it(
            `case for moving mouse from '%s' to the view box`,
            (checkMarkId) => {
        const mostRecentBlueStateId = getStateIdForMousedOverPolygon(checkMarkId);
        const mostRecentBlueState = simulateMouseHoveringOverState(mostRecentBlueStateId);
        const mouseEvent = { target: document.getElementById(kViewBox) };
        expect(mostRecentBlueState.getAttribute(kStyle)).toBe(kLightBlueFill);

        const updateResult = updateAndGetCurrentBlueState(mouseEvent, mostRecentBlueStateId);

        expect(updateResult).toBe(null);
        expect(mostRecentBlueState.getAttribute(kStyle)).toBe(kLightGreenFill);
    });
}); /* when moving the mouse from a check mark to the view box, calling
        updateAndGetCurrentBlueState() resets the corresponding state from light blue to light
        green */

describe(`when moving the mouse from the view box to a check mark, calling
            updateAndGetCurrentBlueState() performs no operation on the view box`, () => {
    each(checkMarksBorderingTheViewBox).it(
            `case for moving mouse from the view box to '%s'`,
            (checkMarkId) => {
        const mouseEvent = { target: document.getElementById(checkMarkId) };
        const mostRecentBlueStateId = kUnpopulated;
        const viewBox = document.getElementById(kViewBox);
        expect(viewBox.getAttribute(kStyle)).toBe(null);

        const updateResult = updateAndGetCurrentBlueState(mouseEvent, mostRecentBlueStateId);

        const correspondingStateId = getStateIdForMousedOverPolygon(checkMarkId);
        expect(updateResult).toBe(correspondingStateId);
        expect(viewBox.getAttribute(kStyle)).toBe(null);
    });
}); /* when moving the mouse from the view box to a check mark, calling
        updateAndGetCurrentBlueState() performs no operation on the view box */

describe(`when moving the mouse from the view box to a check mark, calling
            updateAndGetCurrentBlueState() fills the state corresponding to the check mark light
            blue`, () => {
    each(checkMarksBorderingTheViewBox).it(
            `case for moving mouse from the view box to '%s'`,
            (checkMarkId) => {
        const mouseEvent = { target: document.getElementById(checkMarkId) };
        const mostRecentBlueStateId = kUnpopulated;
        const correspondingStateId = getStateIdForMousedOverPolygon(checkMarkId);
        const correspondingState = document.getElementById(correspondingStateId);
        expect(correspondingState.getAttribute(kStyle)).toBe(null);

        const updateResult = updateAndGetCurrentBlueState(mouseEvent, mostRecentBlueStateId);

        expect(updateResult).toBe(correspondingStateId);
        expect(correspondingState.getAttribute(kStyle)).toBe(kLightBlueFill);
    });
}); /* when moving the mouse from the view box to a check mark, calling
        updateAndGetCurrentBlueState() fills the state corresponding to the check mark light
        blue */
