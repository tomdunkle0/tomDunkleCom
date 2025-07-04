// Test Constant includes:
const testConstants = require('./resources/testConstants');
const kTestTrackDurationId = testConstants.kTestTrackDurationId;
const kTestTrackNumberId   = testConstants.kTestTrackNumberId;
const kTestTrackTitleId    = testConstants.kTestTrackTitleId;

// Function includes:
const audioManager = require('./environment/audioManager');
const isDivContainingTrackTextParagraph = audioManager.isDivContainingTrackTextParagraph;
const getDiscographyContent = require('./environment/getDiscographyContent');

// Test Function includes:
const testFunctions = require('./resources/testFunctions');
const getParentElementForChildId = testFunctions.getParentElementForChildId;

beforeEach(() => {
    document.body.innerHTML = getDiscographyContent();
}); // beforeEach()

test(`given a trackDuration div, isDivContainingTrackTextParagraph() returns true`, () => {
    const trackDurationDiv = getParentElementForChildId(kTestTrackDurationId);

    expect(isDivContainingTrackTextParagraph(trackDurationDiv)).toBe(true);
}); /* given a trackDuration div, isDivContainingTrackTextParagraph() returns true */

test(`given a trackNumber div, isDivContainingTrackTextParagraph() returns true`, () => {
    const trackNumberDiv = getParentElementForChildId(kTestTrackNumberId);

    expect(isDivContainingTrackTextParagraph(trackNumberDiv)).toBe(true);
}); /* given a trackNumber div, isDivContainingTrackTextParagraph() returns true */

test(`given a trackTitle div, isDivContainingTrackTextParagraph() returns true`, () => {
    const trackTitleDiv = getParentElementForChildId(kTestTrackTitleId);

    expect(isDivContainingTrackTextParagraph(trackTitleDiv)).toBe(true);
}); /* given a trackTitle div, isDivContainingTrackTextParagraph() returns true */

test(`given an element that is not a div, isDivContainingTrackTextParagraph() returns
        false`, () => {
    const trackTitleText = document.getElementById(kTestTrackTitleId);
    expect(trackTitleText).not.toBe(null);

    expect(isDivContainingTrackTextParagraph(trackTitleText)).toBe(false);
}); /* given an element that is not a div, isDivContainingTrackTextParagraph() returns
        false */
