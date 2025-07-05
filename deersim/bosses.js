/*-----------------------------------------------------------------*\
 | File: deersim/bosses.js                                         |
 | Purpose: Defines bosses which the player must fight in certain  |
 | scenarios. Different bosses occupy different game environments. |
\*-----------------------------------------------------------------*/

// ---- Start of object declarations. ----

/*-----------------------------------------------------------*\
 | Defines the Coop, the boss for I-84. Coop drives a 1920's |
 | Model-T Ford, screams loudly at the active deer, and      |
 | ultimately meets his downfall if his car's suspension     |
 | gives out to potholes and speed bumps on I-84.            |
\*-----------------------------------------------------------*/
function Coop() {
   this.lane       = 1;   // Assign the default lane to this Coop.
   this.speed      = 3;   // Assign the default speed to this Coop.
   this.hp         = 200; // Assign the default hit points to this Coop.
   this.hitCounter = 0;   // Used to limit frequency with which this Coop is hit.

   // Assign constant max HP referenced by other objects, e.g. Bar.
   const maxHP = 200;
   this.maxHP = maxHP;
   // #TODO -- I haven't tested, but it's very likely a client of
   // the Coop object could still set Coop.maxHP to something besides
   // 200, which I don't ideally want to be possible. Experiment
   // with this, and figure out whether there's a way to disallow it.

   this.x = -100; // Assign this Coop an x position offscreen to the left.

   /* Assign this Coop's y position based on its lane. |
   |  Subtract an extra 64 pixels due to the increased |
   |  size of the Coop (128x128 as opposed to 64x64).  */
   this.y = CONST_LANE_0_BASE - (CONST_LANE_HEIGHT * this.lane) - 64;

   this.yVelocity       = -7;         // Initialze a y velocity in case this Vehicle dies.
   this.imageHandle     = "Coop";     // Image handle variable for this Coop.
   this.state           = "preentry"; // Set this Coop to the pre-entry state.
   this.laneCounter     = 0;          // Initialize a counter for lane changes.
   this.collisionWidth  = 73;         // Visual width of Coop; used in collision detection.
   this.rotationCounter = 0;          // Controls this Coop's angle when it dies.
   this.angleOfRotation = 0;          // Tracks this Coop's angle when it dies.

   this.HPBar = new Bar(880, 699); // Create a hit point bar for this Coop.
   this.HPBar.function = "hp";         // Flag the bar as an HP bar--not an XP bar.
};

// ---- End of object declarations. ----

// ---- Start of function declarations. ----

/*---------------------------------------------------------------------*\
 | Changes this Coop's lane by 1, depending on the parameter supplied. |
 | @param int direction -- represents up (1) or down (-1).             |
\*---------------------------------------------------------------------*/
Coop.prototype.changeLane = function(direction) {
   this.lane += direction; // Set this Coop's lane accordingly.

   /* Assign this Coop's y position based on its lane. |
   |  Subtract an extra 64 pixels due to the increased |
   |  size of the Coop (128x128 as opposed to 64x64).  */
   this.y = CONST_LANE_0_BASE - (CONST_LANE_HEIGHT * this.lane) - 64;

   this.laneCounter++; // Start this Coop's lane counter.
};

/*------------------*\
 | Draws this Coop. |
\*------------------*/
Coop.prototype.draw = function() {
   this.imageHandle = "Coop"; // Start with a base image handle.

   // Use i to determine an angle of rotation based on this Coop's rotation counter.
   var i = this.rotationCounter / 3;
   i = Math.ceil(i);
   if (i == 0) // In the case where rotationCounter = 0, i = 0 which is undesirable.
      i = 12;  // Setting i to 12 in this case yields an equal distribution of angles.
   this.angleOfRotation = (i - 1) * 30;

   // If this Coop is dying, concatenate its angle of rotation to its image handle...
   if (this.state === "dying") {
      this.imageHandle = this.imageHandle.concat("_C_");
      this.imageHandle = this.imageHandle.concat(this.angleOfRotation);
   }

   // Display this Coop's current frame.
   deersim.canvasContext.drawImage(document.getElementById(this.imageHandle), this.x, this.y);

   /* canvasContext.drawImage(document.getElementById("Coop"),
                           this.x, this.y); // Draw this Coop's image. */

   this.HPBar.draw(); // Draw this Coop's hit point bar.
};

/*--------------------*\
 | Updates this Coop. |
\*--------------------*/
Coop.prototype.update = function() {
   if (this.state === "dying") { // If Coop has been killed...
      this.x -= 1;               // ...then move him offscreen.
      this.y += this.yVelocity;  // Propel this Coop up or down, as...
      this.yVelocity += 0.1;     // ...its y velocity continually increases.
   }

   if (this.state === "preentry") {
      // Coop enters the screen 14 seconds into the song, for humor's sake.
      // This is the moment that the fast portion of the song begins.
      if (deersim.musicManager.backgroundTrack.currentTime > 14) {
         this.state = "entry";
      }
   }

   if ((this.state === "entry") // If this Coop is currently entering the screen...
    && (this.x > 75))           // ...and is farther right than 75 pixels...
      this.state = "slowing";   // ...then set this Coop's state to slowing.

   if ((this.state === "slowing") // If this Coop is currently slowing...
    && (this.speed > 0.5))        // ...and its speed is greater than 0.5px/frame...
      this.speed -= 0.05;         // ...then perform a miniscule decrease in speed.

   if ((this.state === "slowing")       // If this Coop is currently slowing...
    && (Math.abs(this.speed) <= 0.5)) { // ...and its speed is less than +/-0.5px/frame...
      this.speed = 0;                   // ...then set it to stop moving.
      this.state = "fighting";          // ...and change its state to 'fighting'.
   }

   if (this.state === "fighting") {
      if ((this.lane < this.target.lane) // If this Coop is lower than the active deer...
       && (this.laneCounter === 0))      // ...and its lane counter has elapsed...
         this.changeLane(1);             // ...then move this Coop up one lane.
      if ((this.lane > this.target.lane) // If this Coop is higher than the active deer...
       && (this.laneCounter === 0))      // ...and its lane counter has elapsed...
         this.changeLane(-1);            // ...then move this Coop down one lane.

      if ((this.x < deer.x)   // If this Coop is to the left of the active deer...
       && (this.speed < 2)) { // ...and this Coop's speed is less than maximum...
         this.speed += 0.05;  // ... then slightly increase this Coop's speed.
      }
      else if ((this.x > deer.x)    // If this Coop is to the right of the active deer...
            && (this.speed > -2)) { // ...and this Coop's speed is greater than minimum...
         this.speed -= 0.05;        // ... then slightly decrease this Coop's speed.
      }
   }

   for (projectile in deersim.projectiles) { // For every projectile in play...
      if ((hasCollisionOccurred(deersim.projectiles[projectile], this))
       && (this.hitCounter === 0)) { // If a collision with this Coop has occurred...
         boss.hp -= 5;               // ...then decrement its hit points...
         boss.hitCounter++;          // ...and restart its hit counter.
      }
   }

   if ((this.laneCounter > 0)   // If this Coop's lane counter has started...
    && (this.laneCounter < 30)) // ...and it has not yet elapsed...
      this.laneCounter++;       // ...then increment this Coop's lane counter.
   if (this.laneCounter >= 30)  // If this Coop's lane counter has elapsed...
      this.laneCounter = 0;     // ...then reset this Coop's lane counter.

   if ((this.hitCounter > 0)   // If this Coop's hit counter has started...
    && (this.hitCounter < 30)) // ...and it has not yet elapsed...
      this.hitCounter++;       // ...then increment this Coop's hit counter.
   if (this.hitCounter >= 30)  // If this Coop's hit counter has elapsed...
      this.hitCounter = 0;     // ...then reset this Coop's hit counter.

   // Increment this Coop's rotation counter, and reset the counter if it has elapsed.
   this.rotationCounter++;
   if (this.rotationCounter > 35)
      this.rotationCounter = 0;

   if (this.state === "exiting") // If this Coop is exiting the screen...
      this.speed = -2;           // ...then set it to move left at a constant speed.

   if (this.state !== "preentry") // If this Coop has entered the screen...
      this.x += this.speed;       // ...then move this Coop, proportional to its speed.

   this.HPBar.update(); // Update this Coop's hit point bar.
};