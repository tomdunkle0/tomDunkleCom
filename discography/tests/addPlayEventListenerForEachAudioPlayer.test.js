// Jest includes:
const each = require('jest-each').default;

// Constant includes:
const constants = require('./environment/constants');
const kPlayer1320                = constants.kPlayer1320;
const kPlayerCorneliusSquatgood  = constants.kPlayerCorneliusSquatgood;
const kPlayerDumbFun             = constants.kPlayerDumbFun;
const kPlayerFairUseOfTheCochlea = constants.kPlayerFairUseOfTheCochlea;
const kPlayerMtBanger            = constants.kPlayerMtBanger;
const kPlayerPsynkhole           = constants.kPlayerPsynkhole;
const kPlayerSkunkBass           = constants.kPlayerSkunkBass;
const kPlayerWereAllPrawns       = constants.kPlayerWereAllPrawns;
const kPrefixPlayArrow           = constants.kPrefixPlayArrow;
const kStyle                     = constants.kStyle;

// Test Constant includes:
const testConstants = require('./resources/testConstants');
const kEventTypePlay                    = testConstants.kEventTypePlay;
const kTestTrackPlayArrowId             = testConstants.kTestTrackPlayArrowId;
const kVisibilityHiddenWithSemicolon    = testConstants.kVisibilityHiddenWithSemicolon;
const kVisibilityHiddenWithoutSemicolon = testConstants.kVisibilityHiddenWithoutSemicolon;
const kVisibilityVisible                = testConstants.kVisibilityVisible;

// Function includes:
const audioManager = require('./environment/audioManager');
const addPlayEventListenerForEachAudioPlayer = audioManager.addPlayEventListenerForEachAudioPlayer;
const getDiscographyContent = require('./environment/getDiscographyContent');

// Test Function includes:
const testFunctions = require('./resources/testFunctions');
const dispatchEventToAudioPlayer = testFunctions.dispatchEventToAudioPlayer;

const firstTrackPlayArrowAndAudioPlayerIdCombinations = [
    [kPrefixPlayArrow + "RunThatTurkey",            kPlayer1320               ],
    [kPrefixPlayArrow + "SongAboutYou",             kPlayerPsynkhole          ],
    [kPrefixPlayArrow + "Minimize",                 kPlayerSkunkBass          ],
    [kPrefixPlayArrow + "YouWillBeMyJalapenoDream", kPlayerWereAllPrawns      ],
    [kPrefixPlayArrow + "HowTheTimesHaveChanged",   kPlayerDumbFun            ],
    [kPrefixPlayArrow + "0utr0",                    kPlayerCorneliusSquatgood ],
    [kPrefixPlayArrow + "Thanks",                   kPlayerFairUseOfTheCochlea],
    [kPrefixPlayArrow + "EveryMuscleIsMoving",      kPlayerMtBanger           ]
];

beforeEach(() => {
    document.body.innerHTML = getDiscographyContent();
}); // beforeEach()

describe(`after calling addPlayEventListenerForEachAudioPlayer(), dispatching a play event to an
            audio player causes the play arrow of the first track to become visible`, () => {
    each(firstTrackPlayArrowAndAudioPlayerIdCombinations).it(
            "'%s' becomes visible when a play event is dispatched to '%s'",
            (playArrowId, audioPlayerId) => {
        const playArrow = document.getElementById(playArrowId);
        expect(playArrow.getAttribute(kStyle)).toBe(kVisibilityHiddenWithSemicolon);

        addPlayEventListenerForEachAudioPlayer();

        dispatchEventToAudioPlayer(audioPlayerId, kEventTypePlay);
        expect(playArrow.getAttribute(kStyle)).toBe(kVisibilityVisible);
    });
}); /* after calling addPlayEventListenerForEachAudioPlayer(), dispatching a play event to an audio
        player causes the play arrow of the first track to become visible */

test(`after calling addPlayEventListenerForEachAudioPlayer() and dispatching a play event to an
        audio player, dispatching another event to another audio player hides the play arrow of the
        first track of the first player`, () => {
    const playArrow = document.getElementById(kTestTrackPlayArrowId);
    expect(playArrow.getAttribute(kStyle)).toBe(kVisibilityHiddenWithSemicolon);

    addPlayEventListenerForEachAudioPlayer();

    dispatchEventToAudioPlayer(kPlayer1320, kEventTypePlay); // First album; contains test track.
    expect(playArrow.getAttribute(kStyle)).toBe(kVisibilityVisible);
    dispatchEventToAudioPlayer(kPlayerPsynkhole, kEventTypePlay); // Second album.
    expect(playArrow.getAttribute(kStyle)).toBe(kVisibilityHiddenWithoutSemicolon);
}); /* after calling addPlayEventListenerForEachAudioPlayer() and dispatching a play event to an
        audio player, dispatching another event to another audio player hides the play arrow of the
        first track of the first player */
