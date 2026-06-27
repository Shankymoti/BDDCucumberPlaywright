import { expect } from '@playwright/test';
import { createBdd } from 'playwright-bdd';
import {test} from '../fixture/fixtures'


const { Given, When, Then } = createBdd(test);

Given('I navigate to {string}', async ({loginPage}, url) => {
 await loginPage.navigateTo(url)
});

Given('I click on My account', async ({loginPage}) => {
await loginPage.clickOnMyAccount();
});

Given('I enter E-Mail Address {string}', async ({loginPage}, emailAddress) => {
 await loginPage.enterEmailAddress(emailAddress);
});

Given('I enter password {string}', async ({loginPage}, password) => {
await loginPage.enterPassword(password)
});

When('I click on submit button', async ({loginPage}) => {
await loginPage.clickOnSubmitButton()
});

Then('I should verify url contains {string}', async ({page}, logged_Url) => {
 await expect(page).toHaveURL(new RegExp(logged_Url));
});

Then('I should verify user is not able to login and url contains {string}', async ({page}, unnlogged_url) => {
  await expect(page).toHaveURL(new RegExp(unnlogged_url));
});