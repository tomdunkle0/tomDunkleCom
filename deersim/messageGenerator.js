/*-----------------------------------------------------*\
 | File: deersim/messageGenerator.js                   |
 | Purpose: Generates messages which can be passed to  |
 | other game functions. Implemented as a separate     |
 | module to provide space for many possible messages. |
\*-----------------------------------------------------*/

var line1; // First line of message, in TextString form.
var line2; // Second line of message, in TextString form.
var line3; // Third line of message, in TextString form.
var line4; // Fourth line of message, in TextString form.

function MessageGenerator() {
   this.randomDecimal = 0;
};

/*-----------------------------------------------------------------------*\
 | Generates a message to display to the user during game over.          |
 | @returns Array<TextString> lines -- an Array of the lines             |
 |                                     comprising the game over message. |
\*-----------------------------------------------------------------------*/
MessageGenerator.prototype.gameOverMessage = function() {
   var lines = new Array();

   this.randomDecimal = Math.random();

   if (this.randomDecimal < 0.25) {
      line1 = new TextString(((CONST_CANVAS_WIDTH / 2) - (20 * CONST_FONT_SIZE_SMALL)),
                             235,
                             CONST_FONT_SIZE_SMALL,
                             "default",
                             "It is not in the nature of the",
                             "Small");

      line2 = new TextString(((CONST_CANVAS_WIDTH / 2) - (20 * CONST_FONT_SIZE_SMALL)),
                             260,
                             CONST_FONT_SIZE_SMALL,
                             "default",
                             "          deer to give up",
                             "Small");

      line3 = new TextString(((CONST_CANVAS_WIDTH / 2) - (20 * CONST_FONT_SIZE_SMALL)),
                             285,
                             CONST_FONT_SIZE_SMALL,
                             "default",
                             "   from the writings of Yorig",
                             "Small");

      line4 = new TextString(((CONST_CANVAS_WIDTH / 2) - (20 * CONST_FONT_SIZE_SMALL)),
                             310,
                             CONST_FONT_SIZE_SMALL,
                             "default",
                             "         Deer Scientist of Athens",
                             "Small");
   }
   else if ((this.randomDecimal >= 0.25) && (this.randomDecimal < 0.5)) {
      line1 = new TextString(((CONST_CANVAS_WIDTH / 2) - (20 * CONST_FONT_SIZE_SMALL)),
                             235,
                             CONST_FONT_SIZE_SMALL,
                             "default",
                             "Impossible! A deer will simply not stay",
                             "Small");

      line2 = new TextString(((CONST_CANVAS_WIDTH / 2) - (20 * CONST_FONT_SIZE_SMALL)),
                             260,
                             CONST_FONT_SIZE_SMALL,
                             "default",
                             " irradiated for more than seven seconds!",
                             "Small");

      line3 = new TextString(((CONST_CANVAS_WIDTH / 2) - (20 * CONST_FONT_SIZE_SMALL)),
                             285,
                             CONST_FONT_SIZE_SMALL,
                             "default",
                             "      from the writings of Yorig",
                             "Small");

      line4 = new TextString(((CONST_CANVAS_WIDTH / 2) - (20 * CONST_FONT_SIZE_SMALL)),
                             310,
                             CONST_FONT_SIZE_SMALL,
                             "default",
                             "         Deer Scientist of Athens",
                             "Small");
   }
   else if ((this.randomDecimal >= 0.5) && (this.randomDecimal < 0.75)) {
      line1 = new TextString(((CONST_CANVAS_WIDTH / 2) - (20 * CONST_FONT_SIZE_SMALL)),
                             235,
                             CONST_FONT_SIZE_SMALL,
                             "default",
                             "x633------------------FATAL ERRO",
                             "Small");

      line2 = new TextString(((CONST_CANVAS_WIDTH / 2) - (20 * CONST_FONT_SIZE_SMALL)),
                             260,
                             CONST_FONT_SIZE_SMALL,
                             "default",
                             "   $ | $ || $ | $ ||| $ |",
                             "Small");

      line3 = new TextString(((CONST_CANVAS_WIDTH / 2) - (20 * CONST_FONT_SIZE_SMALL)),
                             285,
                             CONST_FONT_SIZE_SMALL,
                             "default",
                             "R TRANSMISSIONS ERROR FOR MORE INF",
                             "Small");

      line4 = new TextString(((CONST_CANVAS_WIDTH / 2) - (20 * CONST_FONT_SIZE_SMALL)),
                             310,
                             CONST_FONT_SIZE_SMALL,
                             "default",
                             "        we're not alo||||||||||",
                             "Small");
   }
   else {
      line1 = new TextString(((CONST_CANVAS_WIDTH / 2) - (20 * CONST_FONT_SIZE_SMALL)),
                             235,
                             CONST_FONT_SIZE_SMALL,
                             "default",
                             "   HELLO PLEASED TO SEE YOU ARE ENJOYING",
                             "Small");

      line2 = new TextString(((CONST_CANVAS_WIDTH / 2) - (20 * CONST_FONT_SIZE_SMALL)),
                             260,
                             CONST_FONT_SIZE_SMALL,
                             "default",
                             "         YOU     ARE ENJOYING  THE GAME",
                             "Small");

      line3 = new TextString(((CONST_CANVAS_WIDTH / 2) - (20 * CONST_FONT_SIZE_SMALL)),
                             285,
                             CONST_FONT_SIZE_SMALL,
                             "default",
                             "                        - MIKE (DEV)",
                             "Small");

      line4 = new TextString(((CONST_CANVAS_WIDTH / 2) - (20 * CONST_FONT_SIZE_SMALL)),
                             310,
                             CONST_FONT_SIZE_SMALL,
                             "default",
                             " P.S. PLEASE USE GAMESHARK FOR ENHANCES",
                             "Small");
   }

   lines.push(line1);
   lines.push(line2);
   lines.push(line3);
   lines.push(line4);

   return lines;
};
