import { test as setup } from '@playwright/test';


  setup('Save Authentication State for test', async ({ page }) => {
    await page.goto(process.env.BASEURL)
	await page.click("#login2")
	await page.fill('#loginusername', 'pavan.testuser1@clarku.edu');
	await page.fill('#loginpassword', 'Pavan@testuser1');
	await page.locator('[onclick="logIn()"]').click();
	await page.context().storageState({path: '.auth/testinfo.json'})
  });

//   setup('Save Authentication State for test1', async ({ page }) => {
//     await page.goto("https://demoblaze.com/")
// 	await page.click("#login2")
// 	await page.fill('#loginusername', 'test1');
// 	await page.fill('#loginpassword', 'test1');
// 	await page.locator('[onclick="logIn()"]').click();
// 	await page.context().storageState({path: '.auth/test1info.json'})
	
//   });
  
//    setup('Save Authentication State for test2', async ({ page }) => {
//     await page.goto("https://demoblaze.com/")
// 	await page.click("#login2")
// 	await page.fill('#loginusername', 'test2');
// 	await page.fill('#loginpassword', 'test2');
// 	await page.locator('[onclick="logIn()"]').click();
// 	await page.context().storageState({path: '.auth/test2info.json'})
	
//   });