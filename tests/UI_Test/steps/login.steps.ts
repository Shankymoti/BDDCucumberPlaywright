import { expect } from '@playwright/test';
import { createBdd } from 'playwright-bdd';

const { Given, When, Then } = createBdd();

Given('I navigate to {string}', async ({page}, url) => {
  await page.goto(url);
});

Given('I click on My account', async ({page}) => {
 await page.getByRole('button',{ name: 'My account' }).click();
});

Given('I enter E-Mail Address {string}', async ({page}, emailAddress) => {
  await page.getByPlaceholder('E-Mail Address').fill(emailAddress);
});

Given('I enter password {string}', async ({page}, password) => {
await page.getByPlaceholder('Password').fill(password);
});

When('I click on submit button', async ({page}) => {
 await page.locator('input:has-text("Login")').click();
});

Then('I should verify url contains {string}', async ({page}, logged_Url) => {
 await expect(page).toHaveURL(new RegExp(logged_Url));
});

Then('I should verify user is not able to login and url contains {string}', async ({page}, unnlogged_url) => {
  await expect(page).toHaveURL(new RegExp(unnlogged_url));
});