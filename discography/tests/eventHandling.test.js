// Constant includes:
const constants = require('./environment/constants');
const kEventTypeTrackEnded = constants.kEventTypeTrackEnded;
const kPlayer1320          = constants.kPlayer1320;
const kStyle               = constants.kStyle;

// Test Constant includes:
const testConstants = require('./resources/testConstants');
const kEventTypePlay                    = testConstants.kEventTypePlay;
const kTestTrackPlayArrowId             = testConstants.kTestTrackPlayArrowId;
const kVisibilityHiddenWithoutSemicolon = testConstants.kVisibilityHiddenWithoutSemicolon;
const kVisibilityVisible                = testConstants.kVisibilityVisible;

// Function includes:
const audioManager = require('./environment/audioManager');
const addPlayEventListenerForEachAudioPlayer = audioManager.addPlayEventListenerForEachAudioPlayer;
const isUnpopulated                          = audioManager.isUnpopulated;
const getDiscographyContent = require('./environment/getDiscographyContent');

// Test Function includes:
const testFunctions = require('./resources/testFunctions');
const dispatchEventToAudioPlayer = testFunctions.dispatchEventToAudioPlayer;

beforeAll(() => {
    // The discography's production code only uses kEventTypeTrackEnded when adding or removing
    //  event listeners. If kEventTypeTrackEnded is undefined in the current context, then tests
    //  can still pass because both production and test code are setting up event listeners
    //  that listen for an undefined event type rather than the expected "ended" type.
    expect(isUnpopulated(kEventTypeTrackEnded)).toBe(false);
}); // beforeAll()

beforeEach(() => {
    document.body.innerHTML = getDiscographyContent();
    addPlayEventListenerForEachAudioPlayer();
    dispatchEventToAudioPlayer(kPlayer1320, kEventTypePlay);
}); // beforeEach()

test(`given one track playing, passing a play event to the corresponding audio player does not
        cause a change in the visibility of the play arrow of the first track`, () => {
    const testTrackPlayArrow = document.getElementById(kTestTrackPlayArrowId);
    expect(testTrackPlayArrow.getAttribute(kStyle)).toBe(kVisibilityVisible);

    dispatchEventToAudioPlayer(kPlayer1320, kEventTypePlay);

    expect(testTrackPlayArrow.getAttribute(kStyle)).toBe(kVisibilityVisible);
}); /* given one track playing, passing a play event to the corresponding audio player does not
        cause a change in the visibility of the play arrow of the first track */

test(`given one track playing, passing an ended event to the corresponding audio player causes the
        play arrow of the first track to become invisible`, () => {
    const testTrackPlayArrow = document.getElementById(kTestTrackPlayArrowId);
    expect(testTrackPlayArrow.getAttribute(kStyle)).toBe(kVisibilityVisible);

    dispatchEventToAudioPlayer(kPlayer1320, kEventTypeTrackEnded);

    expect(testTrackPlayArrow.getAttribute(kStyle)).toBe(kVisibilityHiddenWithoutSemicolon);
}); /* given one track playing, passing an ended event to the corresponding audio player causes the
        play arrow of the first track to become invisible */
