// Constant includes:
const constants = require('./environment/constants');
const kLightBlueFill  = constants.kLightBlueFill;
const kLightGreenFill = constants.kLightGreenFill;
const kStyle          = constants.kStyle;

// Map Function includes:
const mapFunctions = require('./environment/mapFunctions');
const isFilledLightBlue   = mapFunctions.isFilledLightBlue;
const onPageLoad          = mapFunctions.onPageLoad;
const setPolygonFillColor = mapFunctions.setPolygonFillColor;

// Test Function includes:
const testFunctions = require('./resources/testFunctions');
const getAValidPolylineElement = testFunctions.getAValidPolylineElement;

beforeEach(() => {
    onPageLoad();
}); // beforeEach()

test(`given a polyline with a fill that is light blue, isFilledLightBlue() returns true`, () => {
    const arbitraryPolyline = getAValidPolylineElement();
    setPolygonFillColor(arbitraryPolyline, kLightBlueFill);

    expect(isFilledLightBlue(arbitraryPolyline)).toBe(true);
}); /* given a polyline with a fill that is light blue, isFilledLightBlue() returns true */

test(`given a polyline with a fill that is not light blue, isFilledLightBlue() returns
        false`, () => {
    const arbitraryPolyline = getAValidPolylineElement();
    setPolygonFillColor(arbitraryPolyline, kLightGreenFill);
    expect(arbitraryPolyline.getAttribute(kStyle)).toBe(kLightGreenFill);

    expect(isFilledLightBlue(arbitraryPolyline)).toBe(false);
}); /* given a polyline with a fill that is not light blue, isFilledLightBlue() returns
        false */

test(`given a polyline with no fill, isFilledLightBlue() returns false`, () => {
    const arbitraryPolyline = getAValidPolylineElement();

    expect(isFilledLightBlue(arbitraryPolyline)).toBe(false);
}); /* given a polyline with no fill, isFilledLightBlue() returns false */
