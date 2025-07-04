module.exports =
{
    changeValueOfSliderThumb,
    getAValidPolylineElement,
    goToPage,
    moveSliderToBeforeStateWasHighPointed,
    setPolygonFillColorLightBlue,
    simulateMouseHoveringOverState
};

/*------------------------------------------------------------------------------------------*\
 | File: high_points/tests/resources/testFunctions.js                                       |
 | Purpose: Defines common functions used by tests of the United States High Points module. |
\*------------------------------------------------------------------------------------------*/

// Constant includes:
const constants = require('../environment/constants');
const kLightBlueFill = constants.kLightBlueFill;
const kYearSliderId  = constants.kYearSliderId;

// Map Function includes:
const mapFunctions = require('../environment/mapFunctions');
const isUnpopulated       = mapFunctions.isUnpopulated;
const setPolygonFillColor = mapFunctions.setPolygonFillColor;

// Test Constant includes:
const testConstants = require('./testConstants');
const kArbitraryPolylineId      = testConstants.kArbitraryPolylineId;
const kLocalNamePolyline        = testConstants.kLocalNamePolyline;
const kYearSliderValueAfter2014 = testConstants.kYearSliderValueAfter2014;

function changeValueOfSliderThumb(sliderValue)
{
    expectSliderValueIsPopulated(sliderValue);
    const yearSlider = document.getElementById(kYearSliderId);
    yearSlider.value = sliderValue;
    return yearSlider;
} // changeValueOfSliderThumb()

// When writing to the year slider's 'value' property, passing an invalid number causes the
//  property to assume its default value, which is half of the range from its minimum to maximum
//  (e.g. a range of 2014-2022 means the property will be "2018"). This can cause tests to pass
//  because the slider is set incorrectly, in the event that the constant wasn't exported properly.
function expectSliderValueIsPopulated(sliderValue)
{
    expect(isUnpopulated(sliderValue)).toBe(false);
} // expectSliderValueIsPopulated()

function getAValidPolylineElement()
{
    const arbitraryPolyline = document.getElementById(kArbitraryPolylineId);
    expect(arbitraryPolyline.localName).toBe(kLocalNamePolyline);
    return arbitraryPolyline;
} // getAValidPolylineElement()

// Mock of production function goToPage().
function goToPage(relativeUrl)
{
    return relativeUrl;
} // goToPage()

function moveSliderToBeforeStateWasHighPointed(statePolylineId)
{
    const statePolyline = document.getElementById(statePolylineId);
    const yearThatTomHighPointedState = parseInt(statePolyline.attributes.year.value);
    const oneYear = 1;
    const yearBeforeYearThatTomHighPointedState = yearThatTomHighPointedState - oneYear;
    changeValueOfSliderThumb(yearBeforeYearThatTomHighPointedState.toString());
    const yearSliderValueAfter2014 = parseInt(kYearSliderValueAfter2014);
    expect(yearThatTomHighPointedState).toBeGreaterThan(yearSliderValueAfter2014);
} // moveSliderToBeforeStateWasHighPointed()

function setPolygonFillColorLightBlue(polygon)
{
    setPolygonFillColor(polygon, kLightBlueFill);
} // setPolygonFillColorLightBlue()

function simulateMouseHoveringOverState(stateId)
{
    const state = document.getElementById(stateId);
    setPolygonFillColor(state, kLightBlueFill);
    return state;
} // simulateMouseHoveringOverState()
