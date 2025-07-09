/*---------------------------------------------------------------------------------*\
 | File:    deersim/liveDebugger.js                                                |
 | Purpose: This file defines the LiveDebugger, a tool built into I-84 Simulator   |
 |          in order to assist with developing the game. The LiveDebugger displays |
 |          various quantities and values in real-time to assist in debugging.     |
 |          The LiveDebugger is not meant to be exposed to the end user.           |
\*---------------------------------------------------------------------------------*/

// ---- Start of object declarations. ----

function LiveDebugger(a_deersim) {
   var marginX = 15;
   var marginY = 5;

   {
      this.FPS = new TextString(
         marginX + (CONST_FONT_SIZE_SMALL * 16), // x, w/ 16 character indent
         0,                                      // y
         CONST_FONT_SIZE_SMALL,                  // charSize
         "default",                              // state
         "FPS:",                                 // string
         "Small"                                 // size
         );

      this.FPSCtr = new TextString(
         marginX + (CONST_FONT_SIZE_SMALL * 20), // x, w/ 20 character indent
         0,                                      // y
         CONST_FONT_SIZE_SMALL,                  // charSize
         "default",                              // state
         a_deersim.frameTimes.length.toString(), // string
         "Small"                                 // size
         );
   }

   {
      this.numObjects = new TextString(
         marginX,                           // x
         (CONST_FONT_SIZE_SMALL + marginY), // y
         CONST_FONT_SIZE_SMALL,             // charSize
         "default",                         // state
         "NUMBER OF OBJECTS  :",            // string
         "Small"                            // size
         );

      this.numObjectsCtr = new TextString(
         marginX + (CONST_FONT_SIZE_SMALL * 20),  // x, w/ 20 character indent
         (CONST_FONT_SIZE_SMALL + marginY),       // y
         CONST_FONT_SIZE_SMALL,                   // charSize
         "default",                               // state
         a_deersim.gameObjects.length.toString(), // string
         "Small"                                  // size
         );
   }

   {
      this.numVehicles = new TextString(
         marginX,                                     // x
         (CONST_FONT_SIZE_SMALL * 2) + (marginY * 2), // y
         CONST_FONT_SIZE_SMALL,                       // charSize
         "default",                                   // state
         "NUMBER OF VEHICLES :",                      // string
         "Small"                                      // size
         );

      this.numVehiclesCtr = new TextString(
         marginX + (CONST_FONT_SIZE_SMALL * 20),      // x, w/ 20 character indent
         (CONST_FONT_SIZE_SMALL * 2) + (marginY * 2), // y
         CONST_FONT_SIZE_SMALL,                       // charSize
         "default",                                   // state
         a_deersim.vehicles.length.toString(),        // string
         "Small"                                      // size
         );
   }

   {
      this.numObstacles = new TextString(
         marginX,                                     // x
         (CONST_FONT_SIZE_SMALL * 3) + (marginY * 3), // y
         CONST_FONT_SIZE_SMALL,                       // charSize
         "default",                                   // state
         "NUMBER OF OBSTACLES:",                      // string
         "Small"                                      // size
         );

      this.numObstaclesCtr = new TextString(
         (CONST_FONT_SIZE_SMALL * 20) + marginX,        // x, w/ 20 character indent
         ((CONST_FONT_SIZE_SMALL * 3) + (marginY * 3)), // y
         CONST_FONT_SIZE_SMALL,                         // charSize
         "default",                                     // state
         a_deersim.obstacles.length.toString(),         // string
         "Small"                                        // size
         );
   }

   {
      this.segmentsScanned = new TextString(
         marginX + (CONST_FONT_SIZE_SMALL * 3),       // x, w/ 3 character indent
         (CONST_FONT_SIZE_SMALL * 4) + (marginY * 4), // y
         CONST_FONT_SIZE_SMALL,                       // charSize
         "default",                                   // state
         "SEGMENTS SCANNED:",                         // string
         "Small"                                      // size
         );

      this.segmentCounter = 0; // Initialize the count of road segments scanned.

      this.segmentsScannedCtr = new TextString(
         marginX + (CONST_FONT_SIZE_SMALL * 20),      // x, w/ 20 character indent
         (CONST_FONT_SIZE_SMALL * 4) + (marginY * 4), // y
         CONST_FONT_SIZE_SMALL,                       // charSize
         "default",                                   // state
         this.segmentCounter.toString(),              // string
         "Small"                                      // size
         );
   }

   {
      this.activeSegments = new TextString(
         marginX + (CONST_FONT_SIZE_SMALL * 4),       // x, w/ 4 character indent
         (CONST_FONT_SIZE_SMALL * 5) + (marginY * 5), // y
         CONST_FONT_SIZE_SMALL,                       // charSize
         "default",                                   // state
         "ACTIVE SEGMENTS:",                          // string
         "Small"                                      // size
         );

      this.activeSegmentsCtr = new TextString(
         marginX + (CONST_FONT_SIZE_SMALL * 20),               // x, w/ 20 character indent
         (CONST_FONT_SIZE_SMALL * 5) + (marginY * 5),          // y
         CONST_FONT_SIZE_SMALL,                                // charSize
         "default",                                            // state
         a_deersim.roadManager.roadSegments.length.toString(), // string
         "Small"                                               // size
         );
   }
}; // LiveDebugger()

// ---- End of object declarations. ----

// ---- Start of function declarations. ----

/*-----------------------------------------------------*\
 | Drawing this LiveDebugger draws several TextStrings |
 | in the upper lefthand corner of the game canvas.    |
\*-----------------------------------------------------*/
LiveDebugger.prototype.draw = function() {
   this.FPS.draw();
   this.FPSCtr.draw();

   this.numObjects.draw();
   this.numObjectsCtr.draw();

   this.numVehicles.draw();
   this.numVehiclesCtr.draw();

   this.numObstacles.draw();
   this.numObstaclesCtr.draw();

   this.segmentsScanned.draw();
   this.segmentsScannedCtr.draw();

   this.activeSegments.draw();
   this.activeSegmentsCtr.draw();
}; // LiveDebugger.draw()

/*-------------------------------------------------------------------*\
 | Updating this LiveDebugger updates each TextString being used to  |
 | convey information about the game's performance to the developer. |
\*-------------------------------------------------------------------*/
LiveDebugger.prototype.update = function() {
   this.FPSCtr.updateWithStringOverwrite(
      deersim.frameTimes.length.toString()
      );

   this.numObjectsCtr.updateWithStringOverwrite(
      deersim.gameObjects.length.toString()
      );

   this.numVehiclesCtr.updateWithStringOverwrite(
      deersim.vehicles.length.toString()
      );

   this.numObstaclesCtr.updateWithStringOverwrite(
      deersim.obstacles.length.toString()
      );

   this.segmentsScannedCtr.updateWithStringOverwrite(
      this.segmentCounter.toString()
      );

   this.activeSegmentsCtr.updateWithStringOverwrite(
      deersim.roadManager.roadSegments.length.toString()
      );
}; // LiveDebugger.update()
