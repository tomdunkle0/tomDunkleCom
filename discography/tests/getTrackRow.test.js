// Constant includes:
const constants = require('./environment/constants');
const kPrefixPlayArrow                  = constants.kPrefixPlayArrow;
const kPrefixTrackDuration              = constants.kPrefixTrackDuration;
const kPrefixTrackNumber                = constants.kPrefixTrackNumber;
const kPrefixTrackTitle                 = constants.kPrefixTrackTitle;
const kStyleSheetClassNameTrackDuration = constants.kStyleSheetClassNameTrackDuration;
const kStyleSheetClassNameTrackNumber   = constants.kStyleSheetClassNameTrackNumber;
const kStyleSheetClassNameTrackRow      = constants.kStyleSheetClassNameTrackRow;
const kStyleSheetClassNameTrackTitle    = constants.kStyleSheetClassNameTrackTitle;

// Function includes:
const audioManager = require('./environment/audioManager');
const getDiscographyContent = require('./environment/getDiscographyContent');
const getTrackRow = getDiscographyContent.getTrackRow;

// Test Constant includes:
const testConstants = require('./resources/testConstants');
const kDivClosingTag = testConstants.kDivClosingTag;

// Micellaneous constants:
const kTestDuration = "3:30";
const kTestNumber = "1";
const kTestSuffix = "TestTrackSuffix";
const kTestTitle = "Test Track";

// Test Function includes:
const testFunctions = require('./resources/testFunctions');
const getDivOpeningTag = testFunctions.getDivOpeningTag;

test(`given a valid track suffix, track number, track title, and track duration, getTrackRow()
        returns a div of class trackRow`, () => {
    const trackRow = getTrackRow(kTestSuffix, kTestNumber, kTestTitle, kTestDuration);

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
    const trackRow = getTrackRow(kTestSuffix, kTestNumber, kTestTitle, kTestDuration);

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
    const trackRow = getTrackRow(kTestSuffix, kTestNumber, kTestTitle, kTestDuration);

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
    const trackRow = getTrackRow(kTestSuffix, kTestNumber, kTestTitle, kTestDuration);

    const listCounterSuffix = ".)";
    const expectedListCounter = kTestNumber + listCounterSuffix;
    const openingParenthesis = "(";
    const closingParenthesis = ")";
    const expectedDurationText = openingParenthesis + kTestDuration + closingParenthesis;
    expect(trackRow).toContain(expectedListCounter);
    expect(trackRow).toContain(kTestTitle);
    expect(trackRow).toContain(expectedDurationText);
}); /* given a valid track suffix, track number, track title, and track duration, getTrackRow()
        returns a string containing lines of text representing the track number, title, and
        duration that will appear on the user interface */

function getIdAssignmentForTestTrackChild(idPrefix)
{
    const idAssignmentOpening = "id=\"";
    const idAssignmentClosing = "\"";
    return idAssignmentOpening + idPrefix + kTestSuffix + idAssignmentClosing;
} // getIdAssignmentForTestTrackChild()
