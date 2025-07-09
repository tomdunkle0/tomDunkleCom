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
   this.d     = 128;
   this.lane  = lane;
   this.speed = 3;
   this.collisionWidth = 89;

   this.x = deersim.canvas.width - this.d;

   this.y = (CONST_LANE_0_BASE - 15) - (CONST_LANE_HEIGHT * (this.lane + 1));

   this.index = 0;
}

/*----------------------------------------------------------------------*\
 | Defines the LightningRobe, a powerup which gives the                 |
 | active Deer the ability to shoot lightning, temporarily.             |
 | @param int lane -- the lane in which to generate this LightningRobe. |
\*----------------------------------------------------------------------*/
function LightningRobe(lane) {
   this.d     = 64;
   this.lane  = lane;
   this.speed = 3;
   this.collisionWidth = 42;

   this.x = deersim.canvas.width - this.d;

   this.y = CONST_LANE_0_BASE - (CONST_LANE_HEIGHT * this.lane);

   this.index = 1;
}

// ---- End of object declarations. ----

// ---- Start of function declarations. ----

/*-------------------------*\
 | Draws this Irradiation. |
\*-------------------------*/
Irradiation.prototype.draw = function() {
   deersim.canvasContext.drawImage(document.getElementById("Irradiation"), this.x, this.y);
}

/*---------------------------*\
 | Updates this Irradiation. |
\*---------------------------*/
Irradiation.prototype.update = function() {
   this.x -= this.speed;
}

/*-----------------------------------------------------------*\
 | Draws this LightningRobe. For now, just draw a deer icon. |
\*-----------------------------------------------------------*/
LightningRobe.prototype.draw = function() {
   deersim.canvasContext.drawImage(document.getElementById("LightningDeerTest"), this.x, this.y);
}

/*-----------------------------*\
 | Updates this LightningRobe. |
\*-----------------------------*/
LightningRobe.prototype.update = function() {
   this.x -= this.speed;
}

// ---- End of function declarations. ----
