// Constant includes:
const constants = require('./environment/constants');
const kFirstCharIndex              = constants.kFirstCharIndex;
const kPrefixAudioPlayer           = constants.kPrefixAudioPlayer;
const kStyleSheetClassNameTrackRow = constants.kStyleSheetClassNameTrackRow;
const kUnpopulated                 = constants.kUnpopulated;

// Test Constant includes:
const testConstants = require('./resources/testConstants');
const kAudioElementNodeName = testConstants.kAudioElementNodeName;
const kTestTrackNumberId    = testConstants.kTestTrackNumberId;

// Function includes:
const audioManager = require('./environment/audioManager');
const getAssociatedAudioPlayerForTrackTextDiv
    = audioManager.getAssociatedAudioPlayerForTrackTextDiv;
const getDiscographyContent = require('./environment/getDiscographyContent');

// Test Function includes:
const testFunctions = require('./resources/testFunctions');
const getParentElementForChildId = testFunctions.getParentElementForChildId;

beforeEach(() => {
    document.body.innerHTML = getDiscographyContent();
}); // beforeEach()

test(`given a valid trackTextDiv, getAssociatedAudioPlayerForTrackTextDiv() returns a valid audio
        player`, () => {
    const trackTextDiv = getParentElementForChildId(kTestTrackNumberId);

    const audioPlayer = getAssociatedAudioPlayerForTrackTextDiv(trackTextDiv);

    const audioPlayerId = audioPlayer.id;
    const audioPlayerIdPrefix = audioPlayerId.charAt(kFirstCharIndex);
    const audioPlayerNodeName = audioPlayer.nodeName;
    expect(audioPlayerIdPrefix).toBe(kPrefixAudioPlayer);
    expect(audioPlayerNodeName).toBe(kAudioElementNodeName);
}); /* given a valid trackTextDiv, getAssociatedAudioPlayerForTrackTextDiv() returns a valid audio
        player */

test(`given an element whose grandparent is an empty string,
        getAssociatedAudioPlayerForTrackTextDiv() returns null`, () => {
    const element = createElementWithTrackRowParentAndCustomGrandparent(kUnpopulated);

    const audioPlayer = getAssociatedAudioPlayerForTrackTextDiv(element);

    expect(audioPlayer).toBe(null);
}); /* given an element whose grandparent is an empty string,
        getAssociatedAudioPlayerForTrackTextDiv() returns null */

test(`given an element whose grandparent is null, getAssociatedAudioPlayerForTrackTextDiv() returns
        null`, () => {
    const element = createElementWithTrackRowParentAndCustomGrandparent(null);

    const audioPlayer = getAssociatedAudioPlayerForTrackTextDiv(element);

    expect(audioPlayer).toBe(null);
}); /* given an element whose grandparent is null, getAssociatedAudioPlayerForTrackTextDiv()
        returns null */

test(`given an element whose grandparent is undefined, getAssociatedAudioPlayerForTrackTextDiv()
        returns null`, () => {
    const element = createElementWithTrackRowParentAndCustomGrandparent(undefined);

    const audioPlayer = getAssociatedAudioPlayerForTrackTextDiv(element);

    expect(audioPlayer).toBe(null);
}); /* given an element whose grandparent is undefined, getAssociatedAudioPlayerForTrackTextDiv()
        returns null */

test(`given an element whose great grandparent is an empty string,
        getAssociatedAudioPlayerForTrackTextDiv() returns null`, () => {
    const grandparent = { parentElement: kUnpopulated };
    const element = createElementWithTrackRowParentAndCustomGrandparent(grandparent);

    const audioPlayer = getAssociatedAudioPlayerForTrackTextDiv(element);

    expect(audioPlayer).toBe(null);
}); /* given an element whose great grandparent is an empty string,
        getAssociatedAudioPlayerForTrackTextDiv() returns null */

test(`given an element whose great grandparent is null, getAssociatedAudioPlayerForTrackTextDiv()
        returns null`, () => {
    const grandparent = { parentElement: null };
    const element = createElementWithTrackRowParentAndCustomGrandparent(grandparent);

    const audioPlayer = getAssociatedAudioPlayerForTrackTextDiv(element);

    expect(audioPlayer).toBe(null);
}); /* given an element whose great grandparent is null, getAssociatedAudioPlayerForTrackTextDiv()
        returns null */

test(`given an element whose great grandparent is undefined,
        getAssociatedAudioPlayerForTrackTextDiv() returns null`, () => {
    const grandparent = { parentElement: undefined };
    const element = createElementWithTrackRowParentAndCustomGrandparent(grandparent);

    const audioPlayer = getAssociatedAudioPlayerForTrackTextDiv(element);

    expect(audioPlayer).toBe(null);
}); /* given an element whose great grandparent is undefined,
        getAssociatedAudioPlayerForTrackTextDiv() returns null */

test(`given an element whose parent is an empty string, getAssociatedAudioPlayerForTrackTextDiv()
        returns null`, () => {
    const element = { parentElement: kUnpopulated };

    const audioPlayer = getAssociatedAudioPlayerForTrackTextDiv(element);

    expect(audioPlayer).toBe(null);
}); /* given an element whose parent is an empty string, getAssociatedAudioPlayerForTrackTextDiv()
        returns null */

test(`given an element whose parent is null, getAssociatedAudioPlayerForTrackTextDiv() returns
        null`, () => {
    const element = { parentElement: null };

    const audioPlayer = getAssociatedAudioPlayerForTrackTextDiv(element);

    expect(audioPlayer).toBe(null);
}); /* given an element whose parent is null, getAssociatedAudioPlayerForTrackTextDiv() returns
        null */

test(`given an element whose parent is undefined, getAssociatedAudioPlayerForTrackTextDiv()
        returns null`, () => {
    const element = { parentElement: undefined };

    const audioPlayer = getAssociatedAudioPlayerForTrackTextDiv(element);

    expect(audioPlayer).toBe(null);
}); /* given an element whose parent is undefined, getAssociatedAudioPlayerForTrackTextDiv()
        returns null */

function createElementWithTrackRowParentAndCustomGrandparent(grandparent)
{
    const trackRow = { className: kStyleSheetClassNameTrackRow, parentElement: grandparent };
    return { parentElement: trackRow };
} // createElementWithTrackRowParentAndCustomGrandparent()
