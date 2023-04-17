/* eslint-disable new-cap */
const {BeforeAll} = require('@wdio/cucumber-framework');

BeforeAll({name: 'maximizeWindow'}, async () => {
  await browser.maximizeWindow();
});
