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
const kClosingParenthesis = testConstants.kClosingParenthesis; // TODO -- TEST
const kDivClosingTag      = testConstants.kDivClosingTag;
const kListCounterSuffix  = testConstants.kListCounterSuffix; // TODO -- TEST
const kOpeningParenthesis = testConstants.kOpeningParenthesis; // TODO -- TEST

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

    expect(trackRow).toContain(kStyleSheetClassNameTrackNumber); // TODO -- TEST
    expect(trackRow).toContain(kStyleSheetClassNameTrackTitle); // TODO -- TEST
    expect(trackRow).toContain(kStyleSheetClassNameTrackDuration); // TODO -- TEST
}); /* given a valid track suffix, track number, track title, and track duration, getTrackRow()
        returns a string containing a div of class trackNumber, a div of class trackTitle, and a
        div of class trackDuration */

test(`given a valid track suffix, track number, track title, and track duration, getTrackRow()
        returns a string containing id assignments for the play arrow, track number, track title,
        and track duration`, () => {
    const trackRow = getTrackRow(kTestSuffix, kTestNumber, kTestTitle, kTestDuration);

    const playArrowId = kPrefixPlayArrow + kTestSuffix; // TODO -- TEST
    const trackNumberId = kPrefixTrackNumber + kTestSuffix; // TODO -- TEST
    const trackTitleId = kPrefixTrackTitle + kTestSuffix; // TODO -- TEST
    const trackDurationId = kPrefixTrackDuration + kTestSuffix; // TODO -- TEST
    expect(trackRow).toContain(playArrowId); // TODO -- TEST
    expect(trackRow).toContain(trackNumberId); // TODO -- TEST
    expect(trackRow).toContain(trackTitleId); // TODO -- TEST
    expect(trackRow).toContain(trackDurationId); // TODO -- TEST
}); /* given a valid track suffix, track number, track title, and track duration, getTrackRow()
        returns a string containing id assignments for the play arrow, track number, track title,
        and track duration */

test(`given a valid track suffix, track number, track title, and track duration, getTrackRow()
        returns a string containing lines of text representing the track number, title, and
        duration that will appear on the user interface`, () => {
    const trackRow = getTrackRow(kTestSuffix, kTestNumber, kTestTitle, kTestDuration);

    const expectedListCounter = kTestNumber + kListCounterSuffix; // TODO -- TEST
    const expectedDurationText = kOpeningParenthesis + kTestDuration + kClosingParenthesis; // TODO -- TEST
    expect(trackRow).toContain(expectedListCounter);
    expect(trackRow).toContain(kTestTitle);
    expect(trackRow).toContain(expectedDurationText);
}); /* given a valid track suffix, track number, track title, and track duration, getTrackRow()
        returns a string containing lines of text representing the track number, title, and
        duration that will appear on the user interface */
