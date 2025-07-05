/*-------------------------------------------*\
 | Initialize game objects required on load. |
\*-------------------------------------------*/
function initializeGame(a_deersim)
{
    a_deersim.gameObjects  = new Array(); // Stores game objects currently in play.
    a_deersim.vehicles     = new Array(); // Stores vehicles currently in play.
    a_deersim.obstacles    = new Array(); // Stores obstacles currently in play.
    a_deersim.powerups     = new Array(); // Stores powerups currently in play.
    a_deersim.projectiles  = new Array(); // Stores projectiles currently in play.
    a_deersim.soundEffects = new Array(); // Stores the game's sound effects.
    a_deersim.voices       = new Array(); // Stores the game's voices (i.e. sound clips).

    populateJavascriptArrayWithAudioFromHtmlContainer("soundEffects", a_deersim.soundEffects); // TODO: Magic values.

    a_deersim.obscenities    = CONST_FALSE; // Initialize the game with obscenities turned off.
    a_deersim.realTimeEngine = CONST_TRUE; // #TODO -- documentation

    populateJavascriptArrayWithAudioFromHtmlContainer("voices", a_deersim.voices); // TODO: Magic values.

    a_deersim.generator         = new Generator();                         // Initialize the generator.
    a_deersim.messageGenerator  = new MessageGenerator();                  // Initialize the MessageGenerator.
    a_deersim.backgroundManager = new BackgroundManager();                 // Initialize the BackgroundManager.
    a_deersim.musicManager      = new MusicManager(CONST_ENVIRONMENT_I84); // Initialize the MusicManager.
    a_deersim.roadManager       = new RoadManager();                       // Initialize the RoadManager.
    a_deersim.touchManager      = new TouchManager();                      // Initialize the TouchManager.

    // Initialize the credits menu.
    a_deersim.creditsMenu = new TextBox(((CONST_CANVAS_WIDTH / 2) - 224), 108);
    // #TODO -- 224 is half of the credits menu width. Find a way to not hardcode it.

    a_deersim.debuggerEnabled = CONST_FALSE;

    a_deersim.frameTimes = new Array(); // Stores all frame times in ms, during the past second.

    a_deersim.liveDebugger = new LiveDebugger(a_deersim); // Initialize the debugger.

    a_deersim.musicCounter      = 0; // Initialize the music counter.
    a_deersim.pauseTimer        = 0; // Initialize the pause timer.
    a_deersim.killCounter       = 0; // Initialize the kill counter.
    a_deersim.projectileCounter = 0; // Initialize the projectile counter.
    a_deersim.deltaT            = 0; // #TODO -- documentation

    a_deersim.timeStep = 1000 / 60; // #TODO -- documentation

    a_deersim.killCounter++; // Start the kill counter.
}; // initializeGame

function populateJavascriptArrayWithAudioFromHtmlContainer(containerId, arrayToPopulate)
{
    const contents = document.getElementById(containerId).children;
    const localNameAudio = "audio";

    var element;
    var arrayIndex = 0;
    for (var containerIndex in contents)
    {
        element = contents[containerIndex];
        if (element.localName === localNameAudio)
        {
            arrayToPopulate[arrayIndex] = element;
            ++arrayIndex;
        }
    }
} // populateJavascriptArrayWithAudioFromHtmlContainer()
