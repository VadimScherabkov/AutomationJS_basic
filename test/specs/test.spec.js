describe('Practical Task_Introduction to WebdriverIO', () => {
  it('validate Login Page', async () => {
    await browser.url('https://mskengageadmin-dev.mskcc.org/login');
    const loginTitle = await $('//h2[text()="Please login"]');

    expect(await loginTitle.getText()).toEqual('Please login');
    expect(await $('input[data-testid="input-login"]')).isDisplayed;
    expect(await $('input[data-testid="input-password"]')).isDisplayed;
    expect(await $('button[data-testid="login-button"]')).isDisplayed;
  });

  it('username and password are mandatory', async () => {
    await $('button[data-testid="login-button"]').click();
    const userNameError = await $('//p[text()="Username is required"]');
    const passwordError = await $('//p[text()="Password is required"]');

    expect(await userNameError.getText()).toEqual('Username is required');
    expect(await passwordError.getText()).toEqual('Password is required');
  });

  it('incorrect credentials', async () => {
    await $('input[data-testid="input-login"]').setValue('gfndfgnm');
    await $('input[data-testid="input-password"]').setValue('f');
    await $('button[data-testid="login-button"]').click();

    const loginFailed = await $('p[class = "help-data"]');

    expect(await loginFailed.getText()).toEqual('Login failed! Wrong username or password.');
  });

  it('log in to Admin UI', async () => {
    await $('input[data-testid="input-login"]').setValue('scherbv');
    await $('input[data-testid="input-password"]').setValue('D1l9b2v01Wqwer');
    await $('button[data-testid="login-button"]').click();

    expect(await $('//h1[text()="Users List"]')).isDisplayed;
  });

  it('log out from Admin UI', async () => {
    await $('li[class="main-nav__logout-btn"] a').click();

    expect($('form[class="login-form__wrapper"]')).isDisplayed;
  });
});
