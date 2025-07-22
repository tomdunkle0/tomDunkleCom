// Constant includes:
const constants = require('./environment/constants');
const kCursorAttributeValuePointer = constants.kCursorAttributeValuePointer;
const kFirstCharIndex              = constants.kFirstCharIndex;
const kFirstChildIndex             = constants.kFirstChildIndex;
const kFourthChildIndex            = constants.kFourthChildIndex; // TODO: Make sure that this line is tested.
const kPositionRelative            = constants.kPositionRelative; // TODO: Make sure that this line is tested.
const kPrefixCheckBox              = constants.kPrefixCheckBox;
const kPrefixCheckMark             = constants.kPrefixCheckMark;
const kPrefixGreenState            = constants.kPrefixGreenState;
const kPrefixInsignificantIsland   = constants.kPrefixInsignificantIsland;
const kPrefixRedState              = constants.kPrefixRedState;
const kSecondChildIndex            = constants.kSecondChildIndex; // TODO: Make sure that this line is tested.
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

test(`calling onPageLoad() sets the position attribute of each year div to relative`, () => {
    const mapContainer = document.body.children[kFirstChildIndex]; // TODO -- TEST
    const yearRow = mapContainer.children[kFourthChildIndex]; // TODO: Make sure that this line is tested.
    const yearRowClassName = "year-row"; // TODO -- TEST
    expect(yearRow.className).toBe(yearRowClassName); // TODO -- TEST
    expectPositionAttributeIsSetToRelativeForEachYearDiv(yearRow); // TODO -- TEST
}); /* calling onPageLoad() sets the position attribute of each year div to relative */

test(`calling onPageLoad() sets the map container to the maximum allowable height`, () => {
    // TODO: Expand on this.
    //        This means getting better test coverage of positionMapOnScreen(). Production code
    //        that uses screen properties like scrollWidth and scrollHeight currently cannot be
    //        tested, because the jest environment does not initialize such properties. In order to
    //        have test coverage, I will need to set up a test framework that assigns a customized
    //        HTML set to document.body.innerHTML. The customized set should have those properties
    //        set, even though there is no physical screen (just a simulated, imaginary one). Doing
    //        this necessitates carefully defining the customized HTML in a way that it consumes
    //        the production HTML, so that I don't need to maintain both.
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

function expectPositionAttributeIsSetToRelativeForEachYearDiv(yearRow) // TODO -- TEST
{
    const yearDivs = yearRow.children; // TODO -- TEST
    const numberOfYearsShown = yearDivs.length; // TODO -- TEST
    const expectedNumberOfYearsShown = 10; // TODO -- TEST
    expect(numberOfYearsShown).toBe(expectedNumberOfYearsShown); // TODO -- TEST
    for (var i = 0; i < numberOfYearsShown; i++)
    {
        const yearDiv = yearDivs[i];
        expect(yearDiv.style.position).toBe(kPositionRelative);
    }
} // expectPositionAttributeIsSetToRelativeForEachYearDiv()

function getScalableVectorGraphic()
{
    const bodyChildren = document.body.children;
    const oneChild = 1;
    expect(bodyChildren.length).toBe(oneChild);

    const mapContainer = bodyChildren[kFirstChildIndex];
    const expectedClassName = "flex-container";
    expect(mapContainer.className).toBe(expectedClassName);

    return mapContainer.children[kSecondChildIndex]; // TODO: Make sure that this line is tested.
} // getScalableVectorGraphic()
