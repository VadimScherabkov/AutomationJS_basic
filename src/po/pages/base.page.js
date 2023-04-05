const Header = require('../components/common/header.component');
/**
 * Description of BasePage class.
 * @class
 */
class BasePage {
  /**
   * Creates an instance of BasePage class.
   * @constructor
   * @param {string} header - Header of the page.
   *
   */
  constructor() {
    this.header = new Header();
  }
  /**
 * Opens the main page.
 * @method
 */
  async open() {
    await browser.url('https://mskengageadmin-dev.mskcc.org/login');
  }
  /**
 * Returns 'Search' button
 * @return {Element} - 'Search' button.
 */
  get searchButton() {
    return $('.admin-btn-search');
  }
  /**
 * Returns Load Spinner.
 * @return {Element} - Load Spinner.
 */
  get spinner() {
    return $('.table-spinner');
  }
}

module.exports = BasePage;
