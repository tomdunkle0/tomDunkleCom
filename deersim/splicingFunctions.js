/*---------------------------------------------------------------------------*\
 | File: deersim/splicingFunctions.js                                        |
 | Purpose: Defines functions used to splice objects from the fundamental    |
 | game arrays (gameObjects, vehicles, powerups, projectiles). These         |
 | functions are typically used in game object management & garbage cleanup. |
\*---------------------------------------------------------------------------*/

/*-----------------------------------------------------------*\
 | Iterates through the game's fundamental arrays and        |
 | removes every single game object in play. This function   |
 | should be called when a change in game state (e.g. change |
 | in level) calls for a complete scrub of in-play objects.  |
\*-----------------------------------------------------------*/
var clearAllPreviousGameObjects = function() {
   while (deersim.gameObjects.length > 0) // While there are objects remaining in the array...
      deersim.gameObjects.splice(0, 1);   // ...remove them, one by one.
   while (deersim.vehicles.length > 0)    // While there are vehicles remaining in the array...
      deersim.vehicles.splice(0, 1);      // ...remove them, one by one.
   while (deersim.obstacles.length > 0)   // While there are obstacles remaining in the array...
      deersim.obstacles.splice(0, 1);     // ...remove them, one by one.
   while (deersim.powerups.length > 0)    // While there are powerups remaining in the array...
      deersim.powerups.splice(0, 1);      // ...remove them, one by one.
   while (deersim.projectiles.length > 0) // While there are projectiles remaining in the array...
      deersim.projectiles.splice(0, 1);   // ...remove them, one by one.
};

/*------------------------------------------------------------------------------*\
 | Clears all game objects which are known to expire after a certain time,      |
 | usually expressed in the units of game frames. For each object known to      |
 | expire, there is an if statement coded into the while loop in this function. |
\*------------------------------------------------------------------------------*/
var clearExpiredGameObjects = function() {
   var index = 0; // Used to iterate through game objects array.

   while (index < deersim.gameObjects.length) {
      // Powerup Bars expire (and disappear) when the active Deer's use of the powerup is disabled.
      if (deersim.gameObjects[index] instanceof Bar) {
         if (deersim.gameObjects[index].done === CONST_TRUE) {
            deersim.gameObjects.splice(index, 1);
         }
         else
            index++; // If the Bar isn't expired, keep iterating...
      }
      // ExpiringObjects and ExpiringCursors are objects that are programmed to expire.
      else if ((deersim.gameObjects[index] instanceof ExpiringCursor)
           || (deersim.gameObjects[index] instanceof ExpiringObject)) {
         // Check to see if the object has expired.
         if (deersim.gameObjects[index].remainingFrames <= 0) {
            deersim.gameObjects.splice(index, 1);
         }
         else
            index++; // If the expiring object hasn't expired, keep iterating...
      }
      // Starbursts expire (and disappear) after they finish ascending briefly.
      else if (deersim.gameObjects[index] instanceof Starburst) {
         if (deersim.gameObjects[index].done === CONST_TRUE) {
            var powerupBar = new Bar( // Create a new bar to display powerup depletion.
               deersim.gameObjects[index].x - 10,                   // x
               deersim.gameObjects[index].y + CONST_DIM_LARGE - 16  // y
               );

            // Assign the new Bar a function (i.e. it's a Powerup Bar in this case).
            powerupBar.function = deersim.gameObjects[index].purpose;
            deersim.gameObjects.push(powerupBar);

            deersim.gameObjects.splice(index, 1);
         }
         else
            index++; // If the ExpiringObject isn't expired, keep iterating...
      }
      // TextStrings listing dollar values on Vehicle death expire after ascending briefly.
      else if (deersim.gameObjects[index] instanceof TextString) {
         if (deersim.gameObjects[index].isDone())
            deersim.gameObjects.splice(index, 1);
         else
            index++; // If the TextString isn't expired, keep iterating...
      }
      else
         index++; // If the object isn't a type that expires, keep iterating...
   }
}; // clearExpiredGameObjects()

/*------------------------------------------------------*\
 | Scans the array of game objects in play, and removes |
 | all AnimationBlocks whose animations have finished.  |
\*------------------------------------------------------*/
var clearFinishedAnimations = function() {
   var i = 0; // Iterator.

   while (i < deersim.gameObjects.length) { // Considering each game object,
      if (deersim.gameObjects[i] instanceof AnimationBlock) { // If the object is an AnimationBlock...
         // ...and the AnimationBlock's animation is over...
         if (deersim.gameObjects[i].frameCounter >= (7 * deersim.gameObjects[i].length)) {
            deersim.gameObjects.splice(i, 1); // ...then remove the AnimationBlock from the objects array.
         }
         else {
            i++; // Otherwise, increment.
         }
      }
      else if (deersim.gameObjects[i] instanceof Exclamation) { // If the object is an Exclamation...
         if (deersim.gameObjects[i].frameCounter >= 15 * 12) { // ...and the Exclamation is over...
            deersim.gameObjects.splice(i, 1); // ...then remove the Exclamation from the objects array.
         }
         else {
            i++; // Otherwise, increment.
         }
      }
      else {
         i++; // Otherwise, increment.
      }
   }
   
   i = 0; // Reset the iterator for the upcoming loop.
   
   while (i < deersim.projectiles.length) { // Considering each projectile,
      if (deersim.projectiles[i] instanceof LightningBolt) { // If the object is a LightningBolt...
         // ...and the LightningBolt's animation is over...
         if (deersim.projectiles[i].animation.frameCounter >= (7 * deersim.projectiles[i].animation.length)) {
            deersim.projectiles.splice(i, 1); // ...then remove the LightningBolt from the projectiles array.
         }
         else {
            i++; // Otherwise, increment.
         }
      }
      else {
         i++; // Otherwise, increment.
      }
   }
};

/*-----------------------------------------------------------------------*\
 | Scans through the array of game objects and removes all menu objects. |
\*-----------------------------------------------------------------------*/
function clearMenuObjects(a_deersim) {
   var i = 0; // Iterator.

   while (i < a_deersim.gameObjects.length) {                // Considering each game object,
      /* if ((gameObjects[i] instanceof DialogBox)           // If the object is a DialogBox,
       || (gameObjects[i] instanceof StaticMenuObject) */
      if ((a_deersim.gameObjects[i] instanceof StaticMenuObject)
       || (a_deersim.gameObjects[i] instanceof Cursor)) { // Or a StaticMenuObject,
         a_deersim.gameObjects.splice(i, 1); // Remove the object from the object array.
      }
      else {
         i++;
      }
   }
}

/*------------------------------------------------*\
 | Dispose of objects which have moved offscreen. |
\*------------------------------------------------*/
// #TODO -- expand the right boundary this function checks for so that I can create
// vehicles offscreen to the right instead of within screen bounds.
var clearPassedObjects = function() {
   // Iterate through each object currently in play.
   for (var gameObject in deersim.gameObjects) {
      // Remove objects which have been killed, and would otherwise fall indefinitely.
      if (deersim.gameObjects[gameObject].y > (CONST_CANVAS_HEIGHT * 2)) {
         deersim.gameObjects.splice(gameObject, 1);
      }
   }

   // Iterate through each obstacle currently in play.
   for (var obstacle in deersim.obstacles) {
      // If an obstacle in play has exited the screen,
      if ((deersim.obstacles[obstacle].x < -200)
       || (deersim.obstacles[obstacle].x > CONST_CANVAS_WIDTH + 200)) {
         deersim.obstacles.splice(obstacle, 1); // Then remove that obstacle from play.
      }
   }

   // Iterate through each powerup currently in play.
   for (var powerup in deersim.powerups) {
      // If a powerup in play has exited the screen,
      if ((deersim.powerups[powerup].x < -200)
       || (deersim.powerups[powerup].x > CONST_CANVAS_WIDTH + 200)) {
         deersim.powerups.splice(powerup, 1); // Then remove that powerup from play.
      }
   }

   // Iterate through each vehicle currently in play.
   for (var vehicle in deersim.vehicles) {
      // If a vehicle in play has exited the screen,
      if ((deersim.vehicles[vehicle].x < -200)
       || (deersim.vehicles[vehicle].x > CONST_CANVAS_WIDTH + 100)) {
         deersim.vehicles.splice(vehicle, 1); // Then remove that vehicle from play.
      }
   }
};

/*--------------------------------------------------------------------*\
 | Clears all Bars with the "powerup" function. This function is used |
 | to remove active Bars from play when the active deer is killed.    |
\*--------------------------------------------------------------------*/
var clearPowerupBars = function() {
   var i = 0; // Iterator.

   while (i < deersim.gameObjects.length) { // Check all active game objects.
      if (deersim.gameObjects[i] instanceof Bar) { // If the object is a Bar...
         if ((deersim.gameObjects[i].function === "irradiated")
          || (deersim.gameObjects[i].function === "enlightened")) {
            deersim.gameObjects.splice(i, 1); // ...then remove the object from the objects array.
         }
         else {
            i++; // ...otherwise, increment.
         }
      }
      else {
         i++; // ...otherwise, increment.
      }
   }
}; // clearPowerupBars

/*----------------------------------------------------------------------*\
 | Scans through the array of game objects and removes all TextStrings. |
\*----------------------------------------------------------------------*/
function clearTextStrings(a_deersim) {
   var i = 0; // Iterator.

   while (i < a_deersim.gameObjects.length) {               // Considering each game object,
      if (a_deersim.gameObjects[i] instanceof TextString) { // If the object is a TextString,
         a_deersim.gameObjects.splice(i, 1);                // Remove the object from the object array.
      }
      else {
         i++;
      }
   }
};