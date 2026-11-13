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
const getDiscographyContent = require('./environment/getDiscographyContent');
const getTrackRow = getDiscographyContent.getTrackRow;

// Test Constant includes:
const testConstants = require('./resources/testConstants');
const kClosingParenthesis = testConstants.kClosingParenthesis;
const kListCounterSuffix  = testConstants.kListCounterSuffix;
const kOpeningParenthesis = testConstants.kOpeningParenthesis;

// Micellaneous constants:
const kTestDuration = "3:30";
const kTestNumber   = "1";
const kTestSuffix   = "TestTrackSuffix";
const kTestTitle    = "Test Track";

// Test Function includes:
const testFunctions = require('./resources/testFunctions');
const getDivOpeningTag = testFunctions.getDivOpeningTag;

test(`given a valid track suffix, track number, track title, and track duration, getTrackRow()
        returns a div of class trackRow`, () => {
    const trackRow = getTrackRow(kTestSuffix, kTestNumber, kTestTitle, kTestDuration);

    const trimmedTrackRow = trackRow.trim();
    const classAssignment = "<div class=\"";
    const termination = "\">";
    const divOpeningTagTrackRow = classAssignment + kStyleSheetClassNameTrackRow + termination;
    const trimmedTrackRowStartsWithOpeningTag = trimmedTrackRow.startsWith(divOpeningTagTrackRow);
    const divClosingTag = "</div>";
    const trimmedTrackRowEndsWithClosingTag = trimmedTrackRow.endsWith(divClosingTag);
    expect(trimmedTrackRowStartsWithOpeningTag).toBe(true);
    expect(trimmedTrackRowEndsWithClosingTag).toBe(true);
}); /* given a valid track suffix, track number, track title, and track duration, getTrackRow()
        returns a div of class trackRow */

test(`given a valid track suffix, track number, track title, and track duration, getTrackRow()
        returns a string containing a div of class trackNumber, a div of class trackTitle, and a
        div of class trackDuration`, () => {
    const trackRow = getTrackRow(kTestSuffix, kTestNumber, kTestTitle, kTestDuration);

    expect(trackRow).toContain(kStyleSheetClassNameTrackNumber);
    expect(trackRow).toContain(kStyleSheetClassNameTrackTitle);
    expect(trackRow).toContain(kStyleSheetClassNameTrackDuration);
}); /* given a valid track suffix, track number, track title, and track duration, getTrackRow()
        returns a string containing a div of class trackNumber, a div of class trackTitle, and a
        div of class trackDuration */

test(`given a valid track suffix, track number, track title, and track duration, getTrackRow()
        returns a string containing id assignments for the play arrow, track number, track title,
        and track duration`, () => {
    const trackRow = getTrackRow(kTestSuffix, kTestNumber, kTestTitle, kTestDuration);

    const playArrowId = kPrefixPlayArrow + kTestSuffix;
    const trackNumberId = kPrefixTrackNumber + kTestSuffix;
    const trackTitleId = kPrefixTrackTitle + kTestSuffix;
    const trackDurationId = kPrefixTrackDuration + kTestSuffix;
    expect(trackRow).toContain(playArrowId);
    expect(trackRow).toContain(trackNumberId);
    expect(trackRow).toContain(trackTitleId);
    expect(trackRow).toContain(trackDurationId);
}); /* given a valid track suffix, track number, track title, and track duration, getTrackRow()
        returns a string containing id assignments for the play arrow, track number, track title,
        and track duration */

test(`given a valid track suffix, track number, track title, and track duration, getTrackRow()
        returns a string containing lines of text representing the track number, title, and
        duration that will appear on the user interface`, () => {
    const trackRow = getTrackRow(kTestSuffix, kTestNumber, kTestTitle, kTestDuration);

    const expectedListCounter = kTestNumber + kListCounterSuffix;
    const expectedDurationText = kOpeningParenthesis + kTestDuration + kClosingParenthesis;
    expect(trackRow).toContain(expectedListCounter);
    expect(trackRow).toContain(kTestTitle);
    expect(trackRow).toContain(expectedDurationText);
}); /* given a valid track suffix, track number, track title, and track duration, getTrackRow()
        returns a string containing lines of text representing the track number, title, and
        duration that will appear on the user interface */
