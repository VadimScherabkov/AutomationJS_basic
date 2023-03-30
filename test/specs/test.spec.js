describe('Introduction to WebdriverIO', () => {
  before(async () => {
    await browser.maximizeWindow();
    await browser.url('https://mskengageadmin-dev.mskcc.org/login');
  });

  it('Opens Login Page and ensures login controls presence', async () => {
    const loginTitle = await $('//h2[text()="Please login"]');

    expect(await loginTitle.getText()).toEqual('Please login');
    expect(await $('input[data-testid="input-login"]')).toBeDisplayed();
    expect(await $('input[data-testid="input-password"]')).toBeDisplayed();
    expect(await $('button[data-testid="login-button"]')).toBeDisplayed();
  });

  it('Validates mandatory fields', async () => {
    await $('button[data-testid="login-button"]').waitAndClick();
    const userNameError = await $('//p[text()="Username is required"]');
    const passwordError = await $('//p[text()="Password is required"]');

    expect(await userNameError.getText()).toEqual('Username is required');
    expect(await passwordError.getText()).toEqual('Password is required');
  });

  it('Entries the incorrect credentials', async () => {
    await $('input[data-testid="input-login"]').setValue('gfndfgnm');
    await $('input[data-testid="input-password"]').setValue('f');
    await $('button[data-testid="login-button"]').waitAndClick();
    await $('p[class="help-data"]').waitForDisplayed();
    const loginFailed = await $('p[class="help-data"]');

    expect(await loginFailed.getText()).toEqual('Login failed! Wrong username or password.');
  });

  it('Logs in to Admin UI', async () => {
    await $('input[data-testid="input-login"]').setValue('scherbv');
    await $('[class*="password-input"]').setValue('D1l9b2v01Wqwer');
    await $('//div/following-sibling::button').waitAndClick();

    expect(await $('//h1[contains(text(), "Users List")]')).toBeDisplayed();
  });

  it('Logs out from Admin UI', async () => {
    await $('//a[@href="/Login"]').waitAndClick();

    expect($('.login-form__wrapper')).toBeDisplayed();
  });
});

describe('Basic commands', () => {
  before(async () => {
    await $('input[data-testid="input-login"]').setValue('scherbv');
    await $('[class*="password-input"]').setValue('D1l9b2v01Wqwer');
    await $('//div/following-sibling::button').waitAndClick();
  });

  it('Existing questions are displayed on the Question Library page', async () => {
    await $('//a[@href="/QuestionLibrary"]').waitAndClick();
    await $('.page-content').waitForDisplayed();

    expect($$('//tbody/tr')).toBeDisplayed();
  });

  it('Validates Add New Question pop-up is opened', async () => {
    await $('//button[text()="Add New Question"]').click();

    expect($('.add-new-question')).toBeDisplayed();
  });

  it('Save button is disabled in Add New Question pop-up', async () => {
    expect($('//button[text()="Cancel"]/following-sibling::button')).toBeDisabled();
  });

  it('Changes are not saved after closing Add New Question pop-up', async () => {
    await $('div[data-testid="questionText"]').waitAndClick();
    await browser.keys('Test question VadimTest');
    await $('[data-testid="add-question-alias"]').setValue('Test question alias');
    await $('[data-testid="add-question-short-name"]').setValue('Test question shortname');
    await $('input[name="question-keywords"]').setValue('Test question shortname');
    await $('//button[text()="Cancel"]').waitAndClick();
    await $('//button[text()="Add New Question"]').waitAndClick();

    expect($('div[data-testid="questionText"] p')).toHaveText('');
    expect($('[data-testid="add-question-alias"]')).toHaveText('');
    expect($('[data-testid="add-question-short-name"]')).toHaveText('');
    expect($('input[name="question-keywords"]')).toHaveText('');
  });

  after(async () => {
    await browser.refresh();
  });
});

describe('Advanced commands', () => {
  it('Load spinner disappears after questions are loaded', async () => {
    await $('//a[@href="/QuestionLibrary"]').waitAndClick();
    await browser.waitUntil(
        async () => await $('.table-spinner').waitForDisplayed({reverse: true}),
        {timeout: 5000, interval: 600, timeoutMsg: 'not loaded'});

    expect($$('//tbody/tr')).toBeDisplayed();
  });

  it('Search button becomes gray', async () => {
    await $('.admin-btn-search').moveTo();
    await browser.pause(6000);
    const browserName = browser.capabilities.browserName;

    if (browserName === 'chrome') {
      const activeColorProperty = await $('.admin-btn-search').getCSSProperty('background-color');
      const jsonProperty= JSON.stringify(activeColorProperty);
      const activeColorValue = await JSON.parse(jsonProperty).value;

      expect(activeColorValue).toEqual('rgba(61,61,61,1)');
    } else if (browserName === 'firefox') {
      const activeColorProperty = await $('.admin-btn-search').getCSSProperty('background-color');
      const jsonProperty= JSON.stringify(activeColorProperty);
      const activeColorValue = await JSON.parse(jsonProperty).value;

      expect(activeColorValue).toEqual('rgb(61,61,61)');
    }
  });

  it('Validates user name in navigation bar', async () => {
    const userName = await $('li[title="Vadim Scherbakov"]');
    const text = await browser.execute((userName) => {
      return userName.textContent;
    }, userName);

    expect(text).toEqual('Hello, Vadim Scherbakov!');
  });
});
