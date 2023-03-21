describe('Practical Task_Introduction to WebdriverIO', () => {
  it('opens Login Page and ensures login controls presence', async () => {
    await browser.url('https://mskengageadmin-dev.mskcc.org/login');
    const loginTitle = await $('//h2[text()="Please login"]');

    expect(await loginTitle.getText()).toEqual('Please login');
    expect(await $('input[data-testid="input-login"]')).toBeDisplayed();
    expect(await $('input[data-testid="input-password"]')).toBeDisplayed();
    expect(await $('button[data-testid="login-button"]')).toBeDisplayed();
  });

  it('validates mandatory fields', async () => {
    await $('button[data-testid="login-button"]').click();
    const userNameError = await $('//p[text()="Username is required"]');
    const passwordError = await $('//p[text()="Password is required"]');

    expect(await userNameError.getText()).toEqual('Username is required');
    expect(await passwordError.getText()).toEqual('Password is required');
  });

  it('entries the incorrect credentials', async () => {
    await $('input[data-testid="input-login"]').setValue('gfndfgnm');
    await $('input[data-testid="input-password"]').setValue('f');
    await $('button[data-testid="login-button"]').click();
    const loginFailed = await $('p[class = "help-data"]');

    expect(await loginFailed.getText()).toEqual('Login failed! Wrong username or password.');
  });

  it('logs in to Admin UI', async () => {
    await $('input[data-testid="input-login"]').setValue('scherbv');
    await $('[class*="password-input"]').setValue('D1l9b2v01Wqwer');
    await $('//div/following-sibling::button').click();

    expect(await $('//h1[contains(text(), "Users List")]')).toBeDisplayed();
  });

  it('logs out from Admin UI', async () => {
    await $('//a[@href="/Login"]').click();

    expect($('form[class="login-form__wrapper"]')).toBeDisplayed();
  });
});
