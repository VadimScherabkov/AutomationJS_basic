/**
 * 'Add New Question' side panel.
 * @class
 */
class AddNewQuestion {
  /**
   * Returns Add New Question side panel.
   * @param {Element} - Side Panel.
   */
  get addNewQuestionPanel() {
    return $('.add-new-question');
  }
  /**
 * Returns inputs from Add New QUestion panel.
 * @param {string} param - input field.
 * @return {string} selector.
 */
  input(param) {
    const selectors = {
      Text: 'div[data-testid="questionText"]',
      Alias: '[data-testid="add-question-alias"]',
      ShortName: '[data-testid="add-question-short-name"]',
      KeyWords: 'input[name="question-keywords"]',
    };
    return $(`${selectors[param]}`);
  }
  /**
 * Returns buttons from Add New QUestion panel.
 * @param {string} param - button.
 * @return {string} selector.
 */
  button(param) {
    const selectors = {
      Cancel: '//button[text()="Cancel"]',
      Save: '//button[text()="Cancel"]/following-sibling::button',
    };
    return $(`${selectors[param]}`);
  }
}

module.exports = AddNewQuestion;
