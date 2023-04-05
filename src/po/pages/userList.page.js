const Header = require('../components/common/header.component');
const BasePage = require('./base.page');
/**
 * Description of UserListPage class that child of BasePage
 */
class UserListPage extends BasePage {
  /**
   * Creates an instance of UserListPage class.
   * @constructor
   * @param {string} header - Header of the page.
   *
   */
  constructor() {
    super(Header);
  }
  /**
 * Returns title of the page.
 * @return {Element} - Page title.
 */
  get titlePage() {
    return $('//h1[contains(text(), "Users List")]');
  }
}

module.exports = UserListPage;
