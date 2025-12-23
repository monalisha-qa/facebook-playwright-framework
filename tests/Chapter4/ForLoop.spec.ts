import{test,expect} from '@playwright/test'

test('Get text and get attribute value in playwright',async({page}) =>{
    await page.goto('https://github.com/BakkappaN/');
    
   const RepoLink =  await page.$$('.repo'); // $$ - because we want all elements not one
   for(const repositorie of RepoLink){
  const text =  await repositorie.textContent();
console.log(`values : ${text} `)

   }
console.log('-----------');

   const repolink2 = await page.locator(`.repo`);
   const countLink = await repolink2.count();
   for(let index = 0 ; index < countLink ; index ++){
     const text =  await repolink2.nth(index).textContent();
     console.log(`values : ${text} `)
   }
   
}) 