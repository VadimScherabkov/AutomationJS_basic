const { expect } = require("chai");
/** Compiration of text
 * @param {string} firstText - first text
 * @param {string} secondText - second text
 * @param {string} compareOption - compiration way
 * @return {boolean}
*/
function compareText(firstText, secondText, compareOption) {
  switch ((compareOption)) {
    case 'be equal to':
      return expect(firstText).to.equal(secondText);
    case 'not be equal to':
      return expect(firstText).not.to.equal(secondText);
    default:
      throw Error(`'${compareOption}' is not a valid comparison option`);
  }
}

module.exports = compareText;
