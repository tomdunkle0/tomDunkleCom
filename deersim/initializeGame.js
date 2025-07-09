/*-------------------------------------------*\
 | Initialize game objects required on load. |
\*-------------------------------------------*/
function initializeGame(a_deersim)
{
    a_deersim.gameObjects  = new Array();
    a_deersim.vehicles     = new Array();
    a_deersim.obstacles    = new Array();
    a_deersim.powerups     = new Array();
    a_deersim.projectiles  = new Array();
    a_deersim.soundEffects = new Array();
    a_deersim.voices       = new Array();

    populateJavascriptArrayWithAudioFromHtmlContainer("soundEffects", a_deersim.soundEffects); // TODO: Magic values.

    a_deersim.obscenities    = CONST_FALSE;
    a_deersim.realTimeEngine = CONST_TRUE; // #TODO -- documentation

    populateJavascriptArrayWithAudioFromHtmlContainer("voices", a_deersim.voices); // TODO: Magic values.

    a_deersim.generator         = new Generator();
    a_deersim.messageGenerator  = new MessageGenerator();
    a_deersim.backgroundManager = new BackgroundManager();
    a_deersim.musicManager      = new MusicManager(CONST_ENVIRONMENT_I84);
    a_deersim.roadManager       = new RoadManager();
    a_deersim.touchManager      = new TouchManager();

    a_deersim.creditsMenu = new TextBox(((CONST_CANVAS_WIDTH / 2) - 224), 108);
    // #TODO -- 224 is half of the credits menu width. Find a way to not hardcode it.

    a_deersim.debuggerEnabled = CONST_FALSE;

    a_deersim.frameTimes = new Array();

    a_deersim.liveDebugger = new LiveDebugger(a_deersim);

    a_deersim.musicCounter      = 0;
    a_deersim.pauseTimer        = 0;
    a_deersim.killCounter       = 0;
    a_deersim.projectileCounter = 0;
    a_deersim.deltaT            = 0; // #TODO -- documentation

    a_deersim.timeStep = 1000 / 60; // #TODO -- documentation

    a_deersim.killCounter++;
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
