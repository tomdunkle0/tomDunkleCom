// Jest includes:
const each = require('jest-each').default;

// Constant includes:
const constants = require('./environment/constants');
const kColorCodeLightBlue = constants.kColorCodeLightBlue;
const kColorCodeWhite     = constants.kColorCodeWhite;
const kStyle              = constants.kStyle;

// Test Constant includes:
const testConstants = require('./resources/testConstants');
const kTestTrackDurationId = testConstants.kTestTrackDurationId;
const kTestTrackNumberId   = testConstants.kTestTrackNumberId;
const kTestTrackTitleId    = testConstants.kTestTrackTitleId;

// Function includes:
const audioManager = require('./environment/audioManager');
const updateTrackFontColor = audioManager.updateTrackFontColor;
const getDiscographyContent = require('./environment/getDiscographyContent');

// Test Function includes:
const testFunctions = require('./resources/testFunctions');
const getStyleAttributeForColorCode = testFunctions.getStyleAttributeForColorCode;
const getParentElementForChildId    = testFunctions.getParentElementForChildId;

const testTrackTextIds = [kTestTrackDurationId, kTestTrackNumberId, kTestTrackTitleId];

beforeEach(() => {
    document.body.innerHTML = getDiscographyContent();
}); // beforeEach()

describe(`given an initialized track text div, updateTrackFontColor() can set the font color of the
            associated track number, title, and duration to light blue`, () => {
    each(testTrackTextIds).it(
            `calling the function with the track text div owning '%s' sets the font color of the
                associated track text paragraphs to light blue`,
            (testTrackTextId) => {
        const trackDurationText = document.getElementById(kTestTrackDurationId);
        const trackNumberText = document.getElementById(kTestTrackNumberId);
        const trackTitleText = document.getElementById(kTestTrackTitleId);
        const trackTextDiv = getParentElementForChildId(testTrackTextId);
        expectStyleIsNullForAllThreeParagraphs(trackDurationText, trackNumberText, trackTitleText);

        updateTrackFontColor(trackTextDiv, kColorCodeLightBlue);

        expectAllThreeParagraphsAreLightBlue(trackDurationText, trackNumberText, trackTitleText);
    });
}); /* given an initialized track text div, updateTrackFontColor() can set the font color of the
        associated track number, title, and duration to light blue */

describe(`given a track text div whose associated text is light blue, updateTrackFontColor() can
            set the font color of the associated track number, title, and duration to
            white`, () => {
    each(testTrackTextIds).it(
            `calling the function with the track text div owning '%s' sets the font color of the
                associated track text paragraphs to white`,
            (testTrackTextId) => {
        const trackTextDiv = getParentElementForChildId(testTrackTextId);
        updateTrackFontColor(trackTextDiv, kColorCodeLightBlue);
        const trackDurationText = document.getElementById(kTestTrackDurationId);
        const trackNumberText = document.getElementById(kTestTrackNumberId);
        const trackTitleText = document.getElementById(kTestTrackTitleId);
        expectAllThreeParagraphsAreLightBlue(trackDurationText, trackNumberText, trackTitleText);

        updateTrackFontColor(trackTextDiv, kColorCodeWhite);

        expectAllThreeParagraphsAreWhite(trackDurationText, trackNumberText, trackTitleText);
    });
}); /* given a track text div whose associated text is light blue, updateTrackFontColor() can set
        the font color of the associated track number, title, and duration to
        white */

describe(`given a track text div whose associated text is white, updateTrackFontColor() can set the
            font color of the associated track number, title, and duration to light blue`, () => {
    each(testTrackTextIds).it(
            `calling the function with the track text div owning '%s' sets the font color of the
                associated track text paragraphs to white`,
            (testTrackTextId) => {
        const trackTextDiv = getParentElementForChildId(testTrackTextId);
        updateTrackFontColor(trackTextDiv, kColorCodeWhite);
        const trackDurationText = document.getElementById(kTestTrackDurationId);
        const trackNumberText = document.getElementById(kTestTrackNumberId);
        const trackTitleText = document.getElementById(kTestTrackTitleId);
        expectAllThreeParagraphsAreWhite(trackDurationText, trackNumberText, trackTitleText);

        updateTrackFontColor(trackTextDiv, kColorCodeLightBlue);

        expectAllThreeParagraphsAreLightBlue(trackDurationText, trackNumberText, trackTitleText);
    });
}); /* given a track text div whose associated text is white, updateTrackFontColor() can set the
        font color of the associated track number, title, and duration to light blue */

function expectAllThreeParagraphsAreLightBlue(trackDurationText, trackNumberText, trackTitleText)
{
    const expectedStyleAttributeWidthSet = "color: rgb(153, 204, 255); width: 0px;";
    const expectedStyleAttributeWidthUnset = getStyleAttributeForColorCode(kColorCodeLightBlue);
    expect(trackDurationText.getAttribute(kStyle)).toBe(expectedStyleAttributeWidthSet);
    expect(trackNumberText.getAttribute(kStyle)).toBe(expectedStyleAttributeWidthUnset);
    expect(trackTitleText.getAttribute(kStyle)).toBe(expectedStyleAttributeWidthUnset);
} // expectAllThreeParagraphsAreLightBlue()

function expectAllThreeParagraphsAreWhite(trackDurationText, trackNumberText, trackTitleText)
{
    const expectedStyleAttributeWidthSet = "color: rgb(255, 255, 255); width: 0px;";
    const expectedStyleAttributeWidthUnset = getStyleAttributeForColorCode(kColorCodeWhite);
    expect(trackDurationText.getAttribute(kStyle)).toBe(expectedStyleAttributeWidthSet);
    expect(trackNumberText.getAttribute(kStyle)).toBe(expectedStyleAttributeWidthUnset);
    expect(trackTitleText.getAttribute(kStyle)).toBe(expectedStyleAttributeWidthUnset);
} // expectAllThreeParagraphsAreWhite()

function expectStyleIsNullForAllThreeParagraphs(trackDurationText, trackNumberText, trackTitleText)
{
    expect(trackDurationText.getAttribute(kStyle)).toBe(null);
    expect(trackNumberText.getAttribute(kStyle)).toBe(null);
    expect(trackTitleText.getAttribute(kStyle)).toBe(null);
} // expectStyleIsNullForAllThreeParagraphs()
