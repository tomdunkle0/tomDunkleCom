// Function includes:
const audioManager = require('./environment/audioManager');
const getAllElementsOnPage = audioManager.getAllElementsOnPage;
const getDiscographyContent = require('./environment/getDiscographyContent');

test(`calling getAllElementsOnPage() returns a sufficiently large number of elements`, () => {
    document.body.innerHTML = getDiscographyContent();

    const allElements = getAllElementsOnPage();

    const actualNumberOfElements = allElements.length;
    const sufficientNumberOfElements = 500; // Hand-picked, based on dev-testing in Chrome.
    expect(actualNumberOfElements).toBeGreaterThanOrEqual(sufficientNumberOfElements);
}); /* calling getAllElementsOnPage() returns a sufficiently large number of elements */
