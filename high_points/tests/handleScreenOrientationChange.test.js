// Jest includes:
const each = require('jest-each').default;

// Constant includes:
const constants = require('./environment/constants');
const kFirstChildIndex = constants.kFirstChildIndex;
const kUnpopulated     = constants.kUnpopulated;

// Test Constant includes:
const testConstants = require('./resources/testConstants');
const kPropertyNameOrientation           = testConstants.kPropertyNameOrientation;
const kScreenOrientationLandscapePrimary = testConstants.kScreenOrientationLandscapePrimary;

// Map Function includes:
const mapFunctions = require('./environment/mapFunctions');
const handleScreenOrientationChange = mapFunctions.handleScreenOrientationChange;
const isUnpopulated                 = mapFunctions.isUnpopulated;
const onPageLoad                    = mapFunctions.onPageLoad;

// Miscellaneous constants:
const kScreenOrientationPortrait           = "portrait-primary";
const kScreenOrientationLandscapeSecondary = "landscape-secondary";

const kInitialAndExpectedNewScreenOrientationPairs = [
    [kScreenOrientationPortrait,           kScreenOrientationLandscapePrimary  ],
    [kScreenOrientationPortrait,           kScreenOrientationLandscapeSecondary],
    [kScreenOrientationLandscapePrimary,   kScreenOrientationLandscapeSecondary],
    [kScreenOrientationLandscapePrimary,   kScreenOrientationPortrait          ],
    [kScreenOrientationLandscapeSecondary, kScreenOrientationLandscapePrimary  ],
    [kScreenOrientationLandscapeSecondary, kScreenOrientationPortrait          ]
];

beforeEach(() => {
    window.orientation = kUnpopulated;

    expect(isUnpopulated(kPropertyNameOrientation)).toBe(false);
    expect(isUnpopulated(kScreenOrientationLandscapePrimary)).toBe(false);
}); // beforeEach()

describe(`calling handleScreenOrientationChange() updates the current screen orientation`, () => {
    each(kInitialAndExpectedNewScreenOrientationPairs).it(
            `calling handleScreenOrientationChange() when reorienting from '%s' to '%s' updates the
            current screen orientation`,
            (initialScreenOrientation, newScreenOrientation) => {
        setInitialScreenOrientationAndLoadPage(initialScreenOrientation);
        expect(getCurrentScreenOrientation()).toBe(initialScreenOrientation);

        window.orientation = newScreenOrientation;
        handleScreenOrientationChange();

        expect(getCurrentScreenOrientation()).toBe(newScreenOrientation);
    });
}); /* calling handleScreenOrientationChange() updates the current screen orientation */

function getCurrentScreenOrientation()
{
    const mapContainer = document.body.children[kFirstChildIndex];
    return mapContainer.currentScreenOrientation;
} // getCurrentScreenOrientation()

function setInitialScreenOrientationAndLoadPage(initialScreenOrientation)
{
    const obj = window;
    const prop = kPropertyNameOrientation;
    const descriptor = { value: initialScreenOrientation, writable: true };
    Object.defineProperty(obj, prop, descriptor);
    onPageLoad();
    expect(window.orientation).toBe(initialScreenOrientation);
} // setInitialScreenOrientationAndLoadPage()
