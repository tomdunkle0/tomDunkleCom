// Test Constant includes:
const testConstants = require('./resources/testConstants');
const kPropertyNameOrientation           = testConstants.kPropertyNameOrientation;
const kScreenOrientationLandscapePrimary = testConstants.kScreenOrientationLandscapePrimary;

// Map Function includes:
const mapFunctions = require('./environment/mapFunctions');
const isUnpopulated       = mapFunctions.isUnpopulated;
const onOrientationChange = mapFunctions.onOrientationChange;

test(`calling onOrientationChange() experimentally`, () => {
    expect(isUnpopulated(kPropertyNameOrientation)).toBe(false);
    expect(isUnpopulated(kScreenOrientationLandscapePrimary)).toBe(false);
    const obj = window;
    const prop = kPropertyNameOrientation;
    const descriptor = { value: kScreenOrientationLandscapePrimary };
    Object.defineProperty(obj, prop, descriptor);

    onOrientationChange(); // TODO: Update this test so that the action matters.

    expect(window.orientation).toBe(kScreenOrientationLandscapePrimary);
}); /* calling onOrientationChange() experimentally */
