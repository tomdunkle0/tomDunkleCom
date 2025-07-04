// Constant includes:
const constants = require('./environment/constants');
const kUnpopulated = constants.kUnpopulated;

// Function includes:
const audioManager = require('./environment/audioManager');
const isDivContainingTrackTextParagraph = audioManager.isDivContainingTrackTextParagraph;

test(`given a null element, isDivContainingTrackTextParagraph() returns false`, () => {
    expect(isDivContainingTrackTextParagraph(null)).toBe(false);
}); /* given a null element, isDivContainingTrackTextParagraph() returns false */

// TODO: Update isDivContainingTrackTextParagraph() to handle
//        undefined correctly, then add a test here.

test(`given an unpopulated element, isDivContainingTrackTextParagraph() returns false`, () => {
    expect(isDivContainingTrackTextParagraph(kUnpopulated)).toBe(false);
}); /* given an unpopulated element, isDivContainingTrackTextParagraph() returns false */
