/*----------------------------------------------------------------------------------------------*\
 | File: audioManager.js                                                                        |
 | Purpose: Defines functions related to playing and controlling audio on the discography page. |
\*----------------------------------------------------------------------------------------------*/

// Global variables:
var g_CurrentTrackId             = kUnpopulated;
var g_ScrollPositionOnTouchStart = 0;
var g_TrackDurationWidth         = 0;

function addPlayEventListenerForEachAudioPlayer()
{
    const mbPlayer        = document.getElementById(kPlayerMtBanger);
    const fuotcPlayer     = document.getElementById(kPlayerFairUseOfTheCochlea);
    const csPlayer        = document.getElementById(kPlayerCorneliusSquatgood);
    const dfPlayer        = document.getElementById(kPlayerDumbFun);
    const wapPlayer       = document.getElementById(kPlayerWereAllPrawns);
    const sbPlayer        = document.getElementById(kPlayerSkunkBass);
    const psynkholePlayer = document.getElementById(kPlayerPsynkhole);
    const the1320Player   = document.getElementById(kPlayer1320);

    // Index of the first song in each album in kTrackIds:
    const indexEveryMuscleIsMoving      = 0;
    const indexThanks                   = 17;
    const index0utr0                    = 25;
    const indexHowTheTimesHaveChanged   = 40;
    const indexYouWillBeMyJalapenoDream = 48;
    const indexMinimize                 = 64;
    const indexSongAboutYou             = 79;
    const indexRunThatTurkey            = 99;

    mbPlayer.src        = document.getElementById(kTrackIds[indexEveryMuscleIsMoving]).src;
    fuotcPlayer.src     = document.getElementById(kTrackIds[indexThanks]).src;
    csPlayer.src        = document.getElementById(kTrackIds[index0utr0]).src;
    dfPlayer.src        = document.getElementById(kTrackIds[indexHowTheTimesHaveChanged]).src;
    wapPlayer.src       = document.getElementById(kTrackIds[indexYouWillBeMyJalapenoDream]).src;
    sbPlayer.src        = document.getElementById(kTrackIds[indexMinimize]).src;
    psynkholePlayer.src = document.getElementById(kTrackIds[indexSongAboutYou]).src;
    the1320Player.src   = document.getElementById(kTrackIds[indexRunThatTurkey]).src;

    const play = "play";
    mbPlayer.addEventListener(play, onPlayEvent);
    fuotcPlayer.addEventListener(play, onPlayEvent);
    csPlayer.addEventListener(play, onPlayEvent);
    dfPlayer.addEventListener(play, onPlayEvent);
    wapPlayer.addEventListener(play, onPlayEvent);
    sbPlayer.addEventListener(play, onPlayEvent);
    psynkholePlayer.addEventListener(play, onPlayEvent);
    the1320Player.addEventListener(play, onPlayEvent);
} // addPlayEventListenerForEachAudioPlayer()

function getAllElementsOnPage()
{
    const wildcard = "*";
    return document.getElementsByTagName(wildcard);
} // getAllElementsOnPage()

// 2024 July 7: getAssociatedAudioPlayerForTrackTextDiv() is only called from one location in the
//               discography source code, in getTrackIdForTrackTextDiv(). Because trackTextDiv is
//               assumed non-null in getTrackIdForTrackTextDiv(), it is also assumed non-null here.
function getAssociatedAudioPlayerForTrackTextDiv(trackTextDiv)
{
    const trackRow = trackTextDiv.parentElement;
    if (!isUnpopulated(trackRow))
    {
        if (trackRow.className === kStyleSheetClassNameTrackRow)
        {
            const flexColumn = trackRow.parentElement;
            if (!isUnpopulated(flexColumn))
            {
                const albumInfo = flexColumn.parentElement;
                if (!isUnpopulated(albumInfo))
                {
                    if (albumInfo.className === kStyleSheetClassNameAlbumInfo)
                    {
                        const albumInfoChildren = albumInfo.children;

                        var child = null;
                        for (var childIndex in albumInfoChildren)
                        {
                            child = albumInfoChildren[childIndex];
                            const childId = child.id;
                            if ( !isUnpopulated(childId)
                               && childId.charAt(kFirstCharIndex) === kPrefixAudioPlayer
                               )
                            {
                                return child;
                            }
                        }
                    }
                }
            }
        }
    }

    return null;
} // getAssociatedAudioPlayerForTrackTextDiv()

function getAudioPlayerForTrack(trackId)
{
    const track = document.getElementById(trackId);
    if (!isUnpopulated(track))
    {
        const audioPlayer = track.parentElement;
        if (!isUnpopulated(audioPlayer))
        {
            return audioPlayer;
        }
    }

    return null;
} // getAudioPlayerForTrack()

var getCurrentScrollPosition = function()
{
    return document.documentElement.scrollTop || document.body.scrollTop;
} // getCurrentScrollPosition()

function getFunctionCallStringForPlayTrack(textElement)
{
    if (!isUnpopulated(textElement))
    {
        if (textElement.className === kStyleSheetClassNameTrackText)
        {
            const textElementId = textElement.id;
            if (!isUnpopulated(textElementId))
            {
                const parameterSuffix = removeFirstCharacter(textElementId);
                const parameterPrefix = (kTrackIds.includes(kPrefixFinalTrack + parameterSuffix)) ?
                    kPrefixFinalTrack
                  : kPrefixTrack;

                return kPlayTrackFunctionCallPrefix
                    + parameterPrefix
                    + parameterSuffix
                    + kPlayTrackFunctionCallSuffix;
            }
        }
    }

    return null;
} // getFunctionCallStringForPlayTrack()

// 2024 July 2: getTrackIdForTrackTextDiv() is only called from one location in the discography
//               source code, in onTouchEnd(). onTouchEnd() is not called from any locations in
//               source--rather, it only executes when a touch ends on a div whose onTouchEnd
//               attribute was set in setMouseAttributesOnDivsContainingTrackText(). Therefore, it
//               is assumed in onTouchEnd() that the parameter callingDiv is non-null.
//               Consequently, it is also assumed here that the parameter trackTextDiv is non-null.
function getTrackIdForTrackTextDiv(trackTextDiv)
{
    const trackTextParagraph = trackTextDiv.children[kOnlyChildIndex];
    if (!isUnpopulated(trackTextParagraph))
    {
        const trackIdSuffix = removeFirstCharacter(trackTextParagraph.id);
        if (!isUnpopulated(trackIdSuffix))
        {
            const audioPlayer = getAssociatedAudioPlayerForTrackTextDiv(trackTextDiv);
            if (audioPlayer !== null)
            {
                const tracks = audioPlayer.children;
                const numberOfTracks = tracks.length;
                var trackIdPrefix = kUnpopulated;
                if (numberOfTracks > kNoTracks)
                {
                    const finalTrack = tracks[numberOfTracks - 1];
                    const finalTrackIdSuffix = removeFirstCharacter(finalTrack.id);
                    trackIdPrefix = trackIdSuffix === finalTrackIdSuffix ?
                        kPrefixFinalTrack
                      : kPrefixTrack;

                    return trackIdPrefix + trackIdSuffix;
                }
            }
        }
    }

    return null;
} // getTrackIdForTrackTextDiv()

function isDivContainingTrackTextParagraph(element)
{
    if (element === null)
    {
        return false;
    }
    else
    {
        switch (element.className)
        {
            case kStyleSheetClassNameTrackDuration:
            case kStyleSheetClassNameTrackNumber:
            case kStyleSheetClassNameTrackTitle:
            {
                return true;
            }
            default:
            {
                return false;
            }
        }
    }
} // isDivContainingTrackTextParagraph()

function isFinalTrackOnAlbum(trackId)
{
    if (!isUnpopulated(trackId))
    {
        return trackId.charAt(kFirstCharIndex) === kPrefixFinalTrack;
    }
    else
    {
        return false;
    }
} // isFinalTrackOnAlbum()

function isUnpopulated(string)
{
    return string === null || string === undefined || string === kUnpopulated;
} // isUnpopulated()

var isValidIdForExistingAudioPlayer = function(audioPlayerId)
{
    switch (audioPlayerId)
    {
        case kPlayerMtBanger:
        case kPlayerFairUseOfTheCochlea:
        case kPlayerCorneliusSquatgood:
        case kPlayerDumbFun:
        case kPlayerWereAllPrawns:
        case kPlayerSkunkBass:
        case kPlayerPsynkhole:
        case kPlayer1320:
        {
            return true;
        }
        default:
        {
            return false;
        }
    }
} // isValidIdForExistingAudioPlayer()

var onPageLoad = function()
{
    document.body.innerHTML = getDiscographyContent();
    addPlayEventListenerForEachAudioPlayer();
    setEventCallbacksOnTrackTextDivs();
    setAllTrackDurationWidthsToIdenticalValue();
} // onPageLoad()

var onPlayEvent = function(playEvent)
{
    if (playEvent !== null)
    {
        const invokedAudioPlayer = playEvent.srcElement;
        if (invokedAudioPlayer !== null)
        {
            const invokedAudioPlayerId = invokedAudioPlayer.id;
            if (isValidIdForExistingAudioPlayer(invokedAudioPlayerId))
            {
                const currentTrackId = g_CurrentTrackId;
                const currentPlayingAudioPlayer = getAudioPlayerForTrack(currentTrackId);
                if (currentPlayingAudioPlayer !== null)
                {
                    const currentPlayingAudioPlayerId = currentPlayingAudioPlayer.id;
                    if (isValidIdForExistingAudioPlayer(currentPlayingAudioPlayerId))
                    {
                        if (currentPlayingAudioPlayerId !== invokedAudioPlayerId)
                        {
                            stopAndResetTrack(currentTrackId);
                        }
                    }
                }

                processPlayEvent(invokedAudioPlayerId);
            }
        }
    }
} // onPlayEvent()

// 2024 July 14: onTouchEnd() is not called from any locations in the discography source
//                code--rather, it only executes when a touch ends on a div whose onTouchEnd
//                attribute was set in setMouseAttributesOnDivsContainingTrackText(). Therefore,
//                it is assumed that the parameter callingDiv is non-null.
function onTouchEnd(callingDiv)
{
    updateTrackFontColor(callingDiv, kColorCodeWhite);
    const trackId = getTrackIdForTrackTextDiv(callingDiv);
    if ( !isUnpopulated(trackId)
       && g_ScrollPositionOnTouchStart === getCurrentScrollPosition()
       )
    {
        playTrack(trackId);
    }
} // onTouchEnd()

// 2024 July 14: onTouchStart() is not called from any locations in the discography source
//                code--rather, it only executes when a touch starts on a div whose onTouchStart
//                attribute was set in setMouseAttributesOnDivsContainingTrackText(). Therefore,
//                it is assumed that the parameter callingDiv is non-null.
function onTouchStart(callingDiv)
{
    g_ScrollPositionOnTouchStart = getCurrentScrollPosition();
    updateTrackFontColor(callingDiv, kColorCodeLightBlue);
    callingDiv.addEventListener(kEventTypeTouchEnd, preventDefaultEventBehavior);
} // onTouchStart()

var playNextTrack = function()
{
    const currentTrackId = g_CurrentTrackId;
    if (!isUnpopulated(currentTrackId))
    {
        if (isFinalTrackOnAlbum(currentTrackId))
        {
            stopAndResetTrack(currentTrackId);
        }
        else
        {
            const currentTrackIndex = kTrackIds.indexOf(currentTrackId);
            const nextTrackIndex = currentTrackIndex + 1;
            const minimumValidIndex = 0;
            const maximumValidIndex = kTrackIds.length - 1;
            if ( nextTrackIndex >= minimumValidIndex
              && nextTrackIndex <= maximumValidIndex
               )
            {
                playTrack(kTrackIds[nextTrackIndex]);
            }
        }
    }
} // playNextTrack()

var playTrack = function(trackId)
{
    const currentTrackId = g_CurrentTrackId;
    if (!isUnpopulated(currentTrackId))
    {
        stopAndResetTrack(currentTrackId);
    }

    if (!isUnpopulated(trackId))
    {
        const track = document.getElementById(trackId);
        const audioPlayer = getAudioPlayerForTrack(trackId);
        if (audioPlayer !== null)
        {
            audioPlayer.src = track.src;
            audioPlayer.play();
            audioPlayer.addEventListener(kEventTypeTrackEnded, playNextTrack);
            setPlayArrowVisibility(trackId, kVisible);

            g_CurrentTrackId = trackId;
        }
    }
} // playTrack()

var preventDefaultEventBehavior = function(event)
{
    event.preventDefault();
} // preventDefaultEventBehavior()

var processPlayEvent = function(audioPlayerId)
{
    if (isValidIdForExistingAudioPlayer(audioPlayerId))
    {
        const audioPlayer = document.getElementById(audioPlayerId);
        if (audioPlayer !== null)
        {
            const audioPlayerSourceLocation = audioPlayer.src;
            if (!isUnpopulated(audioPlayerSourceLocation))
            {
                var child;
                for (var childIndex in audioPlayer.children)
                {
                    child = audioPlayer.children[childIndex];
                    if (child.src === audioPlayerSourceLocation)
                    {
                        audioPlayer.addEventListener(kEventTypeTrackEnded, playNextTrack);
                        const matchingTrackId = child.id;
                        if (!isUnpopulated(matchingTrackId))
                        {
                            setPlayArrowVisibility(matchingTrackId, kVisible);

                            g_CurrentTrackId = matchingTrackId;
                            break;
                        }
                    }
                }
            }
        }
    }
} // processPlayEvent()

function removeFirstCharacter(string)
{
    if (!isUnpopulated(string))
    {
        return string.substring(kSecondCharIndex);
    }
    else
    {
        return kUnpopulated;
    }
} // removeFirstCharacter()

var setAllTrackDurationWidthsToIdenticalValue = function()
{
    const idOfTrackDurationOverTenMinutes = "dTheIncriminatingEvidenceButton";
    const durationOverTenMinutes = document.getElementById(idOfTrackDurationOverTenMinutes);
    if (durationOverTenMinutes !== null)
    {
        g_TrackDurationWidth = durationOverTenMinutes.scrollWidth;
        const elements = getAllElementsOnPage();
        for (var elementIndex in elements)
        {
            const element = elements[elementIndex];
            const elementId = element.id;
            if ( !isUnpopulated(elementId)
               && elementId.charAt(kFirstCharIndex) === kPrefixTrackDuration
               )
            {
                const parentElement = element.parentElement;
                if (parentElement.className === kStyleSheetClassNameTrackDuration)
                {
                    element.style.width = g_TrackDurationWidth;
                }
            }
        }
    }
} // setAllTrackDurationWidthsToIdenticalValue()

function setEventCallbacksOnTrackTextDivs()
{
    const elements = getAllElementsOnPage();
    var textElement, div;
    for (var elementIndex in elements)
    {
        if (elements[elementIndex].className === kStyleSheetClassNameTrackText)
        {
            textElement = elements[elementIndex];
            div = textElement.parentElement;
            if (isDivContainingTrackTextParagraph(div))
            {
                const playTrack = getFunctionCallStringForPlayTrack(textElement);
                div.setAttribute(kEventNameOnClick, playTrack);
                div.setAttribute(kEventNameOnMouseLeave, kFunctionCallMakeTextWhite);
                div.setAttribute(kEventNameOnMouseOver, kFunctionCallMakeTextBlue);
                div.setAttribute(kEventNameOnTouchEnd, kFunctionCallOnTouchEnd);
                div.setAttribute(kEventNameOnTouchStart, kFunctionCallOnTouchStart);
            }
        }
    }
} // setEventCallbacksOnTrackTextDivs()

function setPlayArrowVisibility(trackId, shouldBeVisible)
{
    if ( !isUnpopulated(trackId)
      && !isUnpopulated(shouldBeVisible)
       )
    {
        const playArrowId = kPrefixPlayArrow + removeFirstCharacter(trackId);
        const playArrow = document.getElementById(playArrowId);
        if (playArrow !== null)
        {
            const visibility = shouldBeVisible ? "visibility: visible" : "visibility: hidden";
            playArrow.setAttribute(kStyle, visibility);
        }
    }
} // setPlayArrowVisibility()

function stopAndResetTrack(trackId)
{
    if (!isUnpopulated(trackId))
    {
        const audioPlayer = getAudioPlayerForTrack(trackId);
        if (audioPlayer !== null)
        {
            const beginningOfTrack = 0;
            audioPlayer.pause();
            audioPlayer.currentTime = beginningOfTrack;
            audioPlayer.removeEventListener(kEventTypeTrackEnded, playNextTrack);
            setPlayArrowVisibility(trackId, kNotVisible);
        }
    }
} // stopAndResetTrack()

function updateTrackFontColor(callingDiv, colorCode)
{
    // This function shall only be called by div elements whose onMouseLeave and onMouseOver
    // attributes were set in setMouseAttributesOnDivsContainingTrackText(). Therefore,
    // it is safe to assume the caller (callingDiv) is not null at this point.

    if (!isUnpopulated(colorCode))
    {
        const divChildren = callingDiv.children;
        if (divChildren.length === kSingleChild)
        {
            const trackIdSuffix = removeFirstCharacter(divChildren[kFirstElementIndex].id);
            const trackDuration = document.getElementById(kPrefixTrackDuration + trackIdSuffix);
            const trackNumber   = document.getElementById(kPrefixTrackNumber + trackIdSuffix);
            const trackTitle    = document.getElementById(kPrefixTrackTitle + trackIdSuffix);

            if ( trackDuration !== null
              && trackNumber   !== null
              && trackTitle    !== null
               )
            {
                const style = "color: " + colorCode + ";";
                trackDuration.setAttribute(kStyle, style);
                trackDuration.style.width = g_TrackDurationWidth;
                trackNumber.setAttribute(kStyle, style);
                trackTitle.setAttribute(kStyle, style);
            }
        }
    }
} // updateTrackFontColor()
