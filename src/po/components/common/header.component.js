/**
 * Page's header of the application.
 * @class
 */
class Header {
  /**
 * Returns [Logout] button.
 * @return {Element} - '[Logout] button.
 */
  get logoutButton() {
    return $('//a[@href="/Login"]');
  }
  /**
 * Returns tab button from the header.
 * @param {string} param - name of button.
 * @return {Element} - button.
 */
  item(param) {
    const selectors = {
      questionLibrary: '//a[@href="/QuestionLibrary"]',
      userList: '//a[@href="/UserList"]',
      assessmentList: '//a[@href="/SurveyList"]',
      translation: '//a[@href="/SurveyLocalization"]',
    };
    return $(`${selectors[param]}`);
  }
  /**
 * Returns Username from the header.
 * @return {Element} - Username.
 */
  get userName() {
    return $('li[title="Vadim Scherbakov"]');
  }
}

module.exports = Header;
