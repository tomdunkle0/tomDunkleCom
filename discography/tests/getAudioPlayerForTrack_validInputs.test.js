// Test Constant includes:
const testConstants = require('./resources/testConstants');
const kTestTrackId = testConstants.kTestTrackId;

// Function includes:
const audioManager = require('./environment/audioManager');
const getAudioPlayerForTrack = audioManager.getAudioPlayerForTrack;
const getDiscographyContent = require('./environment/getDiscographyContent');

test(`given a valid trackId, getAudioPlayerForTrack() returns an audio player`, () => {
    document.body.innerHTML = getDiscographyContent();

    const audioPlayer = getAudioPlayerForTrack(kTestTrackId);

    const expectedAudioPlayerId = "a$1320"; // TODO: Import kAudioPlayer1320 from audioManager.js.
    expect(audioPlayer.id).toBe(expectedAudioPlayerId);
}); /* given a valid trackId, getAudioPlayerForTrack() returns an audio player */
