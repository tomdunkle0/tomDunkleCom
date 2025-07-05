module.exports = startMainMenu;

const aestheticObjects = require('./aestheticObjects');
const StaticMenuObject = aestheticObjects.StaticMenuObject;
const TextString       = aestheticObjects.TextString;
const constants = require('./constants');
const CONST_CANVAS_HEIGHT   = constants.CONST_CANVAS_HEIGHT;
const CONST_CANVAS_WIDTH    = constants.CONST_CANVAS_WIDTH;
const CONST_DIM_LARGE       = constants.CONST_DIM_LARGE;
const CONST_DIM_MEDIUM      = constants.CONST_DIM_MEDIUM;
const CONST_DIM_XLARGE      = constants.CONST_DIM_XLARGE;
const CONST_FALSE           = constants.CONST_FALSE;
const CONST_FONT_SIZE_LARGE = constants.CONST_FONT_SIZE_LARGE;
const CONST_FONT_SIZE_SMALL = constants.CONST_FONT_SIZE_SMALL;
const CONST_FONT_SIZE_TINY  = constants.CONST_FONT_SIZE_TINY;
const CONST_TRUE            = constants.CONST_TRUE;
const deerSim = require('./deersim');
const Cursor = deerSim.Cursor;
const splicingFunctions = require('./splicingFunctions');
const clearMenuObjects = splicingFunctions.clearMenuObjects;
const clearTextStrings = splicingFunctions.clearTextStrings;
// TODO: Consider adding more granular testing for the code in the real playBackgroundTrackOnEnteringMainMenu().

const testFunctions = require('../resources/testFunctions');
const playBackgroundTrackOnEnteringMainMenu = testFunctions.playBackgroundTrackOnEnteringMainMenu; // TODO: Needs to be more granular.
