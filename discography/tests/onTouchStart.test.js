// Constant includes:
const constants = require('./environment/constants');
const kColorCodeLightBlue = constants.kColorCodeLightBlue;
const kStyle              = constants.kStyle;

// Test Constant includes:
const testConstants = require('./resources/testConstants');
const kTestTrackNumberId = testConstants.kTestTrackNumberId;

// Function includes:
const audioManager = require('./environment/audioManager');
const onTouchStart = audioManager.onTouchStart;
const getDiscographyContent = require('./environment/getDiscographyContent');

// Test Function includes:
const testFunctions = require('./resources/testFunctions');
const getStyleAttributeForColorCode = testFunctions.getStyleAttributeForColorCode;

test(`on touch start, the fill of the touched state changes to light blue`, () => {
    document.body.innerHTML = getDiscographyContent();
    const arbitraryTrackText = document.getElementById(kTestTrackNumberId);
    const callingDiv = arbitraryTrackText.parentElement;
    expect(arbitraryTrackText.getAttribute(kStyle)).toBe(null);

    onTouchStart(callingDiv);

    const expectedStyle = getStyleAttributeForColorCode(kColorCodeLightBlue);
    expect(arbitraryTrackText.getAttribute(kStyle)).toBe(expectedStyle);
}); /* on touch start, the fill of the touched state changes to light blue */
