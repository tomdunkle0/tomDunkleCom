// Constant includes:
const constants = require('./environment/constants');
const kColorCodeLightBlue = constants.kColorCodeLightBlue;
const kColorCodeWhite     = constants.kColorCodeWhite;
const kStyle              = constants.kStyle;

// Test Constant includes:
const testConstants = require('./resources/testConstants');
const kTestTrackNumberId = testConstants.kTestTrackNumberId;

// Function includes:
const audioManager = require('./environment/audioManager');
const onTouchEnd   = audioManager.onTouchEnd;
const onTouchStart = audioManager.onTouchStart;
const getDiscographyContent = require('./environment/getDiscographyContent');

// Test Function includes:
const testFunctions = require('./resources/testFunctions');
const getStyleAttributeForColorCode = testFunctions.getStyleAttributeForColorCode;

test(`on touch end, the fill of the touched state changes to white`, () => {
    document.body.innerHTML = getDiscographyContent();
    const arbitraryTrackText = document.getElementById(kTestTrackNumberId);
    const callingDiv = arbitraryTrackText.parentElement;
    onTouchStart(callingDiv);
    var expectedStyle = getStyleAttributeForColorCode(kColorCodeLightBlue);
    expect(arbitraryTrackText.getAttribute(kStyle)).toBe(expectedStyle);

    onTouchEnd(callingDiv);

    expectedStyle = getStyleAttributeForColorCode(kColorCodeWhite);
    expect(arbitraryTrackText.getAttribute(kStyle)).toBe(expectedStyle);
}); /* on touch end, the fill of the touched state changes to white */
