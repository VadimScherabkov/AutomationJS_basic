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
      QuestionLibrary: '//a[@href="/QuestionLibrary"]',
      UserList: '//a[@href="/UserList"]',
      SssessmentList: '//a[@href="/SurveyList"]',
      Translation: '//a[@href="/SurveyLocalization"]',
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
