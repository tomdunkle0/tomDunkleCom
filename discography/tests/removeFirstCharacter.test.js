// Constant includes:
const constants = require('./environment/constants');
const kSecondCharIndex = constants.kSecondCharIndex;
const kUnpopulated     = constants.kUnpopulated;

// Function includes:
const audioManager = require('./environment/audioManager');
const removeFirstCharacter = audioManager.removeFirstCharacter;

test(`given a multiple character string, removeFirstCharacter() returns a substring without the
        first character`, () => {
    const multipleCharacterString = "arbitrary";
    const expectedResult = multipleCharacterString.substring(kSecondCharIndex);

    expect(removeFirstCharacter(multipleCharacterString)).toBe(expectedResult);
}); /* given a multiple character string, removeFirstCharacter() returns a substring without the
        first character */

test(`given a null string, removeFirstCharacter() returns an unpopulated string`, () => {
    expect(removeFirstCharacter(null)).toBe(kUnpopulated);
}); /* given a null string, removeFirstCharacter() returns an unpopulated string */

test(`given a one character string, removeFirstCharacter() returns an unpopulated string`, () => {
    const oneCharacterString = "a";

    expect(removeFirstCharacter(oneCharacterString)).toBe(kUnpopulated);
}); /* given a one character string, removeFirstCharacter() returns an unpopulated string */

test(`given an undefined string, removeFirstCharacter() returns an unpopulated string`, () => {
    expect(removeFirstCharacter(undefined)).toBe(kUnpopulated);
}); /* given an undefined string, removeFirstCharacter() returns an unpopulated string */

test(`given an unpopulated string, removeFirstCharacter() returns an unpopulated string`, () => {
    expect(removeFirstCharacter(kUnpopulated)).toBe(kUnpopulated);
}); /* given an unpopulated string, removeFirstCharacter() returns an unpopulated string */
