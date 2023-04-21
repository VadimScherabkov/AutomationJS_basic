const BasePage = require('./base.page');
/**
 * Description of LoginPage class that child of BasePage.
 * @class
 * @extends BasePage
 */
class LoginPage extends BasePage {
  /**
   * Create an instance of LoginPage class.
   * @constructor
   */
  constructor() {
    super();
  }
  /**
 * Returns buttons on the Login page.
 * @param {string} param  - Button.
 * @return {string} - Button's selector.
 */
  button(param) {
    const selectors = {
      Login: 'button[data-testid="login-button"]',
    };
    return $(`${selectors[param]}`);
  }
  /**
 *
 * @param {string} param - Input.
 * @return {string} - Input's selector.
 */
  input(param) {
    const selectors = {
      Login: 'input[data-testid="input-login"]',
      Password: 'input[data-testid="input-password"]',
    };
    return $(`${selectors[param]}`);
  }
  /**
 * Returns title of the Login page.
 * @return {Element} - Login title.
 */
  get loginTitle() {
    return $('//h2[text()="Please login"]');
  }
  /**
 * Returns validation message of the Login page.
 * @return {Element} - User name error message.
 */
  get userNameError() {
    return $('//p[text()="Username is required"]');
  }
  /**
 * Returns validation message of the Login page.
 * @return {Element} - Password error message.
 */
  get passwordError() {
    return $('//p[text()="Password is required"]');
  }
  /**
 * Returns validation message of the Login page.
 * @return {Element} - Login error.
 */
  get loginFailedMessage() {
    return $('p[class="help-data"]');
  }
  /**
 * Returns validation message of the Login page.
 * @return {Element} - Login form.
 */
  get loginForm() {
    return $('.login-form__wrapper');
  }
}

module.exports = LoginPage;
