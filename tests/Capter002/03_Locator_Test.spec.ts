import {test , expect} from '@playwright/test'

test('find locator ', async({page})=>{

//getByRole
//await page.getByRole('link',{ name: 'Sign in'}).click();

//getByLabel
// try{
// await page.getByLabel('Homepage ',{exact :true} ).click();

// } catch(error){
//     console.error('element not found',error);
// };


//getByAltText-- Only for Img 
//await page.getByAltText("View BakkappaN's full-sized avatar").click();


await page.goto('https://github.com/BakkappaN/');


//getByRole -use this -> IMPORTANT  (25-27 ) NOT USE getByTestId FUNCTIONS ) 
const packagesTab = page.getByRole('link', { name: 'Packages' });
await expect(packagesTab).toBeVisible(); // Optional but recommended
  await packagesTab.click();
await expect(page).toHaveURL('https://github.com/BakkappaN?tab=packages');

//   Problem: This data-tab-item Value is Dynamic  , Notice the "i1repositories-tab" part — the i1 prefix is not stable. Tomorrow, it could be:
//    i2repositories-tab , i3repositories-tab , Depending on GitHub’s internal build or A/B testing setup.
//    This makes getByTestId() fragile when using GitHub's data-tab-item.
//   await page.getByTestId('i1repositories-tab').click(); (id - attribute also not working)

const res = page.getByRole('link', { name: 'Repositories' });
await expect(res).toBeVisible();
await res.click();
await expect(page).toHaveURL('https://github.com/BakkappaN?tab=repositories');
 
//getByText
//await page.getByText("signup").first().click();

//getByPlaceHolder, xpath, cssSelector
//by using getByPlaceHolder-locator we can use this 
//await page.getByPlaceholder('search').fill('TesterTalk');



// await page.locator('xpath=//*[@id="search-button-narrow"]').click();

// await page.locator('xpath=//*[@id="search-input"]').fill('Tarak Meheta ka ulta chasma');
// await page.keyboard.press('Enter');
})
 