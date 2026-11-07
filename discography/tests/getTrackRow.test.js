// Constant includes:
const constants = require('./environment/constants'); // TODO -- TEST
const kStyleSheetClassNameTrackDuration = constants.kStyleSheetClassNameTrackDuration; // TODO -- TEST
const kStyleSheetClassNameTrackNumber   = constants.kStyleSheetClassNameTrackNumber; // TODO -- TEST
const kStyleSheetClassNameTrackRow      = constants.kStyleSheetClassNameTrackRow; // TODO -- TEST
const kStyleSheetClassNameTrackTitle    = constants.kStyleSheetClassNameTrackTitle; // TODO -- TEST

// Function includes:
const audioManager = require('./environment/audioManager');
const getDiscographyContent = require('./environment/getDiscographyContent');
const getTrackRow = getDiscographyContent.getTrackRow; // TODO -- TEST

// Test Constant includes:
const testConstants = require('./resources/testConstants'); // TODO -- TEST
const kDivClosingTag = testConstants.kDivClosingTag; // TODO -- TEST
const kDivOpeningTagTrackRow = testConstants.kDivOpeningTagTrackRow; // TODO -- TEST

const testDuration = "3:30"; // TODO -- TEST
const testNumber = "1"; // TODO -- TEST
const testSuffix = "TestTrackSuffix"; // TODO -- TEST
const testTitle = "Test Track"; // TODO -- TEST

// Test Function includes:
const testFunctions = require('./resources/testFunctions'); // TODO -- TEST
const getDivOpeningTag = testFunctions.getDivOpeningTag; // TODO -- TEST

// TODO: add tests confirming that the string returned from getTrackRow() contains each parameter.

test(`given a valid track suffix, track number, track title, and track duration, getTrackRow()
        returns a div of class trackRow`, () => {
    const trackRow = getTrackRow(testSuffix, testNumber, testTitle, testDuration);

    const trimmedTrackRow = trackRow.trim();
    const divOpeningTagTrackRow = getDivOpeningTag(kStyleSheetClassNameTrackRow);
    const trimmedTrackRowStartsWithOpeningTag = trimmedTrackRow.startsWith(divOpeningTagTrackRow);
    const trimmedTrackRowEndsWithClosingTag = trimmedTrackRow.endsWith(kDivClosingTag);
    expect(trimmedTrackRowStartsWithOpeningTag).toBe(true);
    expect(trimmedTrackRowEndsWithClosingTag).toBe(true);
}); /* given a valid track suffix, track number, track title, and track duration, getTrackRow()
        returns a div of class trackRow */

test(`given a valid track suffix, track number, track title, and track duration, getTrackRow()
        returns a string containing a div of class trackNumber, a div of class trackTitle, and a
        div of class trackDuration`, () => {
    const trackRow = getTrackRow(testSuffix, testNumber, testTitle, testDuration);

    const divOpeningTagTrackNumber = getDivOpeningTag(kStyleSheetClassNameTrackNumber);
    const divOpeningTagTrackTitle = getDivOpeningTag(kStyleSheetClassNameTrackTitle);
    const divOpeningTagTrackDuration = getDivOpeningTag(kStyleSheetClassNameTrackDuration);
    expect(trackRow).toContain(divOpeningTagTrackNumber);
    expect(trackRow).toContain(divOpeningTagTrackTitle);
    expect(trackRow).toContain(divOpeningTagTrackDuration);
}); /* given a valid track suffix, track number, track title, and track duration, getTrackRow()
        returns a string containing a div of class trackNumber, a div of class trackTitle, and a
        div of class trackDuration */
