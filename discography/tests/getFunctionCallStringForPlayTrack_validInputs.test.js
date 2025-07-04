// Constant includes:
const constants = require('./environment/constants');
const kPlayTrackFunctionCallPrefix  = constants.kPlayTrackFunctionCallPrefix;
const kPlayTrackFunctionCallSuffix  = constants.kPlayTrackFunctionCallSuffix;
const kStyleSheetClassNameTrackText = constants.kStyleSheetClassNameTrackText;
const kUnpopulated                  = constants.kUnpopulated;

// Test Constant includes:
const testConstants = require('./resources/testConstants');
const kTestTrackDurationId  = testConstants.kTestTrackDurationId;
const kTestTrackId          = testConstants.kTestTrackId;
const kTestTrackNumberId    = testConstants.kTestTrackNumberId;
const kTestTrackPlayArrowId = testConstants.kTestTrackPlayArrowId;
const kTestTrackTitleId     = testConstants.kTestTrackTitleId;

// Function includes:
const audioManager = require('./environment/audioManager');
const getFunctionCallStringForPlayTrack = audioManager.getFunctionCallStringForPlayTrack;
const getDiscographyContent = require('./environment/getDiscographyContent');

// Test Function includes:
const testFunctions = require('./resources/testFunctions');
const getParentElementForChildId = testFunctions.getParentElementForChildId;

// Compound constants:
const kPlayTestTrack = kPlayTrackFunctionCallPrefix + kTestTrackId + kPlayTrackFunctionCallSuffix;

beforeEach(() => {
    document.body.innerHTML = getDiscographyContent();
}); // beforeEach()

test(`given a trackDuration paragraph, getFunctionCallStringForPlayTrack() returns a valid
        function call string`, () => {
    const trackDurationText = document.getElementById(kTestTrackDurationId);

    const functionCallString = getFunctionCallStringForPlayTrack(trackDurationText);

    expect(functionCallString).toBe(kPlayTestTrack);
}); /* given a trackDuration paragraph, getFunctionCallStringForPlayTrack() returns a valid
        function call string */

test(`given a trackNumber paragraph, getFunctionCallStringForPlayTrack() returns a valid function
        call string`, () => {
    const trackNumberText = document.getElementById(kTestTrackNumberId);

    const functionCallString = getFunctionCallStringForPlayTrack(trackNumberText);

    expect(functionCallString).toBe(kPlayTestTrack);
}); /* given a trackNumber paragraph, getFunctionCallStringForPlayTrack() returns a valid function
        call string */

test(`given a trackTitle paragraph, getFunctionCallStringForPlayTrack() returns a valid function
        call string`, () => {
    const trackTitleText = document.getElementById(kTestTrackTitleId);

    const functionCallString = getFunctionCallStringForPlayTrack(trackTitleText);

    expect(functionCallString).toBe(kPlayTestTrack);
}); /* given a trackTitle paragraph, getFunctionCallStringForPlayTrack() returns a valid function
        call string */

test(`given an element whose className is empty, getFunctionCallStringForPlayTrack() returns
        null`, () => {
    const trackPlayArrow = document.getElementById(kTestTrackPlayArrowId);
    expect(trackPlayArrow.className).toBe(kUnpopulated);

    const functionCallString = getFunctionCallStringForPlayTrack(trackPlayArrow);

    expect(functionCallString).toBe(null);
}); /* given an element whose className is empty, getFunctionCallStringForPlayTrack() returns
        null */

test(`given an element whose className is populated with something other than trackText,
        getFunctionCallStringForPlayTrack() returns null`, () => {
    const trackDurationDiv = getParentElementForChildId(kTestTrackDurationId);
    expect(trackDurationDiv.className).not.toBe(kStyleSheetClassNameTrackText);

    const functionCallString = getFunctionCallStringForPlayTrack(trackDurationDiv);

    expect(functionCallString).toBe(null);
}); /* given an element whose className is populated with something other than trackText,
        getFunctionCallStringForPlayTrack() returns null */

test(`given an element without an assigned id, getFunctionCallStringForPlayTrack() returns
        null`, () => {
    const trackDurationDiv = getParentElementForChildId(kTestTrackDurationId);
    expect(trackDurationDiv.id).toBe(kUnpopulated);

    const functionCallString = getFunctionCallStringForPlayTrack(trackDurationDiv);

    expect(functionCallString).toBe(null);
}); /* given an element without an assigned id, getFunctionCallStringForPlayTrack() returns
        null */
