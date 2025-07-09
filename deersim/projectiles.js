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
   this.x = x;

   this.y = CONST_LANE_0_BASE - (CONST_LANE_HEIGHT * lane) - 64;

   this.lane = lane;

   this.animation = new AnimationBlock(this.x, this.y, 128, 3, "LightningBolt");
};

// ---- End of object declarations. ----

// ---- Start of function declarations. ----

/*---------------------------*\
 | Draws this LightningBolt. |
\*---------------------------*/
LightningBolt.prototype.draw = function() {
   this.animation.draw();
};

/*-----------------------------*\
 | Updates this LightningBolt. |
\*-----------------------------*/
LightningBolt.prototype.update = function() {
   // this.x = deer.x + CONST_DEER_WIDTH;
   this.animation.x = deer.x + CONST_DEER_WIDTH;

   // this.y = deer.y + 35;
   this.animation.y = deer.y + 35 - 64;

   this.lane = deer.lane;

   this.animation.update();
};

// ---- End of function declarations. ----
