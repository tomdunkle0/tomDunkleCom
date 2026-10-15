// Jest includes:
const each = require('jest-each').default;

// Constant includes:
const constants               = require('./environment/constants');
const kAlabama                = constants.kAlabama;
const kCalifornia             = constants.kCalifornia;
const kColorado               = constants.kColorado;
const kConnecticutCheckMark   = constants.kConnecticutCheckMark;
const kDelawareCheckMark      = constants.kDelawareCheckMark;
const kFloridaCheckBox        = constants.kFloridaCheckBox;
const kFloridaCheckMark       = constants.kFloridaCheckMark;
const kGeorgiaCheckMark       = constants.kGeorgiaCheckMark;
const kIllinoisCheckMark      = constants.kIllinoisCheckMark;
const kIowaCheckBox           = constants.kIowaCheckBox;
const kIowaCheckMark          = constants.kIowaCheckMark;
const kLightBlueFill          = constants.kLightBlueFill;
const kLightGreenFill         = constants.kLightGreenFill;
const kLightRedFill           = constants.kLightRedFill;
const kMaryland               = constants.kMaryland;
const kMarylandCheckMark      = constants.kMarylandCheckMark;
const kMassachusetts          = constants.kMassachusetts;
const kMassachusettsCheckMark = constants.kMassachusettsCheckMark;
const kMichiganCheckMark      = constants.kMichiganCheckMark;
const kMinnesota              = constants.kMinnesota;
const kMinnesotaCheckMark     = constants.kMinnesotaCheckMark;
const kMontanaCheckBox        = constants.kMontanaCheckBox;
const kNevadaCheckBox         = constants.kNevadaCheckBox;
const kNevadaCheckMark        = constants.kNevadaCheckMark;
const kNewJerseyCheckMark     = constants.kNewJerseyCheckMark;
const kNewMexico              = constants.kNewMexico;
const kNewYork                = constants.kNewYork;
const kNewYorkCheckMark       = constants.kNewYorkCheckMark;
const kNorthCarolina          = constants.kNorthCarolina;
const kNorthCarolinaCheckBox  = constants.kNorthCarolinaCheckBox;
const kNorthCarolinaCheckMark = constants.kNorthCarolinaCheckMark;
const kOklahomaCheckMark      = constants.kOklahomaCheckMark;
const kOregonCheckBox         = constants.kOregonCheckBox;
const kPennsylvania           = constants.kPennsylvania;
const kPennsylvaniaCheckMark  = constants.kPennsylvaniaCheckMark;
const kSouthCarolinaCheckMark = constants.kSouthCarolinaCheckMark;
const kStyle                  = constants.kStyle;
const kTennessee              = constants.kTennessee;
const kTennesseeCheckBox      = constants.kTennesseeCheckBox;
const kTennesseeCheckMark     = constants.kTennesseeCheckMark;
const kTexasCheckMark         = constants.kTexasCheckMark;
const kUnpopulated            = constants.kUnpopulated;
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

// Map Function includes:
const mapFunctions = require('./environment/mapFunctions');
const getStateIdForMousedOverPolygon = mapFunctions.getStateIdForMousedOverPolygon;
const onPageLoad                   = mapFunctions.onPageLoad;
const updateAndGetCurrentBlueState = mapFunctions.updateAndGetCurrentBlueState;

// Test Constant includes:
const testConstants = require('./resources/testConstants');
const kWashington = testConstants.kWashington;
const kWyoming    = testConstants.kWyoming;

// Test Function includes:
const testFunctions = require('./resources/testFunctions');
const moveSliderToBeforeStateWasHighPointed = testFunctions.moveSliderToBeforeStateWasHighPointed;
const simulateMouseHoveringOverState        = testFunctions.simulateMouseHoveringOverState;

beforeEach(() => {
    onPageLoad();
}); // beforeEach()

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
    [kMontanaCheckBox, kWyoming   ]
];

const mostCasesForMovingBetweenACheckMarkAndAState = [
    [kNevadaCheckMark,        kCalifornia   ],
    [kUtahCheckMark,          kWyoming      ],
    [kIowaCheckMark,          kMinnesota    ],
    [kTennesseeCheckMark,     kNorthCarolina],
    [kTennesseeCheckMark,     kVirginia     ],
    [kFloridaCheckMark,       kAlabama      ],
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
    [kFloridaCheckBox,       kAlabama      ],
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
