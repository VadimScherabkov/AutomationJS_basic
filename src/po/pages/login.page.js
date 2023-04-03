const BasePage = require('./base.page');

class LoginPage extends BasePage {
  // async open() {
  //   await browser.url('https://mskengageadmin-dev.mskcc.org/login');
  // }

  get loginTitle() {
    return $('//h2[text()="Please login"]');
  }

  get loginInput() {
    return $('input[data-testid="input-login"]');
  }

  get passwordInput() {
    return $('input[data-testid="input-password"]');
  }

  get loginButton() {
    return $('button[data-testid="login-button"]');
  }

  get userNameError() {
    return $('//p[text()="Username is required"]');
  }

  get passwordError() {
    return $('//p[text()="Password is required"]');
  }

  get loginFailedMessage() {
    return $('p[class="help-data"]');
  }

  get loginForm() {
    return $('.login-form__wrapper');
  }
}

module.exports = LoginPage;
