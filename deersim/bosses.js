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
   this.lane       = 1;
   this.speed      = 3;
   this.hp         = 200;
   this.hitCounter = 0;

   const maxHP = 200;
   this.maxHP = maxHP;
   // #TODO -- I haven't tested, but it's very likely a client of
   // the Coop object could still set Coop.maxHP to something besides
   // 200, which I don't ideally want to be possible. Experiment
   // with this, and figure out whether there's a way to disallow it.

   this.x = -100;

   this.y = CONST_LANE_0_BASE - (CONST_LANE_HEIGHT * this.lane) - 64;

   this.yVelocity       = -7;
   this.imageHandle     = "Coop";
   this.state           = "preentry";
   this.laneCounter     = 0;
   this.collisionWidth  = 73;
   this.rotationCounter = 0;
   this.angleOfRotation = 0;

   this.HPBar = new Bar(880, 699);
   this.HPBar.function = "hp";
};

// ---- End of object declarations. ----

// ---- Start of function declarations. ----

/*---------------------------------------------------------------------*\
 | Changes this Coop's lane by 1, depending on the parameter supplied. |
 | @param int direction -- represents up (1) or down (-1).             |
\*---------------------------------------------------------------------*/
Coop.prototype.changeLane = function(direction) {
   this.lane += direction;

   this.y = CONST_LANE_0_BASE - (CONST_LANE_HEIGHT * this.lane) - 64;

   this.laneCounter++;
};

/*------------------*\
 | Draws this Coop. |
\*------------------*/
Coop.prototype.draw = function() {
   this.imageHandle = "Coop";

   var i = this.rotationCounter / 3;
   i = Math.ceil(i);
   if (i == 0)
      i = 12;
   this.angleOfRotation = (i - 1) * 30;

   if (this.state === "dying") {
      this.imageHandle = this.imageHandle.concat("_C_");
      this.imageHandle = this.imageHandle.concat(this.angleOfRotation);
   }

   deersim.canvasContext.drawImage(document.getElementById(this.imageHandle), this.x, this.y);

   /* canvasContext.drawImage(document.getElementById("Coop"),
                           this.x, this.y); // Draw this Coop's image. */

   this.HPBar.draw();
};

/*--------------------*\
 | Updates this Coop. |
\*--------------------*/
Coop.prototype.update = function() {
   if (this.state === "dying") {
      this.x -= 1;
      this.y += this.yVelocity;
      this.yVelocity += 0.1;
   }

   if (this.state === "preentry") {
      if (deersim.musicManager.backgroundTrack.currentTime > 14) {
         this.state = "entry";
      }
   }

   if ((this.state === "entry")
    && (this.x > 75))
      this.state = "slowing";

   if ((this.state === "slowing")
    && (this.speed > 0.5))
      this.speed -= 0.05;

   if ((this.state === "slowing")
    && (Math.abs(this.speed) <= 0.5)) {
      this.speed = 0;
      this.state = "fighting";
   }

   if (this.state === "fighting") {
      if ((this.lane < this.target.lane)
       && (this.laneCounter === 0))
         this.changeLane(1);
      if ((this.lane > this.target.lane)
       && (this.laneCounter === 0))
         this.changeLane(-1);

      if ((this.x < deer.x)
       && (this.speed < 2)) {
         this.speed += 0.05;
      }
      else if ((this.x > deer.x)
            && (this.speed > -2)) {
         this.speed -= 0.05;
      }
   }

   for (projectile in deersim.projectiles) {
      if ((hasCollisionOccurred(deersim.projectiles[projectile], this))
       && (this.hitCounter === 0)) {
         boss.hp -= 5;
         boss.hitCounter++;
      }
   }

   if ((this.laneCounter > 0)
    && (this.laneCounter < 30))
      this.laneCounter++;
   if (this.laneCounter >= 30)
      this.laneCounter = 0;

   if ((this.hitCounter > 0)
    && (this.hitCounter < 30))
      this.hitCounter++;
   if (this.hitCounter >= 30)
      this.hitCounter = 0;

   this.rotationCounter++;
   if (this.rotationCounter > 35)
      this.rotationCounter = 0;

   if (this.state === "exiting")
      this.speed = -2;

   if (this.state !== "preentry")
      this.x += this.speed;

   this.HPBar.update();
};
