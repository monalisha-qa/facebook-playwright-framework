import { Page } from "playwright/test";
export default class Login {
    constructor(public page : Page){
}

async login(email : string , password:string){
   await this.enterEmail(email);
await this.password(password); 
}
async enterEmail(email :string){
    await this.page.locator('#input-email').type(email);
}

async password(pass1 :string){
    await this.page.locator('#input-password').type(pass1);
}

async clickforgottenpassword(){
    await this.page.locator('(//a[contains(text(),"Forgotten Password")])[1]').click();
}

async clicklogin(){
    await Promise.all([
        this.page.waitForNavigation(),
        this.page.click('//input[@value="Login"]')
    ])
}
}