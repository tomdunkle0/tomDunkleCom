/*------------------------------------------------------*\
 | File: deersim/deer.js                                |
 | Defines the Deer, which is controlled by the player. |
\*------------------------------------------------------*/

function Deer() {
   this.angle    = 0;
   this.x        = -64;
   this.dim      = CONST_DIM_MEDIUM;
   this.lane     = 2;
   this.speed    = 3;
   this.state    = "initializing";
   this.powerup  = "none";
   this.clothing = "none";

   this.y = CONST_LANE_0_BASE - (CONST_LANE_HEIGHT * this.lane);

   this.yVelocity = -7;

   this.powerupCounter = 0;

   this.rotationCounter = 0;
   this.angleOfRotation = 0;

   this.imageHandle = "";

   // this.barrierCheckerCtrLeft = 0;
   this.barrierCheckerCounter = 0;
   this.segmentCheckerCounter = 0;

   this.deerShouldStopMoving    = CONST_FALSE;
   this.shouldDecrementDeerLane = CONST_FALSE;
   this.shouldIncrementDeerLane = CONST_FALSE;
};

/*---------------------------*\
 | Draws this Deer onscreen. |
\*---------------------------*/
Deer.prototype.draw = function() {
   this.imageHandle = "";

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

   var deerFrameNumber = Math.floor(((animationTimer / 5) + 1)).toString();

   this.imageHandle = this.imageHandle.concat(deerFrameNumber);

   var i = this.rotationCounter / 3;
   i = Math.ceil(i);
   if (i == 0)
      i = 12;
   this.angleOfRotation = (i - 1) * 30;

   if (this.state === "dying") {
      this.imageHandle = this.imageHandle.concat("_CC_");
      this.imageHandle = this.imageHandle.concat(this.angleOfRotation);
   }
   else
      this.imageHandle = this.imageHandle.concat("_CC_0");

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
      arrowKeyCounter = 0;

      for (var key in keysDown) {
         var value = Number(key);

         switch (value) {
            case 65:
               if (this.speed > -4) {
                  this.speed -= 0.2;
               }

               this.deerShouldStopMoving = CONST_TRUE;

               if (deersim.roadManager.idleFlags[this.lane - 1] === CONST_TRUE) {
                  this.deerShouldStopMoving = CONST_FALSE;
                  arrowKeyCounter++;
                  break;
               }

               if (this.barrierCheckerCounter === 0) {
                  for (var roadSegment in deersim.roadManager.roadSegments) {
                     if (deersim.roadManager.roadSegments[roadSegment].lane === (this.lane - 1)) {
                        if ((deersim.roadManager.roadSegments[roadSegment].x <= (this.x - 4))
                        && (deersim.roadManager.roadSegments[roadSegment].x
                              >= ((this.x - 4) - (this.dim * 2)))) {
                           this.deerShouldStopMoving = CONST_FALSE;
                        }
                     }

                     if (deersim.debuggerEnabled === CONST_TRUE)
                        deersim.liveDebugger.segmentCounter++;
                  }

                  if (this.deerShouldStopMoving === CONST_TRUE)
                     this.speed = 0;

                  this.barrierCheckerCounter++;
               }

               arrowKeyCounter++;
               break;
            case 87:
               this.switchLane(1);
               break;
            case 68:
               if (this.speed < 4) {
                  this.speed += 0.2;
               }

               arrowKeyCounter++;

               break;
            case 83:
               this.switchLane(-1);
               break;
         }
      }

      if (arrowKeyCounter === 0) {
         if (this.speed < -0.2) {
            this.speed += 0.2;
         }
         else if(this.speed > 0.2) {
            this.speed -= 0.2;
         }
         else {
            this.speed = 0;
         }
      }

      this.x += this.speed;
      // #TODO -- documentation
      // this.x += (this.speed * (dt / 16.67));

      if (this.x >= 1216) {
         this.x     = 1216;
         this.speed = 0;
      }
      if (this.x <= 0) {
         this.x     = 0;
         this.speed = 0;
      }
   }
};

/*--------------------------------------------------------------*\
 | Changes this Deer's state to the corresponding powerup state |
 | when this Deer picks up (i.e. collides with) a powerup.      |
 | Additionally, this Deer's powerup counter is reset to zero.  |
\*--------------------------------------------------------------*/
Deer.prototype.pickupPowerup = function(powerup) {
   this.powerup = powerup;
   this.powerupCounter = 0;
};

/*--------------------*\
 | Updates this Deer. |
\*--------------------*/
// Deer.prototype.update = function() {
Deer.prototype.update = function(dt) {
   if (this.state === "active") {
      if (this.segmentCheckerCounter === 0) {
         for (var roadSegment in deersim.roadManager.roadSegments) {
            if (deersim.roadManager.roadSegments[roadSegment].type === "closingBottomLane")
               if (deersim.roadManager.roadSegments[roadSegment].lane === (this.lane - 1))
                  if (deersim.roadManager.roadSegments[roadSegment].x <= this.x - (this.dim / 2))
                     this.switchLane(1);

            if (deersim.roadManager.roadSegments[roadSegment].type === "closingTopLane")
               if (deersim.roadManager.roadSegments[roadSegment].lane === (this.lane - 1))
                  if (deersim.roadManager.roadSegments[roadSegment].x <= this.x - (this.dim / 2))
                     this.switchLane(-1);

            if (deersim.debuggerEnabled === CONST_TRUE)
               deersim.liveDebugger.segmentCounter++;
         }

         this.segmentCheckerCounter++;
      }
   }

   if (this.state === "initializing") {
      if (this.x < 100) {
         this.x += this.speed;
         // #TODO -- documentation
         this.x += (this.speed * (dt / 1000));
      }

      if (this.x >= 97) {
         this.state = "active";
         this.speed = 0;
      }
   }

   if (this.state === "dying") {
      this.x -= 5;
      this.y += this.yVelocity;
      this.yVelocity += 0.1;
   }

   if ((this.powerup === "lightning")
    || (this.powerup === "irradiated")) {
      this.powerupCounter++;

      if (this.powerupCounter >= CONST_POWERUP_LEN_FRAMES) {
         this.powerup = "none";
      }
   }

   this.rotationCounter++;
   if (this.rotationCounter > 35) {
      this.rotationCounter = 0;
   }

   if ((this.barrierCheckerCounter > 0)
    && (this.barrierCheckerCounter < 11))
      this.barrierCheckerCounter++;
   if (this.barrierCheckerCounter >= 11)
      this.barrierCheckerCounter = 0;

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
   if (keyTimer !== 0) {
      return;
   }

   if (direction === 1) {
      for (var roadSegment in deersim.roadManager.roadSegments) {
         if (deersim.roadManager.roadSegments[roadSegment].lane === this.lane)
            if ((deersim.roadManager.roadSegments[roadSegment].x <= this.x)
             && (deersim.roadManager.roadSegments[roadSegment].x >= (this.x - (this.dim * 2))))
               this.shouldIncrementDeerLane = CONST_TRUE;

         if (deersim.roadManager.idleFlags[this.lane] === CONST_TRUE) {
            this.shouldIncrementDeerLane = CONST_TRUE;
         }

         if (deersim.debuggerEnabled === CONST_TRUE)
            deersim.liveDebugger.segmentCounter++;
      }

      if (this.shouldIncrementDeerLane === CONST_TRUE) {
         this.lane++;
         this.shouldIncrementDeerLane = CONST_FALSE;
      }
   }

   if (direction === -1) {
      for (var roadSegment in deersim.roadManager.roadSegments) {
         if (deersim.roadManager.roadSegments[roadSegment].lane === (this.lane - 2))
            if ((deersim.roadManager.roadSegments[roadSegment].x <= this.x)
             && (deersim.roadManager.roadSegments[roadSegment].x >= (this.x - (this.dim * 2))))
               this.shouldDecrementDeerLane = CONST_TRUE;

         if (deersim.roadManager.idleFlags[this.lane - 2] === CONST_TRUE) {
            this.shouldDecrementDeerLane = CONST_TRUE;
         }

         if (deersim.debuggerEnabled === CONST_TRUE)
            deersim.liveDebugger.segmentCounter++;
      }

      if (this.shouldDecrementDeerLane === CONST_TRUE) {
         this.lane--;
         this.shouldDecrementDeerLane = CONST_FALSE;
      }
   }

   this.y = CONST_LANE_0_BASE - (CONST_LANE_HEIGHT * this.lane);

   keyTimer++;
};
