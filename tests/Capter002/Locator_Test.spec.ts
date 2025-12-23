import {test , expect} from '@playwright/test'

test('use locators' ,async({page}) =>{

    await page.goto('https://ibiza-stage-story-respect.firebaseapp.com/?lesson_id=LetsFlyLugLv4');
    await expect(page.getByText('Ka tubuuke').nth(1)).toBeVisible();
    await page.getByText('Ekinyonyi').click();
    await page.getByTitle("CSS=div[text()='Enkazaluggya']");
    await page.locator('xpath=//button[@class="splide__arrow splide__arrow--next"]').click();

}
 

)