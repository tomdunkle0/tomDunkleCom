// Constant includes:
const constants = require('./environment/constants');
const kUnpopulated = constants.kUnpopulated;

// Function includes:
const audioManager = require('./environment/audioManager');
const getAudioPlayerForTrack = audioManager.getAudioPlayerForTrack;
const getDiscographyContent = require('./environment/getDiscographyContent');

test(`given a null trackId, getAudioPlayerForTrack() returns null`, () => {
    expect(getAudioPlayerForTrack(null)).toBe(null);
}); /* given a null trackId, getAudioPlayerForTrack() returns null */

test(`given an undefined trackId, getAudioPlayerForTrack() returns null`, () => {
    expect(getAudioPlayerForTrack(undefined)).toBe(null);
}); /* given an undefined trackId, getAudioPlayerForTrack() returns null */

test(`given an unpopulated trackId, getAudioPlayerForTrack() returns null`, () => {
    expect(getAudioPlayerForTrack(kUnpopulated)).toBe(null);
}); /* given an unpopulated trackId, getAudioPlayerForTrack() returns null */

test(`given an invalid trackId, getAudioPlayerForTrack() returns null`, () => {
    document.body.innerHTML = getDiscographyContent();
    const invalidTrackId = "sNotARealSongName";
    // TODO: Add an expect statement asserting that the innerHTML body is populated.

    expect(getAudioPlayerForTrack(invalidTrackId)).toBe(null);
}); /* given an invalid trackId, getAudioPlayerForTrack() returns null */
