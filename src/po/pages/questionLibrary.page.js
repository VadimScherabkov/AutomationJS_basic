const AddNewQuestion = require('../components/addNewQuestion.component');
const BasePage = require('./base.page');
/**
 * Description of QuestionLibraryPage class that child of BasePage
 */
class QuestionLibraryPage extends BasePage {
  /**
   * Creates an instance of QuestionLibraryPage class.
   * @constructor
   * @param {string} addNewQuestion - AddNewQuestion side panel.
   *
   */
  constructor() {
    super();
    this.addNewQuestion = new AddNewQuestion();
  }
  /**
 * Returns the table with all questions.
 * @return {Element} - Questions table.
 */
  get questionsTable() {
    return $('.questions-table');
  }
  /**
 * Returns all questions from the page.
 * @return {Element} - Questions list.
 */
  get questionsList() {
    return $$('//tbody/tr');
  }
  /**
 * Returns [Add New Question] button.
 * @return {Element} - [Add New Question] button.
 */
  get addNewQuestionButton() {
    return $('//button[text()="Add New Question"]');
  }
}

module.exports = QuestionLibraryPage;
