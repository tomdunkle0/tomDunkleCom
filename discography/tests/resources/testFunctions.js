module.exports =
{
    dispatchEventToAudioPlayer,
    getDivWithClassAssignment, // TODO -- TEST
    getParentElementForChildId,
    getStyleAttributeForColorCode
};

// Test Constant includes:
const testConstants = require('./testConstants'); // TODO -- TEST
const kDivOpeningTagClassAssignment = testConstants.kDivOpeningTagClassAssignment; // TODO -- TEST
const kDivOpeningTagTermination     = testConstants.kDivOpeningTagTermination; // TODO -- TEST

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
    return kDivOpeningTagClassAssignment + className + kDivOpeningTagTermination; // TODO -- TEST
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
