// Class includes:
const aestheticObjects  = require('./environment/aestheticObjects');
const Background        = aestheticObjects.Background;
const StaticMenuObject  = aestheticObjects.StaticMenuObject;
const deersim           = require('./environment/deersim');
const DeerSim           = deersim.DeerSim;
const RoadSegment       = deersim.RoadSegment;
const Generator         = require('./environment/generator');
const managers          = require('./environment/managers');
const BackgroundManager = managers.BackgroundManager;
const MusicManager      = managers.MusicManager;
const RoadManager       = managers.RoadManager;
const TouchManager      = managers.TouchManager;
const MessageGenerator  = require('./environment/messageGenerator');

// Constant includes:
const constants             = require('./environment/constants');
const CONST_CANVAS_HEIGHT   = constants.CONST_CANVAS_HEIGHT;
const CONST_CANVAS_WIDTH    = constants.CONST_CANVAS_WIDTH;
const CONST_ENVIRONMENT_I84 = constants.CONST_ENVIRONMENT_I84;
const CONST_FALSE           = constants.CONST_FALSE;
const CONST_LANE_0_INDEX    = constants.CONST_LANE_0_INDEX;
const CONST_LANE_1_INDEX    = constants.CONST_LANE_1_INDEX;
const CONST_LANE_2_INDEX    = constants.CONST_LANE_2_INDEX;
const CONST_LANE_3_INDEX    = constants.CONST_LANE_3_INDEX;
const CONST_LANE_4_INDEX    = constants.CONST_LANE_4_INDEX;
const CONST_TRUE            = constants.CONST_TRUE;

// Function includes:
const getI84SimContent = require('./environment/getI84SimContent');
const initializeCanvas = require('./environment/initializeCanvas');
const initializeGame   = require('./environment/initializeGame');
const startMainMenu    = require('./environment/transitions'); // TODO: Needs to be more granular.

// Miscellaneous constants:
const kArbitraryImageHandle = "ImageHandle";
const kArbitraryXPosition   = 100;
const kArbitraryYPosition   = 200;
const kAudioFolderPath      = "http://localhost/deersim/audio/";

beforeEach(() => {
    document.body.innerHTML = getI84SimContent();
}); // beforeEach()

test('calling getI84SimContent() creates the Connecticut map', () => {
    const connecticutMap = document.getElementById("ConnecticutMap"); // TODO: Magic string.
    expect(connecticutMap).not.toBe(null);
}); // calling getI84SimContent() creates the Connecticut map

test('calling getI84SimContent() creates the deersim canvas', () => {
    const deersimCanvas = document.getElementById("deersimcanvas"); // TODO: Magic string.
    expect(deersimCanvas).not.toBe(null);
    expect(deersimCanvas.height).toBe(CONST_CANVAS_HEIGHT);
    expect(deersimCanvas.width).toBe(CONST_CANVAS_WIDTH);
}); // calling getI84SimContent() creates the deersim canvas

test('calling initializeCanvas() creates a canvas with a canvas context', () => {
    const testDeerSim = new DeerSim();
    initializeCanvas(testDeerSim);

    const deersimCanvas = testDeerSim.canvas;
    expect(deersimCanvas.width).toBe(CONST_CANVAS_WIDTH);
    expect(deersimCanvas.height).toBe(CONST_CANVAS_HEIGHT);
    expect(testDeerSim.canvasContext).not.toBe(null);
}); // calling initializeCanvas() creates a canvas with a canvas context

test('calling initializeGame() creates various object arrays', () => {
    const testDeerSim = new DeerSim();
    initializeGame(testDeerSim);

    expect(testDeerSim.gameObjects).not.toBe(null);
    expect(testDeerSim.vehicles).not.toBe(null);
    expect(testDeerSim.obstacles).not.toBe(null);
    expect(testDeerSim.powerups).not.toBe(null);
    expect(testDeerSim.projectiles).not.toBe(null);
    expect(testDeerSim.soundEffects).not.toBe(null);
    expect(testDeerSim.voices).not.toBe(null);
}); // calling initializeGame() creates various object arrays

test('calling initializeGame() populates the sound effects array', () => {
    const testDeerSim = new DeerSim();
    expect(testDeerSim.soundEffects).toBe(undefined);

    initializeGame(testDeerSim);

    // TODO: It's probably going to be a huge pain to fix this, but it would be ideal
    //        if these sound effects were all in the array in alphabetical order:
    const expectedSourceFilePaths =
    [
        kAudioFolderPath + "voxcometsoundcheck10s.wav",
        kAudioFolderPath + "druidchanting10s.wav",
        kAudioFolderPath + "exclamation.wav",
        kAudioFolderPath + "deerDeathA.wav",
        kAudioFolderPath + "menuSelectionHigh.wav",
        kAudioFolderPath + "menuSelectionMid.wav",
        kAudioFolderPath + "menuSelectionLow.wav",
        kAudioFolderPath + "frenchCanadianGrunt01.wav",
        kAudioFolderPath + "frenchCanadianGrunt02.wav",
        kAudioFolderPath + "lightningBoltCs6.wav",
        kAudioFolderPath + "lightningBoltDs6.wav",
        kAudioFolderPath + "lightningBoltF6.wav",
        kAudioFolderPath + "exclamation_reverbX4.wav",
        kAudioFolderPath + "exclamation_reverbX8.wav",
        kAudioFolderPath + "obtainPowerup.wav"
    ];
    expectArrayIsPopulatedWithAudioReferences(testDeerSim.soundEffects, expectedSourceFilePaths);
}); // calling initializeGame() populates the sound effects array

test('calling initializeGame() populates the voices array', () => {
    const testDeerSim = new DeerSim();
    expect(testDeerSim.voices).toBe(undefined);

    initializeGame(testDeerSim);

    const expectedSourceFilePaths =
    [
        kAudioFolderPath + "amishDaveVoice.wav",
        kAudioFolderPath + "golfCartVoice.wav",
        kAudioFolderPath + "oilTankerVoice.wav",
        kAudioFolderPath + "smartCarVoice.wav",
        kAudioFolderPath + "weenieMobileVoice1.wav",
        kAudioFolderPath + "weenieMobileVoice2.wav"
    ];
    expectArrayIsPopulatedWithAudioReferences(testDeerSim.voices, expectedSourceFilePaths);
}); // calling initializeGame() populates the voices array

test('calling startMainMenu() initializes the main menu cursor', () => {
    const testDeerSim = initializeCanvasAndGame();
    expect(testDeerSim.mainMenuCursor).toBe(undefined);

    startMainMenu(testDeerSim);

    expect(testDeerSim.mainMenuCursor).not.toBe(undefined);
    // TODO: Consider what else to assert on with regards to the main menu cursor.
}); // calling startMainMenu() initializes the main menu cursor

test('calling startMainMenu() initializes the toggle box', () => {
    const testDeerSim = initializeCanvasAndGame();
    expect(testDeerSim.toggleBox).toBe(undefined);

    startMainMenu(testDeerSim);

    expect(testDeerSim.toggleBox).not.toBe(undefined);
    // TODO: Consider what else to assert on with regards to the toggle box.
}); // calling startMainMenu() initializes the toggle box

test('calling startMainMenu() initially populates the GameObjects array', () => {
    const testDeerSim = initializeCanvasAndGame();
    const gameObjects = testDeerSim.gameObjects;
    expect(gameObjects.length).toBe(0);

    startMainMenu(testDeerSim);

    expect(gameObjects.length).toBeGreaterThan(0);
}); // calling startMainMenu() initially populates the GameObjects array

test('calling startMainMenu() sets the game state to main', () => {
    const testDeerSim = initializeCanvasAndGame();
    expect(testDeerSim.state).toBe(undefined);

    startMainMenu(testDeerSim);

    expect(testDeerSim.state).toBe("main"); // TODO: Magic string.
}); // calling startMainMenu() sets the game state to main

test('creating a Background populates its x, y, and imageHandle', () => {
    const background = new Background(kArbitraryXPosition, kArbitraryImageHandle);

    expect(background.x).toBe(kArbitraryXPosition);
    expect(background.y).toBe(0); // TODO: Magic number.
    expect(background.imageHandle).toBe(kArbitraryImageHandle);
}); // creating a Background populates its x, y, and imageHandle

test('creating a BackgroundManager populates its environment, bgIsScrolling, bg1, and bg2', () => {
    const backgroundManager = new BackgroundManager();

    expect(backgroundManager.environment).toBe(CONST_ENVIRONMENT_I84);
    expect(backgroundManager.bgIsScrolling).toBe(CONST_TRUE);
    expect(backgroundManager.bg1.x).toBe(0); // TODO: Magic number.
    expect(backgroundManager.bg1.imageHandle).toBe("Background"); // TODO: Magic string.
    expect(backgroundManager.bg2.x).toBe(CONST_CANVAS_WIDTH);
    expect(backgroundManager.bg2.imageHandle).toBe("Background"); // TODO: Magic string.
}); // creating a BackgroundManager populates its environment, bgIsScrolling, bg1, and bg2

test('creating a Generator populates its vehicleCounter and powerupCounter', () => {
    const generator = new Generator();

    expect(generator).not.toBe(null);
    expect(generator.vehicleCounter).toBe(0); // TODO: Magic number.
    expect(generator.powerupCounter).toBe(0); // TODO: Magic number.
}); // creating a Generator populates its vehicleCounter and powerupCounter

test('creating a MessageGenerator populates its randomDecimal', () => {
    const messageGenerator = new MessageGenerator();

    expect(messageGenerator).not.toBe(null);
    expect(messageGenerator.randomDecimal).toBe(0); // TODO: Magic number.
}); // creating a MessageGenerator populates its randomDecimal

// TODO: In addition to this, look into testing that loadMusic()
//        did its job during the initialization of the MusicManager.
test('creating a MusicManager populates its environment and reloadOnNextMain', () => {
    const musicManager = new MusicManager(CONST_ENVIRONMENT_I84);

    expect(musicManager.environment).toBe(CONST_ENVIRONMENT_I84);
    expect(musicManager.reloadOnNextMain).toBe(CONST_TRUE);
}); // creating a MusicManager populates its environment and reloadOnNextMain

test('creating a RoadManager populates its initial properties', () => {
    const roadManager = new RoadManager();

    expect(roadManager.roadSegments.length).toBe(30); // TODO: Magic number.
    expect(roadManager.bottomSegments.length).toBe(10); // TODO: Magic number.
    expect(roadManager.topSegments.length).toBe(10); // TODO: Magic number.
    const generateFlags = roadManager.generateFlags;
    expect(generateFlags[CONST_LANE_0_INDEX]).toBe(CONST_FALSE);
    expect(generateFlags[CONST_LANE_1_INDEX]).toBe(CONST_TRUE);
    expect(generateFlags[CONST_LANE_2_INDEX]).toBe(CONST_TRUE);
    expect(generateFlags[CONST_LANE_3_INDEX]).toBe(CONST_TRUE);
    expect(generateFlags[CONST_LANE_4_INDEX]).toBe(CONST_FALSE);
    expect(roadManager.closeBottomLaneRequested).toBe(CONST_FALSE);
    expect(roadManager.closeTopLaneRequested).toBe(CONST_FALSE);
    expect(roadManager.openBottomLaneRequested).toBe(CONST_FALSE);
    expect(roadManager.openTopLaneRequested).toBe(CONST_FALSE);
    expect(roadManager.maxLane).toBe(4); // TODO: Magic number.
    expect(roadManager.minLane).toBe(2); // TODO: Magic number.
    const idleFlags = roadManager.idleFlags;
    expect(idleFlags[CONST_LANE_0_INDEX]).toBe(CONST_FALSE);
    expect(idleFlags[CONST_LANE_1_INDEX]).toBe(CONST_FALSE);
    expect(idleFlags[CONST_LANE_2_INDEX]).toBe(CONST_TRUE);
    expect(idleFlags[CONST_LANE_3_INDEX]).toBe(CONST_FALSE);
    expect(idleFlags[CONST_LANE_4_INDEX]).toBe(CONST_FALSE);
    expect(roadManager.idleLanes.length).toBe(5); // TODO: Magic number.
    expect(roadManager.creationBoundary).toBe(1152); // TODO: Magic number.
    expect(roadManager.kBottomHeightMid).toBe(662); // TODO: Magic number.
    expect(roadManager.kTopHeightMid).toBe(496); // TODO: Magic number.
    expect(roadManager.removalBoundary).toBe(-200); // TODO: Magic number.
    expect(roadManager.segmentWidth).toBe(128); // TODO: Magic number.
    expect(roadManager.segmentHeight).toBe(40); // TODO: Magic number.
    expect(roadManager.sideHeightBottom).toBe(662); // TODO: Magic number.
    expect(roadManager.sideHeightTop).toBe(496); // TODO: Magic number.
    expect(roadManager.maxXValue).toBe(0); // TODO: Magic number.
}); // creating a RoadManager populates its initial properties

test('creating a RoadSegment populates its initial properties', () => {
    const arbitraryLane = 2;
    const roadSegment = new RoadSegment(kArbitraryXPosition, kArbitraryYPosition, "standard", arbitraryLane); // TODO: Magic string.

    expect(roadSegment.x).toBe(kArbitraryXPosition);
    expect(roadSegment.y).toBe(kArbitraryYPosition);
    expect(roadSegment.width).toBe(128); // TODO: Magic number.
    expect(roadSegment.height).toBe(40); // TODO: Magic number.
    expect(roadSegment.type).toBe("standard"); // TODO: Magic string.
    expect(roadSegment.lane).toBe(arbitraryLane);
    expect(roadSegment.imageHandle).toBe("RoadSegment"); // TODO: Magic string.
}); // creating a RoadSegment populates its initial properties

test('creating a StaticMenuObject populates its x, y, and imageHandle', () => {
    const staticMenuObject = new StaticMenuObject(kArbitraryXPosition, kArbitraryYPosition, kArbitraryImageHandle);

    expect(staticMenuObject.x).toBe(kArbitraryXPosition);
    expect(staticMenuObject.y).toBe(kArbitraryYPosition);
    expect(staticMenuObject.imageHandle).toBe(kArbitraryImageHandle);
}); // creating a StaticMenuObject populates its x, y, and imageHandle

test('creating a TouchManager populates its initial properties', () => {
    const touchManager = new TouchManager();

    expect(touchManager.lastTouchEnded).toBe(-1); // TODO: Magic number.
    expect(touchManager.lastTouchEndedTS).toBe(-1); // TODO: Magic number.
    expect(touchManager.lastTouchStarted).toBe(-1); // TODO: Magic number.
    expect(touchManager.lastTouchStartedTS).toBe(-1); // TODO: Magic number.
    expect(touchManager.shouldProcessSwipe).toBe(CONST_FALSE);
}); // creating a TouchManager populates its initial properties

function expectArrayIsPopulatedWithAudioReferences(arrayUnderTest, expectedSourceFilePaths)
{
    expect(arrayUnderTest.length).toBe(expectedSourceFilePaths.length);
    for (var index in arrayUnderTest)
    {
        expect(arrayUnderTest[index].src).toBe(expectedSourceFilePaths[index]);
    }
} // expectArrayIsPopulatedWithAudioReferences()

function initializeCanvasAndGame()
{
    const testDeerSim = new DeerSim();
    /* TODO: Consider making production code fail initializeGame()
        if initializeCanvas() hasn't completed: */
    initializeCanvas(testDeerSim);
    initializeGame(testDeerSim);
    return testDeerSim;
} // initializeCanvasAndGame()
