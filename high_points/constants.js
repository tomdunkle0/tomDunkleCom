/*--------------------------------------------------------------------------*\
 | File: constants.js                                                       |
 | Purpose: Defines constants related to the United States High Points map. |
\*--------------------------------------------------------------------------*/

// Miscellaneous constants:
const kCursorAttributeValueAuto    = "auto";
const kCursorAttributeValuePointer = "pointer";
const kFileExtensionHtml           = ".html";
const kFirstCharIndex              = 0;
const kFirstChildIndex             = 0;
const kSecondCharIndex             = 1;
const kDirectoryNameHighPoints     = "high_points/";
const kLightBlueFill               = "fill: #99CCFF";
const kLightGreenFill              = "fill: #C7FFC4";
const kLightRedFill                = "fill: #FF9999";
const kMainland                    = "Mainland";
const kMargin                      = "margin: ";
const kPeninsula                   = "Peninsula";
const kStyle                       = "style";
const kUnitNamePixels              = "px;";
const kUnpopulated                 = "";
const kViewBox                     = "view_box";
const kVisibilityHidden            = "visibility: hidden";
const kVisibilityVisible           = "visibility: visible";
const kYearSliderId                = "yearSlider";

// Polyline ID prefixes:
const kPrefixCheckBox            = "b";
const kPrefixCheckMark           = "c";
const kPrefixGreenState          = "g";
const kPrefixInsignificantIsland = "i";
const kPrefixRedState            = "r";

// State names:
const kStateNameAlabama       = "Alabama";
const kStateNameAlaska        = "Alaska";
const kStateNameArizona       = "Arizona";
const kStateNameArkansas      = "Arkansas";
const kStateNameCalifornia    = "California";
const kStateNameColorado      = "Colorado";
const kStateNameConnecticut   = "Connecticut";
const kStateNameDelaware      = "Delaware";
const kStateNameFlorida       = "Florida";
const kStateNameGeorgia       = "Georgia";
const kStateNameHawaii        = "Hawaii";
const kStateNameIllinois      = "Illinois";
const kStateNameIndiana       = "Indiana";
const kStateNameIowa          = "Iowa";
const kStateNameKansas        = "Kansas";
const kStateNameKentucky      = "Kentucky";
const kStateNameLouisiana     = "Louisiana";
const kStateNameMaine         = "Maine";
const kStateNameMaryland      = "Maryland";
const kStateNameMassachusetts = "Massachusetts";
const kStateNameMichigan      = "Michigan";
const kStateNameMinnesota     = "Minnesota";
const kStateNameMississippi   = "Mississippi";
const kStateNameMissouri      = "Missouri";
const kStateNameMontana       = "Montana";
const kStateNameNebraska      = "Nebraska";
const kStateNameNevada        = "Nevada";
const kStateNameNewHampshire  = "NewHampshire";
const kStateNameNewJersey     = "NewJersey";
const kStateNameNewMexico     = "NewMexico";
const kStateNameNewYork       = "NewYork";
const kStateNameNorthCarolina = "NorthCarolina";
const kStateNameNorthDakota   = "NorthDakota";
const kStateNameOhio          = "Ohio";
const kStateNameOklahoma      = "Oklahoma";
const kStateNameOregon        = "Oregon";
const kStateNamePennsylvania  = "Pennsylvania";
const kStateNameRhodeIsland   = "RhodeIsland";
const kStateNameSouthCarolina = "SouthCarolina";
const kStateNameSouthDakota   = "SouthDakota";
const kStateNameTennessee     = "Tennessee";
const kStateNameTexas         = "Texas";
const kStateNameUtah          = "Utah";
const kStateNameVermont       = "Vermont";
const kStateNameVirginia      = "Virginia";
const kStateNameWestVirginia  = "WestVirginia";
const kStateNameWisconsin     = "Wisconsin";

// Island names:
const kIslandNameKauai  = "Kauai";
const kIslandNameKodiak = "Kodiak";
const kIslandNameMaui   = "Maui";
const kIslandNameOahu   = "Oahu";

// State polyline IDs:
const kAlabama           = kPrefixGreenState + kStateNameAlabama;
const kAlaskaMainland    = kPrefixRedState   + kStateNameAlaska + kMainland;
const kArizona           = kPrefixGreenState + kStateNameArizona;
const kArkansas          = kPrefixGreenState + kStateNameArkansas;
const kCalifornia        = kPrefixGreenState + kStateNameCalifornia;
const kColorado          = kPrefixGreenState + kStateNameColorado;
const kConnecticut       = kPrefixGreenState + kStateNameConnecticut;
const kDelaware          = kPrefixGreenState + kStateNameDelaware;
const kFlorida           = kPrefixRedState   + kStateNameFlorida;
const kGeorgia           = kPrefixGreenState + kStateNameGeorgia;
const kHawaii            = kPrefixRedState   + kStateNameHawaii;
const kIllinois          = kPrefixGreenState + kStateNameIllinois;
const kIndiana           = kPrefixGreenState + kStateNameIndiana;
const kIowa              = kPrefixGreenState + kStateNameIowa;
const kKansas            = kPrefixGreenState + kStateNameKansas;
const kKauai             = kPrefixRedState   + kIslandNameKauai;
const kKentucky          = kPrefixGreenState + kStateNameKentucky;
const kKodiakIsland      = kPrefixRedState   + kStateNameAlaska + kIslandNameKodiak;
const kLouisiana         = kPrefixGreenState + kStateNameLouisiana;
const kMaine             = kPrefixGreenState + kStateNameMaine;
const kMaryland          = kPrefixGreenState + kStateNameMaryland;
const kMassachusetts     = kPrefixGreenState + kStateNameMassachusetts;
const kMaui              = kPrefixRedState   + kIslandNameMaui;
const kMichiganMainland  = kPrefixGreenState + kStateNameMichigan + kMainland;
const kMichiganPeninsula = kPrefixGreenState + kStateNameMichigan + kPeninsula;
const kMinnesota         = kPrefixGreenState + kStateNameMinnesota;
const kMississippi       = kPrefixGreenState + kStateNameMississippi;
const kMissouri          = kPrefixGreenState + kStateNameMissouri;
const kMontana           = kPrefixRedState   + kStateNameMontana;
const kNebraska          = kPrefixGreenState + kStateNameNebraska;
const kNevada            = kPrefixGreenState + kStateNameNevada;
const kNewHampshire      = kPrefixGreenState + kStateNameNewHampshire;
const kNewJersey         = kPrefixGreenState + kStateNameNewJersey;
const kNewMexico         = kPrefixGreenState + kStateNameNewMexico;
const kNewYork           = kPrefixGreenState + kStateNameNewYork;
const kNorthCarolina     = kPrefixGreenState + kStateNameNorthCarolina;
const kNorthDakota       = kPrefixGreenState + kStateNameNorthDakota;
const kOahu              = kPrefixRedState   + kIslandNameOahu;
const kOhio              = kPrefixGreenState + kStateNameOhio;
const kOklahoma          = kPrefixGreenState + kStateNameOklahoma;
const kOregon            = kPrefixRedState   + kStateNameOregon;
const kPennsylvania      = kPrefixGreenState + kStateNamePennsylvania;
const kRhodeIsland       = kPrefixGreenState + kStateNameRhodeIsland;
const kSouthCarolina     = kPrefixGreenState + kStateNameSouthCarolina;
const kSouthDakota       = kPrefixGreenState + kStateNameSouthDakota;
const kTennessee         = kPrefixGreenState + kStateNameTennessee;
const kTexas             = kPrefixGreenState + kStateNameTexas;
const kUtah              = kPrefixGreenState + kStateNameUtah;
const kVermont           = kPrefixGreenState + kStateNameVermont;
const kVirginia          = kPrefixGreenState + kStateNameVirginia;
const kWestVirginia      = kPrefixGreenState + kStateNameWestVirginia;
const kWisconsin         = kPrefixGreenState + kStateNameWisconsin;

// State check box IDs:
const kFloridaCheckBox       = kPrefixCheckBox + kStateNameFlorida;
const kHawaiiCheckBox        = kPrefixCheckBox + kStateNameHawaii;
const kIowaCheckBox          = kPrefixCheckBox + kStateNameIowa;
const kMichiganCheckBox      = kPrefixCheckBox + kStateNameMichigan;
const kMontanaCheckBox       = kPrefixCheckBox + kStateNameMontana;
const kNevadaCheckBox        = kPrefixCheckBox + kStateNameNevada;
const kNorthCarolinaCheckBox = kPrefixCheckBox + kStateNameNorthCarolina;
const kOregonCheckBox        = kPrefixCheckBox + kStateNameOregon;
const kTennesseeCheckBox     = kPrefixCheckBox + kStateNameTennessee;
const kUtahCheckBox          = kPrefixCheckBox + kStateNameUtah;
const kVirginiaCheckBox      = kPrefixCheckBox + kStateNameVirginia;

// State check mark IDs:
const kAlabamaCheckMark       = kPrefixCheckMark + kStateNameAlabama;
const kArizonaCheckMark       = kPrefixCheckMark + kStateNameArizona;
const kArkansasCheckMark      = kPrefixCheckMark + kStateNameArkansas;
const kCaliforniaCheckMark    = kPrefixCheckMark + kStateNameCalifornia;
const kConnecticutCheckMark   = kPrefixCheckMark + kStateNameConnecticut;
const kColoradoCheckMark      = kPrefixCheckMark + kStateNameColorado;
const kDelawareCheckMark      = kPrefixCheckMark + kStateNameDelaware;
const kGeorgiaCheckMark       = kPrefixCheckMark + kStateNameGeorgia;
const kIllinoisCheckMark      = kPrefixCheckMark + kStateNameIllinois;
const kIndianaCheckMark       = kPrefixCheckMark + kStateNameIndiana;
const kIowaCheckMark          = kPrefixCheckMark + kStateNameIowa;
const kKansasCheckMark        = kPrefixCheckMark + kStateNameKansas;
const kKentuckyCheckMark      = kPrefixCheckMark + kStateNameKentucky;
const kLouisianaCheckMark     = kPrefixCheckMark + kStateNameLouisiana;
const kMaineCheckMark         = kPrefixCheckMark + kStateNameMaine;
const kMarylandCheckMark      = kPrefixCheckMark + kStateNameMaryland;
const kMassachusettsCheckMark = kPrefixCheckMark + kStateNameMassachusetts;
const kMichiganCheckMark      = kPrefixCheckMark + kStateNameMichigan;
const kMinnesotaCheckMark     = kPrefixCheckMark + kStateNameMinnesota;
const kMississippiCheckMark   = kPrefixCheckMark + kStateNameMississippi;
const kMissouriCheckMark      = kPrefixCheckMark + kStateNameMissouri;
const kNebraskaCheckMark      = kPrefixCheckMark + kStateNameNebraska;
const kNevadaCheckMark        = kPrefixCheckMark + kStateNameNevada;
const kNewHampshireCheckMark  = kPrefixCheckMark + kStateNameNewHampshire;
const kNewJerseyCheckMark     = kPrefixCheckMark + kStateNameNewJersey;
const kNewMexicoCheckMark     = kPrefixCheckMark + kStateNameNewMexico;
const kNewYorkCheckMark       = kPrefixCheckMark + kStateNameNewYork;
const kNorthCarolinaCheckMark = kPrefixCheckMark + kStateNameNorthCarolina;
const kNorthDakotaCheckMark   = kPrefixCheckMark + kStateNameNorthDakota;
const kOhioCheckMark          = kPrefixCheckMark + kStateNameOhio;
const kOklahomaCheckMark      = kPrefixCheckMark + kStateNameOklahoma;
const kPennsylvaniaCheckMark  = kPrefixCheckMark + kStateNamePennsylvania;
const kRhodeIslandCheckMark   = kPrefixCheckMark + kStateNameRhodeIsland;
const kSouthCarolinaCheckMark = kPrefixCheckMark + kStateNameSouthCarolina;
const kSouthDakotaCheckMark   = kPrefixCheckMark + kStateNameSouthDakota;
const kTennesseeCheckMark     = kPrefixCheckMark + kStateNameTennessee;
const kTexasCheckMark         = kPrefixCheckMark + kStateNameTexas;
const kUtahCheckMark          = kPrefixCheckMark + kStateNameUtah;
const kVermontCheckMark       = kPrefixCheckMark + kStateNameVermont;
const kVirginiaCheckMark      = kPrefixCheckMark + kStateNameVirginia;
const kWestVirginiaCheckMark  = kPrefixCheckMark + kStateNameWestVirginia;
const kWisconsinCheckMark     = kPrefixCheckMark + kStateNameWisconsin;
