// User interface string includes:
const userInterfaceStrings = require('./environment/userInterfaceStrings');
const kPaddingZero = userInterfaceStrings.kPaddingZero;

// Constant includes:
const constants = require('./environment/constants');
const kGreatestSingleDigitNumber        = constants.kGreatestSingleDigitNumber;
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
const isUnpopulated = audioManager.isUnpopulated;
const getDiscographyContent = require('./environment/getDiscographyContent');
const getTrackListColumn = getDiscographyContent.getTrackListColumn;

// Test Constant includes:
const testConstants = require('./resources/testConstants');
const kClosingParenthesis = testConstants.kClosingParenthesis;
const kListCounterSuffix  = testConstants.kListCounterSuffix;
const kOpeningParenthesis = testConstants.kOpeningParenthesis;

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

beforeAll(() => {
    // If kGreatestSingleDigitNumber or kPaddingZero are undefined in the current context, then it
    //  is implied that the undefined values consumed in this test suite are also being consumed in
    //  the test environment by the production function getTrackListColumn(), causing that function
    //  to fail to add the padding zero ("0") to the beginning of each of the first nine tracks'
    //  title strings for the user interface. In such case, tests will erroneously pass because
    //  similar logic in this test suite would cause expectTrackListContainsUserInterfaceContent()
    //  to expect the same incorrect strings that are produced by getTrackListColumn().
    expect(isUnpopulated(kGreatestSingleDigitNumber)).toBe(false);
    expect(isUnpopulated(kPaddingZero)).toBe(false);
}); // beforeAll()

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
