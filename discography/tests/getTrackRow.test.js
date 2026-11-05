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

const testTrackNumber = "1"; // TODO -- TEST
const testTrackSuffix = "TestTrackSuffix"; // TODO -- TEST
const testTrackTime = "3:30"; // TODO -- TEST
const testTrackTitle = "Test Track"; // TODO -- TEST

// Test Function includes:
const testFunctions = require('./resources/testFunctions'); // TODO -- TEST
const getDivOpeningTag = testFunctions.getDivOpeningTag; // TODO -- TEST

test(`given a valid track suffix, track number, track title, and track duration, getTrackRow()
        returns a div of class trackRow`, () => {
    const trackRow = getTrackRow(testTrackSuffix, testTrackNumber, testTrackTitle, testTrackTime); // TODO -- TEST

    const trimmedTrackRow = trackRow.trim(); // TODO -- TEST
    const divOpeningTagTrackRow = getDivOpeningTag(kStyleSheetClassNameTrackRow); // TODO -- TEST
    expect(trimmedTrackRow.startsWith(divOpeningTagTrackRow)).toBe(true); // TODO -- TEST
    expect(trimmedTrackRow.endsWith(kDivClosingTag)).toBe(true); // TODO -- TEST
}); /* given a valid track suffix, track number, track title, and track duration, getTrackRow()
        returns a div of class trackRow */

test(`given a valid track suffix, track number, track title, and track duration, getTrackRow()
        returns a string containing a div of class trackNumber, a div of class trackTitle, and a
        div of class trackDuration`, () => {
    const trackRow = getTrackRow(testTrackSuffix, testTrackNumber, testTrackTitle, testTrackTime); // TODO -- TEST

    const trimmedTrackRow = trackRow.trim(); // TODO -- TEST
    const divOpeningTagTrackNumber = getDivOpeningTag(kStyleSheetClassNameTrackNumber); // TODO -- TEST
    const divOpeningTagTrackTitle = getDivOpeningTag(kStyleSheetClassNameTrackTitle); // TODO -- TEST
    const divOpeningTagTrackDuration = getDivOpeningTag(kStyleSheetClassNameTrackDuration); // TODO -- TEST
    expect(trimmedTrackRow).toContain(divOpeningTagTrackNumber); // TODO -- TEST
    expect(trimmedTrackRow).toContain(divOpeningTagTrackTitle); // TODO -- TEST
    expect(trimmedTrackRow).toContain(divOpeningTagTrackDuration); // TODO -- TEST
}); /* given a valid track suffix, track number, track title, and track duration, getTrackRow()
        returns a string containing a div of class trackNumber, a div of class trackTitle, and a
        div of class trackDuration */
