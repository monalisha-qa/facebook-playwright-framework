import {test , expect} from '@playwright/test'

test('MouseAction',async({page})=>{
    await page.goto('https://www.youtube.com/@testerstalk',{waitUntil:'networkidle'});
await page.locator('[tab-title="Videos"]').click({button:'left'});

//await page.locator('[tab-title="Posts"]').click({button:'middle'});

await page.locator('[tab-title="Posts"]').click({button:'right'});

//Mouse hover
await page.getByLabel('Search with your voice').hover();

//double click on the element
await page.getByLabel('Search with your voice').dblclick();



})