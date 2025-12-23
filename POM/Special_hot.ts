import { strict } from "assert";
import { expect, Page } from "playwright/test";

export default class Special_hot {
    constructor(public page : Page){
        }

      async clickOnDesktop(){
         await this.page.locator('//a[contains(text(),"Desktops (75)")]').click();
        }

       async mouseHover (){
           await this.page.hover('(//div[@class="product-thumb"])[2]',{strict :false});//if multiple options it got it will give strict Violence error(It willl fail)
      await this.page.locator('(//span[contains(text(),"Add to Cart")]/..)[2]')
       

        }
async tostVisiable(){
      const tost =   await this.page.locator('//a[contains(@href, "route=checkout/cart")]');
        await tost.waitFor({state :"visible"});
        return tost;

        await expect(this.page).toHaveURL("https://ecommerce-playground.lambdatest.io/index.php?route=checkout/cart");

}
    }