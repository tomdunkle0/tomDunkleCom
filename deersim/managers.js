/*-----------------------------------------------------------------*\
 | File: deersim/managers.js                                       |
 | Purpose: Defines game objects which continuously work to manage |
 | the creation, state, and destruction of other game objects.     |
\*-----------------------------------------------------------------*/

// ---- Start of object declarations. ----

/*----------------------------------------------------------------------*\
 | Defines the BackgroundManager, an infrastructure tool which manages  |
 | two adjacent Background objects to give the visual illusion that the |
 | active Deer is covering distance while running along the road.       |
\*----------------------------------------------------------------------*/
function BackgroundManager() {
   this.environment   = CONST_ENVIRONMENT_I84;
   this.bgIsScrolling = CONST_TRUE;

   this.bg1 = new Background(0, "Background");
   this.bg2 = new Background(CONST_CANVAS_WIDTH, "Background");
}; // BackgroundManager()

/*------------------------------------------------*\
 | Defines the MusicManager, which manages the    |
 | loading and functionality of background music. |
\*------------------------------------------------*/
function MusicManager(environment) {
   this.environment = environment;
   this.loadMusic();

   this.reloadOnNextMain = CONST_TRUE;
}; // MusicManager()

/*------------------------------------------------------------------------------*\
 | Defines the RoadManager, a tool of the game engine to manage the RoadSegment |
 | objects which make up the active Road upon which most game objects operate.  |
 | RoadManagers maintain an array of all active RoadSegments as they            |
 | scroll and are created/destroyed. RoadManagers also maintain "RoadSide"      |
 | StaticMenuObjects which represent the shoulders of the active Road.          |
\*------------------------------------------------------------------------------*/
function RoadManager() {
   this.roadSegments   = new Array();
   this.bottomSegments = new Array();
   this.topSegments    = new Array();

   this.generateFlags    = new Array();
   this.generateFlags[CONST_LANE_0_INDEX] = CONST_FALSE;
   this.generateFlags[CONST_LANE_1_INDEX] = CONST_TRUE;
   this.generateFlags[CONST_LANE_2_INDEX] = CONST_TRUE;
   this.generateFlags[CONST_LANE_3_INDEX] = CONST_TRUE;
   this.generateFlags[CONST_LANE_4_INDEX] = CONST_FALSE;

   this.closeBottomLaneRequested = CONST_FALSE; // Set to true when the bottom lane should close.
   this.closeTopLaneRequested    = CONST_FALSE; // Set to true when the top lane should close.
   this.openBottomLaneRequested  = CONST_FALSE; // Set to true when a new bottom lane should open.
   this.openTopLaneRequested     = CONST_FALSE; // Set to true when a new top lane should open.

   this.maxLane = 4;
   this.minLane = 2;

   this.idleFlags    = new Array();
   this.idleFlags[CONST_LANE_0_INDEX] = CONST_FALSE;
   this.idleFlags[CONST_LANE_1_INDEX] = CONST_FALSE;
   this.idleFlags[CONST_LANE_2_INDEX] = CONST_TRUE;
   this.idleFlags[CONST_LANE_3_INDEX] = CONST_FALSE;
   this.idleFlags[CONST_LANE_4_INDEX] = CONST_FALSE;

   this.idleLanes = new Array();
   for (var lane = 0; lane <= 4; lane++) {
      this.idleLanes[lane] = new StaticMenuObject(
         0,                                                    // x
         (CONST_LANE_0_BASE - 8) - (CONST_LANE_HEIGHT * lane), // y
         "RoadLane"                                            // imageHandle
         );
   }

   // Position variables declared relative to the game canvas:
   this.creationBoundary = 1152; // The x position at which RoadSegments are created.
   this.kBottomHeightMid = 662;  // Set sideHeightBottom to this value when minLane = 2.
   this.kTopHeightMid    = 496;  // Set sideHeightTop to this value when maxLane = 4.
   this.removalBoundary  = -200; // The x position at which RoadSegments are destroyed.
   this.segmentWidth     = 128;  // The width of all RoadSegments managed by the RoadManager.
   this.segmentHeight    = 40;   // The height of all RoadSegments managed by the RoadManager.

   this.sideHeightBottom = this.kBottomHeightMid; // The y position of the bottom side of the Road.
   this.sideHeightTop    = this.kTopHeightMid;    // The y position of the top side of the Road.

   var arrayIndex = 0;
   var numColumns = 10;
   var numLanes   = 5;

   for (var column = 0; column < numColumns; column++) {
      for (var row = 2; row < numLanes; row++) {
         this.roadSegments[arrayIndex] =
            new RoadSegment(
               (this.segmentWidth * column),                         // x
               (this.sideHeightBottom - (this.segmentHeight * row)), // y
               "standard",                                           // type
               row - 1                                               // lane
            );

         arrayIndex++;
      }
   }

   for (var column = 0; column < numColumns; column++) {
      this.bottomSegments[column] =
         new RoadSegment(
            (this.segmentWidth * column),               // x
            this.sideHeightBottom - this.segmentHeight, // y
            "bottom",                                   // type
            -1                                          // row; arbitrary
            );

      this.topSegments[column] =
         new RoadSegment(
            (this.segmentWidth * column), // x
            this.sideHeightTop,           // y
            "top",                        // type
            5                             // arbitrary row handle for top road segments
            );
   }

   this.maxXValue = 0;
}; // RoadManager()

/*-----------------------------------------------------------------------------*\
 | Defines the TouchManager, an object that detects and responds to touches    |
 | and swipes from the user's finger when the game is played on a mobile       |
 | device. The TouchManager only supports a single touch occuring at one time. |
\*-----------------------------------------------------------------------------*/
function TouchManager() {
   this.lastTouchEnded     = -1;
   this.lastTouchEndedTS   = -1;
   this.lastTouchStarted   = -1;
   this.lastTouchStartedTS = -1;

   this.shouldProcessSwipe = CONST_FALSE;
}; // TouchManager()

// ---- End of object declarations. ----

// ---- Start of function declarations. ----

/*------------------------------------------------------------*\
 | Generates Background objects to be owned by the            |
 | BackgroundManager. Which Backgrounds are generated depends |
 | on which environment the BackgroundManager is set to.      |
\*------------------------------------------------------------*/
BackgroundManager.prototype.generateBackgrounds = function() {
   if (this.environment === CONST_ENVIRONMENT_I84) {
      this.bg1 = new Background(0, "Background");
      this.bg2 = new Background(CONST_CANVAS_WIDTH, "Background");
   }
   else if (this.environment === "sa40") {
      this.bg1 = new Background(0, "SA40Background");
      this.bg2 = new Background(CONST_CANVAS_WIDTH, "SA40Background");
   }
}; // BackgroundManager.generateBackgrounds()

/*--------------------------------------------------------------------------------*\
 | Sets the BackgroundManager's environment and generates new Background objects. |
\*--------------------------------------------------------------------------------*/
BackgroundManager.prototype.setEnvironment = function(environment) {
   this.environment = environment;
   this.generateBackgrounds();
}; // BackgroundManager.setEnvironment()

/*------------------------------------------------------------------------*\
 | Manages the inherent leftward movement of Background objects. Whenever |
 | a Background moves completely offscreen to the left, the               |
 | BackgroundManager moves that Background offscreen to the right.        |
\*------------------------------------------------------------------------*/
BackgroundManager.prototype.update = function() {
   if (this.bg1.x < -CONST_CANVAS_WIDTH)
      this.bg1.x = this.bg2.x + CONST_CANVAS_WIDTH;

   if (this.bg2.x < -CONST_CANVAS_WIDTH)
      this.bg2.x = this.bg1.x + CONST_CANVAS_WIDTH;

   if (this.bgIsScrolling) {
      this.bg1.x -= 3;
      this.bg2.x -= 3;
   }
}; // BackgroundManager.update()

/*----------------------------------------------------------------*\
 | Creates and displays the music ticker, which consists of a     |
 | dialog box and a TextString to display the background track ID |
 | (i.e. artist/title of currently playing song) to the player.   |
\*----------------------------------------------------------------*/
// TODO: Consider just making the MusicManager aware of its owning deersim object.
MusicManager.prototype.createAndDisplayMusicTicker = function(a_deersim) {
   var musicTickerBoxHandle = "Ticker box handle not found.";

   // #TODO -- explore the possibility of determining size based on ID length, programmatically.
   // #TODO -- single-source these string constants since
   //           they're also used in MusicManager.prototype.loadMusic().
   switch (this.backgroundTrackID)
   {
      case "I-84 Simulator Theme (Classic)":
         musicTickerBoxHandle = "SpeechBalloon257x33";
         break;
      case "entropics - 'mr. w~s new segway (I-84 Simulator for 'the Internet' Remix)'":
         musicTickerBoxHandle = "SpeechBalloon609x33";
         break;
      case "Discount Musician - 'Duel on the Black Keys'":
         musicTickerBoxHandle = "SpeechBalloon369x33";
         break;
      case "Cornelius Squatgood - 'startlingly, ||YOURFEARISREAL|| & in_another_time'":
         musicTickerBoxHandle = "SpeechBalloon601x33";
         break;
      case "Cornelius Squatgood - 'preview of your death / terlingua sun'":
         musicTickerBoxHandle = "SpeechBalloon504x33";
         break;
      case "Cornelius Squatgood - 'it seems i~ve wandered into the wrong bakery again'":
         musicTickerBoxHandle = "SpeechBalloon609x33";
         break;
      case "NO COPYRIGHT INTENDED":
         musicTickerBoxHandle = "SpeechBalloon187x33";
         break;
   }

   var musicTickerBox = new StaticMenuObject(
      5,                   // x
      5,                   // y
      musicTickerBoxHandle // imageHandle
      );

   var musicTickerText = new TextString(
      15,                     // x
      15,                     // y
      CONST_FONT_SIZE_TINY,   // charSize
      "music",                // state
      this.backgroundTrackID, // string
      "Tiny",                 // size
      );

   a_deersim.gameObjects.push(musicTickerBox);
   a_deersim.gameObjects.push(musicTickerText);
}; // MusicManager.createAndDisplayMusicTicker()

/*-----------------------------------------------------------------------------------------*\
 | Loads a song as the current background track, based on this MusicManager's environment. |
\*-----------------------------------------------------------------------------------------*/
// #TODO -- in deersim classic, loadMusic() used a string parameter to identify the song.
// Change this implementation accordingly so that I
// can load schizoid.wav for the Coop boss battle.
MusicManager.prototype.loadMusic = function() {
   var randomDecimal = Math.random();

   if (this.environment === CONST_ENVIRONMENT_I84) {
      if (randomDecimal < 0.25) {
         this.backgroundTrack   = document.getElementById("DeersimClassicTheme");
         this.backgroundTrackID = "I-84 Simulator Theme (Classic)";
      }
      else if (randomDecimal < 0.50) {
         this.backgroundTrack   = document.getElementById("MrWsNewSegway");
         this.backgroundTrackID = "entropics - 'mr. w~s new segway (I-84 Simulator for 'the Internet' Remix)'";
      }
      else if (randomDecimal < 0.75) {
         this.backgroundTrack   = document.getElementById("DuelOnTheBlackKeys");
         this.backgroundTrackID = "Discount Musician - 'Duel on the Black Keys'";
      }
      else {
         this.backgroundTrack   = document.getElementById("Startlingly");
         this.backgroundTrackID = "Cornelius Squatgood - 'startlingly, ||YOURFEARISREAL|| & in_another_time'";
      }
   }
   else if (this.environment === "sa40") {
      if (randomDecimal < 0.5) {
         this.backgroundTrack   = document.getElementById("PreviewOfYourDeathTerlinguaSun");
         this.backgroundTrackID = "Cornelius Squatgood - 'preview of your death / terlingua sun'";
      }
      else {
         this.backgroundTrack   = document.getElementById("Bakery");
         this.backgroundTrackID = "Cornelius Squatgood - 'it seems i~ve wandered into the wrong bakery again'";
      }
   }

   this.backgroundTrack.loop = true;

   // this.backgroundTrack.play(); // Play the loaded background track.
}; // MusicManager.loadMusic()

/*---------------------------------------------------------------------------------*\
 | Draws every RoadSegment, plus both RoadSide objects, owned by this RoadManager. |
\*---------------------------------------------------------------------------------*/
RoadManager.prototype.draw = function() {
   for (var roadSegment in this.roadSegments) {
      this.roadSegments[roadSegment].draw();
   }

   for (var idleLane in this.idleLanes) {
      if (this.idleFlags[idleLane] === CONST_TRUE) {
         this.idleLanes[idleLane].draw();
      }
   }

   for (var bottomSegment in this.bottomSegments) {
      this.bottomSegments[bottomSegment].draw();
   }

   for (var topSegment in this.topSegments) {
      this.topSegments[topSegment].draw();
   }
}; // RoadManager.draw()

/*------------------------------------------------------------------------*\
 | This function uses the RoadManager's generate flags to determine which |
 | lanes should receive new RoadSegments, how many, and their type.       |
\*------------------------------------------------------------------------*/
RoadManager.prototype.generateNewRoadSegments = function() {
   for (var lane = 0; lane <= 4; lane++) {
      if (this.generateFlags[lane]) {
         if ((this.closeBottomLaneRequested === CONST_TRUE)
          && (lane === (this.minLane - 1))) {
            this.roadSegments.push(
               new RoadSegment(
                  this.maxXValue + this.segmentWidth,                  // x
                  this.sideHeightBottom - (this.segmentHeight * lane), // y
                  "closingBottomLane",                                 // type
                  lane - 1                                             // lane
                  )
               );

            this.roadSegments.push(
               new RoadSegment(
                  this.maxXValue + this.segmentWidth,          // x
                  (this.sideHeightBottom - this.segmentHeight)
                     - (this.segmentHeight * lane),            // y
                  "standard",                                  // type
                  lane                                         // lane
                  )
               );

            this.closeBottomLaneRequested = CONST_FALSE;
         }
         else if ((this.closeTopLaneRequested === CONST_TRUE)
               && (lane === (this.maxLane - 1))) {
            this.roadSegments.push(
               new RoadSegment(
                  this.maxXValue + this.segmentWidth,          // x
                  (this.sideHeightBottom - this.segmentHeight)
                     - (this.segmentHeight * lane),            // y
                  "standard",                                  // type
                  lane                                         // lane
                  )
               );

            this.roadSegments.push(
               new RoadSegment(
                  this.maxXValue + this.segmentWidth,                // x
                  (this.sideHeightBottom - (this.segmentHeight * 2))
                     - (this.segmentHeight * lane),                  // y
                  "closingTopLane",                                  // type
                  lane + 1                                           // lane
                  )
               );

            this.closeTopLaneRequested = CONST_FALSE;
         }
         else if ((this.openBottomLaneRequested === CONST_TRUE)
          && (lane === (this.minLane - 1))) {
            this.roadSegments.push(
               new RoadSegment(
                  this.maxXValue + this.segmentWidth,                // x
                  (this.sideHeightBottom - (this.segmentHeight * 2))
                     - (this.segmentHeight * lane),                  // y
                  "openingBottomLane",                               // type
                  lane                                               // lane
                  )
               );

            this.openBottomLaneRequested = CONST_FALSE;
         }
         else if ((this.openTopLaneRequested === CONST_TRUE)
               && (lane === (this.maxLane - 1))) {
            this.roadSegments.push(
               new RoadSegment(
                  this.maxXValue + this.segmentWidth,                // x
                  (this.sideHeightBottom - (this.segmentHeight * 2))
                     - (this.segmentHeight * lane),                  // y
                  "openingTopLane",                                  // type
                  lane                                               // lane
                  )
               );

            this.openTopLaneRequested = CONST_FALSE;
         }
         else {
            // #TODO -- documentation
            // Ideally, in order to fix up the documentation of this section
            // I will need to define a new member constant for the lane 0 base y value.
            if ((lane == (this.maxLane - 1))
            || (lane == (this.minLane - 1))) {
               this.roadSegments.push(
                  new RoadSegment(
                     this.maxXValue + this.segmentWidth,                   // x
                     (CONST_LANE_0_BASE - 8) - (CONST_LANE_HEIGHT * lane), // y
                     "standard",                                           // type
                     lane
                     )
                  );
            }
         }
      }
   }
}; // RoadManager.generateNewRoadSegments()

/*-------------------------------------------------------------------------------------------*\
 | Updates this RoadManager. The code in this function controls how road segments are        |
 | generated and how boundaries are determined for other game objects (e.g. Deer, Vehicles). |
\*-------------------------------------------------------------------------------------------*/
RoadManager.prototype.update = function() {
   // Reset member variables used by this function on every game frame.
   this.maxXValue               = 0;           // Keeps track of max X standard RoadSegment.
   this.minXValue               = 1500;        // Keeps track of min X standard RoadSegment.
   this.topMaxXValue            = 0;           // Keeps track of max X top RoadSegment.
   this.topMinXValue            = 1500;        // Keeps track of min X top RoadSegment.
   this.bottomMaxXValue         = 0;           // Keeps track of max X bottom RoadSegment.
   this.bottomMinXValue         = 1500;        // Keeps track of min X bottom RoadSegment.
   this.indexOfMinXValue        = -1;          // Array index of min X standard RoadSegment.
   this.indexOfTopMinXValue     = -1;          // Array index of min X top RoadSegment.
   this.indexOfBottomMinXValue  = -1;          // Array index of min X bottom RoadSegment.
   this.newSegmentsNeeded       = CONST_FALSE; // Triggers new standard RoadSegment generation.
   this.newTopSegmentsNeeded    = CONST_FALSE; // Triggers new top RoadSegment generation.
   this.newBottomSegmentsNeeded = CONST_FALSE; // Triggers new bottom RoadSegment generation.

   for (var roadSegment in this.roadSegments) {
      this.roadSegments[roadSegment].update();

      if (this.roadSegments[roadSegment].x > this.maxXValue) {
         this.maxXValue = this.roadSegments[roadSegment].x;
      }

      if (this.roadSegments[roadSegment].x < this.minXValue) {
         this.minXValue        = this.roadSegments[roadSegment].x;
         this.indexOfMinXValue = roadSegment;
      }
   }

   for (var bottomSegment in this.bottomSegments) {
      this.bottomSegments[bottomSegment].update();

      if (this.bottomSegments[bottomSegment].x > this.bottomMaxXValue) {
         this.bottomMaxXValue = this.bottomSegments[bottomSegment].x;
      }

      if (this.bottomSegments[bottomSegment].x < this.bottomMinXValue) {
         this.bottomMinXValue = this.bottomSegments[bottomSegment].x;
         this.indexOfBottomMinXValue = bottomSegment;
      }
   }

   for (var topSegment in this.topSegments) {
      this.topSegments[topSegment].update();

      if (this.topSegments[topSegment].x > this.topMaxXValue) {
         this.topMaxXValue = this.topSegments[topSegment].x;
      }

      if (this.topSegments[topSegment].x < this.topMinXValue) {
         this.topMinXValue = this.topSegments[topSegment].x;
         this.indexOfTopMinXValue = topSegment;
      }
   }

   if (this.minXValue < this.removalBoundary) {
      this.roadSegments.splice(this.indexOfMinXValue, 1);
   }

   if (this.bottomMinXValue < this.removalBoundary) {
      this.bottomSegments.splice(this.indexOfBottomMinXValue, 1);
   }

   if (this.topMinXValue < this.removalBoundary) {
      this.topSegments.splice(this.indexOfTopMinXValue, 1);
   }

   if (this.maxXValue < this.creationBoundary) {
      this.newSegmentsNeeded = CONST_TRUE;
   }

   if (this.bottomMaxXValue < this.creationBoundary) {
      this.newBottomSegmentsNeeded = CONST_TRUE;
   }

   if (this.topMaxXValue < this.creationBoundary) {
      this.newTopSegmentsNeeded = CONST_TRUE;
   }

   if (deersim.state === "round") {
      if (playerProfile.level < 3) {
         this.generateFlags[CONST_LANE_0_INDEX] = CONST_FALSE;
         this.generateFlags[CONST_LANE_4_INDEX] = CONST_FALSE;
         this.maxLane                           = 4;
         this.minLane                           = 2;
      }
      if ((playerProfile.level === 3) || (playerProfile.level === 4)) { // Danbury Fair Mall exits
         this.generateFlags[CONST_LANE_0_INDEX] = CONST_TRUE;
         this.generateFlags[CONST_LANE_4_INDEX] = CONST_FALSE;
         this.idleFlags[CONST_LANE_1_INDEX]     = CONST_TRUE;
         this.idleFlags[CONST_LANE_2_INDEX]     = CONST_TRUE;
         this.maxLane                           = 4;
         this.minLane                           = 1;
         this.sideHeightBottom                  = 702;
      }
      if (playerProfile.level === 5) {
         this.generateFlags[CONST_LANE_0_INDEX] = CONST_TRUE;
         this.generateFlags[CONST_LANE_4_INDEX] = CONST_TRUE;
         this.idleFlags[CONST_LANE_2_INDEX]     = CONST_TRUE;
         this.idleFlags[CONST_LANE_3_INDEX]     = CONST_TRUE;
         this.maxLane                           = 5;
         this.minLane                           = 1;
         this.sideHeightTop                     = 456;
      }
      if (playerProfile.level === 6) {
         this.generateFlags[CONST_LANE_0_INDEX] = CONST_FALSE;
         this.idleFlags[CONST_LANE_2_INDEX]     = CONST_TRUE;
         this.minLane                           = 2;
         this.sideHeightBottom                  = 662;
      }
      if (playerProfile.level >= 7) {
         this.generateFlags[CONST_LANE_4_INDEX] = CONST_FALSE;
         this.idleFlags[CONST_LANE_2_INDEX]     = CONST_TRUE;
         this.maxLane                           = 4;
         this.sideHeightTop                     = 496;
      }
   }

   if (this.newSegmentsNeeded) {
      this.generateNewRoadSegments();
   }

   if (this.newTopSegmentsNeeded) {
      var topRightRoadSegment = this.roadSegments[
         this.roadSegments.length - 1
         ];

      if ((topRightRoadSegment.type !== "openingTopLane")
       && (topRightRoadSegment.type !== "closingTopLane")) {
         this.topSegments.push(
            new RoadSegment(
               this.maxXValue + this.segmentWidth, // x
               this.sideHeightTop,                 // y
               "top",                              // type
               5                                   // arbitrary handle for top road segments
               )
            );
      }
   }

   if (this.newBottomSegmentsNeeded) {
      var bottomRightRoadSegment = this.roadSegments[
         this.roadSegments.length - 2
         ];

      var subBottomRightRoadSegment = this.roadSegments[
         this.roadSegments.length - 3
         ];

      if ((bottomRightRoadSegment.type !== "openingBottomLane")
       && (subBottomRightRoadSegment.type !== "closingBottomLane")) {
         this.bottomSegments.push(
            new RoadSegment(
               this.maxXValue + this.segmentWidth,        // x
               this.sideHeightBottom - CONST_LANE_HEIGHT, // y
               "bottom",                                  // type
               -1                                         // arbitrary; for bottom road segments
               )
         );
      }
   }
}; // RoadManager.update()

/*-----------------------------------------------------------------------*\
 | Updates this TouchManager. The TouchManager uses flags to respond     |
 | to events, since the event-handling functions in the game engine fire |
 | immediately, but this update function runs (in theory) at 60 FPS.     |
\*-----------------------------------------------------------------------*/
TouchManager.prototype.update = function() {
   if (this.shouldProcessSwipe === CONST_TRUE) {
      if (deersim.state === "main") {
         var swipeDuration =
            ((deersim.touchManager.lastTouchEndedTS - deersim.touchManager.lastTouchStartedTS)
               / CONST_MS_PER_SEC);

         var minSwipeDuration = 0.1;
         var maxSwipeDuration = 1;

         var shouldChangeMenu = CONST_FALSE;
         if ((swipeDuration > minSwipeDuration) && (swipeDuration < maxSwipeDuration)) {
            shouldChangeMenu = CONST_TRUE;
         }

         if (shouldChangeMenu === CONST_TRUE) {
            var swipeRise =
               (deersim.touchManager.lastTouchEnded.pageY - deersim.touchManager.lastTouchStarted.pageY);

            var direction = 0;
            var threshold = 100;
            if (swipeRise < -threshold)
               direction = 1;
            else if (swipeRise > threshold)
               direction = -1;

            if (direction === 1) {
               if ((deersim.mainMenuCursor.keyCounter === 0) && (deersim.mainMenuCursor.menuItem > 1)) {
                  toggleMainMenuCursor(1);
               }
            }
            else if (direction === -1) {
               if ((deersim.mainMenuCursor.keyCounter === 0) && (deersim.mainMenuCursor.menuItem < 3)) {
                  toggleMainMenuCursor(-1);
               }
            }
         }
      }

      this.shouldProcessSwipe = CONST_FALSE;
   }
}; // TouchManager.update()

// ---- End of function declarations. ----
