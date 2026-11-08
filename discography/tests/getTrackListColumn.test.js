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
const getIdAssignment = testFunctions.getIdAssignment; // TODO -- TEST

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
    const trackListColumn = getTrackListColumn(kTestSuffixes, kTestTitles, kTestDurations);

    const trackRowArray = getTrackRowArray(trackListColumn);
    expectTrackListContainsUserInterfaceContent(trackRowArray);
}); /* given valid lists of track suffixes, track titles, and track durations, getTrackListColumn()
        returns a string containing lines of text representing the track number, title, and
        duration that will appear on the user interface for each item in the list */

function expectTrackListContainsContentDivs(trackRowArray) // TODO -- TEST
{
    const expectedNumberOfTrackRows = trackRowArray.length; // TODO -- TEST
    var trackRow = ""; // TODO -- TEST
    for (var rowIndex = 0; rowIndex < expectedNumberOfTrackRows; rowIndex++) // TODO -- TEST
    {
        trackRow = trackRowArray[rowIndex]; // TODO -- TEST
        expect(trackRow).toContain(kStyleSheetClassNameTrackNumber); // TODO -- TEST
        expect(trackRow).toContain(kStyleSheetClassNameTrackTitle); // TODO -- TEST
        expect(trackRow).toContain(kStyleSheetClassNameTrackDuration); // TODO -- TEST
    }
} // expectTrackListContainsContentDivs()

function expectTrackListContainsIdAssignments(trackRowArray) // TODO -- TEST
{
    const expectedNumberOfTrackRows = trackRowArray.length; // TODO -- TEST
    var trackRow = ""; // TODO -- TEST
    var idAssignmentPlayArrow = ""; // TODO -- TEST
    var idAssignmentTrackNumber = ""; // TODO -- TEST
    var idAssignmentTrackTitle = ""; // TODO -- TEST
    var idAssignmentTrackDuration = ""; // TODO -- TEST
    for (var rowIndex = 0; rowIndex < expectedNumberOfTrackRows; rowIndex++) // TODO -- TEST
    {
        trackRow = trackRowArray[rowIndex]; // TODO -- TEST
        idAssignmentPlayArrow = getIdAssignment(kPrefixPlayArrow, kTestSuffixes[rowIndex]); // TODO -- TEST
        idAssignmentTrackNumber = getIdAssignment(kPrefixTrackNumber, kTestSuffixes[rowIndex]); // TODO -- TEST
        idAssignmentTrackTitle = getIdAssignment(kPrefixTrackTitle, kTestSuffixes[rowIndex]); // TODO -- TEST
        idAssignmentTrackDuration = getIdAssignment(kPrefixTrackDuration, kTestSuffixes[rowIndex]); // TODO -- TEST
        expect(trackRow).toContain(idAssignmentPlayArrow); // TODO -- TEST
        expect(trackRow).toContain(idAssignmentTrackNumber); // TODO -- TEST
        expect(trackRow).toContain(idAssignmentTrackTitle); // TODO -- TEST
        expect(trackRow).toContain(idAssignmentTrackDuration); // TODO -- TEST
    }
} // expectTrackListContainsIdAssignments()

function expectTrackListContainsUserInterfaceContent(trackRowArray)
{
    const expectedNumberOfTrackRows = trackRowArray.length;
    var trackRow = "";
    var expectedListCounter = "";
    var expectedDuration = "";
    for (var rowIndex = 0; rowIndex < expectedNumberOfTrackRows; rowIndex++)
    {
        trackRow = trackRowArray[rowIndex];
        expectedListCounter = (rowIndex + 1).toString() + kListCounterSuffix;
        if (rowIndex < kGreatestSingleDigitNumber)
        {
            expectedListCounter = kPaddingZero + expectedListCounter;
        }
        expectedDuration = kOpeningParenthesis + kTestDurations[rowIndex] + kClosingParenthesis;
        expect(trackRow).toContain(expectedListCounter);
        expect(trackRow).toContain(kTestTitles[rowIndex]);
        expect(trackRow).toContain(expectedDuration);
    }
} // expectTrackListContainsUserInterfaceContent()

function getTrackRowArray(trackListColumn)
{
    const trackRowArray = trackListColumn.split(kStyleSheetClassNameTrackRow);
    trackRowArray.shift();
    return trackRowArray;
} // getTrackRowArray()
