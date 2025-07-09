/*-------------------------------------------------------*\
 | File: deersim/obstacles.js                            |
 | Purpose: Defines game objects which exist within the  |
 | road and serve to kill deer, but are not necessarily  |
 | animate. Obstacles are similar to Vehicles albeit     |
 | typically with more unique and personalized behavior. |
\*-------------------------------------------------------*/

// ---- Start of object declarations. ----

/*--------------------------------------------------------*\
 | Defines the Pothole, which is technically more of an   |
 | obstacle than a vehicle. All Potholes 'move' with the  |
 | same speed, but otherwise behave similarly to vehicles |
 | and present a similar threat to the active Deer.       |
\*--------------------------------------------------------*/
function Pothole(lane) {
   this.lane           = lane;
   this.speed          = 3;
   this.d              = CONST_FONT_SIZE_SMALL;
   this.collisionWidth = 8;    // #TODO -- change this when I implement the proper sprite.

   this.x = CONST_CANVAS_WIDTH - this.d;

   this.y = CONST_LANE_0_BASE - (CONST_LANE_HEIGHT * this.lane) - 64;
};

// ---- End of object declarations. ----

// ---- Start of function declarations. ----

/*---------------------*\
 | Draws this Pothole. |
\*---------------------*/
Pothole.prototype.draw = function() {
   deersim.canvasContext.drawImage(document.getElementById("Sean"),
                           this.x, this.y); // Placeholder -- for now, just draw a Sean.
};

/*-----------------------*\
 | Updates this Pothole. |
\*-----------------------*/
Pothole.prototype.update = function() {
   this.x -= this.speed;
};

// ---- End of function declarations. ----
