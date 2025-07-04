// Test Constant includes:
const testConstants = require('./resources/testConstants');
const kTestTrackId = testConstants.kTestTrackId;

// Function includes:
const audioManager = require('./environment/audioManager');
const getAudioPlayerForTrack = audioManager.getAudioPlayerForTrack;
const isFinalTrackOnAlbum    = audioManager.isFinalTrackOnAlbum;
const getDiscographyContent = require('./environment/getDiscographyContent');

// Miscellaneous constants:
const kMinimumTrackCount = 8;

beforeEach(() => {
    document.body.innerHTML = getDiscographyContent();
}); // beforeEach()

test(`given a track that is not the last on the album, isFinalTrackOnAlbum() returns
        false`, () => {
    const audioPlayer = getAudioPlayerForTrack(kTestTrackId);
    const tracks = audioPlayer.children;
    expect(tracks.length).toBeGreaterThanOrEqual(kMinimumTrackCount);

    const firstTrack = tracks[0]; // TODO: Magic number.
    expect(isFinalTrackOnAlbum(firstTrack.id)).toBe(false);
}); /* given a track that is not the last on the album, isFinalTrackOnAlbum() returns
        false */

test(`given a track that is the last on the album, isFinalTrackOnAlbum() returns true`, () => {
    const audioPlayer = getAudioPlayerForTrack(kTestTrackId);
    const tracks = audioPlayer.children;
    expect(tracks.length).toBeGreaterThanOrEqual(kMinimumTrackCount);

    const finalTrack = tracks[tracks.length - 1]; // TODO: Magic number.
    expect(isFinalTrackOnAlbum(finalTrack.id)).toBe(true);
}); /* given a track that is the last on the album, isFinalTrackOnAlbum() returns true */
