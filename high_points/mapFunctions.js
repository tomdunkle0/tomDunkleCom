/*--------------------------------------------------------------------------*\
 | File: mapFunctions.js                                                    |
 | Purpose: Defines functions related to the United States High Points map. |
\*--------------------------------------------------------------------------*/

var g_LoadedGreenStates = kUnpopulated;
var g_YearSlider        = kUnpopulated;

function expandMapToMaximumAllowableSizeOnDisplay()
{
    const mapContainer = document.body.children[kFirstChildIndex];

    const secondChildIndex = 1;
    const slideContainer = mapContainer.children[secondChildIndex];
    const thirdChildIndex = 2;
    const flexRow = mapContainer.children[thirdChildIndex];
    const height = mapContainer.scrollHeight - slideContainer.scrollHeight - flexRow.scrollHeight;

    const scalableVectorGraphic = mapContainer.children[kFirstChildIndex];
    const styleAssignment = "height: " + height + ";";
    scalableVectorGraphic.setAttribute(kStyle, styleAssignment);
} // expandMapToMaximumAllowableSizeOnDisplay()

function getStateIdForClickedPolygon(polygonId)
{
    switch (polygonId)
    {
        case kAlabamaCheckMark:      { return kAlabama;                                  }
        case kArizonaCheckMark:      { return kArizona;                                  }
        case kArkansasCheckMark:     { return kArkansas;                                 }
        case kCaliforniaCheckMark:   { return kCalifornia;                               }
        case kColoradoCheckMark:     { return kColorado;                                 }
        case kIndianaCheckMark:      { return kIndiana;                                  }
        case kKansasCheckMark:       { return kKansas;                                   }
        case kKentuckyCheckMark:     { return kKentucky;                                 }
        case kLouisianaCheckMark:    { return kLouisiana;                                }
        case kMaineCheckMark:        { return kMaine;                                    }
        case kMissouriCheckMark:     { return kMissouri;                                 }
        case kNebraskaCheckMark:     { return kNebraska;                                 }
        case kNewHampshireCheckMark: { return kNewHampshire;                             }
        case kNewMexicoCheckMark:    { return kNewMexico;                                }
        case kNorthDakotaCheckMark:  { return kNorthDakota;                              }
        case kOhioCheckMark:         { return kOhio;                                     }
        case kRhodeIslandCheckMark:  { return kRhodeIsland;                              }
        case kSouthDakotaCheckMark:  { return kSouthDakota;                              }
        case kWisconsinCheckMark:    { return kWisconsin;                                }
        default:                     { return getStateIdForMousedOverPolygon(polygonId); }
    }
} // getStateIdForClickedPolygon()

function getStateIdForMousedOverPolygon(polygonId)
{
    switch (polygonId)
    {
        case kConnecticutCheckMark:   { return kMassachusetts;     }
        case kDelawareCheckMark:      { return kPennsylvania;      }
        case kFloridaCheckBox:        { return kFlorida;           }
        case kGeorgiaCheckMark:       { return kGeorgia;           }
        case kHawaiiCheckBox:         { return kHawaii;            }
        case kIllinoisCheckMark:      { return kWisconsin;         }
        case kIowaCheckBox:           { return kIowa;              }
        case kIowaCheckMark:          { return kIowa;              }
        case kMarylandCheckMark:      { return kMaryland;          }
        case kMassachusettsCheckMark: { return kVermont;           }
        case kMichiganCheckMark:      { return kMichiganPeninsula; }
        case kMinnesotaCheckMark:     { return kMinnesota;         }
        case kMississippiCheckMark:   { return kTennessee;         }
        case kMontanaCheckBox:        { return kMontana;           }
        case kNevadaCheckBox:         { return kNevada;            }
        case kNevadaCheckMark:        { return kNevada;            }
        case kNewJerseyCheckMark:     { return kNewYork;           }
        case kNewYorkCheckMark:       { return kNewYork;           }
        case kNorthCarolinaCheckBox:  { return kNorthCarolina;     }
        case kNorthCarolinaCheckMark: { return kNorthCarolina;     }
        case kOklahomaCheckMark:      { return kColorado;          }
        case kOregonCheckBox:         { return kOregon;            }
        case kPennsylvaniaCheckMark:  { return kPennsylvania;      }
        case kSouthCarolinaCheckMark: { return kSouthCarolina;     }
        case kTennesseeCheckBox:      { return kTennessee;         }
        case kTennesseeCheckMark:     { return kTennessee;         }
        case kTexasCheckMark:         { return kNewMexico;         }
        case kUtahCheckBox:           { return kUtah;              }
        case kUtahCheckMark:          { return kUtah;              }
        case kVermontCheckMark:       { return kVermont;           }
        case kVirginiaCheckBox:       { return kVirginia;          }
        case kVirginiaCheckMark:      { return kVirginia;          }
        case kWestVirginiaCheckMark:  { return kWestVirginia;      }
        default:                      { return kUnpopulated;       }
    }
} // getStateIdForMousedOverPolygon()

function goToPage(relativeUrl)
{
    window.location.href = relativeUrl;
    return relativeUrl;
} // goToPage()

function handleScreenOrientationChange()
{
    const mapContainer = document.body.children[kFirstChildIndex];
    if (window.orientation !== mapContainer.currentScreenOrientation)
    {
        onOrientationChange();
    }
} // handleScreenOrientationChange()

function isCheckMarkOrBox(polygonId)
{
    if (!isUnpopulated(polygonId))
    {
        const polygonIdPrefix = polygonId.charAt(kFirstCharIndex);
        return polygonIdPrefix === kPrefixCheckBox || polygonIdPrefix === kPrefixCheckMark;
    }
    else
    {
        return false;
    }
} // isCheckMarkOrBox()

function isFilledLightBlue(polygon)
{
    if (!isUnpopulated(polygon))
    {
        return polygon.getAttribute(kStyle) === kLightBlueFill;
    }
    else
    {
        return false;
    }
} // isFilledLightBlue()

function isInsignificantIsland(polygonId)
{
    if (!isUnpopulated(polygonId))
    {
        return polygonId.charAt(kFirstCharIndex) === kPrefixInsignificantIsland;
    }
    else
    {
        return false;
    }
} // isInsignificantIsland()

function isUnpopulated(element)
{
    return element === null || element === undefined || element === kUnpopulated;
} // isUnpopulated()

function matchLightBlueFillForHawaiianIslands()
{
    const hawaii = document.getElementById(kHawaii);
    const kauai  = document.getElementById(kKauai);
    const maui   = document.getElementById(kMaui);
    const oahu   = document.getElementById(kOahu);

    if (isFilledLightBlue(hawaii))
    {
        setPolygonFillColor(kauai, kLightBlueFill);
        setPolygonFillColor(maui,  kLightBlueFill);
        setPolygonFillColor(oahu,  kLightBlueFill);
    }
    else if (isFilledLightBlue(kauai))
    {
        setPolygonFillColor(hawaii, kLightBlueFill);
        setPolygonFillColor(maui,   kLightBlueFill);
        setPolygonFillColor(oahu,   kLightBlueFill);
    }
    else if (isFilledLightBlue(maui))
    {
        setPolygonFillColor(hawaii, kLightBlueFill);
        setPolygonFillColor(kauai,  kLightBlueFill);
        setPolygonFillColor(oahu,   kLightBlueFill);
    }
    else if (isFilledLightBlue(oahu))
    {
        setPolygonFillColor(hawaii, kLightBlueFill);
        setPolygonFillColor(kauai,  kLightBlueFill);
        setPolygonFillColor(maui,   kLightBlueFill);
    }
} // matchLightBlueFillForHawaiianIslands()

function matchLightBlueFillForTwoPolylines(firstPolylineId, secondPolylineId)
{
    const firstPolyline  = document.getElementById(firstPolylineId);
    const secondPolyline = document.getElementById(secondPolylineId);

    if ( !isUnpopulated(firstPolyline)
      && !isUnpopulated(secondPolyline)
       )
    {
        if (isFilledLightBlue(firstPolyline))
        {
            setPolygonFillColor(secondPolyline, kLightBlueFill);
        }
        else if (isFilledLightBlue(secondPolyline))
        {
            setPolygonFillColor(firstPolyline, kLightBlueFill);
        }
    }
} // matchLightBlueFillForTwoPolylines()

function onChangeValueOfSliderThumb()
{
    for (var stateIndex in g_LoadedGreenStates)
    {
        const state = g_LoadedGreenStates[stateIndex];
        const highPointedWithinSliderRange = tomHasHighPointedStateWithinSliderRange(state);
        setPolygonFillColor(state, highPointedWithinSliderRange ? kLightGreenFill : kLightRedFill);
        updateCheckMarkAndBoxToMatchStateFillColor(state.id, highPointedWithinSliderRange);
        state.attributes.cursor.value = highPointedWithinSliderRange ?
            kCursorAttributeValuePointer
          : kCursorAttributeValueAuto;
    }
} // onChangeValueOfSliderThumb()

function onClickMap(clickEvent)
{
    if (!isUnpopulated(clickEvent))
    {
        var clickedPolygon = clickEvent.target;
        if (!isUnpopulated(clickedPolygon))
        {
            var clickedPolygonId = clickedPolygon.id;
            if (isCheckMarkOrBox(clickedPolygonId))
            {
                clickedPolygonId = getStateIdForClickedPolygon(clickedPolygonId);
                clickedPolygon = document.getElementById(clickedPolygonId);
            }

            if (!isUnpopulated(clickedPolygonId))
            {
                if (tomHasHighPointedStateWithinSliderRange(clickedPolygon))
                {
                    const mapContainer = document.body.children[kFirstChildIndex];
                    clearInterval(mapContainer.orientationChangeIntervalId);
                    mapContainer.orientationChangeIntervalId = kUnpopulated;

                    const stateId = ( clickedPolygonId === kMichiganMainland
                                   || clickedPolygonId === kMichiganPeninsula
                                    ) ?
                        kStateNameMichigan
                      : clickedPolygonId.substr(kSecondCharIndex);
                    return goToPage(kDirectoryNameHighPoints + stateId + kFileExtensionHtml);
                }
            }
        }
    }

    return null;
} // onClickMap()

function onMouseCrossingBorder(mouseEvent)
{
    const mapContainer = document.body.children[kFirstChildIndex];
    const mostRecentBlueStateId = mapContainer.mostRecentBlueStateId;
    const currentBlueStateId = updateAndGetCurrentBlueState(mouseEvent, mostRecentBlueStateId);
    if (currentBlueStateId !== null)
    {
        mapContainer.mostRecentBlueStateId = currentBlueStateId;
    }

    matchLightBlueFillForTwoPolylines(kAlaskaMainland, kKodiakIsland);
    matchLightBlueFillForTwoPolylines(kMichiganMainland, kMichiganPeninsula);
    matchLightBlueFillForHawaiianIslands();
} // onMouseCrossingBorder()

function onPageLoad()
{
    onOrientationChange();
    const mapContainer = document.body.children[kFirstChildIndex];
    const func = handleScreenOrientationChange;
    const milliseconds = 500;
    mapContainer.orientationChangeIntervalId = setInterval(func, milliseconds);
} // onPageLoad()

function onOrientationChange()
{
    document.body.innerHTML = getMapContent();

    g_LoadedGreenStates =
    [
        document.getElementById(kAlabama          ),
        document.getElementById(kArizona          ),
        document.getElementById(kArkansas         ),
        document.getElementById(kColorado         ),
        document.getElementById(kConnecticut      ),
        document.getElementById(kCalifornia       ),
        document.getElementById(kDelaware         ),
        document.getElementById(kGeorgia          ),
        document.getElementById(kIllinois         ),
        document.getElementById(kIndiana          ),
        document.getElementById(kIowa             ),
        document.getElementById(kKansas           ),
        document.getElementById(kKentucky         ),
        document.getElementById(kLouisiana        ),
        document.getElementById(kMaine            ),
        document.getElementById(kMaryland         ),
        document.getElementById(kMassachusetts    ),
        document.getElementById(kMichiganMainland ),
        document.getElementById(kMichiganPeninsula),
        document.getElementById(kMinnesota        ),
        document.getElementById(kMississippi      ),
        document.getElementById(kMissouri         ),
        document.getElementById(kNebraska         ),
        document.getElementById(kNevada           ),
        document.getElementById(kNewHampshire     ),
        document.getElementById(kNewJersey        ),
        document.getElementById(kNewMexico        ),
        document.getElementById(kNewYork          ),
        document.getElementById(kNorthCarolina    ),
        document.getElementById(kNorthDakota      ),
        document.getElementById(kOhio             ),
        document.getElementById(kOklahoma         ),
        document.getElementById(kPennsylvania     ),
        document.getElementById(kRhodeIsland      ),
        document.getElementById(kSouthCarolina    ),
        document.getElementById(kSouthDakota      ),
        document.getElementById(kTennessee        ),
        document.getElementById(kTexas            ),
        document.getElementById(kUtah             ),
        document.getElementById(kVermont          ),
        document.getElementById(kVirginia         ),
        document.getElementById(kWestVirginia     ),
        document.getElementById(kWisconsin        )
    ];

    const mapContainer = document.body.children[kFirstChildIndex];
    mapContainer.currentScreenOrientation = window.orientation;
    g_YearSlider = document.getElementById(kYearSliderId);
    setYearSliderMarginsToHalfOfSlideContainerHeight(g_YearSlider);
    expandMapToMaximumAllowableSizeOnDisplay();
} // onOrientationChange()

function resetStateFillColorToDefault(polygonId)
{
    const polygon = document.getElementById(polygonId);
    if (!isUnpopulated(polygon))
    {
        if (tomHasHighPointedStateWithinSliderRange(polygon))
        {
            if ( polygonId === kMichiganMainland
              || polygonId === kMichiganPeninsula
               )
            {
                setPolygonFillColor(document.getElementById(kMichiganMainland),  kLightGreenFill);
                setPolygonFillColor(document.getElementById(kMichiganPeninsula), kLightGreenFill);
            }
            else
            {
                setPolygonFillColor(document.getElementById(polygonId), kLightGreenFill);
            }
        }
        else
        {
            if ( polygonId === kAlaskaMainland
              || polygonId === kKodiakIsland
               )
            {
                setPolygonFillColor(document.getElementById(kAlaskaMainland), kLightRedFill);
                setPolygonFillColor(document.getElementById(kKodiakIsland),   kLightRedFill);
            }
            else if ( polygonId === kHawaii
                   || polygonId === kKauai
                   || polygonId === kMaui
                   || polygonId === kOahu
                    )
            {
                setPolygonFillColor(document.getElementById(kHawaii), kLightRedFill);
                setPolygonFillColor(document.getElementById(kKauai),  kLightRedFill);
                setPolygonFillColor(document.getElementById(kMaui),   kLightRedFill);
                setPolygonFillColor(document.getElementById(kOahu),   kLightRedFill);
            }
            else if ( polygonId === kMichiganMainland
                   || polygonId === kMichiganPeninsula
                    )
            {
                setPolygonFillColor(document.getElementById(kMichiganMainland),  kLightRedFill);
                setPolygonFillColor(document.getElementById(kMichiganPeninsula), kLightRedFill);
            }
            else
            {
                setPolygonFillColor(document.getElementById(polygonId), kLightRedFill);
            }
        }
    }
} // resetStateFillColorToDefault()

function setPolygonFillColor(polygon, fillColor)
{
    if (!isUnpopulated(polygon)) polygon.setAttribute(kStyle, fillColor);
} // setPolygonFillColor()

function setYearSliderMarginsToHalfOfSlideContainerHeight(yearSlider)
{
    if (!isUnpopulated(yearSlider))
    {
        const slideContainer = yearSlider.parentElement;
        if (!isUnpopulated(slideContainer))
        {
            const slideContainerHeight = slideContainer.scrollHeight;
            if (!isUnpopulated(slideContainerHeight))
            {
                const styleAssignment = kMargin + (slideContainerHeight / 2) + kUnitNamePixels;
                yearSlider.setAttribute(kStyle, styleAssignment);
            }
        }
    }
} // setYearSliderMarginsToHalfOfSlideContainerHeight()

function tomHasHighPointedStateWithinSliderRange(state)
{
    if ( !isUnpopulated(state)
      && !isUnpopulated(state.attributes)
      && !isUnpopulated(state.attributes.year)
       )
    {
        const yearLeftOfSliderThumb = parseInt(g_YearSlider.value);
        const yearTomHighPointed = parseInt(state.attributes.year.value);
        return yearLeftOfSliderThumb >= yearTomHighPointed;
    }

    return false;
} // tomHasHighPointedStateWithinSliderRange()

function updateAndGetCurrentBlueState(mouseEvent, mostRecentBlueStateId)
{
    var currentBlueStateId = null;

    if (!isUnpopulated(mouseEvent))
    {
        const polygonUnderMouse = mouseEvent.target;
        if (polygonUnderMouse !== null)
        {
            const polygonUnderMouseId = polygonUnderMouse.id;
            if (!isInsignificantIsland(polygonUnderMouseId))
            {
                if (!isCheckMarkOrBox(polygonUnderMouseId))
                {
                    resetStateFillColorToDefault(mostRecentBlueStateId);

                    if (polygonUnderMouseId !== kViewBox)
                    {
                        setPolygonFillColor(polygonUnderMouse, kLightBlueFill);
                        currentBlueStateId = polygonUnderMouseId;
                    }
                }
                else
                {
                    const stateId = getStateIdForMousedOverPolygon(polygonUnderMouseId);

                    const state = document.getElementById(stateId);
                    if (state !== null)
                    {
                        resetStateFillColorToDefault(mostRecentBlueStateId);
                        setPolygonFillColor(state, kLightBlueFill);
                        currentBlueStateId = stateId;
                    }
                }
            }
        }
    }

    return currentBlueStateId;
} // updateAndGetCurrentBlueState()

function updateCheckMarkAndBoxToMatchStateFillColor(stateId, highPointedWithinSliderRange)
{
    if ( !isUnpopulated(stateId)
      && !isUnpopulated(highPointedWithinSliderRange)
       )
    {
        const stateName = stateId === kMichiganMainland || stateId === kMichiganPeninsula ?
            kStateNameMichigan
          : stateId.substr(kSecondCharIndex);
        const checkBox  = document.getElementById(kPrefixCheckBox + stateName);
        const checkMark = document.getElementById(kPrefixCheckMark + stateName);
        if ( !isUnpopulated(checkBox)
          && !isUnpopulated(checkMark)
           )
        {
            if (highPointedWithinSliderRange)
            {
                checkMark.setAttribute(kStyle, kVisibilityVisible);
                checkBox.setAttribute(kStyle, kVisibilityHidden);
            }
            else
            {
                checkMark.setAttribute(kStyle, kVisibilityHidden);
                checkBox.setAttribute(kStyle, kVisibilityVisible);
            }
        }
    }
} // updateCheckMarkAndBoxToMatchStateFillColor()
