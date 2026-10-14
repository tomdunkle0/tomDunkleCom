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

const audioDirectoryPath = "discography/audio/"; // TODO -- TEST

const mbAlbumPath = audioDirectoryPath + "mt_banger/"; // TODO -- TEST
const mbMp3FileNames = // TODO -- TEST
[
    "every muscle is moving",
    "comfort zone",
    "break my bones",
    "campbell hill",
    "electric lullaby",
    "halo effect",
    "chili powder",
    "no feelings",
    "vicarious pt II",
    "gold",
    "next to you",
    "gone",
    "1,001",
    "you never said",
    "ghost",
    "vicarious pt I",
    "you've been exposed!"
];

const fuotcAlbumPath = audioDirectoryPath + "fair_use_of_the_cochlea/"; // TODO -- TEST
const fuotcMp3FileNames = // TODO -- TEST
[
    "thanks",
    "everything in front",
    "solar burglary swag",
    "greg's birdfeeder",
    "familiar conversations",
    "oh, it hurts to live and breathe",
    "delayed shipment",
    "chambers road"
];

const csAlbumPath = audioDirectoryPath + "cornelius_squatgood/"; // TODO -- TEST
const csMp3FileNames = // TODO -- TEST
[
    "0utr0",
    "skyDiiive [uncovah'd]",
    "a brief disclaimer in the interest of your safety",
    "interplanetary dial-up",
    "Live! From inside two washing machines",
    "preview of your death _ Terlingua sun",
    "digital --_ acoustic",
    "bINITUStELLTOWER",
    "the machinery of life [keeps moving; within-absolute-refuge from the aforementioned] always",
    "steam-goat-space-goat-never-goat [space banjo mix]",
    "bristol meets long beach on a warm, sunny afternoon",
    "stop that train!!",
    "stunt double love affair",
    "okay",
    "in which i quietly walk out of the room"
];

const dfAlbumPath = audioDirectoryPath + "dumb_fun/"; // TODO -- TEST
const dfMp3FileNames = // TODO -- TEST
[
    "01_HowTheTimesHaveChangedCosmicZooII",
    "02_StandingWaterAtTheBrooklynMasonicTemple",
    "03_DumbFun",
    "04_ItSeemsIveWanderedIntoTheWrongBakeryAgain",
    "05_ElevatorFriends",
    "06_Wistful",
    "07_HoldTight",
    "08_IStillRegretNotPuttingTruckNutzOnTheBackOfMattsCar"
];

const wapAlbumPath = audioDirectoryPath + "were_all_prawns/";
const wapMp3FileNames =
[
    "01_YouWillBeMyJalapenoDream",
    "02_RancidFettuccinneSeamstress",
    "03_Clamshell",
    "04_Sunchange",
    "05_ChemicalTruancyOperation",
    "06_USAGELINKSDONOTCROSSPOLICESAUSAGELINKSDON",
    "07_StackTheStepladdersToTheHeavens",
    "08_WOWGREATCAT",
    "09_WhereIsMyMind",
    "10_BandEAtTheSourCreamFactory",
    "11_TemptedByTheSpacePudding",
    "12_IveGotToCallAPlumberWhoCanFigureOutWhyMyShowerheadIsSprayingCactusNeedles",
    "13_BehindMyStoicVegetableEyes",
    "14_PapasPizzaAndRoastBeefWasProbablyAFront",
    "15_EveryConversationIsAJamSession",
    "16_TheIncriminatingEvidenceButton"
];

const sbAlbumPath = audioDirectoryPath + "skunk_bass/";
const sbMp3FileNames =
[
    "minimize",
    "cooLLoop.toondrahhhhhh",
    "depthcharge",
    "DONUTRETURN",
    "feelings",
    "where is [r.M.v.D.]",
    "skunk bass",
    "anTibioTixxx [ft. duck grips]",
    "f4d3D h0U53 4Nth3M [ft. audio paralysis]",
    "coffee & incense [ft. apik and audio paralysis]",
    "FUUUUUUUCK!!!!!!!!!!!!!",
    "like squids !!",
    "capsule",
    "stay-bombin'",
    "skating on dry ice"
];

const psynkholeAlbumPath = audioDirectoryPath + "psynkhole/";
const psynkholeMp3FileNames =
[
    "Song About You",
    "Leap of Faith",
    "Interplanetary Jam Sesh",
    "Take Up Thy Axe and Set This Forest Ablaze",
    "Crawling Into the Fireplace",
    "The Funk Back Too Many Times",
    "Inside the Psynkhole",
    "Leave's Replacement",
    "Old Friend",
    "ut",
    "Solipsist Hymn",
    "I Used To Watch Birds",
    "Nuclear Warfare",
    "Cosmic Zoo",
    "No Expiration Date",
    "Postcards Limited",
    "Decent Hat",
    "Berries",
    "elohknysp",
    "Press It, Equalize It"
];

const the1320AlbumPath = audioDirectoryPath + "1320/";
const the1320Mp3FileNames =
[
    "Run that Turkey!",
    "Duel on the Black Keys",
    "Arctic Ocean",
    "Up",
    "Into the Oven",
    ";068",
    "Martyrs",
    "Lost in Space Without a Drumkit",
    "Hash Brown Sandwiches",
    "Circus",
    "Prodigal Son",
    "Grey Goo",
    "World Peanut Invasion",
    "Beware the Tall Grass",
    "The End of the World"
];

const mtBangerTrackSuffixes = // TODO -- TEST
[
    "EveryMuscleIsMoving",
    "ComfortZone",
    "BreakMyBones",
    "CampbellHill",
    "ElectricLullaby",
    "HaloEffect",
    "ChiliPowder",
    "NoFeelings",
    "VicariousPtII",
    "Gold",
    "NextToYou",
    "Gone?",
    "1,001",
    "YouNeverSaid",
    "Ghost",
    "VicariousPtI",
    "YouveBeenExposed!"
];

const mtBangerTrackTitles = // TODO -- TEST
[
    "every muscle is moving",
    "comfort zone",
    "break my bones",
    "campbell hill",
    "electric lullaby",
    "halo effect",
    "chili powder",
    "no feelings",
    "vicarious (pt. II)",
    "gold",
    "next to you",
    "gone?",
    "1,001",
    "you never said",
    "ghost",
    "vicarious (pt. I)",
    "you've been exposed!"
];

const mtBangerTrackTimes = // TODO -- TEST
[
    "1:20",
    "4:00",
    "3:04",
    "1:03",
    "3:49",
    "5:34",
    "4:30",
    "4:57",
    "2:16",
    "1:49",
    "3:38",
    "1:27",
    "4:59",
    "3:59",
    "4:18",
    "3:45",
    "2:22"
];

const fairUseOfTheCochleaTrackSuffixes = // TODO -- TEST
[
    "Thanks",
    "EverythingInFront",
    "SolarBurglarySwag",
    "GregsBirdfeeder",
    "FamiliarConversations",
    "OhItHurtsToLiveAndBreathe",
    "DelayedShipment",
    "ChambersRoad"
];

const fairUseOfTheCochleaTrackTitles = // TODO -- TEST
[
    "Thanks",
    "Everything in Front",
    "Solar Burglary Swag",
    "Greg's Birdfeeder",
    "Familiar Conversations",
    "Oh, It Hurts to Live and Breathe",
    "Delayed Shipment",
    "Chambers Road"
];

const fairUseOfTheCochleaTrackTimes = // TODO -- TEST
[
    "1:00",
    "3:37",
    "2:48",
    "3:44",
    "4:25",
    "4:11",
    "0:30",
    "3:06"
];

const corneliusSquatgoodTrackSuffixes = // TODO -- TEST
[
    "0utr0",
    "SkyDiiiveUncovahd",
    "ABriefDisclaimerInTheInterestOfYourSafety",
    "InterplanetaryDialUp",
    "LiveFromInsideTwoWashingMachines",
    "PreviewOfYourDeathTerlinguaSun",
    "DigitalAcoustic",
    "BINITUStELLTOWER",
    "TheMachineryOfLife",
    "SteamGoatSpaceGoatNeverGoatSpaceBanjoMix",
    "BristolMeetsLongBeachOnAWarmSunnyAfternoon",
    "StopThatTrain",
    "StuntDoubleLoveAffair",
    "Okay",
    "InWhichIQuietlyWalkOutOfTheRoom"
];

const corneliusSquatgoodTrackTitles = // TODO -- TEST
[
    "0utr0",
    "skyDiiive [uncovah'd]",
    "a brief disclaimer in the interest of your safety",
    "interplanetary dial-up",
    "Live! From inside two washing machines",
    "preview of your death / Terlingua sun",
    "digital --> acoustic",
    "bINITUStELLTOWER",
    "the machinery of life [keeps moving; within-absolute-refuge from the aforementioned] always",
    "steam-goat-space-goat-never-goat [space banjo mix]",
    "bristol meets long beach on a warm, sunny afternoon",
    "stop that train!!",
    "stunt double love affair",
    "okay",
    "in which i quietly walk out of the room"
];

const corneliusSquatgoodTrackTimes = // TODO -- TEST
[
    "1:29",
    "3:48",
    "0:41",
    "3:39",
    "4:33",
    "3:41",
    "1:27",
    "2:45",
    "4:07",
    "3:22",
    "1:27",
    "3:28",
    "3:01",
    "1:04",
    "4:31"
];

const dumbFunTrackSuffixes = // TODO -- TEST
[
    "HowTheTimesHaveChanged",
    "StandingWaterAtTheBrooklynMasonicTemple",
    "DumbFun",
    "ItSeemsIveWanderedIntoTheWrongBakeryAgain",
    "ElevatorFriends",
    "Wistful",
    "HoldTight",
    "IStillRegretNotPuttingTruckNutzOnTheBackOfMattsCar"
];

const dumbFunTrackTitles = // TODO -- TEST
[
    "how the times have changed [cosmic zoo II]",
    "standing water in the brooklyn masonic temple",
    "dumb fun",
    "it seems i've wandered into the wrong bakery again",
    "elevator friends",
    "wistful",
    "hold tight",
    "i still regret not putting trucknutz on the back of matt's car"
]

const dumbFunTrackTimes = // TODO -- TEST
[
    "5:04",
    "3:08",
    "6:04",
    "4:22",
    "2:36",
    "1:04",
    "2:45",
    "6:57"
];

const wereAllPrawnsTrackSuffixes = // TODO -- TEST
[
    "YouWillBeMyJalapenoDream",
    "RancidFettuccinneSeamstress",
    "Clamshell",
    "Sunchange",
    "ChemicalTruancyOperation",
    "USAGELINKSDONOTCROSSPOLICESAUSAGELINKSDON",
    "StackTheStepladdersToTheHeavens",
    "WOWGREATCAT",
    "WhereIsMyMind",
    "B&EAtTheSourCreamFactory",
    "TemptedByTheSpacePudding",
    "IveGotToCallAPlumber",
    "BehindMyStoicVegetableEyes",
    "PapasPizzaAndRoastBeefWasProbablyAFront",
    "EveryConversationIsAJamSession",
    "TheIncriminatingEvidenceButton"
];

const wereAllPrawnsTrackTitles = // TODO -- TEST
[
    "You Will Be My Jalapeño Dream",
    "Rancid Fettuccinne Seamstress",
    "Clamshell",
    "Sunchange",
    "Chemical Truancy Operation",
    "|USAGE LINKS DO NOT CROSS POLICE SAUSAGE LINKS DO N|",
    "Stack the Stepladders to the Heavens",
    "WOW!!!! GREAT CAT!!!!!!!",
    "Where is My Mind?",
    "B&E at the Sour Cream Factory",
    "Tempted by the Space Pudding",
    "I've Got to Call a Plumber Who Can Figure Out Why My Showerhead Is Spraying Cactus Needles",
    "Behind My Stoic Vegetable Eyes",
    "Papa's Pizza and Roast Beef was Probably a Front",
    "Every Conversation is a Jam Session",
    "The Incriminating Evidence Button"
];

const wereAllPrawnsTrackTimes = // TODO -- TEST
[
    "1:51",
    "4:04",
    "1:13",
    "3:10",
    "2:50",
    "2:34",
    "6:29",
    "0:41",
    "2:56",
    "3:43",
    "3:16",
    "1:38",
    "2:40",
    "1:25",
    "1:37",
    "13:30"
];

const skunkBassTrackSuffixes = // TODO -- TEST
[
    "Minimize",
    "CooLLooptoondrahhhhhh",
    "Depthcharge",
    "DONUTRETURN",
    "Feelings",
    "WhereIsRmVd",
    "SkunkBass",
    "Antibiotixxx",
    "F4d3dh0u534nth3m",
    "Coffee&Incense",
    "FUUUUUUUCK",
    "LikeSquids",
    "Capsule",
    "StayBombin",
    "SkatingOnDryIce"
];

const skunkBassTrackTitles = // TODO -- TEST
[
    "minimize",
    "cooLLoop.toondrahhhhhh",
    "depthcharge >> [ft. bjork] >> electrocution",
    "DONOTRETURN",
    "feelings",
    "where is? [r.M.v.D.]",
    "skunk bass",
    "anTibioTixxx [ft. duck grips]",
    "f4d3D h0U53 4Nth3M [ft. audio paralysis]",
    "coffee & incense [ft. apik and audio paralysis]",
    "FUUUUUUUCK!!!!!!!!!!!!!",
    "like squids !!",
    "..capsule..",
    "stay-bombin'",
    "skating on dry ice"
];

const skunkBassTrackTimes = // TODO -- TEST
[
    "1:07",
    "2:30",
    "3:18",
    "1:22",
    "4:19",
    "2:08",
    "2:00",
    "1:49",
    "5:44",
    "3:38",
    "1:22",
    "2:30",
    "3:26",
    "1:42",
    "3:06"
];

const psynkholeTrackSuffixes = // TODO -- TEST
[
    "SongAboutYou",
    "LeapOfFaith",
    "InterplanetaryJamSesh",
    "TakeUpThyAxeAndSetThisForestAblaze",
    "CrawlingIntoTheFireplace",
    "TheFunkBackTooManyTimes",
    "InsideThePsynkhole",
    "LeavesReplacement",
    "OldFriend",
    "Ut",
    "SolipsistHymn",
    "IUsedToWatchBirds",
    "NuclearWarfare",
    "CosmicZoo",
    "NoExpirationDate",
    "PostcardsLimited",
    "DecentHat",
    "Berries",
    "Elohknysp",
    "PressItEqualizeIt"
];

const psynkholeTrackTitles = // TODO -- TEST
[
    "Song About You",
    "Leap of Faith",
    "Interplanetary Jam Sesh",
    "Take Up Thy Axe and Set This Forest Ablaze",
    "Crawling into the Fireplace",
    "The Funk Back Too Many Times",
    "Inside the Psynkhole",
    "Leave's Replacement",
    "Old Friend",
    "ut",
    "Solipsist Hymn",
    "I Used to Watch Birds",
    "Nuclear Warfare",
    "Cosmic Zoo",
    "No Expiration Date",
    "Postcards Limited",
    "Decent Hat",
    "Berries",
    "elohknysp",
    "Press It, Equalize It"
];

const psynkholeTrackTimes = // TODO -- TEST
[
    "0:53",
    "4:34",
    "0:44",
    "4:31",
    "2:26",
    "0:53",
    "4:13",
    "4:22",
    "5:13",
    "0:50",
    "3:01",
    "4:11",
    "4:19",
    "1:12",
    "4:36",
    "3:57",
    "0:38",
    "3:25",
    "11:00",
    "3:55"
];

const the1320TrackSuffixes = // TODO: Make sure that this line is tested.
[
    "RunThatTurkey",
    "DuelOnTheBlackKeys",
    "ArcticOcean",
    "Up",
    "IntoTheOven",
    ";068",
    "Martyrs",
    "LostInSpaceWithoutADrumkit",
    "HashBrownSandwiches",
    "Circus",
    "ProdigalSon",
    "GreyGoo",
    "WorldPeanutInvasion",
    "BewareTheTallGrass",
    "TheEndOfTheWorld"
];

const the1320TrackTitles = // TODO: Make sure that this line is tested.
[
    "Run That Turkey!",
    "Duel on the Black Keys",
    "Arctic Ocean",
    "Up",
    "Into the Oven",
    ";068",
    "Martyrs",
    "Lost in Space Without a Drumkit",
    "Hash Brown Sandwiches",
    "Circus",
    "Prodigal Son",
    "Grey Goo",
    "World Peanut Invasion",
    "Beware the Tall Grass",
    "The End of the World"
];

const the1320TrackTimes = // TODO: Make sure that this line is tested.
[
    "0:41",
    "4:53",
    "2:39",
    "6:20",
    "2:00",
    "2:03",
    "4:35",
    "3:12",
    "3:55",
    "1:23",
    "1:49",
    "3:00",
    "2:31",
    "2:35",
    "3:24"
];
