// Constant includes:
const constants = require('./environment/constants');
const kUnpopulated = constants.kUnpopulated;

// Function includes:
const audioManager = require('./environment/audioManager');
const isFinalTrackOnAlbum = audioManager.isFinalTrackOnAlbum;

test(`given a null trackId, isFinalTrackOnAlbum() returns false`, () => {
    expect(isFinalTrackOnAlbum(null)).toBe(false);
}); /* given a null trackId, isFinalTrackOnAlbum() returns false */

test(`given an undefined trackId, isFinalTrackOnAlbum() returns false`, () => {
    expect(isFinalTrackOnAlbum(undefined)).toBe(false);
}); /* given an undefined trackId, isFinalTrackOnAlbum() returns false */

test(`given an unpopulated string, isFinalTrackOnAlbum() returns false`, () => {
    expect(isFinalTrackOnAlbum(kUnpopulated)).toBe(false);
}); /* given an unpopulated string, isFinalTrackOnAlbum() returns false */
