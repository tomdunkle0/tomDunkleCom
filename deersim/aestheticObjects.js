/*-----------------------------------------------------------------*\
 | File: deersim/aestheticObjects.js                               |
 | Purpose: Defines game objects used to display ideas visually to |
 | the player without directly affecting gameplay or game logic.   |
\*-----------------------------------------------------------------*/

// ---- Start of object declarations. ----

/*---------------------------------------------------------------------------*\
 | Defines the AnimationBlock, and object which is created                   |
 | in order to display a linear animation to the player.                     |
 | @param int    x           -- the x position of this AnimationBlock.       |
 | @param int    y           -- the y position of this AnimationBlock.       |
 | @param int    dim         -- the dimension of this AnimationBlock.        |
 | @param int    length      -- the number of frames in this AnimationBlock. |
 | @param string imagePrefix -- the prefix for each frame's image handle.    |
\*---------------------------------------------------------------------------*/
function AnimationBlock(x, y, dim, length, imagePrefix) {
   this.x   = x;   // Assign this AnimationBlock's x position.
   this.y   = y;   // Assign this AnimationBlock's y position.
   this.dim = dim; // Assign this AnimationBlock's dimension.
   // #TODO -- as of writing this comment, this.dim is unused for this object. Remove it.
   
   // Assign this AnimationBlock's length (e.g. number of frames).
   this.length = length;
   
   // Assign the prefix for this AnimationBlock's image handles.
   this.imagePrefix = imagePrefix;
   
   // Initialize a counter for game iterations with respect to the animation's start.
   this.frameCounter = 0;
   
   // Initialize a flag for this AnimationBlock having finished.
   this.over = CONST_FALSE;
};

/*----------------------------------------------------------------------------*\
 | Defines the Background, an aesthetic object that is drawn before all other |
 | game objects, so as to fill the canvas. The Background is made to scroll   |
 | continuously by the BackgroundManager, giving the visual effect that the   |
 | active Deer is covering distance while running along the road.             |
\*----------------------------------------------------------------------------*/
function Background(x, imageHandle) {
   this.x           = x;           // Assign this Background's x position.
   this.y           = 0;           // Backgrounds must always exist at y = 0, to fill the canvas.
   this.imageHandle = imageHandle; // Assign this Background's image handle.
};

/*---------------------------------------------------------------------------------------*\
 | Defines the Bar, an object which displays a fractional value to the player, visually. |
 | Examples include boss health bars, the player's experience bar, powerup bars, etc.    |
 | @param int x -- this Bar's x position.                                                |
 | @param int y -- this Bar's y position.                                                |
\*---------------------------------------------------------------------------------------*/
function Bar(x, y) {
   this.x          = x;                // Assign this Bar's x position.
   this.y          = y;                // Assign this Bar's y position.
   this.backWidth  = CONST_BAR_WIDTH;  // Assign this Bar's back rectangle's width.
   this.frontWidth = 0;                // Assign this Bar's front rectangle its default width.
   this.height     = CONST_BAR_HEIGHT; // Assign this Bar's height.
   this.function   = "default";        // Assign a default value for this Bar's function.
   this.done       = CONST_FALSE;      // By default, Bars are not done.
}; // Bar()

/*----------------------------------------------------------------------------*\
 | Defines a Character, an ASCII object which is displayed onscreen.          |
 | @param x              -- the x position of this Character.                 |
 | @param y              -- the y position of this Character.                 |
 | @param dim            -- the dimension of this Character.                  |
 | @param state          -- the state (i.e. function) of this Character.      |
 | @param ASCIICharacter -- the ASCII character represented by this Character |
 | @param size           -- the size of this Character.                       |
\*----------------------------------------------------------------------------*/
function Character(x, y, dim, a_state, ASCIICharacter, size) {
   this.x    = x;    // Assign this Character's x position.
   this.y    = y;    // Assign this Character's y position.
   this.dim  = dim;  // Assign this Character's dimension.
   this.size = size; // Assign this Character's size.

   // Assign this Character's ASCII character.
   this.ASCIICharacter = ASCIICharacter;

   var minUpper = "A"; // 65
   var maxUpper = "Z"; // 90
   var minLower = "a"; // 97
   var maxLower = "z"; // 122

   // Assign a font and color ID based on this Character's state (i.e. function).
   switch (a_state) {
      case "default":
         this.font  = "Mono";
         this.colorID = "";
         break;
      case "music":
         this.font  = "Consolas";
         this.colorID = "Music"
         break;
      case "pickup":
         this.font  = "Mono"
         this.colorID = "Pickup";
         break;
      case "version":
         this.font  = "Consolas";
         this.colorID = "Version";
         break;
   }

   this.image = // the object identified by a string of this Character's qualities, concatenated.
      document.getElementById(this.size + this.font + this.ASCIICharacter + this.colorID);
};

/*-------------------------------------------------------*\
 | Defines the DeerHead object. DeerHeads are similar    |
 | to Cursors, but they do not blink. DeerHeads are used |
 | to track how many remaining deer the player has.      |
 | @param int x -- this DeerHead's x position.           |
 | @param int y -- this DeerHead's y position.           |
\*-------------------------------------------------------*/
function DeerHead(x, y) {
    this.x = x; // Assign this DeerHead's x position.
    this.y = y; // Assign this DeerHear's y position.
};

/*--------------------------------------------------------------------------*\
 | Defines the DeerStill, an object which represents a Deer standing still. |
\*--------------------------------------------------------------------------*/
function DeerStill(x, y) {
   this.x = x; // Assign this DeerStill's x position.
   this.y = y; // Assign this DeerStill's y position.
};

/*---------------------------------------------------------------*\
 | Defines the Exclamation, an object that appears briefly to    |
 | indicate to the player when a boss battle has been initiated. |
 | @param int intensity -- (0..1..2) = (yellow..orange..red)     |
\*---------------------------------------------------------------*/
function Exclamation(intensity) {
   // Initialize a counter for game iterations with respect to the Exclamation's start.
   this.frameCounter = 0;
   
   this.intensity = intensity; // Essentially tracks how obnoxious the Exclamation is.
   
   // Assign this Exclamation's positional coordinates based on its intensity.
   // These hardcoded values are based on the static canvas size used as of v0.21.
   if (this.intensity === 0) {
      this.x = (CONST_CANVAS_WIDTH / 2) - 61;
      this.y = 286;
   }
   else if (this.intensity === 1) {
      this.x = (CONST_CANVAS_WIDTH / 2) - 124;
      this.y = 215;
   }
   else if (this.intensity === 2) {
      this.x = (CONST_CANVAS_WIDTH / 2) - 246;
      this.y = 66;
   }
};

/*-----------------------------------------------------------------*\
 | Defines the ExitSign, an indicator owned by the                 |
 | profile that tells the player their current exit.               |
 | @param int    x           -- this ExitSign's x position.        |
 | @param int    y           -- this ExitSign's y position.        |
 | @param string imageHandle -- a handle to this ExitSign's image. |
\*-----------------------------------------------------------------*/
function ExitSign(x, y, imageHandle) {
   this.x           = x;
   this.y           = y;
   this.imageHandle = imageHandle;
}; // ExitSign

/*------------------------------------------------------------------------*\
 | Defines the ExpiringCursor, a special variation of the Cursor          |
 | object which displays for a pre-determined duration and then           |
 | disappears, after which it is removed from the game objects array.     |
 | @param int x               -- this ExpiringCursor's x position         |
 | @param int y               -- this ExpiringCursor's y position         |
 | @param int remainingFrames -- the number of game frames to display for |
\*------------------------------------------------------------------------*/
function ExpiringCursor(x, y, remainingFrames) {
   this.x               = x;
   this.y               = y;
   this.remainingFrames = remainingFrames;
}; // ExpiringCursor()

/*---------------------------------------------------------------------------*\
 | Defines the ExpiringObject, a type of game object which is displayed for  |
 | a pre-determined number of frames before expiring, at which point the     |
 | object disappears and is removed from the game's game objects array.      |
 | @param int    x               -- this ExpiringObject's x position         |
 | @param int    y               -- this ExpiringObject's y position         |
 | @param string imageHandle     -- a handle to this ExpiringObject's image  |
 | @param int    remainingFrames -- the number of game frames to display for |
\*---------------------------------------------------------------------------*/
function ExpiringObject(x, y, imageHandle, remainingFrames) {
   this.x               = x;
   this.y               = y;
   this.imageHandle     = imageHandle;
   this.remainingFrames = remainingFrames;
}; // ExpiringObject()

/*---------------------------------------------------------------------------*\
 | Defines the NumberBlockString, a special type of TextString that displays |
 | the player's accumulated property damage onscreen. The NumberBlockString  |
 | owns an array of NumberBlocks which are used as its characters.           |
\*---------------------------------------------------------------------------*/
function NumberBlockString() {
   // Assign this NumberBlockString's x position.
   this.x = CONST_CANVAS_WIDTH - (23 * 11) - 480;
   
   // Assign this NumberBlockString's y position.
   this.y = CONST_CANVAS_HEIGHT - 41;
   
   this.propertyDamage = 0;           // Assign the default property damage value.
   this.pdString       = "";          // Assign the default property damage string.
   this.numberBlocks   = new Array(); // Stores this NumberBlockString's NumberBlocks.
   
   // Create the first NumberBlock, which is always the one displaying '$'.
   this.numberBlocks[0] = new StaticMenuObject(this.x, this.y, "NumberBlock$");
   
   // Convert this Profile's property damage value to a string representation.
   this.intToString();
   
   // Create NumberBlocks and use them to populate this NumberBlockString's NumberBlock array.
   this.storeCharacters();
}; // NumberBlockString()

/*---------------------------------------------*\
 | Defines the Road, an object on which active |
 | game objects exist during a round of play.  |
\*---------------------------------------------*/
function Road(x, y) {
   this.x = x;                // Assign this Road's x position.
   this.y = y;                // Assign this Road's y position.
   this.imageHandle = "Road"; // Assign this Road's image handle to the default value.
};

/*---------------------------------------------------------------------*\
 | Defines the SpeakingYorig, a helpful and insightful version of      |
 | Yorig, Deer Scientist of Athens. SpeakingYorig appears onscreen     |
 | to alert the player that they can use the 'L' key to fire lightning |
 | after the active Deer has picked up the LightningBolt powerup.      |
\*---------------------------------------------------------------------*/
function SpeakingYorig() {
   this.x = 900;
   this.y = CONST_CANVAS_HEIGHT;

   // Counters used to control SpeakingYorig's sequence of events.
   this.animationCounter  = 0;
   this.ascendBeforeFrame = 50;
   this.descendAfterFrame = 170;

   // Speech balloon to be displayed in between ascending and descending.
   this.speechBalloon = new StaticMenuObject(
      this.x - 50,
      this.y - 125,
      "YorigsSpeechBalloon"
      );

   // Key icon to be displayed in between ascending and descending.
   this.keyIcon = new StaticMenuObject(
      this.x - 11,
      this.y - 116,
      "KeyIconL"
      );
   
}; // SpeakingYorig()

/*--------------------------------------------------------*\
 | Defines the Starburst, and object generated in various |
 | scenarios in order to exclaim something to the player. |
\*--------------------------------------------------------*/
function Starburst(x, y, imageHandle, purpose) {
   this.x             = x;           // Assign this Starburst's x position.
   this.y             = y;           // Assign this Starburst's y position.
   this.yOrig         = y;           // Separately track the original y position.
   this.imageHandle   = imageHandle; // Assign this Starburst's image handle.
   this.slideDistance = 60;          // Distance this Starburst will slide upward visually.
   this.purpose       = purpose;     // Assign this Starburst's purpose.
   this.done          = CONST_FALSE; // By default, Starbursts are not done.
}; // Starburst()

/*-------------------------------------------------------------------------*\
 | Defines the StaticMenuObject, an aesthetic game object                  |
 | which owns a handle to an image to display to the player.               |
 | @param int    x           -- this StaticMenuObject's x position.        |
 | @param int    y           -- this StaticMenuObject's y position.        |
 | @param string imageHandle -- a handle to this StaticMenuObject's image. |
\*-------------------------------------------------------------------------*/
function StaticMenuObject(x, y, imageHandle) {
   this.x           = x;           // Assign this StaticMenuObject's x position.
   this.y           = y;           // Assign this StaticMenuObject's y position.
   this.imageHandle = imageHandle; // Assign this StaticMenuObject's image handle.
};

/*-----------------------------------------------------------*\
 | Defines the TextBox, an object that owns both a DialogBox |
 | and an array of TextStrings, in order to display a        |
 | large amount of information to the player at one time.    |
\*-----------------------------------------------------------*/
function TextBox(x, y) {
   this.x             = x;  // Assign this TextBox's x position.
   this.y             = y;  // Assign this TextBox's y position.
   this.numberOfLines = 14; // This TextBox's number of lines of text.
   // planning to parameterize this when necessary.

   // Determine this TextBox's height based on its number of lines of text.
   this.height = (24 * (this.numberOfLines + 2));

   this.linesOfText = new Array(); // Stores this TextBox's TextStrings.

   // Manually compile the credits as TextStrings, plus the line length.
   // #TODO -- automate reading of this from a text file.
   // #TODO -- functionalize this
   this.linesOfText[0]  = new TextString(this.x + CONST_SIZE_SMALL,    // x
                           this.y + (CONST_LINE_HEIGHT_SMALL * 3) - 5, // y
                                         CONST_SIZE_SMALL,             // charSize
                                         "default",                    // state
                                         "Credits                   ", // string
                                         "Small");                     // size
   this.linesOfText[1]  = new TextString(this.x + CONST_SIZE_SMALL,    // x
                           this.y + (CONST_LINE_HEIGHT_SMALL * 4) - 5, // y
                                         CONST_SIZE_SMALL,             // charSize
                                         "default",                    // state
                                         "                          ", // string
                                         "Small");                     // size
   this.linesOfText[2]  = new TextString(this.x + CONST_SIZE_SMALL,    // x
                           this.y + (CONST_LINE_HEIGHT_SMALL * 5) - 5, // y
                                         CONST_SIZE_SMALL,             // charSize
                                         "default",                    // state
                                         "Game Author:    Tom Dunkle", // string
                                         "Small");                     // size
   this.linesOfText[3]  = new TextString(this.x + CONST_SIZE_SMALL,    // x
                           this.y + (CONST_LINE_HEIGHT_SMALL * 6) - 5, // y
                                         CONST_SIZE_SMALL,             // charSize
                                         "default",                    // state
                                         "Lead Artist:     Ry Omasta", // string
                                         "Small");                     // size
   this.linesOfText[4]  = new TextString(this.x + CONST_SIZE_SMALL,    // x
                           this.y + (CONST_LINE_HEIGHT_SMALL * 7) - 5, // y
                                         CONST_SIZE_SMALL,             // charSize
                                         "default",                    // state
                                         "Art        : Lars Gorczyca", // string
                                         "Small");                     // size
   this.linesOfText[5]  = new TextString(this.x + CONST_SIZE_SMALL,    // x
                           this.y + (CONST_LINE_HEIGHT_SMALL * 8) - 5, // y
                                         CONST_SIZE_SMALL,             // charSize
                                         "default",                    // state
                                         "Vocals____________________", // string
                                         "Small");                     // size
   this.linesOfText[6]  = new TextString(this.x + CONST_SIZE_SMALL,    // x
                           this.y + (CONST_LINE_HEIGHT_SMALL * 9) - 5, // y
                                         CONST_SIZE_SMALL,             // charSize
                                         "default",                    // state
                                         "      _____Randall Talibon", // string
                                         "Small");                     // size
   this.linesOfText[7]  = new TextString(this.x + CONST_SIZE_SMALL,    // x
                          this.y + (CONST_LINE_HEIGHT_SMALL * 10) - 5, // y
                                         CONST_SIZE_SMALL,             // charSize
                                         "default",                    // state
                                         "      __________Tom Dunkle", // string
                                         "Small");                     // size
   this.linesOfText[8]  = new TextString(this.x + CONST_SIZE_SMALL,    // x
                          this.y + (CONST_LINE_HEIGHT_SMALL * 11) - 5, // y
                                         CONST_SIZE_SMALL,             // charSize
                                         "default",                    // state
                                         "      ___________Ry Omasta", // string
                                         "Small");                     // size
   this.linesOfText[9]  = new TextString(this.x + CONST_SIZE_SMALL,    // x
                          this.y + (CONST_LINE_HEIGHT_SMALL * 12) - 5, // y
                                         CONST_SIZE_SMALL,             // charSize
                                         "default",                    // state
                                         "      ______Brandon Cooper", // string
                                         "Small");                     // size
   this.linesOfText[10] = new TextString(this.x + CONST_SIZE_SMALL,    // x
                          this.y + (CONST_LINE_HEIGHT_SMALL * 13) - 5, // y
                                         CONST_SIZE_SMALL,             // charSize
                                         "default",                    // state
                                         "      ______David Cuhsnick", // string
                                         "Small");                     // size
   this.linesOfText[11] = new TextString(this.x + CONST_SIZE_SMALL,    // x
                          this.y + (CONST_LINE_HEIGHT_SMALL * 14) - 5, // y
                                         CONST_SIZE_SMALL,             // charSize
                                         "default",                    // state
                                         "__________________________", // string
                                         "Small");                     // size
   this.linesOfText[12] = new TextString(this.x + CONST_SIZE_SMALL,    // x
                          this.y + (CONST_LINE_HEIGHT_SMALL * 15) - 5, // y
                                         CONST_SIZE_SMALL,             // charSize
                                         "default",                    // state
                                         "  Press enter to forget   ", // string
                                         "Small");                     // size
   this.linesOfText[13] = new TextString(this.x + CONST_SIZE_SMALL,    // x
                          this.y + (CONST_LINE_HEIGHT_SMALL * 16) - 5, // y
                                         CONST_SIZE_SMALL,             // charSize
                                         "default",                    // state
                                         "about these people forever", // string
                                         "Small");                     // size
   this.lineLength      = this.linesOfText[0].length;

   // Determine this TextBox's width based on the length of its lines of text.
   this.width = (CONST_SIZE_SMALL * (this.lineLength + 2));

   // #DEBUG
   // For reference, under current conditions the height
   // and width evaluate to 312 and 448, respectively.

   // This TextBox's DialogBox forms a space in which to display its lines of text.
   // #TODO -- automate choice of speech balloon based on width/height
   this.dialogBox = new StaticMenuObject(this.x, this.y - 90, "SpeechBalloon448x362");
}; // TextBox()

/*-----------------------------------------------------------*\
 | Defines the TextString, which is a collection of          |
 | Characters that are drawn onscreen.                       |
 | @param x        -- the x position of this TextString.     |
 | @param y        -- the y position of this TextString.     |
 | @param charSize -- the character size of this TextString. |
 | @param state    -- the state of this TextString.          |
 | @param string   -- the text which will be drawn onscreen. |
 | @param size     -- the size of the text to be drawn.      |
\*-----------------------------------------------------------*/
function TextString(x, y, charSize, a_state, string, size) {
   this.x        = x;           // Assign this TextString's x position.
   this.y        = y;           // Assign this TextString's y position.
   this.yOrig    = y;           // Separate variable for this TextString's original y position.
   this.charSize = charSize;    // Assign this TextString's Character size.
   this.done     = CONST_FALSE; // By default, TextStrings are not done.
   this.state    = a_state;     // Assign this TextString's state.
   this.string   = string;      // Assign this TextString's string.
   this.size     = size;        // Assign this TextString's size.
   
   // Create an array to store the characters in this TextString's string.
   this.characters = new Array();
   
   // By default, TextStrings can be removed by the clearTextStrings function.
   this.removable = CONST_TRUE;
   
   this.storeCharacters(); // Create Character objects for this TextString.
};

// ---- End of object declarations. ----

// ---- Start of function declarations. ----

/*------------------------------------------------*\
 | Draws this AnimationBlock at a rate of 12 FPS. |
\*------------------------------------------------*/
AnimationBlock.prototype.draw = function() {
   // Assign frame number (of animation) based on frame counter (of game).
   var frameNumber = Math.floor(this.frameCounter / 7);
   
   // Create a string version of the frame number.
   var frameNumberString = frameNumber.toString();
   
   // Put together this AnimationBlock's current image handle,
   // based on its prefix and frame number.
   var imageHandle = this.imagePrefix.concat(frameNumberString);
   
   // Draw the current animation frame.
   deersim.canvasContext.drawImage(document.getElementById(imageHandle), this.x, this.y);
}

/*------------------------------*\
 | Updates this AnimationBlock. |
\*------------------------------*/
AnimationBlock.prototype.update = function() {
   this.frameCounter++; // Increment this AnimationBlock's frame counter.
   
   // If this animation is over...
   /* if (this.frameCounter >= (7 * this.length)) {
      this.over = CONST_TRUE; // ...then mark this AnimationBlock 'over'.
   } */
}

/*------------------------*\
 | Draws this Background. |
\*------------------------*/
Background.prototype.draw = function() {
   deersim.canvasContext.drawImage(document.getElementById(this.imageHandle),
                           this.x, this.y); // Draw this Background's image.
};

/*--------------------------*\
 | Updates this Background. |
\*--------------------------*/
Background.prototype.update = function() {
   this.x -= 3; // Continuously move this Background to the left.
};

/*-----------------*\
 | Draws this Bar. |
\*-----------------*/
Bar.prototype.draw = function() {
   if (this.function === "enlightened") {
      deersim.canvasContext.drawImage(document.getElementById("EnlightenedBarBackRectangle"),
                              (this.x - 3), (this.y - 237));

      deersim.canvasContext.fillStyle = "#F6FF00"; // Set the front fill color to electric yellow.
   }
   else if (this.function === "hp") { // Draw this Bar's back rectangle & border.
      deersim.canvasContext.drawImage(document.getElementById("BossHPBarBackRectangle"),
                              (this.x - 3), (this.y - 237));

      deersim.canvasContext.fillStyle = "#FF0000"; // Set the front fill color to light red.
   }
   else if (this.function === "irradiated") { // Draw this Bar's back rectangle & border.
      deersim.canvasContext.drawImage(document.getElementById("IrradiatedBarBackRectangle"),
                              (this.x - 3), (this.y - 237));

      deersim.canvasContext.fillStyle = "#4FFF51"; // Set the front fill color to radioactive green.
   }
   else { // Draw this Bar's back rectangle & border.
      deersim.canvasContext.drawImage(document.getElementById("LevelBarBackRectangle"),
                              (this.x - 3), (this.y - 237));

      deersim.canvasContext.fillStyle = "#0000ff"; // Set the front fill color to dark blue.
   }

   // Draw this Bar's front rectangle.
   deersim.canvasContext.fillRect(this.x, this.y, this.frontWidth, this.height);
};

/*-------------------*\
 | Updates this Bar. |
\*-------------------*/
Bar.prototype.update = function() {
   if (this.function === "hp") {
      // Assign this Bar's front width based on its owner's hit points.
      this.frontWidth = ((boss.hp / boss.maxHP) * CONST_BAR_WIDTH);
   }
   // else if (this.function === "powerup") {
   else if ((this.function === "irradiated")
      || (this.function === "enlightened")) {
      this.frontWidth = ((Math.abs(deer.powerupCounter - CONST_POWERUP_LEN_FRAMES))
                       / (CONST_POWERUP_LEN_FRAMES / CONST_BAR_WIDTH));

      // Mark this bar 'done' if it is a powerup Bar that has fully depleted.
      if (this.frontWidth <= 0)
         this.done = CONST_TRUE;
   }
}; // Bar.update

/*--------------------------------------------------------------------------*\
 | Updates the width of the 'front' bar, e.g. the color that is             |
 | filling the bar visually. This function is called once per               |
 | game loop iteration for the player profile's experience bar.             |
 | @param int xp          -- the player profile's experience.               |
 | @param int currentGate -- experience gate of the player profile's level. |
 | @param int nextGate    -- experience gate of the upcoming level.         |
\*--------------------------------------------------------------------------*/
Bar.prototype.updateFrontWidth = function(xp, currentGate, nextGate) {
   // Calculate and assign a new front width for this Bar.
   this.frontWidth = ((xp - currentGate) / (nextGate - currentGate)) * this.backWidth;
};

/*--------------------------------*\
 | Draws this Character onscreen. |
\*--------------------------------*/
Character.prototype.draw = function() {
   // If this Character is not a space...
   if (this.ASCIICharacter !== " ") {
      // ...then draw this Character's image.
      deersim.canvasContext.drawImage(this.image, this.x, this.y);
   }
};

/*----------------------*\
 | Draws this DeerHead. |
\*----------------------*/
DeerHead.prototype.draw = function() {
    deersim.canvasContext.drawImage(document.getElementById("DeerHead"),
                            this.x, this.y); // Draw a deer head icon.
}; // DeerHead.draw()

/*-----------------------*\
 | Draws this DeerStill. |
\*-----------------------*/
DeerStill.prototype.draw = function() {
   deersim.canvasContext.drawImage(document.getElementById("BagDeerStill"),
                           this.x, this.y); // Draw the default DeerStill image.
};

/*--------------------------*\
 | Updaptes this DeerStill. |
\*--------------------------*/
DeerStill.prototype.update = function() {}; // Necessary for inclusion in game objects array.

/*---------------------------------------------------------*\
 | Draws this Exclamation, but only during half of game    |
 | frames. The Exclamation is meant to blink periodically. |
\*---------------------------------------------------------*/
Exclamation.prototype.draw = function() {
   // #TODO -- give the Exclamation's blink a 75% (rather than 50%) duty cycle.
   // If the game's animation timer is in the first half of its duty cycle...
   if (animationTimer < 15) {
      // ...then draw this Exclamation's image, which depends on its intensity.
      switch (this.intensity) {
         case 0:
            deersim.canvasContext.drawImage(document.getElementById("ExclamationGraphic"),
                                    this.x, this.y);
               break;
         case 1:
            deersim.canvasContext.drawImage(document.getElementById("ExclamationGraphicMedium"),
                                    this.x, this.y);
               break;
         case 2:
            deersim.canvasContext.drawImage(document.getElementById("ExclamationGraphicLarge"),
                                    this.x, this.y);
               break;
      }
   }
};

/*---------------------------*\
 | Updates this Exclamation. |
\*---------------------------*/
Exclamation.prototype.update = function() {
   this.frameCounter++; // Increment this Exclamation's frame counter.
};

/*----------------------*\
 | Draws this ExitSign. |
\*----------------------*/
ExitSign.prototype.draw = function() {
   deersim.canvasContext.drawImage(
      document.getElementById(this.imageHandle), // image
      this.x,                                    // x
      this.y                                     // y
      );
}; // ExitSign.draw()

/*--------------------------------------------------------------------------------*\
 | Updates this ExitSign. ExitSigns change whenever the player's exit increments. |
 | This is accomplished by building a new image handle every game loop iteration, |
 | and comparing the new handle to the previous game loop iterations'.            |
\*--------------------------------------------------------------------------------*/
ExitSign.prototype.update = function(level) {
   var prefix = "ExitSign";
   var suffix = "";

   /* Determine the suffix (exit). All handles are double-digited:
      Exits less than ten have image handles as "01", "02", etc.
      Exits ten and above have image handles as "10", "11", etc. */
   if (level <= 9) {
      suffix = "0";
      suffix = suffix.concat(level);
   }
   else if (level <= 74) {
      suffix = suffix.concat(level);
   }

   // Build the full imageHandle by concatenating the prefix and suffix.
   var handle = prefix.concat(suffix);

   /* If the image handle has changed since the previous game loop
      iteration, then re-assign this ExitSign's image handle.      */
   if (handle !== this.imageHandle) {
      this.imageHandle = handle;
   }
}; // ExitSign.update()

/*----------------------------*\
 | Draws this ExpiringCursor. |
\*----------------------------*/
ExpiringCursor.prototype.draw = function() {
   if (this.animationCounter < 12) {
      deersim.canvasContext.drawImage(
         document.getElementById("DeerHead"),
         this.x,
         this.y
         );
   }
}; // ExpiringCursor.draw()

/*------------------------------*\
 | Updates this ExpiringCursor. |
\*------------------------------*/
ExpiringCursor.prototype.update = function() {
   /* If this ExpiringCursor's animation counter has not yet
      elapsed, then increment it. Otherwise, reset it to zero. */
   if (this.animationCounter < 24)
      this.animationCounter++;
   else
      this.animationCounter = 0;

   /* Keep a running downward count of remaining
      game frames before this ExpiringCursor expires. */
   if (this.remainingFrames > 0)
      this.remainingFrames--;
}; // ExpiringCursor.update()

/*----------------------------*\
 | Draws this ExpiringObject. |
\*----------------------------*/
ExpiringObject.prototype.draw = function() {
   deersim.canvasContext.drawImage(
      document.getElementById(this.imageHandle), // image
      this.x,                                    // x
      this.y                                     // y
      );
}; // ExpiringObject.draw()

/*-------------------------------------------------------------*\
 | Updates this ExpiringObject. ExpiringObjects keep a running |
 | downward count of remaining game frames before they expire. |
\*-------------------------------------------------------------*/
ExpiringObject.prototype.update = function() {
   if (this.remainingFrames > 0) {
      this.remainingFrames--;
   }
}; // ExpiringObject.update()

/*-------------------------------*\
 | Draws this NumberBlockString. |
\*-------------------------------*/
NumberBlockString.prototype.draw = function() {
   // Draw each one of this NumberBlockString's NumberBlocks.
   for (var numberBlock in this.numberBlocks) {
      this.numberBlocks[numberBlock].draw();
   }
};

/*-----------------------------------------------------------------------------*\
 | Converts this NumberBlockString's property damage value from an integer     |
 | to a string, in the format expected to be displayed by a NumberBlockString. |
\*-----------------------------------------------------------------------------*/
NumberBlockString.prototype.intToString = function() {
   // Create a string representation of this NumberBlockString's property damage.
   var pdSuffix = this.propertyDamage.toString();
   
   // Stores the number of zeroes necessary to pad this NumberBlockString's property damage
   // in order to meet the 11 character standardization of NumberBlockStrings.
   var numNecessaryZeroes = 10 - pdSuffix.length;
   
   var pdPrefix = "$"; // Stores all characters which must precede pdSuffix.
   
   // Add each necessary zero to pdPrefix.
   for (var i = 0; i < numNecessaryZeroes; i++)
      pdPrefix += "0";
   
   this.pdString = pdPrefix + pdSuffix;
};

/*------------------------------------------------------*\
 | Instantiates NumberBlocks which are then used to     |
 | populate this NumberBlockString's NumberBlock array. |
\*------------------------------------------------------*/
NumberBlockString.prototype.storeCharacters = function() {
   // For each position in this NumberBlockString after the initial '$'...
   for (var i = 1; i < this.pdString.length; i++) {
      // ...create a new NumberBlock to occupy the position.
      this.numberBlocks[i] = new StaticMenuObject(this.x + (i * 22),
                                             this.y,
                                             "NumberBlock" + this.pdString[i]);
   }
};

/*------------------------------------------------------------------*\
 | Updates this NumberBlockString's property damage value, and then |
 | updates this NumberBlockString's NumberBlocks accordingly.       |
\*------------------------------------------------------------------*/
NumberBlockString.prototype.updatePropertyDamage = function(newPDvalue) {
   this.propertyDamage = newPDvalue; // Assign the new property damage value.
   
   // Convert this Profile's property damage value to a string representation.
   this.intToString();
   
   // Create NumberBlocks and use them to populate this NumberBlockString's NumberBlock array.
   this.storeCharacters();
};

/*------------------*\
 | Draws this Road. |
\*------------------*/
Road.prototype.draw = function() {
   deersim.canvasContext.drawImage(document.getElementById(this.imageHandle),
                           this.x, this.y); // Draw this Road's image.
};

/*---------------------*\
 | Updaptes this Road. |
\*---------------------*/
// Necessary for inclusion in game objects array.
Road.prototype.update = function() {};

/*-------------------------------------------------------------------------*\
 | Draws this SpeakingYorig, which includes drawing its speech balloon     |
 | and key icon during the period of 50-150 game frames after its creation |
 | (i.e. after it finishes ascending, and before it begins descending).    |
\*-------------------------------------------------------------------------*/
SpeakingYorig.prototype.draw = function() {
   deersim.canvasContext.drawImage( // Draw Yorig.
      document.getElementById("SpeakingYorig"), // imageHandle
      this.x,                                   // x
      this.y                                    // y
      );

   /* If this SpeakingYorig currently exists between relative game frames
      50-150, then also draw this SpeakingYorig's speech balloon and key icon. */
   if ((this.animationCounter >= this.ascendBeforeFrame)
    && (this.animationCounter <= this.descendAfterFrame))
   {
      this.speechBalloon.draw();
      this.keyIcon.draw();
   }
}; // SpeakingYorig.draw()

/*-------------------------------------------------------------------------------*\
 | Updates this SpeakingYorig. SpeakingYorigs exhibit the following sequence:    |
 | 1.) Ascend for the first 50 game frames that they exist.                      |
 | 2.) Stay still until 150 game frames after they were created.                 |
 | 3.) Begin to descend at 150 game frames after they were created.              |
\*-------------------------------------------------------------------------------*/
SpeakingYorig.prototype.update = function() {
   if (this.animationCounter < this.ascendBeforeFrame)
      this.y = this.y - 3; // Ascend before 50 game frames.

   if (this.animationCounter > this.descendAfterFrame)
      this.y = this.y + 3; // Descend after 150 game frames.

   this.animationCounter++;
}; // SpeakingYorig.update()

/*-----------------------*\
 | Draws this Starburst. |
\*-----------------------*/
Starburst.prototype.draw = function() {
   deersim.canvasContext.drawImage(document.getElementById(this.imageHandle),
                           this.x, this.y); // Draw this Starburst's image.
};

/*------------------------------------------------------------*\
 | Updaptes this Starburst. Starbursts slide upwards visually |
 | for a pre-determined distance and then disappear.          |
\*------------------------------------------------------------*/
Starburst.prototype.update = function() {
   if (this.y > this.yOrig - this.slideDistance)
      this.y = this.y - 2;
   if (this.y <= this.yOrig - this.slideDistance)
      this.done = CONST_TRUE;
};

/*------------------------------*\
 | Draws this StaticMenuObject. |
\*------------------------------*/
StaticMenuObject.prototype.draw = function() {
   deersim.canvasContext.drawImage(document.getElementById(this.imageHandle),
                           this.x, this.y); // Draw this StaticMenuObject's image.
};

/*---------------------------------*\
 | Updaptes this StaticMenuObject. |
\*---------------------------------*/
// Necessary for inclusion in game objects array.
StaticMenuObject.prototype.update = function() {};

/*---------------------*\
 | Draws this TextBox. |
\*---------------------*/
TextBox.prototype.draw = function() {
   this.dialogBox.draw(); // Draw this TextBox's DialogBox.

   for (var lineOfText in this.linesOfText)
      this.linesOfText[lineOfText].draw();
};

/*-----------------------*\
 | Updates this TextBox. |
\*-----------------------*/
TextBox.prototype.update = function() {}; // Necessary for inclusion in game objects array.

/*-------------------------------------------*\
 | Draws this TextString onscreen by drawing |
 | each of its Characters, one by one.       |
\*-------------------------------------------*/
TextString.prototype.draw = function() {    
   // For each Character in this TextString,
   for (var i = 0; i < this.characters.length; i++) {
      this.characters[i].draw(); // Draw the Character.
   }
};

/*---------------------------------------------------------*\
 | Returns true if this TextString is finished displaying, |
 | and should be removed from the objects array.           |
\*---------------------------------------------------------*/
TextString.prototype.isDone = function() {
   return this.done;
}

/*----------------------------------------------------------*\
 | For each character in this TextString's string,          |
 | Create a Character Object at the corresponding position. |
\*----------------------------------------------------------*/
TextString.prototype.storeCharacters = function() {
   for (var i = 0; i < this.string.length; i++) {
      this.characters.push(
         new Character(
            this.x + (i * this.charSize), // x
            this.y,                       // y
            this.charSize,                // dim
            this.state,                   // state
            this.string[i],               // ASCIICharacter
            this.size                     // size
            )
         );
   }
};

/*--------------------------*\
 | Updates this TextString. |
\*--------------------------*/
TextString.prototype.update = function() {
   if (this.state === "pickup") {
      for (var i = 0; i < this.characters.length; i++) {
         if (this.characters[i].y > this.yOrig - 60)
            this.characters[i].y = this.characters[i].y - 2;
         if (this.characters[i].y <= this.yOrig - 60)
            this.done = true;
      }
   }
}

/*---------------------------------------------------------------------------*\
 | Updates this TextString, and overwrites the                               |
 | TextString's string with the value provided.                              |
 | @param {string} newString -- value to write over this TextString's string |
\*---------------------------------------------------------------------------*/
TextString.prototype.updateWithStringOverwrite = function(newString) {
   // If the new string is not equal to this TextString's current string,
   if (newString !== this.string) {
      // Assign the new string to this TextString.
      this.string = newString;
      
      // Allocate a new array for this TextString's
      // characters, and forget about the old array.
      this.characters = new Array();
      
      // Store this TextString's characters in its new array.
      this.storeCharacters();
   }
};