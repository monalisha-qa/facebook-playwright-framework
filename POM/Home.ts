import { Page } from "playwright/test";

export default class Home{
    constructor(public page : Page){
        }

        async clickOnSpectialHot(){
            await this.page.locator('(//span[contains(text()," Special")])[2]').click();
        }

        
}