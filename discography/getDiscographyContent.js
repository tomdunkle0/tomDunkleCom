/* Legend for element ID prefixes:
    "a" = Audio player            (player featuring visible controls under each album)
    "d" = Track duration          (visible string indicating the length of a track)
    "f" = Audio file, final track (the final song on an album; doesn't autoplay next)
    "n" = Track number            (visible string indicating a track's sequential number)
    "p" = Play arrow              (visible arrow indicating the current track)
    "s" = Audio source            (copy of a song Tom's produced in .mp3 format)
    "t" = Track title             (visible string indicating the track title) */

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
