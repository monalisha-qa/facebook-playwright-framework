import {test , expect} from '@playwright/test'

test('Multiple browser in playwright and typescript' ,async({page,browser}) =>{

    const context = await browser.newContext();
    const page2 = await context.newPage();

    await page2.goto('https://ibiza-stage-story-respect.firebaseapp.com/?lesson_id=LetsFlyLugLv4');
    await expect(page2.getByText('Ka tubuuke').nth(1)).toBeVisible();
    await page2.getByText('Ekinyonyi').click();
})