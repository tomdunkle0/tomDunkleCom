module.exports =
{
    dispatchEventToAudioPlayer,
    getDivWithClassAssignment, // TODO -- TEST
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

function getDivWithClassAssignment(className) // TODO -- TEST
{
    const divOpeningTagClassAssignment = "<div class=\"";
    const divOpeningTagTermination = "\">";
    return divOpeningTagClassAssignment + className + divOpeningTagTermination;
} // getDivWithClassAssignment()

function getParentElementForChildId(childId)
{
    const childElement = document.getElementById(childId);
    return childElement.parentElement;
} // getParentElementForChildId()

function getStyleAttributeForColorCode(colorCode)
{
    return "color: " + colorCode + ";";
} // getStyleAttributeForColorCode()
