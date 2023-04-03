const Header = require('../components/common/header.component');
const AddNewQuestion = require('../components/addNewQuestion.component');
const BasePage = require('./base.page');

class QuestionLibraryPage extends BasePage {
  constructor() {
    super(Header);
    this.addNewQuestion = new AddNewQuestion();
  }

  get questionsTable() {
    return $('.questions-table');
  }

  get questions() {
    return $$('//tbody/tr');
  }

  get addNewQuestionButton() {
    return $('//button[text()="Add New Question"]');
  }
}

module.exports = QuestionLibraryPage;
