// Jest includes:
const each = require('jest-each').default;

// Constant includes:
const constants = require('./environment/constants');
const kMargin         = constants.kMargin;
const kStyle          = constants.kStyle;
const kUnitNamePixels = constants.kUnitNamePixels;
const kYearSliderId   = constants.kYearSliderId;

// Map Function includes:
const mapFunctions = require('./environment/mapFunctions');
const isUnpopulated
    = mapFunctions.isUnpopulated;
const onPageLoad
    = mapFunctions.onPageLoad;
const setYearSliderMarginsToHalfOfSlideContainerHeight
    = mapFunctions.setYearSliderMarginsToHalfOfSlideContainerHeight;

// Test Constant includes:
const testConstants = require('./resources/testConstants');
const kUnpopulatedInputs = testConstants.kUnpopulatedInputs;

// Miscellaneous constants:
const kArbitrarySlideContainerHeightInPixels = "100";
const kZero                                  = "0";
const kZeroPixelMarginStyle                  = kMargin + kZero + kUnitNamePixels;

beforeAll(() => {
    // If kUnitNamePixels is undefined, tests can still pass because the actual
    //  and expected strings involving the constant both lose the same suffix.
    expect(isUnpopulated(kUnitNamePixels)).toBe(false);
}); // beforeAll()

beforeEach(() => {
    onPageLoad();
}); // beforeEach()

test(`calling setYearSliderMarginsToHalfOfSlideContainerHeight() sets the year slider margin to
        half of the slide container height`, () => {
    const yearSlider = mockSlideContainerHeight(kArbitrarySlideContainerHeightInPixels);
    expect(yearSlider.getAttribute(kStyle)).toBe(kZeroPixelMarginStyle);

    setYearSliderMarginsToHalfOfSlideContainerHeight(yearSlider);

    const slideContainerHeight = parseInt(kArbitrarySlideContainerHeightInPixels);
    expect(slideContainerHeight).toBeGreaterThan(parseInt(kZero));
    expectYearSliderMarginIsHalfOfSlideContainerHeight(slideContainerHeight, yearSlider);
}); /* calling setYearSliderMarginsToHalfOfSlideContainerHeight() sets the year slider margin to
        half of the slide container height */

test(`calling setYearSliderMarginsToHalfOfSlideContainerHeight() with an input whose parentElement
        is invalid performs no operation`, () => {
    const yearSlider = document.getElementById(kYearSliderId);
    const fakeSlider = { parentElement: null };
    expect(yearSlider.getAttribute(kStyle)).toBe(kZeroPixelMarginStyle);

    setYearSliderMarginsToHalfOfSlideContainerHeight(fakeSlider);

    expect(yearSlider.getAttribute(kStyle)).toBe(kZeroPixelMarginStyle);
}); /* calling setYearSliderMarginsToHalfOfSlideContainerHeight() with an input whose parentElement
        is invalid performs no operation */

// TODO: Standardize whether the word "input" is or isn't used in these test case descriptions.
//        This would involve work in updateCheckMarkAndBoxToMatchStateFillColor.test.js, and
//        likely some other suites, too.
describe(`calling setYearSliderMarginsToHalfOfSlideContainerHeight() with an invalid input
            parameter performs no operation`, () => {
    each(kUnpopulatedInputs).it(
            `calling the function with invalid input '%s' performs no operation`,
            (invalidSlider) => {
        const yearSlider = mockSlideContainerHeight(kArbitrarySlideContainerHeightInPixels);
        expect(yearSlider.getAttribute(kStyle)).toBe(kZeroPixelMarginStyle);

        setYearSliderMarginsToHalfOfSlideContainerHeight(invalidSlider);

        expect(yearSlider.getAttribute(kStyle)).toBe(kZeroPixelMarginStyle);
    });
}); /* calling setYearSliderMarginsToHalfOfSlideContainerHeight() with an invalid input
        parameter performs no operation */

describe(`calling setYearSliderMarginsToHalfOfSlideContainerHeight() while the slide
            container height is unset performs no operation`, () => {
    each(kUnpopulatedInputs).it(
            `calling the function while the slide container height is '%s' performs no operation`,
            (invalidHeight) => {
        const yearSlider = mockSlideContainerHeight(invalidHeight);
        expect(yearSlider.getAttribute(kStyle)).toBe(kZeroPixelMarginStyle);

        setYearSliderMarginsToHalfOfSlideContainerHeight(yearSlider);

        expect(yearSlider.getAttribute(kStyle)).toBe(kZeroPixelMarginStyle);
    });
}); /* calling setYearSliderMarginsToHalfOfSlideContainerHeight() while the height of the slide
        container is unset performs no operation */

function expectYearSliderMarginIsHalfOfSlideContainerHeight(slideContainerHeight, yearSlider)
{
    const half = 0.5;
    const halfOfSlideContainerHeight = (half * slideContainerHeight).toString();
    const expectedMarginStyle = kMargin + halfOfSlideContainerHeight + kUnitNamePixels;
    expect(yearSlider.getAttribute(kStyle)).toBe(expectedMarginStyle);
} // expectYearSliderMarginIsHalfOfSlideContainerHeight()

function mockSlideContainerHeight(height)
{
    const yearSlider = document.getElementById(kYearSliderId);
    const slideContainer = yearSlider.parentElement;
    const methodName = "scrollHeight";
    const accessType = "get";
    const mockFunction = jest.spyOn(slideContainer, methodName, accessType);
    mockFunction.mockImplementation(() => height);
    return yearSlider;
} // mockSlideContainerHeight()
