/*-----------------------------------------------------------------------*\
 | File: mapFunctions.js                                                 |
 | Purpose: Defines functions related to the Winter Park ski resort map. |
\*-----------------------------------------------------------------------*/

var gDisplayCurrentStatus = true;
var gTrailData = null;

function assignColorsOfTrailsFoundInJson()
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
                if ((trailData.Status === kTrailStatusOpen) || (!gDisplayCurrentStatus))
                {
                    assignTrailColorBasedOnDifficulty(trailData.Difficulty, trailPolyline);
                }

                if (gDisplayCurrentStatus)
                {
                    const trailStatus = trailData.Status;
                    if ((trailStatus === kTrailStatusClosed1)
                     || (trailStatus === kTrailStatusClosed2)
                     || (trailStatus === kTrailStatusClosed3)
                    )
                    {
                        trailPolyline.setAttribute(kAttributeNameStroke, kPolylineStrokeColorRed);
                    }
                }
            }
        }
    }
} // assignColorsOfTrailsFoundInJson()

function assignColorsOfTrailsMissingFromJson()
{
    const vca = document.getElementById(kTrailNameVasquezCirqueAccess);
    const nirvana = document.getElementById(kTrailNameNirvana);
    if (isCirqueSledLiftOpen() || !gDisplayCurrentStatus)
    {
        vca.setAttribute(kAttributeNameStroke, kPolylineStrokeColorBlack);
        nirvana.setAttribute(kAttributeNameStroke, kPolylineStrokeColorBlack);
    }
    else
    {
        vca.setAttribute(kAttributeNameStroke, kPolylineStrokeColorRed);
        nirvana.setAttribute(kAttributeNameStroke, kPolylineStrokeColorRed);
    }
} // assignColorsOfTrailsMissingFromJson()

function assignTrailColorBasedOnDifficulty(trailDifficulty, trailPolyline)
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
} // assignTrailColorBasedOnDifficulty()

function assignTrailColors()
{
    assignColorsOfTrailsFoundInJson();
    assignColorsOfTrailsMissingFromJson();
} // assignTrailColors()

function assignTrailColorsAsync(jsonData)
{
    var bearerToken = jsonData.bearerToken;
    const url = `https://mtnpowder.com/feed/v3.json?bearer_token=${bearerToken}&resortId=5`
    fetch(url)
        .then(getJsonFromResponse)
        .then(jsonData => {
        gTrailData = jsonData;
        assignTrailColors();
    });
} // assignTrailColorsAsync()

function getJsonFromResponse(response)
{
    if (!response.ok)
    {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
} // getJsonFromResponse()

function isCirqueSledLiftOpen()
{
    return gTrailData.MountainAreas[6].Lifts[0].Status === kTrailStatusOpen;
} // isCirqueSledLiftOpen()

function onClickMap()
{
    gDisplayCurrentStatus = !gDisplayCurrentStatus;
    assignTrailColors();
} // onClickMap()

function onPageLoad()
{
    document.body.innerHTML = getMapContent();
    fetch(kResortDataSourceUrl)
        .then(getJsonFromResponse)
        .then(assignTrailColorsAsync)
        .catch(error => {
        console.error("Error fetching JSON:", error);
    });
} // onPageLoad()
