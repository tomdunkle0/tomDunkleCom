module.exports =
{
    getStateIdForClickedPolygon,
    getStateIdForMousedOverPolygon,
    handleScreenOrientationChange,
    isCheckMarkOrBox,
    isFilledLightBlue,
    isInsignificantIsland,
    isUnpopulated,
    matchLightBlueFillForHawaiianIslands,
    matchLightBlueFillForTwoPolylines,
    onChangeValueOfSliderThumb,
    onClickMap,
    onMouseCrossingBorder,
    onOrientationChange,
    onPageLoad,
    resetStateFillColorToDefault,
    setPolygonFillColor,
    setYearSliderMarginsToHalfOfSlideContainerHeight,
    tomHasHighPointedStateWithinSliderRange,
    updateAndGetCurrentBlueState,
    updateCheckMarkAndBoxToMatchStateFillColor
};

const constants = require('../environment/constants');
const kAlabama                     = constants.kAlabama;
const kAlabamaCheckMark            = constants.kAlabamaCheckMark;
const kAlaskaMainland              = constants.kAlaskaMainland;
const kArizona                     = constants.kArizona;
const kArizonaCheckMark            = constants.kArizonaCheckMark;
const kArkansas                    = constants.kArkansas;
const kArkansasCheckMark           = constants.kArkansasCheckMark;
const kCalifornia                  = constants.kCalifornia;
const kCaliforniaCheckMark         = constants.kCaliforniaCheckMark;
const kColorado                    = constants.kColorado;
const kColoradoCheckMark           = constants.kColoradoCheckMark;
const kConnecticut                 = constants.kConnecticut;
const kConnecticutCheckMark        = constants.kConnecticutCheckMark;
const kCursorAttributeValueAuto    = constants.kCursorAttributeValueAuto;
const kCursorAttributeValuePointer = constants.kCursorAttributeValuePointer;
const kDelaware                    = constants.kDelaware;
const kDelawareCheckMark           = constants.kDelawareCheckMark;
const kDirectoryNameHighPoints     = constants.kDirectoryNameHighPoints;
const kFileExtensionHtml           = constants.kFileExtensionHtml;
const kFirstCharIndex              = constants.kFirstCharIndex;
const kFirstChildIndex             = constants.kFirstChildIndex;
const kFlorida                     = constants.kFlorida;
const kFloridaCheckBox             = constants.kFloridaCheckBox;
const kGeorgia                     = constants.kGeorgia;
const kGeorgiaCheckMark            = constants.kGeorgiaCheckMark;
const kHawaii                      = constants.kHawaii;
const kHawaiiCheckBox              = constants.kHawaiiCheckBox;
const kIllinois                    = constants.kIllinois;
const kIllinoisCheckMark           = constants.kIllinoisCheckMark;
const kIndiana                     = constants.kIndiana;
const kIndianaCheckMark            = constants.kIndianaCheckMark;
const kIowa                        = constants.kIowa;
const kIowaCheckBox                = constants.kIowaCheckBox;
const kIowaCheckMark               = constants.kIowaCheckMark;
const kKauai                       = constants.kKauai;
const kKansas                      = constants.kKansas;
const kKansasCheckMark             = constants.kKansasCheckMark;
const kKentucky                    = constants.kKentucky;
const kKentuckyCheckMark           = constants.kKentuckyCheckMark;
const kKodiakIsland                = constants.kKodiakIsland;
const kLightBlueFill               = constants.kLightBlueFill;
const kLightGreenFill              = constants.kLightGreenFill;
const kLightRedFill                = constants.kLightRedFill;
const kLouisiana                   = constants.kLouisiana;
const kLouisianaCheckMark          = constants.kLouisianaCheckMark;
const kMaine                       = constants.kMaine;
const kMaineCheckMark              = constants.kMaineCheckMark;
const kMargin                      = constants.kMargin;
const kMaryland                    = constants.kMaryland;
const kMarylandCheckMark           = constants.kMarylandCheckMark;
const kMassachusetts               = constants.kMassachusetts;
const kMassachusettsCheckMark      = constants.kMassachusettsCheckMark;
const kMaui                        = constants.kMaui;
const kMichiganCheckBox            = constants.kMichiganCheckBox;
const kMichiganCheckMark           = constants.kMichiganCheckMark;
const kMichiganMainland            = constants.kMichiganMainland;
const kMichiganPeninsula           = constants.kMichiganPeninsula;
const kMinnesota                   = constants.kMinnesota;
const kMinnesotaCheckMark          = constants.kMinnesotaCheckMark;
const kMississippi                 = constants.kMississippi;
const kMississippiCheckMark        = constants.kMississippiCheckMark;
const kMissouri                    = constants.kMissouri;
const kMissouriCheckMark           = constants.kMissouriCheckMark;
const kMontana                     = constants.kMontana;
const kMontanaCheckBox             = constants.kMontanaCheckBox;
const kNebraska                    = constants.kNebraska;
const kNebraskaCheckMark           = constants.kNebraskaCheckMark;
const kNevada                      = constants.kNevada;
const kNevadaCheckBox              = constants.kNevadaCheckBox;
const kNevadaCheckMark             = constants.kNevadaCheckMark;
const kNewHampshire                = constants.kNewHampshire;
const kNewHampshireCheckMark       = constants.kNewHampshireCheckMark;
const kNewJersey                   = constants.kNewJersey;
const kNewJerseyCheckMark          = constants.kNewJerseyCheckMark;
const kNewMexico                   = constants.kNewMexico;
const kNewMexicoCheckMark          = constants.kNewMexicoCheckMark;
const kNewYork                     = constants.kNewYork;
const kNewYorkCheckMark            = constants.kNewYorkCheckMark;
const kNorthCarolina               = constants.kNorthCarolina;
const kNorthCarolinaCheckBox       = constants.kNorthCarolinaCheckBox;
const kNorthCarolinaCheckMark      = constants.kNorthCarolinaCheckMark;
const kNorthDakota                 = constants.kNorthDakota;
const kNorthDakotaCheckMark        = constants.kNorthDakotaCheckMark;
const kOahu                        = constants.kOahu;
const kOhio                        = constants.kOhio;
const kOhioCheckMark               = constants.kOhioCheckMark;
const kOklahoma                    = constants.kOklahoma;
const kOklahomaCheckMark           = constants.kOklahomaCheckMark;
const kOregon                      = constants.kOregon;
const kOregonCheckBox              = constants.kOregonCheckBox;
const kPennsylvania                = constants.kPennsylvania;
const kPennsylvaniaCheckMark       = constants.kPennsylvaniaCheckMark;
const kPrefixCheckBox              = constants.kPrefixCheckBox;
const kPrefixCheckMark             = constants.kPrefixCheckMark;
const kPrefixGreenState            = constants.kPrefixGreenState;
const kPrefixInsignificantIsland   = constants.kPrefixInsignificantIsland;
const kRhodeIsland                 = constants.kRhodeIsland;
const kRhodeIslandCheckMark        = constants.kRhodeIslandCheckMark;
const kSecondCharIndex             = constants.kSecondCharIndex;
const kSouthCarolina               = constants.kSouthCarolina;
const kSouthCarolinaCheckMark      = constants.kSouthCarolinaCheckMark;
const kSouthDakota                 = constants.kSouthDakota;
const kSouthDakotaCheckMark        = constants.kSouthDakotaCheckMark;
const kStateNameMichigan           = constants.kStateNameMichigan;
const kStyle                       = constants.kStyle;
const kTennessee                   = constants.kTennessee;
const kTennesseeCheckBox           = constants.kTennesseeCheckBox;
const kTennesseeCheckMark          = constants.kTennesseeCheckMark;
const kTexas                       = constants.kTexas;
const kTexasCheckMark              = constants.kTexasCheckMark;
const kUnitNamePixels              = constants.kUnitNamePixels;
const kUnpopulated                 = constants.kUnpopulated;
const kUtah                        = constants.kUtah;
const kUtahCheckBox                = constants.kUtahCheckBox;
const kUtahCheckMark               = constants.kUtahCheckMark;
const kVermont                     = constants.kVermont;
const kVermontCheckMark            = constants.kVermontCheckMark;
const kViewBox                     = constants.kViewBox;
const kVirginia                    = constants.kVirginia;
const kVirginiaCheckBox            = constants.kVirginiaCheckBox;
const kVirginiaCheckMark           = constants.kVirginiaCheckMark;
const kVisibilityHidden            = constants.kVisibilityHidden;
const kVisibilityVisible           = constants.kVisibilityVisible;
const kWestVirginia                = constants.kWestVirginia;
const kWestVirginiaCheckMark       = constants.kWestVirginiaCheckMark;
const kWisconsin                   = constants.kWisconsin;
const kWisconsinCheckMark          = constants.kWisconsinCheckMark;
const kYearSliderId                = constants.kYearSliderId;

const getMapContent = require('../environment/getMapContent');

const testFunctions = require('../resources/testFunctions');
const goToPage = testFunctions.goToPage;
