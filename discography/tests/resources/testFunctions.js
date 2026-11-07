module.exports =
{
    dispatchEventToAudioPlayer,
    getDivOpeningTag,
    getIdAssignmentForTestTrackChild, // TODO -- TEST
    getParentElementForChildId,
    getStyleAttributeForColorCode
};

/*--------------------------------------------------------------------------*\
 | File: discography/tests/resources/testFunctions.js                       |
 | Purpose: Defines common functions used by tests of the discography page. |
\*--------------------------------------------------------------------------*/

function dispatchEventToAudioPlayer(audioPlayerId, type)
{
    const audioPlayer = document.getElementById(audioPlayerId);
    const event = new Event(type);
    audioPlayer.dispatchEvent(event);
} // dispatchEventToAudioPlayer()

function getDivOpeningTag(className)
{
    const divOpeningTagClassAssignment = "<div class=\"";
    const divOpeningTagTermination = "\">";
    return divOpeningTagClassAssignment + className + divOpeningTagTermination;
} // getDivOpeningTag()

function getIdAssignmentForTestTrackChild(idPrefix, idSuffix) // TODO -- TEST
{
    const idAssignmentOpening = "id=\""; // TODO -- TEST
    const idAssignmentClosing = "\""; // TODO -- TEST
    return idAssignmentOpening + idPrefix + idSuffix + idAssignmentClosing; // TODO -- TEST
} // getIdAssignmentForTestTrackChild()

function getParentElementForChildId(childId)
{
    const childElement = document.getElementById(childId);
    return childElement.parentElement;
} // getParentElementForChildId()

function getStyleAttributeForColorCode(colorCode)
{
    return "color: " + colorCode + ";";
} // getStyleAttributeForColorCode()
