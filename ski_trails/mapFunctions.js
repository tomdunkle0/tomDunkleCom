/*-----------------------------------------------------------------------*\
 | File: mapFunctions.js                                                 |
 | Purpose: Defines functions related to the Winter Park ski resort map. |
\*-----------------------------------------------------------------------*/

var gDisplayCurrentStatus = true;
var gTrailData = null;

function assignTrailColors()
{
    const mtnAreas = gTrailData.MountainAreas;
    for (var areaIndex = 0; areaIndex < mtnAreas.length; areaIndex++)
    {
        const mtnArea = mtnAreas[areaIndex];
        for (var trailIndex = 0; trailIndex < mtnArea.Trails.length; trailIndex++)
        {
            const trail = mtnArea.Trails[trailIndex];
            const actualTrail = document.getElementById(trail.Name);
            if (actualTrail !== null)
            {
                if ((trail.Status === kTrailStatusOpen) || (!gDisplayCurrentStatus))
                {
                    switch (trail.Difficulty)
                    {
                        case kTrailDifficultyAdvancedIntermediate:
                            actualTrail.setAttribute(kAttributeNameStroke, kPolylineStrokeColorPurple);
                            break;
                        case kTrailDifficultyEasy:
                            actualTrail.setAttribute(kAttributeNameStroke, kPolylineStrokeColorGreen);
                            break;
                        case kTrailDifficultyExpert:
                        case kTrailDifficultyExtremeTerrain:
                            actualTrail.setAttribute(kAttributeNameStroke, kPolylineStrokeColorBlack);
                            break;
                        case kTrailDifficultyIntermediate:
                            actualTrail.setAttribute(kAttributeNameStroke, kPolylineStrokeColorBlue);
                            break;
                    }
                }

                if (gDisplayCurrentStatus)
                {
                    const trailStatus = trail.Status;
                    if ((trailStatus === kTrailStatusClosed1)
                     || (trailStatus === kTrailStatusClosed2)
                     || (trailStatus === kTrailStatusClosed3)
                    )
                    {
                        actualTrail.setAttribute(kAttributeNameStroke, kPolylineStrokeColorRed);
                    }
                }
            }
        }
    }
} // assignTrailColors()

function getJsonFromResponse(response)
{
    if (!response.ok)
    {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
} // getJsonFromResponse()

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
