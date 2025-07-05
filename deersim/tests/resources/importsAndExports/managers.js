module.exports =
{
   BackgroundManager,
   MusicManager,
   RoadManager,
   TouchManager
};

const aestheticObjects = require('./aestheticObjects');
const Background       = aestheticObjects.Background;
const StaticMenuObject = aestheticObjects.StaticMenuObject;
const TextString       = aestheticObjects.TextString;
const constants = require('./constants');
const CONST_CANVAS_WIDTH    = constants.CONST_CANVAS_WIDTH;
const CONST_ENVIRONMENT_I84 = constants.CONST_ENVIRONMENT_I84;
const CONST_FALSE           = constants.CONST_FALSE;
const CONST_FONT_SIZE_TINY  = constants.CONST_FONT_SIZE_TINY;
const CONST_LANE_0_BASE     = constants.CONST_LANE_0_BASE;
const CONST_LANE_0_INDEX    = constants.CONST_LANE_0_INDEX;
const CONST_LANE_1_INDEX    = constants.CONST_LANE_1_INDEX;
const CONST_LANE_2_INDEX    = constants.CONST_LANE_2_INDEX;
const CONST_LANE_3_INDEX    = constants.CONST_LANE_3_INDEX;
const CONST_LANE_4_INDEX    = constants.CONST_LANE_4_INDEX;
const CONST_LANE_HEIGHT     = constants.CONST_LANE_HEIGHT;
const CONST_TRUE            = constants.CONST_TRUE;
const deersim = require('./deersim');
const RoadSegment = deersim.RoadSegment;
