/*------------------------------------------------------------------------------------------*\
 | File: high_points/tests/resources/testConstants.js                                       |
 | Purpose: Defines common constants used by tests of the United States High Points module. |
\*------------------------------------------------------------------------------------------*/

const constants = require('../environment/constants');
const kConnecticut               = constants.kConnecticut;
const kLightBlueFill             = constants.kLightBlueFill;
const kPrefixCheckBox            = constants.kPrefixCheckBox;
const kPrefixInsignificantIsland = constants.kPrefixInsignificantIsland;
const kPrefixRedState            = constants.kPrefixRedState;
const kStateNameAlaska           = constants.kStateNameAlaska;
const kStateNameConnecticut      = constants.kStateNameConnecticut;
const kUnpopulated               = constants.kUnpopulated;

// State and island names:
const kIslandNameKaula     = "Kaula";
const kIslandNameMolokai   = "Molokai";
const kIslandNameNiihau    = "Niihau";
const kStateNameIdaho      = "Idaho";
const kStateNameWashington = "Washington";
const kStateNameWyoming    = "Wyoming";

// State polyline IDs:
const kIdaho      = kPrefixRedState + kStateNameIdaho;
const kWashington = kPrefixRedState + kStateNameWashington;
const kWyoming    = kPrefixRedState + kStateNameWyoming;

// Cluster of island fill colors:
const kHawaiianIslandsBlue = [kLightBlueFill, kLightBlueFill, kLightBlueFill, kLightBlueFill];

// Miscellaneous constants:
const kArbitraryPolylineId               = kConnecticut;
const kConnecticutCheckBox               = kPrefixCheckBox + kStateNameConnecticut;
const kIslands                           = "Islands";
const kLocalNamePolyline                 = "polyline";
const kPropertyNameOrientation           = "orientation";
const kScreenOrientationLandscapePrimary = "landscape-primary";
const kUnpopulatedInputs                 = [ kUnpopulated, null, undefined ];
const kYearSliderValueAfter2014          = "2014";
const kYearSliderValueAfter2015          = "2015";
const kYearSliderValueAfter2016          = "2016";
const kYearSliderValueAfter2017          = "2017";
const kYearSliderValueAfter2018          = "2018";
const kYearSliderValueAfter2019          = "2019";
const kYearSliderValueAfter2020          = "2020";
const kYearSliderValueAfter2021          = "2021";
const kYearSliderValueAfter2022          = "2022";
const kYearSliderValueAfter2023          = "2023";
const kYearSliderValueAfter2024          = "2024";

// Insignificant Islands:
const kAlaskaIslands1 = kPrefixInsignificantIsland + kStateNameAlaska + kIslands + "1";
const kAlaskaIslands2 = kPrefixInsignificantIsland + kStateNameAlaska + kIslands + "2";
const kAlaskaIslands3 = kPrefixInsignificantIsland + kStateNameAlaska + kIslands + "3";
const kAlaskaIslands4 = kPrefixInsignificantIsland + kStateNameAlaska + kIslands + "4";
const kAlaskaIslands5 = kPrefixInsignificantIsland + kStateNameAlaska + kIslands + "5";
const kAlaskaIslands6 = kPrefixInsignificantIsland + kStateNameAlaska + kIslands + "6";
const kAlaskaIslands7 = kPrefixInsignificantIsland + kStateNameAlaska + kIslands + "7";
const kAlaskaIslands8 = kPrefixInsignificantIsland + kStateNameAlaska + kIslands + "8";
const kKaula          = kPrefixInsignificantIsland + kIslandNameKaula;
const kMolokai        = kPrefixInsignificantIsland + kIslandNameMolokai;
const kNiihau         = kPrefixInsignificantIsland + kIslandNameNiihau;

module.exports =
{
    kAlaskaIslands1,
    kAlaskaIslands2,
    kAlaskaIslands3,
    kAlaskaIslands4,
    kAlaskaIslands5,
    kAlaskaIslands6,
    kAlaskaIslands7,
    kAlaskaIslands8,
    kArbitraryPolylineId,
    kConnecticutCheckBox,
    kHawaiianIslandsBlue,
    kIdaho,
    kKaula,
    kLocalNamePolyline,
    kMolokai,
    kNiihau,
    kPropertyNameOrientation,
    kScreenOrientationLandscapePrimary,
    kStateNameIdaho,
    kStateNameWashington,
    kStateNameWyoming,
    kUnpopulatedInputs,
    kWashington,
    kWyoming,
    kYearSliderValueAfter2014,
    kYearSliderValueAfter2015,
    kYearSliderValueAfter2016,
    kYearSliderValueAfter2017,
    kYearSliderValueAfter2018,
    kYearSliderValueAfter2019,
    kYearSliderValueAfter2020,
    kYearSliderValueAfter2021,
    kYearSliderValueAfter2022,
    kYearSliderValueAfter2023,
    kYearSliderValueAfter2024
};
