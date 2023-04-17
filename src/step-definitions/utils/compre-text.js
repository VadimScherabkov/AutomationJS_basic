/* eslint-disable require-jsdoc */
function compareText(firstText, secondText, compareOption) {
  switch ((compareOption)) {
    case 'be equal to':
      return expect(firstText).to.equal(secondText);
    case 'not be equal to':
      return expect(firstText).not.to.equal(secondText);
    default:
      throw Error(`'${compareOption}' is not a valid comparison option`);
  };
};

module.exports = compareText;
