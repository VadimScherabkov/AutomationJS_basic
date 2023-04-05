const LoginPage = require('../../po/pages/login.page');
const UserListPage = require('../../po/pages/userList.page');
const QuestionLibraryPage = require('../../po/pages/questionLibrary.page');
const {expect} = require('chai');
const BasePage = require('../../po/pages/base.page');

const loginPage = new LoginPage();
const userListPage = new UserListPage();
const questionLibraryPage = new QuestionLibraryPage();
const basePage = new BasePage();

describe('Introduction to WebdriverIO', () => {
  before(async () => {
    await browser.maximizeWindow();
    await basePage.open();
  });

  it('Opens Login Page and ensures login controls presence', async () => {
    expect(await loginPage.loginTitle.getText()).to.equal('Please login');
    expect(await loginPage.loginInput.isDisplayed()).to.be.true;
    expect(await loginPage.passwordInput.isDisplayed()).to.be.true;
    expect(await loginPage.loginButton.isDisplayed()).to.be.true;
  });

  it('Validates mandatory fields', async () => {
    await loginPage.loginButton.waitAndClick();

    expect(await loginPage.userNameError.getText()).to.equal('Username is required');
    expect(await loginPage.passwordError.getText()).to.equal('Password is required');
  });

  it('Entries the incorrect credentials', async () => {
    await loginPage.loginInput.setValue('invalidLogin');
    await loginPage.passwordInput.setValue('invalidPassword');
    await loginPage.loginButton.waitAndClick();
    await loginPage.loginFailedMessage.waitForDisplayed();

    expect(await loginPage.loginFailedMessage.getText()).to.equal('Login failed! Wrong username or password.');
  });

  it('Logs in to Admin UI', async () => {
    await loginPage.loginInput.setValue('scherbv');
    await loginPage.passwordInput.setValue('D1l9b2v01Wqwer');
    await loginPage.loginButton.waitAndClick();
    await userListPage.titlePage.waitForDisplayed();

    expect(await userListPage.titlePage.isDisplayed()).to.be.true;
  });

  it('Logs out from Admin UI', async () => {
    await basePage.header.logoutButton.waitAndClick();
    await loginPage.loginForm.waitForDisplayed();

    expect(await loginPage.loginForm.isDisplayed()).to.be.true;
  });
});

describe('Basic commands', () => {
  before(async () => {
    await loginPage.loginInput.setValue('scherbv');
    await loginPage.passwordInput.setValue('D1l9b2v01Wqwer');
    await loginPage.loginButton.waitAndClick();
  });

  it('Existing questions are displayed on the Question Library page', async () => {
    await userListPage.header.item('questionLibrary').waitAndClick();
    await questionLibraryPage.questionsTable.waitForDisplayed();

    expect(await questionLibraryPage.questionsList).to.have.lengthOf(15);
  });

  it('Validates Add New Question pop-up is opened', async () => {
    await questionLibraryPage.addNewQuestionButton.waitAndClick();
    await questionLibraryPage.addNewQuestion.addNewQuestionPanel.waitForDisplayed();

    expect(await questionLibraryPage.addNewQuestion.addNewQuestionPanel.isDisplayed()).to.be.true;
  });

  it('Save button is disabled in Add New Question pop-up', async () => {
    expect(await questionLibraryPage.addNewQuestion.saveButton.isEnabled()).to.be.false;
  });

  it('Changes are not saved after closing Add New Question pop-up', async () => {
    await questionLibraryPage.addNewQuestion.questionTextInput.waitAndClick();
    await browser.keys('Test question VadimTest');
    await questionLibraryPage.addNewQuestion.questionAliasInput.setValue('Test question alias');
    await questionLibraryPage.addNewQuestion.questionShortNameInput.setValue('Test question shortname');
    await questionLibraryPage.addNewQuestion.questionKeywordsInput.setValue('Test question keywords');
    await questionLibraryPage.addNewQuestion.cancelButton.waitAndClick();
    await questionLibraryPage.addNewQuestionButton.waitAndClick();

    expect(await questionLibraryPage.addNewQuestion.questionTextInput.getText()).to.equal('Text');
    expect(await questionLibraryPage.addNewQuestion.questionAliasInput.getValue()).to.equal('');
    expect(await questionLibraryPage.addNewQuestion.questionShortNameInput.getValue()).to.equal('');
    expect(await questionLibraryPage.addNewQuestion.questionKeywordsInput.getValue()).to.equal('');
  });

  after(async () => {
    await browser.refresh();
  });
});

describe('Advanced commands', () => {
  it('Load spinner disappears after questions are loaded', async () => {
    await basePage.header.item('userList').waitAndClick();
    await basePage.header.item('questionLibrary').waitAndClick();
    await browser.waitUntil(
        async () => await basePage.spinner.waitForDisplayed({reverse: true}),
        {timeout: 5000, interval: 600, timeoutMsg: 'not loaded'});

    expect(await questionLibraryPage.questionsList).to.have.lengthOf(15);
  });

  it('Search button becomes gray', async () => {
    await basePage.searchButton.moveTo();
    await browser.pause(1000);
    const browserName = browser.capabilities.browserName;

    if (browserName === 'chrome') {
      const activeColorProperty = await basePage.searchButton.getCSSProperty('background-color');
      const jsonProperty= JSON.stringify(activeColorProperty);
      const activeColorValue = await JSON.parse(jsonProperty).value;

      expect(activeColorValue).to.equal('rgba(61,61,61,1)');
    } else if (browserName === 'firefox') {
      const activeColorProperty = await basePage.searchButton.getCSSProperty('background-color');
      const jsonProperty= JSON.stringify(activeColorProperty);
      const activeColorValue = await JSON.parse(jsonProperty).value;

      expect(activeColorValue).to.equal('rgb(61,61,61)');
    }
  });

  it('Validates user name in navigation bar', async () => {
    const userName = await basePage.header.userName;
    const text = await browser.execute((userName) => {
      return userName.textContent;
    }, userName);

    expect(text).to.equal('Hello, Vadim Scherbakov!');
  });
});
