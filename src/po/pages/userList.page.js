const BasePage = require('./base.page');
/**
 * Description of UserListPage class that child of BasePage.
 */
class UserListPage extends BasePage {
  /**
   * Creates an instance of UserListPage class.
   * @constructor
   * @param {string} header - Header of the page.
   *
   */
  constructor() {
    super();
  }
  /**
 * Returns page element.
 * @param {string} param - Page's element.
 * @return {string} - Selector.
 */
  item(param) {
    const selectors = {
      Title: '//h1[contains(text(), "Users List")]',
    };
    return $(`${selectors[param]}`);
  }
}

module.exports = UserListPage;
