const BasePage = require('./base.page');
/**
 * Description of LoginPage class that child of BasePage.
 * @class
 * @extends BasePage
 */
class LoginPage extends BasePage {
  /**
 * Returns 'Login' title.
 * @return {Element} - 'Login' text.
 */
  get loginTitle() {
    return $('//h2[text()="Please login"]');
  }
  /**
 * Returns 'Login' input field.
 * @return {Element} - 'Login' input field.
 */
  get loginInput() {
    return $('input[data-testid="input-login"]');
  }
  /**
 * Returns 'Password' input field.
 * @return {Element} - 'Password' input field.
 */
  get passwordInput() {
    return $('input[data-testid="input-password"]');
  }
  /**
 * Returns [Login] button.
 * @return {Element} - [Login] button.
 */
  get loginButton() {
    return $('button[data-testid="login-button"]');
  }
  /**
 * Returns Username validation error message.
 * @return {Element} - Error message.
 */
  get userNameError() {
    return $('//p[text()="Username is required"]');
  }
  /**
 * Returns Password validation error message.
 * @return {Element} - Error message.
 */
  get passwordError() {
    return $('//p[text()="Password is required"]');
  }
  /**
 * Returns Login error message.
 * @return {Element} - Error message.
 */
  get loginFailedMessage() {
    return $('p[class="help-data"]');
  }
  /**
 * Returns Login form.
 * @return {Element} - Login form.
 */
  get loginForm() {
    return $('.login-form__wrapper');
  }
}

module.exports = LoginPage;
