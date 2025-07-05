/*------------------------------------------------------*\
 | File: deersim/deer.js                                |
 | Defines the Deer, which is controlled by the player. |
\*------------------------------------------------------*/

function Deer() {
   this.angle    = 0;                // Assign this Deer's angle of rotation.
   this.x        = -64;              // Assign this Deer's x position.
   this.dim      = CONST_DIM_MEDIUM; // Assign this Deer's dimension.
   this.lane     = 2;                // This deer starts the game in lane 2.
   this.speed    = 3;                // The speed this Deer moves during initialization.
   this.state    = "initializing";   // Set this Deer's state to initializing.
   this.powerup  = "none";           // Assign this Deer no powerup by default.
   this.clothing = "none";           // Assign this Deer no clothing by default.

   // Assign new position based on new lane.
   this.y = CONST_LANE_0_BASE - (CONST_LANE_HEIGHT * this.lane);

   // Initialize this Deer's y velocity, used when the Deer dies.
   this.yVelocity = -7;
   
   // Initialize a counter to control how long powerup states last.
   this.powerupCounter = 0;
   
   this.rotationCounter = 0; // Initialize a counter to track this Deer's angle when it dies.
   this.angleOfRotation = 0;  // Tracks this Deer's angle when it dies.
   
   this.imageHandle = ""; // Initialize an image handle variable for this Deer.

   // Initialize counters used in management of this Deer's movement.
   // this.barrierCheckerCtrLeft = 0;
   this.barrierCheckerCounter = 0;
   this.segmentCheckerCounter = 0;

   // Initialize boolean values used in management of this Deer's movement.
   this.deerShouldStopMoving    = CONST_FALSE;
   this.shouldDecrementDeerLane = CONST_FALSE;
   this.shouldIncrementDeerLane = CONST_FALSE;
};

/*---------------------------*\
 | Draws this Deer onscreen. |
\*---------------------------*/
Deer.prototype.draw = function() {
   this.imageHandle = "";
   
   // Create the handle to identify the correct image to display.
   // Proper precedence is: state > powerup > clothing.
   if (this.powerup === "irradiated") {
      if (this.clothing === "bag")
         this.imageHandle = "BagIrradiatedDeer";
      else
         this.imageHandle = "IrradiatedDeer";
   }
   else if (this.powerup === "lightning")
      this.imageHandle = "LightningDeer";
   else {
      if (this.clothing === "bag")
         this.imageHandle = "BagNoneDeer";
      else
         this.imageHandle = "DeerImage";
   } // #TODO -- return an error image if none of the above conditions evaluate true.
   
   // Determine the Deer's current frame number based on its animation timer.
   var deerFrameNumber = Math.floor(((animationTimer / 5) + 1)).toString();
   
   // Concatenate the frame number to the image handle.
   this.imageHandle = this.imageHandle.concat(deerFrameNumber);
   
   // Use i to determine an angle of rotation based on this Deer's rotation counter.
   var i = this.rotationCounter / 3;
   i = Math.ceil(i);
   if (i == 0) // In the case where rotationCounter = 0, i = 0 which is undesirable.
      i = 12;  // Setting i to 12 in this case yields an equal distribution of angles.
   this.angleOfRotation = (i - 1) * 30;
   
   // If the Deer is dying, concatenate its angle of rotation to its image handle...
   if (this.state === "dying") {
      this.imageHandle = this.imageHandle.concat("_CC_");
      this.imageHandle = this.imageHandle.concat(this.angleOfRotation);
   }
   else // ...otherwise, just concatenate 0 to indicate no rotation.
      this.imageHandle = this.imageHandle.concat("_CC_0");
   
   // Display this Deer's current frame.
   deersim.canvasContext.drawImage(document.getElementById(this.imageHandle), this.x, this.y);
};

/*------------------------------------------------------------*\
 | Controls the switching of this Deer between adjacent       |
 | lanes and its horizontal movement based on keyboard input. |
\*------------------------------------------------------------*/
// Deer.prototype.getInput = function() {
// #TODO -- documentation
Deer.prototype.getInput = function(dt) {
   if ((this.state === "active")
    || (this.state === "lightning")
    || (this.state === "irradiated")) {
      arrowKeyCounter = 0; // Reset the arrow key counter.

      // Iterate through each key which is currently pressed.
      for (var key in keysDown) {
         var value = Number(key); // Assign numeric wrapper of key to variable 'value'.

         switch (value) {
            case 65:                  // Key pressed is left arrow key.
               if (this.speed > -4) { // If this Deer's speed is greater than the minimum,
                  this.speed -= 0.2;  // Then slightly decrement its speed.
               }

               // Reset this variable before testing the condition.
               this.deerShouldStopMoving = CONST_TRUE;

               /* If this Deer is in an idle lane, then it should be able
                  to move left--therefore, we can skip the upcoming check
                  for a RoadSegment to this Deer's immediate left.        */
               if (deersim.roadManager.idleFlags[this.lane - 1] === CONST_TRUE) {
                  this.deerShouldStopMoving = CONST_FALSE;
                  arrowKeyCounter++;
                  break;
               }

               /* If the barrier checker counter has elapsed and reset, then cycle through
                  every active road segment and make sure that at least one segment matches
                  the following criteria:
                  
                  1. The segment and this Deer occupy the same lane.
                  2. The segment is slightly to the left of this Deer. */
               if (this.barrierCheckerCounter === 0) {
                  for (var roadSegment in deersim.roadManager.roadSegments) {
                     if (deersim.roadManager.roadSegments[roadSegment].lane === (this.lane - 1)) {
                        if ((deersim.roadManager.roadSegments[roadSegment].x <= (this.x - 4))
                        && (deersim.roadManager.roadSegments[roadSegment].x
                              >= ((this.x - 4) - (this.dim * 2)))) {
                           /* If no segments match the above criteria, then
                              raise a flag to have this Deer stop moving.   */
                           this.deerShouldStopMoving = CONST_FALSE;
                        }
                     }

                     /* If the debugger is enabled, keep track
                        of how many road segments are scanned. */
                     if (deersim.debuggerEnabled === CONST_TRUE)
                        deersim.liveDebugger.segmentCounter++;
                  }

                  // If we decided that this Deer should stop moving, set its speed to zero.
                  if (this.deerShouldStopMoving === CONST_TRUE)
                     this.speed = 0;

                  this.barrierCheckerCounter++; // Start the barrier checker counter.
               }
            
               arrowKeyCounter++; // Increment the arrow key counter.
               break;
            case 87:               // Key pressed is up arrow key.
               this.switchLane(1); // Move this Deer up one lane.
               break;
            case 68:                 // Key pressed is right arrow key.
               if (this.speed < 4) { // If this Deer's speed is less than the maximum,
                  this.speed += 0.2; // Then slightly increment its speed.
               }
            
               arrowKeyCounter++; // Increment the arrow key counter.
            
               break;
            case 83:                // Key pressed is down arrow key.
               this.switchLane(-1); // Move this Deer down one lane.
               break;
         }
      }

      if (arrowKeyCounter === 0) { // If no arrow keys are currently pressed,
         if (this.speed < -0.2) {  // If this Deer's speed is less than -0.2,
            this.speed += 0.2;     // Then slightly increment its speed.
         }
         else if(this.speed > 0.2) { // Else if this Deer's speed is greater than 0.2,
            this.speed -= 0.2;       // Then slightly decrement its speed.
         }
         else {
            this.speed = 0; // Else set this Deer's speed to 0.
         }
      }

      // Adjust this Deer's x position by a factor of its speed.
      this.x += this.speed;
      // #TODO -- documentation
      // this.x += (this.speed * (dt / 16.67));

      // Correct this Deer's x position in case it overshoots the level boundary.
      if (this.x >= 1216) { // If this Deer's x position is greater than maximum,
         this.x     = 1216; // Then reset this Deer's x position to maximum.
         this.speed = 0;    // And reset this Deer's speed to zero.
      }
      if (this.x <= 0) { // If this Deer's x position is less than minimum,
         this.x     = 0; // Then reset this Deer's x position to minimum.
         this.speed = 0; // And reset this Deer's speed to zero.
      }
   }
};

/*--------------------------------------------------------------*\
 | Changes this Deer's state to the corresponding powerup state |
 | when this Deer picks up (i.e. collides with) a powerup.      |
 | Additionally, this Deer's powerup counter is reset to zero.  |
\*--------------------------------------------------------------*/
Deer.prototype.pickupPowerup = function(powerup) {
   this.powerup = powerup;  // Assign the new powerup to this Deer.
   this.powerupCounter = 0; // Reset this Deer's powerup counter to 0.
};

/*--------------------*\
 | Updates this Deer. |
\*--------------------*/
// Deer.prototype.update = function() {
Deer.prototype.update = function(dt) {
   if (this.state === "active") { // If this Deer is currently active...
      /* If the segment checker counter has elapsed and
         reset, then cycle through every active road segment. */
      if (this.segmentCheckerCounter === 0) {
         for (var roadSegment in deersim.roadManager.roadSegments) {
            /* If this Deer is on top of a closing segment of the bottom lane, and
               reaches the boundary, then automatically move this Deer up one lane. */
            if (deersim.roadManager.roadSegments[roadSegment].type === "closingBottomLane")
               if (deersim.roadManager.roadSegments[roadSegment].lane === (this.lane - 1))
                  if (deersim.roadManager.roadSegments[roadSegment].x <= this.x - (this.dim / 2))
                     this.switchLane(1);

            /* If this Deer is on top of a closing segment of the top lane, and
               reaches the boundary, then automatically move this Deer down one lane. */
            if (deersim.roadManager.roadSegments[roadSegment].type === "closingTopLane")
               if (deersim.roadManager.roadSegments[roadSegment].lane === (this.lane - 1))
                  if (deersim.roadManager.roadSegments[roadSegment].x <= this.x - (this.dim / 2))
                     this.switchLane(-1);

            // If the debugger is enabled, keep track of how many road segments are scanned.
            if (deersim.debuggerEnabled === CONST_TRUE)
               deersim.liveDebugger.segmentCounter++;
         }

         this.segmentCheckerCounter++; // Start the segment checker counter.
      }
   }

   if (this.state === "initializing") { // If this Deer is initializing...
      if (this.x < 100) {      // ...and has not yet reached the active starting point,
         this.x += this.speed; // Then adjust this Deer's x position by a factor of its speed.
         // #TODO -- documentation
         this.x += (this.speed * (dt / 1000));
      }
      
      if (this.x >= 97) {       // ...and has reached the active starting point,
         this.state = "active"; // Then set this Deer's state to active.
         this.speed = 0;        // Set this Deer's speed to zero for player control.
      }
   }
   
   if (this.state === "dying") { // If this Deer is dying,
      this.x -= 5;               // Significantly decrement this Deer's x position.
      this.y += this.yVelocity;  // Increment this Deer's y position by its y velocity.
      this.yVelocity += 0.1;     // Slightly increment this Deer's y velocity.
   }
   
   if ((this.powerup === "lightning")     // If this Deer is carrying the lightning powerup,
    || (this.powerup === "irradiated")) { // Or if this Deer is irradiated,
      this.powerupCounter++;            // Then increment this Deer's powerup counter.
      
      // If this Deer has been powered up for 10 seconds...
      if (this.powerupCounter >= CONST_POWERUP_LEN_FRAMES) {
         this.powerup = "none"; // ...then reset this Deer to no powerup.
      }
   }
   
   // Increment this Deer's rotation counter, and reset the counter if it has elapsed.
   this.rotationCounter++;
   if (this.rotationCounter > 35) {
      this.rotationCounter = 0;
   }

   /* If the barrier checker counter has started, increment it.
      If the barrier checker counter has elapsed, reset it to zero. */
   if ((this.barrierCheckerCounter > 0)
    && (this.barrierCheckerCounter < 11))
      this.barrierCheckerCounter++;
   if (this.barrierCheckerCounter >= 11)
      this.barrierCheckerCounter = 0;

   /* If the segment checker counter has started, increment it.
      If the segment checker counter has elapsed, reset it to zero. */
   if ((this.segmentCheckerCounter > 0)
    && (this.segmentCheckerCounter < 11))
      this.segmentCheckerCounter++;
   if (this.segmentCheckerCounter >= 11)
      this.segmentCheckerCounter = 0;
};

/*--------------------------------------------------------------*\
 | Given a requested direction, switches the active Deer        |
 | to one of the adjacent lanes.                                |
 | @param direction -- The requested direction.                 |
 |                     1 represents up, and -1 represents down. |
\*--------------------------------------------------------------*/
Deer.prototype.switchLane = function(direction) {
   if (keyTimer !== 0) { // If the key timer has already started,
      return;            // Do nothing.
   }

   // If the requested direction is up, cycle through every active road segment.
   if (direction === 1) {
      for (var roadSegment in deersim.roadManager.roadSegments) {
         /* If there is a road segment directly above this Deer,
            then give the okay for the Deer to move upwards.     */
         if (deersim.roadManager.roadSegments[roadSegment].lane === this.lane)
            if ((deersim.roadManager.roadSegments[roadSegment].x <= this.x)
             && (deersim.roadManager.roadSegments[roadSegment].x >= (this.x - (this.dim * 2))))
               this.shouldIncrementDeerLane = CONST_TRUE;

         /* If the lane directly above this Deer is idle,
            then give the okay for the Deer to move upwards. */
         if (deersim.roadManager.idleFlags[this.lane] === CONST_TRUE) {
            this.shouldIncrementDeerLane = CONST_TRUE;
         }

         // If the debugger is enabled, keep track of how many road segments are scanned.
         if (deersim.debuggerEnabled === CONST_TRUE)
            deersim.liveDebugger.segmentCounter++;
      }

      // If it's okay to move this Deer upward, then increment its lane and reset the flag.
      if (this.shouldIncrementDeerLane === CONST_TRUE) {
         this.lane++;
         this.shouldIncrementDeerLane = CONST_FALSE;
      }
   }

   // If the requested direction is up, cycle through every active road segment.
   if (direction === -1) {
      for (var roadSegment in deersim.roadManager.roadSegments) {
         /* If there is a road segment directly below this Deer,
            then give the okay for the Deer to move downwards.   */
         if (deersim.roadManager.roadSegments[roadSegment].lane === (this.lane - 2))
            if ((deersim.roadManager.roadSegments[roadSegment].x <= this.x)
             && (deersim.roadManager.roadSegments[roadSegment].x >= (this.x - (this.dim * 2))))
               this.shouldDecrementDeerLane = CONST_TRUE;

         /* If the lane directly below this Deer is idle,
            then give the okay for the Deer to move downwards. */
         if (deersim.roadManager.idleFlags[this.lane - 2] === CONST_TRUE) {
            this.shouldDecrementDeerLane = CONST_TRUE;
         }

         // If the debugger is enabled, keep track of how many road segments are scanned.
         if (deersim.debuggerEnabled === CONST_TRUE)
            deersim.liveDebugger.segmentCounter++;
      }

      // If it's okay to move this Deer downward, then decrement its lane and reset the flag.
      if (this.shouldDecrementDeerLane === CONST_TRUE) {
         this.lane--;
         this.shouldDecrementDeerLane = CONST_FALSE;
      }
   }

   // Assign new position based on new lane.
   this.y = CONST_LANE_0_BASE - (CONST_LANE_HEIGHT * this.lane);
   
   // Start the key timer.
   keyTimer++;
};