import{test,expect} from '@playwright/test'

test('Get text and get attribute value in playwright',async({page}) =>{
    await page.goto('https://github.com/BakkappaN/');
    const name = await page.locator('//span[contains(text(), "Testers Talk")]').textContent();
//remove space by  trim method
const finalname = name?.trim();
    console.log(`name is :${finalname}`);
    expect(finalname).toBe('Testers Talk');

    const value = await page.getByTestId('repositories').first().getAttribute('data-selected-links');
    console.log(`attribute value  is : ${value}`);
}) 