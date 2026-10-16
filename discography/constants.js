/*----------------------------------------------------------*\
 | File: constants.js                                       |
 | Purpose: Defines constants used on the discography page. |
\*----------------------------------------------------------*/

const kColorCodeLightBlue               = "#99CCFF";
const kColorCodeWhite                   = "#FFFFFF";
const kEventNameOnClick                 = "onClick";
const kEventNameOnMouseLeave            = "onMouseLeave";
const kEventNameOnMouseOver             = "onMouseOver";
const kEventNameOnTouchEnd              = "onTouchEnd";
const kEventNameOnTouchStart            = "onTouchStart";
const kEventTypeTouchEnd                = "touchend";
const kEventTypeTrackEnded              = "ended";
const kFirstCharIndex                   = 0;
const kFirstElementIndex                = 0;
const kFunctionNameUpdateTrackFontColor = "updateTrackFontColor";
const kNoTracks                         = 0;
const kNotVisible                       = false;
const kOnlyChildIndex                   = 0;
const kParametersThisAndBlue            = "(this, '#99CCFF')";
const kParametersThisAndWhite           = "(this, '#FFFFFF')";
const kParameterThisOnly                = "(this)";
const kPlayTrackFunctionCallPrefix      = "playTrack('";
const kPlayTrackFunctionCallSuffix      = "')";
const kSecondCharIndex                  = 1;
const kSingleChild                      = 1;
const kStyle                            = "style";
const kUnpopulated                      = "";
const kVisible                          = true;

// Function call signatures:
const kFunctionCallMakeTextBlue  = kFunctionNameUpdateTrackFontColor + kParametersThisAndBlue;
const kFunctionCallMakeTextWhite = kFunctionNameUpdateTrackFontColor + kParametersThisAndWhite;
const kFunctionCallOnTouchEnd    = kEventNameOnTouchEnd + kParameterThisOnly;
const kFunctionCallOnTouchStart  = kEventNameOnTouchStart + kParameterThisOnly;

// Element ID prefixes:
const kPrefixAudioPlayer   = "a";
const kPrefixFinalTrack    = "f";
const kPrefixPlayArrow     = "p";
const kPrefixTrack         = "s";
const kPrefixTrackDuration = "d";
const kPrefixTrackNumber   = "n";
const kPrefixTrackTitle    = "t";

// Audio player IDs:
const kPlayerMtBanger            = kPrefixAudioPlayer + "MtBanger";
const kPlayerFairUseOfTheCochlea = kPrefixAudioPlayer + "FairUseOfTheCochlea";
const kPlayerCorneliusSquatgood  = kPrefixAudioPlayer + "CorneliusSquatgood";
const kPlayerDumbFun             = kPrefixAudioPlayer + "DumbFun";
const kPlayerWereAllPrawns       = kPrefixAudioPlayer + "WereAllPrawns";
const kPlayerSkunkBass           = kPrefixAudioPlayer + "SkunkBass";
const kPlayerPsynkhole           = kPrefixAudioPlayer + "Psynkhole";
const kPlayer1320                = kPrefixAudioPlayer + "$1320";

// Cascading style sheet (CSS) class names from discography_style.css:
const kStyleSheetClassNameAlbumInfo     = "albumInfo";
const kStyleSheetClassNameTrackDuration = "trackDuration";
const kStyleSheetClassNameTrackNumber   = "trackNumber";
const kStyleSheetClassNameTrackRow      = "trackRow";
const kStyleSheetClassNameTrackText     = "trackText";
const kStyleSheetClassNameTrackTitle    = "trackTitle";

const kTrackIds =
[
    "sEveryMuscleIsMoving",
    "sComfortZone",
    "sBreakMyBones",
    "sCampbellHill",
    "sElectricLullaby",
    "sHaloEffect",
    "sChiliPowder",
    "sNoFeelings",
    "sVicariousPtII",
    "sGold",
    "sNextToYou",
    "sGone?",
    "s1,001",
    "sYouNeverSaid",
    "sGhost",
    "sVicariousPtI",
    "fYouveBeenExposed!",
    "sThanks",
    "sEverythingInFront",
    "sSolarBurglarySwag",
    "sGregsBirdfeeder",
    "sFamiliarConversations",
    "sOhItHurtsToLiveAndBreathe",
    "sDelayedShipment",
    "fChambersRoad",
    "s0utr0",
    "sSkyDiiiveUncovahd",
    "sABriefDisclaimerInTheInterestOfYourSafety",
    "sInterplanetaryDialUp",
    "sLiveFromInsideTwoWashingMachines",
    "sPreviewOfYourDeathTerlinguaSun",
    "sDigitalAcoustic",
    "sBINITUStELLTOWER",
    "sTheMachineryOfLife",
    "sSteamGoatSpaceGoatNeverGoatSpaceBanjoMix",
    "sBristolMeetsLongBeachOnAWarmSunnyAfternoon",
    "sStopThatTrain",
    "sStuntDoubleLoveAffair",
    "sOkay",
    "fInWhichIQuietlyWalkOutOfTheRoom",
    "sHowTheTimesHaveChanged",
    "sStandingWaterAtTheBrooklynMasonicTemple",
    "sDumbFun",
    "sItSeemsIveWanderedIntoTheWrongBakeryAgain",
    "sElevatorFriends",
    "sWistful",
    "sHoldTight",
    "fIStillRegretNotPuttingTruckNutzOnTheBackOfMattsCar",
    "sYouWillBeMyJalapenoDream",
    "sRancidFettuccinneSeamstress",
    "sClamshell",
    "sSunchange",
    "sChemicalTruancyOperation",
    "sUSAGELINKSDONOTCROSSPOLICESAUSAGELINKSDON",
    "sStackTheStepladdersToTheHeavens",
    "sWOWGREATCAT",
    "sWhereIsMyMind",
    "sB&EAtTheSourCreamFactory",
    "sTemptedByTheSpacePudding",
    "sIveGotToCallAPlumber",
    "sBehindMyStoicVegetableEyes",
    "sPapasPizzaAndRoastBeefWasProbablyAFront",
    "sEveryConversationIsAJamSession",
    "fTheIncriminatingEvidenceButton",
    "sMinimize",
    "sCooLLooptoondrahhhhhh",
    "sDepthcharge",
    "sDONUTRETURN",
    "sFeelings",
    "sWhereIsRmVd",
    "sSkunkBass",
    "sAntibiotixxx",
    "sF4d3dh0u534nth3m",
    "sCoffee&Incense",
    "sFUUUUUUUCK",
    "sLikeSquids",
    "sCapsule",
    "sStayBombin",
    "fSkatingOnDryIce",
    "sSongAboutYou",
    "sLeapOfFaith",
    "sInterplanetaryJamSesh",
    "sTakeUpThyAxeAndSetThisForestAblaze",
    "sCrawlingIntoTheFireplace",
    "sTheFunkBackTooManyTimes",
    "sInsideThePsynkhole",
    "sLeavesReplacement",
    "sOldFriend",
    "sUt",
    "sSolipsistHymn",
    "sIUsedToWatchBirds",
    "sNuclearWarfare",
    "sCosmicZoo",
    "sNoExpirationDate",
    "sPostcardsLimited",
    "sDecentHat",
    "sBerries",
    "sElohknysp",
    "fPressItEqualizeIt",
    "sRunThatTurkey",
    "sDuelOnTheBlackKeys",
    "sArcticOcean",
    "sUp",
    "sIntoTheOven",
    "s;068",
    "sMartyrs",
    "sLostInSpaceWithoutADrumkit",
    "sHashBrownSandwiches",
    "sCircus",
    "sProdigalSon",
    "sGreyGoo",
    "sWorldPeanutInvasion",
    "sBewareTheTallGrass",
    "fTheEndOfTheWorld"
];
