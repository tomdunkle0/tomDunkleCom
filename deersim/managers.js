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
   this.environment   = CONST_ENVIRONMENT_I84; // Set this BgM's environment to the default, I-84.
   this.bgIsScrolling = CONST_TRUE;            // By default, the BgM tells Backgrounds to scroll.
   
   // Create two adjacent Background objects for this BackgroundManager to own.
   this.bg1 = new Background(0, "Background");
   this.bg2 = new Background(CONST_CANVAS_WIDTH, "Background");
}; // BackgroundManager()

/*------------------------------------------------*\
 | Defines the MusicManager, which manages the    |
 | loading and functionality of background music. |
\*------------------------------------------------*/
function MusicManager(environment) {
   this.environment = environment; // Assign this MusicManager's environment.
   this.loadMusic();               // Load a background track based on the environment.
   
   // Flag to track when necessary to load new music after a boss defeats a player.
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
   /* The RoadManager manages three arrays containing segments of road that scroll
      at the active Deer's running speed. Respectively, these arrays contain...    */
   this.roadSegments   = new Array(); // ...road segments comprising the road's five lanes.
   this.bottomSegments = new Array(); // ...road segments comprising the road's bottom shoulder.
   this.topSegments    = new Array(); // ...road segments comprising the road's top shoulder.

   /* generateFlags contains five boolean 'generate'
      flags signalling RoadSegment generation per lane. */
   this.generateFlags    = new Array();
   this.generateFlags[CONST_LANE_0_INDEX] = CONST_FALSE;
   this.generateFlags[CONST_LANE_1_INDEX] = CONST_TRUE;
   this.generateFlags[CONST_LANE_2_INDEX] = CONST_TRUE;
   this.generateFlags[CONST_LANE_3_INDEX] = CONST_TRUE;
   this.generateFlags[CONST_LANE_4_INDEX] = CONST_FALSE;

   /* This RoadManager owns four flags that control the opening
      (i.e. beginning) and closing (i.e. ending) of the road's lanes. When
      initializing this RoadManager, start by setting all flags to false. */
   this.closeBottomLaneRequested = CONST_FALSE; // Set to true when the bottom lane should close.
   this.closeTopLaneRequested    = CONST_FALSE; // Set to true when the top lane should close.
   this.openBottomLaneRequested  = CONST_FALSE; // Set to true when a new bottom lane should open.
   this.openTopLaneRequested     = CONST_FALSE; // Set to true when a new top lane should open.

   /* Member variables used by other game objects to define
      lane-based boundaries for object movement and generation. */
   this.maxLane = 4;
   this.minLane = 2;

   /* Lanes that are 'idle' are usually sandwiched in the middle,
      and should display statically without any RoadSegments
      generated. idleFlags indicates which lanes are currently idle. */
   this.idleFlags    = new Array();
   this.idleFlags[CONST_LANE_0_INDEX] = CONST_FALSE;
   this.idleFlags[CONST_LANE_1_INDEX] = CONST_FALSE;
   this.idleFlags[CONST_LANE_2_INDEX] = CONST_TRUE;
   this.idleFlags[CONST_LANE_3_INDEX] = CONST_FALSE;
   this.idleFlags[CONST_LANE_4_INDEX] = CONST_FALSE;

   /* Idle lanes are drawn using StaticMenuObjects, which
      live in this RoadManager's idleLanes array.         */
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

   /* A two-dimensional for loop is used to create an initial set of 50 RoadSegments.
      However, all RoadSegments are stored in a one-dimensional array, since
      distribution of active RoadSegments will vary throughout gameplay.              */
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

         arrayIndex++; // For each 2D element, keep track of its position in the 1D array.
      }
   }

   /* A one-dimensional for loop is used to create initial
      sets of 10 top RoadSegments and 10 bottom RoadSegments. */
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
   this.lastTouchEnded     = -1; // Will point to the most recent HTML touchend event.
   this.lastTouchEndedTS   = -1; // Will point to the time the most recent touchend occurred.
   this.lastTouchStarted   = -1; // Will point to the most recent HTML touchstart event.
   this.lastTouchStartedTS = -1; // Will point to the time the most recent touchstart occurred.

   /* Initialize a flag to raise when this TouchManager should process a swipe
      action. If the user touches the screen, then moves somewhere, then removes
      their finger from the screen, then a swipe action should be processed.     */
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
   this.environment = environment; // Assign this BackgroundManager's environment.
   this.generateBackgrounds();     // Generate new Background objects.
}; // BackgroundManager.setEnvironment()

/*------------------------------------------------------------------------*\
 | Manages the inherent leftward movement of Background objects. Whenever |
 | a Background moves completely offscreen to the left, the               |
 | BackgroundManager moves that Background offscreen to the right.        |
\*------------------------------------------------------------------------*/
BackgroundManager.prototype.update = function() {
   // If Background #1 moves offscreen to the left,
   if (this.bg1.x < -CONST_CANVAS_WIDTH)
      this.bg1.x = this.bg2.x + CONST_CANVAS_WIDTH; // Move Background #1 offscreen to the right.
   
   // If Background #2 moves offscreen to the left,
   if (this.bg2.x < -CONST_CANVAS_WIDTH)
      this.bg2.x = this.bg1.x + CONST_CANVAS_WIDTH; // Move Background #2 offscreen to the right.

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
   // Create a handle which will be used to determine the music ticker box's size.
   var musicTickerBoxHandle = "Ticker box handle not found.";

   // Assign the handle for the desired size, based on the length of the background track ID.
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

   // Create a dialog box in which to display the background track ID to the player.
   var musicTickerBox = new StaticMenuObject(
      5,                   // x
      5,                   // y
      musicTickerBoxHandle // imageHandle
      );

   // Create a TextString representation of the background track ID to show to the player.
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
   var randomDecimal = Math.random(); // Generate a random decimal.

   if (this.environment === CONST_ENVIRONMENT_I84) { // If this MusicManager's environment is I-84...
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
   else if (this.environment === "sa40") { // If this MusicManager's environment is SA-40...
      if (randomDecimal < 0.5) {
         this.backgroundTrack   = document.getElementById("PreviewOfYourDeathTerlinguaSun");
         this.backgroundTrackID = "Cornelius Squatgood - 'preview of your death / terlingua sun'";
      }
      else {
         this.backgroundTrack   = document.getElementById("Bakery");
         this.backgroundTrackID = "Cornelius Squatgood - 'it seems i~ve wandered into the wrong bakery again'";
      }
   }
   
   this.backgroundTrack.loop = true; // Set this MusicManager's background track to loop.
   
   // this.backgroundTrack.play(); // Play the loaded background track.
}; // MusicManager.loadMusic()

/*---------------------------------------------------------------------------------*\
 | Draws every RoadSegment, plus both RoadSide objects, owned by this RoadManager. |
\*---------------------------------------------------------------------------------*/
RoadManager.prototype.draw = function() {
   // Draw all lane RoadSegments owned by this RoadManager.
   for (var roadSegment in this.roadSegments) {
      this.roadSegments[roadSegment].draw();
   }

   // Draw all idle lanes owned by this RoadManager.
   for (var idleLane in this.idleLanes) {
      if (this.idleFlags[idleLane] === CONST_TRUE) {
         this.idleLanes[idleLane].draw();
      }
   }

   // Draw all bottom RoadSegments owned by this RoadManager.
   for (var bottomSegment in this.bottomSegments) {
      this.bottomSegments[bottomSegment].draw();
   }

   // Draw all top RoadSegments owned by this RoadManager.
   for (var topSegment in this.topSegments) {
      this.topSegments[topSegment].draw();
   }
}; // RoadManager.draw()

/*------------------------------------------------------------------------*\
 | This function uses the RoadManager's generate flags to determine which |
 | lanes should receive new RoadSegments, how many, and their type.       |
\*------------------------------------------------------------------------*/
RoadManager.prototype.generateNewRoadSegments = function() {
   for (var lane = 0; lane <= 4; lane++) { // For each lane, from bottom (0) to top (4)...
      /* If the lane's generate flag is asserted, then execute a series of conditional checks
         to determine exactly what type of RoadSegment should be generated in this lane.      */
      if (this.generateFlags[lane]) {
         /* If considering the bottom lane and the 'close' flag is raised,
            then close the lane by pushing two new RoadSegments (a diagonal
            one, then a rectangular one) into the road segments array.      */
         if ((this.closeBottomLaneRequested === CONST_TRUE)
          && (lane === (this.minLane - 1))) {
            this.roadSegments.push( // Diagonal segment
               new RoadSegment(
                  this.maxXValue + this.segmentWidth,                  // x
                  this.sideHeightBottom - (this.segmentHeight * lane), // y
                  "closingBottomLane",                                 // type
                  lane - 1                                             // lane
                  )
               );

            this.roadSegments.push( // Rectangular segment
               new RoadSegment(
                  this.maxXValue + this.segmentWidth,          // x
                  (this.sideHeightBottom - this.segmentHeight)
                     - (this.segmentHeight * lane),            // y
                  "standard",                                  // type
                  lane                                         // lane
                  )
               );

            this.closeBottomLaneRequested = CONST_FALSE; // Reset the close flag.
         }
         /* If considering the top lane and the 'close' flag is raised,
            then close the lane by pushing two new RoadSegments (a rectangular
            one, then a diagonal one) into the road segments array.            */
         else if ((this.closeTopLaneRequested === CONST_TRUE)
               && (lane === (this.maxLane - 1))) {
            this.roadSegments.push( // Rectangular segment
               new RoadSegment(
                  this.maxXValue + this.segmentWidth,          // x
                  (this.sideHeightBottom - this.segmentHeight)
                     - (this.segmentHeight * lane),            // y
                  "standard",                                  // type
                  lane                                         // lane
                  )
               );

            this.roadSegments.push( // Diagonal segment
               new RoadSegment(
                  this.maxXValue + this.segmentWidth,                // x
                  (this.sideHeightBottom - (this.segmentHeight * 2))
                     - (this.segmentHeight * lane),                  // y
                  "closingTopLane",                                  // type
                  lane + 1                                           // lane
                  )
               );

            this.closeTopLaneRequested = CONST_FALSE; // Reset the close flag.
         }
         /* If considering the bottom lane and the 'open' flag is raised, then open
            a new lane by pushing a diagonal RoadSegment into the road segments array. */
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

            this.openBottomLaneRequested = CONST_FALSE; // Reset the open flag.
         }
         /* If considering the top lane and the 'open' flag is raised, then open
            a new lane by pushing a diagonal RoadSegment into the road segments array. */
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

            this.openTopLaneRequested = CONST_FALSE; // Reset the open flag.
         }
         else { // ...otherwise, generate a standard RoadSegment in this lane.
            // #TODO -- documentation
            // Ideally, in order to fix up the documentation of this section
            // I will need to define a new member constant for the lane 0 base y value.
            if ((lane == (this.maxLane - 1))
            || (lane == (this.minLane - 1))) { // For only the top and bottom lanes...
               this.roadSegments.push( // Push a new standard RoadSegment into the array
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

   // Iterate through every active standard RoadSegment.
   for (var roadSegment in this.roadSegments) {
      this.roadSegments[roadSegment].update(); // Update all RoadSegments.

      // Keep a running watch on the max X value, i.e. farthest-right standard RoadSegment.
      if (this.roadSegments[roadSegment].x > this.maxXValue) {
         this.maxXValue = this.roadSegments[roadSegment].x;
      }

      /* Keep a running watch on the min X value and its array index,
         i.e. a watch on the farthest-left standard RoadSegment. */
      if (this.roadSegments[roadSegment].x < this.minXValue) {
         this.minXValue        = this.roadSegments[roadSegment].x;
         this.indexOfMinXValue = roadSegment;
      }
   }

   // Iterate through every active bottom RoadSegment.
   for (var bottomSegment in this.bottomSegments) {
      this.bottomSegments[bottomSegment].update();

      // Keep a running watch on the max X value, i.e. farthest-right bottom RoadSegment.
      if (this.bottomSegments[bottomSegment].x > this.bottomMaxXValue) {
         this.bottomMaxXValue = this.bottomSegments[bottomSegment].x;
      }

      /* Keep a running watch on the min X value and its array index,
         i.e. a watch on the farthest-left bottom RoadSegment. */
      if (this.bottomSegments[bottomSegment].x < this.bottomMinXValue) {
         this.bottomMinXValue = this.bottomSegments[bottomSegment].x;
         this.indexOfBottomMinXValue = bottomSegment;
      }
   }

   // Iterate through every active top RoadSegment.
   for (var topSegment in this.topSegments) {
      this.topSegments[topSegment].update();

      // Keep a running watch on the max X value, i.e. farthest-right top RoadSegment.
      if (this.topSegments[topSegment].x > this.topMaxXValue) {
         this.topMaxXValue = this.topSegments[topSegment].x;
      }

      /* Keep a running watch on the min X value and its array index,
         i.e. a watch on the farthest-left top RoadSegment. */
      if (this.topSegments[topSegment].x < this.topMinXValue) {
         this.topMinXValue = this.topSegments[topSegment].x;
         this.indexOfTopMinXValue = topSegment;
      }
   }

   /* If the farthest-left standard RoadSegment has crossed
      the removal boundary, then remove it from the array.  */
   if (this.minXValue < this.removalBoundary) {
      this.roadSegments.splice(this.indexOfMinXValue, 1);
   }

   /* If the farthest-left bottom RoadSegment has crossed
      the removal boundary, then remove it from the array.  */
   if (this.bottomMinXValue < this.removalBoundary) {
      this.bottomSegments.splice(this.indexOfBottomMinXValue, 1);
   }

   /* If the farthest-left top RoadSegment has crossed
      the removal boundary, then remove it from the array.  */
   if (this.topMinXValue < this.removalBoundary) {
      this.topSegments.splice(this.indexOfTopMinXValue, 1);
   }

   /* If the farthest-right standard RoadSegments will no longer cover the
      Road horizontally, then signal the need for new standard RoadSegments. */
   if (this.maxXValue < this.creationBoundary) {
      this.newSegmentsNeeded = CONST_TRUE;
   }

   /* If the farthest-right bottom RoadSegments will no longer cover the
      Road horizontally, then signal the need for new bottom RoadSegments. */
   if (this.bottomMaxXValue < this.creationBoundary) {
      this.newBottomSegmentsNeeded = CONST_TRUE;
   }

   /* If the farthest-right top RoadSegments will no longer cover the
      Road horizontally, then signal the need for new top RoadSegments. */
   if (this.topMaxXValue < this.creationBoundary) {
      this.newTopSegmentsNeeded = CONST_TRUE;
   }

   /* If during a round of play, then reset the player profile's
      road-associated variables in order to define a programmed
      sequence of road conditions based on the player's current level. */
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

   // If new road segments are needed, generate them.
   if (this.newSegmentsNeeded) {
      this.generateNewRoadSegments();
   }

   /* If we've decided that it's time to add a new top RoadSegment,
      then let's make sure that's true and that there isn't a reason not to. */
   if (this.newTopSegmentsNeeded) {
      // Establish a reference to the top-right RoadSegment.
      var topRightRoadSegment = this.roadSegments[
         this.roadSegments.length - 1
         ];

      /* Check the top-right RoadSegment to see if it is an opening or closing lane.
         If it is not, then push a new top RoadSegment into the top road segments array. */
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

   /* If we've decided that it's time to add a new bottom RoadSegment,
      then let's make sure that's true and that there isn't a reason not to.*/
   if (this.newBottomSegmentsNeeded) {
      /* Establish a reference to the RoadSegment that we
         expect to be the bottom-right RoadSegment.       */
      var bottomRightRoadSegment = this.roadSegments[
         this.roadSegments.length - 2
         ];

      /* Next, establish a reference to the RoadSegment one prior to
         that. In the case where a bottom lane is closing, there will
         be one diagonal RoadSegment below the 'bottom-right' RoadSegment,
         which we'll refer to as the 'sub-bottom-right' RoadSegment. */
      var subBottomRightRoadSegment = this.roadSegments[
         this.roadSegments.length - 3
         ];

      /* Check the bottom-right RoadSegment to see if it is an opening
         lane, and check the sub-bottom-right RoadSegment to see if it
         is a closing lane. If neither of these conditions is true, then
         push a new bottom RoadSegment into the bottom road segments array. */
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
   // If this TouchManager should process a swipe, then check the game's current state.
   if (this.shouldProcessSwipe === CONST_TRUE) {
      if (deersim.state === "main") { // If the player is viewing the main menu...
         // Calculation the duration of the swipe, in milliseconds.
         var swipeDuration = 
            ((deersim.touchManager.lastTouchEndedTS - deersim.touchManager.lastTouchStartedTS)
               / CONST_MS_PER_SEC);

         // Define a minimum and maximum swipe duration, in seconds.
         var minSwipeDuration = 0.1;
         var maxSwipeDuration = 1;

         /* Check to see whether the swipe being processing was in between
            the minimum and maximum swipe durations. If it was, continue
            processing the swipe. If not, abort processing the swipe.      */
         var shouldChangeMenu = CONST_FALSE;
         if ((swipeDuration > minSwipeDuration) && (swipeDuration < maxSwipeDuration)) {
            shouldChangeMenu = CONST_TRUE;
         }

         if (shouldChangeMenu === CONST_TRUE) {
            /* Calculate the swipe rise, or the vertical distance that the swipe
               covered. Because the y-axis is top-to-bottom, the swipe rise will be
               negative for an upward swipe, and positive for a downward swipe.     */
            var swipeRise =
               (deersim.touchManager.lastTouchEnded.pageY - deersim.touchManager.lastTouchStarted.pageY);

            /* Initialize a variable to use as a switch indicating desired
               direction, plus a pixel threshold for the swipe rise. If
               the swipe rise is significant, assign it a direction.       */
            var direction = 0;
            var threshold = 100;
            if (swipeRise < -threshold)
               direction = 1;
            else if (swipeRise > threshold)
               direction = -1;

            if (direction === 1) {
               /* If the main menu cursor's key counter has elapsed,
                  And the main menu cursor is pointed to an option
                  underneath the uppermost option, then toggle the cursor up one. */
               if ((deersim.mainMenuCursor.keyCounter === 0) && (deersim.mainMenuCursor.menuItem > 1)) {
                  toggleMainMenuCursor(1);
               }
            }
            else if (direction === -1) {
               /* If the main menu cursor's key counter has elapsed,
                  And the main menu cursor is pointed to an option
                  above the bottom option, then toggle the cursor down one. */
               if ((deersim.mainMenuCursor.keyCounter === 0) && (deersim.mainMenuCursor.menuItem < 3)) {
                  toggleMainMenuCursor(-1);
               }
            }
         }
      }

      this.shouldProcessSwipe = CONST_FALSE; // Reset this flag for future use.
   }
}; // TouchManager.update()

// ---- End of function declarations. ----