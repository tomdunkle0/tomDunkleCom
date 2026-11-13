module.exports =
{
    getAllDiscographyContent,
    getTrackListColumn,
    getTrackRow
};

const constants = require('./constants');
const kGreatestSingleDigitNumber = constants.kGreatestSingleDigitNumber;
const userInterfaceStrings = require('./userInterfaceStrings');
const mbTrackDurations    = userInterfaceStrings.mbTrackDurations;
const mbTrackTitles       = userInterfaceStrings.mbTrackTitles;
const fuotcTrackDurations = userInterfaceStrings.fuotcTrackDurations;
const fuotcTrackTitles    = userInterfaceStrings.fuotcTrackTitles;
const csTrackDurations    = userInterfaceStrings.csTrackDurations;
const csTrackTitles       = userInterfaceStrings.csTrackTitles;
const dfTrackDurations    = userInterfaceStrings.dfTrackDurations;
const dfTrackTitles       = userInterfaceStrings.dfTrackTitles;
const wapTrackDurations   = userInterfaceStrings.wapTrackDurations;
const wapTrackTitles      = userInterfaceStrings.wapTrackTitles;
const sbTrackDurations    = userInterfaceStrings.sbTrackDurations;
const sbTrackTitles       = userInterfaceStrings.sbTrackTitles;
const phTrackDurations    = userInterfaceStrings.phTrackDurations;
const phTrackTitles       = userInterfaceStrings.phTrackTitles;
const d1320TrackDurations = userInterfaceStrings.d1320TrackDurations;
const d1320TrackTitles    = userInterfaceStrings.d1320TrackTitles;
const kPaddingZero        = userInterfaceStrings.kPaddingZero;
