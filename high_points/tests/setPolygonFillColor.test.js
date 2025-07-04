// Jest includes:
const each = require('jest-each').default;

// Constant includes:
const constants = require('./environment/constants');
const kLightBlueFill  = constants.kLightBlueFill;
const kLightGreenFill = constants.kLightGreenFill;
const kLightRedFill   = constants.kLightRedFill;
const kStyle          = constants.kStyle;

// Map Function includes:
const mapFunctions = require('./environment/mapFunctions');
const onPageLoad          = mapFunctions.onPageLoad;
const setPolygonFillColor = mapFunctions.setPolygonFillColor;

// Test Function includes:
const testFunctions = require('./resources/testFunctions');
const getAValidPolylineElement = testFunctions.getAValidPolylineElement;

const fillColors = [kLightBlueFill, kLightGreenFill, kLightRedFill];

describe(`given an arbitrary polyline, setPolygonFillColor() sets the polyline fill color as
            desired`, () => {
    each(fillColors).it(
            `case for setting the polyline fill color to '%s'`,
            (fillColor) => {
        onPageLoad();
        const arbitraryPolyline = getAValidPolylineElement();
        expect(arbitraryPolyline.getAttribute(kStyle)).toBe(null);

        setPolygonFillColor(arbitraryPolyline, fillColor);

        expect(arbitraryPolyline.getAttribute(kStyle)).toBe(fillColor);
    });
}); /* given an arbitrary polyline, setPolygonFillColor() sets the polyline fill color as
        desired */
