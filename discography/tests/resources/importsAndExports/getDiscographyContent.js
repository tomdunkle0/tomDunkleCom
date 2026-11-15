module.exports =
{
    getAllDiscographyContent,
    getTrackListColumn,
    getTrackRow
};

const constants = require('./constants');
const kGreatestSingleDigitNumber = constants.kGreatestSingleDigitNumber;
const userInterfaceStrings = require('./userInterfaceStrings');
const uiMbTrackDurations    = userInterfaceStrings.uiMbTrackDurations;
const uiMbTrackTitles       = userInterfaceStrings.uiMbTrackTitles;
const uiFuotcTrackDurations = userInterfaceStrings.uiFuotcTrackDurations;
const uiFuotcTrackTitles    = userInterfaceStrings.uiFuotcTrackTitles;
const uiCsTrackDurations    = userInterfaceStrings.uiCsTrackDurations;
const uiCsTrackTitles       = userInterfaceStrings.uiCsTrackTitles;
const uiDfTrackDurations    = userInterfaceStrings.uiDfTrackDurations;
const uiDfTrackTitles       = userInterfaceStrings.uiDfTrackTitles;
const uiWapTrackDurations   = userInterfaceStrings.uiWapTrackDurations;
const uiWapTrackTitles      = userInterfaceStrings.uiWapTrackTitles;
const uiSbTrackDurations    = userInterfaceStrings.uiSbTrackDurations;
const uiSbTrackTitles       = userInterfaceStrings.uiSbTrackTitles;
const uiPhTrackDurations    = userInterfaceStrings.uiPhTrackDurations;
const uiPhTrackTitles       = userInterfaceStrings.uiPhTrackTitles;
const ui1320TrackDurations  = userInterfaceStrings.ui1320TrackDurations;
const ui1320TrackTitles     = userInterfaceStrings.ui1320TrackTitles;
const uiPaddingZero         = userInterfaceStrings.uiPaddingZero;
