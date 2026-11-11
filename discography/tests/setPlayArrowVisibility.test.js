// Jest includes:
const each = require('jest-each').default; // TODO -- TEST

// Constant includes:
const constants = require('./environment/constants');
const kPrefixPlayArrow = constants.kPrefixPlayArrow; // TODO -- TEST
const kStyle           = constants.kStyle;
const kTrackIds        = constants.kTrackIds; // TODO -- TEST

// Test Constant includes:
const testConstants = require('./resources/testConstants');
const kTestTrackId                      = testConstants.kTestTrackId;
const kTestTrackPlayArrowId             = testConstants.kTestTrackPlayArrowId;
const kVisibilityHiddenWithoutSemicolon = testConstants.kVisibilityHiddenWithoutSemicolon;
const kVisibilityHiddenWithSemicolon    = testConstants.kVisibilityHiddenWithSemicolon;
const kVisibilityVisible                = testConstants.kVisibilityVisible;

// Function includes:
const audioManager = require('./environment/audioManager');
const removeFirstCharacter = audioManager.removeFirstCharacter; // TODO -- TEST
const setPlayArrowVisibility = audioManager.setPlayArrowVisibility;
const gdc = require('./environment/getDiscographyContent'); // TODO -- TEST
const getDiscographyContent = gdc.getDiscographyContent; // TODO -- TEST

// Miscellaneous constants:
const kShouldBeVisible    = true;
const kShouldNotBeVisible = false;

beforeEach(() => {
    document.body.innerHTML = getDiscographyContent();
}); // beforeEach()

describe(`passing false to setPlayArrowVisibility() sets the play arrow of a track
            invisible`, () => {
    each(kTrackIds).it(
            `passing false to setPlayArrowVisibility() with '%s' sets the play arrow invisible`,
            (trackId) => {
        setPlayArrowVisibility(trackId, kShouldBeVisible);
        const trackSuffix = removeFirstCharacter(trackId);
        const playArrowId = kPrefixPlayArrow + trackSuffix
        const playArrow = document.getElementById(playArrowId);
        expect(playArrow.getAttribute(kStyle)).toBe(kVisibilityVisible);

        setPlayArrowVisibility(trackId, kShouldNotBeVisible);

        expect(playArrow.getAttribute(kStyle)).toBe(kVisibilityHiddenWithoutSemicolon);
    });
}); /* passing false to setPlayArrowVisibility() sets the play arrow of a track invisible */

describe(`passing true to setPlayArrowVisibility() sets the play arrow of a track visible`, () => {
    each(kTrackIds).it(
            `passing true to setPlayArrowVisibility() with '%s' sets the play arrow visible`,
            (trackId) => {
        const trackSuffix = removeFirstCharacter(trackId);
        const playArrowId = kPrefixPlayArrow + trackSuffix;
        const playArrow = document.getElementById(playArrowId);
        expect(playArrow.getAttribute(kStyle)).toBe(kVisibilityHiddenWithSemicolon);

        setPlayArrowVisibility(trackId, kShouldBeVisible);

        expect(playArrow.getAttribute(kStyle)).toBe(kVisibilityVisible);
    });
}); /* passing true to setPlayArrowVisibility() sets the play arrow of a track visible */

test(`passing undefined to setPlayArrowVisibility() performs no action`, () => {
    setPlayArrowVisibility(kTestTrackId, kShouldBeVisible);
    const playArrow = document.getElementById(kTestTrackPlayArrowId);
    expect(playArrow.getAttribute(kStyle)).toBe(kVisibilityVisible);

    setPlayArrowVisibility(kTestTrackId, undefined);

    expect(playArrow.getAttribute(kStyle)).toBe(kVisibilityVisible);
}); /* passing undefined to setPlayArrowVisibility() performs no action */
