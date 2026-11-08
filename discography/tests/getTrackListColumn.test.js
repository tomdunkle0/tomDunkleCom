// Constant includes:
const userInterfaceStrings = require('./environment/userInterfaceStrings'); // TODO -- TEST
const kPaddingZero = userInterfaceStrings.kPaddingZero; // TODO -- TEST

// Constant includes:
const constants = require('./environment/constants'); // TODO -- TEST
const kGreatestSingleDigitNumber        = constants.kGreatestSingleDigitNumber; // TODO -- TEST
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
const getTrackListColumn = getDiscographyContent.getTrackListColumn; // TODO -- TEST

// Test Constant includes:
const testConstants = require('./resources/testConstants'); // TODO -- TEST
const kClosingParenthesis = testConstants.kClosingParenthesis; // TODO -- TEST
const kDivClosingTag      = testConstants.kDivClosingTag; // TODO -- TEST
const kListCounterSuffix  = testConstants.kListCounterSuffix; // TODO -- TEST
const kOpeningParenthesis = testConstants.kOpeningParenthesis; // TODO -- TEST

// Test Function includes:
const testFunctions = require('./resources/testFunctions'); // TODO -- TEST
const getDivOpeningTag                 = testFunctions.getDivOpeningTag; // TODO -- TEST
const getIdAssignmentForTestTrackChild = testFunctions.getIdAssignmentForTestTrackChild; // TODO -- TEST

const testTrackSuffixes =
[
    "TestTrack1Suffix",
    "TestTrack2Suffix",
    "TestTrack3Suffix",
    "TestTrack4Suffix",
    "TestTrack5Suffix",
    "TestTrack6Suffix",
    "TestTrack7Suffix",
    "TestTrack8Suffix",
    "TestTrack9Suffix",
    "TestTrack10Suffix"
]; // TODO -- TEST

const testTrackDurations =
[
    "3:30",
    "4:15",
    "2:20",
    "0:57",
    "1:48",
    "4:47",
    "3:58",
    "3:03",
    "6:14",
    "1:55"
]; // TODO -- TEST

const testTrackTitles =
[
    "Test Track 1",
    "Test Track 2",
    "Test Track 3",
    "Test Track 4",
    "Test Track 5",
    "Test Track 6",
    "Test Track 7",
    "Test Track 8",
    "Test Track 9",
    "Test Track 10"
]; // TODO -- TEST

test(`given valid lists of track suffixes, track titles, and track durations, getTrackListColumn()
        returns a list of divs that are of type trackRow`, () => {
    const trackList = getTrackListColumn(testTrackSuffixes, testTrackTitles, testTrackDurations); // TODO -- TEST

    const trimmedTrackList = trackList.trim(); // TODO -- TEST
    const divOpeningTagTrackRow = getDivOpeningTag(kStyleSheetClassNameTrackRow); // TODO -- TEST
    expect(trimmedTrackList.startsWith(divOpeningTagTrackRow)).toBe(true); // TODO -- TEST
    const count = trimmedTrackList.split(divOpeningTagTrackRow).length - 1;
    const expectedNumberOfTrackRows = 10; // TODO -- TEST
    expect(count).toBe(expectedNumberOfTrackRows); // TODO -- TEST
    expect(trimmedTrackList.endsWith(kDivClosingTag)).toBe(true); // TODO -- TEST
}); /* given valid lists of track suffixes, track titles, and track durations, getTrackListColumn()
        returns a list of divs that are of type trackRow */

test(`given valid lists of track suffixes, track titles, and track durations, getTrackListColumn()
        returns a string containing a trackNumber div, a trackTitle div, and a trackDuration div
        for each item in the list`, () => {
    const trackList = getTrackListColumn(testTrackSuffixes, testTrackTitles, testTrackDurations); // TODO -- TEST

    const trimmedTrackList = trackList.trim(); // TODO -- TEST
    const expectedNumberOfTrackRows = 10; // TODO -- TEST
    const divOpeningTagTrackNumber = getDivOpeningTag(kStyleSheetClassNameTrackNumber); // TODO -- TEST
    const divOpeningTagTrackTitle = getDivOpeningTag(kStyleSheetClassNameTrackTitle); // TODO -- TEST
    const divOpeningTagTrackDuration = getDivOpeningTag(kStyleSheetClassNameTrackDuration); // TODO -- TEST
    const divOpeningTagTrackRow = getDivOpeningTag(kStyleSheetClassNameTrackRow); // TODO -- TEST
    const trackListArray = trimmedTrackList.split(divOpeningTagTrackRow); // TODO -- TEST
    trackListArray.shift(); // TODO -- TEST
    for (var i = 0; i < expectedNumberOfTrackRows; i++) // TODO -- TEST
    {
        expect(trackListArray[i]).toContain(divOpeningTagTrackNumber); // TODO -- TEST
        expect(trackListArray[i]).toContain(divOpeningTagTrackTitle); // TODO -- TEST
        expect(trackListArray[i]).toContain(divOpeningTagTrackDuration); // TODO -- TEST
    }
}); /* given valid lists of track suffixes, track titles, and track durations, getTrackListColumn()
        returns a string containing a trackNumber div, a trackTitle div, and a trackDuration div
        for each item in the list */

test(`given valid lists of track suffixes, track titles, and track durations, getTrackListColumn()
        returns a string containing id assignments for the play arrow, track number, track title,
        and track duration for each item in the list`, () => {
    const trackList = getTrackListColumn(testTrackSuffixes, testTrackTitles, testTrackDurations); // TODO -- TEST

    const trimmedTrackList = trackList.trim(); // TODO -- TEST
    const expectedNumberOfTrackRows = 10; // TODO -- TEST
    const divOpeningTagTrackRow = getDivOpeningTag(kStyleSheetClassNameTrackRow); // TODO -- TEST
    const trackListArray = trimmedTrackList.split(divOpeningTagTrackRow); // TODO -- TEST
    trackListArray.shift(); // TODO -- TEST
    for (var i = 0; i < expectedNumberOfTrackRows; i++) // TODO -- TEST
    {
        const idAssignmentPlayArrow = getIdAssignmentForTestTrackChild(kPrefixPlayArrow, testTrackSuffixes[i]); // TODO -- TEST
        const idAssignmentTrackNumber = getIdAssignmentForTestTrackChild(kPrefixTrackNumber, testTrackSuffixes[i]); // TODO -- TEST
        const idAssignmentTrackTitle = getIdAssignmentForTestTrackChild(kPrefixTrackTitle, testTrackSuffixes[i]); // TODO -- TEST
        const idAssignmentTrackDuration = getIdAssignmentForTestTrackChild(kPrefixTrackDuration, testTrackSuffixes[i]); // TODO -- TEST
        expect(trackListArray[i]).toContain(idAssignmentPlayArrow); // TODO -- TEST
        expect(trackListArray[i]).toContain(idAssignmentTrackNumber); // TODO -- TEST
        expect(trackListArray[i]).toContain(idAssignmentTrackTitle); // TODO -- TEST
        expect(trackListArray[i]).toContain(idAssignmentTrackDuration); // TODO -- TEST
    }
}); /* given valid lists of track suffixes, track titles, and track durations, getTrackListColumn()
        returns a string containing id assignments for the play arrow, track number, track title,
        and track duration for each item in the list */

test(`given valid lists of track suffixes, track titles, and track durations, getTrackListColumn()
        returns a string containing lines of text representing the track number, title, and
        duration that will appear on the user interface for each item in the list`, () => {
    const trackList = getTrackListColumn(testTrackSuffixes, testTrackTitles, testTrackDurations); // TODO -- TEST

    const trimmedTrackList = trackList.trim(); // TODO -- TEST
    const expectedNumberOfTrackRows = 10; // TODO -- TEST
    const divOpeningTagTrackRow = getDivOpeningTag(kStyleSheetClassNameTrackRow); // TODO -- TEST
    const trackListArray = trimmedTrackList.split(divOpeningTagTrackRow); // TODO -- TEST
    trackListArray.shift(); // TODO -- TEST
    for (var i = 0; i < expectedNumberOfTrackRows; i++) // TODO -- TEST
    {
        var expectedListCounter = (i + 1).toString() + kListCounterSuffix; // TODO -- TEST
        if (i < kGreatestSingleDigitNumber) // TODO -- TEST
        {
            expectedListCounter = kPaddingZero + expectedListCounter; // TODO -- TEST
        }
        const expectedDurationText = kOpeningParenthesis + testTrackDurations[i] + kClosingParenthesis; // TODO -- TEST
        expect(trackListArray[i]).toContain(expectedListCounter); // TODO -- TEST
        expect(trackListArray[i]).toContain(testTrackTitles[i]); // TODO -- TEST
        expect(trackListArray[i]).toContain(expectedDurationText); // TODO -- TEST
    }
}); /* given valid lists of track suffixes, track titles, and track durations, getTrackListColumn()
        returns a string containing lines of text representing the track number, title, and
        duration that will appear on the user interface for each item in the list */
