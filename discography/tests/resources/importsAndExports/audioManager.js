module.exports =
{
    addPlayEventListenerForEachAudioPlayer,
    getAllElementsOnPage,
    getAssociatedAudioPlayerForTrackTextDiv,
    getAudioPlayerForTrack,
    getFunctionCallStringForPlayTrack,
    getTrackIdForTrackTextDiv,
    isDivContainingTrackTextParagraph,
    isFinalTrackOnAlbum,
    isUnpopulated,
    onTouchEnd,
    onTouchStart,
    removeFirstCharacter,
    setEventCallbacksOnTrackTextDivs,
    setPlayArrowVisibility,
    stopAndResetTrack,
    updateTrackFontColor
};

const constants = require('./constants');
const kColorCodeLightBlue               = constants.kColorCodeLightBlue;
const kColorCodeWhite                   = constants.kColorCodeWhite;
const kEventNameOnClick                 = constants.kEventNameOnClick;
const kEventNameOnMouseLeave            = constants.kEventNameOnMouseLeave;
const kEventNameOnMouseOver             = constants.kEventNameOnMouseOver;
const kEventNameOnTouchEnd              = constants.kEventNameOnTouchEnd;
const kEventNameOnTouchStart            = constants.kEventNameOnTouchStart;
const kEventTypeTouchEnd                = constants.kEventTypeTouchEnd;
const kEventTypeTrackEnded              = constants.kEventTypeTrackEnded;
const kFirstCharIndex                   = constants.kFirstCharIndex;
const kFirstElementIndex                = constants.kFirstElementIndex;
const kFunctionCallMakeTextBlue         = constants.kFunctionCallMakeTextBlue;
const kFunctionCallMakeTextWhite        = constants.kFunctionCallMakeTextWhite;
const kFunctionCallOnTouchEnd           = constants.kFunctionCallOnTouchEnd;
const kFunctionCallOnTouchStart         = constants.kFunctionCallOnTouchStart;
const kNoTracks                         = constants.kNoTracks;
const kNotVisible                       = constants.kNotVisible;
const kOnlyChildIndex                   = constants.kOnlyChildIndex;
const kPlayer1320                       = constants.kPlayer1320;
const kPlayerCorneliusSquatgood         = constants.kPlayerCorneliusSquatgood;
const kPlayerDumbFun                    = constants.kPlayerDumbFun;
const kPlayerFairUseOfTheCochlea        = constants.kPlayerFairUseOfTheCochlea;
const kPlayerMtBanger                   = constants.kPlayerMtBanger;
const kPlayerPsynkhole                  = constants.kPlayerPsynkhole;
const kPlayerSkunkBass                  = constants.kPlayerSkunkBass;
const kPlayerWereAllPrawns              = constants.kPlayerWereAllPrawns;
const kPlayTrackFunctionCallPrefix      = constants.kPlayTrackFunctionCallPrefix;
const kPlayTrackFunctionCallSuffix      = constants.kPlayTrackFunctionCallSuffix;
const kPrefixAudioPlayer                = constants.kPrefixAudioPlayer;
const kPrefixFinalTrack                 = constants.kPrefixFinalTrack;
const kPrefixPlayArrow                  = constants.kPrefixPlayArrow;
const kPrefixTrack                      = constants.kPrefixTrack;
const kPrefixTrackDuration              = constants.kPrefixTrackDuration;
const kPrefixTrackNumber                = constants.kPrefixTrackNumber;
const kPrefixTrackTitle                 = constants.kPrefixTrackTitle;
const kSecondCharIndex                  = constants.kSecondCharIndex;
const kSingleChild                      = constants.kSingleChild;
const kStyle                            = constants.kStyle;
const kStyleSheetClassNameAlbumInfo     = constants.kStyleSheetClassNameAlbumInfo;
const kStyleSheetClassNameTrackDuration = constants.kStyleSheetClassNameTrackDuration;
const kStyleSheetClassNameTrackNumber   = constants.kStyleSheetClassNameTrackNumber;
const kStyleSheetClassNameTrackRow      = constants.kStyleSheetClassNameTrackRow;
const kStyleSheetClassNameTrackText     = constants.kStyleSheetClassNameTrackText;
const kStyleSheetClassNameTrackTitle    = constants.kStyleSheetClassNameTrackTitle;
const kTrackIds                         = constants.kTrackIds;
const kUnpopulated                      = constants.kUnpopulated;
const kVisible                          = constants.kVisible;
