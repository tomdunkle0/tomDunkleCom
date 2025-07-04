/*----------------------------------------------------------------------------*\
 | File: discography/tests/resources/testConstants.js                         |
 | Purpose: Defines common constants used by tests of the Discography module. |
\*----------------------------------------------------------------------------*/

// Constant includes:
const constants = require('../environment/constants');
const kPrefixPlayArrow     = constants.kPrefixPlayArrow;
const kPrefixTrack         = constants.kPrefixTrack;
const kPrefixTrackDuration = constants.kPrefixTrackDuration;
const kPrefixTrackNumber   = constants.kPrefixTrackNumber;
const kPrefixTrackTitle    = constants.kPrefixTrackTitle;

// Miscellaneous constants:
const kAudioElementNodeName             = "AUDIO";
const kEventTypePlay                    = "play";
const kTestTrackIdSuffix                = "RunThatTurkey";
// TODO: This discrepancy of some strings having the semicolon and some strings not having
//        it originated because the hardcoded HTML in getDiscographyContent() includes the
//        semicolons, but setPlayArrowVisibility() applies strings without the semicolons
//        to the style attribute of the play arrow objects. Update the production code to be
//        consistent so that there is no longer a need to define two separate strings here.
const kVisibilityHiddenWithoutSemicolon = "visibility: hidden";
const kVisibilityHiddenWithSemicolon    = "visibility: hidden;";
const kVisibilityVisible                = "visibility: visible";

// Compound constants:
const kTestTrackDurationId  = kPrefixTrackDuration + kTestTrackIdSuffix;
const kTestTrackId          = kPrefixTrack + kTestTrackIdSuffix;
const kTestTrackNumberId    = kPrefixTrackNumber + kTestTrackIdSuffix;
const kTestTrackPlayArrowId = kPrefixPlayArrow + kTestTrackIdSuffix;
const kTestTrackTitleId     = kPrefixTrackTitle + kTestTrackIdSuffix;

module.exports =
{
    kAudioElementNodeName,
    kEventTypePlay,
    kTestTrackDurationId,
    kTestTrackId,
    kTestTrackNumberId,
    kTestTrackPlayArrowId,
    kTestTrackTitleId,
    kVisibilityHiddenWithoutSemicolon,
    kVisibilityHiddenWithSemicolon,
    kVisibilityVisible
};
