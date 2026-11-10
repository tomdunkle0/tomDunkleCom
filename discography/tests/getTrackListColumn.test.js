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
];

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
];

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
];

test(`given valid lists of track suffixes, track titles, and track durations, getTrackListColumn()
        returns a string containing a trackNumber div, a trackTitle div, and a trackDuration div
        for each item in the list`, () => {
    const trackListColumn = getTrackListColumn(kTestSuffixes, kTestTitles, kTestDurations);

    const trackRowArray = getTrackRowArray(trackListColumn);
    expectTrackListContainsContentDivs(trackRowArray);
}); /* given valid lists of track suffixes, track titles, and track durations, getTrackListColumn()
        returns a string containing a trackNumber div, a trackTitle div, and a trackDuration div
        for each item in the list */

test(`given valid lists of track suffixes, track titles, and track durations, getTrackListColumn()
        returns a string containing id assignments for the play arrow, track number, track title,
        and track duration for each item in the list`, () => {
    const trackListColumn = getTrackListColumn(kTestSuffixes, kTestTitles, kTestDurations);

    const trackRowArray = getTrackRowArray(trackListColumn);
    expectTrackListContainsIds(trackRowArray);
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

function expectTrackListContainsContentDivs(trackRowArray)
{
    const expectedNumberOfTrackRows = trackRowArray.length;
    var trackRow = "";
    for (var rowIndex = 0; rowIndex < expectedNumberOfTrackRows; rowIndex++)
    {
        trackRow = trackRowArray[rowIndex];
        expect(trackRow).toContain(kStyleSheetClassNameTrackNumber);
        expect(trackRow).toContain(kStyleSheetClassNameTrackTitle);
        expect(trackRow).toContain(kStyleSheetClassNameTrackDuration);
    }
} // expectTrackListContainsContentDivs()

function expectTrackListContainsIds(trackRowArray)
{
    const expectedNumberOfTrackRows = trackRowArray.length;
    var trackRow = "";
    var trackSuffix = "";
    var playArrowId = "";
    var trackNumberId = "";
    var trackTitleId = "";
    var trackDurationId = "";
    for (var rowIndex = 0; rowIndex < expectedNumberOfTrackRows; rowIndex++)
    {
        trackRow = trackRowArray[rowIndex];
        trackSuffix = kTestSuffixes[rowIndex];
        playArrowId = kPrefixPlayArrow + trackSuffix;
        trackNumberId = kPrefixTrackNumber + trackSuffix;
        trackTitleId = kPrefixTrackTitle + trackSuffix;
        trackDurationId = kPrefixTrackDuration + trackSuffix;
        expect(trackRow).toContain(playArrowId);
        expect(trackRow).toContain(trackNumberId);
        expect(trackRow).toContain(trackTitleId);
        expect(trackRow).toContain(trackDurationId);
    }
} // expectTrackListContainsIds()

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
