import {test , expect} from '@playwright/test';
test('handling iframe throughdrag_and_drop' ,async({page})=>{

 //iframe drag and drop
 await page.goto('https://jqueryui.com/droppable/',{waitUntil:'networkidle'});
const iframe = page.frameLocator('[class="demo-frame"]');
 const DragElement = iframe.locator('[id="draggable"]');
const DropElement = iframe.locator('[id="droppable"]');

await DragElement.dragTo(DropElement);

})

