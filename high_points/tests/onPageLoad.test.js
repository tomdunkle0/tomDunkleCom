// Constant includes:
const constants = require('./environment/constants');
const kCursorAttributeValuePointer = constants.kCursorAttributeValuePointer;
const kFirstCharIndex              = constants.kFirstCharIndex;
const kFirstChildIndex             = constants.kFirstChildIndex;
const kPrefixCheckBox              = constants.kPrefixCheckBox;
const kPrefixCheckMark             = constants.kPrefixCheckMark;
const kPrefixGreenState            = constants.kPrefixGreenState;
const kPrefixInsignificantIsland   = constants.kPrefixInsignificantIsland;
const kPrefixRedState              = constants.kPrefixRedState;
const kViewBox                     = constants.kViewBox;

// Test Constant includes:
const testConstants = require('./resources/testConstants');
const kLocalNamePolyline = testConstants.kLocalNamePolyline;

// Map Function includes:
const mapFunctions = require('./environment/mapFunctions');
const onPageLoad = mapFunctions.onPageLoad;

// Miscellaneous constants:
const kExpectedNumberOfCheckBoxes           = 50;
const kExpectedNumberOfCheckMarks           = 42;
const kExpectedNumberOfGreenPolylines       = 43; // 42 completed states + Michigan upper peninsula.
const kExpectedNumberOfRedPolylines         = 12; // 8 incomplete states + Alaskan/Hawaiian islands.
const kExpectedNumberOfInsignificantIslands = 11; // 8 (Alaska) + 3 (Hawaii).

// Compound constants:
const kExpectedNumberOfTotalPolylines =
    kExpectedNumberOfCheckBoxes
  + kExpectedNumberOfCheckMarks
  + kExpectedNumberOfGreenPolylines
  + kExpectedNumberOfRedPolylines
  + kExpectedNumberOfInsignificantIslands
  + 1; // view_box

beforeEach(() => {
    onPageLoad();
}); // beforeEach()

// TODO: Consider whether this test overlaps with any of the larger matrices:
test(`calling onPageLoad() results in every green & red state and check mark/box having its cursor
        attribute set as desired`, () => {
    expectCursorAttributeIsSetAsDesiredForEachPolyline(getScalableVectorGraphic());
}); /* calling onPageLoad() results in every green & red state and check mark/box having its cursor
        attribute set as desired */

test(`calling onPageLoad() retrieves the desired number of polylines of each category`, () => {
    expectMapContainsDesiredCountOfEachTypeOfPolyline(getScalableVectorGraphic());
}); /* calling onPageLoad() retrieves the desired number of polylines of each category */

test(`calling onPageLoad() sets the map container to the maximum allowable height`, () => {
    // TODO
}); /* calling onPageLoad() sets the map container to the maximum allowable height */

function expectCursorAttributeIsSetAsDesiredForEachPolyline(scalableVectorGraphic)
{
    const svgChildren = scalableVectorGraphic.children;

    var numberOfTotalPolylines = 0;
    for (childIndex in svgChildren)
    {
        const child = svgChildren[childIndex];
        if (child.localName === kLocalNamePolyline)
        {
            ++numberOfTotalPolylines;
            const polylineId = child.id;
            switch (polylineId.charAt(kFirstCharIndex))
            {
                case kPrefixCheckMark:
                case kPrefixGreenState:
                {
                    expect(child.attributes.cursor.value).toBe(kCursorAttributeValuePointer);
                    break;
                }
                case kPrefixCheckBox:
                case kPrefixInsignificantIsland:
                case kPrefixRedState:
                {
                    expect(child.attributes.cursor).toBe(undefined);
                    break;
                }
                default:
                {
                    expect(polylineId).toBe(kViewBox);
                    expect(child.attributes.cursor).toBe(undefined);
                    break;
                }
            }
        }
    }

    expect(numberOfTotalPolylines).toBe(kExpectedNumberOfTotalPolylines);
} // expectCursorAttributeIsSetAsDesiredForEachPolyline()

function expectMapContainsDesiredCountOfEachTypeOfPolyline(scalableVectorGraphic)
{
    const svgChildren = scalableVectorGraphic.children;

    var numberOfTotalPolylines = 0;
    var numberOfCheckBoxes = 0;
    var numberOfCheckMarksAndBoxes = 0;
    var numberOfCheckMarks = 0;
    var numberOfInsignificantIslands = 0;
    var numberOfGreenPolylines = 0;
    var numberOfRedPolylines = 0;
    for (childIndex in svgChildren)
    {
        const child = svgChildren[childIndex];
        if (child.localName === kLocalNamePolyline)
        {
            ++numberOfTotalPolylines;

            const polylineId = child.id;
            switch (polylineId.charAt(kFirstCharIndex))
            {
                case kPrefixCheckBox:            { ++numberOfCheckBoxes;              break; }
                case kPrefixCheckMark:           { ++numberOfCheckMarks;              break; }
                case kPrefixInsignificantIsland: { ++numberOfInsignificantIslands;    break; }
                case kPrefixGreenState:          { ++numberOfGreenPolylines;          break; }
                case kPrefixRedState:            { ++numberOfRedPolylines;            break; }
                default:                         { expect(polylineId).toBe(kViewBox); break; }
            }
        }
    }

    expect(numberOfTotalPolylines).toBe(kExpectedNumberOfTotalPolylines);
    expect(numberOfCheckBoxes).toBe(kExpectedNumberOfCheckBoxes);
    expect(numberOfCheckMarks).toBe(kExpectedNumberOfCheckMarks);
    expect(numberOfInsignificantIslands).toBe(kExpectedNumberOfInsignificantIslands);
    expect(numberOfGreenPolylines).toBe(kExpectedNumberOfGreenPolylines);
    expect(numberOfRedPolylines).toBe(kExpectedNumberOfRedPolylines);
} // expectMapContainsDesiredCountOfEachTypeOfPolyline()

function getScalableVectorGraphic()
{
    const bodyChildren = document.body.children;
    const oneChild = 1;
    expect(bodyChildren.length).toBe(oneChild);

    const mapContainer = bodyChildren[kFirstChildIndex];
    const expectedClassName = "flex-container";
    expect(mapContainer.className).toBe(expectedClassName);

    return mapContainer.children[kFirstChildIndex];
} // getScalableVectorGraphic()
