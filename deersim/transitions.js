/*--------------------------------------------------------------------*\
 | File: deersim/transitions.js                                       |
 | Purpose: Defines functionality for transitions between game states |
 | as the player transitions from level to level during a round.      |
\*--------------------------------------------------------------------*/

// ---- Start of function declarations. ----

/*------------------------------------------------------------*\
 | Executes when the game transitions into the 'pause' state. |
\*------------------------------------------------------------*/
var pause = function() {
   pauseStateBuffer = deersim.state; // Record the game's previous state.

   // #TODO -- figure out how to implement the key timer here.
   deersim.state = "pause";  // Transition the game to the pause state.
   deersim.pauseTimer++;     // Start the pause timer.

   // Initialize the pause menu's dialog box.
   var pauseBox = new StaticMenuObject((CONST_CANVAS_WIDTH / 2) - 320,
                            -635, "SpeechBalloon640x75");

   // Initialize the TextString, "PAUSED".
   var paused = new TextString(((CONST_CANVAS_WIDTH / 2)
                         - (CONST_FONT_SIZE_LARGE * 3)),
                           320, CONST_FONT_SIZE_LARGE, "default", "PAUSED", "Large");

   // Initialize a message to display during the pause menu.
   var pauseMessage = new TextString(((CONST_CANVAS_WIDTH / 2) - 310),
                                 ((CONST_CANVAS_HEIGHT / 2) - 10),
                                 CONST_FONT_SIZE_SMALL,
                                 "default",
                                 "PRESS ESC TO CONTINUE SLAUGHTERING DEER",
                                 "Small");

   // Add the newly created objects to the objects array.
   deersim.gameObjects.push(pauseBox);
   deersim.gameObjects.push(paused);
   deersim.gameObjects.push(pauseMessage);

   deersim.backgroundManager.bgIsScrolling = CONST_FALSE;
   deersim.musicManager.createAndDisplayMusicTicker(deersim);

   for (var soundEffect in deersim.soundEffects) {       // For each of the game's sound effects...
      if (!(deersim.soundEffects[soundEffect].paused)) { // If the sound effect is playing...
         deersim.soundEffects[soundEffect].pause();      // Pause it.
      }
   }

   deersim.soundEffects[CONST_SOUND_INDEX_MENU_SELECTION_HIGH].pause();         // Pause in case already playing.
   deersim.soundEffects[CONST_SOUND_INDEX_MENU_SELECTION_HIGH].currentTime = 0; // Re-seek to t0.
   deersim.soundEffects[CONST_SOUND_INDEX_MENU_SELECTION_HIGH].play();          // MenuSelection
}; // pause

/*----------------------------------------------------------------------*\
 | This function executes during the boss battle state while the player |
 | is in I-84. It coordinates a series of three Exclamation objects     |
 | which are generated to warn the player of the upcoming boss battle.  |
\*----------------------------------------------------------------------*/
var preparePlayerForCoopsEntry = function() {
   // For simplicity, use variables to isolate the game's current background music.
   var backgroundTrack = deersim.musicManager.backgroundTrack;

   // Trigger the creation of new Exclamation objects during narrow time windows.
   if ((backgroundTrack.currentTime > 4.67)
    && (backgroundTrack.currentTime < 4.77)) {
      // Default to triggering the creation of a new Exclamation.
      var shouldCreateNewExclamation = CONST_TRUE;

      // Search the game objects array, and if we find another Exclamation...
      for (var gameObject in deersim.gameObjects) {
         if (deersim.gameObjects[gameObject] instanceof Exclamation) {
            // ...then decide not to create a new one.
            shouldCreateNewExclamation = CONST_FALSE;
         }
      }

      // If it is decided to create a new Exclamation...
      if (shouldCreateNewExclamation === CONST_TRUE) {
         // ...then create it, push it into the objects array, and play its sound effect.
         deersim.gameObjects.push(new Exclamation(1));
         pauseAndReplaySoundEffect(CONST_SOUND_INDEX_EXCLAMATION_REVERB_X4);
      }
   }
   else if ((backgroundTrack.currentTime > 9.33)
         && (backgroundTrack.currentTime < 9.43)) {
      // Default to triggering the creation of a new Exclamation.
      var shouldCreateNewExclamation = CONST_TRUE;

      // Search the game objects array, and if we find another Exclamation...
      for (var gameObject in deersim.gameObjects) {
         if (deersim.gameObjects[gameObject] instanceof Exclamation) {
            // ...then decide not to create a new one.
            shouldCreateNewExclamation = CONST_FALSE;
         }
      }

      // If it is decided to create a new Exclamation...
      if (shouldCreateNewExclamation === CONST_TRUE) {
         // ...then create it, push it into the objects array, and play its sound effect.
         deersim.gameObjects.push(new Exclamation(2));
         pauseAndReplaySoundEffect(CONST_SOUND_INDEX_EXCLAMATION_REVERB_X8);
      }
   }
};

/*----------------------------------------------------------------------*\
 | Initiates a sequence of events leading up to a boss battle. The boss |
 | battle depends on which environment the BackgroundManager is in.     |
\*----------------------------------------------------------------------*/
var startBossBattle = function() {
   if (deersim.backgroundManager.environment === CONST_ENVIRONMENT_I84) {
      deersim.state = "bossBattle"; // Set the game state to boss battle.

      // Create a new Exclamation to alert the player that the boss battle has begun.
      var exclamation = new Exclamation(0);

      deersim.gameObjects.push(exclamation); // Add the Exclamation to the objects array.

      deersim.soundEffects[CONST_SOUND_INDEX_EXCLAMATION].play(); // Play the Exclamation's sound effect.

      boss = deersim.generator.generateBoss(); // Generate a new boss for the player to fight.
      deersim.gameObjects.push(boss);          // Add the new boss to the game objects array.
      boss.target = deer;                      // Set the active deer as the new boss's target.
      
      // loadMusic("Schizoid8Bit"); // Load the Coop boss battle theme music.
      loadMusic( // Load the Coop boss battle theme music.
         "Schizoid8Bit",         // bgTrack
         "NO COPYRIGHT INTENDED" // bgTrackID
         );

      // Set the newly loaded background music to loop.
      deersim.musicManager.backgroundTrack.loop = CONST_TRUE;
   }
}; // startBossBattle()

/*--------------------------------------------------------------------------------*\
 | Initializes the game over menu, and triggers when the player runs out of Deer. |
\*--------------------------------------------------------------------------------*/
var startGameOverMenu = function() {
   // If we transition from a boss battle to the game over menu...
   if (deersim.state === "bossBattle")
      // ...then flag the MusicManager to load new music on next main menu.
      deersim.musicManager.reloadOnNextMain = CONST_TRUE;

   /* If the RoadManager is generating road on the bottom lane, then switch
      the bottom lane off and modify the RoadManager's configuration accordingly. */
   if (deersim.roadManager.generateFlags[0] === CONST_TRUE) {
      deersim.roadManager.closeBottomLaneRequested = CONST_TRUE;
      deersim.roadManager.minLane                  = 2;
      deersim.roadManager.sideHeightBottom         = deersim.roadManager.kBottomHeightMid;
   }

   /* If the RoadManager is generating road on the top lane, then switch
      the top lane off and modify the RoadManager's configuration accordingly. */
   if (deersim.roadManager.generateFlags[4] === CONST_TRUE) {
      deersim.roadManager.closeTopLaneRequested = CONST_TRUE;
      deersim.roadManager.maxLane               = 4;
      deersim.roadManager.sideHeightTop         = deersim.roadManager.kTopHeightMid;
   }

   deersim.state = "gameOver"; // Transition the game to the gameOver state.

   // Create a speech balloon to store the text, "GAME OVER".
   var goSpeechBalloon = new StaticMenuObject((CONST_CANVAS_WIDTH / 2) - 250,
                                       -285,
                                       "SpeechBalloon500x60");

   // Create a TextString used to store the text, "GAME OVER".
   var gameOver = new TextString((CONST_CANVAS_WIDTH / 2) - 144,
                                 180,
                                 CONST_FONT_SIZE_LARGE,
                                 "default",
                                 "GAME OVER",
                                 "Large");

   // Create a dialog box to store the game over message.
   var gomSpeechBalloon = new StaticMenuObject((CONST_CANVAS_WIDTH / 2) - 344,
                                     -665,
                                     "SpeechBalloon688x129");

   // Create an instance of Yorig, Deer Scientist of Athens.
   var yorig = new StaticMenuObject(65, -50, "Yorig512");

   // Create an array of TextStrings to display to the player.
   var lines = deersim.messageGenerator.gameOverMessage();

   // Add newly created objects to object array.
   deersim.gameObjects.push(goSpeechBalloon);
   deersim.gameObjects.push(gomSpeechBalloon);
   deersim.gameObjects.push(yorig);
   deersim.gameObjects.push(gameOver);

   for (var line in lines) {
      deersim.gameObjects.push(lines[line]);
   }
}; // startGameOverMenu()

/*-------------------------------------------------------*\
 | Initializes the 'main' state and draws the main menu. |
\*-------------------------------------------------------*/
function startMainMenu(a_deersim) {
   a_deersim.state = "main"; // Transition the game to the main state.

   clearTextStrings(a_deersim); // Clear existing TextString objects from the objects array.
   clearMenuObjects(a_deersim); // Clear existing menu objects from the objects array.

   // Initialize the main menu's dialog box.
   var mainMenuBox = new StaticMenuObject(((CONST_CANVAS_WIDTH / 2) + 85),
                               -92, "SpeechBalloon385x97");

   // Initialize the game title's dialog box.
   var titleBox = new StaticMenuObject(
      (CONST_CANVAS_WIDTH / 2) - 215,  // x
      (CONST_CANVAS_HEIGHT / 2) - 114, // y
      "SpeechBalloon430x61"            // imageHandle
      );

   // Initialize the I-84 emblem.
   var interstateEmblem = new StaticMenuObject(
      (CONST_CANVAS_WIDTH / 2) - 196,  // x
      (CONST_CANVAS_HEIGHT / 2) - 130, // y
      "InterstateEmblem"               // imageHandle
      );

   // Initialize the text, "SIMULATOR".
   var simulator = new TextString(
      (CONST_CANVAS_WIDTH / 2) - 80,   // x
      (CONST_CANVAS_HEIGHT / 2) - 100, // y
      CONST_FONT_SIZE_LARGE,           // charSize
      "default",                       // state
      "SIMULATOR",                     // string
      "Large"                          // size
      );

   // Initialize the main menu cursor.
   a_deersim.mainMenuCursor = new Cursor((CONST_CANVAS_WIDTH / 2) + 100, 320);

   // Initialize the text, "START GAME", for the main menu.
   var startGame = new TextString((CONST_CANVAS_WIDTH / 2) + 125, 320,
                              CONST_FONT_SIZE_SMALL, "default", "START GAME", "Small");

   // Initialize the text, "CREDITS", for the main menu.
   var credits = new TextString((CONST_CANVAS_WIDTH / 2) + 125, 350,
                                 CONST_FONT_SIZE_SMALL, "default", "CREDITS", "Small");

   // Initialize a third option for the main menu.
   var thirdOption = new TextString((CONST_CANVAS_WIDTH / 2) + 125, 380,
                                CONST_FONT_SIZE_SMALL, "default", "OBSCENITIES: OFF  ON", "Small");

   // Create an icon to show the 'W' key to the player.
   var keyIconW = new StaticMenuObject(
      CONST_FONT_SIZE_LARGE + 10,                       // x
      (CONST_CANVAS_HEIGHT / 2) + CONST_DIM_XLARGE - 4, // y
      "KeyIconW"                                        // imageHandle
      );

   // Create an icon to show the 'A' key to the player.
   var keyIconA = new StaticMenuObject(
      6,                                                                    // x
      (CONST_CANVAS_HEIGHT / 2) + CONST_DIM_XLARGE + CONST_FONT_SIZE_LARGE, // y
      "KeyIconA"                                                            // imageHandle
      );

   // Create an icon to show the 'S' key to the player.
   var keyIconS = new StaticMenuObject(
      CONST_FONT_SIZE_LARGE + 10,                                           // x
      (CONST_CANVAS_HEIGHT / 2) + CONST_DIM_XLARGE + CONST_FONT_SIZE_LARGE, // y
      "KeyIconS"                                                            // imageHandle
      );

   // Create an icon to show the 'D' key to the player.
   var keyIconD = new StaticMenuObject(
      CONST_DIM_MEDIUM + 14,                                                // x
      (CONST_CANVAS_HEIGHT / 2) + CONST_DIM_XLARGE + CONST_FONT_SIZE_LARGE, // y
      "KeyIconD"                                                            // imageHandle
      );

   // Create an icon to show the 'Enter' key to the player.
   var keyIconEnter = new StaticMenuObject(
      CONST_DIM_LARGE, // x
      (CONST_CANVAS_HEIGHT / 2) + CONST_DIM_XLARGE - CONST_FONT_SIZE_LARGE, // y
      "KeyIconEnter" // imageHandle
      );

   // Create a toggle box, location dependent on the game's obscenities setting.
   if (a_deersim.obscenities === CONST_FALSE) {
      a_deersim.toggleBox = new StaticMenuObject(961,
                                       thirdOption.y - 95,
                                       "ToggleBox");
   }
   else if (a_deersim.obscenities === CONST_TRUE) {
      a_deersim.toggleBox = new StaticMenuObject(1035,
                                       thirdOption.y - 95,
                                       "ToggleBox");
   }

   // If we're coming from a boss battle and need to load new background music...
   if (a_deersim.musicManager.reloadOnNextMain === CONST_TRUE) {
      playBackgroundTrackOnEnteringMainMenu(a_deersim);
   }

   a_deersim.musicManager.createAndDisplayMusicTicker(a_deersim);

   // Create indicators for the game version and date, and add them to the objects array.
   var versionNumber
      = new TextString((CONST_CANVAS_WIDTH - (5 * CONST_FONT_SIZE_TINY)), // x
                       (CONST_CANVAS_HEIGHT - (2 * 14)) - 4,              // y
                       CONST_FONT_SIZE_TINY,                              // charSize
                       "version",                                         // state
                       "v0.29",                                           // string
                       "Tiny");                                           // size

   var versionDate
      = new TextString((CONST_CANVAS_WIDTH - (10 * CONST_FONT_SIZE_TINY)), // x
                       (CONST_CANVAS_HEIGHT - 14) - 4,                     // y
                       CONST_FONT_SIZE_TINY,                               // charSize
                       "version",                                          // state
                       "5 May 2019",                                       // string
                       "Tiny");                                            // size

   // Add the newly created objects to the objects array.
   a_deersim.gameObjects.push(mainMenuBox);
   a_deersim.gameObjects.push(titleBox);
   a_deersim.gameObjects.push(interstateEmblem);
   a_deersim.gameObjects.push(simulator);
   a_deersim.gameObjects.push(a_deersim.mainMenuCursor);
   a_deersim.gameObjects.push(startGame);
   a_deersim.gameObjects.push(credits);
   a_deersim.gameObjects.push(thirdOption);
   a_deersim.gameObjects.push(keyIconW);
   a_deersim.gameObjects.push(keyIconA);
   a_deersim.gameObjects.push(keyIconS);
   a_deersim.gameObjects.push(keyIconD);
   a_deersim.gameObjects.push(keyIconEnter);
   a_deersim.gameObjects.push(a_deersim.toggleBox);
   a_deersim.gameObjects.push(versionNumber);
   a_deersim.gameObjects.push(versionDate);

   a_deersim.musicManager.reloadOnNextMain = CONST_FALSE; // Reset this flag.
}; // startMainMenu()

/*-----------------------------------------------------------*\
 | Initializes the 'round' state and starts a round of play. |
\*-----------------------------------------------------------*/
var startRound = function() {
   if (deersim.state === "main") {
      deersim.state = "round"; // Transition the game to the round state.

      clearMenuObjects(deersim); // Clear main menu DialogBoxes and Cursor.
      clearTextStrings(deersim); // Clear main menu TextStrings.

      playerProfile = new Profile(); // Create a new Profile.

      deer = new Deer();              // Initialize a Deer.
      deersim.gameObjects.push(deer); // Add the Deer to the game objects array.

      // Initialize the level and experience TextStrings.
      playerProfile.initTextStrings();
      // #TODO -- consider moving this to the Profile constructor.

      var mapVisibilityDurationInFrames = 300;

      /* Create a balloon, image, and cursor to display the Connecticut Map to
         the player, and then push all three objects into the game objects array. */
      var mapBalloon = new ExpiringObject(
         50,                           // x
         50,                           // y
         "SpeechBalloon246x234",       // imageHandle
         mapVisibilityDurationInFrames // remainingFrames
         );

      var connecticutMap = new ExpiringObject(
         50,                           // x
         50,                           // y
         "ConnecticutMap",             // imageHandle
         mapVisibilityDurationInFrames // remainingFrames
         );

      var initialMapCursor = new ExpiringCursor(
         80,                           // x
         165,                          // y
         mapVisibilityDurationInFrames // remainingFrames
         );

      deersim.gameObjects.push(mapBalloon);
      deersim.gameObjects.push(connecticutMap);
      deersim.gameObjects.push(initialMapCursor);
   }
   else if (deersim.state === "bossBattle") {
      deersim.state = "round"; // Transition the game to the round state.

      playerProfile.consecutiveLvls = 0; // Reset the profile's consecutive level counter.

      deersim.musicManager.backgroundTrack.pause();         // Pause the current background music.
      deersim.musicManager.backgroundTrack.currentTime = 0; // Reset current background music to t0.
      deersim.musicManager.loadMusic();                     // Load new background music.
      deersim.musicManager.backgroundTrack.play();          // Play the background music.
   }
};

var transitionToSA40PhaseOne = function() {
   // Transition the game state to the transition to SA-40, phase 1.
   deersim.state = "transitionToSA40PhaseOne";

   deersim.backgroundManager.bgIsScrolling = CONST_FALSE;

	// Create an array to store the herd of Deer following the WhiteVan.
	var deerHerd = new Array(playerProfile.remainingDeer);

	// Create a variable to store a series of images
	// comprising the kidnapping animation.
	var kidnappingAnimationFrames = new Array();

	// Create a variable to store the prefix
	// of all handles for the kidnapping animation.
	var imageHandlePrefix = "kidnappingAnimation";

    /* Build image handles to store in variable kidnappingAnimationFrames. |
     | This animation consists of 19 frames.                               |
     | Variables used in this for loop:                                    |
     | i:           iteration counter.                                     |
     | iString:     the value of i, in the form of a string.               |
     | imageHandle: a string used to identify each HTML                    |
     |                object stored in the animation.                      */
	for (var i = 0, iString = "", imageHandle = ""; i < 19; i++) {
		iString = i.toString();                          // Update iString.
		imageHandle = imageHandlePrefix.concat(iString); // Build image handle.
		kidnappingAnimationFrames[i] = imageHandle;      // Add to list.
	}

	// Remove the active deer from play by...
    var deerIndex = deersim.gameObjects.indexOf(deer); // ...identifying its index.
    deersim.gameObjects.splice(deerIndex, 1);          // ...removing it from the array.

	var vehicle = 0; // Create a variable to iterate through vehicles in play.

    while (vehicle < deersim.vehicles.length) {            // Iterate through vehicles in play.
      if (deersim.vehicles[vehicle] instanceof WhiteVan) { // If a vehicle is a WhiteVan...
            deersim.vehicles.splice(vehicle, 1);           // ...remove it from play.
		}
		else {
			vehicle++; // Otherwise, on to the next vehicle.
		}
	}

   // Construct AnimationBlock object to store the first transition animation.
   // (terrorists jump out of WhiteVan and kidnap the active Deer)
   transitionAnimation = new AnimationBlock(deer.x - 62, deer.y - 66, 128, 19, "KidnappingAnimation");

   // Add the first transition animation to the objects array.
   deersim.gameObjects.push(transitionAnimation);

   // Transition the game state to the transition to SA-40, phase 2.
   deersim.state = "transitionToSA40PhaseTwo";
};

/*---------------------------------------------------------------*\
 | Maintenance phase during play of transition animation.        |
 | (Kidnappers jump out of WhiteVan and kidnap the active deer.) |
\*---------------------------------------------------------------*/
var transitionToSA40PhaseTwo = function() {
   transitionAnimation.update(); // Update the transition animation.

   // If the animation is over...
   if (transitionAnimation.frameCounter >= (7 * transitionAnimation.length)) {
      // Transition the game state to phase three of the SA-40 transition.
      transitionToSA40PhaseThree(playerProfile.remainingDeer);
   }
};

/*-----------------------------------------------------------------------------*\
 | Functional phase which consists of:                                         |
 | -- Create a new WhiteVan object to function as van carrying deer offscreen. |
 | -- Create a herd of Deer to chase after the WhiteVan.                       |
\*-----------------------------------------------------------------------------*/
var transitionToSA40PhaseThree = function(remainingDeer) {
   // Transition the game state to the transition to SA-40, phase 3.
   deersim.state = "transitionToSA40PhaseThree";

   clearFinishedAnimations(); // Remove the recently-finished AnimationBlock from play.

   // Create a new WhiteVan object to represent the
   // van which has been removed with the animation.
   var whiteVan = new WhiteVan(6, 0);

   // Adjust the position of the new WhiteVan for a seamless animation.
   whiteVan.x = transitionAnimation.x + 38;
   whiteVan.y -= 2;

   deersim.vehicles.push(whiteVan); // Add the WhiteVan to the vehicles array.

   var deerHerd   = new Array(remainingDeer); // Create a herd of deer.
   var adjustment = 0; // Used in the upcoming loop.

   for (var i = 0; i < deerHerd.length; i++) { // For every position in the deer herd array,
      // Generate a unique adjustment value for the new Deer's x and y position.
      adjustment = (Math.random() - 0.5) * 40;

      deerHerd[i] = new Deer();                       // Generate a new Deer.
      deerHerd[i].x = -64 - (80 * i) + adjustment;    // Adjust new Deer's x position.
      deerHerd[i].y = whiteVan.y + adjustment + 75; // Adjust new Deer's y position.

      deersim.gameObjects.push(deerHerd[i]); // Add the new Deer to the objects array.
   }

   // Transition the game state to the transition to SA-40, phase 4.
   deersim.state = "transitionToSA40PhaseFour";
};

/*----------------------------------------------------------------------*\
 | Functional phase which consists of:                                  |
 | -- Move the WhiteVan that kidnapped the deer offscreen to the right. |
 | -- Move all of the deer in the herd offscreen to the right.          |
\*----------------------------------------------------------------------*/
var transitionToSA40PhaseFour = function() {
   var wvsInPlay = 0; // Will store the number of WhiteVans currently in play.

   for (var vehicle in deersim.vehicles) { // For every vehicle currently in play,
      if (deersim.vehicles[vehicle] instanceof WhiteVan) { // If the vehicle is a WhiteVan,
         deersim.vehicles[vehicle].x += 3; // Then move it to the right by 3 pixels.

         wvsInPlay++;
      }
   }

   var deerInPlay = 0; // Will store the number of Deer currently in play.

   for (var gameObject in deersim.gameObjects) { // For every object currently in play,
      if (deersim.gameObjects[gameObject] instanceof Deer) { // If the object is a Deer,
         deersim.gameObjects[gameObject].x += 3; // Then move it to the right by 3 pixels.

         deerInPlay++;

         // If the Deer has run offscreen to the right...
         if (deersim.gameObjects[gameObject].x > CONST_CANVAS_WIDTH + 100) {
            deersim.gameObjects.splice(gameObject, 1); // ...then remove it from the objects array.

            deerInPlay--;
         }
      }
   }

   // If all of the Deer and the WhiteVan have exited the screen to the right...
   if ((deerInPlay === 0) && (wvsInPlay === 0)) {
      // Transition the game state to phase five of the SA-40 transition.
      transitionToSA40PhaseFive();
   }
};

/*--------------------------------------------------------------*\
 | Functional phase which consists of:                          |
 | -- Remove all objects, vehicles, & powerups in play.         |
 | -- Configure the BackgroundManager to display SA-40 objects. |
 | -- Create a new WhiteVan, offscreen to the left.             |
\*--------------------------------------------------------------*/
var transitionToSA40PhaseFive = function() {
   // Transition the game state to the transition to SA-40, phase 5.
   deersim.state = "transitionToSA40PhaseFive";

   // Change the BackgroundManager's environment to SA-40.
   deersim.backgroundManager.setEnvironment("sa40");

   // Change the MusicManager's environment to SA-40.
   deersim.musicManager.environment = "sa40";

   clearAllPreviousGameObjects(); // Remove all objects, vehicles, & powerups in play.

   // Pause the current background music and load new background music for SA-40.
   deersim.musicManager.backgroundTrack.pause();
   deersim.musicManager.loadMusic();

   deersim.musicManager.backgroundTrack.play(); // Play the background music.

   // Create a new WhiteVan, which is carrying the kidnapped Deer.
   var whiteVan = new WhiteVan(2, 0);

   whiteVan.x = -128;               // Move the WhiteVan offscreen to the left.
   deersim.vehicles.push(whiteVan); // Add the WhiteVan to the vehicles array.

   // Transition the game state to the transition to SA-40, phase 6.
   deersim.state = "transitionToSA40PhaseSix";
};

/*----------------------------------------------------------------------*\
 | Maintenance phase during which WhiteVan enters screen from the left. |
\*----------------------------------------------------------------------*/
var transitionToSA40PhaseSix = function() {
   /* At this point in the transition to SA-40, we make the  *
    * assumption that the only vehicle in the vehicles array *
    * is a WhiteVan which was created in phase five.         */
   for (var vehicle in deersim.vehicles) { // For each vehicle in the vehicles array,
      deersim.vehicles[vehicle].x += 3;    // Move the vehicle slightly to the right,

      if (deersim.vehicles[vehicle].x >= 100) { // If the WhiteVan has reached 100 pixels in x...
         // ...then transition the game state to phase seven of the SA-40 transition.
         transitionToSA40PhaseSeven();
      }
   }
};

/*---------------------------------------------------------------*\
 | Functional phase which consists of:                           |
 | -- Create a new AnimationBlock object to store the animation  |
 | ---- of the kidnappers dropping the Deer off at SA-40.        |
 | -- Replace the existing WhiteVan with the new AnimationBlock. |
\*---------------------------------------------------------------*/
var transitionToSA40PhaseSeven = function() {
   // Transition the game state to the transition to SA-40, phase 7.
   deersim.state = "transitionToSA40PhaseSeven";

   // Create a variable to store a series of images
	// comprising the dropoff animation.
	var dropoffAnimationFrames = new Array();

   // Create a variable to store the prefix
	// of all handles for the dropoff animation.
	var imageHandlePrefix = "dropoffAnimation";

   /* Build image handles to store in variable dropoffAnimationFrames. |
     | This animation consists of 14 frames.                           |
     | Variables used in this for loop:                                |
     | i:           iteration counter.                                 |
     | iString:     the value of i, in the form of a string.           |
     | imageHandle: a string used to identify each HTML                |
     |                object stored in the animation.                  */
	for (var i = 0, iString = "", imageHandle = ""; i < 14; i++) {
		iString = i.toString();                          // Update iString.
		imageHandle = imageHandlePrefix.concat(iString); // Build image handle.
		dropoffAnimationFrames[i] = imageHandle;         // Add to list.
	}

   /* At this point in the transition to SA-40, we make the  *
    * assumption that the only vehicle in the vehicles array *
    * is an WhiteVan which was created in phase five.        */
   deersim.vehicles.splice(0, 1); // Remove the WhiteVan from play.

   // Construct AnimationBlock object to store the second transition animation.
   // (WhiteVan stops and drops off the previously kidnapped Deer)
   transitionAnimation = new AnimationBlock(59,  // x = hardcoded constant from deersim classic.
                                            526, // y based on previous location of WhiteVan.
                                            128,
                                            14,
                                            "DropOffAnimation");

   // Add the second transition animation to the objects array.
   deersim.gameObjects.push(transitionAnimation);

   // Transition the game state to the transition to SA-40, phase 8.
   deersim.state = "transitionToSA40PhaseEight";
};

/*----------------------------------------------------------------*\
 | Maintenance phase during play of transition animation.         |
 | (Kidnappers drop the deer out of the WhiteVan, onto the road.) |
\*----------------------------------------------------------------*/
var transitionToSA40PhaseEight = function() {
   transitionAnimation.update(); // Update the transition animation.

   // If the animation is over...
   if (transitionAnimation.frameCounter >= (7 * transitionAnimation.length)) {
      // Transition the game state to phase nine of the SA-40 transition.
      transitionToSA40PhaseNine();
   }
};

var transitionToSA40PhaseNine = function() {
   // Transition the game state to the transition to SA-40, phase 9.
   deersim.state = "transitionToSA40PhaseNine";

   clearFinishedAnimations(); // Remove the recently-finished AnimationBlock from play.

   // Create a new WhiteVan, which has just dropped off the kidnapped Deer.
   var whiteVan = new WhiteVan(2, 0);

   // Move the WhiteVan's x position to match that of the van in the AnimationBlock.
   whiteVan.x = 100;

   var deerStill = new DeerStill(140, 590); // Create a new deer, standing still.

   // Add the newly created objects to their respective arrays.
   deersim.vehicles.push(whiteVan);
   deersim.gameObjects.push(deerStill);

   // Transition the game state to the transition to SA-40, phase 10.
   deersim.state = "transitionToSA40PhaseTen";
};

/*-------------------------------------------------------------------*\
 | Functional phase which consists of:                               |
 | -- Move the WhiteVan offscreen to the right.                      |
 | -- Trigger the start of a new round of play.                      |
 | -- Clear the objects array of leftover items from the transition. |
 | -- Create a new active deer.                                      |
\*-------------------------------------------------------------------*/
var transitionToSA40PhaseTen = function() {
   /* At this point in the transition to SA-40, we make the  *
    * assumption that the only vehicle in the vehicles array *
    * is a WhiteVan which was created in phase nine.         */
   for (var vehicle in deersim.vehicles) { // For each vehicle in the vehicles array...
      deersim.vehicles[vehicle].x += 3;    // Move the vehicle slightly to the right...
   }

   // If the WhiteVan has finished driving offscreen...
   if (deersim.vehicles.length === 0) {
      deersim.state = "round"; // ...then set the game state back to a round of play.

      // Search the objects array for extraneous transition objects which should be removed.
      for (gameObject in deersim.gameObjects) {
         if ((deersim.gameObjects[gameObject] instanceof DeerStill)
          || (deersim.gameObjects[gameObject] instanceof Deer)) {
            // Remove extraneous transition objects from the array.
            deersim.gameObjects.splice(gameObject, 1);
         }
      }

      deersim.backgroundManager.bgIsScrolling = CONST_TRUE;

      deer = new Deer();              // Create a new Deer.
      deer.x = 100;                   // Move the Deer outside of the 'initializing' state range...
                                      // ...and to match the location of the prior DeerStill object.
      deer.clothing = "bag";          // Trigger the Deer to wear the bag it was made to.
      deersim.gameObjects.push(deer); // Add the Deer to the game objects array.
   }
};

/*-------------------------------------------------*\
 | Executes when the game exits the 'pause' state. |
 | Transitions the game to the 'round' state.      |
\*-------------------------------------------------*/
var unpause = function() {
   deersim.state = pauseStateBuffer; // Transition the game to the state from prior to pause.
   deersim.pauseTimer++;             // Start the pause timer.
   clearMenuObjects(deersim);        // Remove pause menu DialogBox and TextStrings.
   clearTextStrings(deersim);        // Remove pause menu TextStrings.

   deersim.backgroundManager.bgIsScrolling = CONST_TRUE;

   for (var soundEffect in deersim.soundEffects) {            // For each of the game's sound effects...
      if ((deersim.soundEffects[soundEffect].paused)          // If the sound effect is paused...
       && (deersim.soundEffects[soundEffect].currentTime > 0) // ...and it was previously started...
       && !(deersim.soundEffects[soundEffect].ended)) {       // ...and it has not yet ended...
         deersim.soundEffects[soundEffect].play();            // Continue playing the sound effect.
      }
   }

   deersim.soundEffects[CONST_SOUND_INDEX_MENU_SELECTION_LOW].pause();         // Pause in case already playing.
   deersim.soundEffects[CONST_SOUND_INDEX_MENU_SELECTION_LOW].currentTime = 0; // Re-seek to t0.
   deersim.soundEffects[CONST_SOUND_INDEX_MENU_SELECTION_LOW].play();          // MenuSelectionMinus12Semitones
};

// ---- End of function declarations. ----