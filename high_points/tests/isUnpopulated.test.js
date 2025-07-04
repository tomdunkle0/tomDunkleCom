// Constant includes:
const constants = require('./environment/constants');
const kUnpopulated = constants.kUnpopulated;

// Map Function includes:
const mapFunctions = require('./environment/mapFunctions');
const isUnpopulated = mapFunctions.isUnpopulated;
const onPageLoad    = mapFunctions.onPageLoad;

// Test Function includes:
const testFunctions = require('./resources/testFunctions');
const getAValidPolylineElement = testFunctions.getAValidPolylineElement;

test(`given a null element, isUnpopulated() returns true`, () => {
    expect(isUnpopulated(null)).toBe(true);
}); /* given a null element, isUnpopulated() returns true */

test(`given a valid polyline, isUnpopulated() returns false`, () => {
    onPageLoad();
    const arbitraryPolyline = getAValidPolylineElement();

    expect(isUnpopulated(arbitraryPolyline)).toBe(false);
}); /* given a valid polyline, isUnpopulated() returns false */

test(`given an empty string, isUnpopulated() returns true`, () => {
    expect(isUnpopulated(kUnpopulated)).toBe(true);
}); /* given an empty string, isUnpopulated() returns true */

test(`given an undefined element, isUnpopulated() returns true`, () => {
    expect(isUnpopulated(undefined)).toBe(true);
}); /* given an undefined element, isUnpopulated() returns true */
