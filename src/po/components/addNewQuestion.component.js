class AddNewQuestion {
  get addNewQuestionPanel() {
    return $('.add-new-question');
  }

  get questionTextInput() {
    return $('div[data-testid="questionText"]');
  }

  get questionAliasInput() {
    return $('[data-testid="add-question-alias"]');
  }

  get questionShortNameInput() {
    return $('[data-testid="add-question-short-name"]');
  }

  get questionKeywordsInput() {
    return $('input[name="question-keywords"]');
  }

  get cancelButton() {
    return $('//button[text()="Cancel"]');
  }

  get saveButton() {
    return $('//button[text()="Cancel"]/following-sibling::button');
  }
}

module.exports = AddNewQuestion;
