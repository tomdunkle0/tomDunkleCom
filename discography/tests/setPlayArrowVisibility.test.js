// Constant includes:
const constants = require('./environment/constants');
const kStyle = constants.kStyle;

// Test Constant includes:
const testConstants = require('./resources/testConstants');
const kTestTrackId                      = testConstants.kTestTrackId;
const kTestTrackPlayArrowId             = testConstants.kTestTrackPlayArrowId;
const kVisibilityHiddenWithoutSemicolon = testConstants.kVisibilityHiddenWithoutSemicolon;
const kVisibilityHiddenWithSemicolon    = testConstants.kVisibilityHiddenWithSemicolon;
const kVisibilityVisible                = testConstants.kVisibilityVisible;

// Function includes:
const audioManager = require('./environment/audioManager');
const setPlayArrowVisibility = audioManager.setPlayArrowVisibility;
const getDiscographyContent = require('./environment/getDiscographyContent');

// Miscellaneous constants:
const kShouldBeVisible    = true;
const kShouldNotBeVisible = false;

beforeEach(() => {
    document.body.innerHTML = getDiscographyContent();
}); // beforeEach()

test(`passing false to setPlayArrowVisibility() sets the play arrow of a track invisible`, () => {
    setPlayArrowVisibility(kTestTrackId, kShouldBeVisible);
    const playArrow = document.getElementById(kTestTrackPlayArrowId);
    expect(playArrow.getAttribute(kStyle)).toBe(kVisibilityVisible);

    setPlayArrowVisibility(kTestTrackId, kShouldNotBeVisible);

    expect(playArrow.getAttribute(kStyle)).toBe(kVisibilityHiddenWithoutSemicolon);
}); /* passing false to setPlayArrowVisibility() sets the play arrow of a track invisible */

test(`passing true to setPlayArrowVisibility() sets the play arrow of a track visible`, () => {
    const playArrow = document.getElementById(kTestTrackPlayArrowId);
    expect(playArrow.getAttribute(kStyle)).toBe(kVisibilityHiddenWithSemicolon);

    setPlayArrowVisibility(kTestTrackId, kShouldBeVisible);

    expect(playArrow.getAttribute(kStyle)).toBe(kVisibilityVisible);
}); /* passing true to setPlayArrowVisibility() sets the play arrow of a track visible */

test(`passing undefined to setPlayArrowVisibility() performs no action`, () => {
    setPlayArrowVisibility(kTestTrackId, kShouldBeVisible);
    const playArrow = document.getElementById(kTestTrackPlayArrowId);
    expect(playArrow.getAttribute(kStyle)).toBe(kVisibilityVisible);

    setPlayArrowVisibility(kTestTrackId, undefined);

    expect(playArrow.getAttribute(kStyle)).toBe(kVisibilityVisible);
}); /* passing undefined to setPlayArrowVisibility() performs no action */
