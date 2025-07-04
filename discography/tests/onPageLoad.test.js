// Node.js includes:
const fs   = require('fs');
const path = require('path');

// Constant includes:
const constants = require('./environment/constants');
const kOnlyChildIndex               = constants.kOnlyChildIndex;
const kStyleSheetClassNameAlbumInfo = constants.kStyleSheetClassNameAlbumInfo;

// Test Constant includes:
const testConstants = require('./resources/testConstants');
const kAudioElementNodeName = testConstants.kAudioElementNodeName;

// Function includes:
const getDiscographyContent = require('./environment/getDiscographyContent');

// Miscellaneous constants:
const kNumberOfAlbumsOnPage     = 8;
const kOneChild                 = 1;
const kStyleSheetClassNameAlbum = "album";

beforeEach(() => {
    document.body.innerHTML = getDiscographyContent();
}); // beforeEach()

test(`on page load, each album has a dedicated audio player`, () => {
    const numberOfAudioPlayersOnPage = getNumberOfAudioPlayersOnPage();
    expect(numberOfAudioPlayersOnPage).toBe(kNumberOfAlbumsOnPage);
}); /* on page load, each album has a dedicated audio player */

test(`on page load, each album has an albumInfo div as a child`, () => {
    const numberOfAlbumInfosOnPage = getNumberOfAlbumInfosOnPage();
    expect(numberOfAlbumInfosOnPage).toBe(kNumberOfAlbumsOnPage);
}); /* on page load, each album has an albumInfo div as a child */

test(`on page load, each album is a child of zScrollColumn`, () => {
    const numberOfAlbumsOnPage = getNumberOfAlbumsOnPage();
    expect(numberOfAlbumsOnPage).toBe(kNumberOfAlbumsOnPage);
}); /* on page load, each album is a child of zScrollColumn */

test(`on page load, each source element points to an existing mp3 file`, () => {
    const zScrollColumnChildren = getZScrollColumnChildren();
    const numberOfMp3ReferencesOnPage = getNumberOfMp3FileReferencesOnPage(zScrollColumnChildren);
    const expectedNumberOfSongsOnPage = 114;
    expect(numberOfMp3ReferencesOnPage).toBe(expectedNumberOfSongsOnPage);
}); /* on page load, each source element points to an existing mp3 file */

test(`on page load, the page body has zScrollColumn as the only top-level child`, () => {
    const zScrollColumn = getZScrollColumn();
    const zScrollColumnId = zScrollColumn.id;
    const expectedZScrollColumnId = "zScrollColumn";
    expect(zScrollColumnId).toBe(expectedZScrollColumnId);
}); /* on page load, the page body has zScrollColumn as the only top-level child */

function confirmElementSourcePathEndsWithMp3FileExtension(sourcePath)
{
    const expectedFileExtension = ".mp3";
    const expectedFileExtensionIndex = sourcePath.length - expectedFileExtension.length;
    const actualFileExtension = sourcePath.substring(expectedFileExtensionIndex);
    expect(actualFileExtension).toBe(expectedFileExtension);
} // confirmElementSourcePathEndsWithMp3FileExtension()

function confirmSourceElementPointsToExistingFile(sourcePath)
{
    const elementSourceDirectory = path.dirname(sourcePath);
    const elementSourceDirectoryFileNames = fs.readdirSync(elementSourceDirectory);
    const elementBaseFileName = path.basename(sourcePath);
    const fileNameIndex = elementSourceDirectoryFileNames.indexOf(elementBaseFileName);
    const valueNotFound = -1;
    expect(fileNameIndex).not.toBe(valueNotFound);
} // confirmSourceElementPointsToExistingFile()

function decodeSpacesInSourceElementSourcePath(sourceElement)
{
    const sourcePath = sourceElement.src;
    const urlEncodedSpace = "%20";
    const regExpModifierGlobalMatch = "g";
    const allUrlEncodedSpaces = new RegExp(urlEncodedSpace, regExpModifierGlobalMatch);
    const decodedSpace = " ";
    return sourcePath.replace(allUrlEncodedSpaces, decodedSpace);
} // decodeSpacesInSourceElementSourcePath()

function getAbsolutePathToParentDirectory()
{
    const expectedCurrentDirectoryName = "tests";
    const currentDirectoryIndex = __dirname.search(expectedCurrentDirectoryName);
    return __dirname.substring(0, currentDirectoryIndex);
} // getAbsolutePathToParentDirectory()

function getNumberOfAlbumsOnPage()
{
    const zScrollColumnChildren = getZScrollColumnChildren();
    var numberOfAlbumsOnPage = 0;
    for (var zScrollColumnChildIndex in zScrollColumnChildren)
    {
        const zScrollColumnChild = zScrollColumnChildren[zScrollColumnChildIndex];
        if (zScrollColumnChild.className === kStyleSheetClassNameAlbum)
        {
            ++numberOfAlbumsOnPage;
        }
    }
    return numberOfAlbumsOnPage;
} // getNumberOfAlbumsOnPage()

function getNumberOfAlbumInfosOnPage()
{
    const zScrollColumnChildren = getZScrollColumnChildren();
    var numberOfAlbumInfosOnPage = 0;
    for (var zScrollColumnChildIndex in zScrollColumnChildren)
    {
        const zScrollColumnChild = zScrollColumnChildren[zScrollColumnChildIndex];
        if (zScrollColumnChild.className === kStyleSheetClassNameAlbum)
        {
            const albumChildren = zScrollColumnChild.children;
            var numberOfAlbumInfosOnOneAlbum = 0;
            for (var albumChildIndex in albumChildren)
            {
                const albumChild = albumChildren[albumChildIndex];
                if (albumChild.className === kStyleSheetClassNameAlbumInfo)
                {
                    ++numberOfAlbumInfosOnOneAlbum;
                    ++numberOfAlbumInfosOnPage;
                }
            }
            expect(numberOfAlbumInfosOnOneAlbum).toBe(kOneChild);
        }
    }
    return numberOfAlbumInfosOnPage;
} // getNumberOfAlbumInfosOnPage()

function getNumberOfAudioPlayersOnPage()
{
    const zScrollColumnChildren = getZScrollColumnChildren();
    var numberOfAudioPlayersOnPage = 0;
    for (var zScrollColumnChildIndex in zScrollColumnChildren)
    {
        const zScrollColumnChild = zScrollColumnChildren[zScrollColumnChildIndex];
        if (zScrollColumnChild.className === kStyleSheetClassNameAlbum)
        {
            const albumChildren = zScrollColumnChild.children;
            for (var albumChildIndex in albumChildren)
            {
                const albumChild = albumChildren[albumChildIndex];
                if (albumChild.className === kStyleSheetClassNameAlbumInfo)
                {
                    const albumInfoChildren = albumChild.children;
                    for (var albumInfoChildIndex in albumInfoChildren)
                    {
                        const albumInfoChild = albumInfoChildren[albumInfoChildIndex];
                        if (albumInfoChild.nodeName === kAudioElementNodeName)
                        {
                            ++numberOfAudioPlayersOnPage;
                        }
                    }
                }
            }
        }
    }
    return numberOfAudioPlayersOnPage;
} // getNumberOfAudioPlayersOnPage()

function getNumberOfMp3FileReferencesOnPage(zScrollColumnChildren)
{
    const localNameAudioElement = "audio";
    const localNameSourceElement = "source";
    var numberOfMp3FileReferencesOnPage = 0;
    for (var zScrollColumnChildIndex in zScrollColumnChildren)
    {
        const zScrollColumnChild = zScrollColumnChildren[zScrollColumnChildIndex];
        if (zScrollColumnChild.className === kStyleSheetClassNameAlbum)
        {
            const albumChildren = zScrollColumnChild.children;
            for (var albumChildIndex in albumChildren)
            {
                const albumChild = albumChildren[albumChildIndex];
                if (albumChild.className === kStyleSheetClassNameAlbumInfo)
                {
                    const albumInfoChildren = albumChild.children;
                    for (var albumInfoChildIndex in albumInfoChildren)
                    {
                        const albumInfoChild = albumInfoChildren[albumInfoChildIndex];
                        if (albumInfoChild.localName === localNameAudioElement)
                        {
                            const audioPlayerChildren = albumInfoChild.children;
                            for (var audioPlayerChildIndex in audioPlayerChildren)
                            {
                                const sourceElement = audioPlayerChildren[audioPlayerChildIndex];
                                if (sourceElement.localName === localNameSourceElement)
                                {
                                    const sourcePath = getSourceElementSourcePath(sourceElement);
                                    confirmSourceElementPointsToExistingFile(sourcePath);
                                    confirmElementSourcePathEndsWithMp3FileExtension(sourcePath);
                                    ++numberOfMp3FileReferencesOnPage;
                                }
                            }
                        }
                    }
                }
            }
        }
    }

    return numberOfMp3FileReferencesOnPage;
} // getNumberOfMp3FileReferencesOnPage()

function getRelativePathToAudioSource(sourceElement)
{
    const elementSource = decodeSpacesInSourceElementSourcePath(sourceElement);
    const audioDirectoryName = "audio";
    const audioDirectoryIndex = elementSource.search(audioDirectoryName);
    return elementSource.substring(audioDirectoryIndex);
} // getRelativePathToAudioSource()

function getSourceElementSourcePath(sourceElement)
{
    const absolutePathToParentDirectory = getAbsolutePathToParentDirectory();
    const relativePathToAudioSource = getRelativePathToAudioSource(sourceElement);
    return absolutePathToParentDirectory + relativePathToAudioSource;
} // getSourceElementSourcePath()

function getZScrollColumn()
{
    const childrenOfDocumentBody = document.body.children;
    const numberOfChildren = childrenOfDocumentBody.length;
    expect(numberOfChildren).toBe(kOneChild);
    return childrenOfDocumentBody[kOnlyChildIndex];
} // getZScrollColumn()

function getZScrollColumnChildren()
{
    const zScrollColumn = getZScrollColumn();
    return zScrollColumn.children;
} // getZScrollColumnChildren()
