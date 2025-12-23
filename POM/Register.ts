//Playwright uses Page to control the browser tab.
import { Page } from '@playwright/test';

//This class represents your Register Page
export default class Register {
    

    //constructor receives the page from your test file.
    constructor (public page1 : Page){
    //class get the access to work on this page
}

    async firstName(fname : string){
    await this.page1.locator('#input-firstname').type(fname);
}

async lastName(lname : string){
    await this.page1.locator('#input-lastname').type(lname);
}

async email(mail : string){
    await this.page1.locator('#input-email').type(mail);
}

async phoneNumber(mobilenumber : string){
    await this.page1.locator('//input[@id="input-telephone"]').type(mobilenumber);
}

async password(pass : string){
    await this.page1.locator('#input-password').type(pass);
}

async confirmpassword(cpass : string){
    await this.page1.locator('#input-confirm').type(cpass);
}

  async isCheck(){
    return await this.page1.locator('#input-newsletter-no').isChecked();
} 

async tikTerms(){
    return await this.page1.locator('//label[contains(text(),"I have read and agree to the ")]');
} 

async continueBox(){
     
      return await this.page1.locator('//input[@id="input-agree"]').isChecked;
     
}  

}

