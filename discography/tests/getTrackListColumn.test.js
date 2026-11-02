// Function includes:
const audioManager = require('./environment/audioManager');
const getDiscographyContent = require('./environment/getDiscographyContent');
const getDiscographyContents = getDiscographyContent.getDiscographyContent; // TODO -- TEST
const getTrackListColumn = getDiscographyContent.getTrackListColumn; // TODO -- TEST

beforeEach(() => {
    document.body.innerHTML = getDiscographyContents(); // TODO: probably not needed.
}); // beforeEach()

const testTrackNumbers =
[
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10"
]; // TODO -- TEST
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
const testTrackTimes =
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

test(`given valid lists of suffixes, track numbers, track titles, and track durations,
        getTrackListColumn() returns a list of divs that are of type trackRow`, () => {
    const returnValue = getTrackListColumn(testTrackSuffixes, testTrackNumbers, testTrackTitles, testTrackTimes); // TODO -- TEST

    const trimmedReturnValue = returnValue.trim(); // TODO -- TEST
    expect(trimmedReturnValue.startsWith("<div class=\"trackRow\">")).toBe(true); // TODO: Magic string. // TODO -- TEST
    const count = trimmedReturnValue.split("<div class=\"trackRow\">").length - 1;
    expect(count).toBe(10); // TODO: Magic number. // TODO -- TEST
    expect(trimmedReturnValue.endsWith("</div>")).toBe(true); // TODO: Magic string. // TODO -- TEST
    // TODO: confirm that there are 3 instances of trackRow.
}); /* given valid lists of suffixes, track numbers, track titles, and track durations,
        getTrackListColumn() returns a list of divs that are of type trackRow */
