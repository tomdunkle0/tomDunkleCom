// Constant includes:
const constants = require('./environment/constants');
const kCursorAttributeValuePointer = constants.kCursorAttributeValuePointer;
const kIndexFifthChild             = constants.kIndexFifthChild;
const kIndexFirstChar              = constants.kIndexFirstChar;
const kIndexFirstChild             = constants.kIndexFirstChild;
const kIndexFourthChild            = constants.kIndexFourthChild;
const kIndexSecondChild            = constants.kIndexSecondChild;
const kPositionRelative            = constants.kPositionRelative;
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
const kExpectedInitialHeight                = "0px";
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

test(`calling onPageLoad() sets the height attribute of the bottom bounding div`, () => {
    const mapContainer = document.body.children[kIndexFirstChild];
    const bottomBoundingDiv = mapContainer.children[kIndexFifthChild];
    const bottomBoundingDivInitialHeight = bottomBoundingDiv.style.height;
    expect(bottomBoundingDivInitialHeight).toBe(kExpectedInitialHeight);
}); /* calling onPageLoad() sets the height attribute of the bottom bounding div */

test(`calling onPageLoad() sets the height attribute of the map scalable vector graphic`, () => {
    const scalableVectorGraphic = getScalableVectorGraphic();
    const svgInitialHeight = scalableVectorGraphic.style.height;
    expect(svgInitialHeight).toBe(kExpectedInitialHeight);
}); /* calling onPageLoad() sets the height attribute of the map scalable vector graphic */

test(`calling onPageLoad() sets the height attribute of the top bounding div`, () => {
    const mapContainer = document.body.children[kIndexFirstChild];
    const topBoundingDiv = mapContainer.children[kIndexFirstChild];
    const topBoundingDivInitialHeight = topBoundingDiv.style.height;
    expect(topBoundingDivInitialHeight).toBe(kExpectedInitialHeight);
}); /* calling onPageLoad() sets the height attribute of the top bounding div */

test(`calling onPageLoad() sets the position attribute of each year div to relative`, () => {
    const mapContainer = document.body.children[kIndexFirstChild];
    const yearRow = mapContainer.children[kIndexFourthChild];
    const yearRowClassName = "year-row";
    expect(yearRow.className).toBe(yearRowClassName);
    expectPositionAttributeIsSetToRelativeForEachYearDiv(yearRow);
}); /* calling onPageLoad() sets the position attribute of each year div to relative */

test(`calling onPageLoad() sets the map container to the maximum allowable height`, () => {
    // TODO: https://github.com/tomdunkle0/tomDunkleCom/issues/34 (GitHub Issue #34)
    //        This means getting better test coverage of positionMapOnScreen(). Production code
    //        that uses screen properties like scrollWidth and scrollHeight currently cannot be
    //        tested, because the jest environment does not initialize such properties. In
    //        particular, this means that there is no test coverage at all for
    //        positionMapOnLandscapeScreen(). In order to have test coverage, I will need to set up
    //        a test framework that assigns a customized HTML set to document.body.innerHTML. The
    //        customized set should have those properties set, even though there is no physical
    //        screen (just a simulated, imaginary one). Doing this necessitates carefully defining
    //        the customized HTML in a way that it consumes the production HTML, so that I don't
    //        need to maintain both.
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
            switch (polylineId.charAt(kIndexFirstChar))
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
            switch (polylineId.charAt(kIndexFirstChar))
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

function expectPositionAttributeIsSetToRelativeForEachYearDiv(yearRow)
{
    const yearDivs = yearRow.children;
    const numberOfYearsShown = yearDivs.length;
    const expectedNumberOfYearsShown = 10;
    expect(numberOfYearsShown).toBe(expectedNumberOfYearsShown);
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

    const mapContainer = bodyChildren[kIndexFirstChild];
    const expectedClassName = "map-container";
    expect(mapContainer.className).toBe(expectedClassName);

    return mapContainer.children[kIndexSecondChild];
} // getScalableVectorGraphic()
