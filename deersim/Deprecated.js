/*--------------------------------------------------------------------*\
 | StreetLine objects represent boundaries between lanes in the road. |
 | They are drawn as visual boundaries and do not affect game logic.  |
 | @param x -- This StreetLine's x position in the coordinate plane.  |
 | @param y -- This StreetLine's y position in the coordinate plane.  |
\*--------------------------------------------------------------------*/
function StreetLine(x, y) {
    // Assign StreetLine position.
    this.x = x;
    this.y = y;
}

StreetLine.prototype.draw = function() {
    canvasContext.fillStyle = "#FFFFFF"; // Set the fill color to the StreetLine color.
    canvasContext.fillRect(this.x, this.y, canvas.width, 10); // Draw the StreetLine object.
};

/*----------------------------------------------------------*\
 | Increments all of this VehicleGenerator's lane counters. |
\*----------------------------------------------------------*/
VehicleGenerator.prototype.incrementLaneCounters = function() {
    // Increment all lane counters.
    this.lane1Counter++;
    this.lane2Counter++;
    this.lane3Counter++;
    this.lane4Counter++;
    this.lane5Counter++;
    
    // this.vehicleCounter++; // Increment the vehicle counter.
};

/*------------------------------------------------*\
 | Increments all of this VehicleGenerator's lane |
 | counters on each iteration of the game loop.   |
\*------------------------------------------------*/
VehicleGenerator.prototype.update = function() {
    // this.incrementLaneCounters();
};
