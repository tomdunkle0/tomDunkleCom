// Jest includes:
const each = require('jest-each').default;

// Constant includes:
const constants = require('./environment/constants');
const kConnecticut          = constants.kConnecticut;
const kConnecticutCheckMark = constants.kConnecticutCheckMark;
const kMichiganCheckBox     = constants.kMichiganCheckBox;
const kMichiganCheckMark    = constants.kMichiganCheckMark;
const kMichiganMainland     = constants.kMichiganMainland;
const kMichiganPeninsula    = constants.kMichiganPeninsula;
const kPrefixGreenState     = constants.kPrefixGreenState;
const kStyle                = constants.kStyle;
const kVisibilityHidden     = constants.kVisibilityHidden;
const kVisibilityVisible    = constants.kVisibilityVisible;

// Map Function includes:
const mapFunctions = require('./environment/mapFunctions');
const isUnpopulated
    = mapFunctions.isUnpopulated;
const onChangeValueOfSliderThumb
    = mapFunctions.onChangeValueOfSliderThumb;
const onPageLoad
    = mapFunctions.onPageLoad;
const updateCheckMarkAndBoxToMatchStateFillColor
    = mapFunctions.updateCheckMarkAndBoxToMatchStateFillColor;

// Test Constant includes:
const testConstants = require('./resources/testConstants');
const kConnecticutCheckBox      = testConstants.kConnecticutCheckBox;
const kUnpopulatedInputs        = testConstants.kUnpopulatedInputs;
const kYearSliderValueAfter2018 = testConstants.kYearSliderValueAfter2018;

// Test Function includes:
const testFunctions = require('./resources/testFunctions');
const changeValueOfSliderThumb = testFunctions.changeValueOfSliderThumb;

// Miscellaneous constants:
const kHighPointed            = true;
const kIdOfCheckBoxUnderTest  = kConnecticutCheckBox;
const kIdOfCheckMarkUnderTest = kConnecticutCheckMark;
const kIdOfStateUnderTest     = kConnecticut;
const kNotHighPointed         = false;

beforeAll(() => {
    // If kYearSliderValueAfter2018 is undefined, tests can still pass because
    //  applying an unpopulated value to an object property results in defaulting
    //  to the midpoint, which is actually 2018 on the scale of 2014 to 2022.
    expect(isUnpopulated(kYearSliderValueAfter2018)).toBe(false);
}); // beforeAll()

beforeEach(() => {
    onPageLoad();
}); // beforeEach()

test(`calling updateCheckMarkAndBoxToMatchStateFillColor() with a bogus stateId performs no
        operation`, () => {
    const checkBoxUnderTest = document.getElementById(kIdOfCheckBoxUnderTest);
    const checkMarkUnderTest = document.getElementById(kIdOfCheckMarkUnderTest);
    const bogusStateName = "Bogus";
    const bogusStateId = kPrefixGreenState + bogusStateName;
    expect(checkBoxUnderTest.getAttribute(kStyle)).toBe(null);
    expect(checkMarkUnderTest.getAttribute(kStyle)).toBe(null);

    updateCheckMarkAndBoxToMatchStateFillColor(bogusStateId, kHighPointed);

    expect(checkBoxUnderTest.getAttribute(kStyle)).toBe(null);
    expect(checkMarkUnderTest.getAttribute(kStyle)).toBe(null);
}); /* calling updateCheckMarkAndBoxToMatchStateFillColor() with a bogus stateId performs no
        operation */

test(`calling updateCheckMarkAndBoxToMatchStateFillColor() with a false
        highPointedWithinSliderRange sets the check box visible and the check mark hidden`, () => {
    const checkBoxUnderTest = document.getElementById(kIdOfCheckBoxUnderTest);
    const checkMarkUnderTest = document.getElementById(kIdOfCheckMarkUnderTest);
    expect(checkBoxUnderTest.getAttribute(kStyle)).toBe(null);
    expect(checkMarkUnderTest.getAttribute(kStyle)).toBe(null);

    updateCheckMarkAndBoxToMatchStateFillColor(kIdOfStateUnderTest, kNotHighPointed);

    expect(checkBoxUnderTest.getAttribute(kStyle)).toBe(kVisibilityVisible);
    expect(checkMarkUnderTest.getAttribute(kStyle)).toBe(kVisibilityHidden);
}); /* calling updateCheckMarkAndBoxToMatchStateFillColor() with a false
        highPointedWithinSliderRange sets the check box visible and the check mark hidden */

test(`calling updateCheckMarkAndBoxToMatchStateFillColor() with a true
        highPointedWithinSliderRange sets the check mark visible and the check box hidden`, () => {
    const checkBoxUnderTest = document.getElementById(kIdOfCheckBoxUnderTest);
    const checkMarkUnderTest = document.getElementById(kIdOfCheckMarkUnderTest);
    expect(checkBoxUnderTest.getAttribute(kStyle)).toBe(null);
    expect(checkMarkUnderTest.getAttribute(kStyle)).toBe(null);

    updateCheckMarkAndBoxToMatchStateFillColor(kIdOfStateUnderTest, kHighPointed);

    expect(checkBoxUnderTest.getAttribute(kStyle)).toBe(kVisibilityHidden);
    expect(checkMarkUnderTest.getAttribute(kStyle)).toBe(kVisibilityVisible);
}); /* calling updateCheckMarkAndBoxToMatchStateFillColor() with a true
        highPointedWithinSliderRange sets the check mark visible and the check box hidden */

describe(`calling updateCheckMarkAndBoxToMatchStateFillColor() with an unpopulated
            highPointedWithinSliderRange after moving the slider to before the state was high
            pointed performs no operation`, () => {
    each(kUnpopulatedInputs).it(
            `calling the function with '%s' for highPointedWithinSliderRange after setting the
            slider to after 2018 performs no operation`,
            (highPointed) => {
        changeValueOfSliderThumb(kYearSliderValueAfter2018);
        onChangeValueOfSliderThumb();
        const checkBoxUnderTest = document.getElementById(kIdOfCheckBoxUnderTest);
        const checkMarkUnderTest = document.getElementById(kIdOfCheckMarkUnderTest);
        expect(checkBoxUnderTest.getAttribute(kStyle)).toBe(kVisibilityVisible);
        expect(checkMarkUnderTest.getAttribute(kStyle)).toBe(kVisibilityHidden);

        updateCheckMarkAndBoxToMatchStateFillColor(kIdOfStateUnderTest, highPointed);

        expect(checkBoxUnderTest.getAttribute(kStyle)).toBe(kVisibilityVisible);
        expect(checkMarkUnderTest.getAttribute(kStyle)).toBe(kVisibilityHidden);
    });
}); /* calling updateCheckMarkAndBoxToMatchStateFillColor() with an unpopulated
        highPointedWithinSliderRange after moving the slider to before the state was high
        pointed performs no operation */

describe(`calling updateCheckMarkAndBoxToMatchStateFillColor() with an unpopulated
            highPointedWithinSliderRange input performs no operation`, () => {
    each(kUnpopulatedInputs).it(
            `calling the function with '%s' for highPointedWithinSliderRange performs no
            operation`,
            (highPointed) => {
        const checkBoxUnderTest = document.getElementById(kIdOfCheckBoxUnderTest);
        const checkMarkUnderTest = document.getElementById(kIdOfCheckMarkUnderTest);
        expect(checkBoxUnderTest.getAttribute(kStyle)).toBe(null);
        expect(checkMarkUnderTest.getAttribute(kStyle)).toBe(null);

        updateCheckMarkAndBoxToMatchStateFillColor(kIdOfStateUnderTest, highPointed);

        expect(checkBoxUnderTest.getAttribute(kStyle)).toBe(null);
        expect(checkMarkUnderTest.getAttribute(kStyle)).toBe(null);
    });
}); /* calling updateCheckMarkAndBoxToMatchStateFillColor() with an unpopulated
        highPointedWithinSliderRange input performs no operation */

describe(`calling updateCheckMarkAndBoxToMatchStateFillColor() with an unpopulated stateId after
            moving the slider to before the state was high pointed performs no operation`, () => {
    each(kUnpopulatedInputs).it(
            `calling the function with '%s' for stateId after setting the slider to after 2018
            performs no operation`,
            (stateId) => {
        changeValueOfSliderThumb(kYearSliderValueAfter2018);
        onChangeValueOfSliderThumb();
        const checkBoxUnderTest = document.getElementById(kIdOfCheckBoxUnderTest);
        const checkMarkUnderTest = document.getElementById(kIdOfCheckMarkUnderTest);
        expect(checkBoxUnderTest.getAttribute(kStyle)).toBe(kVisibilityVisible);
        expect(checkMarkUnderTest.getAttribute(kStyle)).toBe(kVisibilityHidden);

        updateCheckMarkAndBoxToMatchStateFillColor(stateId, kHighPointed);

        expect(checkBoxUnderTest.getAttribute(kStyle)).toBe(kVisibilityVisible);
        expect(checkMarkUnderTest.getAttribute(kStyle)).toBe(kVisibilityHidden);
    });
}); /* calling updateCheckMarkAndBoxToMatchStateFillColor() with an unpopulated stateId after
        moving the slider to before the state was high pointed performs no operation */

describe(`calling updateCheckMarkAndBoxToMatchStateFillColor() with an unpopulated stateId input
            performs no operation`, () => {
    each(kUnpopulatedInputs).it(
            `calling the function with '%s' for stateId performs no operation`,
            (stateId) => {
        const checkBoxUnderTest = document.getElementById(kIdOfCheckBoxUnderTest);
        const checkMarkUnderTest = document.getElementById(kIdOfCheckMarkUnderTest);
        expect(checkBoxUnderTest.getAttribute(kStyle)).toBe(null);
        expect(checkMarkUnderTest.getAttribute(kStyle)).toBe(null);

        updateCheckMarkAndBoxToMatchStateFillColor(stateId, kHighPointed);

        expect(checkBoxUnderTest.getAttribute(kStyle)).toBe(null);
        expect(checkMarkUnderTest.getAttribute(kStyle)).toBe(null);
    });
}); /* calling updateCheckMarkAndBoxToMatchStateFillColor() with an unpopulated stateId input
        performs no operation */

const michiganPolylines = [ kMichiganMainland, kMichiganPeninsula ];

describe(`calling updateCheckMarkAndBoxToMatchStateFillColor() with either part of Michigan and a
            false highPointedWithinSliderRange sets the check box visible and the check mark
            hidden`, () => {
    each(michiganPolylines).it(
            `calling the function with '%s' and a false highPointedWithinSliderRange sets the check
            box visible and the check mark hidden`,
            (polylineId) => {
        const michiganCheckBox = document.getElementById(kMichiganCheckBox);
        const michiganCheckMark = document.getElementById(kMichiganCheckMark);
        expect(michiganCheckBox.getAttribute(kStyle)).toBe(null);
        expect(michiganCheckMark.getAttribute(kStyle)).toBe(null);

        updateCheckMarkAndBoxToMatchStateFillColor(polylineId, kNotHighPointed);

        expect(michiganCheckBox.getAttribute(kStyle)).toBe(kVisibilityVisible);
        expect(michiganCheckMark.getAttribute(kStyle)).toBe(kVisibilityHidden);
    });
}); /* calling updateCheckMarkAndBoxToMatchStateFillColor() with either part of Michigan and a
        false highPointedWithinSliderRange sets the check box visible and the check mark
        hidden */

describe(`calling updateCheckMarkAndBoxToMatchStateFillColor() with either part of Michigan and a
            true highPointedWithinSliderRange sets the check mark visible and the check box
            hidden`, () => {
    each(michiganPolylines).it(
            `calling the function with '%s' and a true highPointedWithinSliderRange sets the check
            mark visible and the check box hidden`,
            (polylineId) => {
        const michiganCheckBox = document.getElementById(kMichiganCheckBox);
        const michiganCheckMark = document.getElementById(kMichiganCheckMark);
        expect(michiganCheckBox.getAttribute(kStyle)).toBe(null);
        expect(michiganCheckMark.getAttribute(kStyle)).toBe(null);

        updateCheckMarkAndBoxToMatchStateFillColor(polylineId, kHighPointed);

        expect(michiganCheckBox.getAttribute(kStyle)).toBe(kVisibilityHidden);
        expect(michiganCheckMark.getAttribute(kStyle)).toBe(kVisibilityVisible);
    });
}); /* calling updateCheckMarkAndBoxToMatchStateFillColor() with either part of Michigan and a
        true highPointedWithinSliderRange sets the check mark visible and the check box
        hidden */
