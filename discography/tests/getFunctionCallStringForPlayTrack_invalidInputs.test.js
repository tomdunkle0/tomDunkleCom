// Constant includes:
const constants = require('./environment/constants');
const kUnpopulated = constants.kUnpopulated;

// Function includes:
const audioManager = require('./environment/audioManager');
const getFunctionCallStringForPlayTrack = audioManager.getFunctionCallStringForPlayTrack;

test(`given a null element, getFunctionCallStringForPlayTrack() returns null`, () => {
    expect(getFunctionCallStringForPlayTrack(null)).toBe(null);
}); /* given a null element, getFunctionCallStringForPlayTrack() returns null */

test(`given an undefined element, getFunctionCallStringForPlayTrack() returns null`, () => {
    expect(getFunctionCallStringForPlayTrack(undefined)).toBe(null);
}); /* given an undefined element, getFunctionCallStringForPlayTrack() returns null */

test(`given an unpopulated element, getFunctionCallStringForPlayTrack() returns null`, () => {
    expect(getFunctionCallStringForPlayTrack(kUnpopulated)).toBe(null);
}); /* given an unpopulated element, getFunctionCallStringForPlayTrack() returns null */
