import { expect,test } from '@playwright/test'
test('use baseURL',async({page})=>{
    await page.goto("/category/new-in-1484");
    expect( page.url()).toBe("https://www.savana.com/category/new-in-1484")
});