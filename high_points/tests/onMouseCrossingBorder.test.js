// Jest includes:
const each = require('jest-each').default;

// Constant includes:
const constants = require('./environment/constants');
const kAlaskaMainland    = constants.kAlaskaMainland;
const kFirstChildIndex   = constants.kFirstChildIndex;
const kHawaii            = constants.kHawaii;
const kKauai             = constants.kKauai;
const kKodiakIsland      = constants.kKodiakIsland;
const kLightBlueFill     = constants.kLightBlueFill;
const kLightGreenFill    = constants.kLightGreenFill;
const kLightRedFill      = constants.kLightRedFill;
const kMaui              = constants.kMaui;
const kMichiganMainland  = constants.kMichiganMainland;
const kMichiganPeninsula = constants.kMichiganPeninsula;
const kOahu              = constants.kOahu;
const kStyle             = constants.kStyle;
const kViewBox           = constants.kViewBox;

// Map Function includes:
const mapFunctions = require('./environment/mapFunctions');
const isUnpopulated         = mapFunctions.isUnpopulated;
const onMouseCrossingBorder = mapFunctions.onMouseCrossingBorder;
const onPageLoad            = mapFunctions.onPageLoad;

// Test Constant includes:
const testConstants = require('./resources/testConstants');
const kAlaskaIslands1      = testConstants.kAlaskaIslands1;
const kAlaskaIslands2      = testConstants.kAlaskaIslands2;
const kAlaskaIslands3      = testConstants.kAlaskaIslands3;
const kAlaskaIslands4      = testConstants.kAlaskaIslands4;
const kAlaskaIslands5      = testConstants.kAlaskaIslands5;
const kAlaskaIslands6      = testConstants.kAlaskaIslands6;
const kAlaskaIslands7      = testConstants.kAlaskaIslands7;
const kAlaskaIslands8      = testConstants.kAlaskaIslands8;
const kArbitraryPolylineId = testConstants.kArbitraryPolylineId;
const kKaula               = testConstants.kKaula;
const kMolokai             = testConstants.kMolokai;
const kNiihau              = testConstants.kNiihau;

const insignificantIslandsOfAlaska = [
    kAlaskaIslands1,
    kAlaskaIslands2,
    kAlaskaIslands3,
    kAlaskaIslands4,
    kAlaskaIslands5,
    kAlaskaIslands6,
    kAlaskaIslands7,
    kAlaskaIslands8
];

const insignificantIslandsOfHawaii = [
    kKaula,
    kMolokai,
    kNiihau
];

const orderedSetsOfSignificantHawaiianIslands = [
    [kHawaii, kMaui,   kOahu, kKauai],
    [kMaui,   kHawaii, kOahu, kKauai],
    [kOahu,   kHawaii, kMaui, kKauai],
    [kKauai,  kHawaii, kMaui, kOahu ]
];

const pairsOfSignificantPolylinesOfAlaska = [
    [kAlaskaMainland, kKodiakIsland  ],
    [kKodiakIsland,   kAlaskaMainland]
];

const pairsOfSignificantPolylinesOfMichigan = [
    [kMichiganMainland,  kMichiganPeninsula],
    [kMichiganPeninsula, kMichiganMainland ]
];

const pairsOfSignificantPolylinesOfAlaskaAndMichigan
    = pairsOfSignificantPolylinesOfAlaska.concat(pairsOfSignificantPolylinesOfMichigan);

beforeAll(() => {
    // If kArbitraryPolylineId is undefined, tests can still pass because the actual value of
    //  mostRecentBlueStateId is undefined after the action occurs with an invalid event target.
    expect(isUnpopulated(kArbitraryPolylineId)).toBe(false);
}); // beforeAll()

beforeEach(() => {
    onPageLoad();
}); // beforeEach()

describe(`given a mouseEvent input whose target is a significant island of Hawaii,
            onMouseCrossingBorder() fills all four significant islands of Hawaii light
            blue`, () => {
    each(orderedSetsOfSignificantHawaiianIslands).it(
            `moving the mouse to '%s' also fills '%s', '%s', and '%s' light blue`,
            (targetPolylineId, firstRelatedPolylineId, secondRelatedPolylineId,
            thirdRelatedPolylineId) => {
        const targetPolyline = document.getElementById(targetPolylineId);
        const firstRelatedPolyline = document.getElementById(firstRelatedPolylineId);
        const secondRelatedPolyline = document.getElementById(secondRelatedPolylineId);
        const thirdRelatedPolyline = document.getElementById(thirdRelatedPolylineId);
        const mouseEvent = { target: targetPolyline };
        expect(targetPolyline.getAttribute(kStyle)).toBe(null);
        expect(firstRelatedPolyline.getAttribute(kStyle)).toBe(null);
        expect(secondRelatedPolyline.getAttribute(kStyle)).toBe(null);
        expect(thirdRelatedPolyline.getAttribute(kStyle)).toBe(null);

        onMouseCrossingBorder(mouseEvent);

        expect(targetPolyline.getAttribute(kStyle)).toBe(kLightBlueFill);
        expect(firstRelatedPolyline.getAttribute(kStyle)).toBe(kLightBlueFill);
        expect(secondRelatedPolyline.getAttribute(kStyle)).toBe(kLightBlueFill);
        expect(thirdRelatedPolyline.getAttribute(kStyle)).toBe(kLightBlueFill);
    });
}); /* given a mouseEvent input whose target is a significant island of Hawaii,
        onMouseCrossingBorder() fills all four significant islands of Hawaii light
        blue */

describe(`given a mouseEvent input whose target is a significant part of Alaska or is part of
            Michigan, onMouseCrossingBorder() fills both relevant polylines light blue`, () => {
    each(pairsOfSignificantPolylinesOfAlaskaAndMichigan).it(
            `moving the mouse to '%s' also fills '%s' light blue`,
            (targetPolylineId, relatedPolylineId) => {
        const targetPolyline = document.getElementById(targetPolylineId);
        const relatedPolyline = document.getElementById(relatedPolylineId);
        const mouseEvent = { target: targetPolyline };
        expect(targetPolyline.getAttribute(kStyle)).toBe(null);
        expect(relatedPolyline.getAttribute(kStyle)).toBe(null);

        onMouseCrossingBorder(mouseEvent);

        expect(targetPolyline.getAttribute(kStyle)).toBe(kLightBlueFill);
        expect(relatedPolyline.getAttribute(kStyle)).toBe(kLightBlueFill);
    });
}); /* given a mouseEvent input whose target is a significant part of Alaska or is part of
        Michigan, onMouseCrossingBorder() fills both relevant polylines light blue */

describe(`given a mouseEvent input whose target is an insignificant island of Alaska,
            onMouseCrossingBorder() performs no action`, () => {
    each(insignificantIslandsOfAlaska).it(
            `moving the mouse to '%s' performs no action`,
            (targetPolylineId) => {
        const targetPolyline = document.getElementById(targetPolylineId);
        const alaskaMainland = document.getElementById(kAlaskaMainland);
        const kodiakIsland = document.getElementById(kKodiakIsland);
        const alaskaIslands1 = document.getElementById(kAlaskaIslands1);
        const alaskaIslands2 = document.getElementById(kAlaskaIslands2);
        const alaskaIslands3 = document.getElementById(kAlaskaIslands3);
        const alaskaIslands4 = document.getElementById(kAlaskaIslands4);
        const alaskaIslands5 = document.getElementById(kAlaskaIslands5);
        const alaskaIslands6 = document.getElementById(kAlaskaIslands6);
        const alaskaIslands7 = document.getElementById(kAlaskaIslands7);
        const alaskaIslands8 = document.getElementById(kAlaskaIslands8);
        const mouseEvent = { target: targetPolyline };
        expect(targetPolyline.getAttribute(kStyle)).toBe(null);
        expect(alaskaMainland.getAttribute(kStyle)).toBe(null);
        expect(kodiakIsland.getAttribute(kStyle)).toBe(null);
        expect(alaskaIslands1.getAttribute(kStyle)).toBe(null);
        expect(alaskaIslands2.getAttribute(kStyle)).toBe(null);
        expect(alaskaIslands3.getAttribute(kStyle)).toBe(null);
        expect(alaskaIslands4.getAttribute(kStyle)).toBe(null);
        expect(alaskaIslands5.getAttribute(kStyle)).toBe(null);
        expect(alaskaIslands6.getAttribute(kStyle)).toBe(null);
        expect(alaskaIslands7.getAttribute(kStyle)).toBe(null);
        expect(alaskaIslands8.getAttribute(kStyle)).toBe(null);

        onMouseCrossingBorder(mouseEvent);

        expect(targetPolyline.getAttribute(kStyle)).toBe(null);
        expect(alaskaMainland.getAttribute(kStyle)).toBe(null);
        expect(kodiakIsland.getAttribute(kStyle)).toBe(null);
        expect(alaskaIslands1.getAttribute(kStyle)).toBe(null);
        expect(alaskaIslands2.getAttribute(kStyle)).toBe(null);
        expect(alaskaIslands3.getAttribute(kStyle)).toBe(null);
        expect(alaskaIslands4.getAttribute(kStyle)).toBe(null);
        expect(alaskaIslands5.getAttribute(kStyle)).toBe(null);
        expect(alaskaIslands6.getAttribute(kStyle)).toBe(null);
        expect(alaskaIslands7.getAttribute(kStyle)).toBe(null);
        expect(alaskaIslands8.getAttribute(kStyle)).toBe(null);
    });
}); /* given a mouseEvent input whose target is an insignificant island of Alaska,
        onMouseCrossingBorder() performs no action */

describe(`given a mouseEvent input whose target is an insignificant island of Hawaii,
            onMouseCrossingBorder() performs no action`, () => {
    each(insignificantIslandsOfHawaii).it(
            `moving the mouse to '%s' performs no action`,
            (targetPolylineId) => {
        const targetPolyline = document.getElementById(targetPolylineId);
        const hawaii = document.getElementById(kHawaii);
        const kauai = document.getElementById(kKauai);
        const kaula = document.getElementById(kKaula);
        const maui = document.getElementById(kMaui);
        const molokai = document.getElementById(kMolokai);
        const niihau = document.getElementById(kNiihau);
        const oahu = document.getElementById(kOahu);
        const mouseEvent = { target: targetPolyline };
        expect(targetPolyline.getAttribute(kStyle)).toBe(null);
        expect(hawaii.getAttribute(kStyle)).toBe(null);
        expect(kauai.getAttribute(kStyle)).toBe(null);
        expect(kaula.getAttribute(kStyle)).toBe(null);
        expect(maui.getAttribute(kStyle)).toBe(null);
        expect(molokai.getAttribute(kStyle)).toBe(null);
        expect(niihau.getAttribute(kStyle)).toBe(null);
        expect(oahu.getAttribute(kStyle)).toBe(null);

        onMouseCrossingBorder(mouseEvent);

        expect(targetPolyline.getAttribute(kStyle)).toBe(null);
        expect(hawaii.getAttribute(kStyle)).toBe(null);
        expect(kauai.getAttribute(kStyle)).toBe(null);
        expect(kaula.getAttribute(kStyle)).toBe(null);
        expect(maui.getAttribute(kStyle)).toBe(null);
        expect(molokai.getAttribute(kStyle)).toBe(null);
        expect(niihau.getAttribute(kStyle)).toBe(null);
        expect(oahu.getAttribute(kStyle)).toBe(null);
    });
}); /* given a mouseEvent input whose target is an insignificant island of Hawaii,
        onMouseCrossingBorder() performs no action */

describe(`given a mouseEvent input whose target is the view_box while an insignificant island of
            Alaska is moused over, onMouseCrossingBorder() performs no action`, () => {
    each(insignificantIslandsOfAlaska).it(
            `moving the mouse to the view_box from '%s' performs no action`,
            (targetPolylineId) => {
        onMouseCrossingBorderOfTargetPolyline(targetPolylineId);
        const alaskaMainland = document.getElementById(kAlaskaMainland);
        const kodiakIsland = document.getElementById(kKodiakIsland);
        const alaskaIslands1 = document.getElementById(kAlaskaIslands1);
        const alaskaIslands2 = document.getElementById(kAlaskaIslands2);
        const alaskaIslands3 = document.getElementById(kAlaskaIslands3);
        const alaskaIslands4 = document.getElementById(kAlaskaIslands4);
        const alaskaIslands5 = document.getElementById(kAlaskaIslands5);
        const alaskaIslands6 = document.getElementById(kAlaskaIslands6);
        const alaskaIslands7 = document.getElementById(kAlaskaIslands7);
        const alaskaIslands8 = document.getElementById(kAlaskaIslands8);
        const mouseEvent = createMoveToViewBoxMouseEvent();
        expect(alaskaMainland.getAttribute(kStyle)).toBe(null);
        expect(kodiakIsland.getAttribute(kStyle)).toBe(null);
        expect(alaskaIslands1.getAttribute(kStyle)).toBe(null);
        expect(alaskaIslands2.getAttribute(kStyle)).toBe(null);
        expect(alaskaIslands3.getAttribute(kStyle)).toBe(null);
        expect(alaskaIslands4.getAttribute(kStyle)).toBe(null);
        expect(alaskaIslands5.getAttribute(kStyle)).toBe(null);
        expect(alaskaIslands6.getAttribute(kStyle)).toBe(null);
        expect(alaskaIslands7.getAttribute(kStyle)).toBe(null);
        expect(alaskaIslands8.getAttribute(kStyle)).toBe(null);

        onMouseCrossingBorder(mouseEvent);

        expect(alaskaMainland.getAttribute(kStyle)).toBe(null);
        expect(kodiakIsland.getAttribute(kStyle)).toBe(null);
        expect(alaskaIslands1.getAttribute(kStyle)).toBe(null);
        expect(alaskaIslands2.getAttribute(kStyle)).toBe(null);
        expect(alaskaIslands3.getAttribute(kStyle)).toBe(null);
        expect(alaskaIslands4.getAttribute(kStyle)).toBe(null);
        expect(alaskaIslands5.getAttribute(kStyle)).toBe(null);
        expect(alaskaIslands6.getAttribute(kStyle)).toBe(null);
        expect(alaskaIslands7.getAttribute(kStyle)).toBe(null);
        expect(alaskaIslands8.getAttribute(kStyle)).toBe(null);
    });
}); /* given a mouseEvent input whose target is the view_box while an insignificant island of
        Alaska is moused over, onMouseCrossingBorder() performs no action */

describe(`given a mouseEvent input whose target is the view_box while an insignificant island of
            Hawaii is moused over, onMouseCrossingBorder() performs no action`, () => {
    each(insignificantIslandsOfHawaii).it(
            `moving the mouse to the view_box from '%s' performs no action`,
            (targetPolylineId) => {
        onMouseCrossingBorderOfTargetPolyline(targetPolylineId);
        const hawaii = document.getElementById(kHawaii);
        const kauai = document.getElementById(kKauai);
        const kaula = document.getElementById(kKaula);
        const maui = document.getElementById(kMaui);
        const molokai = document.getElementById(kMolokai);
        const niihau = document.getElementById(kNiihau);
        const oahu = document.getElementById(kOahu);
        const mouseEvent = createMoveToViewBoxMouseEvent();
        expect(hawaii.getAttribute(kStyle)).toBe(null);
        expect(kauai.getAttribute(kStyle)).toBe(null);
        expect(kaula.getAttribute(kStyle)).toBe(null);
        expect(maui.getAttribute(kStyle)).toBe(null);
        expect(molokai.getAttribute(kStyle)).toBe(null);
        expect(niihau.getAttribute(kStyle)).toBe(null);
        expect(oahu.getAttribute(kStyle)).toBe(null);

        onMouseCrossingBorder(mouseEvent);

        expect(hawaii.getAttribute(kStyle)).toBe(null);
        expect(kauai.getAttribute(kStyle)).toBe(null);
        expect(kaula.getAttribute(kStyle)).toBe(null);
        expect(maui.getAttribute(kStyle)).toBe(null);
        expect(molokai.getAttribute(kStyle)).toBe(null);
        expect(niihau.getAttribute(kStyle)).toBe(null);
        expect(oahu.getAttribute(kStyle)).toBe(null);
    });
}); /* given a mouseEvent input whose target is the view_box while an insignificant island of
        Hawaii is moused over, onMouseCrossingBorder() performs no action */

describe(`given a mouseEvent input whose target is the view_box while a significant part of Alaska
            is filled light blue, onMouseCrossingBorder() fills both the Alaska mainland and Kodiak
            Island light red`, () => {
    each(pairsOfSignificantPolylinesOfAlaska).it(
            `moving the mouse to the view_box from '%s' also fills '%s' light red`,
            (targetPolylineId, relatedPolylineId) => {
        const targetPolyline = onMouseCrossingBorderOfTargetPolyline(targetPolylineId);
        const relatedPolyline = document.getElementById(relatedPolylineId);
        const mouseEvent = createMoveToViewBoxMouseEvent();
        expect(targetPolyline.getAttribute(kStyle)).toBe(kLightBlueFill);
        expect(relatedPolyline.getAttribute(kStyle)).toBe(kLightBlueFill);

        onMouseCrossingBorder(mouseEvent);

        expect(targetPolyline.getAttribute(kStyle)).toBe(kLightRedFill);
        expect(relatedPolyline.getAttribute(kStyle)).toBe(kLightRedFill);
    });
}); /* given a mouseEvent input whose target is the view_box while a significant part of Alaska
        is filled light blue, onMouseCrossingBorder() fills both the Alaska mainland and Kodiak
        Island light red */

describe(`given a mouseEvent input whose target is the view_box while a significant part of
            Michigan is filled light blue, onMouseCrossingBorder() fills both the Michigan mainland
            and upper peninsula light green`, () => {
    each(pairsOfSignificantPolylinesOfMichigan).it(
            `moving the mouse to the view_box from '%s' also fills '%s' light green`,
            (targetPolylineId, relatedPolylineId) => {
        const targetPolyline = onMouseCrossingBorderOfTargetPolyline(targetPolylineId);
        const relatedPolyline = document.getElementById(relatedPolylineId);
        const mouseEvent = createMoveToViewBoxMouseEvent();
        expect(targetPolyline.getAttribute(kStyle)).toBe(kLightBlueFill);
        expect(relatedPolyline.getAttribute(kStyle)).toBe(kLightBlueFill);

        onMouseCrossingBorder(mouseEvent);

        expect(targetPolyline.getAttribute(kStyle)).toBe(kLightGreenFill);
        expect(relatedPolyline.getAttribute(kStyle)).toBe(kLightGreenFill);
    });
}); /* given a mouseEvent input whose target is the view_box while a significant part of
        Michigan is filled light blue, onMouseCrossingBorder() fills both the Michigan mainland
        and upper peninsula light green */

describe(`given a mouseEvent input whose target is the view_box while all four significant islands
            of Hawaii are filled light blue, onMouseCrossingBorder() fills all four significant
            islands of Hawaii light red`, () => {
    each(orderedSetsOfSignificantHawaiianIslands).it(
            `moving the mouse to the view_box from '%s' also fills '%s', '%s', and '%s' light red`,
            (targetPolylineId, firstRelatedPolylineId, secondRelatedPolylineId,
            thirdRelatedPolylineId) => {
        const targetPolyline = onMouseCrossingBorderOfTargetPolyline(targetPolylineId);
        const firstRelatedPolyline = document.getElementById(firstRelatedPolylineId);
        const secondRelatedPolyline = document.getElementById(secondRelatedPolylineId);
        const thirdRelatedPolyline = document.getElementById(thirdRelatedPolylineId);
        const mouseEvent = createMoveToViewBoxMouseEvent();
        expect(targetPolyline.getAttribute(kStyle)).toBe(kLightBlueFill);
        expect(firstRelatedPolyline.getAttribute(kStyle)).toBe(kLightBlueFill);
        expect(secondRelatedPolyline.getAttribute(kStyle)).toBe(kLightBlueFill);
        expect(thirdRelatedPolyline.getAttribute(kStyle)).toBe(kLightBlueFill);

        onMouseCrossingBorder(mouseEvent);

        expect(targetPolyline.getAttribute(kStyle)).toBe(kLightRedFill);
        expect(firstRelatedPolyline.getAttribute(kStyle)).toBe(kLightRedFill);
        expect(secondRelatedPolyline.getAttribute(kStyle)).toBe(kLightRedFill);
        expect(thirdRelatedPolyline.getAttribute(kStyle)).toBe(kLightRedFill);
    });
}); /* given a mouseEvent input whose target is the view_box while all four significant islands
        of Hawaii are filled light blue, onMouseCrossingBorder() fills all four significant
        islands of Hawaii light red */

test(`given a valid mouseEvent input, onMouseCrossingBorder() sets
        mapContainer.mostRecentBlueStateId to the id of the state polyline targeted by the
        mouseEvent`, () => {
    const mapContainer = document.body.children[kFirstChildIndex];
    const arbitraryPolyline = document.getElementById(kArbitraryPolylineId);
    const mouseEvent = { target: arbitraryPolyline };
    expect(mapContainer.mostRecentBlueStateId).toBe(undefined);

    onMouseCrossingBorder(mouseEvent);

    expect(mapContainer.mostRecentBlueStateId).toBe(kArbitraryPolylineId);
}); /* given a valid mouseEvent input, onMouseCrossingBorder() sets
        mapContainer.mostRecentBlueStateId to the id of the state polyline targeted by the
        mouseEvent */

function createMoveToViewBoxMouseEvent()
{
    const viewBox = document.getElementById(kViewBox);
    return { target: viewBox };
}

function onMouseCrossingBorderOfTargetPolyline(targetPolylineId)
{
    const targetPolyline = document.getElementById(targetPolylineId);
    const mouseEvent = { target: targetPolyline };
    onMouseCrossingBorder(mouseEvent);
    return targetPolyline;
}
