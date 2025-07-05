/*-----------------------------------------------------*\
 | File: deersim/projectiles.js                        |
 | Purpose: Defines game objects which are projectiles |
 | fired by other game objects. Projectiles generally  |
 | do damage and exist in play for a short time.       |
\*-----------------------------------------------------*/

// ---- Start of object declarations. ----

/*-------------------------------------------------------------------------------*\
 | Defines the LightningBolt, a short burst of electricity emitted by the active |
 | Deer carrying the lightning powerup when the player presses the fire button.  |
 | @param int x    -- the x position of this LightningBolt.                      |
 | @param int lane -- the lane of the road this LightningBolt should occupy.     |
\*-------------------------------------------------------------------------------*/
function LightningBolt(x, lane) {
   this.x = x; // Assign this LightningBolt's x position.
   
   /* Assign this LightningBolt's y position based on its lane. |
   |  Subtract an extra 64 pixels due to the increased          |
   |  size of the LightningBolt (128x128 as opposed to 64x64).  */
   this.y = CONST_LANE_0_BASE - (CONST_LANE_HEIGHT * lane) - 64;
   
   this.lane = lane; // Assign this LightningBolt's lane.
   
   // Create an animation which will be used to display this LightningBolt.
   this.animation = new AnimationBlock(this.x, this.y, 128, 3, "LightningBolt");
};

// ---- End of object declarations. ----

// ---- Start of function declarations. ----

/*---------------------------*\
 | Draws this LightningBolt. |
\*---------------------------*/
LightningBolt.prototype.draw = function() {
   this.animation.draw(); // Draw this LightningBolt's AnimationBlock.
};

/*-----------------------------*\
 | Updates this LightningBolt. |
\*-----------------------------*/
LightningBolt.prototype.update = function() {
   // Update this LightningBolt's x position, based on the active deer's x position.
   // this.x = deer.x + CONST_DEER_WIDTH;
   this.animation.x = deer.x + CONST_DEER_WIDTH;
   
   // Update this LightningBolt's y position, based on the active deer's y position.
   // this.y = deer.y + 35;
   this.animation.y = deer.y + 35 - 64;
   
   // Update this LightningBolt's lane, based on the active deer's lane.
   this.lane = deer.lane;
   
   this.animation.update(); // Update this LightningBolt's AnimationBlock.
};

// ---- End of function declarations. ----