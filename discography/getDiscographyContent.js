/* Legend for element ID prefixes:
    "a" = Audio player            (player featuring visible controls under each album)
    "d" = Track duration          (visible string indicating the length of a track)
    "f" = Audio file, final track (the final song on an album; doesn't autoplay next)
    "n" = Track number            (visible string indicating a track's sequential number)
    "p" = Play arrow              (visible arrow indicating the current track)
    "s" = Audio source            (copy of a song Tom's produced in .mp3 format)
    "t" = Track title             (visible string indicating the track title) */

const audioDirectoryPath = "discography/audio/";

const mbAlbumPath = audioDirectoryPath + "mt_banger/";
const mbMp3FileNames =
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

const mbTrackSuffixes =
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

const fuotcAlbumPath = audioDirectoryPath + "fair_use_of_the_cochlea/";
const fuotcMp3FileNames =
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

const fuotcTrackSuffixes =
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

const csAlbumPath = audioDirectoryPath + "cornelius_squatgood/";
const csMp3FileNames =
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

const csTrackSuffixes =
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

const dfAlbumPath = audioDirectoryPath + "dumb_fun/";
const dfMp3FileNames =
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

const dfTrackSuffixes =
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

const wapTrackSuffixes =
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

const sbTrackSuffixes =
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

const phAlbumPath = audioDirectoryPath + "psynkhole/";
const phMp3FileNames =
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

const phTrackSuffixes =
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

const d1320AlbumPath = audioDirectoryPath + "1320/";
const d1320Mp3FileNames =
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

const d1320TrackSuffixes =
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

function getDiscographyContent() { // TODO -- TEST
    // TODO: Make sure that this line is tested.
    return `
        <div class="flex-column"
             id="zScrollColumn">
            <div class="album">
                <img src="discography/mt_banger_cover.png"
                     width="40%">
                <div class="albumInfo">
                    <div class="albumTitle">
                        <p style="color: #FFFFFF;
                                  font-size: 32;
                                  margin: 5;">
                            <b>Mt. Banger</b>
                            <br><br>
                        </p>
                    </div>
                    <div class="flex-column">`
          + getTrackListColumn(mbTrackSuffixes, mbTrackTitles, mbTrackDurations) +
`
                        <br><br> <!-- Space between track titles and audio player controls. --->
                    </div>
                    <audio controls id="aMtBanger">
                        <source id="sEveryMuscleIsMoving"
                                src="${mbAlbumPath}${mbMp3FileNames[0]}.mp3">
                        <source id="sComfortZone"
                                src="${mbAlbumPath}${mbMp3FileNames[1]}.mp3">
                        <source id="sBreakMyBones"
                                src="${mbAlbumPath}${mbMp3FileNames[2]}.mp3">
                        <source id="sCampbellHill"
                                src="${mbAlbumPath}${mbMp3FileNames[3]}.mp3">
                        <source id="sElectricLullaby"
                                src="${mbAlbumPath}${mbMp3FileNames[4]}.mp3">
                        <source id="sHaloEffect"
                                src="${mbAlbumPath}${mbMp3FileNames[5]}.mp3">
                        <source id="sChiliPowder"
                                src="${mbAlbumPath}${mbMp3FileNames[6]}.mp3">
                        <source id="sNoFeelings"
                                src="${mbAlbumPath}${mbMp3FileNames[7]}.mp3">
                        <source id="sVicariousPtII"
                                src="${mbAlbumPath}${mbMp3FileNames[8]}.mp3">
                        <source id="sGold"
                                src="${mbAlbumPath}${mbMp3FileNames[9]}.mp3">
                        <source id="sNextToYou"
                                src="${mbAlbumPath}${mbMp3FileNames[10]}.mp3">
                        <source id="sGone?"
                                src="${mbAlbumPath}${mbMp3FileNames[11]}.mp3">
                        <source id="s1,001"
                                src="${mbAlbumPath}${mbMp3FileNames[12]}.mp3">
                        <source id="sYouNeverSaid"
                                src="${mbAlbumPath}${mbMp3FileNames[13]}.mp3">
                        <source id="sGhost"
                                src="${mbAlbumPath}${mbMp3FileNames[14]}.mp3">
                        <source id="sVicariousPtI"
                                src="${mbAlbumPath}${mbMp3FileNames[15]}.mp3">
                        <source id="fYouveBeenExposed!"
                                src="${mbAlbumPath}${mbMp3FileNames[16]}.mp3">
                    </audio>
                    <div class="releaseNotes">
                        <p style="color: #FFFFFF;
                                  font-size: 16;
                                  margin: 5;">
                            <br><br>
                            <b>released:</b> 13 December 2024
                            <br>
                            <b>produced:</b> March 2020 - October 2021,
                                             February 2024 - November 2024
                            <br>
                            <br>
                            <b>Tom Dunkle</b> (vocals, synths, guitars, production, composition,
                                               mixing)
                        </p>
                    </div>
                </div>
            </div>
            <hr style="background-color: white;
                       height: 5px;
                       width: 65%;">
            <div class="album">
                <img src="discography/fair_use_of_the_cochlea_cover.png"
                     width="40%">
                <div class="albumInfo">
                    <div class="albumTitle">
                        <p style="color: #FFFFFF;
                                  font-size: 32;
                                  margin: 5;">
                            <b>Fair Use of the Cochlea</b>
                            <br><br>
                        </p>
                    </div>
                    <div class="flex-column">`
          + getTrackListColumn(fuotcTrackSuffixes, fuotcTrackTitles, fuotcTrackDurations) +
`
                        <br><br> <!-- Space between track titles and audio player controls. --->
                    </div>
                    <audio controls id="aFairUseOfTheCochlea">
                        <source id="sThanks"
                                src="${fuotcAlbumPath}${fuotcMp3FileNames[0]}.mp3">
                        <source id="sEverythingInFront"
                                src="${fuotcAlbumPath}${fuotcMp3FileNames[1]}.mp3">
                        <source id="sSolarBurglarySwag"
                                src="${fuotcAlbumPath}${fuotcMp3FileNames[2]}.mp3">
                        <source id="sGregsBirdfeeder"
                                src="${fuotcAlbumPath}${fuotcMp3FileNames[3]}.mp3">
                        <source id="sFamiliarConversations"
                                src="${fuotcAlbumPath}${fuotcMp3FileNames[4]}.mp3">
                        <source id="sOhItHurtsToLiveAndBreathe"
                                src="${fuotcAlbumPath}${fuotcMp3FileNames[5]}.mp3">
                        <source id="sDelayedShipment"
                                src="${fuotcAlbumPath}${fuotcMp3FileNames[6]}.mp3">
                        <source id="fChambersRoad"
                                src="${fuotcAlbumPath}${fuotcMp3FileNames[7]}.mp3">
                    </audio>
                    <div class="releaseNotes">
                        <p style="color: #FFFFFF;
                                  font-size: 16;
                                  margin: 5;">
                            <br><br>
                            <b>released:</b> 17 April 2020
                            <br>
                            <b>produced:</b> May 2019 - November 2019
                            <br>
                            <br>
                            <b>Tom Dunkle</b> (production, composition, mixing, synths, vocals)
                        </p>
                    </div>
                </div>
            </div>
            <hr style="background-color: white;
                       height: 5px;
                       width: 65%;">
            <div class="album">
                <img src="discography/cornelius_squatgood_cover.jpg"
                     width="40%">
                <div class="albumInfo">
                    <div class="albumTitle">
                        <p style="color: #FFFFFF;
                                  font-size: 32;
                                  margin: 5;">
                            <b>Cornelius Squatgood</b>
                            <br><br>
                        </p>
                    </div>
                    <div class="flex-column">`
          + getTrackListColumn(csTrackSuffixes, csTrackTitles, csTrackDurations) +
`
                        <br><br> <!-- Space between track titles and audio player controls. --->
                    </div>
                    <audio controls id="aCorneliusSquatgood">
                        <source id="s0utr0"
                                src="${csAlbumPath}${csMp3FileNames[0]}.mp3">
                        <source id="sSkyDiiiveUncovahd"
                                src="${csAlbumPath}${csMp3FileNames[1]}.mp3">
                        <source id="sABriefDisclaimerInTheInterestOfYourSafety"
                                src="${csAlbumPath}${csMp3FileNames[2]}.mp3">
                        <source id="sInterplanetaryDialUp"
                                src="${csAlbumPath}${csMp3FileNames[3]}.mp3">
                        <source id="sLiveFromInsideTwoWashingMachines"
                                src="${csAlbumPath}${csMp3FileNames[4]}.mp3">
                        <source id="sPreviewOfYourDeathTerlinguaSun"
                                src="${csAlbumPath}${csMp3FileNames[5]}.mp3">
                        <source id="sDigitalAcoustic"
                                src="${csAlbumPath}${csMp3FileNames[6]}.mp3">
                        <source id="sBINITUStELLTOWER"
                                src="${csAlbumPath}${csMp3FileNames[7]}.mp3">
                        <source id="sTheMachineryOfLife"
                                src="${csAlbumPath}${csMp3FileNames[8]}.mp3">
                        <source id="sSteamGoatSpaceGoatNeverGoatSpaceBanjoMix"
                                src="${csAlbumPath}${csMp3FileNames[9]}.mp3">
                        <source id="sBristolMeetsLongBeachOnAWarmSunnyAfternoon"
                                src="${csAlbumPath}${csMp3FileNames[10]}.mp3">
                        <source id="sStopThatTrain"
                                src="${csAlbumPath}${csMp3FileNames[11]}.mp3">
                        <source id="sStuntDoubleLoveAffair"
                                src="${csAlbumPath}${csMp3FileNames[12]}.mp3">
                        <source id="sOkay"
                                src="${csAlbumPath}${csMp3FileNames[13]}.mp3">
                        <source id="fInWhichIQuietlyWalkOutOfTheRoom"
                                src="${csAlbumPath}${csMp3FileNames[14]}.mp3">
                    </audio>
                    <div class="releaseNotes">
                        <p style="color: #FFFFFF;
                                  font-size: 16;
                                  margin: 5;">
                            <br><br>
                            <b>released:</b> 26 January 2019
                            <br>
                            <b>produced:</b> June 2017 - January 2019
                            <br>
                            <br>
                            <b>Cornelius Squatgood</b> (production, composition, mixing, synths,
                                                        guitar, vocals)
                        </p>
                    </div>
                </div>
            </div>
            <hr style="background-color: white;
                       height: 5px;
                       width: 65%;">
            <div class="album">
                <img src="discography/dumb_fun_cover.jpg"
                     width="40%">
                <div class="albumInfo">
                    <div class="albumTitle">
                        <p style="color: #FFFFFF;
                                  font-size: 32;
                                  margin: 5;">
                            <b>Dumb Fun</b>
                            <br><br>
                        </p>
                    </div>
                    <div class="flex-column">`
          + getTrackListColumn(dfTrackSuffixes, dfTrackTitles, dfTrackDurations) +
`
                        <br><br> <!-- Space between track titles and audio player controls. --->
                    </div>
                    <audio controls id="aDumbFun">
                        <source id="sHowTheTimesHaveChanged"
                                src="${dfAlbumPath}${dfMp3FileNames[0]}.mp3">
                        <source id="sStandingWaterAtTheBrooklynMasonicTemple"
                                src="${dfAlbumPath}${dfMp3FileNames[1]}.mp3">
                        <source id="sDumbFun"
                                src="${dfAlbumPath}${dfMp3FileNames[2]}.mp3">
                        <source id="sItSeemsIveWanderedIntoTheWrongBakeryAgain"
                                src="${dfAlbumPath}${dfMp3FileNames[3]}.mp3">
                        <source id="sElevatorFriends"
                                src="${dfAlbumPath}${dfMp3FileNames[4]}.mp3">
                        <source id="sWistful"
                                src="${dfAlbumPath}${dfMp3FileNames[5]}.mp3">
                        <source id="sHoldTight"
                                src="${dfAlbumPath}${dfMp3FileNames[6]}.mp3">
                        <source id="fIStillRegretNotPuttingTruckNutzOnTheBackOfMattsCar"
                                src="${dfAlbumPath}${dfMp3FileNames[7]}.mp3">
                    </audio>
                    <div class="releaseNotes">
                        <p style="color: #FFFFFF;
                                  font-size: 16;
                                  margin: 5;">
                            <br><br>
                            <b>released:</b> 22 September 2016
                            <br>
                            <b>produced:</b> July 2015 - September 2016
                            <br>
                            <br>
                            <b>Cornelius Squatgood</b> (production, composition, mixing, synths,
                                                        guitar)
                        </p>
                    </div>
                </div>
            </div>
            <hr style="background-color: white;
                       height: 5px;
                       width: 65%;">
            <div class="album">
                <img src="discography/were_all_prawns_cover.jpg"
                     width="40%">
                <div class="albumInfo">
                    <div class="albumTitle">
                        <p style="color: #FFFFFF;
                                  font-size: 32;
                                  margin: 5;">
                            <b>We're All Prawns</b>
                            <br><br>
                        </p>
                    </div>
                    <div class="flex-column">`
          + getTrackListColumn(wapTrackSuffixes, wapTrackTitles, wapTrackDurations) +
`
                        <br><br> <!-- Space between track titles and audio player controls. --->
                    </div>
                    <audio controls id="aWereAllPrawns">
                        <source id="sYouWillBeMyJalapenoDream"
                                src="${wapAlbumPath}${wapMp3FileNames[0]}.mp3">
                        <source id="sRancidFettuccinneSeamstress"
                                src="${wapAlbumPath}${wapMp3FileNames[1]}.mp3">
                        <source id="sClamshell"
                                src="${wapAlbumPath}${wapMp3FileNames[2]}.mp3">
                        <source id="sSunchange"
                                src="${wapAlbumPath}${wapMp3FileNames[3]}.mp3">
                        <source id="sChemicalTruancyOperation"
                                src="${wapAlbumPath}${wapMp3FileNames[4]}.mp3">
                        <source id="sUSAGELINKSDONOTCROSSPOLICESAUSAGELINKSDON"
                                src="${wapAlbumPath}${wapMp3FileNames[5]}.mp3">
                        <source id="sStackTheStepladdersToTheHeavens"
                                src="${wapAlbumPath}${wapMp3FileNames[6]}.mp3">
                        <source id="sWOWGREATCAT"
                                src="${wapAlbumPath}${wapMp3FileNames[7]}.mp3">
                        <source id="sWhereIsMyMind"
                                src="${wapAlbumPath}${wapMp3FileNames[8]}.mp3">
                        <source id="sB&EAtTheSourCreamFactory"
                                src="${wapAlbumPath}${wapMp3FileNames[9]}.mp3">
                        <source id="sTemptedByTheSpacePudding"
                                src="${wapAlbumPath}${wapMp3FileNames[10]}.mp3">
                        <source id="sIveGotToCallAPlumber"
                                src="${wapAlbumPath}${wapMp3FileNames[11]}.mp3">
                        <source id="sBehindMyStoicVegetableEyes"
                                src="${wapAlbumPath}${wapMp3FileNames[12]}.mp3">
                        <source id="sPapasPizzaAndRoastBeefWasProbablyAFront"
                                src="${wapAlbumPath}${wapMp3FileNames[13]}.mp3">
                        <source id="sEveryConversationIsAJamSession"
                                src="${wapAlbumPath}${wapMp3FileNames[14]}.mp3">
                        <source id="fTheIncriminatingEvidenceButton"
                                src="${wapAlbumPath}${wapMp3FileNames[15]}.mp3">
                    </audio>
                    <div class="releaseNotes">
                        <p style="color: #FFFFFF;
                                  font-size: 16;
                                  margin: 5;">
                            <br><br>
                            <b>released:</b> 11 September 2016
                            <br>
                            <b>produced:</b> May 2015 - August 2015
                            <br>
                            <b>recorded:</b> June 2014 - May 2015
                            <br>
                            <br>
                            <b>apik</b> (guitars, vocals)
                            <br>
                            <b>Apollo</b> (guitars, tones, loops)
                            <br>
                            <b>Cornelius Squatgood</b> (synths, drums, production, vocals)
                            <br>
                            <b>Crispy</b> (silverware)
                            <br>
                            <b>Hatfield Brushmellow</b> (synths)
                            <br>
                            <b>Lil Cup</b> (bass)
                            <br>
                            <b>Jupiter</b> (bass, cover art)
                            <br>
                            <b>Velvet Furball</b> (vocals, synths)
                        </p>
                    </div>
                </div>
            </div>
            <hr style="background-color: white;
                       height: 5px;
                       width: 65%;">
            <div class="album">
                <img src="discography/skunk_bass_cover.png"
                     width="40%">
                <div class="albumInfo">
                    <div class="albumTitle">
                        <p style="color: #FFFFFF;
                                  font-size: 32;
                                  margin: 5;">
                            <b>Skunk Bass</b>
                            <br><br>
                        </p>
                    </div>
                    <div class="flex-column">`
          + getTrackListColumn(sbTrackSuffixes, sbTrackTitles, sbTrackDurations) +
`
                        <br><br> <!-- Space between track titles and audio player controls. --->
                    </div>
                    <audio controls id="aSkunkBass">
                        <source id="sMinimize"
                                src="${sbAlbumPath}${sbMp3FileNames[0]}.mp3">
                        <source id="sCooLLooptoondrahhhhhh"
                                src="${sbAlbumPath}${sbMp3FileNames[1]}.mp3">
                        <source id="sDepthcharge"
                                src="${sbAlbumPath}${sbMp3FileNames[2]}.mp3">
                        <source id="sDONUTRETURN"
                                src="${sbAlbumPath}${sbMp3FileNames[3]}.mp3">
                        <source id="sFeelings"
                                src="${sbAlbumPath}${sbMp3FileNames[4]}.mp3">
                        <source id="sWhereIsRmVd"
                                src="${sbAlbumPath}${sbMp3FileNames[5]}.mp3">
                        <source id="sSkunkBass"
                                src="${sbAlbumPath}${sbMp3FileNames[6]}.mp3">
                        <source id="sAntibiotixxx"
                                src="${sbAlbumPath}${sbMp3FileNames[7]}.mp3">
                        <source id="sF4d3dh0u534nth3m"
                                src="${sbAlbumPath}${sbMp3FileNames[8]}.mp3">
                        <source id="sCoffee&Incense"
                                src="${sbAlbumPath}${sbMp3FileNames[9]}.mp3">
                        <source id="sFUUUUUUUCK"
                                src="${sbAlbumPath}${sbMp3FileNames[10]}.mp3">
                        <source id="sLikeSquids"
                                src="${sbAlbumPath}${sbMp3FileNames[11]}.mp3">
                        <source id="sCapsule"
                                src="${sbAlbumPath}${sbMp3FileNames[12]}.mp3">
                        <source id="sStayBombin"
                                src="${sbAlbumPath}${sbMp3FileNames[13]}.mp3">
                        <source id="fSkatingOnDryIce"
                                src="${sbAlbumPath}${sbMp3FileNames[14]}.mp3">
                    </audio>
                    <div class="releaseNotes">
                        <p style="color: #FFFFFF;
                                  font-size: 16;
                                  margin: 5;">
                            <br><br>
                            <b>released:</b> 16 January 2015
                            <br>
                            <b>produced:</b> September 2014 - January 2015
                            <br>
                            <br>
                            <b>Secretary of Funk</b> (production, composition, mixing, synths,
                                                      vocals)
                            <br>
                            <b>audio paralysis</b> (guitars)
                            <br>
                            <b>apik</b> (guitars)
                        </p>
                    </div>
                </div>
            </div>
            <hr style="background-color: white;
                       height: 5px;
                       width: 65%;">
            <div class="album">
                <img src="discography/psynkhole_cover.JPG"
                     width="40%">
                <div class="albumInfo">
                    <div class="albumTitle">
                        <p style="color: #FFFFFF;
                                  font-size: 32;
                                  margin: 5;">
                            <b>Psynkhole</b>
                            <br><br>
                        </p>
                    </div>
                    <div class="flex-column">`
          + getTrackListColumn(phTrackSuffixes, phTrackTitles, phTrackDurations) +
`
                        <br><br> <!-- Space between track titles and audio player controls. --->
                    </div>
                    <audio controls id="aPsynkhole">
                        <source id="sSongAboutYou"
                                src="${phAlbumPath}${phMp3FileNames[0]}.mp3">
                        <source id="sLeapOfFaith"
                                src="${phAlbumPath}${phMp3FileNames[1]}.mp3">
                        <source id="sInterplanetaryJamSesh"
                                src="${phAlbumPath}${phMp3FileNames[2]}.mp3">
                        <source id="sTakeUpThyAxeAndSetThisForestAblaze"
                                src="${phAlbumPath}${phMp3FileNames[3]}.mp3">
                        <source id="sCrawlingIntoTheFireplace"
                                src="${phAlbumPath}${phMp3FileNames[4]}.mp3">
                        <source id="sTheFunkBackTooManyTimes"
                                src="${phAlbumPath}${phMp3FileNames[5]}.mp3">
                        <source id="sInsideThePsynkhole"
                                src="${phAlbumPath}${phMp3FileNames[6]}.mp3">
                        <source id="sLeavesReplacement"
                                src="${phAlbumPath}${phMp3FileNames[7]}.mp3">
                        <source id="sOldFriend"
                                src="${phAlbumPath}${phMp3FileNames[8]}.mp3">
                        <source id="sUt"
                                src="${phAlbumPath}${phMp3FileNames[9]}.mp3">
                        <source id="sSolipsistHymn"
                                src="${phAlbumPath}${phMp3FileNames[10]}.mp3">
                        <source id="sIUsedToWatchBirds"
                                src="${phAlbumPath}${phMp3FileNames[11]}.mp3">
                        <source id="sNuclearWarfare"
                                src="${phAlbumPath}${phMp3FileNames[12]}.mp3">
                        <source id="sCosmicZoo"
                                src="${phAlbumPath}${phMp3FileNames[13]}.mp3">
                        <source id="sNoExpirationDate"
                                src="${phAlbumPath}${phMp3FileNames[14]}.mp3">
                        <source id="sPostcardsLimited"
                                src="${phAlbumPath}${phMp3FileNames[15]}.mp3">
                        <source id="sDecentHat"
                                src="${phAlbumPath}${phMp3FileNames[16]}.mp3">
                        <source id="sBerries"
                                src="${phAlbumPath}${phMp3FileNames[17]}.mp3">
                        <source id="sElohknysp"
                                src="${phAlbumPath}${phMp3FileNames[18]}.mp3">
                        <source id="fPressItEqualizeIt"
                                src="${phAlbumPath}${phMp3FileNames[19]}.mp3">
                    </audio>
                    <div class="releaseNotes">
                        <p style="color: #FFFFFF;
                                  font-size: 16;
                                  margin: 5;">
                            <br><br>
                            <b>released:</b> 17 July 2013
                            <br>
                            <b>produced:</b> October 2012 - July 2013
                            <br>
                            <br>
                            <b>The Angola Horror</b> (production, composition, mixing, synths)
                        </p>
                    </div>
                </div>
            </div>
            <hr style="background-color: white;
                       height: 5px;
                       width: 65%;">
            <div class="album">
                <img src="discography/1320_cover.png"
                     width="40%">
                <div class="albumInfo">
                    <div class="albumTitle">
                        <p style="color: #FFFFFF;
                                  font-size: 32;
                                  margin: 5;">
                            <b>$1320</b>
                            <br><br>
                        </p>
                    </div>
                    <div class="flex-column">
                        `
          + getTrackListColumn(d1320TrackSuffixes, d1320TrackTitles, d1320TrackDurations) +
`
                        <br><br> <!-- Space between track titles and audio player controls. --->
                    </div>
                    <audio controls id="a$1320">
                        <source id="sRunThatTurkey"
                                src="${d1320AlbumPath}${d1320Mp3FileNames[0]}.mp3">
                        <source id="sDuelOnTheBlackKeys"
                                src="${d1320AlbumPath}${d1320Mp3FileNames[1]}.mp3">
                        <source id="sArcticOcean"
                                src="${d1320AlbumPath}${d1320Mp3FileNames[2]}.mp3">
                        <source id="sUp"
                                src="${d1320AlbumPath}${d1320Mp3FileNames[3]}.mp3">
                        <source id="sIntoTheOven"
                                src="${d1320AlbumPath}${d1320Mp3FileNames[4]}.mp3">
                        <source id="s;068"
                                src="${d1320AlbumPath}${d1320Mp3FileNames[5]}.mp3">
                        <source id="sMartyrs"
                                src="${d1320AlbumPath}${d1320Mp3FileNames[6]}.mp3">
                        <source id="sLostInSpaceWithoutADrumkit"
                                src="${d1320AlbumPath}${d1320Mp3FileNames[7]}.mp3">
                        <source id="sHashBrownSandwiches"
                                src="${d1320AlbumPath}${d1320Mp3FileNames[8]}.mp3">
                        <source id="sCircus"
                                src="${d1320AlbumPath}${d1320Mp3FileNames[9]}.mp3">
                        <source id="sProdigalSon"
                                src="${d1320AlbumPath}${d1320Mp3FileNames[10]}.mp3">
                        <source id="sGreyGoo"
                                src="${d1320AlbumPath}${d1320Mp3FileNames[11]}.mp3">
                        <source id="sWorldPeanutInvasion"
                                src="${d1320AlbumPath}${d1320Mp3FileNames[12]}.mp3">
                        <source id="sBewareTheTallGrass"
                                src="${d1320AlbumPath}${d1320Mp3FileNames[13]}.mp3">
                        <source id="fTheEndOfTheWorld"
                                src="${d1320AlbumPath}${d1320Mp3FileNames[14]}.mp3">
                    </audio>
                    <div class="releaseNotes">
                        <p style="color: #FFFFFF;
                                  font-size: 16;
                                  margin: 5;">
                            <br><br>
                            <b>released:</b> 17 October 2012
                            <br>
                            <b>produced:</b> January 2012 - October 2012
                            <br>
                            <br>
                            <b>Discount Musician</b> (production, composition, mixing)
                        </p>
                    </div>
                </div>
            </div>
        </div>
    `;
} // getDiscographyContent()

function getTrackListColumn(trackSuffixes, trackTitles, trackDurations)
{
    // This function assumes that all three parameter arrays are the same length.
    const parameterArrayLength = trackSuffixes.length;
    const greatestSingleDigitNumber = 9;
    const paddingZero = "0";
    var trackSuffix = "";
    var trackTitle = "";
    var trackDuration = "";
    var trackListColumn = "";
    for (var arrayIndex = 0; arrayIndex < parameterArrayLength; arrayIndex++)
    {
        var trackNumber = (arrayIndex + 1).toString();
        if (arrayIndex < greatestSingleDigitNumber)
        {
            trackNumber = paddingZero + trackNumber;
        }
        trackSuffix = trackSuffixes[arrayIndex];
        trackTitle = trackTitles[arrayIndex];
        trackDuration = trackDurations[arrayIndex];
        trackListColumn += getTrackRow(trackSuffix, trackNumber, trackTitle, trackDuration);
    }
    return trackListColumn;
} // getTrackListColumn()

function getTrackRow(trackSuffix, trackNumber, trackTitle, trackDuration)
{
    return `
                        <div class="trackRow">
                            <img id="p${trackSuffix}"
                                 src="discography/playArrow.png"
                                 style="visibility: hidden;" />
                            <div class="trackNumber">
                                <p class="trackText"
                                   id="n${trackSuffix}">
                                    ${trackNumber}.)
                                </p>
                            </div>
                            <div class="trackTitle">
                                <p class="trackText"
                                   id="t${trackSuffix}">
                                    ${trackTitle}
                                </p>
                            </div>
                            <div class="trackDuration">
                                <p class="trackText"
                                   id="d${trackSuffix}">
                                    (${trackDuration})
                                </p>
                            </div>
                        </div>`;
} // getTrackRow()
