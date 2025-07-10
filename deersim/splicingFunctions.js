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
   while (deersim.gameObjects.length > 0)
      deersim.gameObjects.splice(0, 1);
   while (deersim.vehicles.length > 0)
      deersim.vehicles.splice(0, 1);
   while (deersim.obstacles.length > 0)
      deersim.obstacles.splice(0, 1);
   while (deersim.powerups.length > 0)
      deersim.powerups.splice(0, 1);
   while (deersim.projectiles.length > 0)
      deersim.projectiles.splice(0, 1);
};

/*------------------------------------------------------------------------------*\
 | Clears all game objects which are known to expire after a certain time,      |
 | usually expressed in the units of game frames. For each object known to      |
 | expire, there is an if statement coded into the while loop in this function. |
\*------------------------------------------------------------------------------*/
var clearExpiredGameObjects = function() {
   var index = 0;

   while (index < deersim.gameObjects.length) {
      if (deersim.gameObjects[index] instanceof Bar) {
         if (deersim.gameObjects[index].done === CONST_TRUE) {
            deersim.gameObjects.splice(index, 1);
         }
         else
            index++;
      }
      else if ((deersim.gameObjects[index] instanceof ExpiringCursor)
           || (deersim.gameObjects[index] instanceof ExpiringObject)) {
         if (deersim.gameObjects[index].remainingFrames <= 0) {
            deersim.gameObjects.splice(index, 1);
         }
         else
            index++;
      }
      else if (deersim.gameObjects[index] instanceof Starburst) {
         if (deersim.gameObjects[index].done === CONST_TRUE) {
            var powerupBar = new Bar(
               deersim.gameObjects[index].x - 10,                   // x
               deersim.gameObjects[index].y + CONST_DIM_LARGE - 16  // y
               );

            powerupBar.function = deersim.gameObjects[index].purpose;
            deersim.gameObjects.push(powerupBar);

            deersim.gameObjects.splice(index, 1);
         }
         else
            index++;
      }
      else if (deersim.gameObjects[index] instanceof TextString) {
         if (deersim.gameObjects[index].isDone())
            deersim.gameObjects.splice(index, 1);
         else
            index++;
      }
      else
         index++;
   }
}; // clearExpiredGameObjects()

/*------------------------------------------------------*\
 | Scans the array of game objects in play, and removes |
 | all AnimationBlocks whose animations have finished.  |
\*------------------------------------------------------*/
var clearFinishedAnimations = function() {
   var i = 0;

   while (i < deersim.gameObjects.length) {
      if (deersim.gameObjects[i] instanceof AnimationBlock) {
         if (deersim.gameObjects[i].frameCounter >= (7 * deersim.gameObjects[i].length)) {
            deersim.gameObjects.splice(i, 1);
         }
         else {
            i++;
         }
      }
      else if (deersim.gameObjects[i] instanceof Exclamation) {
         if (deersim.gameObjects[i].frameCounter >= 15 * 12) {
            deersim.gameObjects.splice(i, 1);
         }
         else {
            i++;
         }
      }
      else {
         i++;
      }
   }

   i = 0;

   while (i < deersim.projectiles.length) {
      if (deersim.projectiles[i] instanceof LightningBolt) {
         if ( deersim.projectiles[i].animation.frameCounter
          >= (7 * deersim.projectiles[i].animation.length)
            ) {
            deersim.projectiles.splice(i, 1);
         }
         else {
            i++;
         }
      }
      else {
         i++;
      }
   }
};

/*-----------------------------------------------------------------------*\
 | Scans through the array of game objects and removes all menu objects. |
\*-----------------------------------------------------------------------*/
function clearMenuObjects(a_deersim) {
   var i = 0;

   while (i < a_deersim.gameObjects.length) {
      /* if ((gameObjects[i] instanceof DialogBox)           // If the object is a DialogBox,
       || (gameObjects[i] instanceof StaticMenuObject) */
      if ((a_deersim.gameObjects[i] instanceof StaticMenuObject)
       || (a_deersim.gameObjects[i] instanceof Cursor)) {
         a_deersim.gameObjects.splice(i, 1);
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
   for (var gameObject in deersim.gameObjects) {
      if (deersim.gameObjects[gameObject].y > (CONST_CANVAS_HEIGHT * 2)) {
         deersim.gameObjects.splice(gameObject, 1);
      }
   }

   for (var obstacle in deersim.obstacles) {
      if ((deersim.obstacles[obstacle].x < -200)
       || (deersim.obstacles[obstacle].x > CONST_CANVAS_WIDTH + 200)) {
         deersim.obstacles.splice(obstacle, 1);
      }
   }

   for (var powerup in deersim.powerups) {
      if ((deersim.powerups[powerup].x < -200)
       || (deersim.powerups[powerup].x > CONST_CANVAS_WIDTH + 200)) {
         deersim.powerups.splice(powerup, 1);
      }
   }

   for (var vehicle in deersim.vehicles) {
      if ((deersim.vehicles[vehicle].x < -200)
       || (deersim.vehicles[vehicle].x > CONST_CANVAS_WIDTH + 100)) {
         deersim.vehicles.splice(vehicle, 1);
      }
   }
};

/*--------------------------------------------------------------------*\
 | Clears all Bars with the "powerup" function. This function is used |
 | to remove active Bars from play when the active deer is killed.    |
\*--------------------------------------------------------------------*/
var clearPowerupBars = function() {
   var i = 0;

   while (i < deersim.gameObjects.length) {
      if (deersim.gameObjects[i] instanceof Bar) {
         if ((deersim.gameObjects[i].function === "irradiated")
          || (deersim.gameObjects[i].function === "enlightened")) {
            deersim.gameObjects.splice(i, 1);
         }
         else {
            i++;
         }
      }
      else {
         i++;
      }
   }
}; // clearPowerupBars

/*----------------------------------------------------------------------*\
 | Scans through the array of game objects and removes all TextStrings. |
\*----------------------------------------------------------------------*/
function clearTextStrings(a_deersim) {
   var i = 0;

   while (i < a_deersim.gameObjects.length) {
      if (a_deersim.gameObjects[i] instanceof TextString) {
         a_deersim.gameObjects.splice(i, 1);
      }
      else {
         i++;
      }
   }
};
