const {Given} = require('@wdio/cucumber-framework');
const {page} = require('../po');

Given('I open {string} page', async (pageName) => {
  await page(pageName).open();
});

Given('I click {string} button', async (buttonName) => {
  await page('login').button(buttonName).waitAndClick();
});

Given('I enter the {string} as login in {string} input', async (userName, inputName) => {
  await page('login').input(inputName).setValue(userName);
});

Given('I enter the {string} as password in {string} input', async (password, inputName) => {
  await page('login').input(inputName).setValue(password);
});

Given('I wait the {string} to be displayed', async (itemName) => {
  await page('users').item(itemName).waitForDisplayed();
});

Given('I go to {string} page', async (pageName) => {
  await page('users').header.item(pageName).waitAndClick();
});
