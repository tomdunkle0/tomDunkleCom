/*----------------------------------------------------------------*\
 | File: deersim/powerups.js                                      |
 | Purpose: Defines classes and functions for the game's powerup  |
 | objects. Powerups enhance the capabilities of the active deer. |
\*----------------------------------------------------------------*/

// ---- Start of object declarations. ----

/*--------------------------------------------------------------------*\
 | Defines the Irradiation, a powerup which irradiates the            |
 | active Deer, making it temporarily invincible to car collisions.   |
 | @param int lane -- the lane in which to generate this Irradiation. |
\*--------------------------------------------------------------------*/
function Irradiation(lane) {
   this.d     = 128;         // Assign this Irradiation's dimension.
   this.lane  = lane;        // Assign this Irradiation's lane.
   this.speed = 3;           // Assign this Irradiation a default speed of 3.
   this.collisionWidth = 89; // Assign this Irradiation's collision width.

   // Assign this Irradiation's x position as adjacent to the canvas boundary.
   this.x = deersim.canvas.width - this.d;

   // Assign this Irradiation's y position based on its lane.
   this.y = (CONST_LANE_0_BASE - 15) - (CONST_LANE_HEIGHT * (this.lane + 1));
   
   this.index = 0; // Assign position in the game's sound effects array for "VoxCometSoundCheck".
}

/*----------------------------------------------------------------------*\
 | Defines the LightningRobe, a powerup which gives the                 |
 | active Deer the ability to shoot lightning, temporarily.             |
 | @param int lane -- the lane in which to generate this LightningRobe. |
\*----------------------------------------------------------------------*/
function LightningRobe(lane) {
   this.d     = 64;          // Assign this LightningRobe's dimension.
   this.lane  = lane;        // Assign this LightningRobe's lane.
   this.speed = 3;           // Assign this LightningRobe a default speed of 3.
   this.collisionWidth = 42; // Assign this LightningRobe's collision width.

   // Assign this LightningRobe's x position as adjacent to the canvas boundary.
   this.x = deersim.canvas.width - this.d;

   // Assign this LightningRobe's y position based on its lane.
   this.y = CONST_LANE_0_BASE - (CONST_LANE_HEIGHT * this.lane);
   
   this.index = 1; // Assign position in the game's sound effects array for "DruidChant".
}

// ---- End of object declarations. ----

// ---- Start of function declarations. ----

/*-------------------------*\
 | Draws this Irradiation. |
\*-------------------------*/
Irradiation.prototype.draw = function() {
   // Draw some barrels and toxic waste.
   deersim.canvasContext.drawImage(document.getElementById("Irradiation"), this.x, this.y);
}

/*---------------------------*\
 | Updates this Irradiation. |
\*---------------------------*/
Irradiation.prototype.update = function() {
   this.x -= this.speed; // Move this Irradiation to the left, proportional to its speed.
}

/*-----------------------------------------------------------*\
 | Draws this LightningRobe. For now, just draw a deer icon. |
\*-----------------------------------------------------------*/
LightningRobe.prototype.draw = function() {
   // Draw a deer icon.
   deersim.canvasContext.drawImage(document.getElementById("LightningDeerTest"), this.x, this.y);
}

/*-----------------------------*\
 | Updates this LightningRobe. |
\*-----------------------------*/
LightningRobe.prototype.update = function() {
   this.x -= this.speed; // Move this LightningRobe to the left, proportional to its speed.
}

// ---- End of function declarations. ----