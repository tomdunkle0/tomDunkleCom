// Constant includes:
const constants = require('./environment/constants');
const kUnpopulated = constants.kUnpopulated;

// Test Constant includes:
const testConstants = require('./resources/testConstants');
const kTestTrackId = testConstants.kTestTrackId;

// Function includes:
const audioManager = require('./environment/audioManager');
const isUnpopulated = audioManager.isUnpopulated;
const getDiscographyContent = require('./environment/getDiscographyContent');

test(`given a populated string, isUnpopulated() returns false`, () => {
    const populatedString = "populated with at least one character";

    expect(isUnpopulated(populatedString)).toBe(false);
}); /* given a populated string, isUnpopulated() returns false */

test(`given a null string, isUnpopulated() returns true`, () => {
    expect(isUnpopulated(null)).toBe(true);
}); /* given a null string, isUnpopulated() returns true */

test(`given a valid track element, isUnpopulated() returns false`, () => {
    document.body.innerHTML = getDiscographyContent();
    const validTrackElement = document.getElementById(kTestTrackId);

    expect(isUnpopulated(validTrackElement)).toBe(false);
}); /* given a valid track element, isUnpopulated() returns false */

test(`given an undefined string, isUnpopulated() returns true`, () => {
    expect(isUnpopulated(undefined)).toBe(true);
}); /* given an undefined string, isUnpopulated() returns true */

test(`given an unpopulated string, isUnpopulated() returns true`, () => {
    expect(isUnpopulated(kUnpopulated)).toBe(true);
}); /* given an unpopulated string, isUnpopulated() returns true */
