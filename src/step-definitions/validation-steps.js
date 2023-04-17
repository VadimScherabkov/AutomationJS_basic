/* eslint-disable new-cap */
const {Then} = require('@wdio/cucumber-framework');
const compareText = require('./utils/compre-text');
const {page} = require('../po');
const {expect} = require('chai');

Then('Login title should {string} {string}', async (shouldBeParameter, titleText) => {
  const pageTitle = await page('login').loginTitle.getText();

  return compareText(pageTitle, titleText, shouldBeParameter);
});

Then('Login input is displayed', async () => {
  expect(await page('login').loginInput.isDisplayed()).to.be.true;
});

Then('Password input is displayed', async () => {
  expect(await page('login').passwordInput.isDisplayed()).to.be.true;
});

Then('{string} button is displayed', async (button) => {
  expect(await page('login').loginButton.isDisplayed(button)).to.be.true;
});

Then('Login validation message is shown', async () => {
  expect(await page('login').userNameError.getText()).to.equal('Username is required');
});

Then('Password validation message is shown', async () => {
  expect(await page('login').passwordError.getText()).to.equal('Password is required');
});

Then('Validation message is shown', async () => {
  await page('login').loginFailedMessage.waitForDisplayed();

  expect(await page('login').loginFailedMessage.getText()).to.equal('Login failed! Wrong username or password.');
});

Then('{string} title page is displayed', async (pageName) => {
  expect(await page('users').titlePage.isDisplayed(pageName)).to.be.true;
});

Then('Question table is shown', async () => {
  await page('questions').questionsTable.waitForDisplayed();

  expect(await page('questions').questionsList).to.have.lengthOf(15);
});
