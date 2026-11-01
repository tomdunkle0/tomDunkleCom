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
    "3"
]; // TODO -- TEST
const testTrackSuffixes =
[
    "TestTrack1Suffix",
    "TestTrack2Suffix",
    "TestTrack3Suffix"
]; // TODO -- TEST
const testTrackTimes =
[
    "3:30",
    "4:15",
    "2:20"
]; // TODO -- TEST
const testTrackTitles =
[
    "Test Track 1",
    "Test Track 2",
    "Test Track 3"
]; // TODO -- TEST

test(`given valid lists of suffixes, track numbers, track titles, and track durations,
        getTrackListColumn() returns a list of divs that are of type trackRow`, () => {
    const returnValue = getTrackListColumn(testTrackSuffixes, testTrackNumbers, testTrackTitles, testTrackTimes); // TODO -- TEST

    const trimmedReturnValue = returnValue.trim(); // TODO -- TEST
    expect(trimmedReturnValue.startsWith("<div class=\"trackRow\">")).toBe(true); // TODO: Magic string. // TODO -- TEST
    const count = trimmedReturnValue.split("<div class=\"trackRow\">").length - 1;
    expect(count).toBe(3); // TODO: Magic number. // TODO -- TEST
    expect(trimmedReturnValue.endsWith("</div>")).toBe(true); // TODO: Magic string. // TODO -- TEST
    // TODO: confirm that there are 3 instances of trackRow.
}); /* given valid lists of suffixes, track numbers, track titles, and track durations,
        getTrackListColumn() returns a list of divs that are of type trackRow */
