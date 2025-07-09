/*------------------------------------------------------------------------------------*\
 | File: deersim/profile.js                                                           |
 | Purpose: Defines the player profile, which manages statistics and logic pertinent  |
 | to the current round of play, and the player's performance. The player profile     |
 | also manages aesthetic objects such as the level bar and remaining deer DeerHeads. |
\*------------------------------------------------------------------------------------*/

function Profile() {
   this.level            = 1;
   this.previousLevel    = 0;
   this.remainingDeer    = 4;
   this.consecutiveLvls  = 0;
   // #TODO -- implement resets of consecutiveLvls when the player enters new environments.
   this.counter          = 80;
   this.currentLevelGate = 0;
   this.nextLevelGate    = 80;
   this.damage           = 0;
   this.xp               = 0;

   // #TODO -- add this to the objects array
   this.levelBar = new Bar(383, 699);

   this.numberBlockString = new NumberBlockString();

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

   this.locationMarker = new Cursor(
      this.mapBalloon.x + 30,  // x
      this.mapBalloon.y + 115, // y
      );

   this.exitSign = new ExitSign(
      800,                      // x, hand-chosen value
      CONST_CANVAS_HEIGHT - 48, // y, hand-chosen value
      "ExitSign01"              // imageHandle
      );

   this.createRemainingDeerHeads();
}; // Profile()

/*-----------------------------------------------------------------*\
 | Changes this Profile's amount of property damage. This function |
 | modifies the base value of a vehicle on a per-vehicle basis,    |
 | in order to return unique values for unique vehicles.           |
\*-----------------------------------------------------------------*/
Profile.prototype.changeDamage = function(baseValue) {
   var randomDecimal = Math.random();

   var modValue = baseValue + ((randomDecimal - 0.5) * (baseValue / 10));

   this.damage += Math.floor(modValue);

   return modValue;
};

/*----------------------------------------------------------------------------------*\
 | Modifies the count of remaining deer (i.e. lives)                                |
 | owned by the player Profile, by the value 'change'.                              |
 | @param int change -- the amount by which to change the Profile's remaining Deer. |
\*----------------------------------------------------------------------------------*/
Profile.prototype.changeRemainingDeer = function(change) {
   this.remainingDeer += change;

   if (this.remainingDeer > CONST_MAX_REMAINING_DEER)
      this.remainingDeer = CONST_MAX_REMAINING_DEER;

   if (this.remainingDeer < 0)
      this.remainingDeer = 0;
};

/*-----------------------------------------------------------------------*\
 | Create an array of DeerHeads to display the number of remaining deer. |
\*-----------------------------------------------------------------------*/
Profile.prototype.createRemainingDeerHeads = function() {
   if (this.remainingDeer > CONST_MAX_REMAINING_DEER)
      this.remainingDeer = CONST_MAX_REMAINING_DEER;

   if (this.remainingDeer < 0)
      this.remainingDeer = 0;

   this.remainingDeerHeads = new Array(CONST_MAX_REMAINING_DEER);

   for (var i = 0; i < CONST_MAX_REMAINING_DEER; i++) {
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
   for (var i = 0; i < this.remainingDeer; i++) {
      this.remainingDeerHeads[i].draw();
   }

   this.xpString.draw();
   this.levelBar.draw();
   this.numberBlockString.draw();
   this.exitSign.draw();

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
   if (deer.state === "active") {
      var numKeysPressed = 0;

      for (var key in keysDown) {
         var value = Number(key);

         switch (value) {
            case 37: // Key pressed is left arrow key.
               this.xp += 0.09;
               numKeysPressed++;
               break;
            case 39: // Key pressed is right arrow key.
               this.xp += 0.12;
               numKeysPressed++;
               break;
         }
      }

      if (numKeysPressed === 0) {
         this.xp += 0.1;
      }
   }
};

/*---------------------------------------------------------------------------------------*\
 | Initializes and returns TextStrings to display this Profile's level and experience.   |
 | @returns TextString[] textStrings -- this Profile's level and experience TextStrings. |
\*---------------------------------------------------------------------------------------*/
Profile.prototype.initTextStrings = function() {
   this.xpString = new TextString(220, 686, CONST_FONT_SIZE_SMALL, "default", "XP:  ", "Small");
};

/*-------------------------------------------------------------*\
 | Checks whether this Profile has crossed the next level's    |
 | experience gate, and calculates new member variables if so. |
\*-------------------------------------------------------------*/
Profile.prototype.setLevel = function() {
   if (this.xp >= this.nextLevelGate) {
      this.level++;
      this.consecutiveLvls++;
      this.counter += 10;
      this.currentLevelGate = this.nextLevelGate;
      this.nextLevelGate += this.counter;

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
   this.setLevel();
   this.updateTextStrings();
   this.updateLevelBar();

   this.numberBlockString.updatePropertyDamage(this.damage);

   this.exitSign.update(
      this.level
      );
};

/*-----------------------------------*\
 | Updates this Profile's level bar. |
\*-----------------------------------*/
Profile.prototype.updateLevelBar = function() {
   this.levelBar.updateFrontWidth(this.xp, this.currentLevelGate, this.nextLevelGate);
};

/*---------------------------------------------------------------------*\
 | Updates the level and experience TextStrings owned by this Profile. |
\*---------------------------------------------------------------------*/
Profile.prototype.updateTextStrings = function() {
   this.xpString.updateWithStringOverwrite("XP:  " + Math.floor(this.xp));
};
