/*------------------------------------------------------------------------------------*\
 | File: deersim/profile.js                                                           |
 | Purpose: Defines the player profile, which manages statistics and logic pertinent  |
 | to the current round of play, and the player's performance. The player profile     |
 | also manages aesthetic objects such as the level bar and remaining deer DeerHeads. |
\*------------------------------------------------------------------------------------*/

function Profile() {
   this.level            = 1;  // Assign this Profile's current level, in terms of experience.
   this.previousLevel    = 0;  // Assign this Profile's previous level, in terms of experience.
   this.remainingDeer    = 4;  // Assign this Profile's number of remaining deer.
   this.consecutiveLvls  = 0;  // Stores number of levels grown within current environment.
   // #TODO -- implement resets of consecutiveLvls when the player enters new environments.
   this.counter          = 80; // Assign this Profile's counter, for gating level growth.
   this.currentLevelGate = 0;  // Assign the current level's experience gate.
   this.nextLevelGate    = 80; // Assign the experience gate for level 2.
   this.damage           = 0;  // Assign this Profile's amount of property damage.
   this.xp               = 0;  // Assign this Profile's experience.

   // #TODO -- add this to the objects array
   this.levelBar = new Bar(383, 699); // Create this Profile's level bar.

   // Create this Profile's NumberBlockString to display property damage to the player.
   this.numberBlockString = new NumberBlockString();

   /* Create a balloon and image owned by this Profile which will occasionally
      be used to display the map of the current level to the player.           */
   this.mapBalloon = new StaticMenuObject(
      50,                    // x
      50,                    // y
      "SpeechBalloon246x234" // imageHandle
      );
   
   this.connecticutMap = new StaticMenuObject(
      50,              // x
      50,              // y
      "ConnecticutMap" // imageHandle
      );

   /* Create a cursor to display the active deer herd's
      current location, set by default to exit 1 in I-84. */
   this.locationMarker = new Cursor(
      this.mapBalloon.x + 30,  // x
      this.mapBalloon.y + 115, // y
      );

   /* Create an ExitSign to display the player's
      current Exit. By default, this is exit 1 in I-84. */
   this.exitSign = new ExitSign(
      800,                      // x, hand-chosen value
      CONST_CANVAS_HEIGHT - 48, // y, hand-chosen value
      "ExitSign01"              // imageHandle
      );

   // Create an array of DeerHeads to display the number of remaining deer.
   this.createRemainingDeerHeads();
}; // Profile()

/*-----------------------------------------------------------------*\
 | Changes this Profile's amount of property damage. This function |
 | modifies the base value of a vehicle on a per-vehicle basis,    |
 | in order to return unique values for unique vehicles.           |
\*-----------------------------------------------------------------*/
Profile.prototype.changeDamage = function(baseValue) {
   var randomDecimal = Math.random(); // Generate a random decimal.

   // Calculate a modified value, based on the base value and the random decimal.
   var modValue = baseValue + ((randomDecimal - 0.5) * (baseValue / 10));

   // Change this Profile's damage by the modified value, rounded down.
   this.damage += Math.floor(modValue);

   return modValue; // Modified value can be used outside this function.
};

/*----------------------------------------------------------------------------------*\
 | Modifies the count of remaining deer (i.e. lives)                                |
 | owned by the player Profile, by the value 'change'.                              |
 | @param int change -- the amount by which to change the Profile's remaining Deer. |
\*----------------------------------------------------------------------------------*/
Profile.prototype.changeRemainingDeer = function(change) {
   this.remainingDeer += change; // Modify the count of remaining deer.

   // Prevent the player from owning more than the maximum allowed remaining Deer.
   if (this.remainingDeer > CONST_MAX_REMAINING_DEER)
      this.remainingDeer = CONST_MAX_REMAINING_DEER;

   // Prevent the player from owning fewer than zero remaining Deer.
   if (this.remainingDeer < 0)
      this.remainingDeer = 0;
};

/*-----------------------------------------------------------------------*\
 | Create an array of DeerHeads to display the number of remaining deer. |
\*-----------------------------------------------------------------------*/
Profile.prototype.createRemainingDeerHeads = function() {
   // Prevent the player from owning more than the maximum allowed remaining Deer.
   if (this.remainingDeer > CONST_MAX_REMAINING_DEER)
      this.remainingDeer = CONST_MAX_REMAINING_DEER;

   // Prevent the player from owning fewer than zero remaining Deer.
   if (this.remainingDeer < 0)
      this.remainingDeer = 0;

   // Initialize an array for this Profile to display
   // the number of remaining deer to the player.
   this.remainingDeerHeads = new Array(CONST_MAX_REMAINING_DEER);

   // For every one of this Profile's remaining deer,
   for (var i = 0; i < CONST_MAX_REMAINING_DEER; i++) {
      // Create a new DeerHead object to represent the remaining deer.
      // Separate rows are defined for DeerHeads #1-10, and #11-20.
      if (i < 10) // Bottom row
         this.remainingDeerHeads[i] = new DeerHead((i * CONST_MAX_REMAINING_DEER) + 10,
                                                   CONST_CANVAS_HEIGHT - 34);
      else if ((i >= 10) && (i < CONST_MAX_REMAINING_DEER)) // Top row
         this.remainingDeerHeads[i] = new DeerHead(((i - 10) * CONST_MAX_REMAINING_DEER) + 10,
                                                   CONST_CANVAS_HEIGHT - 54);
   }
};

/*------------------------------------------------------------*\
 | Draws all objects owned by and associated with this        |
 | Profile. The Profile owns objects that display information |
 | to the player about their progress in the game.            |
\*------------------------------------------------------------*/
Profile.prototype.draw = function() {
   // For every DeerHead owned by this Profile,
   for (var i = 0; i < this.remainingDeer; i++) {
      this.remainingDeerHeads[i].draw(); // Draw the DeerHead.
   }

   this.xpString.draw();          // Draw the player profile's experience string onscreen.
   this.levelBar.draw();          // Draw the player profile's level bar onscreen.
   this.numberBlockString.draw(); // Draw the player profile's property damage onscreen.
   this.exitSign.draw();          // Draw the player profile's ExitSign onscreen.

   // If the game is paused, display the map and location cursor to the player.
   if (deersim.state === "pause") {
      this.mapBalloon.draw();
      this.connecticutMap.draw();
      this.locationMarker.draw();
   }
};

/*---------------------------------------------------------------------*\
 | Controls the building of player experience (XP) based on key input. |
 | NOTE -- this function is algorithmically different than in deersim  |
 | classic, albeit slightly. On frames where the left/right arrow keys |
 | are held, pre-pressed, the warranted 0.09 or 0.12 xp will not be    |
 | granted here. To compensate, no keys pressed grants 0.11 instead of |
 | 0.1 as in deersim classic.                                          |
\*---------------------------------------------------------------------*/
Profile.prototype.getInput = function() {
   if (deer.state === "active") { // Monitor input during a round of play.
      var numKeysPressed = 0; // Stores the number of keys pressed during this frame.

      for (var key in keysDown) { // Iterate through each key currently pressed.
         var value = Number(key); // Assign numeric wrapper of key to variable 'value'.

         switch (value) {
            case 37: // Key pressed is left arrow key.
               this.xp += 0.09; // Add slightly less experience.
               numKeysPressed++;
               break;
            case 39: // Key pressed is right arrow key.
               this.xp += 0.12; // Add slightly more experience.
               numKeysPressed++;
               break;
         }
      }

      if (numKeysPressed === 0) { // If no keys are currently pressed...
         this.xp += 0.1; // ...then the player profile gains 0.1 experience.
      }
   }
};

/*---------------------------------------------------------------------------------------*\
 | Initializes and returns TextStrings to display this Profile's level and experience.   |
 | @returns TextString[] textStrings -- this Profile's level and experience TextStrings. |
\*---------------------------------------------------------------------------------------*/
Profile.prototype.initTextStrings = function() {
   // Initialize a TextString to display this Profile's experience.
   this.xpString = new TextString(220, 686, CONST_FONT_SIZE_SMALL, "default", "XP:  ", "Small");
};

/*-------------------------------------------------------------*\
 | Checks whether this Profile has crossed the next level's    |
 | experience gate, and calculates new member variables if so. |
\*-------------------------------------------------------------*/
Profile.prototype.setLevel = function() {
   // If this Profile's experience has exceeded the next level's gate...
   if (this.xp >= this.nextLevelGate) {
      this.level++;                               // ...then increment its level...
      this.consecutiveLvls++;                     // ...increase consecutive levels...
      this.counter += 10;                         // ...slightly increase its counter...
      this.currentLevelGate = this.nextLevelGate; // ...relay next to current level gate...
      this.nextLevelGate += this.counter;         // ...and jump to next gate, based on counter.

      // Modify this Profile's cursor location based on its level.
      switch (this.level) {
         case 0:  this.locationMarker.x = 80;  this.locationMarker.y = 165; break; // EXIT 1
         case 1:  this.locationMarker.x = 84;  this.locationMarker.y = 166; break; // EXIT 2
         case 2:  this.locationMarker.x = 86;  this.locationMarker.y = 166; break; // EXIT 3
         case 3:  this.locationMarker.x = 88;  this.locationMarker.y = 166; break; // EXIT 4
         case 4:  this.locationMarker.x = 89;  this.locationMarker.y = 165; break; // EXIT 5
         case 5:  this.locationMarker.x = 90;  this.locationMarker.y = 163; break; // EXIT 6
         case 6:  this.locationMarker.x = 95;  this.locationMarker.y = 163; break; // EXIT 7
         case 7:  this.locationMarker.x = 96;  this.locationMarker.y = 162; break; // EXIT 8
         case 8:  this.locationMarker.x = 100; this.locationMarker.y = 163; break; // EXIT 9
         case 9:  this.locationMarker.x = 104; this.locationMarker.y = 163; break; // EXIT 10
         case 10: this.locationMarker.x = 106; this.locationMarker.y = 163; break; // EXIT 11
         case 11: this.locationMarker.x = 108; this.locationMarker.y = 162; break; // EXIT 12
         case 12: this.locationMarker.x = 110; this.locationMarker.y = 157; break; // EXIT 13
         case 13: this.locationMarker.x = 112; this.locationMarker.y = 156; break; // EXIT 14
         case 14: this.locationMarker.x = 114; this.locationMarker.y = 154; break; // EXIT 15
         case 15: this.locationMarker.x = 116; this.locationMarker.y = 153; break; // EXIT 16
         case 16: this.locationMarker.x = 121; this.locationMarker.y = 150; break; // EXIT 17
         case 17: this.locationMarker.x = 124; this.locationMarker.y = 148; break; // EXIT 18
         case 18: this.locationMarker.x = 126; this.locationMarker.y = 145; break; // EXIT 19
         case 19: this.locationMarker.x = 128; this.locationMarker.y = 144; break; // EXIT 20
         case 20: this.locationMarker.x = 130; this.locationMarker.y = 144; break; // EXIT 21
         case 21: this.locationMarker.x = 132; this.locationMarker.y = 145; break; // EXIT 22
         case 22: this.locationMarker.x = 134; this.locationMarker.y = 147; break; // EXIT 23
         case 23: this.locationMarker.x = 135; this.locationMarker.y = 148; break; // EXIT 24
         case 24: this.locationMarker.x = 137; this.locationMarker.y = 147; break; // EXIT 25
         case 25: this.locationMarker.x = 139; this.locationMarker.y = 147; break; // EXIT 26
         case 26: this.locationMarker.x = 144; this.locationMarker.y = 143; break; // EXIT 27
         case 27: this.locationMarker.x = 145; this.locationMarker.y = 142; break; // EXIT 28
         case 28: this.locationMarker.x = 146; this.locationMarker.y = 141; break; // EXIT 29
         case 29: this.locationMarker.x = 146; this.locationMarker.y = 140; break; // EXIT 30
         case 30: this.locationMarker.x = 146; this.locationMarker.y = 137; break; // EXIT 31
         case 31: this.locationMarker.x = 149; this.locationMarker.y = 134; break; // EXIT 32
         case 32: this.locationMarker.x = 150; this.locationMarker.y = 130; break; // EXIT 33
         case 33: this.locationMarker.x = 150; this.locationMarker.y = 128; break; // EXIT 34
         case 34: this.locationMarker.x = 153; this.locationMarker.y = 130; break; // EXIT 35
         case 35: this.locationMarker.x = 154; this.locationMarker.y = 129; break; // EXIT 36
         case 36: this.locationMarker.x = 155; this.locationMarker.y = 124; break; // EXIT 37
         case 37: this.locationMarker.x = 156; this.locationMarker.y = 122; break; // EXIT 38
         case 38: this.locationMarker.x = 158; this.locationMarker.y = 122; break; // EXIT 39
         case 39: this.locationMarker.x = 161; this.locationMarker.y = 121; break; // EXIT 40
         case 40: this.locationMarker.x = 162; this.locationMarker.y = 120; break; // EXIT 41
         case 41: this.locationMarker.x = 163; this.locationMarker.y = 120; break; // EXIT 42
         case 42: this.locationMarker.x = 163; this.locationMarker.y = 118; break; // EXIT 43
         case 43: this.locationMarker.x = 164; this.locationMarker.y = 118; break; // EXIT 44
         case 44: this.locationMarker.x = 165; this.locationMarker.y = 118; break; // EXIT 45
         case 45: this.locationMarker.x = 166; this.locationMarker.y = 117; break; // EXIT 46
         case 46: this.locationMarker.x = 167; this.locationMarker.y = 117; break; // EXIT 47
         case 47: this.locationMarker.x = 167; this.locationMarker.y = 116; break; // EXIT 48
         case 48: this.locationMarker.x = 168; this.locationMarker.y = 115; break; // EXIT 49
         case 49: this.locationMarker.x = 169; this.locationMarker.y = 114; break; // EXIT 50
         case 50: this.locationMarker.x = 170; this.locationMarker.y = 115; break; // EXIT 51
         case 51: this.locationMarker.x = 171; this.locationMarker.y = 115; break; // EXIT 52
         case 52: this.locationMarker.x = 174; this.locationMarker.y = 114; break; // EXIT 53
         case 53: this.locationMarker.x = 175; this.locationMarker.y = 113; break; // EXIT 54
         case 54: this.locationMarker.x = 176; this.locationMarker.y = 113; break; // EXIT 55
         case 55: this.locationMarker.x = 177; this.locationMarker.y = 113; break; // EXIT 56
         case 56: this.locationMarker.x = 178; this.locationMarker.y = 113; break; // EXIT 57
         case 57: this.locationMarker.x = 179; this.locationMarker.y = 113; break; // EXIT 58
         case 58: this.locationMarker.x = 181; this.locationMarker.y = 113; break; // EXIT 59
         case 59: this.locationMarker.x = 182; this.locationMarker.y = 111; break; // EXIT 60
         case 60: this.locationMarker.x = 183; this.locationMarker.y = 110; break; // EXIT 61
         case 61: this.locationMarker.x = 184; this.locationMarker.y = 109; break; // EXIT 62
         case 62: this.locationMarker.x = 187; this.locationMarker.y = 108; break; // EXIT 63
         case 63: this.locationMarker.x = 190; this.locationMarker.y = 106; break; // EXIT 64
         case 64: this.locationMarker.x = 191; this.locationMarker.y = 106; break; // EXIT 65
         case 65: this.locationMarker.x = 194; this.locationMarker.y = 104; break; // EXIT 66
         case 66: this.locationMarker.x = 199; this.locationMarker.y = 104; break; // EXIT 67
         case 67: this.locationMarker.x = 203; this.locationMarker.y = 101; break; // EXIT 68
         case 68: this.locationMarker.x = 207; this.locationMarker.y = 98;  break; // EXIT 69
         case 69: this.locationMarker.x = 210; this.locationMarker.y = 95;  break; // EXIT 70 
         case 70: this.locationMarker.x = 213; this.locationMarker.y = 92;  break; // EXIT 71
         case 71: this.locationMarker.x = 217; this.locationMarker.y = 90;  break; // EXIT 72
         case 72: this.locationMarker.x = 218; this.locationMarker.y = 88;  break; // EXIT 73
         case 73: this.locationMarker.x = 222; this.locationMarker.y = 81;  break; // EXIT 74
      }
   }
};

/*-----------------------*\
 | Updates this Profile. |
\*-----------------------*/
Profile.prototype.update = function() {
   this.setLevel();          // Set this Profile's level.
   this.updateTextStrings(); // Update this Profile's TextStrings.
   this.updateLevelBar();    // Update this Profile's level bar.

   // Update this Profile's NumberBlockString's property damage value.
   this.numberBlockString.updatePropertyDamage(this.damage);

   // Update this Profile's ExitSign.
   this.exitSign.update(
      this.level
      );
};

/*-----------------------------------*\
 | Updates this Profile's level bar. |
\*-----------------------------------*/
Profile.prototype.updateLevelBar = function() {
   // Update this Profile's level bar using this Profile's member variables.
   this.levelBar.updateFrontWidth(this.xp, this.currentLevelGate, this.nextLevelGate);
};

/*---------------------------------------------------------------------*\
 | Updates the level and experience TextStrings owned by this Profile. |
\*---------------------------------------------------------------------*/
Profile.prototype.updateTextStrings = function() {
   // Update this Profile's experience TextString.
   this.xpString.updateWithStringOverwrite("XP:  " + Math.floor(this.xp));
};