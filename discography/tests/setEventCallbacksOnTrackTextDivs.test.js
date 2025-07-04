// Constant includes:
const constants = require('./environment/constants');
const kEventNameOnClick                 = constants.kEventNameOnClick;
const kEventNameOnMouseLeave            = constants.kEventNameOnMouseLeave;
const kEventNameOnMouseOver             = constants.kEventNameOnMouseOver;
const kEventNameOnTouchEnd              = constants.kEventNameOnTouchEnd;
const kEventNameOnTouchStart            = constants.kEventNameOnTouchStart;
const kFunctionCallOnTouchEnd           = constants.kFunctionCallOnTouchEnd;
const kFunctionCallOnTouchStart         = constants.kFunctionCallOnTouchStart;
const kFunctionCallMakeTextBlue         = constants.kFunctionCallMakeTextBlue;
const kFunctionCallMakeTextWhite        = constants.kFunctionCallMakeTextWhite;
const kOnlyChildIndex                   = constants.kOnlyChildIndex;
const kStyleSheetClassNameAlbumInfo     = constants.kStyleSheetClassNameAlbumInfo;
const kStyleSheetClassNameTrackDuration = constants.kStyleSheetClassNameTrackDuration;
const kStyleSheetClassNameTrackNumber   = constants.kStyleSheetClassNameTrackNumber;
const kStyleSheetClassNameTrackRow      = constants.kStyleSheetClassNameTrackRow;
const kStyleSheetClassNameTrackTitle    = constants.kStyleSheetClassNameTrackTitle;
const kTrackIds                         = constants.kTrackIds;

// Function includes:
const audioManager = require('./environment/audioManager');
const getFunctionCallStringForPlayTrack = audioManager.getFunctionCallStringForPlayTrack;
const isUnpopulated                     = audioManager.isUnpopulated;
const setEventCallbacksOnTrackTextDivs  = audioManager.setEventCallbacksOnTrackTextDivs;
const getDiscographyContent = require('./environment/getDiscographyContent');

beforeAll(() => {
    // If kEventNameOnClick, kEventNameOnMouseLeave, kEventNameOnMouseOver, kEventNameOnTouchEnd,
    //  kEventNameOnTouchStart, or are undefined in the current context, then tests will still pass
    //  because the same undefined constant(s) will be used in this test suite to evaluate what
    //  event strings were populated on each track text div.
    expect(isUnpopulated(kEventNameOnClick)).toBe(false);
    expect(isUnpopulated(kEventNameOnMouseLeave)).toBe(false);
    expect(isUnpopulated(kEventNameOnMouseOver)).toBe(false);
    expect(isUnpopulated(kEventNameOnTouchEnd)).toBe(false);
    expect(isUnpopulated(kEventNameOnTouchStart)).toBe(false);

    document.body.innerHTML = getDiscographyContent();
}); // beforeAll()

test(`calling setEventCallbacksOnTrackTextDivs() sets callback functions for touch and click events
        on each track text div`, () => {
    var eventCallbacksAreSet = false;
    validateEventValuesForAllTrackTextDivs(eventCallbacksAreSet);

    setEventCallbacksOnTrackTextDivs();

    eventCallbacksAreSet = true;
    validateEventValuesForAllTrackTextDivs(eventCallbacksAreSet);
}); /* calling setEventCallbacksOnTrackTextDivs() sets callback functions for touch and click
        events on each track text div */

function validateEventValuesForAllTrackTextDivs(eventCallbacksAreSet)
{
    const styleSheetClassNameFlexColumn = "flex-column";

    const zScrollColumn = document.body.children[kOnlyChildIndex];
    const zScrollColumnChildren = zScrollColumn.children;
    var child = null;
    var totalNumberOfDivs = 0;
    for (var zScrollColumnChildIndex in zScrollColumnChildren)
    {
        const albumChildren = zScrollColumnChildren[zScrollColumnChildIndex].children;
        for (var albumChildIndex in albumChildren)
        {
            child = albumChildren[albumChildIndex];
            if (child.className === kStyleSheetClassNameAlbumInfo)
            {
                const albumInfoChildren = child.children;
                for (var albumInfoChildIndex in albumInfoChildren)
                {
                    child = albumInfoChildren[albumInfoChildIndex];
                    if (child.className === styleSheetClassNameFlexColumn)
                    {
                        const flexColumnChildren = child.children;
                        for (var trackRowIndex in flexColumnChildren)
                        {
                            child = flexColumnChildren[trackRowIndex];
                            if (child.className === kStyleSheetClassNameTrackRow)
                            {
                                const trackRowChildren = child.children;
                                for (var trackRowChildIndex in trackRowChildren)
                                {
                                    child = trackRowChildren[trackRowChildIndex];
                                    if ( child.className === kStyleSheetClassNameTrackDuration
                                      || child.className === kStyleSheetClassNameTrackNumber
                                      || child.className === kStyleSheetClassNameTrackTitle
                                       )
                                    {
                                        ++totalNumberOfDivs;
                                        validateOnClickEventValue(child, eventCallbacksAreSet);
                                        validateOnMouseEventValues(eventCallbacksAreSet, child);
                                        validateOnTouchEventValues(eventCallbacksAreSet, child);
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }

    const numberOfDivsPerTrack = 3;
    const numberOfTracks = kTrackIds.length;
    const expectedTotalNumberOfDivs = numberOfDivsPerTrack * numberOfTracks;
    expect(totalNumberOfDivs).toBe(expectedTotalNumberOfDivs);
} // validateEventValuesForAllTrackTextDivs()

function validateOnClickEventValue(trackTextDiv, eventCallbacksAreSet)
{
    const textElement = trackTextDiv.children[kOnlyChildIndex];
    const functionCallString = getFunctionCallStringForPlayTrack(textElement);
    const expectedOnClickValue = eventCallbacksAreSet ? functionCallString : null;
    expect(trackTextDiv.getAttribute(kEventNameOnClick)).toBe(expectedOnClickValue);
} // validateOnClickEventValue()

function validateOnMouseEventValues(eventCallbacksAreSet, trackTextDiv)
{
    const expectedOnMouseLeaveValue = eventCallbacksAreSet ? kFunctionCallMakeTextWhite : null;
    const expectedOnMouseOverValue = eventCallbacksAreSet ? kFunctionCallMakeTextBlue : null;
    expect(trackTextDiv.getAttribute(kEventNameOnMouseLeave)).toBe(expectedOnMouseLeaveValue);
    expect(trackTextDiv.getAttribute(kEventNameOnMouseOver)).toBe(expectedOnMouseOverValue);
} // validateOnMouseEventValues()

function validateOnTouchEventValues(eventCallbacksAreSet, trackTextDiv)
{
    const expectedOnTouchStartValue = eventCallbacksAreSet ? kFunctionCallOnTouchStart : null;
    const expectedOnTouchEndValue = eventCallbacksAreSet ? kFunctionCallOnTouchEnd : null;
    expect(trackTextDiv.getAttribute(kEventNameOnTouchStart)).toBe(expectedOnTouchStartValue);
    expect(trackTextDiv.getAttribute(kEventNameOnTouchEnd)).toBe(expectedOnTouchEndValue);
} // validateOnTouchEventValues()
