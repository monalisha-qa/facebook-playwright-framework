import {test , expect} from '@playwright/test'

test('use locators' ,async({page}) =>{

    await page.goto('https://ibiza-stage-story-respect.firebaseapp.com/?lesson_id=LetsFlyLugLv4',{timeout:5000});
    await expect(page.getByText('Ka tubuuke').nth(1)).toBeVisible();
    await page.getByText('Ekinyonyi').click({timeout:5000});
})