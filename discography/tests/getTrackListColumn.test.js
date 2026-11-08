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

const kTestSuffixes =
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

const kTestDurations =
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

const kTestTitles =
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
    const trackListColumn = getTrackListColumn(kTestSuffixes, kTestTitles, kTestDurations); // TODO -- TEST

    const trimmedTrackListColumn = trackListColumn.trim(); // TODO -- TEST
    const divOpeningTagTrackRow = getDivOpeningTag(kStyleSheetClassNameTrackRow); // TODO -- TEST
    expect(trimmedTrackListColumn.startsWith(divOpeningTagTrackRow)).toBe(true); // TODO -- TEST
    const count = trimmedTrackListColumn.split(divOpeningTagTrackRow).length - 1;
    const expectedNumberOfTrackRows = kTestSuffixes.length; // TODO -- TEST
    expect(count).toBe(expectedNumberOfTrackRows); // TODO -- TEST
    expect(trimmedTrackListColumn.endsWith(kDivClosingTag)).toBe(true); // TODO -- TEST
}); /* given valid lists of track suffixes, track titles, and track durations, getTrackListColumn()
        returns a list of divs that are of type trackRow */

test(`given valid lists of track suffixes, track titles, and track durations, getTrackListColumn()
        returns a string containing a trackNumber div, a trackTitle div, and a trackDuration div
        for each item in the list`, () => {
    const trackListColumn = getTrackListColumn(kTestSuffixes, kTestTitles, kTestDurations); // TODO -- TEST

    const trackRowArray = getTrackRowArray(trackListColumn); // TODO -- TEST
    expectTrackListContainsContentDivs(trackRowArray); // TODO -- TEST
}); /* given valid lists of track suffixes, track titles, and track durations, getTrackListColumn()
        returns a string containing a trackNumber div, a trackTitle div, and a trackDuration div
        for each item in the list */

test(`given valid lists of track suffixes, track titles, and track durations, getTrackListColumn()
        returns a string containing id assignments for the play arrow, track number, track title,
        and track duration for each item in the list`, () => {
    const trackListColumn = getTrackListColumn(kTestSuffixes, kTestTitles, kTestDurations); // TODO -- TEST

    const trackRowArray = getTrackRowArray(trackListColumn); // TODO -- TEST
    expectTrackListContainsIdAssignments(trackRowArray); // TODO -- TEST
}); /* given valid lists of track suffixes, track titles, and track durations, getTrackListColumn()
        returns a string containing id assignments for the play arrow, track number, track title,
        and track duration for each item in the list */

test(`given valid lists of track suffixes, track titles, and track durations, getTrackListColumn()
        returns a string containing lines of text representing the track number, title, and
        duration that will appear on the user interface for each item in the list`, () => {
    const trackListColumn = getTrackListColumn(kTestSuffixes, kTestTitles, kTestDurations); // TODO -- TEST

    const trackRowArray = getTrackRowArray(trackListColumn); // TODO -- TEST
    expectTrackListContainsUserInterfaceContent(trackRowArray); // TODO -- TEST
}); /* given valid lists of track suffixes, track titles, and track durations, getTrackListColumn()
        returns a string containing lines of text representing the track number, title, and
        duration that will appear on the user interface for each item in the list */

function expectTrackListContainsContentDivs(trackRowArray) // TODO -- TEST
{
    const expectedNumberOfTrackRows = trackRowArray.length; // TODO -- TEST
    for (var i = 0; i < expectedNumberOfTrackRows; i++) // TODO -- TEST
    {
        expect(trackRowArray[i]).toContain(kStyleSheetClassNameTrackNumber); // TODO -- TEST
        expect(trackRowArray[i]).toContain(kStyleSheetClassNameTrackTitle); // TODO -- TEST
        expect(trackRowArray[i]).toContain(kStyleSheetClassNameTrackDuration); // TODO -- TEST
    }
} // expectTrackListContainsContentDivs()

function expectTrackListContainsIdAssignments(trackRowArray) // TODO -- TEST
{
    const expectedNumberOfTrackRows = trackRowArray.length; // TODO -- TEST
    for (var i = 0; i < expectedNumberOfTrackRows; i++) // TODO -- TEST
    {
        const idAssignmentPlayArrow = getIdAssignmentForTestTrackChild(kPrefixPlayArrow, kTestSuffixes[i]); // TODO -- TEST
        const idAssignmentTrackNumber = getIdAssignmentForTestTrackChild(kPrefixTrackNumber, kTestSuffixes[i]); // TODO -- TEST
        const idAssignmentTrackTitle = getIdAssignmentForTestTrackChild(kPrefixTrackTitle, kTestSuffixes[i]); // TODO -- TEST
        const idAssignmentTrackDuration = getIdAssignmentForTestTrackChild(kPrefixTrackDuration, kTestSuffixes[i]); // TODO -- TEST
        expect(trackRowArray[i]).toContain(idAssignmentPlayArrow); // TODO -- TEST
        expect(trackRowArray[i]).toContain(idAssignmentTrackNumber); // TODO -- TEST
        expect(trackRowArray[i]).toContain(idAssignmentTrackTitle); // TODO -- TEST
        expect(trackRowArray[i]).toContain(idAssignmentTrackDuration); // TODO -- TEST
    }
} // expectTrackListContainsIdAssignments()

function expectTrackListContainsUserInterfaceContent(trackRowArray) // TODO -- TEST
{
    const expectedNumberOfTrackRows = trackRowArray.length; // TODO -- TEST
    for (var i = 0; i < expectedNumberOfTrackRows; i++) // TODO -- TEST
    {
        var expectedListCounter = (i + 1).toString() + kListCounterSuffix; // TODO -- TEST
        if (i < kGreatestSingleDigitNumber) // TODO -- TEST
        {
            expectedListCounter = kPaddingZero + expectedListCounter; // TODO -- TEST
        }
        const expectedDurationText = kOpeningParenthesis + kTestDurations[i] + kClosingParenthesis; // TODO -- TEST
        expect(trackRowArray[i]).toContain(expectedListCounter); // TODO -- TEST
        expect(trackRowArray[i]).toContain(kTestTitles[i]); // TODO -- TEST
        expect(trackRowArray[i]).toContain(expectedDurationText); // TODO -- TEST
    }
} // expectTrackListContainsUserInterfaceContent()

function getTrackRowArray(trackListColumn) // TODO -- TEST
{
    const trackRowArray = trackListColumn.split(kStyleSheetClassNameTrackRow); // TODO -- TEST
    trackRowArray.shift();
    return trackRowArray;
} // getTrackRowArray()
