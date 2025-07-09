/*-------------------------------------------*\
 | File: deersim/physics.js                  |
 | Purpose: Defines functionality associated |
 | with spatial interaction of game objects. |
\*-------------------------------------------*/

// ---- Start of function declarations. ----

/*-------------------------------------------------------*\
 | Performs both detection and handling of collisions    |
 | between various game objects during a round of play.  |
 | This routine runs once per game loop iteration.       |
\*-------------------------------------------------------*/
var collisionDetection = function() {
   for (var vehicle in deersim.vehicles) {
      if ((deersim.state === "round")
      || (deersim.state === "bossBattle")) {
         if (!(deersim.vehicles[vehicle] instanceof Coop)) {
            if (hasCollisionOccurred(deer, deersim.vehicles[vehicle])
            && (deer.powerup !== "irradiated")) {
               deer.state = "dying";
               deersim.soundEffects[CONST_SOUND_INDEX_DEER_SHRIEK].play();

               clearPowerupBars();

               collisionValue = Math.floor(playerProfile.changeDamage(deersim.vehicles[vehicle].value));

               collisionString = CONST_TRUE;

               if (deersim.vehicles[vehicle] instanceof DeerTruck) {
                  playerProfile.changeRemainingDeer(1);
               }
            }

            if ((hasCollisionOccurred(deer, deersim.vehicles[vehicle]))
            && (deersim.killCounter === 0)
            && (deer.powerup === "irradiated")) {
               deersim.vehicles[vehicle].state = "dying";

               deersim.killCounter++;

               collisionValue = Math.floor(playerProfile.changeDamage(deersim.vehicles[vehicle].value));

               collisionString = CONST_TRUE;

               if (deersim.vehicles[vehicle] instanceof DeerTruck) {
                  playerProfile.changeRemainingDeer(1);
               }
            }
         }
      }

      isVehicleBeingApproached(deersim.vehicles[vehicle]);
   }

   if (collisionString) {
      deersim.gameObjects.push(new TextString(deer.x, deer.y - 64, CONST_FONT_SIZE_SMALL, "pickup", "$" + collisionValue, "Small"));

      collisionString = false;
   }
};

/*----------------------------------------------*\
 | Checks for collisions between Coop and all   |
 | other 'vehicles', which are really potholes. |
\*----------------------------------------------*/
var collisionDetectionForCoopBattle = function() {
   if (hasCollisionOccurred(deer, boss)
    && (deer.powerup !== "irradiated")) {
      deer.state = "dying";
      deersim.soundEffects[CONST_SOUND_INDEX_DEER_SHRIEK].play();
      clearPowerupBars();
   }

   for (obstacle in deersim.obstacles)
      if ((deersim.obstacles[obstacle] instanceof Pothole)
       && (hasCollisionOccurred(boss, deersim.obstacles[obstacle]))
       && (boss.hitCounter === 0)) {
         boss.hp -= 5;
         boss.hitCounter++;
      }
};

/*--------------------------------------------------------------------*\
 | Compares the active Deer and another game object's positions.      |
 | Returns true if the two objects are colliding.                     |
 | @param   Deer    activeDeer -- the active Deer                     |
 | @param   <any>   gameObject -- the object to which we're           |
 |                                comparing the Deer for collision.   |
 | @returns boolean hasCollisionOccurred -- true if activeDeer and    |
 |                                          gameObject are colliding. |
\*--------------------------------------------------------------------*/
var hasCollisionOccurred = function(activeDeer, gameObject) {
   var xOverlap = 0;
   var sameLane = 0;

   if (activeDeer.lane === gameObject.lane) {
      sameLane = 1;
   }

   var deerMaxX = activeDeer.x + CONST_DEER_WIDTH;

   var gameObjectMaxX = gameObject.x + gameObject.collisionWidth;

   if ((gameObject.x < deerMaxX) && (deerMaxX < gameObjectMaxX)) {
      xOverlap = 1;
   }

   if ((gameObject.x < activeDeer.x) && (activeDeer.x < gameObjectMaxX)) {
      xOverlap = 1;
   }

   if (sameLane && xOverlap
    && (activeDeer.state !== "initializing")) {
      return 1;
   }
   else {
      return 0;
   }
};

/*----------------------------------------------------------------*\
 | Given a vehicle, checks every other vehicle in play to see     |
 | if any of them are approaching the vehicle. If so, the         |
 | approaching vehicle's speed is set to the approached vehicle's |
 | speed, so that the two vehicles do not collide.                |
 | @param <any> vehicle1 -- the vehicle tested for approachers    |
\*----------------------------------------------------------------*/
var isVehicleBeingApproached = function(vehicle1) {
    for (var vehicle2 in deersim.vehicles) {
        if ((vehicle1.lane === deersim.vehicles[vehicle2].lane)
         && (deersim.vehicles[vehicle2].x > vehicle1.x)
         && (deersim.vehicles[vehicle2].x <= (vehicle1.x + 150)) ) {
            deersim.vehicles[vehicle2].speed = vehicle1.speed;
        }
    }
};

/*---------------------------------------------------------*\
 | Checks whether any WhiteVans in play are close enough   |
 | to the active Deer to kidnap it. If a van is within     |
 | range, this function initiates the transition to SA-40. |
\*---------------------------------------------------------*/
var kidnapDetection = function() {
   var whiteVan;

    for (var vehicle in deersim.vehicles) {
      if (deersim.vehicles[vehicle] instanceof WhiteVan) {
         whiteVan = deersim.vehicles[vehicle];

         if ((deer.x >= (whiteVan.x + 25))
          && (deer.x <= (whiteVan.x + 35))
          && (deer.lane === 5)) {
            for (soundEffect in deersim.soundEffects) {
               deersim.soundEffects[soundEffect].pause();
               deersim.soundEffects[soundEffect].currentTime = 0;
            }

            loadMusic(
               "SA-40 Transition", // bgTrack
               "SA-40 Transition"  // bgTrackID
               );

            transitionToSA40PhaseOne();
         }
      }
   }
}; // kidnapDetection()

/*--------------------------------------------------------------------------*\
 | Iterates through each powerup in play and checks whether any of them are |
 | colliding with the active deer. If so, the deer picks up that powerup.   |
\*--------------------------------------------------------------------------*/
var powerupDetection = function() {
   var i = 0;

   while (i < deersim.powerups.length) {

      if ((deer.state === "active")
       && (hasCollisionOccurred(deer, deersim.powerups[i]))
       && (deer.powerup === "none")) {
         if (deersim.powerups[i] instanceof LightningRobe) {
            deer.pickupPowerup("lightning");

            var starburst = new Starburst(
               deer.x,                                      // x
               deer.y - (CONST_DIM_XLARGE - deer.dim) - 20, // y
               "Enlightened",                               // imageHandle
               "enlightened"                                // purpose
               );

            deersim.gameObjects.push(starburst);
            deersim.soundEffects[CONST_SOUND_INDEX_DRUID_CHANT].play();

            var speakingYorig = new SpeakingYorig();
            deersim.gameObjects.push(speakingYorig);
         }
         else if (deersim.powerups[i] instanceof Irradiation) {
            deer.pickupPowerup("irradiated");

            var starburst = new Starburst(
               deer.x,                                      // x
               deer.y - (CONST_DIM_XLARGE - deer.dim) - 20, // y
               "Irradiated",                                // imageHandle
               "irradiated"                                 // purpose
               );

            deersim.gameObjects.push(starburst);
            deersim.soundEffects[CONST_SOUND_INDEX_VOX_COMET_SOUND_CHECK].play();
         }

         pauseAndReplaySoundEffect(CONST_SOUND_INDEX_OBTAIN_POWERUP);
      }

      i++;
   }
}; // powerupDetection

/*-------------------------------------------------------------------------------*\
 | Iterates through each projectile in play and checks whether any of them are   |
 | colliding with any of the vehicles in play--i.e. a two-dimensional matrix     |
 | of projectile/vehicle combinations. If so, the projectile kills that vehicle. |
\*-------------------------------------------------------------------------------*/
var projectileDetection = function() {
   var ptI = 0;
   var vhI = 0;

   while (ptI < deersim.projectiles.length) {
      while (vhI < deersim.vehicles.length) {
         if ((hasCollisionOccurred(deersim.projectiles[ptI], deersim.vehicles[vhI]))
          && (deersim.killCounter === 0)) {
            deersim.vehicles[vhI].state = "dying";
            deersim.killCounter++;

            collisionValue = Math.floor(
               playerProfile.changeDamage(deersim.vehicles[vhI].value));

            deersim.gameObjects.push(new TextString(deersim.projectiles[ptI].x,
                                            deer.y - 64,
                                            CONST_FONT_SIZE_SMALL,
                                            "pickup",
                                            "$" + collisionValue,
                                            "Small"));
         }

         vhI++;
      }

      ptI++;
   }
};

/*------------------------------------------------------------------*\
 | For each vehicle in the vehicles array, determines whether that  |
 | vehicle is close enough to the active Deer to play a voice clip. |
\*------------------------------------------------------------------*/
var vicinityDetection = function() {
   for (var vehicle in deersim.vehicles) {
      if ((Math.abs(deersim.vehicles[vehicle].x - deer.x) <= 10)
       && (Math.abs(deersim.vehicles[vehicle].lane - deer.lane) === 1)) {

         var voiceTrigger = Math.random();

         var voiceSelector = Math.random();

         if (voiceTrigger < 0.1)
            playVoice(deersim.vehicles[vehicle], voiceSelector);
      }
   }
};
