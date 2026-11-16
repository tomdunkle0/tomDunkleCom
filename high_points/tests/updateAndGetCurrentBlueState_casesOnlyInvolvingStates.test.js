// Jest includes:
const each = require('jest-each').default;

// Constant includes:
const constants          = require('./environment/constants');
const kAlabama           = constants.kAlabama;
const kAlaskaMainland    = constants.kAlaskaMainland;
const kArizona           = constants.kArizona;
const kArkansas          = constants.kArkansas;
const kCalifornia        = constants.kCalifornia;
const kColorado          = constants.kColorado;
const kConnecticut       = constants.kConnecticut;
const kDelaware          = constants.kDelaware;
const kFlorida           = constants.kFlorida;
const kGeorgia           = constants.kGeorgia;
const kHawaii            = constants.kHawaii;
const kIdaho             = constants.kIdaho;
const kIllinois          = constants.kIllinois;
const kIndiana           = constants.kIndiana;
const kIowa              = constants.kIowa;
const kKansas            = constants.kKansas;
const kKauai             = constants.kKauai;
const kKentucky          = constants.kKentucky;
const kKodiakIsland      = constants.kKodiakIsland;
const kLightBlueFill     = constants.kLightBlueFill;
const kLightGreenFill    = constants.kLightGreenFill;
const kLightRedFill      = constants.kLightRedFill;
const kLouisiana         = constants.kLouisiana;
const kMaine             = constants.kMaine;
const kMaryland          = constants.kMaryland;
const kMassachusetts     = constants.kMassachusetts;
const kMaui              = constants.kMaui;
const kMichiganMainland  = constants.kMichiganMainland;
const kMichiganPeninsula = constants.kMichiganPeninsula;
const kMinnesota         = constants.kMinnesota;
const kMississippi       = constants.kMississippi;
const kMissouri          = constants.kMissouri;
const kMontana           = constants.kMontana;
const kNebraska          = constants.kNebraska;
const kNevada            = constants.kNevada;
const kNewJersey         = constants.kNewJersey;
const kNewHampshire      = constants.kNewHampshire;
const kNewMexico         = constants.kNewMexico;
const kNewYork           = constants.kNewYork;
const kNorthCarolina     = constants.kNorthCarolina;
const kNorthDakota       = constants.kNorthDakota;
const kOahu              = constants.kOahu;
const kOhio              = constants.kOhio;
const kOklahoma          = constants.kOklahoma;
const kOregon            = constants.kOregon;
const kPennsylvania      = constants.kPennsylvania;
const kRhodeIsland       = constants.kRhodeIsland;
const kSouthCarolina     = constants.kSouthCarolina;
const kSouthDakota       = constants.kSouthDakota;
const kStyle             = constants.kStyle;
const kTennessee         = constants.kTennessee;
const kTexas             = constants.kTexas;
const kUnpopulated       = constants.kUnpopulated;
const kUtah              = constants.kUtah;
const kVermont           = constants.kVermont;
const kViewBox           = constants.kViewBox;
const kVirginia          = constants.kVirginia;
const kWestVirginia      = constants.kWestVirginia;
const kWisconsin         = constants.kWisconsin;

// Map Function includes:
const mapFunctions = require('./environment/mapFunctions');
const onPageLoad                   = mapFunctions.onPageLoad;
const updateAndGetCurrentBlueState = mapFunctions.updateAndGetCurrentBlueState;

// Test Constant includes:
const testConstants = require('./resources/testConstants');
const kWashington = testConstants.kWashington;
const kWyoming    = testConstants.kWyoming;

// Test Function includes:
const testFunctions = require('./resources/testFunctions');
const simulateMouseHoveringOverState = testFunctions.simulateMouseHoveringOverState;

beforeEach(() => {
    onPageLoad();
}); // beforeEach()

const casesForMovingFromANormallyGreenStateToAnotherState = [
    [kArizona,           kCalifornia       ],
    [kNevada,            kCalifornia       ],
    [kCalifornia,        kOregon           ],
    [kIdaho,             kOregon           ],
    [kNevada,            kOregon           ],
    [kIdaho,             kWashington       ],
    [kArizona,           kNevada           ],
    [kCalifornia,        kNevada           ],
    [kUtah,              kNevada           ],
    [kIdaho,             kNevada           ],
    [kCalifornia,        kArizona          ],
    [kColorado,          kArizona          ],
    [kNevada,            kArizona          ],
    [kNewMexico,         kArizona          ],
    [kUtah,              kArizona          ],
    [kArizona,           kUtah             ],
    [kColorado,          kUtah             ],
    [kIdaho,             kUtah             ],
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
    [kIdaho,             kWyoming          ],
    [kNebraska,          kWyoming          ],
    [kSouthDakota,       kWyoming          ],
    [kUtah,              kWyoming          ],
    [kIdaho,             kMontana          ],
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
    [kFlorida,           kAlabama          ],
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
    [kFlorida,           kGeorgia          ],
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
    [kWashington, kOregon     ],
    [kOregon,     kWashington ],
    [kOregon,     kNevada     ],
    [kWyoming,    kUtah       ],
    [kOregon,     kIdaho      ],
    [kMontana,    kIdaho      ],
    [kWashington, kIdaho      ],
    [kWyoming,    kIdaho      ],
    [kWyoming,    kColorado   ],
    [kMontana,    kWyoming    ],
    [kWyoming,    kMontana    ],
    [kWyoming,    kNebraska   ],
    [kMontana,    kSouthDakota],
    [kWyoming,    kSouthDakota],
    [kMontana,    kNorthDakota]
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
    kIdaho,
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
    kFlorida,
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
    kHawaii,
    kMaui,
    kOahu,
    kKauai,
    kMontana
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
