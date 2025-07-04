:prepare_deersim_test_environment
cd deersim
mkdir tests\environment
type tests\resources\importsAndExports\aestheticObjects.js > tests\environment\aestheticObjects.js
echo: >> tests\environment\aestheticObjects.js
type aestheticObjects.js >> tests\environment\aestheticObjects.js
type constants.js > tests\environment\constants.js
echo: >> tests\environment\constants.js
type tests\resources\importsAndExports\constants.js >> tests\environment\constants.js
type tests\resources\importsAndExports\deersim.js > tests\environment\deersim.js
echo: >> tests\environment\deersim.js
type deersim.js >> tests\environment\deersim.js
type tests\resources\importsAndExports\generator.js > tests\environment\generator.js
echo: >> tests\environment\generator.js
type generator.js >> tests\environment\generator.js
type tests\resources\importsAndExports\getI84SimContent.js > tests\environment\getI84SimContent.js
echo: >> tests\environment\getI84SimContent.js
type getI84SimContent.js >> tests\environment\getI84SimContent.js
type tests\resources\importsAndExports\initializeCanvas.js > tests\environment\initializeCanvas.js
echo: >> tests\environment\initializeCanvas.js
type initializeCanvas.js >> tests\environment\initializeCanvas.js
type tests\resources\importsAndExports\initializeGame.js > tests\environment\initializeGame.js
echo: >> tests\environment\initializeGame.js
type initializeGame.js >> tests\environment\initializeGame.js
type tests\resources\importsAndExports\liveDebugger.js > tests\environment\liveDebugger.js
echo: >> tests\environment\liveDebugger.js
type liveDebugger.js >> tests\environment\liveDebugger.js
type tests\resources\importsAndExports\managers.js > tests\environment\managers.js
echo: >> tests\environment\managers.js
type managers.js >> tests\environment\managers.js
type tests\resources\importsAndExports\messageGenerator.js > tests\environment\messageGenerator.js
echo: >> tests\environment\messageGenerator.js
type messageGenerator.js >> tests\environment\messageGenerator.js
type tests\resources\importsAndExports\splicingFunctions.js > tests\environment\splicingFunctions.js
echo: >> tests\environment\splicingFunctions.js
type splicingFunctions.js >> tests\environment\splicingFunctions.js
type tests\resources\importsAndExports\transitions.js > tests\environment\transitions.js
echo: >> tests\environment\transitions.js
type transitions.js >> tests\environment\transitions.js
cd ..

:prepare_discography_test_environment
cd discography
mkdir tests\environment
type tests\resources\importsAndExports\audioManager.js > tests\environment\audioManager.js
echo: >> tests\environment\audioManager.js
type audioManager.js | findstr /v "play() pause()" >> tests\environment\audioManager.js
type constants.js > tests\environment\constants.js
echo: >> tests\environment\constants.js
type tests\resources\importsAndExports\constants.js >> tests\environment\constants.js
type tests\resources\importsAndExports\getDiscographyContent.js > tests\environment\getDiscographyContent.js
echo: >> tests\environment\getDiscographyContent.js
type getDiscographyContent.js >> tests\environment\getDiscographyContent.js
cd ..

:prepare_high_points_test_environment
cd high_points
mkdir tests\environment
type constants.js > tests\environment\constants.js
echo: >> tests\environment\constants.js
type tests\resources\importsAndExports\constants.js >> tests\environment\constants.js
type tests\resources\importsAndExports\getMapContent.js > tests\environment\getMapContent.js
echo: >> tests\environment\getMapContent.js
type getMapContent.js >> tests\environment\getMapContent.js
type tests\resources\importsAndExports\mapFunctions.js > tests\environment\mapFunctions.js
echo: >> tests\environment\mapFunctions.js
type mapFunctions.js | findstr /v relativeUrl >> tests\environment\mapFunctions.js
cd ..

:run_tests
call node_modules\.bin\jest %1

:clean_up
rmdir ".\deersim\tests\environment" /s /q
rmdir ".\discography\tests\environment" /s /q
rmdir ".\high_points\tests\environment" /s /q
