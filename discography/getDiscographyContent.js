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

function getDiscographyContent() {
    const returnValue = `
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
                        + getTrackListColumn(mtBangerTrackSuffixes, mtBangerTrackTitles, mtBangerTrackTimes) +
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
                        + getTrackListColumn(fairUseOfTheCochleaTrackSuffixes, fairUseOfTheCochleaTrackTitles, fairUseOfTheCochleaTrackTimes) +
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
                        + getTrackListColumn(corneliusSquatgoodTrackSuffixes, corneliusSquatgoodTrackTitles, corneliusSquatgoodTrackTimes) +
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
                        + getTrackListColumn(dumbFunTrackSuffixes, dumbFunTrackTitles, dumbFunTrackTimes) +
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
                        + getTrackListColumn(wereAllPrawnsTrackSuffixes, wereAllPrawnsTrackTitles, wereAllPrawnsTrackTimes) +
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
                        + getTrackListColumn(skunkBassTrackSuffixes, skunkBassTrackTitles, skunkBassTrackTimes) +
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
                        + getTrackListColumn(psynkholeTrackSuffixes, psynkholeTrackTitles, psynkholeTrackTimes) +
`
                        <br><br> <!-- Space between track titles and audio player controls. --->
                    </div>
                    <audio controls id="aPsynkhole">
                        <source id="sSongAboutYou"
                                src="${psynkholeAlbumPath}${psynkholeMp3FileNames[0]}.mp3">
                        <source id="sLeapOfFaith"
                                src="${psynkholeAlbumPath}${psynkholeMp3FileNames[1]}.mp3">
                        <source id="sInterplanetaryJamSesh"
                                src="${psynkholeAlbumPath}${psynkholeMp3FileNames[2]}.mp3">
                        <source id="sTakeUpThyAxeAndSetThisForestAblaze"
                                src="${psynkholeAlbumPath}${psynkholeMp3FileNames[3]}.mp3">
                        <source id="sCrawlingIntoTheFireplace"
                                src="${psynkholeAlbumPath}${psynkholeMp3FileNames[4]}.mp3">
                        <source id="sTheFunkBackTooManyTimes"
                                src="${psynkholeAlbumPath}${psynkholeMp3FileNames[5]}.mp3">
                        <source id="sInsideThePsynkhole"
                                src="${psynkholeAlbumPath}${psynkholeMp3FileNames[6]}.mp3">
                        <source id="sLeavesReplacement"
                                src="${psynkholeAlbumPath}${psynkholeMp3FileNames[7]}.mp3">
                        <source id="sOldFriend"
                                src="${psynkholeAlbumPath}${psynkholeMp3FileNames[8]}.mp3">
                        <source id="sUt"
                                src="${psynkholeAlbumPath}${psynkholeMp3FileNames[9]}.mp3">
                        <source id="sSolipsistHymn"
                                src="${psynkholeAlbumPath}${psynkholeMp3FileNames[10]}.mp3">
                        <source id="sIUsedToWatchBirds"
                                src="${psynkholeAlbumPath}${psynkholeMp3FileNames[11]}.mp3">
                        <source id="sNuclearWarfare"
                                src="${psynkholeAlbumPath}${psynkholeMp3FileNames[12]}.mp3">
                        <source id="sCosmicZoo"
                                src="${psynkholeAlbumPath}${psynkholeMp3FileNames[13]}.mp3">
                        <source id="sNoExpirationDate"
                                src="${psynkholeAlbumPath}${psynkholeMp3FileNames[14]}.mp3">
                        <source id="sPostcardsLimited"
                                src="${psynkholeAlbumPath}${psynkholeMp3FileNames[15]}.mp3">
                        <source id="sDecentHat"
                                src="${psynkholeAlbumPath}${psynkholeMp3FileNames[16]}.mp3">
                        <source id="sBerries"
                                src="${psynkholeAlbumPath}${psynkholeMp3FileNames[17]}.mp3">
                        <source id="sElohknysp"
                                src="${psynkholeAlbumPath}${psynkholeMp3FileNames[18]}.mp3">
                        <source id="fPressItEqualizeIt"
                                src="${psynkholeAlbumPath}${psynkholeMp3FileNames[19]}.mp3">
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
                        + getTrackListColumn(the1320TrackSuffixes, the1320TrackTitles, the1320TrackTimes) +
`
                        <br><br> <!-- Space between track titles and audio player controls. --->
                    </div>
                    <audio controls id="a$1320">
                        <source id="sRunThatTurkey"
                                src="${the1320AlbumPath}${the1320Mp3FileNames[0]}.mp3">
                        <source id="sDuelOnTheBlackKeys"
                                src="${the1320AlbumPath}${the1320Mp3FileNames[1]}.mp3">
                        <source id="sArcticOcean"
                                src="${the1320AlbumPath}${the1320Mp3FileNames[2]}.mp3">
                        <source id="sUp"
                                src="${the1320AlbumPath}${the1320Mp3FileNames[3]}.mp3">
                        <source id="sIntoTheOven"
                                src="${the1320AlbumPath}${the1320Mp3FileNames[4]}.mp3">
                        <source id="s;068"
                                src="${the1320AlbumPath}${the1320Mp3FileNames[5]}.mp3">
                        <source id="sMartyrs"
                                src="${the1320AlbumPath}${the1320Mp3FileNames[6]}.mp3">
                        <source id="sLostInSpaceWithoutADrumkit"
                                src="${the1320AlbumPath}${the1320Mp3FileNames[7]}.mp3">
                        <source id="sHashBrownSandwiches"
                                src="${the1320AlbumPath}${the1320Mp3FileNames[8]}.mp3">
                        <source id="sCircus"
                                src="${the1320AlbumPath}${the1320Mp3FileNames[9]}.mp3">
                        <source id="sProdigalSon"
                                src="${the1320AlbumPath}${the1320Mp3FileNames[10]}.mp3">
                        <source id="sGreyGoo"
                                src="${the1320AlbumPath}${the1320Mp3FileNames[11]}.mp3">
                        <source id="sWorldPeanutInvasion"
                                src="${the1320AlbumPath}${the1320Mp3FileNames[12]}.mp3">
                        <source id="sBewareTheTallGrass"
                                src="${the1320AlbumPath}${the1320Mp3FileNames[13]}.mp3">
                        <source id="fTheEndOfTheWorld"
                                src="${the1320AlbumPath}${the1320Mp3FileNames[14]}.mp3">
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

    return returnValue; // TODO: Make sure that this line is tested.
} // getDiscographyContent()

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

function getTrackListColumn(trackSuffixes, trackTitles, trackTimes) // TODO: Make sure that this function is tested.
{
    var trackListColumn = ""; // TODO: Make sure that this line is tested.
    for (var i = 0; i < trackSuffixes.length; i++) // TODO: Make sure that this line is tested.
    {
        var trackNumber = i + 1; // TODO -- TEST
        var trackNumberStr = ""; // TODO -- TEST
        if (i < 9) // TODO: Magic number. // TODO -- TEST
        {
            trackNumberStr = "0" + (i + 1).toString(); // TODO -- TEST
        }
        else
        {
            trackNumberStr = (i + 1).toString(); // TODO -- TEST
        }
        trackListColumn += getTrackRow(trackSuffixes[i], trackNumberStr, trackTitles[i], trackTimes[i]); // TODO -- TEST
    }
    return trackListColumn; // TODO -- TEST
} // getTrackListColumn()

function getTrackRow(suffix, trackNumber, trackTitle, trackDuration) // TODO: Make sure that this function is tested.
{
    return `
                        <div class="trackRow">
                            <img id="p${suffix}"
                                 src="discography/playArrow.png"
                                 style="visibility: hidden;" />
                            <div class="trackNumber">
                                <p class="trackText"
                                   id="n${suffix}">
                                    ${trackNumber}.)
                                </p>
                            </div>
                            <div class="trackTitle">
                                <p class="trackText"
                                   id="t${suffix}">
                                    ${trackTitle}
                                </p>
                            </div>
                            <div class="trackDuration">
                                <p class="trackText"
                                   id="d${suffix}">
                                    (${trackDuration})
                                </p>
                            </div>
                        </div>`
} // getTrackRow()
