const fs = require('fs');
const path = require('path');

// Function includes:
const mapFunctions = require('./environment/mapFunctions');
const isUnpopulated = mapFunctions.isUnpopulated;

// Miscellaneous constants:
const kElementTypeLink = "link";

// HTML Element URLs:
const cssStyleSheetUrl = "[href=\"high_points/high_points_style.css\"]";
const googleAPIsUrl = "[href=\"https://fonts.googleapis.com\"]";
const gStaticUrl = "[href=\"https://fonts.gstatic.com\"]";
const oswaldFontUrl = "[href=\"https://fonts.googleapis.com/css2?family=Oswald&display=swap\"]";

beforeAll(() => {
    populateHTMLHead();
}); // beforeAll()

test(`the HTML head contains the page title`, () => {
    const elementTypeTitle = "title";
    const title = document.head.querySelector(elementTypeTitle);
    const expectedPageTitle = "United States High Points";
    expect(title.textContent).toBe(expectedPageTitle);
}); /* the HTML head contains the page title */

test(`the HTML head contains preconnect links for the year string font`, () => {
    const relationship = "[rel=\"preconnect\"]";
    const googleAPIsSelector = kElementTypeLink + relationship + googleAPIsUrl;
    const googleAPIsLink = document.head.querySelector(googleAPIsSelector);
    const crossOriginAttribute = "[crossorigin]";
    const gStaticSelector = kElementTypeLink + relationship + gStaticUrl + crossOriginAttribute;
    const gStaticLink = document.head.querySelector(gStaticSelector);
    expect(isUnpopulated(googleAPIsLink)).toBe(false);
    expect(isUnpopulated(gStaticLink)).toBe(false);
}); /* the HTML head contains preconnect links for the year string font */

test(`the HTML head contains the stylesheets necessary to render the user interface`, () => {
    const relationship = "[rel=\"stylesheet\"]";
    const cssStyleSheetSelector = kElementTypeLink + relationship + cssStyleSheetUrl;
    const cssStyleSheetLink = document.head.querySelector(cssStyleSheetSelector);
    const oswaldFontSelector = kElementTypeLink + relationship + oswaldFontUrl;
    const oswaldFontLink = document.head.querySelector(oswaldFontSelector);
    expect(isUnpopulated(cssStyleSheetLink)).toBe(false);
    expect(isUnpopulated(oswaldFontLink)).toBe(false);
}); /* the HTML head contains the stylesheets necessary to render the user interface */

function populateHTMLHead()
{
    const htmlFileRelativePath = "../../high_points.html";
    const htmlFileAbsolutePath = path.join(__dirname, htmlFileRelativePath);
    const utf8EncodingOption = "utf8";
    document.documentElement.innerHTML = fs.readFileSync(htmlFileAbsolutePath, utf8EncodingOption);
}
