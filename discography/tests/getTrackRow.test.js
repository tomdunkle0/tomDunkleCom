// Constant includes:
const constants = require('./environment/constants'); // TODO -- TEST
const kPrefixPlayArrow                  = constants.kPrefixPlayArrow; // TODO -- TEST
const kPrefixTrackDuration              = constants.kPrefixTrackDuration; // TODO -- TEST
const kPrefixTrackNumber                = constants.kPrefixTrackNumber; // TODO -- TEST
const kPrefixTrackTitle                 = constants.kPrefixTrackTitle; // TODO -- TEST
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

test(`given a valid track suffix, track number, track title, and track duration, getTrackRow()
        returns a string containing id assignments for the play arrow, track number, track title,
        and track duration`, () => {
    const trackRow = getTrackRow(testSuffix, testNumber, testTitle, testDuration);

    const idAssignmentPlayArrow = getIdAssignmentForTestTrackChild(kPrefixPlayArrow);
    const idAssignmentTrackNumber = getIdAssignmentForTestTrackChild(kPrefixTrackNumber);
    const idAssignmentTrackTitle = getIdAssignmentForTestTrackChild(kPrefixTrackTitle);
    const idAssignmentTrackDuration = getIdAssignmentForTestTrackChild(kPrefixTrackDuration);
    expect(trackRow).toContain(idAssignmentPlayArrow);
    expect(trackRow).toContain(idAssignmentTrackNumber);
    expect(trackRow).toContain(idAssignmentTrackTitle);
    expect(trackRow).toContain(idAssignmentTrackDuration);
}); /* given a valid track suffix, track number, track title, and track duration, getTrackRow()
        returns a string containing id assignments for the play arrow, track number, track title,
        and track duration */

test(`given a valid track suffix, track number, track title, and track duration, getTrackRow()
        returns a string containing lines of text representing the track number, title, and
        duration that will appear on the user interface`, () => {
    const trackRow = getTrackRow(testSuffix, testNumber, testTitle, testDuration);

    const listCounterSuffix = ".)";
    const expectedListCounter = testNumber + listCounterSuffix;
    const openingParenthesis = "(";
    const closingParenthesis = ")";
    const expectedDurationText = openingParenthesis + testDuration + closingParenthesis;
    expect(trackRow).toContain(expectedListCounter);
    expect(trackRow).toContain(testTitle);
    expect(trackRow).toContain(expectedDurationText);
}); /* given a valid track suffix, track number, track title, and track duration, getTrackRow()
        returns a string containing lines of text representing the track number, title, and
        duration that will appear on the user interface */

function getIdAssignmentForTestTrackChild(idPrefix)
{
    const idAssignmentOpening = "id=\"";
    const idAssignmentClosing = "\"";
    return idAssignmentOpening + idPrefix + testSuffix + idAssignmentClosing;
} // getIdAssignmentForTestTrackChild()
