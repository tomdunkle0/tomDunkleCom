// Function includes:
const audioManager = require('./environment/audioManager');
const getDiscographyContent = require('./environment/getDiscographyContent');
const getDiscographyContents = getDiscographyContent.getDiscographyContent; // TODO -- TEST
const getTrackRow = getDiscographyContent.getTrackRow; // TODO -- TEST

beforeEach(() => {
    document.body.innerHTML = getDiscographyContents(); // TODO: probably not needed.
}); // beforeEach()

const testTrackNumber = "1"; // TODO -- TEST
const testTrackSuffix = "TestTrackSuffix"; // TODO -- TEST
const testTrackTime = "3:30"; // TODO -- TEST
const testTrackTitle = "Test Track"; // TODO -- TEST

test(`given a valid suffix, track number, track title, and track duration, getTrackRow() returns a
        div of class trackRow`, () => {
    const returnValue = getTrackRow(testTrackSuffix, testTrackNumber, testTrackTitle, testTrackTime); // TODO -- TEST

    const trimmedReturnValue = returnValue.trim(); // TODO -- TEST
    expect(trimmedReturnValue.startsWith("<div class=\"trackRow\">")).toBe(true); // TODO: Magic string. // TODO -- TEST
    expect(trimmedReturnValue.endsWith("</div>")).toBe(true); // TODO: Magic string. // TODO -- TEST
}); /* given a valid suffix, track number, track title, and track duration, getTrackRow() returns a
        div of class trackRow */

test(`given a valid suffix, track number, track title, and track duration, getTrackRow() returns a
        string containing a div of class trackNumber, a div of class trackTitle, and a div of class
        trackDuration`, () => {
    const returnValue = getTrackRow(testTrackSuffix, testTrackNumber, testTrackTitle, testTrackTime); // TODO -- TEST

    const trimmedReturnValue = returnValue.trim(); // TODO -- TEST
    expect(trimmedReturnValue).toContain("<div class=\"trackNumber\">"); // TODO -- TEST
    expect(trimmedReturnValue).toContain("<div class=\"trackTitle\">"); // TODO -- TEST
    expect(trimmedReturnValue).toContain("<div class=\"trackDuration\">"); // TODO -- TEST
}); /* given a valid suffix, track number, track title, and track duration, getTrackRow() returns a
        string containing a div of class trackNumber, a div of class trackTitle, and a div of class
        trackDuration */
