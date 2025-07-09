/*-----------------------------------------------------------------------*\
 | File: deersim/audioEngine.js                                          |
 | Purpose: Defines game objects and functions used to manage the        |
 |    behavior of game audio such as background music and sound effects. |
\*-----------------------------------------------------------------------*/

const CONST_SOUND_INDEX_VOX_COMET_SOUND_CHECK   = 0;
const CONST_SOUND_INDEX_DRUID_CHANT             = 1;
const CONST_SOUND_INDEX_EXCLAMATION             = 2;
const CONST_SOUND_INDEX_DEER_SHRIEK             = 3;
const CONST_SOUND_INDEX_MENU_SELECTION_HIGH     = 4;
const CONST_SOUND_INDEX_MENU_SELECTION_LOW      = 6;
const CONST_SOUND_INDEX_FRENCH_CANADIAN_GRUNT_1 = 7;
const CONST_SOUND_INDEX_FRENCH_CANADIAN_GRUNT_2 = 8;
const CONST_SOUND_INDEX_LIGHTNING_BOLT_LOW      = 9;
const CONST_SOUND_INDEX_LIGHTNING_BOLT_MID      = 10;
const CONST_SOUND_INDEX_LIGHTNING_BOLT_HIGH     = 11;
const CONST_SOUND_INDEX_EXCLAMATION_REVERB_X4   = 12;
const CONST_SOUND_INDEX_EXCLAMATION_REVERB_X8   = 13;
const CONST_SOUND_INDEX_OBTAIN_POWERUP          = 14;

const CONST_VOICE_INDEX_AMISH_DAVE     = 0;
const CONST_VOICE_INDEX_GOLF_CART      = 1;
const CONST_VOICE_INDEX_OIL_TANKER     = 2;
const CONST_VOICE_INDEX_SMART_CAR      = 3;
const CONST_VOICE_INDEX_WEENIEMOBILE_1 = 4;
const CONST_VOICE_INDEX_WEENIEMOBILE_2 = 5;

/*------------------------------------------------------------------*\
 | Pauses the current background music, then loads                  |
 | and plays a new piece of background music.                       |
 | @param string bgTrackName -- the new background track's HTML ID. |
\*------------------------------------------------------------------*/
var loadMusic = function(bgTrackName, bgTrackID) {
   var bgTrack = deersim.musicManager.backgroundTrack;

   if (!bgTrack.paused) {
      bgTrack.pause();
      bgTrack.currentTime = 0;
   }

   deersim.musicManager.backgroundTrack   = document.getElementById(bgTrackName);
   deersim.musicManager.backgroundTrackID = bgTrackID;
   deersim.musicManager.backgroundTrack.play();
   // #TODO -- functionalize this in order to break up the stack
}; // loadMusic()

/*----------------------------------------------------------------*\
 | Given a sound effect in the sound effects array, this function |
 | pauses that sound effect, resets it to t0, and then plays it.  |
\*----------------------------------------------------------------*/
var pauseAndReplaySoundEffect = function(sfxArrayIndex) {
   deersim.soundEffects[sfxArrayIndex].pause();
   deersim.soundEffects[sfxArrayIndex].currentTime = 0;
   deersim.soundEffects[sfxArrayIndex].play();
};

var playBackgroundTrackOnEnteringMainMenu = function(a_deersim)
{
   a_deersim.musicManager.backgroundTrack.pause();
   a_deersim.musicManager.backgroundTrack.currentTime = 0;
   a_deersim.musicManager.loadMusic();
   a_deersim.musicManager.backgroundTrack.play();
} // playBackgroundTrackOnEnteringMainMenu()

/*----------------------------------------------------------------------------------*\
 | Given a vehicle type and random decimal, this function chooses a voice           |
 | and plays it. Meant to be called when a vehicle is near the active deer.         |
 | @param <any> vehicle         -- the vehicle which is close to the active deer.   |
 | @param float decimalSelector -- used to select voices.                           |
\*----------------------------------------------------------------------------------*/
var playVoice = function(vehicle, decimalSelector) {
   if (deersim.obscenities === CONST_TRUE) {
      if (vehicle instanceof Vehicle) {
         if (vehicle.type === "AmishDave")
            deersim.voices[CONST_VOICE_INDEX_AMISH_DAVE].play();
         else if (vehicle.type === "GolfCart")
            deersim.voices[CONST_VOICE_INDEX_GOLF_CART].play();
         else if (vehicle.type === "OilTanker")
            deersim.voices[CONST_VOICE_INDEX_OIL_TANKER].play();
         else if (vehicle.type === "SmartCar")
            deersim.voices[CONST_VOICE_INDEX_SMART_CAR].play();
         else if (vehicle.type === "WeenieMobile") {
            if (decimalSelector <= 0.5)
               deersim.voices[CONST_VOICE_INDEX_WEENIEMOBILE_1].play();
            else
               deersim.voices[CONST_VOICE_INDEX_WEENIEMOBILE_2].play();
         }
      }
   }
}; // playVoice
