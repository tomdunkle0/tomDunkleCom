/*--------------------------*\
 | Defines the Ball object. |
\*--------------------------*/
function Ball(x, y) {
    this.x = x;
    this.y = y;
    this.xSpeed = -3;
    this.ySpeed = -4;
    this.radius = 10;
}

/*------------------------------------------------------*\
 * Draw the ball.                                       *
 * @param canvasContext -- The 2D context of the canvas *
 *                    object in which to draw the Ball. *
\*------------------------------------------------------*/
Ball.prototype.draw = function(canvasContext) {
    canvasContext.beginPath(); // Begin the path to draw the Ball.
    canvasContext.arc(this.x, this.y, this.radius, 2 * Math.PI, false); // Create the path to draw the Ball.
    canvasContext.fillStyle = "#000000"; // Define the Ball's color.
    canvasContext.fill(); // Draw the Ball.
};

/*--------------------*\
 | Update Ball logic. |
\*--------------------*/
Ball.prototype.update = function(playerPaddle, computerPaddle) {
    this.x += this.xSpeed;       // Update the ball's x position.
    this.y += this.ySpeed;       // Update the ball's y position.
    this.xMax = this.x + this.radius; // Define the ball's maximum x coordinate.
    this.xMin = this.x - this.radius; // Define the ball's minimum x coordinate.
    this.yMax = this.y + this.radius; // Define the ball's maximum y coordinate.
    this.yMin = this.y - this.radius; // Define the ball's minimum y coordinate.
    
    if ((this.yMin <= 0) || (this.yMax >= 720)) { // Ball hits top or bottom wall
        this.ySpeed *= -1; // Reverse the ball's y direction.
    }
    
    if ((this.xMax <= 0) || (this.xMin >= 1280)) { // A goal is scored
        // Reset ball position and velocity to default.
        this.x = 640;
        this.y = 360;
        this.xSpeed = -4;
        this.ySpeed = 0;
    }
    
    if    ((this.xMin <= playerPaddle.xMax) // Ball is farther left than player's paddle.
        && (this.yMin >= playerPaddle.y)    // Ball is lower than top of player's paddle
        && (this.yMax <= playerPaddle.yMax) // Ball is higher than bottom of player's paddle.
    ) { // Ball hits player's paddle.
        this.xSpeed *= -1; // Reverse the ball's x direction.
    }
    
    if    ((this.xMax >= computerPaddle.x)    // Ball is farther right than computer's paddle.
        && (this.yMin >= computerPaddle.y)    // Ball is lower than top of computer's paddle.
        && (this.yMax <= computerPaddle.yMax) // Ball is higher than bottom of computer's paddle.
    ) { // Ball hits computer's paddle.
        this.xSpeed *= -1; // Reverse the ball's x direction.
    }
};

/*-----------------------------------------------------------------------*\
 | Paddles can move in the y direction and are used to deflect the Ball. |
\*-----------------------------------------------------------------------*/
function Paddle(x, y, width, height) {
    this.x      = x;
    this.y      = y;
    this.width  = width;
    this.height = height;
    this.xSpeed = 0;
    this.ySpeed = 0;
    this.xMax   = x + width;
    this.yMax   = y + height;
}

/*-----------------*\
 | Draws a Paddle. |
\*-----------------*/
Paddle.prototype.draw = function() {
    canvasContext.fillStyle = "#0000FF"; // Set the fill color to the Paddle color.
    canvasContext.fillRect(this.x, this.y, this.width, this.height); // Draw the Paddle.
};

/*--------------------------------------------------*\
 | Update's a paddle's position by dx pixels in the |
 | x dimension and dy pixels in the y dimension.    |
\*--------------------------------------------------*/
Paddle.prototype.move = function(dx, dy) {
    // Update player position.
    this.x += dx;
    this.y += dy;
    
    this.yMax = this.y + this.height; // Updating y requires updating yMax.
    
    if (this.y <= 0) { // Player is in contact with top wall.
        this.y = 0; // Reset player's y position to enforce boundary.
    }
    
    if (this.yMax >= 720) { // Player is in contact with bottom wall.
        this.y = (720 - this.height); // Reset player's y position to enforce boundary.
    }
};

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