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
                    <div class="flex-column">
                        <div class="trackRow">
                            <img id="pEveryMuscleIsMoving"
                                 src="discography/playArrow.png"
                                 style="visibility: hidden;" />
                            <div class="trackNumber">
                                <p class="trackText"
                                   id="nEveryMuscleIsMoving">
                                    01.)
                                </p>
                            </div>
                            <div class="trackTitle">
                                <p class="trackText"
                                   id="tEveryMuscleIsMoving">
                                    every muscle is moving
                                </p>
                            </div>
                            <div class="trackDuration">
                                <p class="trackText"
                                   id="dEveryMuscleIsMoving">
                                    (1:20)
                                </p>
                            </div>
                        </div>
                        <div class="trackRow">
                            <img id="pComfortZone"
                                 src="discography/playArrow.png"
                                 style="visibility: hidden;" />
                            <div class="trackNumber">
                                <p class="trackText"
                                   id="nComfortZone">
                                    02.)
                                </p>
                            </div>
                            <div class="trackTitle">
                                <p class="trackText"
                                   id="tComfortZone">
                                    comfort zone
                                </p>
                            </div>
                            <div class="trackDuration">
                                <p class="trackText"
                                   id="dComfortZone">
                                    (4:00)
                                </p>
                            </div>
                        </div>
                        <div class="trackRow">
                            <img id="pBreakMyBones"
                                 src="discography/playArrow.png"
                                 style="visibility: hidden;" />
                            <div class="trackNumber">
                                <p class="trackText"
                                   id="nBreakMyBones">
                                    03.)
                                </p>
                            </div>
                            <div class="trackTitle">
                                <p class="trackText"
                                   id="tBreakMyBones">
                                    break my bones
                                </p>
                            </div>
                            <div class="trackDuration">
                                <p class="trackText"
                                   id="dBreakMyBones">
                                    (3:04)
                                </p>
                            </div>
                        </div>
                        <div class="trackRow">
                            <img id="pCampbellHill"
                                 src="discography/playArrow.png"
                                 style="visibility: hidden;" />
                            <div class="trackNumber">
                                <p class="trackText"
                                   id="nCampbellHill">
                                    04.)
                                </p>
                            </div>
                            <div class="trackTitle">
                                <p class="trackText"
                                   id="tCampbellHill">
                                    campbell hill
                                </p>
                            </div>
                            <div class="trackDuration">
                                <p class="trackText"
                                   id="dCampbellHill">
                                    (1:03)
                                </p>
                            </div>
                        </div>
                        <div class="trackRow">
                            <img id="pElectricLullaby"
                                 src="discography/playArrow.png"
                                 style="visibility: hidden;" />
                            <div class="trackNumber">
                                <p class="trackText"
                                   id="nElectricLullaby">
                                    05.)
                                </p>
                            </div>
                            <div class="trackTitle">
                                <p class="trackText"
                                   id="tElectricLullaby">
                                    electric lullaby
                                </p>
                            </div>
                            <div class="trackDuration">
                                <p class="trackText"
                                   id="dElectricLullaby">
                                    (3:49)
                                </p>
                            </div>
                        </div>
                        <div class="trackRow">
                            <img id="pHaloEffect"
                                 src="discography/playArrow.png"
                                 style="visibility: hidden;" />
                            <div class="trackNumber">
                                <p class="trackText"
                                   id="nHaloEffect">
                                    06.)
                                </p>
                            </div>
                            <div class="trackTitle">
                                <p class="trackText"
                                   id="tHaloEffect">
                                    halo effect
                                </p>
                            </div>
                            <div class="trackDuration">
                                <p class="trackText"
                                   id="dHaloEffect">
                                    (5:34)
                                </p>
                            </div>
                        </div>
                        <div class="trackRow">
                            <img id="pChiliPowder"
                                 src="discography/playArrow.png"
                                 style="visibility: hidden;" />
                            <div class="trackNumber">
                                <p class="trackText"
                                   id="nChiliPowder">
                                    07.)
                                </p>
                            </div>
                            <div class="trackTitle">
                                <p class="trackText"
                                   id="tChiliPowder">
                                    chili powder
                                </p>
                            </div>
                            <div class="trackDuration">
                                <p class="trackText"
                                   id="dChiliPowder">
                                    (4:30)
                                </p>
                            </div>
                        </div>
                        <div class="trackRow">
                            <img id="pNoFeelings"
                                 src="discography/playArrow.png"
                                 style="visibility: hidden;" />
                            <div class="trackNumber">
                                <p class="trackText"
                                   id="nNoFeelings">
                                    08.)
                                </p>
                            </div>
                            <div class="trackTitle">
                                <p class="trackText"
                                   id="tNoFeelings">
                                    no feelings
                                </p>
                            </div>
                            <div class="trackDuration">
                                <p class="trackText"
                                   id="dNoFeelings">
                                    (4:57)
                                </p>
                            </div>
                        </div>
                        <div class="trackRow">
                            <img id="pVicariousPtII"
                                 src="discography/playArrow.png"
                                 style="visibility: hidden;" />
                            <div class="trackNumber">
                                <p class="trackText"
                                   id="nVicariousPtII">
                                    09.)
                                </p>
                            </div>
                            <div class="trackTitle">
                                <p class="trackText"
                                   id="tVicariousPtII">
                                    vicarious (pt. II)
                                </p>
                            </div>
                            <div class="trackDuration">
                                <p class="trackText"
                                   id="dVicariousPtII">
                                    (2:16)
                                </p>
                            </div>
                        </div>
                        <div class="trackRow">
                            <img id="pGold"
                                 src="discography/playArrow.png"
                                 style="visibility: hidden;" />
                            <div class="trackNumber">
                                <p class="trackText"
                                   id="nGold">
                                    10.)
                                </p>
                            </div>
                            <div class="trackTitle">
                                <p class="trackText"
                                   id="tGold">
                                    gold
                                </p>
                            </div>
                            <div class="trackDuration">
                                <p class="trackText"
                                   id="dGold">
                                    (1:49)
                                </p>
                            </div>
                        </div>
                        <div class="trackRow">
                            <img id="pNextToYou"
                                 src="discography/playArrow.png"
                                 style="visibility: hidden;" />
                            <div class="trackNumber">
                                <p class="trackText"
                                   id="nNextToYou">
                                    11.)
                                </p>
                            </div>
                            <div class="trackTitle">
                                <p class="trackText"
                                   id="tNextToYou">
                                    next to you
                                </p>
                            </div>
                            <div class="trackDuration">
                                <p class="trackText"
                                   id="dNextToYou">
                                    (3:38)
                                </p>
                            </div>
                        </div>
                        <div class="trackRow">
                            <img id="pGone?"
                                 src="discography/playArrow.png"
                                 style="visibility: hidden;" />
                            <div class="trackNumber">
                                <p class="trackText"
                                   id="nGone?">
                                    12.)
                                </p>
                            </div>
                            <div class="trackTitle">
                                <p class="trackText"
                                   id="tGone?">
                                    gone?
                                </p>
                            </div>
                            <div class="trackDuration">
                                <p class="trackText"
                                   id="dGone?">
                                    (1:27)
                                </p>
                            </div>
                        </div>
                        <div class="trackRow">
                            <img id="p1,001"
                                 src="discography/playArrow.png"
                                 style="visibility: hidden;" />
                            <div class="trackNumber">
                                <p class="trackText"
                                   id="n1,001">
                                    13.)
                                </p>
                            </div>
                            <div class="trackTitle">
                                <p class="trackText"
                                   id="t1,001">
                                    1,001
                                </p>
                            </div>
                            <div class="trackDuration">
                                <p class="trackText"
                                   id="d1,001">
                                    (4:59)
                                </p>
                            </div>
                        </div>
                        <div class="trackRow">
                            <img id="pYouNeverSaid"
                                 src="discography/playArrow.png"
                                 style="visibility: hidden;" />
                            <div class="trackNumber">
                                <p class="trackText"
                                   id="nYouNeverSaid">
                                    14.)
                                </p>
                            </div>
                            <div class="trackTitle">
                                <p class="trackText"
                                   id="tYouNeverSaid">
                                    you never said
                                </p>
                            </div>
                            <div class="trackDuration">
                                <p class="trackText"
                                   id="dYouNeverSaid">
                                    (3:59)
                                </p>
                            </div>
                        </div>
                        <div class="trackRow">
                            <img id="pGhost"
                                 src="discography/playArrow.png"
                                 style="visibility: hidden;" />
                            <div class="trackNumber">
                                <p class="trackText"
                                   id="nGhost">
                                    15.)
                                </p>
                            </div>
                            <div class="trackTitle">
                                <p class="trackText"
                                   id="tGhost">
                                    ghost
                                </p>
                            </div>
                            <div class="trackDuration">
                                <p class="trackText"
                                   id="dGhost">
                                    (4:18)
                                </p>
                            </div>
                        </div>
                        <div class="trackRow">
                            <img id="pVicariousPtI"
                                 src="discography/playArrow.png"
                                 style="visibility: hidden;" />
                            <div class="trackNumber">
                                <p class="trackText"
                                   id="nVicariousPtI">
                                    16.)
                                </p>
                            </div>
                            <div class="trackTitle">
                                <p class="trackText"
                                   id="tVicariousPtI">
                                    vicarious (pt. I)
                                </p>
                            </div>
                            <div class="trackDuration">
                                <p class="trackText"
                                   id="dVicariousPtI">
                                    (3:45)
                                </p>
                            </div>
                        </div>
                        <div class="trackRow">
                            <img id="pYouveBeenExposed!"
                                 src="discography/playArrow.png"
                                 style="visibility: hidden;" />
                            <div class="trackNumber">
                                <p class="trackText"
                                   id="nYouveBeenExposed!">
                                    17.)
                                </p>
                            </div>
                            <div class="trackTitle">
                                <p class="trackText"
                                   id="tYouveBeenExposed!">
                                    you've been exposed!
                                </p>
                            </div>
                            <div class="trackDuration">
                                <p class="trackText"
                                   id="dYouveBeenExposed!">
                                    (2:22)
                                </p>
                            </div>
                        </div>
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
                    <div class="flex-column">
                        <div class="trackRow">
                            <img id="pThanks"
                                 src="discography/playArrow.png"
                                 style="visibility: hidden;" />
                            <div class="trackNumber">
                                <p class="trackText"
                                   id="nThanks">
                                    01.)
                                </p>
                            </div>
                            <div class="trackTitle">
                                <p class="trackText"
                                   id="tThanks">
                                    Thanks
                                </p>
                            </div>
                            <div class="trackDuration">
                                <p class="trackText"
                                   id="dThanks">
                                    (1:00)
                                </p>
                            </div>
                        </div>
                        <div class="trackRow">
                            <img id="pEverythingInFront"
                                 src="discography/playArrow.png"
                                 style="visibility: hidden;" />
                            <div class="trackNumber">
                                <p class="trackText"
                                   id="nEverythingInFront">
                                    02.)
                                </p>
                            </div>
                            <div class="trackTitle">
                                <p class="trackText"
                                   id="tEverythingInFront">
                                    Everything in Front
                                </p>
                            </div>
                            <div class="trackDuration">
                                <p class="trackText"
                                   id="dEverythingInFront">
                                    (3:37)
                                </p>
                            </div>
                        </div>
                        <div class="trackRow">
                            <img id="pSolarBurglarySwag"
                                 src="discography/playArrow.png"
                                 style="visibility: hidden;" />
                            <div class="trackNumber">
                                <p class="trackText"
                                   id="nSolarBurglarySwag">
                                    03.)
                                </p>
                            </div>
                            <div class="trackTitle">
                                <p class="trackText"
                                   id="tSolarBurglarySwag">
                                    Solar Burglary Swag
                                </p>
                            </div>
                            <div class="trackDuration">
                                <p class="trackText"
                                   id="dSolarBurglarySwag">
                                    (2:48)
                                </p>
                            </div>
                        </div>
                        <div class="trackRow">
                            <img id="pGregsBirdfeeder"
                                 src="discography/playArrow.png"
                                 style="visibility: hidden;" />
                            <div class="trackNumber">
                                <p class="trackText"
                                   id="nGregsBirdfeeder">
                                    04.)
                                </p>
                            </div>
                            <div class="trackTitle">
                                <p class="trackText"
                                   id="tGregsBirdfeeder">
                                    Greg's Birdfeeder
                                </p>
                            </div>
                            <div class="trackDuration">
                                <p class="trackText"
                                   id="dGregsBirdfeeder">
                                    (3:44)
                                </p>
                            </div>
                        </div>
                        <div class="trackRow">
                            <img id="pFamiliarConversations"
                                 src="discography/playArrow.png"
                                 style="visibility: hidden;" />
                            <div class="trackNumber">
                                <p class="trackText"
                                   id="nFamiliarConversations">
                                    05.)
                                </p>
                            </div>
                            <div class="trackTitle">
                                <p class="trackText"
                                   id="tFamiliarConversations">
                                    Familiar Conversations
                                </p>
                            </div>
                            <div class="trackDuration">
                                <p class="trackText"
                                   id="dFamiliarConversations">
                                    (4:25)
                                </p>
                            </div>
                        </div>
                        <div class="trackRow">
                            <img id="pOhItHurtsToLiveAndBreathe"
                                 src="discography/playArrow.png"
                                 style="visibility: hidden;" />
                            <div class="trackNumber">
                                <p class="trackText"
                                   id="nOhItHurtsToLiveAndBreathe">
                                    06.)
                                </p>
                            </div>
                            <div class="trackTitle">
                                <p class="trackText"
                                   id="tOhItHurtsToLiveAndBreathe">
                                    Oh, It Hurts to Live and Breathe
                                </p>
                            </div>
                            <div class="trackDuration">
                                <p class="trackText"
                                   id="dOhItHurtsToLiveAndBreathe">
                                    (4:11)
                                </p>
                            </div>
                        </div>
                        <div class="trackRow">
                            <img id="pDelayedShipment"
                                 src="discography/playArrow.png"
                                 style="visibility: hidden;" />
                            <div class="trackNumber">
                                <p class="trackText"
                                   id="nDelayedShipment">
                                    07.)
                                </p>
                            </div>
                            <div class="trackTitle">
                                <p class="trackText"
                                   id="tDelayedShipment">
                                    Delayed Shipment
                                </p>
                            </div>
                            <div class="trackDuration">
                                <p class="trackText"
                                   id="dDelayedShipment">
                                    (0:30)
                                </p>
                            </div>
                        </div>
                        <div class="trackRow">
                            <img id="pChambersRoad"
                                 src="discography/playArrow.png"
                                 style="visibility: hidden;" />
                            <div class="trackNumber">
                                <p class="trackText"
                                   id="nChambersRoad">
                                    08.)
                                </p>
                            </div>
                            <div class="trackTitle">
                                <p class="trackText"
                                   id="tChambersRoad">
                                    Chambers Road
                                </p>
                            </div>
                            <div class="trackDuration">
                                <p class="trackText"
                                   id="dChambersRoad">
                                    (3:06)
                                </p>
                            </div>
                        </div>
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
                    <div class="flex-column">
                        <div class="trackRow">
                            <img id="p0utr0"
                                 src="discography/playArrow.png"
                                 style="visibility: hidden;" />
                            <div class="trackNumber">
                                <p class="trackText"
                                   id="n0utr0">
                                    01.)
                                </p>
                            </div>
                            <div class="trackTitle">
                                <p class="trackText"
                                   id="t0utr0">
                                    0utr0
                                </p>
                            </div>
                            <div class="trackDuration">
                                <p class="trackText"
                                   id="d0utr0">
                                    (1:29)
                                </p>
                            </div>
                        </div>
                        <div class="trackRow">
                            <img id="pSkyDiiiveUncovahd"
                                 src="discography/playArrow.png"
                                 style="visibility: hidden;" />
                            <div class="trackNumber">
                                <p class="trackText"
                                   id="nSkyDiiiveUncovahd">
                                    02.)
                                </p>
                            </div>
                            <div class="trackTitle">
                                <p class="trackText"
                                   id="tSkyDiiiveUncovahd">
                                    skyDiiive [uncovah'd]
                                </p>
                            </div>
                            <div class="trackDuration">
                                <p class="trackText"
                                   id="dSkyDiiiveUncovahd">
                                    (3:48)
                                </p>
                            </div>
                        </div>
                        <div class="trackRow">
                            <img id="pABriefDisclaimerInTheInterestOfYourSafety"
                                 src="discography/playArrow.png"
                                 style="visibility: hidden;" />
                            <div class="trackNumber">
                                <p class="trackText"
                                   id="nABriefDisclaimerInTheInterestOfYourSafety">
                                    03.)
                                </p>
                            </div>
                            <div class="trackTitle">
                                <p class="trackText"
                                   id="tABriefDisclaimerInTheInterestOfYourSafety">
                                    a brief disclaimer in the interest of your safety
                                </p>
                            </div>
                            <div class="trackDuration">
                                <p class="trackText"
                                   id="dABriefDisclaimerInTheInterestOfYourSafety">
                                    (0:41)
                                </p>
                            </div>
                        </div>
                        <div class="trackRow">
                            <img id="pInterplanetaryDialUp"
                                 src="discography/playArrow.png"
                                 style="visibility: hidden;" />
                            <div class="trackNumber">
                                <p class="trackText"
                                   id="nInterplanetaryDialUp">
                                    04.)
                                </p>
                            </div>
                            <div class="trackTitle">
                                <p class="trackText"
                                   id="tInterplanetaryDialUp">
                                    interplanetary dial-up
                                </p>
                            </div>
                            <div class="trackDuration">
                                <p class="trackText"
                                   id="dInterplanetaryDialUp">
                                    (3:39)
                                </p>
                            </div>
                        </div>
                        <div class="trackRow">
                            <img id="pLiveFromInsideTwoWashingMachines"
                                 src="discography/playArrow.png"
                                 style="visibility: hidden;" />
                            <div class="trackNumber">
                                <p class="trackText"
                                   id="nLiveFromInsideTwoWashingMachines">
                                    05.)
                                </p>
                            </div>
                            <div class="trackTitle">
                                <p class="trackText"
                                   id="tLiveFromInsideTwoWashingMachines">
                                    Live! From inside two washing machines
                                </p>
                            </div>
                            <div class="trackDuration">
                                <p class="trackText"
                                   id="dLiveFromInsideTwoWashingMachines">
                                    (4:33)
                                </p>
                            </div>
                        </div>
                        <div class="trackRow">
                            <img id="pPreviewOfYourDeathTerlinguaSun"
                                 src="discography/playArrow.png"
                                 style="visibility: hidden;" />
                            <div class="trackNumber">
                                <p class="trackText"
                                   id="nPreviewOfYourDeathTerlinguaSun">
                                    06.)
                                </p>
                            </div>
                            <div class="trackTitle">
                                <p class="trackText"
                                   id="tPreviewOfYourDeathTerlinguaSun">
                                    preview of your death / Terlingua sun
                                </p>
                            </div>
                            <div class="trackDuration">
                                <p class="trackText"
                                   id="dPreviewOfYourDeathTerlinguaSun">
                                    (3:41)
                                </p>
                            </div>
                        </div>
                        <div class="trackRow">
                            <img id="pDigitalAcoustic"
                                 src="discography/playArrow.png"
                                 style="visibility: hidden;" />
                            <div class="trackNumber">
                                <p class="trackText"
                                   id="nDigitalAcoustic">
                                    07.)
                                </p>
                            </div>
                            <div class="trackTitle">
                                <p class="trackText"
                                   id="tDigitalAcoustic">
                                    digital --> acoustic
                                </p>
                            </div>
                            <div class="trackDuration">
                                <p class="trackText"
                                   id="dDigitalAcoustic">
                                    (1:27)
                                </p>
                            </div>
                        </div>
                        <div class="trackRow">
                            <img id="pBINITUStELLTOWER"
                                 src="discography/playArrow.png"
                                 style="visibility: hidden;" />
                            <div class="trackNumber">
                                <p class="trackText"
                                   id="nBINITUStELLTOWER">
                                    08.)
                                </p>
                            </div>
                            <div class="trackTitle">
                                <p class="trackText"
                                   id="tBINITUStELLTOWER">
                                    bINITUStELLTOWER
                                </p>
                            </div>
                            <div class="trackDuration">
                                <p class="trackText"
                                   id="dBINITUStELLTOWER">
                                    (2:45)
                                </p>
                            </div>
                        </div>
                        <div class="trackRow">
                            <img id="pTheMachineryOfLife"
                                 src="discography/playArrow.png"
                                 style="visibility: hidden;" />
                            <div class="trackNumber">
                                <p class="trackText"
                                   id="nTheMachineryOfLife">
                                    09.)
                                </p>
                            </div>
                            <div class="trackTitle">
                                <p class="trackText"
                                   id="tTheMachineryOfLife">
                                    the machinery of life [keeps moving; within-absolute-refuge
                                    from the aforementioned] always
                                </p>
                            </div>
                            <div class="trackDuration">
                                <p class="trackText"
                                   id="dTheMachineryOfLife">
                                    (4:07)
                                </p>
                            </div>
                        </div>
                        <div class="trackRow">
                            <img id="pSteamGoatSpaceGoatNeverGoatSpaceBanjoMix"
                                 src="discography/playArrow.png"
                                 style="visibility: hidden;" />
                            <div class="trackNumber">
                                <p class="trackText"
                                   id="nSteamGoatSpaceGoatNeverGoatSpaceBanjoMix">
                                    10.)
                                </p>
                            </div>
                            <div class="trackTitle">
                                <p class="trackText"
                                   id="tSteamGoatSpaceGoatNeverGoatSpaceBanjoMix">
                                    steam-goat-space-goat-never-goat [space banjo mix]
                                </p>
                            </div>
                            <div class="trackDuration">
                                <p class="trackText"
                                   id="dSteamGoatSpaceGoatNeverGoatSpaceBanjoMix">
                                    (3:22)
                                </p>
                            </div>
                        </div>
                        <div class="trackRow">
                            <img id="pBristolMeetsLongBeachOnAWarmSunnyAfternoon"
                                 src="discography/playArrow.png"
                                 style="visibility: hidden;" />
                            <div class="trackNumber">
                                <p class="trackText"
                                   id="nBristolMeetsLongBeachOnAWarmSunnyAfternoon">
                                    11.)
                                </p>
                            </div>
                            <div class="trackTitle">
                                <p class="trackText"
                                   id="tBristolMeetsLongBeachOnAWarmSunnyAfternoon">
                                    bristol meets long beach on a warm, sunny afternoon
                                </p>
                            </div>
                            <div class="trackDuration">
                                <p class="trackText"
                                   id="dBristolMeetsLongBeachOnAWarmSunnyAfternoon">
                                    (1:27)
                                </p>
                            </div>
                        </div>
                        <div class="trackRow">
                            <img id="pStopThatTrain"
                                 src="discography/playArrow.png"
                                 style="visibility: hidden;" />
                            <div class="trackNumber">
                                <p class="trackText"
                                   id="nStopThatTrain">
                                    12.)
                                </p>
                            </div>
                            <div class="trackTitle">
                                <p class="trackText"
                                   id="tStopThatTrain">
                                    stop that train!!
                                </p>
                            </div>
                            <div class="trackDuration">
                                <p class="trackText"
                                   id="dStopThatTrain">
                                    (3:28)
                                </p>
                            </div>
                        </div>
                        <div class="trackRow">
                            <img id="pStuntDoubleLoveAffair"
                                 src="discography/playArrow.png"
                                 style="visibility: hidden;" />
                            <div class="trackNumber">
                                <p class="trackText"
                                   id="nStuntDoubleLoveAffair">
                                    13.)
                                </p>
                            </div>
                            <div class="trackTitle">
                                <p class="trackText"
                                   id="tStuntDoubleLoveAffair">
                                    stunt double love affair
                                </p>
                            </div>
                            <div class="trackDuration">
                                <p class="trackText"
                                   id="dStuntDoubleLoveAffair">
                                    (3:01)
                                </p>
                            </div>
                        </div>
                        <div class="trackRow">
                            <img id="pOkay"
                                 src="discography/playArrow.png"
                                 style="visibility: hidden;" />
                            <div class="trackNumber">
                                <p class="trackText"
                                   id="nOkay">
                                    14.)
                                </p>
                            </div>
                            <div class="trackTitle">
                                <p class="trackText"
                                   id="tOkay">
                                    okay
                                </p>
                            </div>
                            <div class="trackDuration">
                                <p class="trackText"
                                   id="dOkay">
                                    (1:04)
                                </p>
                            </div>
                        </div>
                        <div class="trackRow">
                            <img id="pInWhichIQuietlyWalkOutOfTheRoom"
                                 src="discography/playArrow.png"
                                 style="visibility: hidden;" />
                            <div class="trackNumber">
                                <p class="trackText"
                                   id="nInWhichIQuietlyWalkOutOfTheRoom">
                                    15.)
                                </p>
                            </div>
                            <div class="trackTitle">
                                <p class="trackText"
                                   id="tInWhichIQuietlyWalkOutOfTheRoom">
                                    in which i quietly walk out of the room
                                </p>
                            </div>
                            <div class="trackDuration">
                                <p class="trackText"
                                   id="dInWhichIQuietlyWalkOutOfTheRoom">
                                    (4:31)
                                </p>
                            </div>
                        </div>
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
                    <div class="flex-column">
                        <div class="trackRow">
                            <img id="pHowTheTimesHaveChanged"
                                 src="discography/playArrow.png"
                                 style="visibility: hidden;" />
                            <div class="trackNumber">
                                <p class="trackText"
                                   id="nHowTheTimesHaveChanged">
                                    01.)
                                </p>
                            </div>
                            <div class="trackTitle">
                                <p class="trackText"
                                   id="tHowTheTimesHaveChanged">
                                    how the times have changed [cosmic zoo II]
                                </p>
                            </div>
                            <div class="trackDuration">
                                <p class="trackText"
                                   id="dHowTheTimesHaveChanged">
                                    (5:04)
                                </p>
                            </div>
                        </div>
                        <div class="trackRow">
                            <img id="pStandingWaterAtTheBrooklynMasonicTemple"
                                 src="discography/playArrow.png"
                                 style="visibility: hidden;" />
                            <div class="trackNumber">
                                <p class="trackText"
                                   id="nStandingWaterAtTheBrooklynMasonicTemple">
                                    02.)
                                </p>
                            </div>
                            <div class="trackTitle">
                                <p class="trackText"
                                   id="tStandingWaterAtTheBrooklynMasonicTemple">
                                    standing water in the brooklyn masonic temple
                                </p>
                            </div>
                            <div class="trackDuration">
                                <p class="trackText"
                                   id="dStandingWaterAtTheBrooklynMasonicTemple">
                                    (3:08)
                                </p>
                            </div>
                        </div>
                        <div class="trackRow">
                            <img id="pDumbFun"
                                 src="discography/playArrow.png"
                                 style="visibility: hidden;" />
                            <div class="trackNumber">
                                <p class="trackText"
                                   id="nDumbFun">
                                    03.)
                                </p>
                            </div>
                            <div class="trackTitle">
                                <p class="trackText"
                                   id="tDumbFun">
                                    dumb fun
                                </p>
                            </div>
                            <div class="trackDuration">
                                <p class="trackText"
                                   id="dDumbFun">
                                    (6:04)
                                </p>
                            </div>
                        </div>
                        <div class="trackRow">
                            <img id="pItSeemsIveWanderedIntoTheWrongBakeryAgain"
                                 src="discography/playArrow.png"
                                 style="visibility: hidden;" />
                            <div class="trackNumber">
                                <p class="trackText"
                                   id="nItSeemsIveWanderedIntoTheWrongBakeryAgain">
                                    04.)
                                </p>
                            </div>
                            <div class="trackTitle">
                                <p class="trackText"
                                   id="tItSeemsIveWanderedIntoTheWrongBakeryAgain">
                                    it seems i've wandered into the wrong bakery again
                                </p>
                            </div>
                            <div class="trackDuration">
                                <p class="trackText"
                                   id="dItSeemsIveWanderedIntoTheWrongBakeryAgain">
                                    (4:22)
                                </p>
                            </div>
                        </div>
                        <div class="trackRow">
                            <img id="pElevatorFriends"
                                 src="discography/playArrow.png"
                                 style="visibility: hidden;" />
                            <div class="trackNumber">
                                <p class="trackText"
                                   id="nElevatorFriends">
                                    05.)
                                </p>
                            </div>
                            <div class="trackTitle">
                                <p class="trackText"
                                   id="tElevatorFriends">
                                    elevator friends
                                </p>
                            </div>
                            <div class="trackDuration">
                                <p class="trackText"
                                   id="dElevatorFriends">
                                    (2:36)
                                </p>
                            </div>
                        </div>
                        <div class="trackRow">
                            <img id="pWistful"
                                 src="discography/playArrow.png"
                                 style="visibility: hidden;" />
                            <div class="trackNumber">
                                <p class="trackText"
                                   id="nWistful">
                                    06.)
                                </p>
                            </div>
                            <div class="trackTitle">
                                <p class="trackText"
                                   id="tWistful">
                                    wistful
                                </p>
                            </div>
                            <div class="trackDuration">
                                <p class="trackText"
                                   id="dWistful">
                                    (1:04)
                                </p>
                            </div>
                        </div>
                        <div class="trackRow">
                            <img id="pHoldTight"
                                 src="discography/playArrow.png"
                                 style="visibility: hidden;" />
                            <div class="trackNumber">
                                <p class="trackText"
                                   id="nHoldTight">
                                    07.)
                                </p>
                            </div>
                            <div class="trackTitle">
                                <p class="trackText"
                                   id="tHoldTight">
                                    hold tight
                                </p>
                            </div>
                            <div class="trackDuration">
                                <p class="trackText"
                                   id="dHoldTight">
                                    (2:45)
                                </p>
                            </div>
                        </div>
                        <div class="trackRow">
                            <img id="pIStillRegretNotPuttingTruckNutzOnTheBackOfMattsCar"
                                 src="discography/playArrow.png"
                                 style="visibility: hidden;" />
                            <div class="trackNumber">
                                <p class="trackText"
                                   id="nIStillRegretNotPuttingTruckNutzOnTheBackOfMattsCar">
                                    08.)
                                </p>
                            </div>
                            <div class="trackTitle">
                                <p class="trackText"
                                   id="tIStillRegretNotPuttingTruckNutzOnTheBackOfMattsCar">
                                    i still regret not putting trucknutz on the back of matt's car
                                </p>
                            </div>
                            <div class="trackDuration">
                                <p class="trackText"
                                   id="dIStillRegretNotPuttingTruckNutzOnTheBackOfMattsCar">
                                    (6:57)
                                </p>
                            </div>
                        </div>
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
                    <div class="flex-column">
                        <div class="trackRow">
                            <img id="pYouWillBeMyJalapenoDream"
                                 src="discography/playArrow.png"
                                 style="visibility: hidden;" />
                            <div class="trackNumber">
                                <p class="trackText"
                                   id="nYouWillBeMyJalapenoDream">
                                    01.)
                                </p>
                            </div>
                            <div class="trackTitle">
                                <p class="trackText"
                                   id="tYouWillBeMyJalapenoDream">
                                    You Will Be My Jalapeño Dream
                                </p>
                            </div>
                            <div class="trackDuration">
                                <p class="trackText"
                                   id="dYouWillBeMyJalapenoDream">
                                    (1:51)
                                </p>
                            </div>
                        </div>
                        <div class="trackRow">
                            <img id="pRancidFettuccinneSeamstress"
                                 src="discography/playArrow.png"
                                 style="visibility: hidden;" />
                            <div class="trackNumber">
                                <p class="trackText"
                                   id="nRancidFettuccinneSeamstress">
                                    02.)
                                </p>
                            </div>
                            <div class="trackTitle">
                                <p class="trackText"
                                   id="tRancidFettuccinneSeamstress">
                                    Rancid Fettuccinne Seamstress
                                </p>
                            </div>
                            <div class="trackDuration">
                                <p class="trackText"
                                   id="dRancidFettuccinneSeamstress">
                                    (4:04)
                                </p>
                            </div>
                        </div>
                        <div class="trackRow">
                            <img id="pClamshell"
                                 src="discography/playArrow.png"
                                 style="visibility: hidden;" />
                            <div class="trackNumber">
                                <p class="trackText"
                                   id="nClamshell">
                                    03.)
                                </p>
                            </div>
                            <div class="trackTitle">
                                <p class="trackText"
                                   id="tClamshell">
                                    Clamshell
                                </p>
                            </div>
                            <div class="trackDuration">
                                <p class="trackText"
                                   id="dClamshell">
                                    (1:13)
                                </p>
                            </div>
                        </div>
                        <div class="trackRow">
                            <img id="pSunchange"
                                 src="discography/playArrow.png"
                                 style="visibility: hidden;" />
                            <div class="trackNumber">
                                <p class="trackText"
                                   id="nSunchange">
                                    04.)
                                </p>
                            </div>
                            <div class="trackTitle">
                                <p class="trackText"
                                   id="tSunchange">
                                    Sunchange
                                </p>
                            </div>
                            <div class="trackDuration">
                                <p class="trackText"
                                   id="dSunchange">
                                    (3:10)
                                </p>
                            </div>
                        </div>
                        <div class="trackRow">
                            <img id="pChemicalTruancyOperation"
                                 src="discography/playArrow.png"
                                 style="visibility: hidden;" />
                            <div class="trackNumber">
                                <p class="trackText"
                                   id="nChemicalTruancyOperation">
                                    05.)
                                </p>
                            </div>
                            <div class="trackTitle">
                                <p class="trackText"
                                   id="tChemicalTruancyOperation">
                                    Chemical Truancy Operation
                                </p>
                            </div>
                            <div class="trackDuration">
                                <p class="trackText"
                                   id="dChemicalTruancyOperation">
                                    (2:50)
                                </p>
                            </div>
                        </div>
                        <div class="trackRow">
                            <img id="pUSAGELINKSDONOTCROSSPOLICESAUSAGELINKSDON"
                                 src="discography/playArrow.png"
                                 style="visibility: hidden;" />
                            <div class="trackNumber">
                                <p class="trackText"
                                   id="nUSAGELINKSDONOTCROSSPOLICESAUSAGELINKSDON">
                                    06.)
                                </p>
                            </div>
                            <div class="trackTitle">
                                <p class="trackText"
                                   id="tUSAGELINKSDONOTCROSSPOLICESAUSAGELINKSDON">
                                    |USAGE LINKS DO NOT CROSS POLICE SAUSAGE LINKS DO N|
                                </p>
                            </div>
                            <div class="trackDuration">
                                <p class="trackText"
                                   id="dUSAGELINKSDONOTCROSSPOLICESAUSAGELINKSDON">
                                    (2:34)
                                </p>
                            </div>
                        </div>
                        <div class="trackRow">
                            <img id="pStackTheStepladdersToTheHeavens"
                                 src="discography/playArrow.png"
                                 style="visibility: hidden;" />
                            <div class="trackNumber">
                                <p class="trackText"
                                   id="nStackTheStepladdersToTheHeavens">
                                    07.)
                                </p>
                            </div>
                            <div class="trackTitle">
                                <p class="trackText"
                                   id="tStackTheStepladdersToTheHeavens">
                                    Stack the Stepladders to the Heavens
                                </p>
                            </div>
                            <div class="trackDuration">
                                <p class="trackText"
                                   id="dStackTheStepladdersToTheHeavens">
                                    (6:29)
                                </p>
                            </div>
                        </div>
                        <div class="trackRow">
                            <img id="pWOWGREATCAT"
                                 src="discography/playArrow.png"
                                 style="visibility: hidden;" />
                            <div class="trackNumber">
                                <p class="trackText"
                                   id="nWOWGREATCAT">
                                    08.)
                                </p>
                            </div>
                            <div class="trackTitle">
                                <p class="trackText"
                                   id="tWOWGREATCAT">
                                    WOW!!!! GREAT CAT!!!!!!!
                                </p>
                            </div>
                            <div class="trackDuration">
                                <p class="trackText"
                                   id="dWOWGREATCAT">
                                    (0:41)
                                </p>
                            </div>
                        </div>
                        <div class="trackRow">
                            <img id="pWhereIsMyMind"
                                 src="discography/playArrow.png"
                                 style="visibility: hidden;" />
                            <div class="trackNumber">
                                <p class="trackText"
                                   id="nWhereIsMyMind">
                                    09.)
                                </p>
                            </div>
                            <div class="trackTitle">
                                <p class="trackText"
                                   id="tWhereIsMyMind">
                                    Where is My Mind?
                                </p>
                            </div>
                            <div class="trackDuration">
                                <p class="trackText"
                                   id="dWhereIsMyMind">
                                    (2:56)
                                </p>
                            </div>
                        </div>
                        <div class="trackRow">
                            <img id="pB&EAtTheSourCreamFactory"
                                 src="discography/playArrow.png"
                                 style="visibility: hidden;" />
                            <div class="trackNumber">
                                <p class="trackText"
                                   id="nB&EAtTheSourCreamFactory">
                                    10.)
                                </p>
                            </div>
                            <div class="trackTitle">
                                <p class="trackText"
                                   id="tB&EAtTheSourCreamFactory">
                                    B&E at the Sour Cream Factory
                                </p>
                            </div>
                            <div class="trackDuration">
                                <p class="trackText"
                                   id="dB&EAtTheSourCreamFactory">
                                    (3:43)
                                </p>
                            </div>
                        </div>
                        <div class="trackRow">
                            <img id="pTemptedByTheSpacePudding"
                                 src="discography/playArrow.png"
                                 style="visibility: hidden;" />
                            <div class="trackNumber">
                                <p class="trackText"
                                   id="nTemptedByTheSpacePudding">
                                    11.)
                                </p>
                            </div>
                            <div class="trackTitle">
                                <p class="trackText"
                                   id="tTemptedByTheSpacePudding">
                                    Tempted by the Space Pudding
                                </p>
                            </div>
                            <div class="trackDuration">
                                <p class="trackText"
                                   id="dTemptedByTheSpacePudding">
                                    (3:16)
                                </p>
                            </div>
                        </div>
                        <div class="trackRow">
                            <img id="pIveGotToCallAPlumber"
                                 src="discography/playArrow.png"
                                 style="visibility: hidden;" />
                            <div class="trackNumber">
                                <p class="trackText"
                                   id="nIveGotToCallAPlumber">
                                    12.)
                                </p>
                            </div>
                            <div class="trackTitle">
                                <p class="trackText"
                                   id="tIveGotToCallAPlumber">
                                    I've Got to Call a Plumber Who Can Figure Out Why My Showerhead
                                    Is Spraying Cactus Needles
                                </p>
                            </div>
                            <div class="trackDuration">
                                <p class="trackText"
                                   id="dIveGotToCallAPlumber">
                                    (1:38)
                                </p>
                            </div>
                        </div>
                        <div class="trackRow">
                            <img id="pBehindMyStoicVegetableEyes"
                                 src="discography/playArrow.png"
                                 style="visibility: hidden;" />
                            <div class="trackNumber">
                                <p class="trackText"
                                   id="nBehindMyStoicVegetableEyes">
                                    13.)
                                </p>
                            </div>
                            <div class="trackTitle">
                                <p class="trackText"
                                   id="tBehindMyStoicVegetableEyes">
                                    Behind My Stoic Vegetable Eyes
                                </p>
                            </div>
                            <div class="trackDuration">
                                <p class="trackText"
                                   id="dBehindMyStoicVegetableEyes">
                                    (2:40)
                                </p>
                            </div>
                        </div>
                        <div class="trackRow">
                            <img id="pPapasPizzaAndRoastBeefWasProbablyAFront"
                                 src="discography/playArrow.png"
                                 style="visibility: hidden;" />
                            <div class="trackNumber">
                                <p class="trackText"
                                   id="nPapasPizzaAndRoastBeefWasProbablyAFront">
                                    14.)
                                </p>
                            </div>
                            <div class="trackTitle">
                                <p class="trackText"
                                   id="tPapasPizzaAndRoastBeefWasProbablyAFront">
                                    Papa's Pizza and Roast Beef was Probably a Front
                                </p>
                            </div>
                            <div class="trackDuration">
                                <p class="trackText"
                                   id="dPapasPizzaAndRoastBeefWasProbablyAFront">
                                    (1:25)
                                </p>
                            </div>
                        </div>
                        <div class="trackRow">
                            <img id="pEveryConversationIsAJamSession"
                                 src="discography/playArrow.png"
                                 style="visibility: hidden;" />
                            <div class="trackNumber">
                                <p class="trackText"
                                   id="nEveryConversationIsAJamSession">
                                    15.)
                                </p>
                            </div>
                            <div class="trackTitle">
                                <p class="trackText"
                                   id="tEveryConversationIsAJamSession">
                                    Every Conversation is a Jam Session
                                </p>
                            </div>
                            <div class="trackDuration">
                                <p class="trackText"
                                   id="dEveryConversationIsAJamSession">
                                    (1:37)
                                </p>
                            </div>
                        </div>
                        <div class="trackRow">
                            <img id="pTheIncriminatingEvidenceButton"
                                 src="discography/playArrow.png"
                                 style="visibility: hidden;" />
                            <div class="trackNumber">
                                <p class="trackText"
                                   id="nTheIncriminatingEvidenceButton">
                                    16.)
                                </p>
                            </div>
                            <div class="trackTitle">
                                <p class="trackText"
                                   id="tTheIncriminatingEvidenceButton">
                                    The Incriminating Evidence Button
                                </p>
                            </div>
                            <div class="trackDuration">
                                <p class="trackText"
                                   id="dTheIncriminatingEvidenceButton">
                                    (13:30)
                                </p>
                            </div>
                        </div>
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
                    <div class="flex-column">
                        <div class="trackRow">
                            <img id="pMinimize"
                                 src="discography/playArrow.png"
                                 style="visibility: hidden;" />
                            <div class="trackNumber">
                                <p class="trackText"
                                   id="nMinimize">
                                    01.)
                                </p>
                            </div>
                            <div class="trackTitle">
                                <p class="trackText"
                                   id="tMinimize">
                                    minimize
                                </p>
                            </div>
                            <div class="trackDuration">
                                <p class="trackText"
                                   id="dMinimize">
                                    (1:07)
                                </p>
                            </div>
                        </div>
                        <div class="trackRow">
                            <img id="pCooLLooptoondrahhhhhh"
                                 src="discography/playArrow.png"
                                 style="visibility: hidden;" />
                            <div class="trackNumber">
                                <p class="trackText"
                                   id="nCooLLooptoondrahhhhhh">
                                    02.)
                                </p>
                            </div>
                            <div class="trackTitle">
                                <p class="trackText"
                                   id="tCooLLooptoondrahhhhhh">
                                    cooLLoop.toondrahhhhhh
                                </p>
                            </div>
                            <div class="trackDuration">
                                <p class="trackText"
                                   id="dCooLLooptoondrahhhhhh">
                                    (2:30)
                                </p>
                            </div>
                        </div>
                        <div class="trackRow">
                            <img id="pDepthcharge"
                                 src="discography/playArrow.png"
                                 style="visibility: hidden;" />
                            <div class="trackNumber">
                                <p class="trackText"
                                   id="nDepthcharge">
                                    03.)
                                </p>
                            </div>
                            <div class="trackTitle">
                                <p class="trackText"
                                   id="tDepthcharge">
                                    depthcharge >> [ft. bjork] >> electrocution
                                </p>
                            </div>
                            <div class="trackDuration">
                                <p class="trackText"
                                   id="dDepthcharge">
                                    (3:18)
                                </p>
                            </div>
                        </div>
                        <div class="trackRow">
                            <img id="pDONUTRETURN"
                                 src="discography/playArrow.png"
                                 style="visibility: hidden;" />
                            <div class="trackNumber">
                                <p class="trackText"
                                   id="nDONUTRETURN">
                                    04.)
                                </p>
                            </div>
                            <div class="trackTitle">
                                <p class="trackText"
                                   id="tDONUTRETURN">
                                    DONUTRETURN
                                </p>
                            </div>
                            <div class="trackDuration">
                                <p class="trackText"
                                   id="dDONUTRETURN">
                                    (1:22)
                                </p>
                            </div>
                        </div>
                        <div class="trackRow">
                            <img id="pFeelings"
                                 src="discography/playArrow.png"
                                 style="visibility: hidden;" />
                            <div class="trackNumber">
                                <p class="trackText"
                                   id="nFeelings">
                                    05.)
                                </p>
                            </div>
                            <div class="trackTitle">
                                <p class="trackText"
                                   id="tFeelings">
                                    feelings
                                </p>
                            </div>
                            <div class="trackDuration">
                                <p class="trackText"
                                   id="dFeelings">
                                    (4:19)
                                </p>
                            </div>
                        </div>
                        <div class="trackRow">
                            <img id="pWhereIsRmVd"
                                 src="discography/playArrow.png"
                                 style="visibility: hidden;" />
                            <div class="trackNumber">
                                <p class="trackText"
                                   id="nWhereIsRmVd">
                                    06.)
                                </p>
                            </div>
                            <div class="trackTitle">
                                <p class="trackText"
                                   id="tWhereIsRmVd">
                                    where is? [r.M.v.D.]
                                </p>
                            </div>
                            <div class="trackDuration">
                                <p class="trackText"
                                   id="dWhereIsRmVd">
                                    (2:08)
                                </p>
                            </div>
                        </div>
                        <div class="trackRow">
                            <img id="pSkunkBass"
                                 src="discography/playArrow.png"
                                 style="visibility: hidden;" />
                            <div class="trackNumber">
                                <p class="trackText"
                                   id="nSkunkBass">
                                    07.)
                                </p>
                            </div>
                            <div class="trackTitle">
                                <p class="trackText"
                                   id="tSkunkBass">
                                    skunk bass
                                </p>
                            </div>
                            <div class="trackDuration">
                                <p class="trackText"
                                   id="dSkunkBass">
                                    (2:00)
                                </p>
                            </div>
                        </div>
                        <div class="trackRow">
                            <img id="pAntibiotixxx"
                                 src="discography/playArrow.png"
                                 style="visibility: hidden;" />
                            <div class="trackNumber">
                                <p class="trackText"
                                   id="nAntibiotixxx">
                                    08.)
                                </p>
                            </div>
                            <div class="trackTitle">
                                <p class="trackText"
                                   id="tAntibiotixxx">
                                    anTibioTixxx [ft. duck grips]
                                </p>
                            </div>
                            <div class="trackDuration">
                                <p class="trackText"
                                   id="dAntibiotixxx">
                                    (1:49)
                                </p>
                            </div>
                        </div>
                        <div class="trackRow">
                            <img id="pF4d3dh0u534nth3m"
                                 src="discography/playArrow.png"
                                 style="visibility: hidden;" />
                            <div class="trackNumber">
                                <p class="trackText"
                                   id="nF4d3dh0u534nth3m">
                                    09.)
                                </p>
                            </div>
                            <div class="trackTitle">
                                <p class="trackText"
                                   id="tF4d3dh0u534nth3m">
                                    f4d3D h0U53 4Nth3M [ft. audio paralysis]
                                </p>
                            </div>
                            <div class="trackDuration">
                                <p class="trackText"
                                   id="dF4d3dh0u534nth3m">
                                    (5:44)
                                </p>
                            </div>
                        </div>
                        <div class="trackRow">
                            <img id="pCoffee&Incense"
                                 src="discography/playArrow.png"
                                 style="visibility: hidden;" />
                            <div class="trackNumber">
                                <p class="trackText"
                                   id="nCoffee&Incense">
                                    10.)
                                </p>
                            </div>
                            <div class="trackTitle">
                                <p class="trackText"
                                   id="tCoffee&Incense">
                                    coffee & incense [ft. apik and audio paralysis]
                                </p>
                            </div>
                            <div class="trackDuration">
                                <p class="trackText"
                                   id="dCoffee&Incense">
                                    (3:38)
                                </p>
                            </div>
                        </div>
                        <div class="trackRow">
                            <img id="pFUUUUUUUCK"
                                 src="discography/playArrow.png"
                                 style="visibility: hidden;" />
                            <div class="trackNumber">
                                <p class="trackText"
                                   id="nFUUUUUUUCK">
                                    11.)
                                </p>
                            </div>
                            <div class="trackTitle">
                                <p class="trackText"
                                   id="tFUUUUUUUCK">
                                    FUUUUUUUCK!!!!!!!!!!!!!
                                </p>
                            </div>
                            <div class="trackDuration">
                                <p class="trackText"
                                   id="dFUUUUUUUCK">
                                    (1:22)
                                </p>
                            </div>
                        </div>
                        <div class="trackRow">
                            <img id="pLikeSquids"
                                 src="discography/playArrow.png"
                                 style="visibility: hidden;" />
                            <div class="trackNumber">
                                <p class="trackText"
                                   id="nLikeSquids">
                                    12.)
                                </p>
                            </div>
                            <div class="trackTitle">
                                <p class="trackText"
                                   id="tLikeSquids">
                                    like squids !!
                                </p>
                            </div>
                            <div class="trackDuration">
                                <p class="trackText"
                                   id="dLikeSquids">
                                    (2:30)
                                </p>
                            </div>
                        </div>
                        <div class="trackRow">
                            <img id="pCapsule"
                                 src="discography/playArrow.png"
                                 style="visibility: hidden;" />
                            <div class="trackNumber">
                                <p class="trackText"
                                   id="nCapsule">
                                    13.)
                                </p>
                            </div>
                            <div class="trackTitle">
                                <p class="trackText"
                                   id="tCapsule">
                                    ..capsule..
                                </p>
                            </div>
                            <div class="trackDuration">
                                <p class="trackText"
                                   id="dCapsule">
                                    (3:26)
                                </p>
                            </div>
                        </div>
                        <div class="trackRow">
                            <img id="pStayBombin"
                                 src="discography/playArrow.png"
                                 style="visibility: hidden;" />
                            <div class="trackNumber">
                                <p class="trackText"
                                   id="nStayBombin">
                                    14.)
                                </p>
                            </div>
                            <div class="trackTitle">
                                <p class="trackText"
                                   id="tStayBombin">
                                    stay-bombin'
                                </p>
                            </div>
                            <div class="trackDuration">
                                <p class="trackText"
                                   id="dStayBombin">
                                    (1:42)
                                </p>
                            </div>
                        </div>
                        <div class="trackRow">
                            <img id="pSkatingOnDryIce"
                                 src="discography/playArrow.png"
                                 style="visibility: hidden;" />
                            <div class="trackNumber">
                                <p class="trackText"
                                   id="nSkatingOnDryIce">
                                    15.)
                                </p>
                            </div>
                            <div class="trackTitle">
                                <p class="trackText"
                                   id="tSkatingOnDryIce">
                                    skating on dry ice
                                </p>
                            </div>
                            <div class="trackDuration">
                                <p class="trackText"
                                   id="dSkatingOnDryIce">
                                    (3:06)
                                </p>
                            </div>
                        </div>
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
                    <div class="flex-column">
                        <div class="trackRow">
                            <img id="pSongAboutYou"
                                 src="discography/playArrow.png"
                                 style="visibility: hidden;" />
                            <div class="trackNumber">
                                <p class="trackText"
                                   id="nSongAboutYou">
                                    01.)
                                </p>
                            </div>
                            <div class="trackTitle">
                                <p class="trackText"
                                   id="tSongAboutYou">
                                    Song About You
                                </p>
                            </div>
                            <div class="trackDuration">
                                <p class="trackText"
                                   id="dSongAboutYou">
                                    (0:53)
                                </p>
                            </div>
                        </div>
                        <div class="trackRow">
                            <img id="pLeapOfFaith"
                                 src="discography/playArrow.png"
                                 style="visibility: hidden;" />
                            <div class="trackNumber">
                                <p class="trackText"
                                   id="nLeapOfFaith">
                                    02.)
                                </p>
                            </div>
                            <div class="trackTitle">
                                <p class="trackText"
                                   id="tLeapOfFaith">
                                    Leap of Faith
                                </p>
                            </div>
                            <div class="trackDuration">
                                <p class="trackText"
                                   id="dLeapOfFaith">
                                    (4:34)
                                </p>
                            </div>
                        </div>
                        <div class="trackRow">
                            <img id="pInterplanetaryJamSesh"
                                 src="discography/playArrow.png"
                                 style="visibility: hidden;" />
                            <div class="trackNumber">
                                <p class="trackText"
                                   id="nInterplanetaryJamSesh">
                                    03.)
                                </p>
                            </div>
                            <div class="trackTitle">
                                <p class="trackText"
                                   id="tInterplanetaryJamSesh">
                                    Interplanetary Jam Sesh
                                </p>
                            </div>
                            <div class="trackDuration">
                                <p class="trackText"
                                   id="dInterplanetaryJamSesh">
                                    (0:44)
                                </p>
                            </div>
                        </div>
                        <div class="trackRow">
                            <img id="pTakeUpThyAxeAndSetThisForestAblaze"
                                 src="discography/playArrow.png"
                                 style="visibility: hidden;" />
                            <div class="trackNumber">
                                <p class="trackText"
                                   id="nTakeUpThyAxeAndSetThisForestAblaze">
                                    04.)
                                </p>
                            </div>
                            <div class="trackTitle">
                                <p class="trackText"
                                   id="tTakeUpThyAxeAndSetThisForestAblaze">
                                    Take Up Thy Axe and Set This Forest Ablaze
                                </p>
                            </div>
                            <div class="trackDuration">
                                <p class="trackText"
                                   id="dTakeUpThyAxeAndSetThisForestAblaze">
                                    (4:31)
                                </p>
                            </div>
                        </div>
                        <div class="trackRow">
                            <img id="pCrawlingIntoTheFireplace"
                                 src="discography/playArrow.png"
                                 style="visibility: hidden;" />
                            <div class="trackNumber">
                                <p class="trackText"
                                   id="nCrawlingIntoTheFireplace">
                                    05.)
                                </p>
                            </div>
                            <div class="trackTitle">
                                <p class="trackText"
                                   id="tCrawlingIntoTheFireplace">
                                    Crawling into the Fireplace
                                </p>
                            </div>
                            <div class="trackDuration">
                                <p class="trackText"
                                   id="dCrawlingIntoTheFireplace">
                                    (2:26)
                                </p>
                            </div>
                        </div>
                        <div class="trackRow">
                            <img id="pTheFunkBackTooManyTimes"
                                 src="discography/playArrow.png"
                                 style="visibility: hidden;" />
                            <div class="trackNumber">
                                <p class="trackText"
                                   id="nTheFunkBackTooManyTimes">
                                    06.)
                                </p>
                            </div>
                            <div class="trackTitle">
                                <p class="trackText"
                                   id="tTheFunkBackTooManyTimes">
                                    The Funk Back Too Many Times
                                </p>
                            </div>
                            <div class="trackDuration">
                                <p class="trackText"
                                   id="dTheFunkBackTooManyTimes">
                                    (0:53)
                                </p>
                            </div>
                        </div>
                        <div class="trackRow">
                            <img id="pInsideThePsynkhole"
                                 src="discography/playArrow.png"
                                 style="visibility: hidden;" />
                            <div class="trackNumber">
                                <p class="trackText"
                                   id="nInsideThePsynkhole">
                                    07.)
                                </p>
                            </div>
                            <div class="trackTitle">
                                <p class="trackText"
                                   id="tInsideThePsynkhole">
                                    Inside the Psynkhole
                                </p>
                            </div>
                            <div class="trackDuration">
                                <p class="trackText"
                                   id="dInsideThePsynkhole">
                                    (4:13)
                                </p>
                            </div>
                        </div>
                        <div class="trackRow">
                            <img id="pLeavesReplacement"
                                 src="discography/playArrow.png"
                                 style="visibility: hidden;" />
                            <div class="trackNumber">
                                <p class="trackText"
                                   id="nLeavesReplacement">
                                    08.)
                                </p>
                            </div>
                            <div class="trackTitle">
                                <p class="trackText"
                                   id="tLeavesReplacement">
                                    Leave's Replacement
                                </p>
                            </div>
                            <div class="trackDuration">
                                <p class="trackText"
                                   id="dLeavesReplacement">
                                    (4:22)
                                </p>
                            </div>
                        </div>
                        <div class="trackRow">
                            <img id="pOldFriend"
                                 src="discography/playArrow.png"
                                 style="visibility: hidden;" />
                            <div class="trackNumber">
                                <p class="trackText"
                                   id="nOldFriend">
                                    09.)
                                </p>
                            </div>
                            <div class="trackTitle">
                                <p class="trackText"
                                   id="tOldFriend">
                                    Old Friend
                                </p>
                            </div>
                            <div class="trackDuration">
                                <p class="trackText"
                                   id="dOldFriend">
                                    (5:13)
                                </p>
                            </div>
                        </div>
                        <div class="trackRow">
                            <img id="pUt"
                                 src="discography/playArrow.png"
                                 style="visibility: hidden;" />
                            <div class="trackNumber">
                                <p class="trackText"
                                   id="nUt">
                                    10.)
                                </p>
                            </div>
                            <div class="trackTitle">
                                <p class="trackText"
                                   id="tUt">
                                    ut
                                </p>
                            </div>
                            <div class="trackDuration">
                                <p class="trackText"
                                   id="dUt">
                                    (0:50)
                                </p>
                            </div>
                        </div>
                        <div class="trackRow">
                            <img id="pSolipsistHymn"
                                 src="discography/playArrow.png"
                                 style="visibility: hidden;" />
                            <div class="trackNumber">
                                <p class="trackText"
                                   id="nSolipsistHymn">
                                    11.)
                                </p>
                            </div>
                            <div class="trackTitle">
                                <p class="trackText"
                                   id="tSolipsistHymn">
                                    Solipsist Hymn
                                </p>
                            </div>
                            <div class="trackDuration">
                                <p class="trackText"
                                   id="dSolipsistHymn">
                                    (3:01)
                                </p>
                            </div>
                        </div>
                        <div class="trackRow">
                            <img id="pIUsedToWatchBirds"
                                 src="discography/playArrow.png"
                                 style="visibility: hidden;" />
                            <div class="trackNumber">
                                <p class="trackText"
                                   id="nIUsedToWatchBirds">
                                    12.)
                                </p>
                            </div>
                            <div class="trackTitle">
                                <p class="trackText"
                                   id="tIUsedToWatchBirds">
                                    I Used to Watch Birds
                                </p>
                            </div>
                            <div class="trackDuration">
                                <p class="trackText"
                                   id="dIUsedToWatchBirds">
                                    (4:11)
                                </p>
                            </div>
                        </div>
                        <div class="trackRow">
                            <img id="pNuclearWarfare"
                                 src="discography/playArrow.png"
                                 style="visibility: hidden;" />
                            <div class="trackNumber">
                                <p class="trackText"
                                   id="nNuclearWarfare">
                                    13.)
                                </p>
                            </div>
                            <div class="trackTitle">
                                <p class="trackText"
                                   id="tNuclearWarfare">
                                    Nuclear Warfare
                                </p>
                            </div>
                            <div class="trackDuration">
                                <p class="trackText"
                                   id="dNuclearWarfare">
                                    (4:19)
                                </p>
                            </div>
                        </div>
                        <div class="trackRow">
                            <img id="pCosmicZoo"
                                 src="discography/playArrow.png"
                                 style="visibility: hidden;" />
                            <div class="trackNumber">
                                <p class="trackText"
                                   id="nCosmicZoo">
                                    14.)
                                </p>
                            </div>
                            <div class="trackTitle">
                                <p class="trackText"
                                   id="tCosmicZoo">
                                    Cosmic Zoo
                                </p>
                            </div>
                            <div class="trackDuration">
                                <p class="trackText"
                                   id="dCosmicZoo">
                                    (1:12)
                                </p>
                            </div>
                        </div>
                        <div class="trackRow">
                            <img id="pNoExpirationDate"
                                 src="discography/playArrow.png"
                                 style="visibility: hidden;" />
                            <div class="trackNumber">
                                <p class="trackText"
                                   id="nNoExpirationDate">
                                    15.)
                                </p>
                            </div>
                            <div class="trackTitle">
                                <p class="trackText"
                                   id="tNoExpirationDate">
                                    No Expiration Date
                                </p>
                            </div>
                            <div class="trackDuration">
                                <p class="trackText"
                                   id="dNoExpirationDate">
                                    (4:36)
                                </p>
                            </div>
                        </div>
                        <div class="trackRow">
                            <img id="pPostcardsLimited"
                                 src="discography/playArrow.png"
                                 style="visibility: hidden;" />
                            <div class="trackNumber">
                                <p class="trackText"
                                   id="nPostcardsLimited">
                                    16.)
                                </p>
                            </div>
                            <div class="trackTitle">
                                <p class="trackText"
                                   id="tPostcardsLimited">
                                    Postcards Limited
                                </p>
                            </div>
                            <div class="trackDuration">
                                <p class="trackText"
                                   id="dPostcardsLimited">
                                    (3:57)
                                </p>
                            </div>
                        </div>
                        <div class="trackRow">
                            <img id="pDecentHat"
                                 src="discography/playArrow.png"
                                 style="visibility: hidden;" />
                            <div class="trackNumber">
                                <p class="trackText"
                                   id="nDecentHat">
                                    17.)
                                </p>
                            </div>
                            <div class="trackTitle">
                                <p class="trackText"
                                   id="tDecentHat">
                                    Decent Hat
                                </p>
                            </div>
                            <div class="trackDuration">
                                <p class="trackText"
                                   id="dDecentHat">
                                    (0:38)
                                </p>
                            </div>
                        </div>
                        <div class="trackRow">
                            <img id="pBerries"
                                 src="discography/playArrow.png"
                                 style="visibility: hidden;" />
                            <div class="trackNumber">
                                <p class="trackText"
                                   id="nBerries">
                                    18.)
                                </p>
                            </div>
                            <div class="trackTitle">
                                <p class="trackText"
                                   id="tBerries">
                                    Berries
                                </p>
                            </div>
                            <div class="trackDuration">
                                <p class="trackText"
                                   id="dBerries">
                                    (3:25)
                                </p>
                            </div>
                        </div>
                        <div class="trackRow">
                            <img id="pElohknysp"
                                 src="discography/playArrow.png"
                                 style="visibility: hidden;" />
                            <div class="trackNumber">
                                <p class="trackText"
                                   id="nElohknysp">
                                    19.)
                                </p>
                            </div>
                            <div class="trackTitle">
                                <p class="trackText"
                                   id="tElohknysp">
                                    elohknysp
                                </p>
                            </div>
                            <div class="trackDuration">
                                <p class="trackText"
                                   id="dElohknysp">
                                    (11:00)
                                </p>
                            </div>
                        </div>
                        <div class="trackRow">
                            <img id="pPressItEqualizeIt"
                                 src="discography/playArrow.png"
                                 style="visibility: hidden;" />
                            <div class="trackNumber">
                                <p class="trackText"
                                   id="nPressItEqualizeIt">
                                    20.)
                                </p>
                            </div>
                            <div class="trackTitle">
                                <p class="trackText"
                                   id="tPressItEqualizeIt">
                                    Press It, Equalize It
                                </p>
                            </div>
                            <div class="trackDuration">
                                <p class="trackText"
                                   id="dPressItEqualizeIt">
                                    (3:55)
                                </p>
                            </div>
                        </div>
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
                        <div class="trackRow">
                            <img id="pRunThatTurkey"
                                 src="discography/playArrow.png"
                                 style="visibility: hidden;" />
                            <div class="trackNumber">
                                <p class="trackText"
                                   id="nRunThatTurkey">
                                    01.)
                                </p>
                            </div>
                            <div class="trackTitle">
                                <p class="trackText"
                                   id="tRunThatTurkey">
                                    Run That Turkey!
                                </p>
                            </div>
                            <div class="trackDuration">
                                <p class="trackText"
                                   id="dRunThatTurkey">
                                    (0:41)
                                </p>
                            </div>
                        </div>
                        <div class="trackRow">
                            <img id="pDuelOnTheBlackKeys"
                                 src="discography/playArrow.png"
                                 style="visibility: hidden;" />
                            <div class="trackNumber">
                                <p class="trackText"
                                   id="nDuelOnTheBlackKeys">
                                    02.)
                                </p>
                            </div>
                            <div class="trackTitle">
                                <p class="trackText"
                                   id="tDuelOnTheBlackKeys">
                                    Duel on the Black Keys
                                </p>
                            </div>
                            <div class="trackDuration">
                                <p class="trackText"
                                   id="dDuelOnTheBlackKeys">
                                    (4:53)
                                </p>
                            </div>
                        </div>
                        <div class="trackRow">
                            <img id="pArcticOcean"
                                 src="discography/playArrow.png"
                                 style="visibility: hidden;" />
                            <div class="trackNumber">
                                <p class="trackText"
                                   id="nArcticOcean">
                                    03.)
                                </p>
                            </div>
                            <div class="trackTitle">
                                <p class="trackText"
                                   id="tArcticOcean">
                                    Arctic Ocean
                                </p>
                            </div>
                            <div class="trackDuration">
                                <p class="trackText"
                                   id="dArcticOcean">
                                    (2:39)
                                </p>
                            </div>
                        </div>
                        <div class="trackRow">
                            <img id="pUp"
                                 src="discography/playArrow.png"
                                 style="visibility: hidden;" />
                            <div class="trackNumber">
                                <p class="trackText"
                                   id="nUp">
                                    04.)
                                </p>
                            </div>
                            <div class="trackTitle">
                                <p class="trackText"
                                   id="tUp">
                                    Up
                                </p>
                            </div>
                            <div class="trackDuration">
                                <p class="trackText"
                                   id="dUp">
                                    (6:20)
                                </p>
                            </div>
                        </div>
                        <div class="trackRow">
                            <img id="pIntoTheOven"
                                 src="discography/playArrow.png"
                                 style="visibility: hidden;" />
                            <div class="trackNumber">
                                <p class="trackText"
                                   id="nIntoTheOven">
                                    05.)
                                </p>
                            </div>
                            <div class="trackTitle">
                                <p class="trackText"
                                   id="tIntoTheOven">
                                    Into the Oven
                                </p>
                            </div>
                            <div class="trackDuration">
                                <p class="trackText"
                                   id="dIntoTheOven">
                                    (2:00)
                                </p>
                            </div>
                        </div>
                        <div class="trackRow">
                            <img id="p;068"
                                 src="discography/playArrow.png"
                                 style="visibility: hidden;" />
                            <div class="trackNumber">
                                <p class="trackText"
                                   id="n;068">
                                    06.)
                                </p>
                            </div>
                            <div class="trackTitle">
                                <p class="trackText"
                                   id="t;068">
                                    ;068
                                </p>
                            </div>
                            <div class="trackDuration">
                                <p class="trackText"
                                   id="d;068">
                                    (2:03)
                                </p>
                            </div>
                        </div>
                        <div class="trackRow">
                            <img id="pMartyrs"
                                 src="discography/playArrow.png"
                                 style="visibility: hidden;" />
                            <div class="trackNumber">
                                <p class="trackText"
                                   id="nMartyrs">
                                    07.)
                                </p>
                            </div>
                            <div class="trackTitle">
                                <p class="trackText"
                                   id="tMartyrs">
                                    Martyrs
                                </p>
                            </div>
                            <div class="trackDuration">
                                <p class="trackText"
                                   id="dMartyrs">
                                    (4:35)
                                </p>
                            </div>
                        </div>
                        <div class="trackRow">
                            <img id="pLostInSpaceWithoutADrumkit"
                                 src="discography/playArrow.png"
                                 style="visibility: hidden;" />
                            <div class="trackNumber">
                                <p class="trackText"
                                   id="nLostInSpaceWithoutADrumkit">
                                    08.)
                                </p>
                            </div>
                            <div class="trackTitle">
                                <p class="trackText"
                                   id="tLostInSpaceWithoutADrumkit">
                                    Lost in Space Without a Drumkit
                                </p>
                            </div>
                            <div class="trackDuration">
                                <p class="trackText"
                                   id="dLostInSpaceWithoutADrumkit">
                                    (3:12)
                                </p>
                            </div>
                        </div>
                        <div class="trackRow">
                            <img id="pHashBrownSandwiches"
                                 src="discography/playArrow.png"
                                 style="visibility: hidden;" />
                            <div class="trackNumber">
                                <p class="trackText"
                                   id="nHashBrownSandwiches">
                                    09.)
                                </p>
                            </div>
                            <div class="trackTitle">
                                <p class="trackText"
                                   id="tHashBrownSandwiches">
                                    Hash Brown Sandwiches
                                </p>
                            </div>
                            <div class="trackDuration">
                                <p class="trackText"
                                   id="dHashBrownSandwiches">
                                    (3:55)
                                </p>
                            </div>
                        </div>
                        <div class="trackRow">
                            <img id="pCircus"
                                 src="discography/playArrow.png"
                                 style="visibility: hidden;" />
                            <div class="trackNumber">
                                <p class="trackText"
                                   id="nCircus">
                                    10.)
                                </p>
                            </div>
                            <div class="trackTitle">
                                <p class="trackText"
                                   id="tCircus">
                                    Circus
                                </p>
                            </div>
                            <div class="trackDuration">
                                <p class="trackText"
                                   id="dCircus">
                                    (1:23)
                                </p>
                            </div>
                        </div>
                        <div class="trackRow">
                            <img id="pProdigalSon"
                                 src="discography/playArrow.png"
                                 style="visibility: hidden;" />
                            <div class="trackNumber">
                                <p class="trackText"
                                   id="nProdigalSon">
                                    11.)
                                </p>
                            </div>
                            <div class="trackTitle">
                                <p class="trackText"
                                   id="tProdigalSon">
                                    Prodigal Son
                                </p>
                            </div>
                            <div class="trackDuration">
                                <p class="trackText"
                                   id="dProdigalSon">
                                    (1:49)
                                </p>
                            </div>
                        </div>
                        <div class="trackRow">
                            <img id="pGreyGoo"
                                 src="discography/playArrow.png"
                                 style="visibility: hidden;" />
                            <div class="trackNumber">
                                <p class="trackText"
                                   id="nGreyGoo">
                                    12.)
                                </p>
                            </div>
                            <div class="trackTitle">
                                <p class="trackText"
                                   id="tGreyGoo">
                                    Grey Goo
                                </p>
                            </div>
                            <div class="trackDuration">
                                <p class="trackText"
                                   id="dGreyGoo">
                                    (3:00)
                                </p>
                            </div>
                        </div>
                        <div class="trackRow">
                            <img id="pWorldPeanutInvasion"
                                 src="discography/playArrow.png"
                                 style="visibility: hidden;" />
                            <div class="trackNumber">
                                <p class="trackText"
                                   id="nWorldPeanutInvasion">
                                    13.)
                                </p>
                            </div>
                            <div class="trackTitle">
                                <p class="trackText"
                                   id="tWorldPeanutInvasion">
                                    World Peanut Invasion
                                </p>
                            </div>
                            <div class="trackDuration">
                                <p class="trackText"
                                   id="dWorldPeanutInvasion">
                                    (2:31)
                                </p>
                            </div>
                        </div>
                        <div class="trackRow">
                            <img id="pBewareTheTallGrass"
                                 src="discography/playArrow.png"
                                 style="visibility: hidden;" />
                            <div class="trackNumber">
                                <p class="trackText"
                                   id="nBewareTheTallGrass">
                                    14.)
                                </p>
                            </div>
                            <div class="trackTitle">
                                <p class="trackText"
                                   id="tBewareTheTallGrass">
                                    Beware the Tall Grass
                                </p>
                            </div>
                            <div class="trackDuration">
                                <p class="trackText"
                                   id="dBewareTheTallGrass">
                                    (2:35)
                                </p>
                            </div>
                        </div>
                        <div class="trackRow">
                            <img id="pTheEndOfTheWorld"
                                 src="discography/playArrow.png"
                                 style="visibility: hidden;" />
                            <div class="trackNumber">
                                <p class="trackText"
                                   id="nTheEndOfTheWorld">
                                    15.)
                                </p>
                            </div>
                            <div class="trackTitle">
                                <p class="trackText"
                                   id="tTheEndOfTheWorld">
                                    The End of the World
                                </p>
                            </div>
                            <div class="trackDuration">
                                <p class="trackText"
                                   id="dTheEndOfTheWorld">
                                    (3:24)
                                </p>
                            </div>
                        </div>
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
} // getDiscographyContent()
