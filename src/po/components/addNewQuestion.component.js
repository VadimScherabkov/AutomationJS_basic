/**
 * 'Add New Question' side panel.
 * @class
 */
class AddNewQuestion {
  /**
   * Returns 'Add New Question' side panel.
   * @return {Element} - 'Add New Question' side panel.
   */
  get addNewQuestionPanel() {
    return $('.add-new-question');
  }
  /**
   * Returns 'Question Text' input field.
   * @return {Element} - 'Question Text' input field.
   */
  get questionTextInput() {
    return $('div[data-testid="questionText"]');
  }
  /**
   * Returns 'Question Alias' input field.
   * @return {Element} - 'Question Alias' input field.
   */
  get questionAliasInput() {
    return $('[data-testid="add-question-alias"]');
  }
  /**
   * Returns 'Question ShortName' input field.
   * @return {Element} - 'Question ShortName' input field.
   */
  get questionShortNameInput() {
    return $('[data-testid="add-question-short-name"]');
  }
  /**
   * Returns 'Question KeyWord' input field.
   * @return {Element} - 'Question KeyWord' input field.
   */
  get questionKeywordsInput() {
    return $('input[name="question-keywords"]');
  }
  /**
   * Returns [Cancel] button.
   * @return {Element} - [Cancel] button.
   */
  get cancelButton() {
    return $('//button[text()="Cancel"]');
  }
  /**
   * Returns [Save] button.
   * @return {Element} - [Save] button.
   */
  get saveButton() {
    return $('//button[text()="Cancel"]/following-sibling::button');
  }
}

module.exports = AddNewQuestion;
