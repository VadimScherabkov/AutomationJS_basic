/* eslint-disable require-jsdoc */
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

  get questionsTable() {
    return $('.questions-table');
  }

  get questionsList() {
    return $$('//tbody/tr');
  }

  get addNewQuestionButton() {
    return $('//button[text()="Add New Question"]');
  }
}

module.exports = QuestionLibraryPage;
