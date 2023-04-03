class Header {
  get logoutButton() {
    return $('//a[@href="/Login"]');
  }

  item(param) {
    const selectors = {
      questionLibrary: '//a[@href="/QuestionLibrary"]',
      userList: '//a[@href="/UserList"]',
      assessmentList: '//a[@href="/SurveyList"]',
      translation: '//a[@href="/SurveyLocalization"]',
    };
    return $(`${selectors[param]}`);
  }

  get userName() {
    return $('li[title="Vadim Scherbakov"]');
  }
}

module.exports = Header;
