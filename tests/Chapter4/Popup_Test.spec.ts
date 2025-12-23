import {test, expect} from '@playwright/test'

test('Hnadle alert' , async({page}) =>{
    await page.goto('https://www.selenium.dev/documentation/webdriver/interactions/alerts/');

    await page.evaluate(() => {
    window.scrollBy(0, 400); // scrolls down 400 pixels
  });

    page.once('dialog', dialog =>{
    dialog.accept();
    console.log(`alert message :${dialog.message()}`);
    })

    await page.getByText('See an example alert' , {exact:true}).click();
    })

    test('Handle an confirm poup' , async({page}) =>{
    await page.goto('https://www.selenium.dev/documentation/webdriver/interactions/alerts/');

    await page.evaluate(() => {
    window.scrollBy(0, 400); // scrolls down 400 pixels
  });

    page.once('dialog', dialog =>{
      //Click on "OK" button on popup -- accept() 
    dialog.dismiss();
    //read the popup message
    console.log(`alert message :${dialog.message()}`);
    })

    await page.getByText('See a sample confirm' , {exact:true}).click();
    })


    test('Handle an prompt poup' , async({page}) =>{
    await page.goto('https://www.selenium.dev/documentation/webdriver/interactions/alerts/');

    await page.evaluate(() => {
    window.scrollBy(0, 400); // scrolls down 400 pixels
  });

    page.once('dialog', async(dialog) =>{
      //Click on "OK" button on popup with entering text in the blank fiels.-- accept() 
      console.log(`alert message :${dialog.message()}`);
    await dialog.accept('Playwright');
    //read the popup message
    
    })

    await page.getByText('See a sample prompt' , {exact:true}).click();
    })

    