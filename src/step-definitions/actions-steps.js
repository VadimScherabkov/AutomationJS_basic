/* eslint-disable new-cap */
const {Given} = require('@wdio/cucumber-framework');
const {page} = require('../po');

Given('I open {string} page', async (pageName) => {
  await page(pageName).open();
});

Given('I click {string} button', async (button) => {
  await page('login').loginButton.waitAndClick(button);
});

// Given('I enter the incorrect credentials', async () => {
//   await page('login').loginInput.setValue('invalidLogin');
//   await page('login').passwordInput.setValue('invalidPassword');
// });

Given('I enter the incorrect {string} as login', async (Username) => {
  await page('login').loginInput.setValue(Username);
});

Given('I enter the incorrect {string} as password', async (Password) => {
  await page('login').passwordInput.setValue(Password);
});

Given('I login to AdminUI', async () => {
  await page('login').loginInput.setValue('scherbv');
  await page('login').passwordInput.setValue('D1l9b2v01Wqwer');
  await page('login').loginButton.waitAndClick();
  await page('users').titlePage.waitForDisplayed();
});

Given('I go to {string} page', async (pageName) => {
  await page('users').header.item('questionLibrary').waitAndClick();
});
