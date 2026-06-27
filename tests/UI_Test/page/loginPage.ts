import { Page, Locator }   from "@playwright/test";
import { BasePage } from "./basePage";

export class LoginPage extends BasePage{
    readonly my_account_btn : Locator;
    readonly email_box: Locator;
    readonly password_box: Locator;
    readonly submit_btn: Locator;


    constructor(page: Page){
        super(page)
    this.my_account_btn = page.getByRole('button',{ name: 'My account' });
    this.email_box = page.getByPlaceholder('E-Mail Address');
    this.password_box = page.getByPlaceholder('Password');
    this.submit_btn = page.locator('input:has-text("Login")');  
}

async navigateTo(url: string){
    await this.page.goto(url);      
}

async clickOnMyAccount(){
    await this.my_account_btn.click();
}

async enterEmailAddress(emailAddress: string){
    await this.email_box.fill(emailAddress);
}

async enterPassword(password: string){
    await this.password_box.fill(password);
}

async clickOnSubmitButton(){
    await this.submit_btn.click();
}
}