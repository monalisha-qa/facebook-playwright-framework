import { Page } from "playwright/test";
export default class Forgottenpassword {
    constructor(public page : Page){
}

async enterEmail(email :string){
    await this.page.locator('#input-email').type(email);
}

async clickcontinue(){
    await this.page.click('//button[contains(text(),"Continue")]');
}
}