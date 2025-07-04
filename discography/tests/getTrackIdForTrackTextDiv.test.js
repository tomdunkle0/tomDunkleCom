// Constant includes:
const constants = require('./environment/constants');
const kTrackIds    = constants.kTrackIds;
const kUnpopulated = constants.kUnpopulated;

// Test Constant includes:
const testConstants = require('./resources/testConstants');
const kTestTrackDurationId = testConstants.kTestTrackDurationId;
const kTestTrackNumberId   = testConstants.kTestTrackNumberId;
const kTestTrackTitleId    = testConstants.kTestTrackTitleId;

// Function includes:
const audioManager = require('./environment/audioManager');
const getTrackIdForTrackTextDiv = audioManager.getTrackIdForTrackTextDiv;
const getDiscographyContent = require('./environment/getDiscographyContent');

// Test Function includes:
const testFunctions = require('./resources/testFunctions');
const getParentElementForChildId = testFunctions.getParentElementForChildId;

beforeEach(() => {
    document.body.innerHTML = getDiscographyContent();
}); // beforeEach()

test(`given a track duration div, getTrackIdForTrackTextDiv() returns the id of the associated
        track`, () => {
    const trackDurationDiv = getParentElementForChildId(kTestTrackDurationId);

    const trackId = getTrackIdForTrackTextDiv(trackDurationDiv);

    const expectedTrackId = getTrackIdOfRunThatTurkey();
    expect(trackId).toBe(expectedTrackId);
}); /* given a track duration div, getTrackIdForTrackTextDiv() returns the id of the associated
        track */

test(`given a track number div, getTrackIdForTrackTextDiv() returns the id of the associated
        track`, () => {
    const trackNumberDiv = getParentElementForChildId(kTestTrackNumberId);

    const trackId = getTrackIdForTrackTextDiv(trackNumberDiv);

    const expectedTrackId = getTrackIdOfRunThatTurkey();
    expect(trackId).toBe(expectedTrackId);
}); /* given a track number div, getTrackIdForTrackTextDiv() returns the id of the associated
        track */

test(`given a track title div, getTrackIdForTrackTextDiv() returns the id of the associated
        track`, () => {
    const trackTitleDiv = getParentElementForChildId(kTestTrackTitleId);

    const trackId = getTrackIdForTrackTextDiv(trackTitleDiv);

    const expectedTrackId = getTrackIdOfRunThatTurkey();
    expect(trackId).toBe(expectedTrackId);
}); /* given a track title div, getTrackIdForTrackTextDiv() returns the id of the associated
        track */

test(`given an element whose child is an empty string, getTrackIdForTrackTextDiv() returns
        null`, () => {
    const element = { children: [ kUnpopulated ] };

    const trackId = getTrackIdForTrackTextDiv(element);

    expect(trackId).toBe(null);
}); /* given an element whose child is an empty string, getTrackIdForTrackTextDiv() returns
        null */

test(`given an element whose child is null, getTrackIdForTrackTextDiv() returns null`, () => {
    const element = { children: [ null ] };

    const trackId = getTrackIdForTrackTextDiv(element);

    expect(trackId).toBe(null);
}); /* given an element whose child is null, getTrackIdForTrackTextDiv() returns null */

test(`given an element whose child is undefined, getTrackIdForTrackTextDiv() returns null`, () => {
    const element = { children: [ undefined ] };

    const trackId = getTrackIdForTrackTextDiv(element);

    expect(trackId).toBe(null);
}); /* given an element whose child is undefined, getTrackIdForTrackTextDiv() returns null */

function getTrackIdOfRunThatTurkey()
{
    const numberOfTracksOn1320 = 15;
    const numberOfTracksOnPage = kTrackIds.length;
    const runThatTurkeyIndex = numberOfTracksOnPage - numberOfTracksOn1320;
    return kTrackIds[runThatTurkeyIndex];
} // getTrackIdOfRunThatTurkey()
