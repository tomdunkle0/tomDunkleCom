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
   for (var vehicle in deersim.vehicles) { // For all vehicles currently in play,
      if ((deersim.state === "round")
      || (deersim.state === "bossBattle")) {
         if (!(deersim.vehicles[vehicle] instanceof Coop)) { // ...(except for Coops)...
            // If this vehicle is colliding with the currently active Deer,
            // And the currently active Deer is not irradiated,
            if (hasCollisionOccurred(deer, deersim.vehicles[vehicle])
            && (deer.powerup !== "irradiated")) {
               deer.state = "dying";                                       // Set the active Deer's state to dying.
               deersim.soundEffects[CONST_SOUND_INDEX_DEER_SHRIEK].play(); // Play the deer shriek sound effect.

               clearPowerupBars(); // Remove any active powerup Bars from play.

               // Change the player profile's damage by the vehicle's value,
               // and store the vehicle's value in a variable.
               collisionValue = Math.floor(playerProfile.changeDamage(deersim.vehicles[vehicle].value));

               collisionString = CONST_TRUE; // Signal the need for a collision TextString.

               // If the vehicle is a DeerTruck...
               if (deersim.vehicles[vehicle] instanceof DeerTruck) {
                  // ...then grant the player profile one deer.
                  playerProfile.changeRemainingDeer(1);
               }
            }

            // If this vehicle is colliding with the currently active Deer...
            // ...and the kill counter has elapsed...
            // ...and the currently active Deer is irradiated,
            if ((hasCollisionOccurred(deer, deersim.vehicles[vehicle]))
            && (deersim.killCounter === 0)
            && (deer.powerup === "irradiated")) {
               deersim.vehicles[vehicle].state = "dying"; // ...then set this vehicle's state to dying.

               deersim.killCounter++; // Start the kill counter.

               // Change the player profile's damage by the vehicle's value,
               // and store the vehicle's value in a variable.
               collisionValue = Math.floor(playerProfile.changeDamage(deersim.vehicles[vehicle].value));

               collisionString = CONST_TRUE; // Signal the need for a collision TextString.

               // If the vehicle is a DeerTruck...
               if (deersim.vehicles[vehicle] instanceof DeerTruck) {
                  // ...then grant the player profile one deer.
                  playerProfile.changeRemainingDeer(1);
               }
            }
         }
      }

      // Check for approaching vehicles, adjust their speed if found.
      isVehicleBeingApproached(deersim.vehicles[vehicle]);
   }

   if (collisionString) { // If there is need for a collision TextString...
      // Create a collision TextString, and add it to the objects array.
      deersim.gameObjects.push(new TextString(deer.x, deer.y - 64, CONST_FONT_SIZE_SMALL, "pickup", "$" + collisionValue, "Small"));

      collisionString = false; // Unsignal the need for a collision TextString.
   }
};

/*----------------------------------------------*\
 | Checks for collisions between Coop and all   |
 | other 'vehicles', which are really potholes. |
\*----------------------------------------------*/
var collisionDetectionForCoopBattle = function() {
   if (hasCollisionOccurred(deer, boss)   // If the active deer and Coop collide...
    && (deer.powerup !== "irradiated")) { // ...and the active deer is not irradiated...
      deer.state = "dying";                                       // Set the active Deer's state to dying.
      deersim.soundEffects[CONST_SOUND_INDEX_DEER_SHRIEK].play(); // Play the deer shriek sound effect.
      clearPowerupBars();                                         // Remove any active powerup Bars from play.
   }

   // Cycle through each Pothole in play, and if one is colliding with Coop...
   for (obstacle in deersim.obstacles)
      if ((deersim.obstacles[obstacle] instanceof Pothole)
       && (hasCollisionOccurred(boss, deersim.obstacles[obstacle]))
       && (boss.hitCounter === 0)) {
         boss.hp -= 5;      // ...then decrement his hit points by 5...
         boss.hitCounter++; // ...and start his hit counter.
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
   var xOverlap = 0; // Stores TRUE if both objects overlap horizontally.
   var sameLane = 0; // Stores TRUE if both objects occupy the same lane.

   // If both objects occupy the same lane,
   if (activeDeer.lane === gameObject.lane) {
      sameLane = 1; // Then assert variable 'sameLane'.
   }

   // Assign the visible maximum X value for the Deer.
   var deerMaxX = activeDeer.x + CONST_DEER_WIDTH;

   // Assign the visible maximum X value for the game object.
   var gameObjectMaxX = gameObject.x + gameObject.collisionWidth;

   // Test #1 for deer and game object x overlap:
   if ((gameObject.x < deerMaxX) && (deerMaxX < gameObjectMaxX)) {
      xOverlap = 1;
   }

   // Test #2 for deer and game object x overlap:
   if ((gameObject.x < activeDeer.x) && (activeDeer.x < gameObjectMaxX)) {
      xOverlap = 1;
   }

   // If both objects occupy the same lane and overlap,
   // And the active Deer is not currently initializing,
   if (sameLane && xOverlap
    && (activeDeer.state !== "initializing")) {
      return 1; // Return true.
   }
   else {
      return 0; // Return false.
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
    // For every vehicle currently in play, check...
    for (var vehicle2 in deersim.vehicles) {
        // ...if both vehicles occupy the same lane
        // ...if vehicle 2 is to the right of vehicle 1
        // ...if vehicle 2 is close to vehicle 1

        if ((vehicle1.lane === deersim.vehicles[vehicle2].lane)
         && (deersim.vehicles[vehicle2].x > vehicle1.x)
         && (deersim.vehicles[vehicle2].x <= (vehicle1.x + 150)) ) {
            // If all true, set vehicle 2's speed equal to vehicle 1's speed.
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
   var whiteVan; // Create a variable to store an active WhiteVan.

    for (var vehicle in deersim.vehicles) {                // For every vehicle currently in play,
      if (deersim.vehicles[vehicle] instanceof WhiteVan) { // If the vehicle is a WhiteVan,
         whiteVan = deersim.vehicles[vehicle];		       // Then assign the WhiteVan as active.

         // If the active Deer is within the active WhiteVan's kidnapping range,
         if ((deer.x >= (whiteVan.x + 25))
          && (deer.x <= (whiteVan.x + 35))
          && (deer.lane === 5)) {
            for (soundEffect in deersim.soundEffects) {           // For every sound effect...
               deersim.soundEffects[soundEffect].pause();         // ...pause in case already playing.
               deersim.soundEffects[soundEffect].currentTime = 0; // ...and re-seek to t0.
            }

            loadMusic( // ...then load the SA-40 transition theme music.
               "SA-40 Transition", // bgTrack
               "SA-40 Transition"  // bgTrackID
               );

            transitionToSA40PhaseOne();    // ...and start phase one of the transition to SA-40.
         }
      }
   }
}; // kidnapDetection()

/*--------------------------------------------------------------------------*\
 | Iterates through each powerup in play and checks whether any of them are |
 | colliding with the active deer. If so, the deer picks up that powerup.   |
\*--------------------------------------------------------------------------*/
var powerupDetection = function() {
   var i = 0; // Initialize counter for powerup detection algorithm.

   while (i < deersim.powerups.length) { // Iterate through each powerup in play.

      if ((deer.state === "active")    // If the active Deer is colliding with any powerup...
       && (hasCollisionOccurred(deer, deersim.powerups[i]))
       && (deer.powerup === "none")) { // ...and doesn't already have a powerup...
         if (deersim.powerups[i] instanceof LightningRobe) {
            deer.pickupPowerup("lightning"); // Instruct the active Deer to pick up the powerup.

            var starburst = new Starburst( // Create an "ENLIGHTENED!" Starburst.
               deer.x,                                      // x
               deer.y - (CONST_DIM_XLARGE - deer.dim) - 20, // y
               "Enlightened",                               // imageHandle
               "enlightened"                                // purpose
               );

            // Add the new Starburst to the game objects array and play its sound effect.
            deersim.gameObjects.push(starburst);
            deersim.soundEffects[CONST_SOUND_INDEX_DRUID_CHANT].play();

            // Create a SpeakingYorig to alert the player to the 'L' key, to fire lightning.
            var speakingYorig = new SpeakingYorig();
            deersim.gameObjects.push(speakingYorig);
         }
         else if (deersim.powerups[i] instanceof Irradiation) {
            deer.pickupPowerup("irradiated"); // Instruct the active Deer to pick up the powerup.

            var starburst = new Starburst( // Create an "IRRADIATED!" Starburst.
               deer.x,                                      // x
               deer.y - (CONST_DIM_XLARGE - deer.dim) - 20, // y
               "Irradiated",                                // imageHandle
               "irradiated"                                 // purpose
               );

            // Add the new Starburst to the game objects array and play its sound effect.
            deersim.gameObjects.push(starburst);
            deersim.soundEffects[CONST_SOUND_INDEX_VOX_COMET_SOUND_CHECK].play();
         }

         pauseAndReplaySoundEffect(CONST_SOUND_INDEX_OBTAIN_POWERUP);
      }

      i++; // Iterate counter.
   }
}; // powerupDetection

/*-------------------------------------------------------------------------------*\
 | Iterates through each projectile in play and checks whether any of them are   |
 | colliding with any of the vehicles in play--i.e. a two-dimensional matrix     |
 | of projectile/vehicle combinations. If so, the projectile kills that vehicle. |
\*-------------------------------------------------------------------------------*/
var projectileDetection = function() {
   var ptI = 0; // Initialize counter for projectiles.
   var vhI = 0; // Initialize counter for vehicles.

   while (ptI < deersim.projectiles.length) { // Iterate through each projectile in play.
      while (vhI < deersim.vehicles.length) { // Iterate through each vehicle in play.
         // If this projectile is colliding with this vehicle...
         // ...and the kill counter has elapsed...
         if ((hasCollisionOccurred(deersim.projectiles[ptI], deersim.vehicles[vhI]))
          && (deersim.killCounter === 0)) {
            deersim.vehicles[vhI].state = "dying"; // ...then set the vehicle's state to dying.
            deersim.killCounter++;                         // ...and start the kill counter.

            // Change the player profile's damage by the vehicle's value,
            // and store the vehicle's value in a variable.
            collisionValue = Math.floor(
               playerProfile.changeDamage(deersim.vehicles[vhI].value));

            // Create a collision TextString, and add it to the objects array.
            deersim.gameObjects.push(new TextString(deersim.projectiles[ptI].x,
                                            deer.y - 64,
                                            CONST_FONT_SIZE_SMALL,
                                            "pickup",
                                            "$" + collisionValue,
                                            "Small"));
         }

         vhI++; // Iterate the vehicle counter.
      }

      ptI++; // Iterate the projectile counter.
   }
};

/*------------------------------------------------------------------*\
 | For each vehicle in the vehicles array, determines whether that  |
 | vehicle is close enough to the active Deer to play a voice clip. |
\*------------------------------------------------------------------*/
var vicinityDetection = function() {
   for (var vehicle in deersim.vehicles) {
      // For each vehicle, if it is close to the active deer and in an adjacent lane...
      if ((Math.abs(deersim.vehicles[vehicle].x - deer.x) <= 10)
       && (Math.abs(deersim.vehicles[vehicle].lane - deer.lane) === 1)) {

         // Generate a random decimal, which determines whether a voice will play.
         var voiceTrigger = Math.random();

         // Generate a random decimal, which determines which voice if any plays.
         var voiceSelector = Math.random();

         if (voiceTrigger < 0.1) // If the voice trigger is sufficiently low...
            // ...then play a voice.
            playVoice(deersim.vehicles[vehicle], voiceSelector);
      }
   }
};