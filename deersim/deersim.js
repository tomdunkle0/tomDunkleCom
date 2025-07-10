/*-------------------------------------------------------------*\
 | I-84 Simulator for "the Internet" v0.29                     |
 | ----------------------------------------------------------- |
 | Goals for v.0.30:                                           |
 | ( ) - Properly silence swipe refreshing.                    |
 | ( ) - Bug #0004.                                            |
 | ( ) - Vehicles generate offscreen instead of onscreen.      |
 | ----------------------------------------------------------- |
 | Author: Tom Dunkle                                          |
 | Tested on: Google Chrome 69.0.3497.100                      |
\*-------------------------------------------------------------*/

// ---- Start of variable declarations. ----

var animationTimer;      // Stores a timer used to control the game's visual animations.
var arrowKeyCounter;     // Stores number of arrow keys currently pressed.
var boss;                // Stores the active boss, which fights the active Deer.
var collisionString;     // Stores a boolean indicating whether to generate a collision string.
var collisionValue;      // Temp variable, used in generating TextStrings for collision values.
var deer;                // Stores the Deer.
var deersim;             // Used experimentally for the purpose of removing global variables.
// #TODO -- keyTimer is only used to control the deer switching lanes.
var keyTimer;            // Stores a timer which adds a frame delay after keystrokes.
// #TODO -- counter array, similar to sfx array
var pauseStateBuffer;    // Stores game state from before game was paused.
var playerProfile;       // Stores statistics about the player's performance.
var showCreditsMenu;     // Boolean flagging whether credits menu should display.
var transitionAnimation; // Handle to the currently active animation used in a state transition.
var transitionCounter;   // Stores a counter used to manage timing of state transition tasks.

// ---- End of variable declarations. ----

// ---- Start of object declarations. ----

/*------------------------------------------------*\
 | A Cursor is an object that indicates           |
 | the intended selection from a menu of choices. |
 | @param int x -- this Cursor's x position.      |
 | @param int y -- this Cursor's y position.      |
\*------------------------------------------------*/
function Cursor(x, y) {
   this.x = x;
   this.y = y;
   this.d = CONST_FONT_SIZE_LARGE;

   this.menuItem = 1;

   this.animationCounter = 0;

   this.keyCounter = 0;
};

/*---------------------------------------------------------------------------------*\
 | An experimental object whose purpose is to replace the use of global variables. |
\*---------------------------------------------------------------------------------*/
function DeerSim() {
   this.canvas        = null;
   this.canvasContext = null;
   this.gameObjects   = null;
};

/*----------------------------------------------------------------------------------------*\
 | Defines the RoadSegment, a single-lane segment of road of a standard size (128x40 px). |
 | RoadSegments are managed by the RoadManager, and they collectively comprise the Road   |
 | that the active Deer, Vehicles, Powerups, and Projectiles operate on top of.           |
 | @param int    x    -- this RoadSegment's x position.                                   |
 | @param int    y    -- this RoadSegment's y position.                                   |
 | @param string type -- this RoadSegment's type (i.e. shape and visual appearance).      |
 | @param int    lane -- the lane which this RoadSegment is a part of.                    |
\*----------------------------------------------------------------------------------------*/
function RoadSegment(x, y, type, lane) {
   this.x      = x;
   this.y      = y;
   this.width  = 128;
   this.height = 40;
   this.type   = type;
   this.lane   = lane;

   switch (this.type) {
      case "bottom":            this.imageHandle = "RoadSideBottomSegment";        break;
      case "closingBottomLane": this.imageHandle = "RoadSegmentClosingBottomLane"; break;
      case "closingTopLane":    this.imageHandle = "RoadSegmentClosingTopLane";    break;
      case "openingBottomLane": this.imageHandle = "RoadSegmentOpeningBottomLane"; break;
      case "openingTopLane":    this.imageHandle = "RoadSegmentOpeningTopLane";    break;
      case "standard":          this.imageHandle = "RoadSegment";                  break;
      case "top":               this.imageHandle = "RoadSideTopSegment";           break;
   }
}; // RoadSegment()

/*-------------------------------------------------------------*\
 | Defines the ToggleBox, a rectangle used to display which    |
 | of two options in a menu the player has currently selected. |
 | The ToggleBox maintains two sets of cartesian coordinates   |
 | and key input is used to switch between them.               |
 | @param int x1 -- this ToggleBox's first x coordinate.       |
 | @param int x2 -- this ToggleBox's second x coordinate.      |
 | @param int y1 -- this ToggleBox's first y coordinate.       |
 | @param int y2 -- this ToggleBox's second y coordinate.      |
\*-------------------------------------------------------------*/
function ToggleBox(x1, x2, y1, y2) {
   this.x1 = x1;
   this.x2 = x2;
   this.y1 = y1;
   this.y2 = y2;

   this.coordinateSet = 0;
};

// ---- End of object declarations. ----

// ---- Start of function declarations. ----

/*---------------------------------------------------------------------------*\
 | When the HTML document loads, display the canvas and begin the game loop. |
\*---------------------------------------------------------------------------*/
var onPageLoad = function()
{
   document.body.innerHTML = getI84SimContent();
   deersim = new DeerSim();

   initializeCanvas(deersim);
   initializeGame(deersim);
   startMainMenu(deersim);
   animationTimer = 0;
   keyTimer = 0;
   animate(gameLoop);
} // onPageLoad()

/*-------------------------------------------------*\
 | Draws this Cursor onscreen.                     |
 | Cursors blink based on their animation counter. |
\*-------------------------------------------------*/
Cursor.prototype.draw = function() {
    if (this.animationCounter < 12) {
        deersim.canvasContext.drawImage(document.getElementById("DeerHead"),
                                this.x, this.y);
    }
};

/*---------------------------------*\
 | Updates this Cursor's counters. |
\*---------------------------------*/
Cursor.prototype.update = function() {
    if (this.animationCounter < 24) {
        this.animationCounter++;
    }
    else {
        this.animationCounter = 0;
    }

    if ((this.keyCounter > 0) && (this.keyCounter < 18)) {
        this.keyCounter++;
    }
    else if (this.keyCounter >= 18) {
        this.keyCounter = 0;
    }
};

/*----------------------*\
 | Generates a pothole. |
\*----------------------*/
var generatePothole = function() {
   if (deersim.generator.vehicleCounter === 0) {
      var pothole = deersim.generator.generatePothole();

      if (pothole !== null)
         deersim.obstacles.push(pothole);
   }
};

/*--------------------------------------------------*\
 | Gets input from the player via the keyboard.     |
 | This function runs once per game loop iteration. |
\*--------------------------------------------------*/
// var getInput = function() {
// #TODO -- documentation
var getInput = function(dt) {
   if ((deersim.state === "bossBattle")
    || (deersim.state === "round")) {
      // deer.getInput();
      // #TODO -- documentation
      deer.getInput(dt);
      playerProfile.getInput();
   }

   var randomDecimal = Math.random();

   for (var key in keysDown) {
      var value = Number(key);

      switch (value) { // #TODO -- consider functionalizing the repetitious sfx logic below
         case 13: // Key pressed is Enter.
            if (deersim.state === "gameOver") {
               startMainMenu(deersim);
               keyTimer++;
               pauseAndReplaySoundEffect(CONST_SOUND_INDEX_MENU_SELECTION_HIGH);
            }
            else if ((deersim.state === "main")
                  && (keyTimer === 0)) {
               if (deersim.mainMenuCursor.menuItem === 1) {
                  startRound();
                  deersim.pauseTimer++;
                  pauseAndReplaySoundEffect(CONST_SOUND_INDEX_MENU_SELECTION_HIGH);
               }
               else if (deersim.mainMenuCursor.menuItem === 2) {
                  showCreditsMenu = !showCreditsMenu;
                  keyTimer++;
                  pauseAndReplaySoundEffect(CONST_SOUND_INDEX_FRENCH_CANADIAN_GRUNT_2);
               }
               else if (deersim.mainMenuCursor.menuItem === 3) {
                  if (deersim.obscenities === CONST_FALSE) {
                     deersim.obscenities = CONST_TRUE;
                     deersim.toggleBox.x = 1035;
                     keyTimer++;
                     pauseAndReplaySoundEffect(CONST_SOUND_INDEX_FRENCH_CANADIAN_GRUNT_2);
                  }
                  else if (deersim.obscenities === CONST_TRUE) {
                     deersim.obscenities = CONST_FALSE;
                     deersim.toggleBox.x = 961;
                     keyTimer++;
                     pauseAndReplaySoundEffect(CONST_SOUND_INDEX_FRENCH_CANADIAN_GRUNT_1);
                  }
               }
            }
               break;
         case 27: // Key pressed is Escape.
            if (((deersim.state === "round") || (deersim.state === "bossBattle"))
             && (deersim.pauseTimer === 0))
               pause();
            else if ((deersim.state === "pause")
                  && (deersim.pauseTimer === 0))
               unpause();
               break;
         case 76: // Key pressed is L.
            if ((deersim.state !== "main")
             && (deersim.state !== "pause")) {
               if ((deer.powerup === "lightning")
               && (deersim.projectileCounter === 0)) {
                  var lightningBolt = new LightningBolt(deer.x + 59, deer.lane);

                  deersim.projectileCounter++;

                  deersim.projectiles.push(lightningBolt);

                  if (randomDecimal <= 0.33)
                     pauseAndReplaySoundEffect(CONST_SOUND_INDEX_LIGHTNING_BOLT_LOW);
                  else if (randomDecimal <= 0.66)
                     pauseAndReplaySoundEffect(CONST_SOUND_INDEX_LIGHTNING_BOLT_MID);
                  else
                     pauseAndReplaySoundEffect(CONST_SOUND_INDEX_LIGHTNING_BOLT_HIGH);
               }
            }
               break;
         case 87: // Key pressed is W.
            if (deersim.state === "main") {
               if ((deersim.mainMenuCursor.keyCounter === 0)
                && (deersim.mainMenuCursor.menuItem > 1)) {
                  toggleMainMenuCursor(1);
               }
            }
               break;
         case 83: // Key pressed is S.
            if (deersim.state === "main") {
               if ((deersim.mainMenuCursor.keyCounter === 0)
                && (deersim.mainMenuCursor.menuItem < 3)) {
                  toggleMainMenuCursor(-1);
               }
            }
               break;
      }
   }
};

/*---------------------------------------------------------*\
 | This function executes when the active Deer transitions |
 | from a Deer that's just been killed to the next Deer.   |
\*---------------------------------------------------------*/
var replaceDeer = function() {
   if (deer.powerup !== "none") {
      if (deer.powerup === "lightning") {
         deersim.soundEffects[CONST_SOUND_INDEX_DRUID_CHANT].pause();
         deersim.soundEffects[CONST_SOUND_INDEX_DRUID_CHANT].currentTime = 0;
      } // #TODO -- implement cases for other powerups once they are implemented.
   }

   var dyingDeer   = deer;
   // #TODO -- can the line below be removed?
   dyingDeer.state = "dying";

   if (playerProfile.remainingDeer > 0) {
      deer = new Deer();
      deersim.gameObjects.push(deer);

      playerProfile.changeRemainingDeer(-1);

      if (deersim.state === "bossBattle")
         boss.target = deer;
   }
   else {
      if (deersim.state === "bossBattle")
         boss.state = "exiting";

      startGameOverMenu();
   }
}

/*-------------------------*\
 | Draws this RoadSegment. |
\*-------------------------*/
RoadSegment.prototype.draw = function() {
   deersim.canvasContext.drawImage(
      document.getElementById(this.imageHandle), // imageHandle
      this.x,                                    // x
      this.y                                     // y
      );
}; // RoadSegment.draw()

/*----------------------------------------------------------------------------------*\
 | Updates this RoadSegment. RoadSegments scroll left at the default vehicle speed. |
\*----------------------------------------------------------------------------------*/
RoadSegment.prototype.update = function() {
   this.x -= 3;
}; // RoadSegment.update()

/*---------------------------------------------------------------------------------------*\
 | Switches the main menu cursor either up or down, depending on the supplied direction. |
 | @param int direction -- (1 = up), (-1 = down), (anything else = invalid)              |
\*---------------------------------------------------------------------------------------*/
var toggleMainMenuCursor = function(direction) {
   const dyOptions = 30;

   deersim.mainMenuCursor.y        -= (dyOptions * direction);
   deersim.mainMenuCursor.menuItem -= direction;
   deersim.mainMenuCursor.keyCounter++;

   var soundEffect = deersim.soundEffects[3 + deersim.mainMenuCursor.menuItem];

   soundEffect.pause();
   soundEffect.currentTime = 0;
   soundEffect.play();
} // toggleMainMenuCursor()

/*--------------------*\
 | Update game logic. |
\*--------------------*/
// var update = function() {
// #TODO -- documentation
var update = function(dt) {
   if (deersim.debuggerEnabled === CONST_TRUE) {
      deersim.liveDebugger.update();
   }

   deersim.touchManager.update();

   if ((deersim.state === "bossBattle")
    || (deersim.state === "round")) {
      collisionDetection();
      vicinityDetection();
      projectileDetection();

      deersim.generator.update();

      for (var gameObject in deersim.gameObjects)
         // gameObjects[gameObject].update();
         deersim.gameObjects[gameObject].update(dt); // #TODO -- documentation

      for (var obstacle in deersim.obstacles)
         deersim.obstacles[obstacle].update();

      for (var powerup in deersim.powerups)
         deersim.powerups[powerup].update();

      for (var projectile in deersim.projectiles)
         deersim.projectiles[projectile].update();

      for (var vehicle in deersim.vehicles)
         deersim.vehicles[vehicle].update();

      clearFinishedAnimations();

      powerupDetection();

      if (deer.state === "dying") {
         replaceDeer();
      }

      playerProfile.update();
      playerProfile.locationMarker.update();

      if (playerProfile.level !== playerProfile.levelPreviousFrame) {
         if (playerProfile.level === 3) {
            deersim.roadManager.openBottomLaneRequested = CONST_TRUE;
         }
         else if (playerProfile.level === 5) {
            deersim.roadManager.openTopLaneRequested = CONST_TRUE;
         }
         else if (playerProfile.level === 6) {
            deersim.roadManager.closeBottomLaneRequested = CONST_TRUE;
         }
         else if (playerProfile.level === 7 ) {
            deersim.roadManager.closeTopLaneRequested = CONST_TRUE;
         }
      }

      playerProfile.levelPreviousFrame = playerProfile.level;
   }

   if (deersim.state === "round") {
      kidnapDetection();

      if (playerProfile.consecutiveLvls >= 8) {
         startBossBattle();
      }
   }

   if ((deersim.state === "bossBattle")
    && (deersim.backgroundManager.environment === CONST_ENVIRONMENT_I84)) {
      generatePothole();
      collisionDetectionForCoopBattle();

      if (boss.state === "preentry") {
         preparePlayerForCoopsEntry();
      }

      if (boss.hp <= 0) {
         boss.state = "dying";
         startRound();
      }
   }

   if ((deersim.state === "gameOver")
    || (deersim.state === "main")) {
      deersim.generator.update();
      collisionDetection();

      for (var gameObject in deersim.gameObjects) {
         deersim.gameObjects[gameObject].update();
      }

      for (var vehicle in deersim.vehicles) {
         deersim.vehicles[vehicle].update();
      }

      for (var obstacle in deersim.obstacles)
         deersim.obstacles[obstacle].update();

      for (var powerup in deersim.powerups) {
         deersim.powerups[powerup].update();
      }

      for (var projectile in deersim.projectiles) {
         deersim.projectiles[projectile].update();
      }

      clearFinishedAnimations();
   }

   /* NOTE: This check & replay is included to mitigate the
      effects of bug 0001. See bugs.txt for more info.      */
   if (deersim.state === "main") {
      if ((deersim.musicCounter === 0)
       && (deersim.musicManager.backgroundTrack.currentTime === 0)) {
            deersim.musicManager.backgroundTrack.play();
         }
   }

   if (deersim.state === "pause") {
      playerProfile.locationMarker.update();
   }

   if (deersim.state === "transitionToSA40PhaseTwo")
      transitionToSA40PhaseTwo();
   if (deersim.state === "transitionToSA40PhaseFour")
      transitionToSA40PhaseFour();
   if (deersim.state === "transitionToSA40PhaseSix")
      transitionToSA40PhaseSix();
   if (deersim.state === "transitionToSA40PhaseEight")
      transitionToSA40PhaseEight();
   if (deersim.state === "transitionToSA40PhaseTen")
      transitionToSA40PhaseTen();

   clearPassedObjects();
   updateTimers();
   deersim.backgroundManager.update();
   deersim.roadManager.update();
   clearExpiredGameObjects();
}; // update()

/*----------------------------------------------------------------*\
 | This function manages various counters & timers which          |
 | are used to control the timing and frequency of game events.   |
 | Counters are updated once per game loop iteration. The         |
 | various hardcoded numeric constants here represent fractions   |
 | of a second, assuming that the game is running at the ideal    |
 | 60 FPS which we hope to attain in using requestAnimationFrame. |
 | For example, a constant of 24 implies an event that should     |
 | occur no more frequently than once every 0.4 (24/60) seconds.  |
\*----------------------------------------------------------------*/
var updateTimers = function() {
   if (deersim.state !== "pause")
      animationTimer++;
   if (animationTimer >= 29)
      animationTimer = 0;

   if ((deersim.killCounter > 0) && (deersim.killCounter < 18))
      deersim.killCounter++;
   if (deersim.killCounter >= 18)
      deersim.killCounter = 0;

   if ((keyTimer > 0) && (keyTimer < 11))
      keyTimer++;
   if (keyTimer >= 11)
      keyTimer = 0;

   deersim.musicCounter++;
   if (deersim.musicCounter >= 29)
      deersim.musicCounter = 0;

   if ((deersim.pauseTimer > 0) && (deersim.pauseTimer < 30))
      deersim.pauseTimer++;
   if (deersim.pauseTimer >= 30)
      deersim.pauseTimer = 0;

   if ((deersim.projectileCounter > 0) && (deersim.projectileCounter < 24))
      deersim.projectileCounter++;
   if (deersim.projectileCounter >= 24)
      deersim.projectileCounter = 0;
};

// ---- End of function declarations. ----

// Stores the proper method to request animation frames at approx 60fps.
var animate =  window.requestAnimationFrame
            || window.webkitRequestAnimationFrame
            || window.mozRequestAnimationFrame
            || function(callback) {window.setTimeout(callback, 1000/60);};

/*-----------------------------------------------------------------------*\
 | The game loop is the central mechanism of the engine of Pong.         |
 | This function executes indefinitely until                             |
 | the user requests that the game exit.                                 |
 |                                                                       |
 | Each iteration of the game loop consists of a sequence of two events: |
 | updating game logic, and drawing the current scene for display.       | LOL!!!!!
 |                                                                       |
 | All game initialization code executes before the game loop begins.    |
 | All game destruction code executes after the game loop has exited.    |
\*-----------------------------------------------------------------------*/
var gameLoop = function() {
   deersim.frameTimes.push(Date.now());
   deersim.realTimeEngine = CONST_TRUE;

   try {
      if (deersim.realTimeEngine === CONST_TRUE) {
         // #TODO -- documentation
         if (deersim.frameTimes.length >= 2)
            deersim.deltaT += (deersim.frameTimes[deersim.frameTimes.length - 1]
               - deersim.frameTimes[deersim.frameTimes.length - 2]);

         // #TODO -- documentation
         while (deersim.deltaT >= deersim.timeStep) {
            getInput(deersim.deltaT);
            update(deersim.deltaT);

            deersim.deltaT -= deersim.timeStep;
         }

         draw(deersim.canvasContext);
      }
      else {
         getInput();
         update();
         draw(deersim.canvasContext);
      }
   }
   catch (e) {
      alert("System fault! It appears this game isn't perfect, just like you...");
      alert(e.message);
   }

   while (deersim.frameTimes[deersim.frameTimes.length - 1] - (deersim.frameTimes[0]) > 1000) {
      deersim.frameTimes.splice(0, 1);
   }

   animate(gameLoop);
};

/*------------------------*\
 | Draw all game objects. |
\*------------------------*/
var draw = function(canvasContext) {
   deersim.backgroundManager.bg1.draw();
   deersim.backgroundManager.bg2.draw();
   deersim.roadManager.draw();

   for (var gameObject in deersim.gameObjects) {
      deersim.gameObjects[gameObject].draw();
   }

   for (var vehicle in deersim.vehicles) {
      deersim.vehicles[vehicle].draw();
   }

   for (var obstacle in deersim.obstacles) {
      deersim.obstacles[obstacle].draw();
   }

   for (var powerup in deersim.powerups) {
      deersim.powerups[powerup].draw();
   }

   for (var projectile in deersim.projectiles) {
      deersim.projectiles[projectile].draw();
   }

   if (deersim.debuggerEnabled) {
      deersim.liveDebugger.draw();
   }

   if (deersim.state === "main") {
      if (showCreditsMenu) {
         deersim.creditsMenu.draw();
      }
   }

   if (deersim.state !== "main") {
      playerProfile.draw();
   }
};

var keysDown = {}; // Keysdown object keeps track of which keys are currently pressed.
var touches  = {}; // touches object keeps track of active touch events (i.e. for mobile phones).

// Add event listener to this context which listens for key down event,
// and responds by setting a true value in the keysdown object,
// with the value's address corresponding to the key's ASCII code.
window.addEventListener("keydown", function(event) {
    keysDown[event.keyCode] = true;
});

// Add event listener to this context which listens for key up event,
// and responds by deleting a value in the keysdown object,
// with the value's address corresponding to the key's ASCII code.
window.addEventListener("keyup", function(event) {
    delete keysDown[event.keyCode];
});

/*-------------------------------------------------------------*\
 | Defines an event listener that responds to touchend events. |
\*-------------------------------------------------------------*/
window.addEventListener("touchend", function(touchEndEvent) {
   touchEndEvent.preventDefault(); // Cancel the default response to the touchend event.

   try {
      deersim.touchManager.lastTouchEnded = touchEndEvent.changedTouches[0];

      deersim.touchManager.lastTouchEndedTS = Date.now();

      deersim.touchManager.shouldProcessSwipe = CONST_TRUE;
   }
   catch (exception) {
      alert("error!");
      alert(exception.message);
   }
}, {passive: false}); // eventListener(touchend)

/*--------------------------------------------------------------*\
 | Defines an event listener that responds to touchmove events. |
\*--------------------------------------------------------------*/
window.addEventListener("touchmove", function(touchMoveEvent) {
   touchMoveEvent.preventDefault();
}, {passive: false}); // eventListener(touchmove)

/*---------------------------------------------------------------*\
 | Defines an event listener that responds to touchstart events. |
\*---------------------------------------------------------------*/
window.addEventListener("touchstart", function(touchStartEvent) {
   touchStartEvent.preventDefault();

   try {
      deersim.touchManager.lastTouchStarted = touchStartEvent.changedTouches[0];

      deersim.touchManager.lastTouchStartedTS = Date.now();
   }
   catch (exception) {
      alert("error responding to touchstart event!");
      alert(exception.message);
   }
}, {passive: false}); // eventListener(touchstart)
