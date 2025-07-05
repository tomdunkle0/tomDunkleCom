module.exports = initializeGame;

const aestheticObjects = require('./aestheticObjects');
const TextBox = aestheticObjects.TextBox;
const constants = require('./constants');
const CONST_CANVAS_WIDTH    = constants.CONST_CANVAS_WIDTH;
const CONST_ENVIRONMENT_I84 = constants.CONST_ENVIRONMENT_I84;
const CONST_FALSE           = constants.CONST_FALSE;
const CONST_TRUE            = constants.CONST_TRUE;
const Generator = require('./generator');
const LiveDebugger = require('./liveDebugger');
const managers = require('./managers');
const BackgroundManager = managers.BackgroundManager;
const MusicManager      = managers.MusicManager;
const RoadManager       = managers.RoadManager;
const TouchManager      = managers.TouchManager;
const MessageGenerator = require('./messageGenerator');
