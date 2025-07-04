// Constant includes:
const constants = require('./environment/constants');
const kLightBlueFill     = constants.kLightBlueFill;
const kMichiganMainland  = constants.kMichiganMainland;
const kMichiganPeninsula = constants.kMichiganPeninsula;
const kStyle             = constants.kStyle;

// Map Function includes:
const mapFunctions = require('./environment/mapFunctions');
const matchLightBlueFillForTwoPolylines = mapFunctions.matchLightBlueFillForTwoPolylines;
const onPageLoad                        = mapFunctions.onPageLoad;

// Test Function includes:
const testFunctions = require('./resources/testFunctions');
const simulateMouseHoveringOverState = testFunctions.simulateMouseHoveringOverState;

beforeEach(() => {
    onPageLoad();
}); // beforeEach()

test(`given a light blue first polyline and an unfilled second polyline,
        matchLightBlueFillForTwoPolylines() fills the unfilled polyline`, () => {
    const michiganMainland = simulateMouseHoveringOverState(kMichiganMainland);
    const michiganPeninsula = document.getElementById(kMichiganPeninsula);
    expect(michiganMainland.getAttribute(kStyle)).toBe(kLightBlueFill);
    expect(michiganPeninsula.getAttribute(kStyle)).toBe(null);

    matchLightBlueFillForTwoPolylines(kMichiganMainland, kMichiganPeninsula);

    expect(michiganMainland.getAttribute(kStyle)).toBe(kLightBlueFill);
    expect(michiganPeninsula.getAttribute(kStyle)).toBe(kLightBlueFill);
}); /* given a light blue first polyline and an unfilled second polyline,
        matchLightBlueFillForTwoPolylines() fills the unfilled polyline */

test(`given an unfilled first polyline and a light blue second polyline,
        matchLightBlueFillForTwoPolylines() fills the unfilled polyline`, () => {
    const michiganMainland = document.getElementById(kMichiganMainland);
    const michiganPeninsula = simulateMouseHoveringOverState(kMichiganPeninsula);
    expect(michiganMainland.getAttribute(kStyle)).toBe(null);
    expect(michiganPeninsula.getAttribute(kStyle)).toBe(kLightBlueFill);

    matchLightBlueFillForTwoPolylines(kMichiganMainland, kMichiganPeninsula);

    expect(michiganMainland.getAttribute(kStyle)).toBe(kLightBlueFill);
    expect(michiganPeninsula.getAttribute(kStyle)).toBe(kLightBlueFill);
}); /* given an unfilled first polyline and a light blue second polyline,
        matchLightBlueFillForTwoPolylines() fills the unfilled polyline */

test(`given two polylines with a light blue fill, matchLightBlueFillForTwoPolylines() performs no
        operation`, () => {
    const michiganMainland = simulateMouseHoveringOverState(kMichiganMainland);
    const michiganPeninsula = simulateMouseHoveringOverState(kMichiganPeninsula);
    expect(michiganMainland.getAttribute(kStyle)).toBe(kLightBlueFill);
    expect(michiganPeninsula.getAttribute(kStyle)).toBe(kLightBlueFill);

    matchLightBlueFillForTwoPolylines(kMichiganMainland, kMichiganPeninsula);

    expect(michiganMainland.getAttribute(kStyle)).toBe(kLightBlueFill);
    expect(michiganPeninsula.getAttribute(kStyle)).toBe(kLightBlueFill);
}); /* given two polylines with a light blue fill, matchLightBlueFillForTwoPolylines() performs no
        operation */

test(`given two polylines with no fill, matchLightBlueFillForTwoPolylines() performs no
        operation`, () => {
    const michiganMainland = document.getElementById(kMichiganMainland);
    const michiganPeninsula = document.getElementById(kMichiganPeninsula);
    expect(michiganMainland.getAttribute(kStyle)).toBe(null);
    expect(michiganPeninsula.getAttribute(kStyle)).toBe(null);

    matchLightBlueFillForTwoPolylines(kMichiganMainland, kMichiganPeninsula);

    expect(michiganMainland.getAttribute(kStyle)).toBe(null);
    expect(michiganPeninsula.getAttribute(kStyle)).toBe(null);
}); /* given two polylines with no fill, matchLightBlueFillForTwoPolylines() performs no
        operation */
