/*-----------------------------------------------------------------------*\
 | File: mapFunctions.js                                                 |
 | Purpose: Defines functions related to the Winter Park ski resort map. |
\*-----------------------------------------------------------------------*/

var gDisplayCurrentTrailStatuses = true;
var gIsCirqueSledLiftOpen        = false;
var gTrailData                   = null;

function cacheTrailDataAndSetTrailColors(jsonData)
{
    gTrailData = jsonData;
    gIsCirqueSledLiftOpen = isCirqueSledLiftOpen();
    setTrailColors();
} // cacheTrailDataAndSetTrailColors()

function fetchAndSetTrailColorsAsync(jsonData)
{
    var bearerToken = jsonData.bearerToken;
    const url = `https://mtnpowder.com/feed/v3.json?bearer_token=${bearerToken}&resortId=5`
    return fetch(url)
        .then(getJsonFromResponseAsync)
        .then(cacheTrailDataAndSetTrailColors);
} // fetchAndSetTrailColorsAsync()

function getJsonFromResponseAsync(response)
{
    if (!response.ok)
    {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
} // getJsonFromResponseAsync()

function isCirqueSledLiftOpen()
{
    const mtnAreaIndexTheCirque = 6; // Hardcoded based on manual debugging.
    const mtnAreaTheCirque = gTrailData.MountainAreas[mtnAreaIndexTheCirque];
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
    fetch(kResortDataSourceUrl)
        .then(getJsonFromResponseAsync)
        .then(fetchAndSetTrailColorsAsync)
        .catch(error => {
        console.error("Error fetching JSON:", error);
    });
} // onPageLoad()

function setColorsOfTrailsFoundInJson()
{
    const mtnAreas = gTrailData.MountainAreas;
    for (var areaIndex = 0; areaIndex < mtnAreas.length; areaIndex++)
    {
        const trails = mtnAreas[areaIndex].Trails;
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
    const vca = document.getElementById(kTrailNameVasquezCirqueAccess);
    const nirvana = document.getElementById(kTrailNameNirvana);
    if (gIsCirqueSledLiftOpen || !gDisplayCurrentTrailStatuses)
    {
        vca.setAttribute(kAttributeNameStroke, kPolylineStrokeColorBlack);
        nirvana.setAttribute(kAttributeNameStroke, kPolylineStrokeColorBlack);
    }
    else
    {
        vca.setAttribute(kAttributeNameStroke, kPolylineStrokeColorRed);
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
