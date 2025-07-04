// Constant includes:
const constants = require('./environment/constants');
const kPlayer1320 = constants.kPlayer1320;
const kStyle      = constants.kStyle;

// Test Constant includes:
const testConstants = require('./resources/testConstants');
const kEventTypePlay                    = testConstants.kEventTypePlay;
const kTestTrackId                      = testConstants.kTestTrackId;
const kTestTrackPlayArrowId             = testConstants.kTestTrackPlayArrowId;
const kVisibilityHiddenWithoutSemicolon = testConstants.kVisibilityHiddenWithoutSemicolon;
const kVisibilityVisible                = testConstants.kVisibilityVisible;

// Function includes:
const audioManager = require('./environment/audioManager');
const addPlayEventListenerForEachAudioPlayer = audioManager.addPlayEventListenerForEachAudioPlayer;
const stopAndResetTrack                      = audioManager.stopAndResetTrack;
const getDiscographyContent = require('./environment/getDiscographyContent');

// Test Function includes:
const testFunctions = require('./resources/testFunctions');
const dispatchEventToAudioPlayer = testFunctions.dispatchEventToAudioPlayer;

test(`given the id of a track that is currently playing, stopAndResetTrack() sets the visibility of
        the associated play arrow to invisible`, () => {
    document.body.innerHTML = getDiscographyContent();
    addPlayEventListenerForEachAudioPlayer();
    dispatchEventToAudioPlayer(kPlayer1320, kEventTypePlay);
    const testTrackPlayArrow = document.getElementById(kTestTrackPlayArrowId);
    expect(testTrackPlayArrow.getAttribute(kStyle)).toBe(kVisibilityVisible);

    stopAndResetTrack(kTestTrackId);

    expect(testTrackPlayArrow.getAttribute(kStyle)).toBe(kVisibilityHiddenWithoutSemicolon);
}); /* given the id of a track that is currently playing, stopAndResetTrack() sets the visibility
        of the associated play arrow to invisible */
