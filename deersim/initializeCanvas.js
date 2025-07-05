/*-------------------------------------------------------------------*\
 | Creates and initializes a canvas in which the game will be drawn. |
\*-------------------------------------------------------------------*/
function initializeCanvas(a_deersim)
{
   a_deersim.canvas = document.getElementById('deersimcanvas');
   a_deersim.canvas.width = CONST_CANVAS_WIDTH; // TODO: Is this used for anything?
   a_deersim.canvas.height = CONST_CANVAS_HEIGHT; // TODO: Is this used for anything?
   a_deersim.canvasContext = a_deersim.canvas.getContext('2d');
}; // initializeCanvas()
