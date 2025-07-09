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
   this.x = x;                     // Assign this Cursor's x position.
   this.y = y;                     // Assign this Cursor's y position.
   this.d = CONST_FONT_SIZE_LARGE; // Assign this Cursor's dimension.

   // Assign this Cursor's menu item to a default value of 1.
   // This 1-indexed value tracks which item in the menu this Cursor points to.
   this.menuItem = 1;

   // Initialize this Cursor's animation counter,
   // used to control timing of the Cursor's blinking.
   this.animationCounter = 0;

   // Initialize this Cursor's key counter,
   // used to control timing of the Cursor's vertical movement.
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
   this.width  = 128;  // Constant.
   this.height = 40;   // Constant.
   this.type   = type;
   this.lane   = lane;

   /* After assigning this RoadSegment's type, also assign it an image handle
      based on its type. The image handle is used when drawing this RoadSegment. */
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
   this.x1 = x1; // Assign this ToggleBox's first x coordinate.
   this.x2 = x2; // Assign this ToggleBox's second x coordinate.
   this.y1 = y1; // Assign this ToggleBox's first y coordinate.
   this.y2 = y2; // Assign this ToggleBox's second y coordinate.

   this.coordinateSet = 0; // Assign this ToggleBox the default coordinate set.
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
   animate(gameLoop); // Execute first iteration of the game loop.
} // onPageLoad()

/*-------------------------------------------------*\
 | Draws this Cursor onscreen.                     |
 | Cursors blink based on their animation counter. |
\*-------------------------------------------------*/
Cursor.prototype.draw = function() {
    // If this Cursor's animation counter is in the first half of its phase,
    if (this.animationCounter < 12) {
        deersim.canvasContext.drawImage(document.getElementById("DeerHead"),
                                this.x, this.y); // Then draw a deer head icon.
    }
};

/*---------------------------------*\
 | Updates this Cursor's counters. |
\*---------------------------------*/
Cursor.prototype.update = function() {
    // If this Cursor's animation counter has not yet elapsed,
    if (this.animationCounter < 24) {
        // Then increment this Cursor's animation counter.
        this.animationCounter++;
    }
    else {
        // Else, reset this Cursor's animation counter.
        this.animationCounter = 0;
    }

    // If this Cursor's key counter is started and has not yet elapsed,
    if ((this.keyCounter > 0) && (this.keyCounter < 18)) {
        this.keyCounter++; // Then increment this Cursor's key counter.
    }
    // Else if this Cursor's key counter has elapsed,
    else if (this.keyCounter >= 18) {
        this.keyCounter = 0; // Reset this Cursor's key counter.
    }
};

/*----------------------*\
 | Generates a pothole. |
\*----------------------*/
var generatePothole = function() {
   if (deersim.generator.vehicleCounter === 0) {         // If the vehicle counter has elapsed...
      var pothole = deersim.generator.generatePothole(); // ...then attempt to generate a pothole.

      if (pothole !== null)               // If chance allows...
         deersim.obstacles.push(pothole); // ...then push a new pothole onto the obstacles array.
   }
};

/*--------------------------------------------------*\
 | Gets input from the player via the keyboard.     |
 | This function runs once per game loop iteration. |
\*--------------------------------------------------*/
// var getInput = function() {
// #TODO -- documentation
var getInput = function(dt) {
   if ((deersim.state === "bossBattle") // If the player is playing a round or a boss battle...
    || (deersim.state === "round")) {
      // deer.getInput();          // ...then get key input for control of the active deer.
      // #TODO -- documentation
      deer.getInput(dt);          // ...then get key input for control of the active deer.
      playerProfile.getInput(); // ...and get player input and convert to experience.
   }

   var randomDecimal = Math.random(); // Generate a random decimal.

   // Iterate through each key which is currently pressed.
   for (var key in keysDown) {
      var value = Number(key); // Assign numeric wrapper of key to variable 'value'.

      switch (value) { // #TODO -- consider functionalizing the repetitious sfx logic below
         case 13: // Key pressed is Enter.
            if (deersim.state === "gameOver") { // If the game is displaying the game over screen,
               startMainMenu(deersim);          // Transition to the main menu.
               keyTimer++;                      // Start the key timer.
               pauseAndReplaySoundEffect(CONST_SOUND_INDEX_MENU_SELECTION_HIGH);
            }
            else if ((deersim.state === "main")  // If the player is viewing the main menu...
                  && (keyTimer === 0)) {         // ...and the key timer has elapsed...
               if (deersim.mainMenuCursor.menuItem === 1) { // If the first option is selected...
                  startRound();                             // ...then start a round of play.
                  deersim.pauseTimer++;                     // ...start the pause timer.
                  pauseAndReplaySoundEffect(CONST_SOUND_INDEX_MENU_SELECTION_HIGH);
               }
               else if (deersim.mainMenuCursor.menuItem === 2) { // If the second option is selected...
                  showCreditsMenu = !showCreditsMenu;            // ...then invert flag to show credits...
                  keyTimer++;                                    // ...and start the key timer.
                  pauseAndReplaySoundEffect(CONST_SOUND_INDEX_FRENCH_CANADIAN_GRUNT_2);
               }
               else if (deersim.mainMenuCursor.menuItem === 3) { // If the third option is selected...
                  if (deersim.obscenities === CONST_FALSE) {  // If obscenities are off...
                     deersim.obscenities = CONST_TRUE;        // ...then turn them on.
                     deersim.toggleBox.x = 1035;              // ...move the toggle box ro the right.
                     keyTimer++;                              // ...and start the key timer.
                     pauseAndReplaySoundEffect(CONST_SOUND_INDEX_FRENCH_CANADIAN_GRUNT_2);
                  }
                  else if (deersim.obscenities === CONST_TRUE) { // If obscenities are on...
                     deersim.obscenities = CONST_FALSE;          // ...then turn them off.
                     deersim.toggleBox.x = 961;                  // ...move the toggle box to the left.
                     keyTimer++;                                 // ...and start the key timer.
                     pauseAndReplaySoundEffect(CONST_SOUND_INDEX_FRENCH_CANADIAN_GRUNT_1);
                  }
               }
            }
               break;
         case 27: // Key pressed is Escape.
            if (((deersim.state === "round") || (deersim.state === "bossBattle"))
             && (deersim.pauseTimer === 0))
                                  // If we are in the middle of a round
                                  // And the pause timer has elapsed
               pause();           // Then transition to the pause state
            else if ((deersim.state === "pause")
                  && (deersim.pauseTimer === 0))
                                  // If we are paused,
                                  // And the pause timer has elapsed
               unpause();         // Then transition to the round state
               break;
         case 76: // Key pressed is L.
            if ((deersim.state !== "main")     // If the game is in a state other than the main menu...
             && (deersim.state !== "pause")) { // ...or pause...
               // If the active Deer is carrying the lightning powerup
               // and the projectile delay has elapsed...
               if ((deer.powerup === "lightning")
               && (deersim.projectileCounter === 0)) {
                  // Create a LightningBolt.
                  var lightningBolt = new LightningBolt(deer.x + 59, deer.lane);

                  deersim.projectileCounter++; // Start the projectile counter.

                  // Add the LightningBolt to the projectiles array.
                  deersim.projectiles.push(lightningBolt);

                  if (randomDecimal <= 0.33)
                     pauseAndReplaySoundEffect(CONST_SOUND_INDEX_LIGHTNING_BOLT_LOW); // LightningBoltC#6
                  else if (randomDecimal <= 0.66)
                     pauseAndReplaySoundEffect(CONST_SOUND_INDEX_LIGHTNING_BOLT_MID); // LightningBoltD#6
                  else
                     pauseAndReplaySoundEffect(CONST_SOUND_INDEX_LIGHTNING_BOLT_HIGH); // LightningBoltF6
               }
            }
               break;
         case 87: // Key pressed is W.
            // If the player is viewing the main menu,
            if (deersim.state === "main") {
               // If the main menu cursor's key counter has elapsed,
               // And the main menu cursor is pointed to an option
               // underneath the uppermost option, then
               if ((deersim.mainMenuCursor.keyCounter === 0) && (deersim.mainMenuCursor.menuItem > 1)) {
                  toggleMainMenuCursor(1); // Move the cursor up and play a sound effect.
               }
            }
               break;
         case 83: // Key pressed is S.
            // If the player is viewing the main menu,
            if (deersim.state === "main") {
               // If the main menu cursor's key counter has elapsed,
               // And the main menu cursor is pointed to an option
               // above the bottom option, then
               if ((deersim.mainMenuCursor.keyCounter === 0) && (deersim.mainMenuCursor.menuItem < 3)) {
                  toggleMainMenuCursor(-1); // Move the cursor down and play a sound effect.
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
   // If the active deer has a powerup other than irradiation...
   if (deer.powerup !== "none") {
      if (deer.powerup === "lightning") { // If the powerup is lightning...
         deersim.soundEffects[CONST_SOUND_INDEX_DRUID_CHANT].pause();         // ...then pause the druid chant.
         deersim.soundEffects[CONST_SOUND_INDEX_DRUID_CHANT].currentTime = 0; // ...and reset its playback position to zero.
      } // #TODO -- implement cases for other powerups once they are implemented.
   }

   var dyingDeer   = deer;              // Create a variable to assign the dying deer to.
   // #TODO -- can the line below be removed?
   dyingDeer.state = "dying";           // Set the dying Deer's state accordingly.

   // If the player has extra Deer remaining,
   if (playerProfile.remainingDeer > 0) {
      deer = new Deer();              // Then create a new Deer to set as active.
      deersim.gameObjects.push(deer); // Add the newly created Deer to the game objects Array.

      // Decrement the count of Deer owned by the player Profile.
      playerProfile.changeRemainingDeer(-1);

      if (deersim.state === "bossBattle") // If the player is fighting a boss...
         boss.target = deer;      // ...then set the new deer as the boss's target.
   }
   else {
      if (deersim.state === "bossBattle") // If the player is fighting a boss...
         boss.state = "exiting";  // ...then trigger that boss to exit the screen.

      startGameOverMenu(); // Otherwise, start the game over menu.
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
   const dyOptions = 30; // Vertical distance between menu options.

   deersim.mainMenuCursor.y        -= (dyOptions * direction); // Align cursor with its menu option.
   deersim.mainMenuCursor.menuItem -= direction;               // (In/dec)rement, direction-dependent.
   deersim.mainMenuCursor.keyCounter++;                        // Start the cursor's key counter.

   /* Depending on which menu item the cursor lands on, pull the
      correct sound effect object out of the sound effects array. */
   var soundEffect = deersim.soundEffects[3 + deersim.mainMenuCursor.menuItem];

   // Pause (in case already playing), seek to t0, and play the sound effect.
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
   // If the debugger is enabled, then update it.
   if (deersim.debuggerEnabled === CONST_TRUE) {
      deersim.liveDebugger.update();
   }

   // Update the touch manager first so that UI changes occur as quickly as possible.
   deersim.touchManager.update();

   if ((deersim.state === "bossBattle")
    || (deersim.state === "round")) {
      collisionDetection();  // Perform collision detection.
      vicinityDetection();   // Perform vicinity detection.
      projectileDetection(); // Perform projectile detection.

      deersim.generator.update(); // Update the Generator.

      // Update all of the game objects currently in play.
      for (var gameObject in deersim.gameObjects)
         // gameObjects[gameObject].update();
         deersim.gameObjects[gameObject].update(dt); // #TODO -- documentation

      // Update all of the obstacles currently in play.
      for (var obstacle in deersim.obstacles)
         deersim.obstacles[obstacle].update();

      // Update all of the powerups currently in play.
      for (var powerup in deersim.powerups)
         deersim.powerups[powerup].update();

      // Update all of the projectiles currently in play.
      for (var projectile in deersim.projectiles)
         deersim.projectiles[projectile].update();

      // Update all of the vehicles currently in play.
      for (var vehicle in deersim.vehicles)
         deersim.vehicles[vehicle].update();

      // Remove all finished AnimationBlocks from the objects array.
      clearFinishedAnimations();

      powerupDetection(); // Perform powerup detection.

      if (deer.state === "dying") { // If the active Deer is dying...
         replaceDeer();             // Then replace the active Deer with a new Deer.
      }

      playerProfile.update();                // Update the player profile.
      playerProfile.locationMarker.update(); // Update the profile's cursor location marker.

      /* Check the player profile's level to determine whether the player has just
         levelled up. If they have, then execute the following series of conditional
         checks. At specific levels, trigger the road manager's flags to open or close
         new lanes as needed to manage the progression of the road through the environment. */
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

      /* Keep a rolling record of the player profile's level from
         the previous game frame, in order to perform the check above. */
      playerProfile.levelPreviousFrame = playerProfile.level;
   }

   if (deersim.state === "round") {  // If the player is currently playing a round,
      kidnapDetection();     // Perform kidnap detection.

      // Triggers Coop boss battle.
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

      if (boss.hp <= 0) {      // If Coop has been killed...
         boss.state = "dying"; // ...then set his state to dying.
         startRound();
      }
   }

   if ((deersim.state === "gameOver") // If the game is presenting the game over menu,
    || (deersim.state === "main")) {  // Or the main menu,
      deersim.generator.update(); // Then update the Generator, and...
      collisionDetection();       // Perform collision detection.

      // Update all of the game objects currently in play.
      for (var gameObject in deersim.gameObjects) {
         deersim.gameObjects[gameObject].update();
      }

      // Update all of the vehicles currently in play.
      for (var vehicle in deersim.vehicles) {
         deersim.vehicles[vehicle].update();
      }

      // Update all of the obstacles currently in play.
      for (var obstacle in deersim.obstacles)
         deersim.obstacles[obstacle].update();

      // Update all of the powerups currently in play.
      for (var powerup in deersim.powerups) {
         deersim.powerups[powerup].update();
      }

      // Update all of the projectiles currently in play.
      for (var projectile in deersim.projectiles) {
         deersim.projectiles[projectile].update();
      }

      // Remove all finished AnimationBlocks from the objects array.
      clearFinishedAnimations();
   }

   /* NOTE: This check & replay is included to mitigate the
      effects of bug 0001. See bugs.txt for more info.      */
   if (deersim.state === "main") {
      // If the background track erroneously failed to start playing, play it.
      if ((deersim.musicCounter === 0)
       && (deersim.musicManager.backgroundTrack.currentTime === 0)) {
            deersim.musicManager.backgroundTrack.play();
         }
   }

   // Even if the game is paused, the profile's cursor needs to update so that it can blink.
   if (deersim.state === "pause") {
      playerProfile.locationMarker.update();
   }

   // Perform functions necessary to exit transition states.
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

   clearPassedObjects();               // Dispose of objects which have moved offscreen.
   updateTimers();                     // Increment the animation timer.
   deersim.backgroundManager.update(); // Update the background manager.
   deersim.roadManager.update();       // Update the road manager.
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
   if (deersim.state !== "pause") // If the game is not currently paused,
      animationTimer++;   // Then increment the animation timer.
   if (animationTimer >= 29) // If the animation timer has reached 29,
      animationTimer = 0;    // reset it to 0.

   // If the kill counter is running...
   if ((deersim.killCounter > 0) && (deersim.killCounter < 18))
      deersim.killCounter++; // ...then increment the kill counter.
   if (deersim.killCounter >= 18) // If the kill counter has elapsed...
      deersim.killCounter = 0;    // ...then reset the kill counter to 0.

   if ((keyTimer > 0) && (keyTimer < 11)) // If the key timer is running,
      keyTimer++;                         // Increment the key timer.
   if (keyTimer >= 11) // If the key timer has elapsed,
      keyTimer = 0;    // Reset the key timer to 0.

   deersim.musicCounter++; // Increment the music counter and reset it every half second.
   if (deersim.musicCounter >= 29)
      deersim.musicCounter = 0;

   if ((deersim.pauseTimer > 0) && (deersim.pauseTimer < 30)) // If the pause timer is running,
      deersim.pauseTimer++;                                   // Increment the pause timer.
   if (deersim.pauseTimer >= 30) // If the pause timer has elapsed,
      deersim.pauseTimer = 0;    // Reset the pause timer to 0.

   // If the projectile counter is running...
   if ((deersim.projectileCounter > 0) && (deersim.projectileCounter < 24))
      deersim.projectileCounter++; // ...then increment the projectile counter.
   if (deersim.projectileCounter >= 24) // If the projectile counter has elapsed...
      deersim.projectileCounter = 0;    // ...then reset the projectile counter.
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
   // Add the current frame's time to the frame times array.
   deersim.frameTimes.push(Date.now());
   deersim.realTimeEngine = CONST_TRUE;

   try {
      if (deersim.realTimeEngine === CONST_TRUE) {
         // #TODO -- documentation
         if (deersim.frameTimes.length >= 2)
            deersim.deltaT += (deersim.frameTimes[deersim.frameTimes.length - 1] - deersim.frameTimes[deersim.frameTimes.length - 2]);

         // #TODO -- documentation
         while (deersim.deltaT >= deersim.timeStep) {
            getInput(deersim.deltaT);
            update(deersim.deltaT);

            deersim.deltaT -= deersim.timeStep;
         }

         draw(deersim.canvasContext); // Draw all game objects.
      }
      else {
         getInput();                  // Get the user's key input for this iteration.
         update();                    // Update all game objects.
         draw(deersim.canvasContext); // Draw all game objects.
      }
   }
   catch (e) {
      alert("System fault! It appears this game isn't perfect, just like you...");
      alert(e.message);
   }

   // While there are frame times that are more than a full
   // second old remaining in the frame times array...
   while (deersim.frameTimes[deersim.frameTimes.length - 1] - (deersim.frameTimes[0]) > 1000) {
      deersim.frameTimes.splice(0, 1); // ...remove said old frames from the array.
   }

   animate(gameLoop);   // Execute next iteration of the game loop.
};

/*------------------------*\
 | Draw all game objects. |
\*------------------------*/
var draw = function(canvasContext) {
   deersim.backgroundManager.bg1.draw();
   deersim.backgroundManager.bg2.draw();
   deersim.roadManager.draw(); // Have the RoadManager draw all RoadSegments.

   for (var gameObject in deersim.gameObjects) { // Draw each game object currently in play.
      deersim.gameObjects[gameObject].draw();
   }

   for (var vehicle in deersim.vehicles) { // Draw each vehicle currently in play.
      deersim.vehicles[vehicle].draw();
   }

   for (var obstacle in deersim.obstacles) { // Draw each obstacle currently in play.
      deersim.obstacles[obstacle].draw();
   }

   for (var powerup in deersim.powerups) { // Draw each powerup currently in play.
      deersim.powerups[powerup].draw();
   }

   for (var projectile in deersim.projectiles) { // Draw each projectile currently in play.
      deersim.projectiles[projectile].draw();
   }

   // If the debugger is enabled, then draw its TextStrings to indicate game performance.
   if (deersim.debuggerEnabled) {
      deersim.liveDebugger.draw();
   }

   if (deersim.state === "main") {
      if (showCreditsMenu) {
         deersim.creditsMenu.draw(); // Draw the credits menu.
      }
   }

   if (deersim.state !== "main") { // If the player is in any state other than the main menu...
      playerProfile.draw(); // ...then draw the player profile.
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
      /* Notify the TouchManager that this touchend
         event is the most recent such event to occur. */
      deersim.touchManager.lastTouchEnded = touchEndEvent.changedTouches[0];

      /* Notify the TouchManager of the time that this touchend event occurred. */
      deersim.touchManager.lastTouchEndedTS = Date.now();

      /* Notify the TouchManager that it should process a swipe action. */
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
   touchMoveEvent.preventDefault(); // Cancel the default response to the touchmove event.
}, {passive: false}); // eventListener(touchmove)

/*---------------------------------------------------------------*\
 | Defines an event listener that responds to touchstart events. |
\*---------------------------------------------------------------*/
window.addEventListener("touchstart", function(touchStartEvent) {
   touchStartEvent.preventDefault(); // Cancel the default response to the touchstart event.

   try {
      /* Notify the TouchManager that this touchstart
         event is the most recent such event to occur. */
      deersim.touchManager.lastTouchStarted = touchStartEvent.changedTouches[0];

      /* Notify the TouchManager of the time that this touchstart event occurred. */
      deersim.touchManager.lastTouchStartedTS = Date.now();
   }
   catch (exception) {
      alert("error responding to touchstart event!");
      alert(exception.message);
   }
}, {passive: false}); // eventListener(touchstart)