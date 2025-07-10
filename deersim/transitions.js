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
   pauseStateBuffer = deersim.state;

   // #TODO -- figure out how to implement the key timer here.
   deersim.state = "pause";
   deersim.pauseTimer++;

   var pauseBox = new StaticMenuObject((CONST_CANVAS_WIDTH / 2) - 320,
                            -635, "SpeechBalloon640x75");

   var paused = new TextString(((CONST_CANVAS_WIDTH / 2)
                         - (CONST_FONT_SIZE_LARGE * 3)),
                           320, CONST_FONT_SIZE_LARGE, "default", "PAUSED", "Large");

   var pauseMessage = new TextString(((CONST_CANVAS_WIDTH / 2) - 310),
                                 ((CONST_CANVAS_HEIGHT / 2) - 10),
                                 CONST_FONT_SIZE_SMALL,
                                 "default",
                                 "PRESS ESC TO CONTINUE SLAUGHTERING DEER",
                                 "Small");

   deersim.gameObjects.push(pauseBox);
   deersim.gameObjects.push(paused);
   deersim.gameObjects.push(pauseMessage);

   deersim.backgroundManager.bgIsScrolling = CONST_FALSE;
   deersim.musicManager.createAndDisplayMusicTicker(deersim);

   for (var soundEffect in deersim.soundEffects) {
      if (!(deersim.soundEffects[soundEffect].paused)) {
         deersim.soundEffects[soundEffect].pause();
      }
   }

   deersim.soundEffects[CONST_SOUND_INDEX_MENU_SELECTION_HIGH].pause();
   deersim.soundEffects[CONST_SOUND_INDEX_MENU_SELECTION_HIGH].currentTime = 0;
   deersim.soundEffects[CONST_SOUND_INDEX_MENU_SELECTION_HIGH].play();
}; // pause

/*----------------------------------------------------------------------*\
 | This function executes during the boss battle state while the player |
 | is in I-84. It coordinates a series of three Exclamation objects     |
 | which are generated to warn the player of the upcoming boss battle.  |
\*----------------------------------------------------------------------*/
var preparePlayerForCoopsEntry = function() {
   var backgroundTrack = deersim.musicManager.backgroundTrack;

   if ((backgroundTrack.currentTime > 4.67)
    && (backgroundTrack.currentTime < 4.77)) {
      var shouldCreateNewExclamation = CONST_TRUE;

      for (var gameObject in deersim.gameObjects) {
         if (deersim.gameObjects[gameObject] instanceof Exclamation) {
            shouldCreateNewExclamation = CONST_FALSE;
         }
      }

      if (shouldCreateNewExclamation === CONST_TRUE) {
         deersim.gameObjects.push(new Exclamation(1));
         pauseAndReplaySoundEffect(CONST_SOUND_INDEX_EXCLAMATION_REVERB_X4);
      }
   }
   else if ((backgroundTrack.currentTime > 9.33)
         && (backgroundTrack.currentTime < 9.43)) {
      var shouldCreateNewExclamation = CONST_TRUE;

      for (var gameObject in deersim.gameObjects) {
         if (deersim.gameObjects[gameObject] instanceof Exclamation) {
            shouldCreateNewExclamation = CONST_FALSE;
         }
      }

      if (shouldCreateNewExclamation === CONST_TRUE) {
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
      deersim.state = "bossBattle";

      var exclamation = new Exclamation(0);

      deersim.gameObjects.push(exclamation);

      deersim.soundEffects[CONST_SOUND_INDEX_EXCLAMATION].play();

      boss = deersim.generator.generateBoss();
      deersim.gameObjects.push(boss);
      boss.target = deer;

      // loadMusic("Schizoid8Bit");
      loadMusic(
         "Schizoid8Bit",         // bgTrack
         "NO COPYRIGHT INTENDED" // bgTrackID
         );

      deersim.musicManager.backgroundTrack.loop = CONST_TRUE;
   }
}; // startBossBattle()

/*--------------------------------------------------------------------------------*\
 | Initializes the game over menu, and triggers when the player runs out of Deer. |
\*--------------------------------------------------------------------------------*/
var startGameOverMenu = function() {
   if (deersim.state === "bossBattle")
      deersim.musicManager.reloadOnNextMain = CONST_TRUE;

   if (deersim.roadManager.generateFlags[0] === CONST_TRUE) {
      deersim.roadManager.closeBottomLaneRequested = CONST_TRUE;
      deersim.roadManager.minLane                  = 2;
      deersim.roadManager.sideHeightBottom         = deersim.roadManager.kBottomHeightMid;
   }

   if (deersim.roadManager.generateFlags[4] === CONST_TRUE) {
      deersim.roadManager.closeTopLaneRequested = CONST_TRUE;
      deersim.roadManager.maxLane               = 4;
      deersim.roadManager.sideHeightTop         = deersim.roadManager.kTopHeightMid;
   }

   deersim.state = "gameOver";

   var goSpeechBalloon = new StaticMenuObject((CONST_CANVAS_WIDTH / 2) - 250,
                                       -285,
                                       "SpeechBalloon500x60");

   var gameOver = new TextString((CONST_CANVAS_WIDTH / 2) - 144,
                                 180,
                                 CONST_FONT_SIZE_LARGE,
                                 "default",
                                 "GAME OVER",
                                 "Large");

   var gomSpeechBalloon = new StaticMenuObject((CONST_CANVAS_WIDTH / 2) - 344,
                                     -665,
                                     "SpeechBalloon688x129");

   var yorig = new StaticMenuObject(65, -50, "Yorig512");

   var lines = deersim.messageGenerator.gameOverMessage();

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
   a_deersim.state = "main";

   clearTextStrings(a_deersim);
   clearMenuObjects(a_deersim);

   var mainMenuBox = new StaticMenuObject(((CONST_CANVAS_WIDTH / 2) + 85),
                               -92, "SpeechBalloon385x97");

   var titleBox = new StaticMenuObject(
      (CONST_CANVAS_WIDTH / 2) - 215,  // x
      (CONST_CANVAS_HEIGHT / 2) - 114, // y
      "SpeechBalloon430x61"            // imageHandle
      );

   var interstateEmblem = new StaticMenuObject(
      (CONST_CANVAS_WIDTH / 2) - 196,  // x
      (CONST_CANVAS_HEIGHT / 2) - 130, // y
      "InterstateEmblem"               // imageHandle
      );

   var simulator = new TextString(
      (CONST_CANVAS_WIDTH / 2) - 80,   // x
      (CONST_CANVAS_HEIGHT / 2) - 100, // y
      CONST_FONT_SIZE_LARGE,           // charSize
      "default",                       // state
      "SIMULATOR",                     // string
      "Large"                          // size
      );

   a_deersim.mainMenuCursor = new Cursor((CONST_CANVAS_WIDTH / 2) + 100, 320);

   var startGame = new TextString((CONST_CANVAS_WIDTH / 2) + 125, 320,
                              CONST_FONT_SIZE_SMALL, "default", "START GAME", "Small");

   var credits = new TextString((CONST_CANVAS_WIDTH / 2) + 125, 350,
                                 CONST_FONT_SIZE_SMALL, "default", "CREDITS", "Small");

   var thirdOption = new TextString((CONST_CANVAS_WIDTH / 2) + 125, 380,
                                CONST_FONT_SIZE_SMALL, "default", "OBSCENITIES: OFF  ON", "Small");

   var keyIconW = new StaticMenuObject(
      CONST_FONT_SIZE_LARGE + 10,                       // x
      (CONST_CANVAS_HEIGHT / 2) + CONST_DIM_XLARGE - 4, // y
      "KeyIconW"                                        // imageHandle
      );

   var keyIconA = new StaticMenuObject(
      6,                                                                    // x
      (CONST_CANVAS_HEIGHT / 2) + CONST_DIM_XLARGE + CONST_FONT_SIZE_LARGE, // y
      "KeyIconA"                                                            // imageHandle
      );

   var keyIconS = new StaticMenuObject(
      CONST_FONT_SIZE_LARGE + 10,                                           // x
      (CONST_CANVAS_HEIGHT / 2) + CONST_DIM_XLARGE + CONST_FONT_SIZE_LARGE, // y
      "KeyIconS"                                                            // imageHandle
      );

   var keyIconD = new StaticMenuObject(
      CONST_DIM_MEDIUM + 14,                                                // x
      (CONST_CANVAS_HEIGHT / 2) + CONST_DIM_XLARGE + CONST_FONT_SIZE_LARGE, // y
      "KeyIconD"                                                            // imageHandle
      );

   var keyIconEnter = new StaticMenuObject(
      CONST_DIM_LARGE, // x
      (CONST_CANVAS_HEIGHT / 2) + CONST_DIM_XLARGE - CONST_FONT_SIZE_LARGE, // y
      "KeyIconEnter" // imageHandle
      );

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

   if (a_deersim.musicManager.reloadOnNextMain === CONST_TRUE) {
      playBackgroundTrackOnEnteringMainMenu(a_deersim);
   }

   a_deersim.musicManager.createAndDisplayMusicTicker(a_deersim);

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

   a_deersim.musicManager.reloadOnNextMain = CONST_FALSE;
}; // startMainMenu()

/*-----------------------------------------------------------*\
 | Initializes the 'round' state and starts a round of play. |
\*-----------------------------------------------------------*/
var startRound = function() {
   if (deersim.state === "main") {
      deersim.state = "round";

      clearMenuObjects(deersim);
      clearTextStrings(deersim);

      playerProfile = new Profile();

      deer = new Deer();
      deersim.gameObjects.push(deer);

      playerProfile.initTextStrings();
      // #TODO -- consider moving this to the Profile constructor.

      var mapVisibilityDurationInFrames = 300;

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
      deersim.state = "round";

      playerProfile.consecutiveLvls = 0;

      deersim.musicManager.backgroundTrack.pause();
      deersim.musicManager.backgroundTrack.currentTime = 0;
      deersim.musicManager.loadMusic();
      deersim.musicManager.backgroundTrack.play();
   }
};

var transitionToSA40PhaseOne = function() {
   deersim.state = "transitionToSA40PhaseOne";

   deersim.backgroundManager.bgIsScrolling = CONST_FALSE;

	var deerHerd = new Array(playerProfile.remainingDeer);

	var kidnappingAnimationFrames = new Array();

	var imageHandlePrefix = "kidnappingAnimation";

	for (var i = 0, iString = "", imageHandle = ""; i < 19; i++) {
		iString = i.toString();
		imageHandle = imageHandlePrefix.concat(iString);
		kidnappingAnimationFrames[i] = imageHandle;
	}

    var deerIndex = deersim.gameObjects.indexOf(deer);
    deersim.gameObjects.splice(deerIndex, 1);

	var vehicle = 0;

    while (vehicle < deersim.vehicles.length) {
      if (deersim.vehicles[vehicle] instanceof WhiteVan) {
            deersim.vehicles.splice(vehicle, 1);
		}
		else {
			vehicle++;
		}
	}

   transitionAnimation = new AnimationBlock(
      deer.x - 62,
      deer.y - 66,
      128,
      19,
      "KidnappingAnimation"
   );

   deersim.gameObjects.push(transitionAnimation);

   deersim.state = "transitionToSA40PhaseTwo";
};

/*---------------------------------------------------------------*\
 | Maintenance phase during play of transition animation.        |
 | (Kidnappers jump out of WhiteVan and kidnap the active deer.) |
\*---------------------------------------------------------------*/
var transitionToSA40PhaseTwo = function() {
   transitionAnimation.update();

   if (transitionAnimation.frameCounter >= (7 * transitionAnimation.length)) {
      transitionToSA40PhaseThree(playerProfile.remainingDeer);
   }
};

/*-----------------------------------------------------------------------------*\
 | Functional phase which consists of:                                         |
 | -- Create a new WhiteVan object to function as van carrying deer offscreen. |
 | -- Create a herd of Deer to chase after the WhiteVan.                       |
\*-----------------------------------------------------------------------------*/
var transitionToSA40PhaseThree = function(remainingDeer) {
   deersim.state = "transitionToSA40PhaseThree";

   clearFinishedAnimations();

   var whiteVan = new WhiteVan(6, 0);

   whiteVan.x = transitionAnimation.x + 38;
   whiteVan.y -= 2;

   deersim.vehicles.push(whiteVan);

   var deerHerd   = new Array(remainingDeer);
   var adjustment = 0;

   for (var i = 0; i < deerHerd.length; i++) {
      adjustment = (Math.random() - 0.5) * 40;

      deerHerd[i] = new Deer();
      deerHerd[i].x = -64 - (80 * i) + adjustment;
      deerHerd[i].y = whiteVan.y + adjustment + 75;

      deersim.gameObjects.push(deerHerd[i]);
   }

   deersim.state = "transitionToSA40PhaseFour";
};

/*----------------------------------------------------------------------*\
 | Functional phase which consists of:                                  |
 | -- Move the WhiteVan that kidnapped the deer offscreen to the right. |
 | -- Move all of the deer in the herd offscreen to the right.          |
\*----------------------------------------------------------------------*/
var transitionToSA40PhaseFour = function() {
   var wvsInPlay = 0;

   for (var vehicle in deersim.vehicles) {
      if (deersim.vehicles[vehicle] instanceof WhiteVan) {
         deersim.vehicles[vehicle].x += 3;

         wvsInPlay++;
      }
   }

   var deerInPlay = 0;

   for (var gameObject in deersim.gameObjects) {
      if (deersim.gameObjects[gameObject] instanceof Deer) {
         deersim.gameObjects[gameObject].x += 3;

         deerInPlay++;

         if (deersim.gameObjects[gameObject].x > CONST_CANVAS_WIDTH + 100) {
            deersim.gameObjects.splice(gameObject, 1);

            deerInPlay--;
         }
      }
   }

   if ((deerInPlay === 0) && (wvsInPlay === 0)) {
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
   deersim.state = "transitionToSA40PhaseFive";

   deersim.backgroundManager.setEnvironment("sa40");

   deersim.musicManager.environment = "sa40";

   clearAllPreviousGameObjects();

   deersim.musicManager.backgroundTrack.pause();
   deersim.musicManager.loadMusic();

   deersim.musicManager.backgroundTrack.play();

   var whiteVan = new WhiteVan(2, 0);

   whiteVan.x = -128;
   deersim.vehicles.push(whiteVan);

   deersim.state = "transitionToSA40PhaseSix";
};

/*----------------------------------------------------------------------*\
 | Maintenance phase during which WhiteVan enters screen from the left. |
\*----------------------------------------------------------------------*/
var transitionToSA40PhaseSix = function() {
   for (var vehicle in deersim.vehicles) {
      deersim.vehicles[vehicle].x += 3;

      if (deersim.vehicles[vehicle].x >= 100) {
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
   deersim.state = "transitionToSA40PhaseSeven";

	var dropoffAnimationFrames = new Array();

	var imageHandlePrefix = "dropoffAnimation";

	for (var i = 0, iString = "", imageHandle = ""; i < 14; i++) {
		iString = i.toString();
		imageHandle = imageHandlePrefix.concat(iString);
		dropoffAnimationFrames[i] = imageHandle;
	}

   deersim.vehicles.splice(0, 1);

   transitionAnimation = new AnimationBlock(59,
                                            526,
                                            128,
                                            14,
                                            "DropOffAnimation");

   deersim.gameObjects.push(transitionAnimation);

   deersim.state = "transitionToSA40PhaseEight";
};

/*----------------------------------------------------------------*\
 | Maintenance phase during play of transition animation.         |
 | (Kidnappers drop the deer out of the WhiteVan, onto the road.) |
\*----------------------------------------------------------------*/
var transitionToSA40PhaseEight = function() {
   transitionAnimation.update();

   if (transitionAnimation.frameCounter >= (7 * transitionAnimation.length)) {
      transitionToSA40PhaseNine();
   }
};

var transitionToSA40PhaseNine = function() {
   deersim.state = "transitionToSA40PhaseNine";

   clearFinishedAnimations();

   var whiteVan = new WhiteVan(2, 0);

   whiteVan.x = 100;

   var deerStill = new DeerStill(140, 590);

   deersim.vehicles.push(whiteVan);
   deersim.gameObjects.push(deerStill);

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
   for (var vehicle in deersim.vehicles) {
      deersim.vehicles[vehicle].x += 3;
   }

   if (deersim.vehicles.length === 0) {
      deersim.state = "round";

      for (gameObject in deersim.gameObjects) {
         if ((deersim.gameObjects[gameObject] instanceof DeerStill)
          || (deersim.gameObjects[gameObject] instanceof Deer)) {
            deersim.gameObjects.splice(gameObject, 1);
         }
      }

      deersim.backgroundManager.bgIsScrolling = CONST_TRUE;

      deer = new Deer();
      deer.x = 100;
      deer.clothing = "bag";
      deersim.gameObjects.push(deer);
   }
};

/*-------------------------------------------------*\
 | Executes when the game exits the 'pause' state. |
 | Transitions the game to the 'round' state.      |
\*-------------------------------------------------*/
var unpause = function() {
   deersim.state = pauseStateBuffer;
   deersim.pauseTimer++;
   clearMenuObjects(deersim);
   clearTextStrings(deersim);

   deersim.backgroundManager.bgIsScrolling = CONST_TRUE;

   for (var soundEffect in deersim.soundEffects) {
      if ((deersim.soundEffects[soundEffect].paused)
       && (deersim.soundEffects[soundEffect].currentTime > 0)
       && !(deersim.soundEffects[soundEffect].ended)) {
         deersim.soundEffects[soundEffect].play();
      }
   }

   deersim.soundEffects[CONST_SOUND_INDEX_MENU_SELECTION_LOW].pause();
   deersim.soundEffects[CONST_SOUND_INDEX_MENU_SELECTION_LOW].currentTime = 0;
   deersim.soundEffects[CONST_SOUND_INDEX_MENU_SELECTION_LOW].play();
};

// ---- End of function declarations. ----
