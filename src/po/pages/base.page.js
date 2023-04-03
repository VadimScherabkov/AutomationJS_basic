const Header = require('../components/common/header.component');

class BasePage {
  constructor() {
    this.header = new Header();
  }

  async open() {
    await browser.url('https://mskengageadmin-dev.mskcc.org/login');
  }

  get searchButton() {
    return $('.admin-btn-search');
  }

  get spinner() {
    return $('.table-spinner');
  }
}

module.exports = BasePage;
