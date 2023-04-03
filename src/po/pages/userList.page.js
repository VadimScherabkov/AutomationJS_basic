const Header = require('../components/common/header.component');
const BasePage = require('./base.page');

class UserListPage extends BasePage {
  constructor() {
    // this.header = new Header();
    super(Header);
  }

  get titlePage() {
    return $('//h1[contains(text(), "Users List")]');
  }
}

module.exports = UserListPage;
