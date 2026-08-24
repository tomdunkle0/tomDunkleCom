/*-----------------------------------------------------------------------*\
 | File: mapFunctions.js                                                 |
 | Purpose: Defines functions related to the Winter Park ski resort map. |
\*-----------------------------------------------------------------------*/

var gDisplayCurrentTrailStatuses = true;
var gIsCirqueSledLiftOpen        = false;
var gTrailData                   = null;

function cacheTrailDataAndSetTrailColors(json)
{
    gTrailData = json;
    gIsCirqueSledLiftOpen = isCirqueSledLiftOpen(json);
    setTrailColors();
} // cacheTrailDataAndSetTrailColors()

function fetchAndSetTrailColorsAsync(json)
{
    const url = `https://mtnpowder.com/feed/v3.json?bearer_token=${json.bearerToken}&resortId=5`
    return fetch(url) // Asynchronous.
        .then(getJsonFromResponseAsync)
        .then(cacheTrailDataAndSetTrailColors);
} // fetchAndSetTrailColorsAsync()

function getJsonFromResponseAsync(response)
{
    if (!response.ok)
    {
        throw new Error(`Error getting JSON from web response! status: ${response.status}`);
    }
    return response.json(); // Asynchronous.
} // getJsonFromResponseAsync()

function isCirqueSledLiftOpen(json)
{
    const mtnAreaIndexTheCirque = 6; // Hardcoded based on manual debugging.
    const mtnAreaTheCirque = json.MountainAreas[mtnAreaIndexTheCirque];
    const onlyLiftIndex = 0; // Hardcoded based on manual debugging.
    return mtnAreaTheCirque.Lifts[onlyLiftIndex].Status === kTrailStatusOpen;
} // isCirqueSledLiftOpen()

// The response from mtnpowder has been found to have various formats for the 'closed' status.
function isTrailClosed(trailStatus)
{
    return kTrailStatusesClosed.includes(trailStatus);
} // isTrailClosed()

function onClickMap()
{
    gDisplayCurrentTrailStatuses = !gDisplayCurrentTrailStatuses;
    setTrailColors();
} // onClickMap()

function onPageLoad()
{
    document.body.innerHTML = getMapContent();
    const resortDataSourceUrl = "https://v4.mtnfeed.com/resorts/winter-park.json";
    fetch(resortDataSourceUrl) // Asynchronous.
        .then(getJsonFromResponseAsync)
        .then(fetchAndSetTrailColorsAsync)
        .catch(error => {
        console.error("Error getting and setting trail colors:", error);
    });
} // onPageLoad()

function setColorsOfTrailsFoundInJson()
{
    const mtnAreas = gTrailData.MountainAreas;
    for (var mtnAreaIndex = 0; mtnAreaIndex < mtnAreas.length; mtnAreaIndex++)
    {
        const trails = mtnAreas[mtnAreaIndex].Trails;
        for (var trailIndex = 0; trailIndex < trails.length; trailIndex++)
        {
            const trailData = trails[trailIndex];
            const trailPolyline = document.getElementById(trailData.Name);
            if (trailPolyline !== null)
            {
                if (trailData.Status === kTrailStatusOpen || !gDisplayCurrentTrailStatuses)
                {
                    setTrailColorBasedOnDifficulty(trailData.Difficulty, trailPolyline);
                }

                if (gDisplayCurrentTrailStatuses && isTrailClosed(trailData.Status))
                {
                    trailPolyline.setAttribute(kAttributeNameStroke, kPolylineStrokeColorRed);
                }
            }
        }
    }
} // setColorsOfTrailsFoundInJson()

function setColorsOfTrailsMissingFromJson()
{
    const vasquezCirqueAccess = document.getElementById(kTrailNameVasquezCirqueAccess);
    const nirvana = document.getElementById(kTrailNameNirvana);
    if (gIsCirqueSledLiftOpen || !gDisplayCurrentTrailStatuses)
    {
        vasquezCirqueAccess.setAttribute(kAttributeNameStroke, kPolylineStrokeColorBlack);
        nirvana.setAttribute(kAttributeNameStroke, kPolylineStrokeColorBlack);
    }
    else
    {
        vasquezCirqueAccess.setAttribute(kAttributeNameStroke, kPolylineStrokeColorRed);
        nirvana.setAttribute(kAttributeNameStroke, kPolylineStrokeColorRed);
    }
} // setColorsOfTrailsMissingFromJson()

function setTrailColors()
{
    setColorsOfTrailsFoundInJson();
    setColorsOfTrailsMissingFromJson();
} // setTrailColors()

function setTrailColorBasedOnDifficulty(trailDifficulty, trailPolyline)
{
    switch (trailDifficulty)
    {
        case kTrailDifficultyAdvancedIntermediate:
            trailPolyline.setAttribute(kAttributeNameStroke, kPolylineStrokeColorPurple);
            break;
        case kTrailDifficultyEasy:
            trailPolyline.setAttribute(kAttributeNameStroke, kPolylineStrokeColorGreen);
            break;
        case kTrailDifficultyExpert:
        case kTrailDifficultyExtremeTerrain:
            trailPolyline.setAttribute(kAttributeNameStroke, kPolylineStrokeColorBlack);
            break;
        case kTrailDifficultyIntermediate:
            trailPolyline.setAttribute(kAttributeNameStroke, kPolylineStrokeColorBlue);
            break;
    }
} // setTrailColorBasedOnDifficulty()
